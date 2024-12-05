"use client";

import { motion } from 'framer-motion';
import { scaleOnHover } from '@/app/utils/animations';

export function CTAButton() {
  return (
    <div className="flex items-center gap-4 justify-center">
      <motion.button
        {...scaleOnHover}
        className="px-6 py-2.5 bg-[#FFE566] text-black rounded-full 
                   hover:bg-[#FFD700] transition-all duration-300
                   text-sm font-medium flex items-center gap-2"
      >
        Get Started
        <span className="text-lg">→</span>
      </motion.button>
      <motion.button
        {...scaleOnHover}
        className="px-6 py-2.5 glass-effect text-white rounded-full 
                   hover:bg-white/10 transition-all duration-300
                   text-sm font-medium"
      >
        Explore Work
      </motion.button>
    </div>
  );
}