# Split feature band — angled product screenshot + copy column

**Type:** features
**For page:** general
**Verdict:** Proposed
**Found:** 2026-08-29 by Manager (user-supplied screenshot, source: hostinger.com marketing site,
"Hostinger Horizons" product)

## Source
- hostinger.com (exact URL not captured — user pasted the screenshot directly in chat)
- Screenshot: `assets/general-split-feature-mockup-hostinger.png`

## Why it fits Katechs
Centered H2 above a 2-column split: left column is a real product-UI screenshot (a builder
interface with its own toolbar/buttons visible) sitting inside a rounded frame with a solid-color
angled backdrop peeking out from behind it at an angle — the backdrop shape is what makes a flat
screenshot feel dynamic instead of just a rectangle pasted in. Right column: small eyebrow tag,
large heading, one line of description, and a text link with a trailing arrow (again the "soft
CTA", not a filled button — consistent with the dual-feature-cards entry filed today). Sparse and
confident — a lot of whitespace, very little copy, letting the actual product screenshot do the
selling.

## Fit with our stack
- Angled backdrop shape = one absolutely-positioned rotated `div` or a clip-path shape behind the
  framed screenshot — no framework dependency.
- RTL: swap columns (screenshot right, copy left) rather than just mirroring internals — this is
  a genuine layout mirror, not a text-align flip.
- Motion: Lab tier A — Reveal the screenshot sliding in from behind the backdrop shape; tier B if
  we want the toolbar buttons inside the screenshot to have their own idle micro-motion (cursor
  hover simulation, like the source shows).
- Reusable existing pieces: same "soft CTA text link with arrow" as
  `general-dual-feature-cards-hostinger.md` — worth standardizing as one shared link style if we
  adopt both.

## Structure
Centered H2 → 2-column split (product screenshot in angled-backdrop frame | eyebrow + heading +
description + arrow link).

## Data it needs
Headline, product screenshot image, eyebrow tag, sub-heading, description, link text/href.

## Risks
Needs an actual Katechs product screenshot to avoid feeling like a mockup of someone else's tool
— if there's no real dashboard/builder UI to show yet, this pattern should wait until one exists
rather than using a fake screenshot. Angled backdrop shape needs care in RTL to still look
intentional, not just flipped-and-wrong.
