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
          {["/Chalwe 20190204_190755.jpg", "/FB_IMG_1544221963951.jpg", "/Mulenga Mwenya Zm 20181208_011459.jpg",].map((i) => (
            <div
              key={i}
              className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-black"
            >
            <Image
              src={i}
              alt={`Project`}
              fill
              className="object-cover"
            />
            </div>
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