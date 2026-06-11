import React from 'react';
import { Link } from 'react-router-dom';

const updated = '28 May 2026';

export default function PrivacyPolicy() {
  return (
    <div>
      <section className="relative py-20 md:py-28 bg-brand-gradient overflow-hidden">
        <div className="relative max-w-5xl mx-auto px-6">
          <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            Legal
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
            Privacy Policy
          </h1>
          <p className="mt-5 text-white/70 font-body leading-relaxed max-w-3xl">
            This policy explains how Tshigeng Holdings collects, uses, stores, and protects personal information in line with South Africa's Protection of Personal Information Act, 4 of 2013 (POPIA).
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="prose prose-slate max-w-none font-body prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-a:text-primary">
            <p><strong>Last updated:</strong> {updated}</p>
            <p>
              Tshigeng Holdings respects your privacy. This policy applies to this website and enquiries submitted to us by phone, email, contact form, or direct communication.
            </p>

            <h2>Personal Information We May Collect</h2>
            <ul>
              <li>Name, company name, phone number, and email address.</li>
              <li>Address, site location, service requirements, and enquiry details.</li>
              <li>Technical information such as browser type, device information, pages visited, and cookie preferences.</li>
              <li>Any information you voluntarily include in a message or service request.</li>
            </ul>

            <h2>Why We Use Personal Information</h2>
            <ul>
              <li>To respond to enquiries and prepare quotations or service proposals.</li>
              <li>To arrange site assessments, service delivery, and customer support.</li>
              <li>To keep business records, meet legal obligations, and protect our rights.</li>
              <li>To improve website performance, security, and user experience.</li>
            </ul>

            <h2>Legal Basis</h2>
            <p>
              We process personal information where you have consented, where processing is necessary to respond to your request or perform a contract, where we have a legitimate business need, or where the law requires it.
            </p>

            <h2>Sharing Information</h2>
            <p>
              We do not sell personal information. We may share it with service providers, suppliers, professional advisers, or authorities where required for service delivery, administration, security, compliance, or legal reasons.
            </p>

            <h2>Storage and Security</h2>
            <p>
              We take reasonable technical and organisational steps to protect personal information from loss, misuse, unauthorised access, alteration, or disclosure. No internet transmission is completely risk-free, so users should avoid sending highly sensitive information through the website form.
            </p>

            <h2>Your Rights</h2>
            <p>
              Under POPIA, you may request access to your personal information, ask us to correct or delete it, object to certain processing, withdraw consent where consent is the basis for processing, or lodge a complaint with the Information Regulator of South Africa.
            </p>

            <h2>Information Officer and Requests</h2>
            <p>
              POPIA or PAIA-related requests may be sent to Tshigeng Holdings using the contact details below. We may need to verify your identity before actioning a request.
            </p>
            <p>
              Email: <a href="mailto:tshigeng.buti@gmail.com">tshigeng.buti@gmail.com</a><br />
              Phone: <a href="tel:+27727006135">+27 72 700 6135</a><br />
              Address: 3 Saltus Street, Galloway Estate, Irene, Centurion, Pretoria
            </p>

            <h2>Cookies</h2>
            <p>
              This website uses essential local storage to remember cookie choices and may load third-party resources such as fonts, images, maps links, or hosting services. Read the <Link to="/cookie-policy">Cookie Policy</Link> for more detail.
            </p>

            <h2>Changes</h2>
            <p>
              We may update this policy from time to time. The latest version will be published on this page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
