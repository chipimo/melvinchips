"use client";

import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/animations";
import { FlipWords } from "../../ui/flip-words";

export function HeroTitle() {
  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="space-y-6">
      <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
        <span className="absolute inset-0 overflow-hidden rounded-full">
          <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
        </span>
        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
          <span className="w-2 h-2 rounded-full bg-[#FFE566]" />
          <span className="text-sm text-gray-300">
            Available for freelance work
          </span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M10.75 8.75L14.25 12L10.75 15.25"
            ></path>
          </svg>
        </div>
        <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </button>

      <div className=" flex justify-center items-center ">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-300">
          <h1 className="text-4xl text-white md:text-6xl font-bold tracking-tight leading-[1.1] ">
            Software Developer
          </h1>
          that delivers
          <div className="flex justify-center items-center duration-300">
            <FlipWords words={words} />
            <div className="text-gradient"> websites</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
