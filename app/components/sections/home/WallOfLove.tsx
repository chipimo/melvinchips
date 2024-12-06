"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "../../ui/Container";

const testimonials = [
  {
    name: "John Banda",
    role: "CEO of TechLink Solutions",
    avatar: "/Chalwe 20190204_190755.jpg",
    content: "Melvin is an outstanding developer who turned our ideas into a seamless digital solution. His full-stack expertise is top-notch!"
  },
  {
    name: "Sarah Mwale",
    role: "Founder of GreenTech Innovations",
    avatar: "/avatar-default-icon.png",
    content: "We needed a developer who could deliver quality and speed—and he did just that. The final product exceeded all expectations!"
  },
  {
    name: "Peter Kalumba",
    role: "Project Manager at Afrisoft Enterprises",
    avatar: "/avatar-default-icon.png",
    content: "The platform’s functionality and design were spot-on. It’s rare to find a developer who balances both so well. ✨"
  },
  {
    name: "Angela Chanda",
    role: "Owner of Trendy Restaurant POS Systems",
    avatar: "/avatar-default-icon.png",
    content: "We were blown away by the POS system built for us. It streamlined everything and was exactly what we needed! 💪🎯"
  },
  {
    name: "Jacob Ngoma",
    role: "CTO of ZedConnect Technologies",
    avatar: "/Mulenga Mwenya Zm 20181208_011459.jpg",
    content: "Melvin’s problem-solving skills and technical expertise transformed our platform. A true professional through and through!."
  },
  {
    name: "Lucy Phiri",
    role: "Founder of EduSmart Zambia",
    avatar: "/avatar-default-icon.png",
    content: "Our online learning platform wouldn’t be what it is without him. The result was modern, scalable, and user-friendly!"
  }
];

export function WallOfLove() {
  return (
    <section className="py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">
            Our Wall <span className="text-gradient">of Love</span> 💛
          </h2>
          <p className="text-white/60">
            Read what clients are saying about<br />
            Melvin Chipimo✨.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#111111]/50 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-white/80">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}