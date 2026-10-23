import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  landingPageMeta,
  locationLandingPages,
  serviceLandingPages,
} from '@/data/seoLandingPages';
import { serviceImages } from '@/data/serviceImages';

export const SITE_URL = 'https://www.tshigengholdings.co.za';
export const SITE_NAME = 'Tshigeng Holdings';
export const BUSINESS_LOGO =
  'https://media.base44.com/images/public/6a0b89c12b62c237ea23ea47/d8d1d8c2a_tshigeng-holdings-logo.png';

const pageMeta = {
  '/': {
    title: 'Tshigeng Holdings | Cleaning & Pest Control in Centurion',
    image: serviceImages.cleaningDesk,
    description:
      'Tshigeng Holdings provides commercial cleaning, hygiene services, pest control, and cleaning supplies in Centurion, Pretoria, and Gauteng.',
  },
  '/about': {
    title: 'About Tshigeng Holdings | Cleaning & Hygiene in Gauteng',
    image: serviceImages.cleaningDesk,
    description:
      'Tshigeng Holdings, established in 2011 and based in Irene, Centurion, offers commercial cleaning, hygiene services, cleaning materials, and commercial and industrial pest control.',
  },
  '/services': {
    title: 'Commercial Cleaning, Hygiene & Pest Control | Tshigeng Holdings',
    image: serviceImages.commercialCleaning,
    description:
      'Explore commercial cleaning, deep cleaning, hygiene equipment and refills, pest control, and cleaning supplies from Tshigeng Holdings.',
  },
  '/contact': {
    title: 'Contact Tshigeng Holdings | Request a Service Quote',
    description:
      'Contact Tshigeng Holdings about commercial cleaning, pest control, hygiene equipment and refills, or cleaning materials. Call or email to discuss your enquiry.',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Tshigeng Holdings',
    description: 'Read the Tshigeng Holdings privacy policy.',
    robots: 'noindex, follow',
  },
  '/cookie-policy': {
    title: 'Cookie Policy | Tshigeng Holdings',
    description: 'Read the Tshigeng Holdings cookie policy.',
    robots: 'noindex, follow',
  },
  '/terms-of-use': {
    title: 'Terms of Use | Tshigeng Holdings',
    description: 'Read the Tshigeng Holdings website terms of use.',
    robots: 'noindex, follow',
  },
  '/security': {
    title: 'Security Policy | Tshigeng Holdings',
    description: 'Read the Tshigeng Holdings website security policy.',
    robots: 'noindex, follow',
  },
  ...landingPageMeta,
};

const businessId = `${SITE_URL}/#business`;
const websiteId = `${SITE_URL}/#website`;

const businessSchema = {
  '@type': 'LocalBusiness',
  '@id': businessId,
  name: SITE_NAME,
  legalName: 'Tshigeng Holdings CC',
  url: `${SITE_URL}/`,
  logo: BUSINESS_LOGO,
  image: BUSINESS_LOGO,
  telephone: '+27727006135',
  email: 'tshigeng.buti@gmail.com',
  foundingDate: '2011',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3 Saltus Street, Galloway Estate, Irene',
    addressLocality: 'Centurion',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Gauteng' },
    { '@type': 'Country', name: 'South Africa' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+27727006135',
    email: 'tshigeng.buti@gmail.com',
    contactType: 'customer service',
    areaServed: 'ZA',
    availableLanguage: 'English',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cleaning, hygiene and pest control services',
    itemListElement: [
      'Pest control',
      'Commercial cleaning',
      'Deep cleaning',
      'Washroom hygiene and sanitation',
      'Cleaning supplies and materials',
      'Hygiene equipment installation and refills',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name },
    })),
  },
};

const websiteSchema = {
  '@type': 'WebSite',
  '@id': websiteId,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  publisher: { '@id': businessId },
  inLanguage: 'en-ZA',
};

export function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '');
}

export function getSeoMetadata(pathname) {
  const path = normalizePath(pathname);
  const meta = pageMeta[path] || {
    title: `Page Not Found | ${SITE_NAME}`,
    description: 'The requested Tshigeng Holdings page could not be found.',
    robots: 'noindex, follow',
  };

  return {
    ...meta,
    path,
    canonical: path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`,
    robots: meta.robots || 'index, follow',
    image: new URL(meta.image || BUSINESS_LOGO, SITE_URL).toString(),
  };
}

export function getStructuredData(pathname) {
  const meta = getSeoMetadata(pathname);
  const servicePage = serviceLandingPages[meta.path];
  const locationPage = locationLandingPages[meta.path];
  const page = servicePage || locationPage;
  const pageId = `${meta.canonical}#webpage`;

  const graph = [
    businessSchema,
    websiteSchema,
    {
      '@type': 'WebPage',
      '@id': pageId,
      name: meta.title,
      description: meta.description,
      url: meta.canonical,
      isPartOf: { '@id': websiteId },
      about: { '@id': businessId },
      inLanguage: 'en-ZA',
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: meta.image,
      },
    },
  ];

  if (page) {
    graph.push({
      '@type': 'Service',
      '@id': `${meta.canonical}#service`,
      name: page.title,
      description: page.description,
      serviceType: page.service || page.title,
      provider: { '@id': businessId },
      areaServed: locationPage
        ? [
            { '@type': 'Place', name: locationPage.location },
            ...(locationPage.nearbyAreas || []).map((name) => ({ '@type': 'Place', name })),
            { '@type': 'AdministrativeArea', name: 'Gauteng' },
          ]
        : [
            { '@type': 'AdministrativeArea', name: 'Gauteng' },
            { '@type': 'Country', name: 'South Africa' },
          ],
      mainEntityOfPage: { '@id': pageId },
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!content) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
}

export default function Seo() {
  const location = useLocation();

  useEffect(() => {
    const meta = getSeoMetadata(location.pathname);
    document.title = meta.title;

    setMeta('name', 'description', meta.description);
    setMeta('name', 'robots', meta.robots);
    setMeta('name', 'author', SITE_NAME);
    setMeta('name', 'theme-color', '#2a945d');
    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', meta.canonical);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'en_ZA');
    setMeta('property', 'og:image', meta.image);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    setMeta('name', 'twitter:image', meta.image);
    setLink('canonical', meta.canonical);

    let schemaScript = document.getElementById('structured-data');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'structured-data';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(getStructuredData(location.pathname));
  }, [location.pathname]);

  return null;
}
