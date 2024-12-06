import Hero from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { TrustedBrands } from './components/sections/TrustedBrands';
import { ProjectShowcase } from './components/sections/ProjectShowcase';
import { Expertise } from './components/sections/Expertise';
import { HeroParallaxSection } from './components/sections/expertise/HeroParallax';
import { Templates } from './components/sections/home/Templates';
import { WallOfLove } from './components/sections/home/WallOfLove';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustedBrands />
      <Features />
      <Templates />
      <Expertise />
      <WallOfLove />
      <HeroParallaxSection />
    </main>
  );
}