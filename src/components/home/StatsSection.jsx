import React from 'react';
import { CalendarDays, MapPin, Sparkles, Bug } from 'lucide-react';

const businessDetails = [
  { icon: CalendarDays, label: 'Established', value: '2011' },
  { icon: MapPin, label: 'Based in', value: 'Irene, Centurion' },
  { icon: Sparkles, label: 'Cleaning & hygiene', value: 'Homes and facilities' },
  { icon: Bug, label: 'Pest control', value: 'Commercial & industrial' },
];

export default function StatsSection() {
  return (
    <section aria-label="Tshigeng Holdings at a glance" className="border-y border-white/10 bg-primary py-7 text-primary-foreground md:py-9">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {businessDetails.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex items-center gap-4 border-white/15 sm:border-l sm:pl-5 first:sm:border-l-0 first:sm:pl-0">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-accent">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{label}</p>
              <p className="mt-1 font-body text-sm font-semibold text-white">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
