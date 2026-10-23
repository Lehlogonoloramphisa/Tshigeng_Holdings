import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Building2, Sparkles, Droplets, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { serviceImages } from '@/data/serviceImages';

const services = [
  {
    icon: Droplets,
    title: 'Hygiene Services',
    description: 'Hygiene equipment sales, installation, maintenance, and refill services for restrooms and shared facilities.',
    features: ['Soap Dispensers', 'Paper Towel Dispensers', 'Hand Sanitiser Stations', 'Sanitary Bins', 'Air Hand Dryers', 'Toilet Seat Wipes and Air Fresheners', 'Hygiene Refills'],
    image: serviceImages.hygieneWashroom,
    imageAlt: 'Clean public washroom with a row of sinks',
    path: '/hygiene-services',
  },
  {
    icon: Bug,
    title: 'Pest Control',
    description: 'Commercial and industrial pest control for business premises, factories, warehouses, and managed facilities.',
    features: ['Commercial Pest Control', 'Industrial Pest Control', 'Site Support', 'Pest Control Contracts'],
    image: serviceImages.pestControl,
    imageAlt: 'Pest control technician treating an indoor space',
    path: '/pest-control',
  },
  {
    icon: Sparkles,
    title: 'Commercial Cleaning Services',
    description: 'Regular and deep commercial cleaning for offices, homes, commercial premises, and other facilities, tailored to your requirements and schedule.',
    features: ['Regular Cleaning', 'Deep Cleaning', 'Kitchen and Bathroom Deep Cleaning', 'Floor Care'],
    image: serviceImages.commercialCleaning,
    imageAlt: 'Cleaner maintaining the floor of a commercial shopping centre',
    path: '/commercial-cleaning',
  },
  {
    icon: Building2,
    title: 'Cleaning Materials & Supplies',
    description: 'Cleaning equipment, chemicals, hygiene products, and consumables for homes, offices, and commercial facilities.',
    features: ['Cleaning Equipment', 'Cleaning Chemicals', 'Consumables', 'Supply Coordination'],
    image: serviceImages.cleaningSupplies,
    imageAlt: 'Cleaning products and tools ready for use',
    path: '/cleaning-supplies',
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
              Cleaning, Hygiene & Pest Control Services
            </h1>
            <p className="mt-6 text-lg font-body text-white/70 leading-relaxed max-w-2xl">
              We provide professional cleaning and hygiene solutions for homes, offices, commercial premises, and other facilities, together with pest control and cleaning materials.
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
                      alt={service.imageAlt}
                      className="w-full h-72 md:h-96 object-cover"
                      loading="lazy"
                      decoding="async"
                      width="1200"
                      height="800"
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
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Link to={service.path}>
                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold">
                        View Service Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="font-body font-semibold hover:bg-primary hover:text-primary-foreground">
                        Request This Service
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
