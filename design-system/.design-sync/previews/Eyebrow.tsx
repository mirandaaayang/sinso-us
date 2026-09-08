import React from 'react';
import { Eyebrow } from '@sinso/design-system';

export const Default = () => <Eyebrow>Industries</Eyebrow>;

export const OnDark = () => (
  <div className="ds-section--dark" style={{ background: '#080F1C', padding: 24 }}>
    <Eyebrow>US-coordinated · Manufacturer-direct</Eyebrow>
  </div>
);
