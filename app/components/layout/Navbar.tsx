"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const links = ['Projects', 'Experience', 'Blog', 'Contact'];
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 z-50"
    >
      <div className="absolute inset-0 bg-black/20 backdrop-blur-xl border-b border-white/5" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-[#FFE566] rounded-full" />
            MC
          </Link>
          <div className="flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                {link}
              </Link>
            ))}
            <button className="px-4 py-2 glass-effect text-sm text-white rounded-full hover:bg-white/10 transition-colors">
              Contact
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}