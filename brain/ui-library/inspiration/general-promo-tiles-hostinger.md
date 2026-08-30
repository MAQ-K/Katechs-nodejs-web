# Promo tile pair — gradient purple CTA cards

**Type:** CTA
**For page:** general (homepage / services hub candidate)
**Verdict:** Proposed
**Found:** 2026-08-29 by Manager (user-supplied screenshot, source: hostinger.com marketing site)

## Source
- hostinger.com (exact URL not captured — user pasted the screenshot directly in chat)
- Screenshot: `assets/general-promo-tiles-hostinger.png`

## Why it fits Katechs
Two large rounded tiles side by side, both on a purple gradient but with the *left* tile lighter
(diagonal light-sweep gradient) and the *right* tile a flat, slightly darker purple — a cheap way
to make two equal-weight cards read as "primary vs. secondary" without changing size or shape.
Each tile: small heading, 1–2 line description, price/offer line at the bottom-left, small arrow
icon (↗) top-right signalling "this leads somewhere". No borders, no shadows — the gradient alone
carries the whole card. Below the pair, a tiny pill badge ("Trusted by") sits centered as a
transition into a logo strip.

## Fit with our stack
- No Tailwind/shadcn in the source — pure gradient + rounded-corner cards, translates directly to
  SCSS (`border-radius`, `background: linear-gradient(...)`).
- RTL: mirror the arrow icon (↗ → ↖) and flip which tile sits left/right if hierarchy matters;
  text alignment already center/left works either direction.
- Motion: Lab tier A — hover lift + slight shadow bloom on each tile (see `brain/animation/LAB.md`).
- Reusable existing pieces: our pill-badge pattern already exists on `Sections/HeroBuildSmarter.js`
  (`.hbs-badge`) — same treatment could shrink down for the "Trusted by" pill here.

## Structure
Two-column grid (stacks to 1 col on mobile) → heading + description + price/offer line + arrow
icon per card → centered pill badge below → (implied) logo strip continues past what was
captured.

## Data it needs
Per tile: heading, description, price/offer text, link href. Trust pill text. Logo strip assets
(not shown in this crop).

## Risks
Long Arabic headings could push the arrow icon into the text — needs a fixed-width icon slot with
`flex-shrink: 0`. Gradient direction should be checked in RTL (a left-to-right light sweep may
need to flip so the "light" side still reads as primary).
