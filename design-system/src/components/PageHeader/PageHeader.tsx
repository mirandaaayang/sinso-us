import React from 'react';

export interface PageHeaderProps {
  eyebrow?: string;
  heading: string;
  lead?: string;
}

/** Light page-top header used on secondary pages (industries, resources, capabilities, etc.):
 * eyebrow label, h1, optional lead paragraph. */
export function PageHeader({ eyebrow, heading, lead }: PageHeaderProps) {
  return (
    <header className="ds-page-header">
      {eyebrow ? <p className="ds-page-header-eyebrow">{eyebrow}</p> : null}
      <h1 className="ds-page-header-heading">{heading}</h1>
      {lead ? <p className="ds-page-header-lead">{lead}</p> : null}
    </header>
  );
}
