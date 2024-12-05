"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const projects = [
  '/projects/project1.jpg',
  '/projects/project2.jpg',
  '/projects/project3.jpg',
  '/projects/project4.jpg',
  '/projects/project5.jpg',
  '/projects/project6.jpg',
  '/projects/project7.jpg',
  '/projects/project8.jpg',
  '/projects/project9.jpg'
];

export function ProjectShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-20 overflow-hidden">
      <div className="grid grid-cols-3 gap-6 max-w-[90%] mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8,
              delay: index * 0.1
            }}
            className="relative rounded-2xl overflow-hidden aspect-[4/3]"
          >
            <Image
              src={project}
              alt={`Project ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}