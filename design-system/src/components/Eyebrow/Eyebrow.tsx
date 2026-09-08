import React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

/** Small uppercase accent-colored label used above headings. */
export function Eyebrow({ className, children, ...rest }: EyebrowProps) {
  const cls = className ? `ds-eyebrow ${className}` : 'ds-eyebrow';
  return (
    <span className={cls} {...rest}>
      {children}
    </span>
  );
}
