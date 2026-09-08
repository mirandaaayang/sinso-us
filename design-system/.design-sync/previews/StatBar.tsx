import React from 'react';
import { StatBar } from '@sinso/design-system';

export const Default = () => (
  <StatBar
    stats={[
      { value: '25+', label: 'Years of precision color printing' },
      { value: '8', label: 'Color ECG press — only a handful in China' },
      { value: 'G7', label: 'Master Printer certified' },
      { value: 'GMI', label: 'Certified — cleared for Target, Walmart' },
    ]}
  />
);
