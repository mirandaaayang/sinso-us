import React from 'react';
import { Container } from '../Container/Container';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** default = white bg; soft = --bg-soft; dark = --navy with light text. */
  variant?: 'default' | 'soft' | 'dark';
  children?: React.ReactNode;
}

/** Page section with vertical rhythm and a centered Container inside it. */
export function Section({ variant = 'default', className, children, ...rest }: SectionProps) {
  const cls = ['ds-section', variant !== 'default' ? `ds-section--${variant}` : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <section className={cls} {...rest}>
      <Container>{children}</Container>
    </section>
  );
}
