import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LOGO_URL = 'https://media.base44.com/images/public/6a0b89c12b62c237ea23ea47/d8d1d8c2a_tshigeng-holdings-logo.png';

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Tshigeng Holdings corporate campus" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-secondary/85 to-secondary/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-highlight-yellow animate-pulse" />
            <span className="text-xs font-body font-medium text-white/90 tracking-wider uppercase">
              Established 2011 | CK No: 2011/056260/23
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]"
          >
            Pest Control,{' '}
            <span className="text-highlight-yellow">Cleaning</span>{' '}
            & Hygiene Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-white/80 font-body leading-relaxed max-w-lg"
          >
            Tshigeng Holdings is a leading provider of pest control, cleaning and hygiene services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold text-base px-8 py-6 shadow-2xl shadow-accent/30 hover:shadow-accent/40 transition-all duration-300"
              >
                Request a Service
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="ghost"
                className="text-white hover:text-white hover:bg-white/10 font-body font-medium text-base px-6 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                Explore Services
              </Button>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-6"
          >
            {[
              { label: 'National Footprint' },
              { label: 'SAPCA Registered' },
              { label: 'Customer First' },
            ].map(({ label }) => (
              <div key={label} className="flex items-center gap-2 text-white/70">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-xs font-body font-medium tracking-wider uppercase">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.img
        src={LOGO_URL}
        alt="Tshigeng Holdings"
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="absolute right-6 top-8 z-10 hidden w-auto max-w-[34vw] rounded-lg bg-white/90 px-5 py-4 shadow-2xl shadow-black/25 md:right-12 md:top-12 md:block md:h-28 lg:right-20 lg:h-36 xl:h-44"
      />

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
