# SEO Hero — Sassty AI SEO landing (dual CTA + below-fold ranked check-table)

**Type:** hero
**For page:** SEO (`components/Seo/Hero.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- https://dribbble.com/shots/26321456-Smart-AI-SEO-Strategies-SaaS-Landing-Page-UI-Figma — "Smart AI SEO
  Strategies — SaaS Landing Page UI (Figma)". Layout/composition reference only — **no code taken**.
- Screenshot: `assets/seo-hero-sassty-airanktable.png`

## Why it fits Katechs — compared directly to the built Hero.js
Filed specifically because it is an **actual SEO-tool product hero**, not a generic SaaS hero — the closest
subject-matter match among this batch, even though its layout is centered/stacked, not split:
- **Badge:** no small pill badge here (misses this element entirely) — headline sits directly under the nav.
- **Ranked-row mechanic:** **the strongest partial match in this batch.** The dashboard mockup includes a
  "Check Table" block with rows that each carry a checkbox, a label, a progress percentage, quantity and a
  date — visually the same *row density* as our 3 ranked rows (two lines of data + a trailing marker per row),
  just table-shaped rather than card-shaped and sitting **below** the headline instead of beside it.
- **Button pairing:** matches — solid mint-green "Get Started" pill + a black circular "Watch Video" button
  with a leading play-triangle icon, same solid+ghost-with-icon logic as our arrow-icon solid button.

## Fit with our stack
- Figma export, no framework lock-in — direct vanilla-SCSS build, no translation tax beyond normal.
- RTL: mirror the whole composition; the table's checkbox/percentage columns must swap sides (checkbox
  becomes trailing, not leading, matching how our rank badge is already on the line-start in RTL).
- Motion: Lab tier B — rows can stagger-reveal top to bottom, matching `Reveal`'s existing stagger use.
- Reusable existing pieces: `.seo-serp-row` / `.seo-serp-line` skeleton-line pattern already covers this
  table's two-line-per-row shape; would just need a percentage/progress-bar variant added.

## Structure
Centered headline + subhead → dual CTA row → single large dashboard card containing: top stat cards row,
a "Check Table" list of 4–5 rows (checkbox, label, two metric columns, status pill), a chart block below.

## Data it needs
Per row: label (page/keyword), a percentage or count metric, a short status word. Same shape as our existing
`proof` array but table-formatted — Content should treat this as a 4–5 row dataset, not 3.

## Risks
- This is a *centered* hero, not split — adopting only the row-table idea into our existing split card is the
  honest use of this reference, not the full page composition.
- A 4-5 row table is denser than our 3-row card; must trim to 3 rows to fit the existing card height or the
  card grows taller than the text column and looks unbalanced in RTL.
- Long Arabic row labels will collide with the trailing percentage column — needs `text-overflow: ellipsis`.
