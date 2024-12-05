"use client";

import { Container } from '../ui/Container';
import { FeatureHeading } from './features/FeatureHeading';
import { FeatureGrid } from './features/FeatureGrid';

export function Features() {
  return (
    <section className="py-20">
      <Container>
        <FeatureHeading />
        <FeatureGrid />
      </Container>
    </section>
  );
}