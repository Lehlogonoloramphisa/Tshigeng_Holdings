import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Shield } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';

const TEAM_IMAGE = 'https://images.pexels.com/photos/8606292/pexels-photo-8606292.jpeg?auto=compress&cs=tinysrgb&w=1200';

const values = [
  { icon: Shield, title: 'Reliability', description: 'We are reliable and always strive to keep our customers happy through consistent, professional service.' },
  { icon: Heart, title: 'Customer Centricity', description: 'We focus on seamless, responsive facility services that improve the user experience.' },
  { icon: Target, title: 'Quality Delivery', description: 'We pay attention to site requirements, service standards, and the practical details that keep facilities operating well.' },
  { icon: Eye, title: 'Sustainability', description: 'We support safe, sustainable, and forward-thinking facilities that enhance productivity while reducing environmental impact.' },
];

export default function About() {
  return (
    <div>
      <section className="relative py-20 md:py-32 bg-brand-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-support-green rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
              Our Story
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Established in 2011 to Deliver{' '}
              <span className="text-highlight-yellow">Facility</span> Solutions
            </h1>
            <p className="mt-6 text-lg font-body text-white/70 leading-relaxed max-w-2xl">
              Tshigeng Holdings is a South African facilities services company established in 2011, serving businesses, institutions and homes in Gauteng and across the country.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                <img
                  src={TEAM_IMAGE}
                  alt="Clean, well maintained office interior"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="800"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/25 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
                Who We Are
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
                About Tshigeng Holdings
              </h2>
              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  Tshigeng Holdings CC (registration number 2011/056260/23) was established in 2011. The company provides pest control, workplace hygiene, commercial and industrial cleaning, cleaning supplies, and facility support.
                </p>
                <p>
                  The team supports service enquiries in Centurion, Pretoria and surrounding Gauteng areas, as well as work across South Africa.
                </p>
                <p>
                  Services can be scoped for offices, industrial sites, hotels, schools, healthcare environments, hospitality venues and residential properties. Each enquiry can outline the location, required work and preferred schedule.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-10 border border-border"
            >
              <div className="w-14 h-14 rounded-xl [background-color:hsl(var(--support-green)/0.12)] flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-support-green" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-card-foreground mb-4">Our Mission</h3>
              <ul className="list-disc space-y-4 pl-5 font-body text-muted-foreground leading-relaxed">
                <li>
                  To deliver highly effective and efficient facility solutions that optimise resources, extend asset life
                  spans, and ensure our clients run seamlessly.
                </li>
                <li>
                  To partner with our clients to deliver customized, responsive facility services that elevate the user
                  experience and support dynamic business needs.
                </li>
                <li>
                  To create and maintain safe, sustainable, and forward-thinking facilities that enhance productivity
                  while minimizing environmental impact.
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-brand-gradient rounded-2xl p-10"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-4">Our Vision</h3>
              <ul className="list-disc space-y-4 pl-5 font-body text-white/70 leading-relaxed">
                <li>
                  To make every facility we manage the best place to work, visit, and thrive by delivering a seamless,
                  customer-first experience.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            eyebrow="Our Foundation"
            title="Core Values That Drive Every Decision"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, index) => {
              const IconComp = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="flex items-start gap-5"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl [background-color:hsl(var(--support-green)/0.1)] flex items-center justify-center">
                    <IconComp className="w-6 h-6 text-support-green" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-foreground mb-2">{v.title}</h4>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{v.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
