# SEO Hero — OptiRank split hero (ranked-results card + search bar)

**Type:** hero
**For page:** SEO (`components/Seo/Hero.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- https://dribbble.com/shots/10218911 (title: "OptiRank - SEO Landing Page") — Dribbble shot, layout/composition reference only, no code taken.
- Screenshot: `assets/seo-hero-optirank-dribbble.jpg` (top-of-page crop only; the shot continues below into unrelated sections we're not using)

## Why it fits Katechs
Of everything found this pass, this is the **closest mechanic match to what we already ship**: a floating
ranked-list card (numbered rows 1–3, top row highlighted in the brand color, each row = an icon/avatar +
two text lines) sitting beside a search-bar input, positioned over the headline. That is our exact
`seo-serp-card` idea (badge + search bar + 3 ranked rows, top row highlighted) — this reference validates the
mechanic and adds two refinements ours doesn't have:
1. The search bar is **inline with the headline**, overlapping the H1 rather than boxed separately above the
   list — reads as "you type this, we deliver that list" in one glance.
2. Row 1 is a **solid brand-color pill**, rows 2–3 are flat/ghost — much stronger #1-vs-rest contrast than a
   small rank badge alone (our current version only bolds a badge, not the whole row).
- Cites `ui-ux-pro-max/data/products.csv` row 3 "Product Demo + Features" (video/mockup center-right,
  feature breakdown) — the general "headline + live product artifact" hero mechanic this row describes.

## Fit with our stack
- Not Tailwind-attributable in the reference (Framer/Figma export), but the equivalent build-out is plain:
  the ranked list is 3 flex rows in a rounded card (`.seo-serp-card`, already exists), row 1 gets a new
  modifier class (`.seo-serp-row.is-top` — already exists as a class, just needs a background-fill treatment
  instead of only badge styling) to become a solid pill.
- RTL: the search bar and card should mirror as one block (icon leading edge flips from left to right in
  RTL — `bx-search` already sits before the text per current markup, so this is just confirming `dir="rtl"`
  cascades through, no manual flip needed). Numbers stay LTR (rank numerals read fine unmirrored, same as
  our current `#1` badge).
- Motion: none needed beyond what's shipped — `Reveal` already staggers the card in. If adopted, the row-1
  fill could get a Lab **Tier A** micro-highlight (badge/pill color settle) on entrance, nothing scroll-tied.
- Reusable existing pieces: `Common/Reveal.js`, `Common/Magnetic.js`, and the entire `seo-serp-*` SCSS block
  already in `styles/style.scss` (~seo- prefixed section) — this is a refinement of that block, not a new one.

## Structure
- Left/first panel (RTL: visually right): `.seo-media-panel` → `.seo-serp-card` containing:
  - a search-bar row (icon + placeholder query text) sitting near/above the ranked list, not just a static bar
  - 3 `.seo-serp-row`s; row 1 gets `background: var(--brand)` + white text instead of just a badge
- Right/second panel (RTL: visually left): unchanged — eyebrow, H1, paragraph, proof pills, CTAs.

## Data it needs
No new fields — reuses the existing hardcoded proof/copy in `Hero.js`. If the search-bar query text becomes
content-driven, add one string to `data/seo/data.js` (e.g. `heroSearchQuery`).

## Risks
- Making row 1 a solid color pill increases visual weight at the top of the fold — check it doesn't outweigh
  the H1 in a quick squint test (5-second rule).
- Long Arabic result-row text (site names/titles) will wrap to 2 lines faster than the reference's short
  English titles — keep the two skeleton/text lines flexible height, don't fix row height.
- Photography: the reference also uses a stock photo of a person — **not recommended to add**, adds an asset
  dependency and a stock-photo look that doesn't match our data-card-only mechanic. Take the list mechanic,
  leave the photo.
