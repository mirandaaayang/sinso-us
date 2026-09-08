import React from 'react';
import { Hero } from '@sinso/design-system';

export const Default = () => (
  <Hero
    label="US-coordinated · Manufacturer-direct"
    heading="Color that holds."
    lead="A Ningbo factory running 7-color ECG on a Heidelberg Speedmaster XL 75, coordinated from the US. Manufacturer pricing, direct communication, and 80% Pantone coverage at ΔE 2.5 — for the work where color is the product."
    actions={[
      { label: 'Request a Sample', href: 'mailto:hello@sinso.us?subject=Packaging%20Sample%20Request', variant: 'primary' },
      { label: 'See Our Color Tech', href: '#ecg', variant: 'ghost' },
    ]}
    image={{
      src: 'https://sinso.us/images/ecg/ecg-vs-cmyk-hero.jpg',
      alt: 'Side-by-side ECG 7-color vs CMYK 4-color print comparison on anime artwork',
    }}
  />
);
