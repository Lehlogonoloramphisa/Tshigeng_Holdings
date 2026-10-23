import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-brand-gradient p-12 md:p-20"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-support-green rounded-full blur-3xl opacity-10 translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="inline-block text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4">
              Let's Work Together
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Make Your Facility the Best Place to Work, Visit, and Thrive
            </h2>
            <p className="mt-6 text-base md:text-lg font-body text-white/70 leading-relaxed">
              Get a customized facility service proposal shaped around your hygiene,
              cleaning, pest control, or materials supply requirements.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold px-8 py-6 text-base shadow-2xl shadow-accent/30 hover:shadow-accent/40 transition-all duration-300"
                >
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <a href="tel:+27727006135">
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-white hover:text-white hover:bg-white/10 font-body font-medium px-6 py-6 text-base"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +27 72 700 6135
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
