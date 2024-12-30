"use client";

import Link from "next/link";
import { ArrowRight, Grid, Mail, Scale, Heart, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Container } from "../ui/Container";
import { TextHoverEffect } from "../ui/text-hover-effect";

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative z-10 mt-auto">
      <div className="w-[20%] m-auto flex items-center justify-center">
        <TextHoverEffect text="MELVIN " />
      </div>
      <Container>
        <div className="bg-[#111111]/80 backdrop-blur-sm rounded-2xl p-12 border border-white/10 relative overflow-hidden">
          {/* Gradient borders with fade effect */}
          <div className="absolute inset-0">
            <div className="absolute bottom-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-[#FFEC42]/10 to-transparent opacity-50" />
            <div className="absolute left-0 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-[#FFEC42]/10 to-transparent opacity-50" />
            <div className="absolute right-0 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-[#FFEC42]/10 to-transparent opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
            {/* Discovery Call Section */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-4 h-4 text-[#FFEC42]" />
                <h3 className="text-lg">
                  Want to make sure we&apos;re the right fit? Book a discovery
                  call!
                </h3>
              </div>
              <p className="text-white/60 mb-6">
                Find out how you can up your design game, forever.
              </p>
              <div className="space-y-4">
                <Link
                  href="/book-call"
                  className="inline-flex items-center gap-2 bg-[#FFEC42] text-black px-6 py-2 rounded-full font-medium hover:bg-[#FFEC42]/90 transition-colors"
                >
                  Book a call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div>
                  <Link
                    href="/plans"
                    className="inline-flex items-center text-white/60 hover:text-white px-4 py-2 bg-black/20 rounded-lg"
                  >
                    See our plans
                  </Link>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Grid className="w-4 h-4 text-[#FFEC42]" />
                <h3 className="text-lg">Navigation</h3>
              </div>
              <ul className="space-y-3 text-white/60">
                <li>
                  <Link href="/login" className="hover:text-white">
                    Log in
                  </Link>
                </li>
                <li>
                  <Link href="/subscribe" className="hover:text-white">
                    Subscribe
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-white">
                    Our work
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/scope" className="hover:text-white">
                    Scope of work
                  </Link>
                </li>
                <li>
                  <Link href="/plans" className="hover:text-white">
                    Plans
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-white">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Info */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Scale className="w-4 h-4 text-[#FFEC42]" />
                <h3 className="text-lg">Legal Info</h3>
              </div>
              <ul className="space-y-3 text-white/60">
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Mail className="w-4 h-4 text-[#FFEC42]" />
                <h3 className="text-lg">Contact us</h3>
              </div>
              <p className="text-white/60 mb-4">chipimo31@gmail.com</p>
              <div className="space-y-3">
                <Link
                  href="/book-call"
                  className="block w-fit bg-black/20 text-white hover:bg-black/30 px-4 py-2 rounded-lg"
                >
                  Book a call
                </Link>
                <Link
                  href="/chat"
                  className="block w-fit bg-black/20 text-white hover:bg-black/30 px-4 py-2 rounded-lg"
                >
                  Chat with us
                </Link>
              </div>
            </div>

            {/* Made By Section */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="w-4 h-4 text-[#FFEC42]" />
                <h3 className="text-lg">Made by Melvin Chipimo</h3>
              </div>
              <p className="text-white/60 mb-4">chipimo31@gmail.com</p>
              <Link
                href="https://x.com/ChamaMelvin"
                className="inline-flex items-center gap-2 bg-black/20 text-white hover:bg-black/30 px-4 py-2 rounded-lg"
              >
                Follow on X
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`fixed bottom-8 right-8 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/30 transition-all duration-300 ${
            showScrollTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </Container>
    </footer>
  );
}
