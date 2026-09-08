import React from 'react';
import { Button } from '@sinso/design-system';

export const Primary = () => (
  <Button variant="primary" href="mailto:hello@sinso.us?subject=Packaging%20Sample%20Request">
    Request a Sample
  </Button>
);

export const Ghost = () => (
  <div style={{ background: '#080F1C', padding: 24 }}>
    <Button variant="ghost" href="#ecg">
      See Our Color Tech
    </Button>
  </div>
);

export const Cta = () => (
  <Button variant="cta" href="mailto:hello@sinso.us?subject=Packaging%20Inquiry">
    Get a Sample
  </Button>
);
