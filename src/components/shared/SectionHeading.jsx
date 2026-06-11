import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, description, align = 'center', light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}
    >
      {eyebrow && (
        <span className={`inline-block text-xs font-body font-semibold tracking-[0.2em] uppercase mb-4 ${
          light ? 'text-accent' : 'text-accent'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
        light ? 'text-white' : 'text-foreground'
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg font-body leading-relaxed ${
          light ? 'text-white/70' : 'text-muted-foreground'
        }`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}