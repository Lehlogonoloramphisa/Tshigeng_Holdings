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
      icon: Bug,
      title: 'Pest Control',
      description: 'Pest control for homes and businesses in Gauteng and North West Province.',
      image: images.pestControl,
      path: '/pest-control',
    },
    {
      icon: Droplets,
      title: 'Hygiene Services',
      description: 'Supply, installation, maintenance, and servicing of hygiene equipment.',
      image: images.hygiene,
      path: '/hygiene-services',
    },
    {
      icon: Sparkles,
      title: 'Commercial & Industrial Cleaning',
      description: 'Cleaning support for homes, offices, commercial buildings and industrial sites, with once-off and recurring service enquiries.',
      image: images.cleaning,
      path: '/commercial-cleaning',
    },
    {
      icon: Package,
      title: 'Cleaning Materials & Supplies',
      description: 'Cleaning chemicals, equipment, consumables and hygiene supplies for workplaces and facility teams.',
      image: images.cleaningMaterials,
      path: '/cleaning-supplies',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="What We Deliver"
          title="Hygiene, Pest Control, Cleaning & Materials Supply"
          description="Our work is structured around the practical needs of facilities, institutions, businesses, and public sector teams across South Africa."
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
