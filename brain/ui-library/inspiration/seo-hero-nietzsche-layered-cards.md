# SEO Hero — Nietzsche split hero (layered floating data cards, dark)

**Type:** hero
**For page:** SEO (`components/Seo/Hero.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- https://dribbble.com/search/seo-dashboard (title: "SEO Tool SaaS Landing Page UI", project "Nietzsche") —
  Dribbble shot, layout/composition reference only, no code taken.
- Screenshot: `assets/seo-hero-nietzsche-dribbble.jpg` (top-of-page hero crop)

## Why it fits Katechs
Same split-hero-with-data-mock mechanic we already have, but instead of **one** card it uses **three
overlapping cards of different chart types** (a radial/gauge, a bar chart, a line chart), staggered at
different depths with drop shadows — reads as "a real dashboard, glimpsed," not one static screenshot.
It keeps our media panel legible at a glance (each card is small, single-metric, high-contrast) while adding
visual depth our current single flat card doesn't have. Dark background + light card faces is also a
legitimate alternate skin worth flagging (see Risks — likely not our direction, but the layering mechanic
transfers regardless of light/dark).
- Cites `ui-ux-pro-max/data/products.csv` row 1 "SaaS (General)" → Dashboard Style "Data-Dense +
  Real-Time Monitoring" — this shot is a direct visual example of that recommendation.
- Cites `ui-ux-pro-max/data/styles.csv` "Glassmorphism"-adjacent depth-through-elevation approach (cards
  read as floating panels via shadow + slight offset, not glass blur — worth citing the elevation idea, not
  the blur).

## Fit with our stack
- Framer/Figma export, no Tailwind dependency to translate — this is pure box-shadow + border-radius +
  z-index stacking, all doable in the existing `.seo-media-panel` wrapper with 2–3 new absolutely-positioned
  child `<div>`s instead of the current single stacked card.
- RTL: **this is the one that needs real care.** The cards are staggered right-to-left in the LTR original
  (gauge top-left-ish, bar chart to its right, line-chart card lower). In RTL the whole cluster mirrors as a
  block (flip the stagger direction), but each card's **internal content must not mirror** — bar charts and
  line charts read left-to-right as a time axis regardless of page direction (Jan→Dec stays Jan→Dec, not
  reversed). This is a hard rule to flag to the Implementer explicitly in the component comment.
- Motion: Lab **Tier B** — a light parallax/stagger-depth entrance (each card reveals with a slightly
  different delay and a few px of vertical offset) reads well with 3 layered cards; more motion than our
  current single-card `Reveal` justifies. Framer-motion, not GSAP.
- Reusable existing pieces: `Common/Reveal.js` (stagger the 3 cards with increasing `delay`), the existing
  `.seo-media-panel` container as the positioning context.

## Structure
- `.seo-media-panel` (relative positioning context)
  - Card A (small, radial gauge — e.g. "site health score" or "من 100") — top layer, highest z-index
  - Card B (small bar chart — e.g. "زيارات القنوات" weekly bars) — mid layer, offset right/behind
  - Card C (wider line chart — e.g. "نمو الظهور الشهري") — base layer, largest footprint
  - All absolutely positioned within a fixed-height panel, tuned per breakpoint (stacks vertically on mobile
    — see Risks)

## Data it needs
Each card needs a label + a small data series or single stat:
- Card A: score/percentage (e.g. `{ label: "صحة الموقع", value: 87 }`)
- Card B: 4–6 short bars (weekly or channel breakdown, small numeric array)
- Card C: a short trend line (6–8 points, monthly) — could reuse the same "240% growth" framing already in
  copy instead of inventing new numbers
All in `data/seo/data.js`, replacing the currently-hardcoded skeleton rows in `Hero.js`.

## Risks
- **Three real charts is a heavier build than our current CSS-only skeleton rows** — needs either hand-rolled
  SVG paths (cheap, no library) or a chart lib decision (not currently in the stack — `ui-ux-pro-max` chart
  guidance is Manager-gated per `SOURCES.md`). Recommend hand-rolled SVG for the line/bar, CSS conic-gradient
  for the gauge — no new dependency.
- Three overlapping cards **will not survive mobile as-is** — reference is desktop-only in the crop; must
  collapse to a single stacked card or a horizontal scroll-snap row below ~768px. Flag explicitly for
  whoever builds this.
- Dark background is a bigger swing than a section reskin — if picked, confirm with the user whether this
  hero goes dark-on-light-site or the whole panel gets a dark "device frame" treatment instead (safer,
  contained).
- Long Arabic labels on small cards (e.g. "صحة الموقع" on a gauge card) need to fit in a fixed small card —
  test at max realistic string length before locking card width.
