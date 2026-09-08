import React from 'react';
import { Footer } from '@sinso/design-system';

export const Default = () => (
  <Footer
    links={[
      { label: 'About', href: '/about' },
      { label: 'hello@sinso.us', href: 'mailto:hello@sinso.us' },
    ]}
    copy="© 2026 Sinso · Ningbo Sinso Printing Co., Ltd."
  />
);
