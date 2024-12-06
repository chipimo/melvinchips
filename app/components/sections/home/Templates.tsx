"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";
import { Container } from "../../ui/Container";

const templates = [
  {
    title: "Dashboard Pro",
    description: "Modern admin dashboard template with dark mode support",
    price: "ZMW 149",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    category: "Admin Template"
  },
  {
    title: "E-commerce Kit",
    description: "Complete e-commerce solution with cart and checkout",
    price: "ZMW 199",
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    category: "E-commerce"
  },
  {
    title: "Portfolio Plus",
    description: "Showcase your work with this premium portfolio template",
    price: "ZMW 99",
    rating: 5.0,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    category: "Portfolio"
  },
  {
    title: "Blog Starter",
    description: "Clean and minimal blog template",
    price: "Free",
    rating: 4.7,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    category: "Blog"
  },
  {
    title: "Landing Page",
    description: "Modern landing page template with animations",
    price: "Free",
    rating: 4.6,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
    category: "Landing Page"
  }
];

export function Templates() {
  return (
    <section className="py-20">
      <Container>
        <div className="flex items-center justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-4">Premium  <span className="text-gradient">Templates</span></h2>
            <p className="text-white/60">
              Professional-grade templates to accelerate your development process
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/templates"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-lg transition-colors"
            >
              View All Templates
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          <div className="overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-6" style={{ width: 'max-content' }}>
              {templates.map((template, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-[#111111]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10"
                  style={{ width: '400px' }}
                >
                  {/* Gradient borders */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#FFEC42]/20 to-transparent" />
                    <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#FFEC42]/20 to-transparent" />
                    <div className="absolute left-0 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-[#FFEC42]/20 to-transparent" />
                    <div className="absolute right-0 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-[#FFEC42]/20 to-transparent" />
                  </div>

                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={template.image}
                      alt={template.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent opacity-60" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-[#FFEC42] bg-[#FFEC42]/10 px-3 py-1 rounded-full">
                        {template.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-[#FFEC42] fill-[#FFEC42]" />
                        <span className="text-sm">{template.rating}</span>
                        <span className="text-sm text-white/40">({template.reviews})</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{template.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{template.description}</p>

                    <div className="flex items-center justify-between">
                      <span className={`text-2xl font-bold ${template.price === 'Free' ? 'text-[#FFEC42]' : ''}`}>
                        {template.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-[#FFEC42] text-black px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                      >
                        Preview
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gradient fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#111111] to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#111111] to-transparent pointer-events-none" />
        </div>
      </Container>
    </section>
  );
}