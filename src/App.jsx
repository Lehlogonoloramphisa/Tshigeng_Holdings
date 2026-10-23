import { Toaster } from '@/components/ui/toaster';
import { QueryClientProvider } from '@tanstack/react-query';
import { MotionConfig } from 'framer-motion';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import Layout from './components/layout/Layout';
import Seo from './components/seo/Seo';
import { locationLandingPages, serviceLandingPages } from './data/seoLandingPages';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceLanding from './pages/ServiceLanding';
import LocationLanding from './pages/LocationLanding';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsOfUse from './pages/TermsOfUse';
import SecurityPolicy from './pages/SecurityPolicy';

export const prerenderRoutePaths = [
  '/',
  '/about',
  '/services',
  ...Object.keys(serviceLandingPages),
  ...Object.keys(locationLandingPages),
  '/contact',
  '/privacy-policy',
  '/cookie-policy',
  '/terms-of-use',
  '/security',
];

export function AppRoutes() {
  return (
    <>
      <Seo />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {Object.entries(serviceLandingPages).map(([path, page]) => (
            <Route key={path} path={path} element={<ServiceLanding page={page} />} />
          ))}
          {Object.entries(locationLandingPages).map(([path, page]) => (
            <Route key={path} path={path} element={<LocationLanding page={page} />} />
          ))}
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/security" element={<SecurityPolicy />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <MotionConfig reducedMotion="user">
        <Router>
          <AppRoutes />
        </Router>
      </MotionConfig>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
