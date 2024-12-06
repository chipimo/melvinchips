"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/app/utils/animations";

interface ExpertiseCardProps {
  title: string;
  description: string;
  index: number;
}

export function ExpertiseCard({
  title,
  description,
  index,
}: ExpertiseCardProps) {
  return (
    <motion.div
      {...fadeInUp}
      transition={{ delay: 0.1 * index }}
      className="p-8 relative rounded-2xl glass-effect hover:bg-white/5 transition-colors "
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#FFEC42]/20 to-transparent" />
        <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#FFEC42]/40 to-transparent" />
        <div className="absolute left-0 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-[#FFEC42]/20 to-transparent" />
        <div className="absolute right-0 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-[#FFEC42]/20 to-transparent" />
      </div>
      <div className="h-1 w-12 bg-[#FFE566] mb-6 rounded-full" />
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}
