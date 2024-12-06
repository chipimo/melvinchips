"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const links = ["Projects", "Experience", "Blog", "Contact"];

  return (
    <>
      <div className="text-center mt-10 text-lg text-white fixed z-30 right-0 left-0">
        Melvin Chipimo
      </div>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed w-full top-0 z-50"
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-xl border-b border-white/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="hidden md:flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-xl font-bold flex items-center gap-2"
            >
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
          <div className="md:hidden flex items-center justify-between h-16">
            <Link
              href="/"
              className="text-xl font-bold flex items-center gap-2"
            >
              <span className="w-2 h-2 bg-[#FFE566] rounded-full" />
              MC
            </Link>
            {/* <div className="flex items-center gap-8">
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
          </div> */}
            <div>
              <div>
                <button className="relative group">
                  <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200 shadow-md">
                    <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 group-focus:-rotate-[45deg] origin-center">
                      <div className="bg-white h-[2px] w-1/2 rounded transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-right delay-75 group-focus:-translate-y-[1px]"></div>
                      <div className="bg-white h-[1px] rounded"></div>
                      <div className="bg-white h-[2px] w-1/2 rounded self-end transform transition-all duration-300 group-focus:-rotate-90 group-focus:h-[1px] origin-left delay-75 group-focus:translate-y-[1px]"></div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
