# Tabbed product showcase — pill tab bar + two-up mockup cards

**Type:** features
**For page:** general (services hub candidate — matches G2's job)
**Verdict:** Proposed
**Found:** 2026-08-29 by Manager (user-supplied screenshot, source: hostinger.com marketing site)

## Source
- hostinger.com (exact URL not captured — user pasted the screenshot directly in chat)
- Screenshot: `assets/general-tabbed-product-cards-hostinger.png`

## Why it fits Katechs
A horizontal pill tab bar (black-filled active pill, white/outlined inactive pills — "Domains",
"Recommended", "WordPress and Security") switches which pair of product cards shows below. Each
card is a soft-tinted panel (not white) containing a realistic product screenshot/mockup with a
floating "chip" overlaid on top of it (a domain search input, or a live-preview URL badge) —
that floating chip is the detail that sells realism, it looks like the product mid-use, not a
static screenshot. Below the mockup: eyebrow tag (optional, e.g. "FREE DOMAIN"), bold title,
1–2 line description, black rounded-rect CTA button.

This is exactly the "prove it visually, don't just describe it" pattern our services hub (G2) needs
— it's the highest-priority open goal and currently a grey-box wireframe.

## Fit with our stack
- No Tailwind/shadcn — tab bar is just a `button` row with an `.on` state class, cards are
  standard flex/grid panels. Straightforward SCSS.
- RTL: tab bar order should stay logical reading order (first tab = right-most in RTL); floating
  chip position (currently top-right of its mockup) should mirror to top-left.
- Motion: Lab tier B — tab switch = crossfade/slide of the card pair (see existing
  `Services/Hero.js` AnimatePresence crossfade for a precedent already in the codebase).
- Reusable existing pieces: `components/Services/Hero.js` already does slide crossfade; the
  pill-tab visual matches the pill badge pattern used in `Sections/HeroBuildSmarter.js`.

## Structure
Pill tab row (3 tabs) → active tab drives which 2-card row renders → each card: tinted panel →
mockup image w/ floating chip → eyebrow tag (optional) → title → description → CTA button.

## Data it needs
Per tab: tab label, and the 2 cards under it (eyebrow, title, description, CTA text/href, mockup
image, floating-chip text). 3 tabs × 2 cards = 6 card entries minimum.

## Risks
Real product screenshots as mockups are a heavy-asset risk — either commission real screenshots
of Katechs' own product/dashboard, or use lighter illustrated placeholders. Long Arabic tab
labels may not fit the pill width at 3-tabs-in-a-row on mobile — needs a horizontal-scroll
fallback or 2-line pill.
