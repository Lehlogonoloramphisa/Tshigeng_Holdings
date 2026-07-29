import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, CheckCircle2, HelpCircle, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/SectionHeading';

export default function LocationLanding({ page }) {
  return (
    <div>
      <section className="relative overflow-hidden bg-brand-gradient py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-support-green blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-4 flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <MapPin className="h-4 w-4" />
              {page.eyebrow}
            </span>
            <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-white/75">
              {page.description}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link to="/contact">
                <Button className="bg-accent px-8 py-6 font-body font-semibold text-accent-foreground hover:bg-accent/90">
                  Request a Local Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outline"
                  className="border-white/30 px-8 py-6 font-body font-semibold text-white hover:bg-white/10 hover:text-white"
                >
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-3 block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Local Service Support
            </span>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              {page.service} for {page.location}
            </h2>
            <p className="mt-5 font-body leading-relaxed text-muted-foreground">
              {page.intro}
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {page.services.map((service) => (
                <div key={service} className="flex items-center gap-3 font-body text-sm text-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-support-green" />
                  {service}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg border border-border bg-card p-8 shadow-xl shadow-primary/5"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Building2 className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-card-foreground">
              Industries in {page.location}
            </h3>
            <ul className="mt-6 space-y-3">
              {page.industries.map((industry) => (
                <li key={industry} className="font-body text-sm leading-relaxed text-muted-foreground">
                  {industry}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted/50 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Common Questions" title={`${page.location} Service FAQs`} />
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="rounded-lg border border-border bg-card p-6">
                <div className="flex gap-4">
                  <HelpCircle className="mt-1 h-5 w-5 shrink-0 text-support-green" />
                  <div>
                    <h3 className="font-heading text-lg font-bold text-card-foreground">{faq.question}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg bg-brand-gradient p-8 text-white">
            <h3 className="font-heading text-2xl font-bold">Nearby and Related Services</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="rounded-md bg-white/10 px-4 py-2 font-body text-sm text-white transition-colors hover:bg-white/20"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
