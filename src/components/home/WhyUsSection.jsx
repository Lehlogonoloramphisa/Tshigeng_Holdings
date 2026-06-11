import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, Building2, Home as HomeIcon } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

const commitmentBoxes = [
  {
    icon: HomeIcon,
    title: 'Homes',
    description: 'We believe every family deserves a safe, spotless and pest-free home.',
  },
  {
    icon: Building2,
    title: 'Businesses',
    description:'By combining pro-active hygiene solutions, with Integrated Pest Management (IPM), we protact your business, health, and reputation while minimizing environmental impact',
  },
  {
    icon: BadgeCheck,
    title: 'SAPCA and NCCA Registered',
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Why Tshigeng"
          title="Our Service Commitment"
          description="We are a leading provider of pest control, cleaning and hygiene services.
          With a commitment to quality, safety, and customer satisfaction, the company helps create clean, 
          healthy, and pest-free environments tailored to the unique needs of every customer"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {commitmentBoxes.map((box) => {
            const Icon = box.icon;

            return (
              <div
                key={box.title}
                className="flex min-h-[230px] flex-col items-center justify-center rounded-2xl border border-border bg-card p-6 text-center shadow-xl shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-primary/10"
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
