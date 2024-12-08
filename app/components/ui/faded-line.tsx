"use client";

import { motion } from "framer-motion";

export default function FadedLine() {
  return (
    <div className="relative w-full h-16 flex items-center justify-center">
      <motion.div
        className="h-px w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}
