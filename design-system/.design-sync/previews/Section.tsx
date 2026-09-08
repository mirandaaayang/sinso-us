import React from 'react';
import { Section, Eyebrow } from '@sinso/design-system';

export const Default = () => (
  <Section>
    <Eyebrow>Technology</Eyebrow>
    <h2 style={{ fontFamily: 'var(--font-head)', margin: 0 }}>7-color ECG vs. 4-color CMYK</h2>
    <p style={{ color: 'var(--text-2)', marginTop: 12, maxWidth: 600 }}>
      80% Pantone coverage at ΔE 2.5 — colors standard CMYK printing simply can't reach.
    </p>
  </Section>
);

export const Soft = () => (
  <Section variant="soft">
    <Eyebrow>Industries</Eyebrow>
    <h2 style={{ fontFamily: 'var(--font-head)', margin: 0 }}>Three verticals. One ECG press.</h2>
  </Section>
);

export const Dark = () => (
  <Section variant="dark">
    <Eyebrow>US-coordinated · Manufacturer-direct</Eyebrow>
    <h2 style={{ fontFamily: 'var(--font-head)', margin: 0, color: '#fff' }}>Color that holds.</h2>
  </Section>
);
