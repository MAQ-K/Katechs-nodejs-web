# components/HpNew/ — the new homepage's sections

Every section of the rebuilt homepage lives here, one file per section. The route that
composes them is `pages/hp-new.js` (`http://localhost:3000/hp-new`).

## Why this folder exists separately

The live homepage (`pages/index.js`) is built out of **`components/Common/**`** — eight of its
twelve sections are shared with other pages. Restyling those in place would change the whole
site at once (that is the "runs alone" rule on T-013/T-016 in `brain/MANAGEMENT.md`). So the
new homepage is built here, isolated, and only swapped in when it is finished and approved.

## The contract

Same isolation contract as `components/Sections/`, so nothing we build can break a live page:

1. **One section = one file.** PascalCase, named for what it is: `HeroX.js`, `ServicesGrid.js`.
2. **No `styles/style.scss`.** All styling inside the file via `styled-jsx`. `style.scss` is
   12k+ lines shared by every page and is its own lock zone — we stay out of it entirely.
3. **Prefixed class names.** Every section picks a short unique prefix (`hero-`, `svc-`, …)
   under a shared `hp-` root, e.g. `hp-hero-*`, `hp-svc-*`. Nothing collides.
4. **Inline SVG for icons.** No `bx-*` classes — the solid `bxs-*` glyphs are missing from the
   bundled font anyway (`brain/MANAGEMENT.md` → gotchas).
5. **Content as props with defaults**, so the section renders correctly with zero props. Once
   a section's copy is settled it moves to `data/home-new/data.js` — data-driven is the
   project convention.
6. **RTL first.** The site is Arabic RTL. Use `inset-inline`, `margin-inline`,
   `padding-inline` — never `left`/`right`.
7. **Cairo** for headings (already loaded in `_document.js`). Do not touch the sitewide
   `$heading-font-family`.
8. **Respect `prefers-reduced-motion`** on anything that moves.

## Per-section workflow

Sketch → design → finish. One section at a time, confirmed before moving on:

1. **Sketch** — structure/layout agreed from the drawing in `Homepage/structure-drafts/`,
   built greyscale so we are judging layout and hierarchy, not colour.
2. **Design** — the visual pass, informed by `Homepage/inspirations/` and the standing design
   rule in the root `CLAUDE.md` (ui-library → `ui-ux-pro-max` → `design-taste-frontend`).
3. **Finish** — real Arabic copy, motion, responsive, a11y; then the section is `REVIEW`
   until the user has seen it.

Tracker: `Homepage/README.md`.
