import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight, ChevronRight } from 'lucide-react';

const quickLinks = [
  { label: 'About Us', path: '/about' },
  { label: 'Our Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

const serviceLinks = [
  { label: 'Pest Control', path: '/pest-control' },
  { label: 'Cleaning Services', path: '/cleaning-services' },
  { label: 'Hygiene Services', path: '/hygiene-services' },
  { label: 'Cleaning Supplies', path: '/cleaning-supplies' },
];

const legalLinks = [
  { label: 'Privacy Policy', path: '/privacy-policy' },
  { label: 'Cookie Policy', path: '/cookie-policy' },
  { label: 'Terms of Use', path: '/terms-of-use' },
  { label: 'Security', path: '/security' },
];

export default function Footer() {
  return (
    <footer className="bg-footer-green text-primary-foreground">
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold">
              Ready to elevate your facility operations?
            </h3>
            <p className="text-primary-foreground/70 mt-2 font-body">
              Let's discuss how Tshigeng Holdings can support your hygiene, cleaning, pest control, or supply needs.
            </p>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-body font-semibold hover:bg-accent/90 transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30"
          >
            Contact Us
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img
                src="https://media.base44.com/images/public/6a0b89c12b62c237ea23ea47/d8d1d8c2a_tshigeng-holdings-logo.png"
                alt="Tshigeng Holdings"
                className="h-16 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm text-primary-foreground/70 font-body leading-relaxed">
              Established in 2011, Tshigeng Holdings delivers facilities management, hygiene, pest control, commercial and industrial cleaning, and cleaning material supply across South Africa.
            </p>
          </div>

          <div>
            <h5 className="font-body text-sm font-semibold tracking-wider uppercase text-accent mb-6">
              Quick Links
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-body flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-body text-sm font-semibold tracking-wider uppercase text-accent mb-6">
              Services
            </h5>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-body flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-body text-sm font-semibold tracking-wider uppercase text-accent mb-6">
              Contact
            </h5>
            <ul className="space-y-4">
              <li>
                <a href="tel:+27727006135" className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors font-body">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>+27 72 700 6135</div>
                </a>
              </li>
              <li>
                <a href="mailto:tshigeng.buti@gmail.com" className="flex items-center gap-3 text-sm text-primary-foreground/70 hover:text-accent transition-colors font-body">
                  <Mail className="w-4 h-4 shrink-0" />
                  tshigeng.buti@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70 font-body">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <div>
                  3 Saltus Street, Galloway Estate<br />
                  Irene, Centurion, Pretoria
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-body text-sm font-semibold tracking-wider uppercase text-accent mb-6">
              Legal
            </h5>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors font-body flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50 font-body">
            &copy; {new Date().getFullYear()} Tshigeng Holdings. CK No: 2011/056260/23. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-primary-foreground/50 font-body">
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">Privacy</Link>
            <Link to="/cookie-policy" className="hover:text-accent transition-colors">Cookies</Link>
            <Link to="/terms-of-use" className="hover:text-accent transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
