import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://tshigengholdings.co.za';
const SITE_NAME = 'Tshigeng Holdings';
const DEFAULT_IMAGE = `${SITE_URL}/favicon.png`;

const pageMeta = {
  '/': {
    title: 'Tshigeng Holdings | Pest Control, Cleaning & Hygiene Services in South Africa',
    description:
      'Tshigeng Holdings provides pest control, hygiene services, commercial cleaning, residential cleaning, and cleaning material supply across South Africa.',
    keywords:
      'Tshigeng Holdings, pest control South Africa, pest control Centurion, cleaning services Pretoria, hygiene services South Africa, commercial cleaning, cleaning materials',
  },
  '/about': {
    title: 'About Tshigeng Holdings | Facilities Services Since 2011',
    description:
      'Learn about Tshigeng Holdings, a South African facilities services company established in 2011 with mission, vision, and core values focused on reliable service.',
    keywords:
      'about Tshigeng Holdings, facilities services South Africa, black empowered company, facility management company',
  },
  '/services': {
    title: 'Pest Control, Cleaning & Hygiene Services | Tshigeng Holdings',
    description:
      'Explore Tshigeng Holdings services including hygiene equipment, pest control, commercial cleaning, residential cleaning, and cleaning material supply.',
    keywords:
      'pest control services, hygiene services, commercial cleaning, residential cleaning, cleaning materials, facility services South Africa',
  },
  '/contact': {
    title: 'Contact Tshigeng Holdings | Request a Facility Services Quote',
    description:
      'Contact Tshigeng Holdings for pest control, hygiene, cleaning, and cleaning material enquiries across South Africa.',
    keywords:
      'contact Tshigeng Holdings, facility services quote, pest control quote, cleaning services quote, hygiene services quote',
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
};

const businessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE_NAME,
  legalName: 'Tshigeng Holdings CC',
  url: SITE_URL,
  logo: DEFAULT_IMAGE,
  image: DEFAULT_IMAGE,
  telephone: '+27727006135',
  email: 'tshigeng.buti@gmail.com',
  foundingDate: '2011',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '3 Saltus Street, Galloway Estate',
    addressLocality: 'Irene, Centurion',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
  areaServed: {
    '@type': 'Country',
    name: 'South Africa',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Facility Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pest Control' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hygiene Services' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Cleaning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Cleaning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cleaning Materials' } },
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: {
      '@type': 'ImageObject',
      url: DEFAULT_IMAGE,
    },
  },
};

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.replace(/\/+$/, '');
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
    const path = normalizePath(location.pathname);
    const meta = pageMeta[path] || {
      title: `Page Not Found | ${SITE_NAME}`,
      description: 'The requested Tshigeng Holdings page could not be found.',
      robots: 'noindex, follow',
    };
    const canonical = `${SITE_URL}${path === '/' ? '/' : path}`;
    const robots = meta.robots || 'index, follow';

    document.title = meta.title;
    setMeta('name', 'description', meta.description);
    setMeta('name', 'keywords', meta.keywords);
    setMeta('name', 'robots', robots);
    setMeta('name', 'author', SITE_NAME);
    setMeta('name', 'theme-color', '#2a945d');
    setMeta('name', 'geo.region', 'ZA-GP');
    setMeta('name', 'geo.placename', 'Irene, Centurion');

    setMeta('property', 'og:title', meta.title);
    setMeta('property', 'og:description', meta.description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:url', canonical);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'en_ZA');
    setMeta('property', 'og:image', DEFAULT_IMAGE);

    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', meta.title);
    setMeta('name', 'twitter:description', meta.description);
    setMeta('name', 'twitter:image', DEFAULT_IMAGE);

    setLink('canonical', canonical);

    let schemaScript = document.getElementById('structured-data');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'structured-data';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify([businessSchema, websiteSchema]);
  }, [location.pathname]);

  return null;
}
