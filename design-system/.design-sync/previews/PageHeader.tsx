import React from 'react';
import { PageHeader } from '@sinso/design-system';

export const Default = () => (
  <PageHeader
    eyebrow="Industries"
    heading="Three verticals. One ECG press."
    lead="Artist and collector editions, games and puzzles, and retail packaging — three verticals where print quality is product quality, not a cost to minimize."
  />
);

export const NoLead = () => (
  <PageHeader eyebrow="Resources" heading="Work that speaks for itself." />
);
