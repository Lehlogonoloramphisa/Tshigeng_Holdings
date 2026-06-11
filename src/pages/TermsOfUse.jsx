import React from 'react';

export default function TermsOfUse() {
  return (
    <div>
      <section className="relative py-20 md:py-28 bg-brand-gradient overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6">
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            Legal
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
            Terms of Use
          </h1>
          <p className="mt-5 text-white/70 font-body leading-relaxed max-w-3xl">
            These terms govern use of the Tshigeng Holdings website.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="prose prose-slate max-w-none font-body prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <p><strong>Last updated:</strong> 28 May 2026</p>

            <h2>Use of This Website</h2>
            <p>
              You may use this website for lawful informational and enquiry purposes. You must not attempt to disrupt, misuse, copy, scrape, or compromise the website or its systems.
            </p>

            <h2>Information on the Website</h2>
            <p>
              Website content is provided for general information about Tshigeng Holdings and its services. It is not a binding quotation, contract, or professional advice. Service availability, pricing, and scope must be confirmed directly with Tshigeng Holdings.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              Unless otherwise stated, website text, layout, branding, and content belong to Tshigeng Holdings or are used under licence. You may not reproduce or reuse content for commercial purposes without written permission.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              The website may link to third-party websites such as Google Maps. Tshigeng Holdings is not responsible for third-party content, security, or privacy practices.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              Tshigeng Holdings aims to keep the website accurate and available, but does not guarantee uninterrupted access or error-free content. To the extent allowed by law, Tshigeng Holdings is not liable for losses arising from use of the website.
            </p>

            <h2>Governing Law</h2>
            <p>
              These terms are governed by the laws of the Republic of South Africa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
