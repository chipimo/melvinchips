"use client";

import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { ExpertiseCard } from './expertise/ExpertiseCard';
import { fadeInUp } from '@/app/utils/animations';

const expertiseData = [
  {
    title: "User Interface Design (UI)",
    description: "Specializing in crafting visually stunning and highly functional user interfaces, I blend aesthetic appeal with usability to create designs that not only look great but feel intuitive to use. Benefit from an interface that engages your users and enhances their experience.",
  },
  {
    title: "User Experience Design (UX)",
    description: "My approach to UX design focuses on understanding your users deeply to create experiences that are not just usable, but delightful. By prioritizing usability, accessibility, and pleasure, I ensure that your product is not just a tool, but a journey that users love to embark on.",
  },
  {
    title: "No-Code Website",
    description: "After design comes integration. That's why I'm transforming my mock-ups into fully functional websites without writing a single line of code – with a bit of Webflow's magic. This process ensures that every design is visually striking but also perfectly responsive.",
  },
  {
    title: "MVP Creation",
    description: "I specialize in turning brilliant ideas into viable products with Minimum Viable Product (MVP) creation. This approach allows you to test, learn, and iterate, ensuring your final product is market-ready and user-approved. Benefit from a launch strategy that's lean, agile, and results-focused.",
  }
];

export function Expertise() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          {...fadeInUp}
          className="text-center mb-16 space-y-4"
        >
          <span className="text-gray-400 text-sm">What's in My Magic Hat?</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            My Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseData.map((item, index) => (
            <ExpertiseCard
              key={item.title}
              {...item}
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}