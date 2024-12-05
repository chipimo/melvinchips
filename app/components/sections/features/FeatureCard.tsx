"use client";

import { motion } from 'framer-motion';
import { fadeInUp } from '@/app/utils/animations';
import { FeatureIcon } from './FeatureIcon';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      {...fadeInUp}
      transition={{ delay: 0.1 * index }}
      className="dark:bg-gray-900 bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] p-6 rounded-2xl glass-effect hover:bg-white/5 transition-colors"
    >
      <FeatureIcon icon={icon} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}