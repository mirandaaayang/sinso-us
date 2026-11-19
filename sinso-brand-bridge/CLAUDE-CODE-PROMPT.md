# Sinso brand bridge — Claude Code prompt

Paste everything below the line into Claude Code, run from the root of the sinso.us repo. Copy the `_brand-bridge/` folder from this bundle into the root of the sinso.us repo before running it.

---

## Context

Sinso (宁波市新兆印业) has two web identities:

- **sinso.us** (this repo): US site. Near-black navy dark sections (`#080F1C`), off-white light sections (`#F7F8FA`), navy accent (`#003670`) on buttons, links and highlights, Plus Jakarta Sans headings, Inter body text, and a plain text wordmark "Sinso."
- **CN brand**: the italic SINSO logo with a halftone dot pattern in the S, and one brand color, indigo **C100 M100 Y30 K10 = `#373368`**.

Customers and partners move between the two. The goal is a **minimal bridge** so both read as the same company. **This is not a redesign.** Layout, copy, typography, spacing, components, page structure and imagery all stay as they are, except for the three changes below.

## The three changes

### 1. Replace the text wordmark with the SINSO logo

- Files: `_brand-bridge/assets/sinso-logo-indigo.svg` (light backgrounds) and `_brand-bridge/assets/sinso-logo-white.svg` (dark backgrounds). Copy them into the repo's normal image or asset location.
- Replace every instance of the text wordmark "Sinso." in the header, footer, mobile nav, favicon-adjacent places, and anywhere else it appears as a logo. Keep "Sinso" as plain text in body copy.
- Header: about 22–24px tall on desktop, 20px on mobile. Keep the same link target and an accessible label: `alt="Sinso"` or `aria-label="Sinso home"`.
- Use the indigo version on light backgrounds and the white version on dark ones. Never recolor, stretch, outline or add effects. Keep clear space around it of at least the height of the letter "S".
- Leave the favicon as is unless it is the text wordmark. If it is, tell me and stop; don't invent a new icon.

### 2. One color change: navy becomes indigo

Find where colors are defined (CSS custom properties, Tailwind config, SCSS variables, a theme file, or `design-system/`). Change the values at the token level, not one component at a time. Then search the whole repo for hard-coded copies of the old values (`#080F1C`, `#080f1c`, `rgb(8, 15, 28)`, `#003670`, `#003670` variants with alpha, `rgb(0, 54, 112)`) and point them at the tokens.

| Role | Old | New |
|---|---|---|
| Dark surface (hero, dark sections, footer) | `#080F1C` | `#15132B` |
| Brand / accent (primary buttons on light bg, links, active states, highlights, icons that used the navy) | `#003670` | `#373368` |
| Accent hover / pressed | (whatever exists) | `#2C2955` |
| Light brand tint (light-blue tints such as `#E6EDF5`) | `#E6EDF5` | `#ECEBF6` |
| Soft accent on dark (secondary text or outlines on dark that were bluish) | (if any) | `#C9C6E8` |

Rules:
- Neutral grays, off-white `#F7F8FA`, body text colors, borders and status colors (success, error) **do not change**.
- **Primary buttons on dark surfaces** become white (`#FFFFFF`) with indigo text (`#373368`), because indigo on `#15132B` doesn't have enough contrast. Secondary buttons on dark stay as outlined buttons.
- Any gradient, glow or radial highlight in the dark hero that used the old navy should use `#15132B` → `#1E1B3D` instead. If there isn't one, don't add one.
- Check contrast: text and interactive elements must still meet WCAG AA (4.5:1 for body text, 3:1 for large text and UI components). Fix anything that drops below.

### 3. Add the ECG ribbon artwork as the signature image

- File: `_brand-bridge/assets/ecg-ribbon-2400.jpg`. Optimize for web (WebP or AVIF with a JPG fallback, responsive `srcset`, lazy-loaded below the fold, sensible width and height to avoid layout shift).
- Use it in **exactly one place on the homepage**: the final call-to-action section near the bottom. If no such section exists, add one directly above the footer, using the site's existing section and button components:
  - Heading: "Send a dieline or a product."
  - Subtext: "We'll spec it, quote it and proof it."
  - Button: the site's existing primary contact or quote link and label (reuse the current destination; don't invent a new URL).
  - Background: the ribbon image, `background-size: cover`, positioned toward the right (`70% center`), with a left-to-right overlay `linear-gradient(90deg, rgba(21,19,43,0.96) 0%, rgba(21,19,43,0.8) 40%, rgba(21,19,43,0) 80%)` so the text sits on solid dark indigo.
  - Text left-aligned on the dark side. Button white with indigo text.
- Optional, only if the site already has a shared bottom CTA component used on other pages: apply the same background there so it carries site-wide.
- **Do not** use the ribbon in the hero, as small thumbnails, behind body paragraphs, or more than once per page. The hero's existing ECG vs CMYK comparison image stays exactly as it is.

## Do not change

- Any copy, headlines, numbers or claims (for example "25+ years", "82% Pantone coverage at ΔE 2.5", "G7 Master Printer", "GMI Certified"). See "Flag for me" below.
- Fonts, type sizes, spacing scale, border radius, layout grid, page structure, navigation items, routes and URLs.
- Product photos, the ECG vs CMYK hero image, client logos, icons.
- Analytics, forms, SEO metadata (except the logo's alt text), dependencies. Don't add new libraries for this.

## Flag for me (report, don't fix)

List these in your summary so I can decide:
1. Every place the site states years in business, Pantone coverage percentage, press configuration (7-color vs 8-unit), and certifications, with file and line. Other materials currently say "28 years" and "~90% Pantone", and I want one consistent version.
2. Any place the old navy appears inside an image or SVG file that you can't change with code.
3. Any page where the new colors fail contrast and the fix would change the design.

## How to work

1. First, explore the repo and the `design-system/` folder. Tell me the stack, where color tokens and the logo live, and your plan. Wait for my OK before editing.
2. Make the changes in that order (logo, tokens, hard-coded values, ribbon CTA).
3. Run the site locally and check the homepage and at least two inner pages (one industry page, one resource or case-study page) on desktop (1440px) and mobile (390px). Take screenshots if you can.
4. Grep again for `#080F1C`, `#003670`, `rgb(0, 54, 112)`, `rgb(8, 15, 28)` and the text wordmark to confirm nothing was missed.
5. If `design-system/` documents colors or the logo, update that documentation to the new values and add a short "Brand bridge with CN identity" note explaining the three changes.
6. Commit on a new branch named `brand-bridge-cn`, in small commits (logo, color tokens, CTA band, docs). Don't push or deploy.

## Done when

- The SINSO logo replaces the text wordmark everywhere it acted as a logo.
- No old navy values remain in code; dark surfaces are `#15132B` and the accent is `#373368`.
- The homepage ends with the ribbon CTA band, and the ribbon appears nowhere else on that page.
- Everything else looks exactly as before.
- Contrast passes AA.
- You've given me: the list of changed files, before/after screenshots, and the "Flag for me" list.

Reference: `reference-before-after.png` in this bundle shows the intended result for the homepage.
