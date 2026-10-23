import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, HelpCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/SectionHeading';

function ContentSections({ sections = [] }) {
  return sections.map((section, index) => {
    const imageOnLeft = index % 2 === 1;
    return (
      <section key={section.title} className="bg-background py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 lg:grid-cols-2 lg:gap-16">
          {section.image && (
            <div className={`overflow-hidden rounded-2xl shadow-xl shadow-primary/10 ${imageOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
              <img
                src={section.image}
                alt={section.imageAlt}
                className="h-72 w-full object-cover md:h-[26rem]"
                loading="lazy"
                decoding="async"
                width="1200"
                height="800"
              />
            </div>
          )}
          <div className={imageOnLeft ? 'lg:order-2' : 'lg:order-1'}>
            <span className="mb-3 block font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {section.eyebrow || 'Our Services'}
            </span>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              {section.title}
            </h2>
            {section.description && (
              <p className="mt-5 font-body leading-relaxed text-muted-foreground">
                {section.description}
              </p>
            )}
            {section.items && (
              <ul className="mt-6 space-y-3">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body leading-relaxed text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-support-green" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.groups && (
              <div className="mt-6 space-y-6">
                {section.groups.map((group) => (
                  <div key={group.title}>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {group.title}
                    </h3>
                    <ul className="mt-3 space-y-2">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 font-body leading-relaxed text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-support-green" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
            {section.closing && (
              <p className="mt-6 font-body leading-relaxed text-muted-foreground">
                {section.closing}
              </p>
            )}
            {section.callToAction && (
              <Button asChild className="mt-7 bg-primary font-body font-semibold text-primary-foreground hover:bg-primary/90">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    );
  });
}

function ServiceImageGallery({ gallery }) {
  if (!gallery?.images?.length) return null;

  return (
    <section className="bg-muted/40 py-16 md:py-20" aria-label={gallery.title}>
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.images.map((image) => (
            <figure key={image.src} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className={`aspect-[4/3] ${image.fit === 'contain' ? 'bg-white p-6' : ''}`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`h-full w-full ${image.fit === 'contain' ? 'object-contain' : 'object-cover'}`}
                  loading="lazy"
                  decoding="async"
                  width="900"
                  height="675"
                />
              </div>
              <figcaption className="px-5 py-4 font-body text-sm font-medium text-card-foreground">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServiceLanding({ page }) {
  return (
    <div>
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--secondary)/0.7),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:py-20 lg:min-h-[570px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="mb-4 block font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {page.eyebrow}
            </span>
            <h1 className="font-heading text-4xl font-bold leading-[1.08] text-white md:text-5xl lg:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-white/80">
              {page.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="bg-accent px-7 py-6 font-body font-semibold text-accent-foreground hover:bg-accent/90">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <a href="tel:+27727006135" className="inline-flex items-center justify-center rounded-md border border-white/30 px-6 py-3 font-body text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Call +27 72 700 6135
              </a>
            </div>
          </motion.div>
          <motion.figure
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="relative mx-auto w-full max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-2 shadow-2xl shadow-black/20"
          >
            <img
              src={page.image}
              alt={page.imageAlt}
              className="aspect-[4/3] w-full rounded-[1.25rem] object-cover"
              width="1200"
              height="900"
              decoding="async"
            />
            <figcaption className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-primary/85 px-4 py-2 font-body text-xs font-medium tracking-wide text-white backdrop-blur-sm">
              {page.highlight} · Tshigeng Holdings
            </figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-3 block font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              What We Cover
            </span>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              {page.introTitle}
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
              <Phone className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-card-foreground">
              Plan the right support for your site
            </h3>
            <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
              Tell us where the site is, what needs attention and how often you need support. We can discuss the scope and the next step for a quote.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <a
                href="tel:+27727006135"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 font-body text-sm font-semibold text-foreground hover:bg-muted"
              >
                <Phone className="h-4 w-4" />
                Call +27 72 700 6135
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ContentSections sections={page.contentSections} />
      <ServiceImageGallery gallery={page.imageGallery} />

      <section className="bg-muted/50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Plan an Enquiry"
            title="Help us understand what you need"
            description="A few details help the team review your request and confirm the next step."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { title: 'Location & premises', description: 'Include the site address or area and the type of premises.' },
              { title: 'Service requirements', description: 'Describe the service, areas, equipment, or materials you need.' },
              { title: 'Preferred timing', description: 'Share when you would like the work or service to take place.' },
            ].map((item, index) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-white">0{index + 1}</span>
                <h3 className="font-heading text-xl font-bold text-card-foreground">{item.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading eyebrow="Common Questions" title={`${page.highlight} FAQs`} />
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
            <h3 className="font-heading text-2xl font-bold">Explore related services</h3>
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
