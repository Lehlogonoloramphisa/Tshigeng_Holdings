import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function StatCounter({ value, suffix = '', label, light = false }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const num = parseInt(value);
    const duration = 2000;
    const steps = 60;
    const increment = num / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <div className={`font-heading text-4xl md:text-5xl font-bold ${light ? 'text-accent' : 'text-primary'}`}>
        {count}{suffix}
      </div>
      <div className={`mt-2 text-sm font-body font-medium ${light ? 'text-white/70' : 'text-muted-foreground'}`}>
        {label}
      </div>
    </motion.div>
  );
}