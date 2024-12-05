"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn } from '@/app/utils/animations';

export function SocialProof() {
  return (
    <motion.div
      {...fadeIn}
      transition={{ delay: 0.6 }}
      className="flex flex-col items-center gap-4"
    >
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full bg-gray-600 border-2 border-black"
            />
          ))}
        </div>
        <p className="text-sm text-gray-400">
          Trusted by over <span className="text-white">120</span> clients
          <br />
          in the community
        </p>
      </div>
    </motion.div>
  );
}