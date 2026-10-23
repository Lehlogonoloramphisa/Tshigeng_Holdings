import React from 'react';
import StatCounter from '@/components/shared/StatCounter';

const stats = [
  { value: '2011', suffix: '', label: 'Established' },
  { value: '4', suffix: '', label: 'Core Service Lines' },
  { value: '5', suffix: '+', label: 'Target Sectors' },
  { value: '10', suffix: '+', label: 'Years of Service' },
];

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-20 bg-brand-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-support-green rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              light
            />
          ))}
        </div>
      </div>
    </section>
  );
}
