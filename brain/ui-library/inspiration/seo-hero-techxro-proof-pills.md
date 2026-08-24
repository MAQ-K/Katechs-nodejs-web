# SEO Hero — TechXro Navigate hero (3-icon proof-pill row + dual CTA, stacked dashboard below)

**Type:** hero
**For page:** SEO (`components/Seo/Hero.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- https://dribbble.com/shots/25137448--Design-SAAS-Website-Hero-Section — "✨Design - SAAS Website Hero
  Section" by Saiful Islam Shanto. Layout/composition reference only — **no code taken**.
- Screenshot: `assets/seo-hero-techxro-proofpills.png`

## Why it fits Katechs — compared directly to the built Hero.js
Filed specifically for its **proof-row**, the single closest literal match to our three-pill row found in this
pass — the rest of the layout is a deliberate, named departure:
- **Badge:** matches the *row-of-pills* idea but not the single-badge idea — instead of one small eyebrow pill,
  it's **three separate pills in a horizontal row directly under the headline** ("10,000+ Reviews On", "No
  Credit Card Required", "Trusted By 100,000+ Company"), each with a small icon. This is structurally the same
  shape as our `seo-proof-row` (3 items, each with a leading check icon) — just positioned above the headline
  instead of below the paragraph.
- **Ranked-row mechanic:** **does not match.** The media panel below the fold is a full dashboard screenshot
  (sidebar + stat tiles + chart), not a floating card with ranked rows, and it sits stacked under the headline,
  not split beside it.
- **Button pairing:** matches — solid blue pill with a leading lightning icon + white-outline pill with a
  leading play-circle icon ("Watch Demo"), same solid+ghost-with-icon logic as ours.

## Fit with our stack
- Tailwind-styled source (rounded-full pills, gradient background) — translates to a flex row of `.pill`
  spans in global SCSS, trivial.
- RTL: mirror the pill row order and icon side (icon trails text in RTL, as our proof-row already does);
  the dashboard mockup's Latin numerals/charts stay LTR internally per standing convention.
- Motion: Lab tier A — simple fade/scale-in per pill on load, cheaper than our current stagger.
- Reusable existing pieces: `.seo-proof-row` already does 90% of this — this reference argues for **moving
  the proof row above the H1** as an alternate variant, worth A/B'ing against the current below-paragraph
  placement.

## Structure
Centered: 3-pill proof row → H1 (2 lines) → paragraph → dual CTA row → full-width dashboard screenshot card
below the fold (glow background, dark UI).

## Data it needs
Same 3 proof strings Content already supplies (`تقارير أداء شهرية`, etc.) — just needs a small icon per pill
instead of the current single leading check icon, if this placement is adopted.

## Risks
- Moving proof pills above the H1 competes with the badge for the same visual slot — would need to drop one
  or the other, not stack both above the headline.
- The dashboard-screenshot media style is a bigger departure from our SERP-card mechanic than the other 4
  filed this pass — use this entry for the **proof-row idea only**, not the media panel.
- Long Arabic pill text ("متابعة بعد بدء النتائج") is longer than the reference's short English pills — will
  wrap two lines on mobile unless pills go full-width stacked below ~480px.
