"use client";

import { motion } from 'framer-motion';

export function CheckeredBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-grid-pattern"
      />
      <div className="spotlight" />
    </div>
  );
}