"use client";

import { motion } from 'framer-motion';
import { fadeInUp } from '@/app/utils/animations';

export function FeatureHeading() {
  return (
    <motion.div
      {...fadeInUp}
      className="text-center mb-16 space-y-4"
    >
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        Everything you need for
        <br />
        <span className="text-gradient">high-quality development</span>
      </h2>
    </motion.div>
  );
}