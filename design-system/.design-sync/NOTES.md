# Sinso design system — sync notes

- This is a first-time import (2026-09-08). Target project: `f868a9cd-7bc3-4e9d-b3c7-fc4b98ca169e` ("Design System"), an existing empty project reused rather than creating a new one.
- `design-system/` is a hand-authored extraction of the live `sinso.us` static HTML site's design language, not generated from a pre-existing component library — see the parent repo's design-system build for the source lines each component was ported from. If the live site's visual design changes, `design-system/src/*` must be updated by hand and re-synced; nothing here tracks the live HTML automatically.
- All 12 components were authored with rich previews (user chose "author all" at the preview-scope prompt) and graded `good` on every cell — no floor cards in this sync.
- Playwright + Chromium were freshly installed this run (`design-system/.ds-sync/node_modules`, browser cache at `~/.cache/ms-playwright` or the OS equivalent). A fresh clone needs `npm i` inside `.ds-sync/` and `npx playwright install chromium` again before re-running validate.
- `.ds-sync/` (staged converter scripts + its own node_modules) and `ds-bundle/` (build output) are both gitignored per `design-system/.gitignore` — regenerate via the "Re-syncs are one command" flow in the design-sync skill.

## Known render warns
- None — final validate run was fully clean (0 bad, 0 thin, 0 blank, 1 grid-overflow warn resolved via `cfg.overrides.Nav`).

## Re-sync risks
- The `Hero` preview's image prop points at the **live production URL** `https://sinso.us/images/ecg/ecg-vs-cmyk-hero.jpg` (confirmed 200 at sync time) rather than a locally-shipped asset — if that image is moved, renamed, or removed on the live site, the Hero preview will silently render without an image on the next re-sync's render check. Re-verify the URL if `[RENDER_THIN]`/`[RENDER_BLANK]` ever fires on Hero.
- No provider/context wrapper is required by this DS (confirmed empirically — every component renders correctly with no `cfg.provider` set). If a future component needs context, this assumption will need revisiting.
- Token `--bg` (`#FFFFFF`) is defined in `tokens.css` but not referenced by any component's own CSS — it's available for host-app use but isn't exercised by anything synced here.
