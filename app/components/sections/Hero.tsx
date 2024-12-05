"use client";

import { motion } from "framer-motion";
import { HeroTitle } from "./hero/HeroTitle";
import { HeroSubtitle } from "./hero/HeroSubtitle";
import { CTAButton } from "../ui/CTAButton";
import { SocialProof } from "./hero/SocialProof";
import { Container } from "../ui/Container";
import { fadeInUp } from "@/app/utils/animations";

export default function Hero() {
  return (
    <>
      <section className="min-h-[85vh] flex flex-col items-center justify-center pt-3 dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
        <Container>
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto w-full text-center space-y-10"
          >
            <HeroTitle />
            <HeroSubtitle />
            <CTAButton />
            <SocialProof />
          </motion.div>
        </Container>
      </section>
    </>
  );
}
