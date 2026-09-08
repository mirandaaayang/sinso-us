import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'accent';
  children?: React.ReactNode;
}

/** Small pill badge, e.g. capability/certification tags. */
export function Tag({ variant = 'default', className, children, ...rest }: TagProps) {
  const cls = ['ds-tag', variant === 'accent' ? 'ds-tag--accent' : '', className]
    .filter(Boolean)
    .join(' ');
  return (
    <span className={cls} {...rest}>
      {children}
    </span>
  );
}
