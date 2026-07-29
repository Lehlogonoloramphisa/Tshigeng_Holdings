import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+27727006135" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5" />
              +27 72 700 6135
            </a>
            <a href="mailto:tshigeng.buti@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5" />
              tshigeng.buti@gmail.com
            </a>
          </div>
          <span className="font-body text-xs tracking-wider opacity-80">
            3 Saltus Street, Galloway Estate, Irene, Centurion
          </span>
        </div>
      </div>

      {/* Main nav */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border'
            : 'bg-background/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="https://media.base44.com/images/public/6a0b89c12b62c237ea23ea47/d8d1d8c2a_tshigeng-holdings-logo.png"
              alt="Tshigeng Holdings"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium font-body transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden lg:block">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all duration-300">
                Get a Quote
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed top-[72px] left-0 right-0 z-40 bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-base font-medium font-body transition-all ${
                      location.pathname === link.path
                        ? 'text-primary bg-primary/5'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-3">
                <Link to="/contact">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold">
                    Get a Quote
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
              <div className="pt-3 space-y-2 text-sm text-muted-foreground">
                <a href="tel:+27727006135" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> +27 72 700 6135
                </a>
                <a href="mailto:tshigeng.buti@gmail.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> tshigeng.buti@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
