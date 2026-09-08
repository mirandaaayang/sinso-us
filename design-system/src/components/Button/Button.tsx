import React from 'react';

export interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** primary = solid accent (hero CTAs); ghost = outlined (hero secondary action);
   *  cta = small accent pill (nav "Get a Sample" button). */
  variant?: 'primary' | 'ghost' | 'cta';
  children?: React.ReactNode;
}

/** Sinso's single button component. Always renders as an anchor (every button on the site links somewhere, e.g. mailto:). */
export function Button({ variant = 'primary', className, children, ...rest }: ButtonProps) {
  const cls = ['ds-btn', `ds-btn--${variant}`, className].filter(Boolean).join(' ');
  return (
    <a className={cls} {...rest}>
      {children}
    </a>
  );
}
