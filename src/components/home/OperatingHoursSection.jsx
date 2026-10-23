import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays, MapPin, ClipboardList } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

const enquiryDetails = [
  {
    icon: MapPin,
    title: 'Where is the site?',
    description: 'Include the town or area and the type of premises.',
  },
  {
    icon: ClipboardList,
    title: 'What do you need?',
    description: 'Describe the service, cleaning tasks, equipment, or materials.',
  },
  {
    icon: CalendarDays,
    title: 'When do you need it?',
    description: 'Share a preferred schedule so availability can be confirmed.',
  },
];

export default function OperatingHoursSection() {
  return (
    <section className="bg-muted/50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Start Here"
          title="Make your service enquiry clear"
          description="A few practical details help Tshigeng Holdings understand what you are looking for."
        />

        <div className="grid gap-5 md:grid-cols-3">
          {enquiryDetails.map(({ icon: Icon, title, description }, index) => (
            <article key={title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="font-body text-xs font-semibold tracking-[0.16em] text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-card-foreground">{title}</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-primary px-6 py-6 text-white sm:flex-row sm:px-8">
          <p className="font-body text-sm leading-relaxed text-white/80">The team will confirm availability and discuss the next step for your request.</p>
          <Link to="/contact" className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-5 py-3 font-body text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90">
            Contact Us <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
