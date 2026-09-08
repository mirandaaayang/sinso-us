import React from 'react';
import { Tag } from '@sinso/design-system';

export const Default = () => (
  <div style={{ display: 'flex', gap: 8 }}>
    <Tag>Ningbo, China</Tag>
    <Tag>25+ years</Tag>
  </div>
);

export const Accent = () => (
  <div style={{ display: 'flex', gap: 8 }}>
    <Tag variant="accent">ECG 7-color printing</Tag>
    <Tag variant="accent">GMI Certified</Tag>
  </div>
);
