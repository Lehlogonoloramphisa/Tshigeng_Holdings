import React from 'react';
import { Link } from 'react-router-dom';
import { Bug, Sparkles, Droplets, ArrowRight, Package } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
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
      imageAlt: 'Washroom sinks with wall-mounted hygiene dispensers',
      path: '/hygiene-services',
    },
    {
      icon: Bug,
      title: 'Pest Control',
      description: 'Commercial and industrial pest control, with site scope and availability discussed for each enquiry.',
      image: images.pestControl,
      imageAlt: 'Pest control professional treating an indoor space',
      path: '/pest-control',
    },
    {
      icon: Sparkles,
      title: 'Commercial Cleaning Services',
      description: 'Regular and deep cleaning for homes, offices, commercial premises, and other facilities.',
      image: images.cleaning,
      imageAlt: 'Cleaner vacuuming an office carpet',
      path: '/commercial-cleaning',
    },
    {
      icon: Package,
      title: 'Cleaning Materials & Supplies',
      description: 'Cleaning materials and supplies for homes, offices, commercial premises, and other facilities. Product availability is confirmed on enquiry.',
      image: images.cleaningMaterials,
      imageAlt: 'Cleaning tools, gloves, and spray bottles',
      path: '/cleaning-supplies',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="What We Deliver"
          title="Hygiene, Pest Control, Cleaning & Materials Supply"
          description="We provide professional cleaning and hygiene solutions for homes, offices, commercial premises, and other facilities."
        />

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
          <Button asChild variant="outline" size="lg" className="font-body font-semibold px-8 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <Link to="/services">
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
