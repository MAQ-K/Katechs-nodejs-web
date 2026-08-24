# SEO Pillars — asymmetric bento grid instead of 6 equal cards

**Type:** features / services grid
**For page:** `pages/services/seo/` (`components/Seo/Pillars.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- `ui-ux-pro-max/data/styles.csv` row 39 — **Bento Box Grid**: "Modular cards" of varying size,
  General category — pairs with `landing.csv` row 28 **Bento Grid Showcase**: "Card backgrounds:
  #F5F5F7 or Glass. Icons: Vibrant brand colors. Text: Dark. Hover card scale (1.02), staggered
  reveal. Scannable value props. High information density without clutter. Mobile stack."
- `ui-ux-pro-max/data/styles.csv` row 1 — **Minimalism & Swiss Style**: "Enterprise apps, dashboards,
  SaaS platforms, professional tools" — the discipline that keeps a bento grid from turning decorative
  (grid-based structure, clear type hierarchy, single accent).
- Web reference (2026): SaaSFrame's bento-grid pattern library — "tiles span different numbers of
  columns and rows... the bigger the tile, the more important the data inside it," citing Linear and
  Huly's feature grids as the reference implementations. "67% of top 100 SaaS sites on ProductHunt now
  use some bento-style layout." https://www.saasframe.io/patterns/bento-grid
- Client-supplied reference: `assets/seo-pillars-client-ref.png` (`seo page inspiration/3rd
  section.png`) — the dark, 6-card equal grid the current ad-hoc pass built from.

## Why it fits Katechs
The current `Pillars.js` renders all six SEO disciplines (technical, on-page, keywords, links, local,
e-commerce) as identical cards — which is honest but flat: it tells the visitor nothing about which of
the six actually matters most for *their* project. A bento layout lets one or two pillars (typically
"السيو التقني" and "تحليل الكلمات المفتاحية" — the two Backlinko and WebFX both lead with) occupy a
2× cell while the remaining four sit in a standard grid beside it. This is a **hierarchy fix, not a
decoration fix**: it turns a checklist into a story about what Katechs does first.

## Fit with our stack
- Bootstrap 5 + global SCSS — CSS Grid, not Tailwind. `.seo-grid` becomes
  `display: grid; grid-template-columns: repeat(4, 1fr); grid-auto-rows: minmax(180px, auto);` with
  two utility modifiers (`.seo-card-lg { grid-column: span 2; grid-row: span 2; }`) appended under the
  existing `seo-dark` banner. No shadcn, no CSS Modules.
- RTL: CSS Grid's `grid-column` spans are direction-agnostic — they follow `dir="rtl"` automatically
  via `writing-mode`, no manual mirroring needed. Verify the icon-well stays top-right (reading-start)
  in the RTL container, matching the existing `.seo-icon-well` placement.
- Motion: Lab Tier B — `staggerParent`/`staggerItem` (already imported in `Pillars.js`) covers the
  reveal; a `scale: 1.02` hover per the landing.csv effect note is Tier A, plain CSS `:hover` transition,
  no framer-motion needed for that part.
- Reuse: `Reveal.js` stagger helpers already imported here — no new primitive required.

## Structure
Grid, 4 columns desktop / 1 column mobile ("Mobile stack" per landing.csv). Cell 1 (2×2, the lead
pillar) gets icon + title + text + a one-line "الأولوية الأولى" tag. Cells 2–6 stay the existing
compact card. Copy is unchanged — this is a layout-weight decision, not a content rewrite.

## Data it needs
`data/seo/data.js` → add one field to the existing pillar objects: `priority: boolean` (or `size:
"lg"|"sm"`) so Content/the implementer can flag which 1–2 pillars get the large cell without touching
JSX.

## Risks
- Six items don't divide evenly into an asymmetric grid without care — test the mobile stack order
  explicitly; a bento grid that "just reflows" on mobile often loses the hierarchy it was built for
  (the large cell becomes indistinguishable from the rest once everything is full-width). Decide the
  mobile order (lead pillar first) explicitly in the implementation, don't leave it to DOM order.
- Six Arabic titles of uneven length ("السيو التقني" vs "تحسين محتوى الصفحات") will make the small
  cells uneven in a strict grid — allow the row height to be `auto`, not fixed, or short titles will
  float awkwardly in tall cells.
