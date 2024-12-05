"use client";

import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { ProjectCard } from './projects/ProjectCard';
import { fadeInUp } from '@/app/utils/animations';

const projects = [
  {
    title: "My Little Pressing",
    description: "Mobile app for on-demand laundry services",
    image: "/projects/pressing.jpg",
    tags: ["React Native", "Node.js", "MongoDB"]
  },
  {
    title: "Ultimate Ads Library",
    description: "Digital marketing analytics platform",
    image: "/projects/ads.jpg",
    tags: ["Next.js", "TypeScript", "TailwindCSS"]
  },
  {
    title: "ID Home",
    description: "Smart home automation system",
    image: "/projects/home.jpg",
    tags: ["React", "Firebase", "Material UI"]
  }
];

export function Projects() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          {...fadeInUp}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Trusted by global
            <br />
            <span className="text-gradient">brands worldwide</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}