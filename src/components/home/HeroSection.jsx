import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CalendarDays, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-primary">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          role="presentation"
          width="1600"
          height="900"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
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
              Cleaning, hygiene & pest control support
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]"
          >
            Practical care for{' '}
            <span className="text-highlight-yellow">cleaner, healthier</span>{' '}
            spaces
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-base md:text-lg text-white/80 font-body leading-relaxed max-w-lg"
          >
            Tshigeng Holdings offers commercial cleaning, hygiene equipment and refills, commercial and industrial pest control, and cleaning materials. Tell us about your site and requirements to discuss the right service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-accent px-8 py-6 text-base font-body font-semibold text-accent-foreground shadow-2xl shadow-accent/30 transition-all duration-300 hover:bg-accent/90 hover:shadow-accent/40"
            >
              <Link to="/contact">
                Request a Service
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="px-6 py-6 text-base font-body font-medium text-white hover:bg-white/10 hover:text-white"
            >
              <Link to="/services">
                <Play className="w-5 h-5 mr-2" />
                Explore Services
              </Link>
            </Button>
          </motion.div>

          {/* Verified business details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 flex flex-wrap gap-6"
          >
            {[
              { label: 'Established 2011', icon: CalendarDays },
              { label: 'Irene, Centurion', icon: MapPin },
              { label: 'Serving Gauteng and South Africa', icon: MapPin },
            ].map(({ label, icon: Icon }) => (
              <div key={label} className="flex items-center gap-2 text-white/70">
                <Icon className="w-4 h-4 text-accent" aria-hidden="true" />
                <span className="text-xs font-body font-medium tracking-wider uppercase">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
