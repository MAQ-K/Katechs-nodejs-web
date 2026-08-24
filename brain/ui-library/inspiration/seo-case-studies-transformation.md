# SEO Case Studies — before/after transformation cards

**Type:** proof / case studies
**For page:** `pages/services/seo/` (`components/Seo/CaseStudies.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- `ui-ux-pro-max/data/landing.csv` row 21 — **Before-After Transformation**: "Contrast: muted/grey
  (before) vs vibrant/colorful (after). Success green for results," effects "before/after reveal
  animations, result counters," conversion note "Visual proof of value. 45% higher conversion. Real
  results. Specific metrics."
- `ui-ux-pro-max/data/ux-guidelines.csv` row 79 — Empty States: same principle as the Results section —
  a card with no case study yet needs an explicit "not yet available" state, not a populated-looking
  template with placeholder text that could be mistaken for real.
- Client-supplied reference: `assets/seo-casestudies-client-ref.png` (`seo page inspiration/cards.png`)
  — the dark, 3-card grid the current ad-hoc pass built from; this entry keeps that grid and proposes
  what goes *inside* each card once real data exists.
- WebFX's case-study card structure (industry → challenge → what was done → the metric that moved),
  already cited as the field structure in `CaseStudies.js`'s own code comment — confirmed as the right
  shape, kept here.

## Why it fits Katechs
The mechanic is already right (WebFX-style field structure, honest "no data yet" flag). The upgrade is
visual: a literal **before → after** split inside each card (two numbers side by side with an arrow, or
a small muted-to-vibrant bar pair) reads faster than a sentence of prose, and it's the pattern research
says converts specifically for result-driven B2B services. Once real case studies exist, this becomes
the single highest-trust section on the page — worth the small effort of a purpose-built comparison
visual instead of a generic stat line.

## Fit with our stack
- Bootstrap 5 + global SCSS — a `.seo-before-after` flex row (muted number, arrow icon, vivid number)
  inside the existing `.seo-card.seo-card-dark`. No Tailwind.
- RTL: the before→after arrow must flip direction (`bx-left-arrow-alt` in RTL vs `bx-right-arrow-alt`
  in LTR) — this is a **content-meaning mirror**, not a pure layout mirror, so it needs an explicit
  RTL-aware icon swap, not just `transform: scaleX(-1)` on the parent (that flips the whole card).
- Motion: Lab Tier B — the existing `staggerParent`/`staggerItem` reveal is enough; a count-up on the
  "after" number reuses the `AppDev/Stats.js` counter mechanic (see `seo-proof-honest-metrics.md`).
- Reuse: `Reveal.js`, and the `Stats.js` counter mechanic once real numbers exist (don't build a third
  count-up implementation on this page — Hero, Results, and this section should share one).

## Structure
Unchanged card shape (tag → title → description → footer). Footer changes from a single "pending"
shimmer line to a two-number before/after row once real data exists; stays the existing pending state
until then.

## Data it needs
`data/seo/data.js` → `caseStudies`: array of `{ industry, title, description, metricLabel, before,
after, months }` — **empty until the client supplies real cases**, per the existing flag in the
component.

## Risks
- Same trust risk as Results: do not let a build deadline turn this into invented numbers. The
  before/after visual makes a fabricated number *more* convincing-looking, which makes it more
  important, not less, that this stays empty until real.
