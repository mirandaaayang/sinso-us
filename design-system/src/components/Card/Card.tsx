import React from 'react';

export interface CardProps {
  tag?: string;
  tagVariant?: 'accent' | 'neutral';
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  /** Larger, left-accent-bordered treatment for a page's lead/featured item. */
  featured?: boolean;
}

/** Link card used for case studies, resources, and industry listings.
 * Consolidated from the site's two prior card implementations. */
export function Card({ tag, tagVariant = 'accent', title, description, href, linkLabel, featured }: CardProps) {
  const cardCls = featured ? 'ds-card ds-card--featured' : 'ds-card';
  const titleCls = featured ? 'ds-card-title ds-card-title--lg' : 'ds-card-title';
  const tagCls = tagVariant === 'neutral' ? 'ds-card-tag ds-card-tag--neutral' : 'ds-card-tag';
  return (
    <a href={href} className={cardCls}>
      {tag ? <p className={tagCls}>{tag}</p> : null}
      <h2 className={titleCls}>{title}</h2>
      <p className="ds-card-desc">{description}</p>
      <span className="ds-card-link">{linkLabel}</span>
    </a>
  );
}
