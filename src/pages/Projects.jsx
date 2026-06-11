import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ArrowRight, Building2, Factory, Home as HomeIcon, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SectionHeading from '@/components/shared/SectionHeading';

const IMAGES = {
  municipal: 'https://images.pexels.com/photos/36669607/pexels-photo-36669607.jpeg?auto=compress&cs=tinysrgb&w=1200',
  administration: 'https://images.pexels.com/photos/33463115/pexels-photo-33463115.jpeg?auto=compress&cs=tinysrgb&w=1200',
  privateCompany: 'https://images.pexels.com/photos/34165409/pexels-photo-34165409.jpeg?auto=compress&cs=tinysrgb&w=1200',
  stateEnterprise: 'https://images.pexels.com/photos/27085598/pexels-photo-27085598.jpeg?auto=compress&cs=tinysrgb&w=1200',
  industrial: 'https://images.pexels.com/photos/33719837/pexels-photo-33719837.jpeg?auto=compress&cs=tinysrgb&w=1200',
  commercial: 'https://images.pexels.com/photos/34725825/pexels-photo-34725825.jpeg?auto=compress&cs=tinysrgb&w=1200',
};

const categories = ['All', 'Government', 'Municipal', 'Private', 'State Enterprise'];

const projects = [
  {
    title: 'Kgetleng Municipality',
    category: 'Municipal',
    location: 'North West',
    year: 'Client',
    description: 'Facilities support for a municipal environment, aligned to cleaner, safer, and more reliable public facilities.',
    services: ['Pest Control', 'Cleaning Services'],
    image: IMAGES.municipal,
  },
  {
    title: 'Royal Bafokeng Administration',
    category: 'Government',
    location: 'North West',
    year: 'Client',
    description: 'Cleaning and facility service support for administrative environments, structured around hygiene standards and operational priorities.',
    services: ['Commercial Cleaning', 'Hygiene Services'],
    image: IMAGES.administration,
  },
  {
    title: 'British-Xabhaya (PTY) Ltd.',
    category: 'Private',
    location: 'South Africa',
    year: 'Client',
    description: 'Supply and service coordination for a private company requiring dependable cleaning products and facility support.',
    services: ['Cleaning Materials', 'Commercial Cleaning'],
    image: IMAGES.privateCompany,
  },
  {
    title: 'Air Traffic & Navigation Services SOC Ltd',
    category: 'State Enterprise',
    location: 'South Africa',
    year: 'Client',
    description: 'Facility service support for a state enterprise environment where reliability, responsiveness, and clean operating spaces matter.',
    services: ['Hygiene Services', 'Cleaning Services'],
    image: IMAGES.stateEnterprise,
  },
  {
    title: 'Industrial Facility Cleaning',
    category: 'Private',
    location: 'Gauteng',
    year: 'Sector',
    description: 'Flexible commercial and industrial cleaning support shaped around client requirements and day-to-day operational priorities.',
    services: ['Industrial Cleaning', 'Cleaning Materials'],
    image: IMAGES.industrial,
  },
  {
    title: 'Domestic & Commercial Customer Support',
    category: 'Private',
    location: 'South Africa',
    year: 'Sector',
    description: 'Multi-service support for customers who need hygiene, cleaning material supply, and pest control assistance where there is a need.',
    services: ['Pest Control', 'Cleaning Materials', 'Hygiene Services'],
    image: IMAGES.commercial,
  },
];

const categoryIcons = {
  Commercial: Building2,
  Industrial: Factory,
  Residential: HomeIcon,
  Government: Landmark,
  Municipal: Landmark,
  Private: Building2,
  'State Enterprise': Factory,
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      <section className="relative py-20 md:py-32 bg-brand-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-96 h-96 bg-support-green rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-xs font-body font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
              Clients & Sectors
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Serving Organisations That Need a{' '}
              <span className="text-highlight-yellow">Dependable</span> Partner
            </h1>
            <p className="mt-6 text-lg font-body text-white/70 leading-relaxed max-w-2xl">
              Tshigeng Holdings works with clients across South Africa, including state enterprises,
              municipalities, private companies, commercial sites, and industrial environments.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filtered.map((project, index) => {
                const CatIcon = categoryIcons[project.category] || Building2;
                return (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group"
                  >
                    <div className="bg-card rounded-2xl border border-border overflow-hidden h-full hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500">
                      <div className="relative h-56 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/75 to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-white/90 text-xs font-body">
                            <MapPin className="w-3.5 h-3.5" />
                            {project.location}
                          </div>
                          <div className="flex items-center gap-2 text-white/90 text-xs font-body">
                            <Calendar className="w-3.5 h-3.5" />
                            {project.year}
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <CatIcon className="w-4 h-4 text-support-green" />
                          <span className="text-xs font-body font-semibold text-support-green uppercase tracking-wider">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">
                          {project.title}
                        </h3>
                        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.services.map((s) => (
                            <Badge
                              key={s}
                              variant="secondary"
                              className="text-xs font-body bg-muted text-muted-foreground"
                            >
                              {s}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/50">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionHeading
            eyebrow="Start Your Project"
            title="Let's Keep Your Facility Running Seamlessly"
            description="Every facility has unique hygiene, cleaning, pest control, and supply needs. We'd love to understand yours and prepare a practical response."
          />
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-body font-semibold px-8 py-6 text-base"
            >
              Discuss Your Facility Needs
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
