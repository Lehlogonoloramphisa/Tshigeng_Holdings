import React from 'react';

export default function SecurityPolicy() {
  return (
    <div>
      <section className="relative py-20 md:py-28 bg-brand-gradient overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6">
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            Security
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
            Website Security
          </h1>
          <p className="mt-5 text-white/70 font-body leading-relaxed max-w-3xl">
            Practical security measures and responsible disclosure information for this website.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="prose prose-slate max-w-none font-body prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground">
            <p><strong>Last updated:</strong> 28 May 2026</p>

            <h2>Security Measures</h2>
            <ul>
              <li>The website should be served over HTTPS in production.</li>
              <li>Basic security headers are provided for compatible static hosts.</li>
              <li>Contact forms should avoid requesting highly sensitive personal information.</li>
              <li>Access to website hosting, email, and administration tools should use strong passwords and multi-factor authentication where available.</li>
              <li>Dependencies should be reviewed and updated regularly.</li>
            </ul>

            <h2>Responsible Disclosure</h2>
            <p>
              If you believe you have found a security issue, please contact us without exploiting, disrupting, or publicly disclosing the issue.
            </p>
            <p>
              Email: <a href="mailto:tshigeng.buti@gmail.com">tshigeng.buti@gmail.com</a><br />
              Phone: <a href="tel:+27727006135">+27 72 700 6135</a>
            </p>

            <h2>Important Note</h2>
            <p>
              This page describes website security practices. It does not replace a full technical security audit, POPIA compliance review, or legal assessment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
