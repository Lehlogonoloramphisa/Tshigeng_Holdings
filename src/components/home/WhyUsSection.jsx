import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, CalendarDays, PhoneCall } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

const commitmentBoxes = [
  {
    icon: ClipboardCheck,
    title: 'A clear service scope',
    description: 'Tell us what service you need, where it is required, and which areas or products should be included.',
  },
  {
    icon: CalendarDays,
    title: 'Tailored cleaning',
    description: 'Cleaning tasks and preferred schedules can be discussed around your premises and requirements.',
  },
  {
    icon: PhoneCall,
    title: 'Speak with our team',
    description: 'Call or email Tshigeng Holdings to discuss service availability and request a quote.',
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Why Tshigeng"
          title="Practical support, scoped to your needs"
          description="Share the location, premises type, service required, and preferred timing. Tshigeng Holdings can then discuss the appropriate scope for your enquiry."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {commitmentBoxes.map((box) => {
            const Icon = box.icon;

            return (
              <div
                key={box.title}
                className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-border bg-card p-7 text-center shadow-sm transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-support-green">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-xl font-bold leading-tight text-card-foreground">
                  {box.title}
                </h3>
                {box.description && (
                  <p className="mt-4 font-body text-sm leading-relaxed text-muted-foreground">
                    {box.description}
                  </p>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
