import React from 'react';

export interface QuoteProps {
  quote: string;
  cite: string;
}

/** Accent-bordered italic quote block, e.g. customer/partner testimonials. */
export function Quote({ quote, cite }: QuoteProps) {
  return (
    <blockquote className="ds-quote">
      <p>{quote}</p>
      <cite>{cite}</cite>
    </blockquote>
  );
}
