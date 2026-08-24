# SEO Hero — Sellmore split hero (browser-frame mock + overlay callout cards)

**Type:** hero
**For page:** SEO (`components/Seo/Hero.js`)
**Verdict:** Proposed
**Found:** 2026-08-24 by UI Library Searcher

## Source
- https://dribbble.com/shots/22617553-Sellmore-SEO-Landing-Page (title: "Sellmore - SEO Landing Page",
  by Ibnu Hasan Nur Alfaris for Vektora) — Dribbble shot, layout/composition reference only, no code taken.
- Screenshot: `assets/seo-hero-sellmore-dribbble.jpg` (top-of-page hero crop)

## Why it fits Katechs
Closest to our current build structurally: headline+CTA left, **one** product mockup right — but the
mockup is a **browser-chrome-framed app screenshot** (URL bar, traffic-light dots) with **two small overlay
cards** breaking out of the frame's edges (an AI-suggestion popup card, a small "You" avatar chip) rather
than our flat card-in-a-box. The browser frame reads instantly as "this is a real tool," and the
breakout cards add depth without adding chart complexity — a lower-build-cost alternative to the Nietzsche
candidate's three-chart layering.
- Cites `ui-ux-pro-max/data/products.csv` row 3 "Product Demo + Features" → "Video/product mockup (center),
  embedded interactive mockup" — this is that pattern's static-screenshot version (browser chrome standing
  in for a live demo).
- Cites `ui-ux-pro-max/data/ux-guidelines.csv` row 7 (Animation/Excessive Motion) — "Single hero animation" —
  relevant because this mock's appeal is legibility with only 1–2 moving/highlighted elements, not motion on
  everything, consistent with what we should animate here.

## Fit with our stack
- No Tailwind dependency to translate — a bordered/rounded outer frame (`border-radius`, subtle shadow, a
  thin top bar with 3 dots + a fake URL text) wrapping our *existing* `seo-serp-card` content, plus 1 small
  absolutely-positioned overlay chip breaking the bottom-right corner.
- RTL: the fake browser URL bar's traffic-light dots are a **fixed OS convention (macOS-style, always
  left-aligned)** — do **not** mirror them in RTL, that would look broken/unfamiliar rather than correct.
  Everything else inside the frame (our SERP card content) mirrors normally with the rest of the panel.
- Motion: Lab **Tier A** — frame + card fades/slides in together via existing `Reveal`; the one overlay chip
  could get a slightly delayed second `Reveal` for the "something extra is happening" read, still Tier A
  (no scroll-trigger, no loop).
- Reusable existing pieces: **this is the cheapest of the four candidates to build** — it's the current
  `.seo-media-panel`/`.seo-serp-card` markup wrapped in a new outer `.seo-browser-frame` class, no new data
  shape required, no new chart/SVG work.

## Structure
- `.seo-browser-frame` (rounded rect, thin top bar: 3 dots left, fake URL pill center/start)
  - inner: existing `.seo-serp-card` content unchanged (badge, search bar, 3 ranked rows)
- One small overlay card breaking the bottom or side edge of the frame — repurpose as a second, smaller proof
  chip (e.g. a mini "checked by Katechs" or a live visitor-count-style micro-stat) rather than the
  reference's AI-writer callout, which doesn't map to anything this page currently claims.

## Data it needs
- A fake URL string for the browser bar (e.g. `www.[client-domain].com` — could be dynamic per case study or
  just a generic placeholder)
- One extra short stat for the overlay chip, or omit the chip entirely and ship frame-only as a lower-risk
  first step

## Risks
- A fake browser chrome only reads as "real tool" if the URL bar text is business-plausible — an obviously
  fake or English-only URL in an Arabic RTL page could look like a template leftover; needs real content
  before shipping, not lorem.
- The overlay chip breaking the frame's edge is a small detail that's easy to get wrong at narrow widths —
  test it doesn't get clipped by `.container` padding on smaller desktop breakpoints (it's not a mobile
  concern since the whole media panel already likely stacks/hides detail on mobile, but check the ~992–1200px
  range specifically).
- Lowest differentiation of the three real candidates — it's a polish pass on what we already have more than
  a new mechanic. Good "safe" pick if the Manager wants minimal build risk; the Nietzsche or OptiRank
  candidates are the ones that actually move the needle visually.
