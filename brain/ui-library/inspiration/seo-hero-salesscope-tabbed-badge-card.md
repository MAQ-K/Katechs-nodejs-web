# SEO Hero — SalesScope dashboard hero (dark hero + single card, tabbed rows + revenue badge)

**Type:** hero
**For page:** SEO (`components/Seo/Hero.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- https://dribbble.com/shots/26292382-SaaS-Dashboard-Hero-section-Design — "SaaS Dashboard & Hero section
  Design" ("SalesScope"). Layout/composition reference only — **no code taken**.
- Screenshot: `assets/seo-hero-salesscope-tabbedcard.png`

## Why it fits Katechs — compared directly to the built Hero.js
Filed for the **single-card internal structure**, which is the closest match in this batch to how our SERP
card itself is organised (one card, a header row, then stacked data rows):
- **Badge:** partial match — no small pill above the headline, but the card's bottom row has a solid dark
  "Export Data" chip with a leading document icon sitting at the card's edge, playing the same "small dark
  badge punctuating the card" role as our "نمو 240%" badge, just inside the card instead of overlapping its
  corner.
- **Ranked-row mechanic:** partial — the single floating card has **three stacked internal blocks**: an
  avatar-row summary line, then a tabbed metric block (Overview / Sales / Order tabs, a big number, a trend
  percentage, and 4 small bar-chart columns), then the revenue-badge row. It's the same "one card, multiple
  data rows, one number/trend per row" density as ours, but built as dashboard widgets, not ranked search
  results — no rank numbers, no "#1 highlighted" row.
- **Button pairing:** single CTA only ("Start for free") — **does not match** our two-button pairing, noted
  honestly as a gap.

## Fit with our stack
- Dark hero background with a bright glow under the card — heavier visual weight than our light theme; would
  need re-skinning to our light card-on-light-panel treatment, not a direct lift.
- RTL: mirror card position and internal row alignment; keep the bar-chart / percentage numerals LTR internally.
- Motion: Lab tier B — tab-switch could use a simple crossfade (framer-motion `AnimatePresence`), rest is
  Reveal-stagger like our current card.
- Reusable existing pieces: `.seo-serp-card` wrapper, `.seo-serp-bar` (repurpose as the tab-bar), `.seo-serp-row`
  for the metric rows.

## Structure
Centered dark hero: headline + paragraph → single CTA → one floating card (avatar-summary row → tab bar with
active-tab number + trend + mini bar chart → dark "Export Data" badge row at the card's bottom edge).

## Data it needs
Card: 3 tab labels, one active metric (big number + trend %), 4 short bar values, one badge label. Fewer,
denser fields than our current 3-row SERP card — Content would supply one metric set instead of three rows.

## Risks
- Missing second CTA button is a real gap against the target — this entry should only inform the **card's
  internal tab/badge mechanic**, not the button row.
- Dark background is a bigger design-system departure than the other candidates; needs sign-off before mixing
  with the site's mostly-light SEO page.
- Bar-chart mini-widget adds a small chart dependency our stack doesn't currently have — would need a
  hand-rolled CSS bar chart (cheap) rather than a real charting lib.
