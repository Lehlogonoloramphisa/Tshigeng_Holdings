import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StaticRouter } from 'react-router-dom/server.js';
import { createServer } from 'vite';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outputRoot = path.join(projectRoot, 'dist');
const templatePath = path.join(outputRoot, 'index.html');

function escapeAttribute(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function setMeta(html, attribute, name, content) {
  const escapedName = escapeRegExp(name);
  const expression = new RegExp(
    `<meta\\b(?=[^>]*\\b${attribute}\\s*=\\s*["']${escapedName}["'])[^>]*>`,
    'i',
  );
  const tag = `<meta ${attribute}="${escapeAttribute(name)}" content="${escapeAttribute(content)}" />`;
  return expression.test(html)
    ? html.replace(expression, tag)
    : html.replace('</head>', `    ${tag}
  </head>`);
}

function setLink(html, rel, href) {
  const expression = new RegExp(`<link\\b(?=[^>]*\\brel\\s*=\\s*["']${rel}["'])[^>]*>`, 'i');
  const tag = `<link rel="${rel}" href="${escapeAttribute(href)}" />`;
  return expression.test(html)
    ? html.replace(expression, tag)
    : html.replace('</head>', `    ${tag}
  </head>`);
}

function buildPageHtml(template, body, metadata, structuredData) {
  let html = template.replace(/<title>[^<]*<\/title>/i, `<title>${escapeAttribute(metadata.title)}</title>`);
  html = setMeta(html, 'name', 'description', metadata.description);
  html = setMeta(html, 'name', 'robots', metadata.robots);
  html = setMeta(html, 'property', 'og:title', metadata.title);
  html = setMeta(html, 'property', 'og:description', metadata.description);
  html = setMeta(html, 'property', 'og:url', metadata.canonical);
  html = setMeta(html, 'property', 'og:image', metadata.image);
  html = setMeta(html, 'name', 'twitter:title', metadata.title);
  html = setMeta(html, 'name', 'twitter:description', metadata.description);
  html = setMeta(html, 'name', 'twitter:image', metadata.image);
  html = setLink(html, 'canonical', metadata.canonical);

  const jsonLd = JSON.stringify(structuredData).replaceAll('<', '\\u003c');
  const schemaTag = `<script id="structured-data" type="application/ld+json">${jsonLd}</script>`;
  const schemaPattern = /<script\b[^>]*id=["']structured-data["'][^>]*>[\s\S]*?<\/script>/i;
  html = schemaPattern.test(html)
    ? html.replace(schemaPattern, schemaTag)
    : html.replace('</head>', `    ${schemaTag}
  </head>`);

  html = html.replace(/\s*<meta\b[^>]*name=["']keywords["'][^>]*>/i, '');

  return html.replace(/<div id=["']root["']>\s*<\/div>/i, `<div id="root">${body}</div>`);
}

const vite = await createServer({
  root: projectRoot,
  configFile: path.join(projectRoot, 'vite.config.js'),
  logLevel: 'error',
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  const appModule = await vite.ssrLoadModule('/src/App.jsx');
  const seoModule = await vite.ssrLoadModule('/src/components/seo/Seo.jsx');
  const toasterModule = await vite.ssrLoadModule('/src/components/ui/toaster.jsx');
  const template = await readFile(templatePath, 'utf8');

  function renderPage(routePath) {
    const appTree = React.createElement(
      QueryClientProvider,
      { client: new QueryClient() },
      React.createElement(
        StaticRouter,
        { location: routePath },
        React.createElement(appModule.AppRoutes),
      ),
      React.createElement(toasterModule.Toaster),
    );

    return renderToString(appTree);
  }

  const indexableUrls = [];
  for (const routePath of appModule.prerenderRoutePaths) {
    const body = renderPage(routePath);
    const metadata = seoModule.getSeoMetadata(routePath);
    const schema = seoModule.getStructuredData(routePath);
    const relativePath = routePath === '/' ? 'index.html' : `${routePath.slice(1)}.html`;
    const destination = path.join(outputRoot, relativePath);
    await mkdir(path.dirname(destination), { recursive: true });
    await writeFile(destination, buildPageHtml(template, body, metadata, schema), 'utf8');

    if (!metadata.robots.includes('noindex')) {
      indexableUrls.push(metadata.canonical);
    }
  }

  const notFoundBody = renderPage('/__not-found__');
  const notFoundMetadata = seoModule.getSeoMetadata('/__not-found__');
  const notFoundHtml = buildPageHtml(
    template,
    notFoundBody,
    notFoundMetadata,
    seoModule.getStructuredData('/__not-found__'),
  );
  await writeFile(path.join(outputRoot, '404.html'), notFoundHtml, 'utf8');

  const sitemapEntries = indexableUrls
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;
  await writeFile(path.join(outputRoot, 'sitemap.xml'), sitemap, 'utf8');
  console.log(`Prerendered ${appModule.prerenderRoutePaths.length} routes and generated sitemap.xml.`);
} finally {
  await vite.close();
}
