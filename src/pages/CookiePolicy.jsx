import React from 'react';

export default function CookiePolicy() {
  return (
    <div>
      <section className="relative py-20 md:py-28 bg-brand-gradient overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6">
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            Legal
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
            Cookie Policy
          </h1>
          <p className="mt-5 text-white/70 font-body leading-relaxed max-w-3xl">
            This policy explains how this website uses cookies, local storage, and third-party website resources.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="prose prose-slate max-w-none font-body prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <p><strong>Last updated:</strong> 28 May 2026</p>

            <h2>What Cookies Are</h2>
            <p>
              Cookies and local storage are small pieces of information stored on your browser or device. They help websites remember preferences, improve performance, and understand usage.
            </p>

            <h2>What This Website Uses</h2>
            <ul>
              <li><strong>Essential storage:</strong> remembers whether you accepted or declined the cookie notice.</li>
              <li><strong>Website resources:</strong> fonts, images, and scripts needed to display the site.</li>
              <li><strong>Third-party links:</strong> links such as Google Maps open outside this website and may use their own cookies.</li>
            </ul>

            <h2>Analytics and Marketing Cookies</h2>
            <p>
              This website does not currently set dedicated advertising cookies. If analytics or marketing tools are added later, this policy and the cookie notice should be updated before those tools are used.
            </p>

            <h2>Managing Cookies</h2>
            <p>
              You can accept or decline optional cookies through the notice on this website. You can also delete or block cookies through your browser settings. Blocking essential storage may affect how the notice behaves.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about cookies can be sent to <a href="mailto:tshigeng.buti@gmail.com">tshigeng.buti@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
