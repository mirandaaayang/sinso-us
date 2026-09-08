import React from 'react';
import { Card } from '@sinso/design-system';

export const Featured = () => (
  <Card
    featured
    tag="Sustainability · August 2026"
    title="The PPWR Deadline Is Real. Most Packaging Supply Chains Aren't Ready."
    description="The EU's Packaging and Packaging Waste Regulation core obligations took effect August 12, 2026. What it means for procurement, which certifications answer the audit questionnaires, and how ECG printing reduces material waste alongside color cost."
    href="/resources/ppwr-packaging-compliance"
    linkLabel="Read article →"
  />
);

export const Default = () => (
  <Card
    tag="Case Study · Artist Editions · April 2026"
    title="InJoy Puzzle Company × Holton Rower"
    description="Two printers had already tried and failed to reproduce a Holton Rower hand pour painting on a limited-edition puzzle. Deep blues flattened, vivid oranges shifted, gradients banded — standard CMYK couldn't reach those colors. This is how Sinso solved it."
    href="/case-study/in-joy"
    linkLabel="Read case study →"
  />
);

export const NeutralTag = () => (
  <Card
    tag="Technical Reference · March 2025"
    tagVariant="neutral"
    title="ECG Benchmarking: 7-Color vs. CMYK on High-Saturation Packaging"
    description="Press metrics, substrate coverage, and the consistency case for running complex color SKUs through a single vendor process — for printers benchmarking and buyers who need to justify the decision internally."
    href="/case-study/ecg-benchmarking"
    linkLabel="Read technical guide →"
  />
);
