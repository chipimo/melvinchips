"use client";

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/utils/animations';

export function HeroTitle() {
  return (
    <motion.div 
      {...fadeIn}
      transition={{ delay: 0.2 }}
      className="space-y-6"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect">
        <span className="w-2 h-2 rounded-full bg-[#FFE566]" />
        <span className="text-sm text-gray-400">Available for freelance work</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] ">
        Software Developer
        <br />
        <span className="text-gradient">that delivers</span>
      </h1>
    </motion.div>
  );
}