import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

const operatingHours = [
  {
    days: 'Monday - Friday',
    hours: '08:00 - 17:00',
  },
  {
    days: 'Saturday - Sunday',
    hours: 'Closed',
  },
  {
    days: 'Public Holidays',
    hours: 'Closed',
  },
];

export default function OperatingHoursSection() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Business Hours"
          title="Operating Hours"
          description="Plan your service enquiry around our weekly operating schedule."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-primary/5"
        >
          <div className="flex items-center gap-4 border-b border-border bg-primary px-6 py-5 text-primary-foreground md:px-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Clock className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-heading text-2xl font-bold">Visit or Contact Us</h3>
              <p className="mt-1 font-body text-sm text-primary-foreground/75">
                Our team is available during the hours below.
              </p>
            </div>
          </div>

          <div className="divide-y divide-border">
            {operatingHours.map((item) => (
              <div
                key={item.days}
                className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8"
              >
                <span className="font-body text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {item.days}
                </span>
                <span className="font-heading text-2xl font-bold text-foreground">
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
