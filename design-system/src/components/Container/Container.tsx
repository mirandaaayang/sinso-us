import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

/** Centered max-width content wrapper (1100px) used inside every Section. */
export function Container({ className, children, ...rest }: ContainerProps) {
  const cls = className ? `ds-container ${className}` : 'ds-container';
  return (
    <div className={cls} {...rest}>
      {children}
    </div>
  );
}
