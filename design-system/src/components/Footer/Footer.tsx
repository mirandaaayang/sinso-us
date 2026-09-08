import React from 'react';

export interface FooterProps {
  links: Array<{ label: string; href: string }>;
  copy: string;
}

/** Dark branded site footer. Canonical version — replaces the plain inline-styled
 * footer previously duplicated across secondary pages. */
export function Footer({ links, copy }: FooterProps) {
  return (
    <footer className="ds-footer">
      <div className="ds-footer-inner">
        <div className="ds-footer-logo">
          Sinso<span>.</span>
        </div>
        <div className="ds-footer-links">
          {links.map((link) => (
            <a href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="ds-footer-copy">{copy}</div>
      </div>
    </footer>
  );
}
