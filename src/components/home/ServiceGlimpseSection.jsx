import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeading from '@/components/shared/SectionHeading';

const snapshots = [
  {
    eyebrow: 'Pest management',
    title: 'Commercial pest control',
    description: 'Commercial and industrial pest control for business premises and facilities.',
    image: '/images/pest-control.jfif',
    imageAlt: 'Pest control technician applying a treatment indoors',
    href: '/pest-control',
    layout: 'md:row-span-2 md:min-h-[540px] xl:col-span-7',
  },
  {
    eyebrow: 'Outdoor application',
    title: 'Treatment in the field',
    description: 'A glimpse of outdoor spraying equipment. Contact us to confirm whether a specific treatment is available for your site.',
    image: '/images/outdoor-treatment.jfif',
    imageAlt: 'Operator using a backpack sprayer outdoors',
    href: '/contact',
    layout: 'xl:col-span-5',
  },
  {
    eyebrow: 'Pest management',
    title: 'Pest treatment needs',
    description: 'We provide commercial and industrial pest control. Speak with our team about the requirements for your premises.',
    image: '/images/pest-treatment-product.jfif',
    imageAlt: 'Bottle of insect and pest control spray',
    href: '/pest-control',
    layout: 'xl:col-span-5',
  },
  {
    eyebrow: 'Hygiene refills',
    title: 'Liquid soap refills',
    description: 'Refill services help keep washroom dispensers stocked and ready for everyday use.',
    image: '/images/liquid-soap-refills.jpg',
    imageAlt: 'Liquid soap and hygiene refill products',
    href: '/hygiene-services',
    layout: 'xl:col-span-6',
  },
  {
    eyebrow: 'Cleaning supplies',
    title: 'Cleaning chemicals',
    description: 'Cleaning chemicals and hygiene supplies for regular facility upkeep.',
    image: '/images/cleaning-chemicals.webp',
    imageAlt: 'Containers of cleaning chemicals',
    href: '/cleaning-supplies',
    layout: 'xl:col-span-6',
  },
];

function SnapshotCard({ snapshot }) {
  return (
    <Link
      to={snapshot.href}
      className={`group relative isolate flex min-h-[260px] overflow-hidden rounded-3xl bg-primary shadow-lg shadow-slate-900/10 transition duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-offset-4 md:col-span-1 ${snapshot.layout}`}
    >
      <img
        src={snapshot.image}
        alt={snapshot.imageAlt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-slate-950/5" aria-hidden="true" />
      <div className="mt-auto flex w-full items-end justify-between gap-5 p-6 text-white md:p-7">
        <div className="max-w-xl">
          <span className="mb-3 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white/90 backdrop-blur-sm">
            {snapshot.eyebrow}
          </span>
          <h3 className="font-heading text-2xl font-bold leading-tight md:text-[1.7rem]">{snapshot.title}</h3>
          <p className="mt-2 max-w-lg font-body text-sm leading-relaxed text-white/85 md:text-base">{snapshot.description}</p>
        </div>
        <span className="mb-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/40 bg-white/10 transition group-hover:border-accent group-hover:bg-accent group-hover:text-foreground" aria-hidden="true">
          <ArrowUpRight className="h-5 w-5" />
        </span>
      </div>
    </Link>
  );
}

export default function ServiceGlimpseSection() {
  return (
    <section className="bg-muted/50 py-20 md:py-28" aria-label="A glimpse of our work">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="A glimpse of our work"
          title="The care, products, and service settings behind cleaner spaces"
          description="Explore a few examples connected to our pest control, hygiene refill, and cleaning supply services."
        />

        <div className="grid auto-rows-[260px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-12">
          {snapshots.map((snapshot) => (
            <SnapshotCard key={snapshot.title} snapshot={snapshot} />
          ))}
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-5 rounded-2xl border border-border/70 bg-background px-6 py-5 sm:flex-row sm:items-center md:px-8">
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
            Images are illustrative. Specific product selection, treatment methods, and service availability are confirmed for each enquiry.
          </p>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 font-body text-sm font-semibold text-primary transition hover:text-secondary focus-visible:rounded-sm"
          >
            Talk to our team <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
