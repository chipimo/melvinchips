"use client";

import Link from 'next/link';
import { NAVIGATION_LINKS } from '@/app/utils/constants';

export function NavLinks() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {NAVIGATION_LINKS.map(({ name, href }) => (
        <Link
          key={name}
          href={href}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {name}
        </Link>
      ))}
      <button className="px-6 py-2 glass-effect rounded-full hover:bg-white/10 transition-colors">
        Hire Me
      </button>
    </div>
  );
}