"use client";

import { motion } from 'framer-motion';
import { fadeInUp } from '@/app/utils/animations';

interface ExpertiseCardProps {
  title: string;
  description: string;
  index: number;
}
   
export function ExpertiseCard({ title, description, index }: ExpertiseCardProps) {
  return (
    <motion.div
      {...fadeInUp}
      transition={{ delay: 0.1 * index }}
      className="p-8 rounded-2xl glass-effect hover:bg-white/5 transition-colors "
    >
      <div className="h-1 w-12 bg-[#FFE566] mb-6 rounded-full" />
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}