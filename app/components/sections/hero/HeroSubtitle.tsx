"use client";

import { motion } from 'framer-motion';
import { fadeIn } from '@/app/utils/animations';

export function HeroSubtitle() {
  return (
    <motion.p 
      {...fadeIn}
      transition={{ delay: 0.4 }}
      className="text-xs md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
    >
      Building modern web applications with clean code and
      <br />
      exceptional user experiences using <span className="text-[#FFE566]">cutting-edge technologies</span>
    </motion.p>
  );
}