"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const links = ['About', 'Projects', 'Skills', 'Contact'];
  
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full top-0 bg-black/50 backdrop-blur-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">MC</Link>
          <div className="hidden md:flex space-x-8">
            {links.map((link) => (
              <Link
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}