"use client";

import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold gradient-text">
      Melvin.dev
    </Link>
  );
}