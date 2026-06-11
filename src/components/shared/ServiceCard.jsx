import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ icon: Icon, title, description, image, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to="/services" className="group block h-full">
        <div className="relative h-full bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="w-12 h-12 rounded-xl bg-accent/90 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <Icon className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-heading text-xl font-bold text-card-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
            </div>
            <p className="text-sm font-body text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
