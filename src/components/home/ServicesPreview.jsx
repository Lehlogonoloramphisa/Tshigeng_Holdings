import React from 'react';
import { Link } from 'react-router-dom';
import { Bug, Sparkles, Droplets, ArrowRight, Package } from 'lucide-react';
import ServiceCard from '@/components/shared/ServiceCard';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function ServicesPreview({ images }) {
  const services = [
    {
      icon: Droplets,
      title: 'Hygiene Services',
      description: 'Hygiene equipment sales, installation, maintenance, and refill services for restrooms and shared facilities.',
      image: images.hygiene,
      imageAlt: 'Restroom basins with wall-mounted hygiene dispensers',
      path: '/hygiene-services',
    },
    {
      icon: Bug,
      title: 'Pest Control',
      description: 'Commercial and industrial pest control for business premises and facilities.',
      image: images.pestControl,
      imageAlt: 'Pest control technician applying treatment indoors with a hand sprayer',
      path: '/pest-control',
    },
    {
      icon: Sparkles,
      title: 'Commercial Cleaning Services',
      description: 'Regular and deep cleaning for homes, offices, commercial premises, and other facilities.',
      image: images.cleaning,
      imageAlt: 'Cleaner mopping a commercial floor',
      path: '/commercial-cleaning',
    },
    {
      icon: Package,
      title: 'Cleaning Materials & Supplies',
      description: 'Cleaning chemicals, equipment, consumables, and hygiene products for homes, offices, and commercial facilities.',
      image: images.cleaningMaterials,
      imageAlt: 'Cleaning gloves, brushes, cloths, and spray bottles',
      path: '/cleaning-supplies',
    },
  ];

  return (
    <section className="bg-background py-12 md:py-16" aria-labelledby="services-preview-title">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          id="services-preview-title"
          className="mb-8 text-center font-heading text-3xl font-bold text-foreground md:text-4xl"
        >
          Our services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button variant="outline" size="lg" className="font-body font-semibold px-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
