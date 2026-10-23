import React from 'react';

const credentials = [
  {
    name: 'South African Pest Control Association',
    status: 'Member of SAPCA',
    image: '/images/sapca-member.png',
    alt: 'South African Pest Control Association member logo',
    href: 'https://sapca.org.za/gauteng/',
  },
  {
    name: 'Department of Agriculture, Republic of South Africa',
    status: 'Registered with the Department of Agriculture',
    image: '/images/agriculture-registration.jpg',
    alt: 'Department of Agriculture, Republic of South Africa logo',
  },
];

export default function AffiliationsSection() {
  return (
    <section aria-labelledby="affiliations-heading" className="bg-muted/50 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Memberships & Registration
          </p>
          <h2
            id="affiliations-heading"
            className="font-heading text-3xl font-bold leading-tight text-foreground md:text-4xl"
          >
            Industry and Agriculture Credentials
          </h2>
          <p className="mt-4 font-body leading-relaxed text-muted-foreground">
            Tshigeng Holdings is a member of SAPCA and is registered with the Department of Agriculture, Republic of South Africa.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-2">
          {credentials.map((credential) => {
            const content = (
              <>
                <div className="flex h-36 items-center justify-center rounded-xl bg-white p-5">
                  <img
                    src={credential.image}
                    alt={credential.alt}
                    className="max-h-full w-full object-contain"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="180"
                  />
                </div>
                <div className="mt-5">
                  <h3 className="font-heading text-lg font-bold text-card-foreground">
                    {credential.name}
                  </h3>
                  <p className="mt-2 font-body text-sm font-medium text-support-green">
                    {credential.status}
                  </p>
                </div>
              </>
            );

            return (
              <article
                key={credential.name}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
              >
                {credential.href ? (
                  <a
                    href={credential.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
