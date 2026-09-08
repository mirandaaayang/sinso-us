import React from 'react';
import { Button } from '../Button/Button';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavDropdown {
  label: string;
  items: NavLink[];
}

export interface NavProps {
  logoHref?: string;
  /** Flat links and dropdown groups, in display order. */
  links: Array<NavLink | NavDropdown>;
  ctaLabel: string;
  ctaHref: string;
}

function isDropdown(link: NavLink | NavDropdown): link is NavDropdown {
  return 'items' in link;
}

/** Fixed site header: logo, nav links (with optional dropdown groups), CTA button.
 * Identical across every page of the site. */
export function Nav({ logoHref = '/', links, ctaLabel, ctaHref }: NavProps) {
  return (
    <nav className="ds-nav">
      <div className="ds-nav-inner">
        <a href={logoHref} className="ds-nav-logo">
          Sinso<span>.</span>
        </a>
        <div className="ds-nav-links">
          {links.map((link) =>
            isDropdown(link) ? (
              <div className="ds-nav-dropdown" key={link.label}>
                <button className="ds-nav-dropdown-btn" aria-haspopup="true">
                  {link.label}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div className="ds-nav-dropdown-menu">
                  {link.items.map((item) => (
                    <a href={item.href} key={item.href}>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            )
          )}
        </div>
        <Button variant="cta" href={ctaHref}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          {ctaLabel}
        </Button>
      </div>
    </nav>
  );
}
