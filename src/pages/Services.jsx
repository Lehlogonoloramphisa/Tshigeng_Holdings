import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Building2, Sparkles, Droplets, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const IMAGES = {
  pestControl: 'https://images.pexels.com/photos/4099466/pexels-photo-4099466.jpeg?auto=compress&cs=tinysrgb&w=1200',
  hygiene: 'https://images.pexels.com/photos/5938598/pexels-photo-5938598.jpeg?auto=compress&cs=tinysrgb&w=1200',
  facilityMgmt: 'https://images.pexels.com/photos/5668879/pexels-photo-5668879.jpeg?auto=compress&cs=tinysrgb&w=1200',
  cleaning: 'https://images.pexels.com/photos/11137247/pexels-photo-11137247.jpeg?auto=compress&cs=tinysrgb&w=1200',
  cleaningMaterials: 'https://images.pexels.com/photos/3177257/pexels-photo-3177257.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

const services = [
  {
    icon: Droplets,
    title: 'Hygiene Services',
    description: 'Supply, installation, maintenance, and servicing of essential hygiene equipment for clean, practical, and well-managed facilities.',
    features: ['Soap Dispensers', 'Ladies Sanitary Bins', 'Toilet Seat Wipes', 'Paper Towel Dispensers', 'Air Fresheners', 'Chemical Deep Cleaning'],
    image: IMAGES.hygiene,
  },
  {
    icon: Bug,
    title: 'Pest Control',
    description: 'Commercial and industrial pest control delivered with responsiveness, site awareness, and a focus on safer operating environments.',
    features: ['Commercial Pest Control', 'Industrial Pest Control', 'Site Support', 'Safer Facility Environments'],
    image: IMAGES.pestControl,
  },
  {
    icon: Sparkles,
    title: 'Commercial & Industrial Cleaning',
    description: 'Cleaning support for commercial and industrial facilities, including specialist requirements and high-need environments.',
    features: ['Commercial Cleaning', 'Industrial Cleaning', 'Residential Cleaning'],
    image: IMAGES.cleaning,
  },
  {
    icon: Building2,
    title: 'Cleaning Materials',
    description: 'Supply of cleaning equipment, chemicals, and consumables for facilities that need dependable products and responsive procurement support.',
    features: ['Cleaning Equipment', 'Cleaning Chemicals', 'Consumables', 'Operational Essentials', 'Supply Coordination'],
    image: IMAGES.cleaningMaterials,
  },
];

export default function Services() {
  return (
    <div>
      <section className="relative py-20 md:py-32 bg-brand-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-support-green rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
              Our Capabilities
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Pest Control,{' '}
              <span className="text-highlight-yellow">Cleaning</span>, & Hygiene Services
            </h1>
            <p className="mt-6 text-lg font-body text-white/70 leading-relaxed max-w-2xl">
              We deliver hygiene, pest control, commercial and industrial cleaning, and cleaning
              materials for clients across commercial, industrial, government, state enterprise,
              education, hospitality, healthcare, and domestic sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {services.map((service, index) => {
            const IconComp = service.icon;
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                <div className={isEven ? '' : 'lg:order-2'}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-72 md:h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-14 h-14 rounded-xl bg-accent/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <IconComp className="w-7 h-7 text-accent-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={isEven ? '' : 'lg:order-1'}>
                  <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-3 block">
                    Service {String(index + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="font-body text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 font-body text-sm text-foreground">
                        <CheckCircle2 className="w-5 h-5 text-support-green shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold">
                      Request This Service
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-gradient">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
              How We Work
            </h2>
            <p className="font-body text-white/70 mb-6 leading-relaxed">
              <strong className="text-white">Understand</strong> - We clarify the facility requirement, site needs, and success criteria.<br />
              <strong className="text-white">Plan</strong> - We coordinate the right people, products, chemicals, and service schedule.<br />
              <strong className="text-white">Deliver</strong> - We communicate progress and complete the work professionally.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-body font-semibold px-8 py-6 text-base shadow-2xl shadow-accent/30"
              >
                Schedule a Site Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
