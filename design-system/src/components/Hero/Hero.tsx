import React from 'react';
import { Button } from '../Button/Button';

export interface HeroAction {
  label: string;
  href: string;
  variant?: 'primary' | 'ghost';
}

export interface HeroProps {
  label?: string;
  heading: React.ReactNode;
  lead?: string;
  actions?: HeroAction[];
  image?: { src: string; alt: string; badge?: React.ReactNode };
}

/** Dark marketing hero used on the homepage: label pill, heading, lead, action
 * buttons, and a framed image with an optional overlay badge. */
export function Hero({ label, heading, lead, actions, image }: HeroProps) {
  return (
    <section className="ds-hero">
      <div className="ds-hero-container">
        <div className="ds-hero-grid">
          <div>
            {label ? (
              <span className="ds-hero-label">
                <span className="ds-hero-label-dot" />
                {label}
              </span>
            ) : null}
            <h1 className="ds-hero-heading">{heading}</h1>
            {lead ? <p className="ds-hero-lead">{lead}</p> : null}
            {actions && actions.length ? (
              <div className="ds-hero-actions">
                {actions.map((action) => (
                  <Button key={action.href} href={action.href} variant={action.variant ?? 'primary'}>
                    {action.label}
                  </Button>
                ))}
              </div>
            ) : null}
          </div>
          {image ? (
            <div className="ds-hero-img-wrap">
              <img src={image.src} alt={image.alt} />
              {image.badge ? <div className="ds-hero-img-badge">{image.badge}</div> : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
