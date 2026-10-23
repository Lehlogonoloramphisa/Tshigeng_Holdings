import React from 'react';

const galleryImages = [
  '/images/pest-control-exterior.webp',
  '/images/pest-control-technician.jfif',
  '/images/pest-control-warehouse.jpg',
  '/images/pest-control-protective-equipment.jpg',
  '/images/pest-control-treatment.jpg',
  '/images/commercial-office-cleaning.jfif',
  '/images/office-cleaning-team.jfif',
  '/images/hygiene-water-system.jfif',
  '/images/commercial-floor-cleaning.jfif',
];

function PhotoTrack() {
  return (
    <div className="service-photo-marquee flex h-full w-max" aria-hidden="true">
      {[0, 1].map((group) => (
        <div key={group} className="flex h-full shrink-0 gap-2 pr-2">
          {galleryImages.map((image) => (
            <img
              key={`${group}-${image}`}
              src={image}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-full w-[190px] shrink-0 object-cover sm:w-[250px] md:w-[300px]"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default function ServiceGlimpseSection() {
  return (
    <section
      className="service-glimpse relative isolate h-[260px] overflow-hidden bg-primary md:h-[232px]"
      aria-labelledby="service-glimpse-title"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <PhotoTrack />
        <div className="absolute inset-0 bg-slate-950/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/65 to-secondary/75" />
      </div>

      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
        <span className="mb-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Our services
        </span>
        <h2 id="service-glimpse-title" className="font-heading text-3xl font-bold leading-tight md:text-4xl">
          Pest control, cleaning &amp; hygiene
        </h2>
        <p className="mt-3 max-w-3xl font-body text-sm leading-relaxed text-white/90 md:text-base">
          Commercial and industrial pest control, regular and deep cleaning for homes and workplaces, plus hygiene equipment and refill services for shared facilities.
        </p>
        <p className="mt-2 font-body text-xs text-white/75">
          Photos are illustrative; service details are confirmed for each enquiry.
        </p>
      </div>
    </section>
  );
}
