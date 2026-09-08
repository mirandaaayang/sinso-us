## Sinso design system — conventions

**No provider or wrapper is required.** Styling is plain CSS custom properties defined in `styles.css`'s `:root` block — every component reads them directly (`var(--accent)`, etc.), so importing the bundle is enough; nothing needs to be wrapped in a context or theme provider.

Two optional base classes exist for full-page compositions (mirrors how sinso.us wraps its own `<body>`): `.ds-reset` (box-sizing reset, strips default link/image styling) and `.ds-root` (sets the page font, color, background, and the h1–h3 type scale). Apply both to your outermost page wrapper when building a full page; individual components never require them.

### Styling idiom: tokens, not utility classes or style props

Components are NOT styled via `className` overrides or style props — style by choosing the right component prop (e.g. `<Button variant="primary">`, `<Section variant="dark">`). The visual language itself is a small token set, real names from `styles.css`:

| Token | Value | Use |
|---|---|---|
| `--accent` | `#003670` | Brand blue — links, primary buttons, active states |
| `--accent-hover` | `#004fa8` | Hover state for accent-colored controls |
| `--accent-light` | `#E6EDF5` | Light accent background (e.g. accent tag fill) |
| `--navy` | `#080F1C` | Darkest brand color — hero/dark-section backgrounds |
| `--navy-2` | `#111827` | Heading color on light backgrounds |
| `--text` / `--text-2` / `--text-3` | `#111827` / `#6B7280` / `#9CA3AF` | Primary / secondary / tertiary text |
| `--bg-soft` | `#F7F8FA` | Soft section background |
| `--border` | `#E5E7EB` | Default border color |
| `--font-head` | `'Plus Jakarta Sans', 'Inter', sans-serif` | Headings, logo, buttons |
| `--font-body` | `'Inter', sans-serif` | Body copy |
| `--max-w` | `1100px` | Standard content max-width (used by `Container`) |
| `--radius` / `--radius-lg` | `10px` / `18px` | Standard / large corner radius |

Fonts (Inter, Plus Jakarta Sans) load automatically via a remote `@import` at the top of `styles.css` — no local font files to wire up.

### Where the truth lives

Read `styles.css` (this bound copy's own file) for the exact token list and every component's real class names (all prefixed `ds-`, e.g. `.ds-card--featured`, `.ds-nav-dropdown-menu`) before hand-writing any CSS. Each component's own usage reference is its `<Name>.prompt.md`.

### Idiomatic composition

Page sections compose `Section` (page rhythm + background variant) around `Container` (centered, `max-width: var(--max-w)`) with real components inside — never raw divs styled to imitate them:

```jsx
<Section variant="soft">
  <Eyebrow>Industries</Eyebrow>
  <h2>Three verticals. One ECG press.</h2>
  <Card
    featured
    tag="Sustainability · August 2026"
    title="The PPWR Deadline Is Real."
    description="..."
    href="/resources/ppwr-packaging-compliance"
    linkLabel="Read article →"
  />
</Section>
```
