import React from 'react';
import { Nav } from '@sinso/design-system';

const links = [
  { label: 'Technology', href: '/technology' },
  { label: 'Capabilities', href: '/capabilities' },
  {
    label: 'Industries',
    items: [
      { label: 'Artist & Collector Editions', href: '/industries/artist-editions' },
      { label: 'Games & Puzzles', href: '/industries/games-and-puzzles' },
      { label: 'Retail Packaging', href: '/industries/retail-packaging' },
    ],
  },
  { label: 'Resources', href: '/resources' },
  { label: 'FAQ', href: '/faq' },
];

export const Default = () => (
  <Nav links={links} ctaLabel="Get a Sample" ctaHref="mailto:hello@sinso.us?subject=Packaging%20Inquiry" />
);
