# Three-column feature band under a big split mockup

**Type:** features
**For page:** general
**Verdict:** Proposed
**Found:** 2026-08-29 by Manager (user-supplied screenshot, source: hostinger.com marketing site)

## Source
- hostinger.com (exact URL not captured — user pasted the screenshot directly in chat)
- Screenshot: `assets/general-three-col-feature-band-hostinger.png`

## Why it fits Katechs
Big centered headline ("Grow your brand with Websites + Marketing.") sits above one large,
single image: two overlapping browser/mockup panels (a website + an inbox) on a soft beige
background, angled/offset from each other for depth without any 3D or animation cost. Below that
single hero image, three plain text columns (no cards, no borders) each carry a bold sub-heading
+ short paragraph — the middle column is the only one with a light-grey background panel,
subtly marking it as the "recommended/highlighted" one of the three. A single centered black
CTA closes the section.

## Fit with our stack
- Zero framework dependency — this is layout + typography, translates to SCSS directly.
- RTL: the two overlapping mockups (website in front, inbox behind-right) should mirror so the
  "front" panel stays on the visually dominant side for RTL reading order.
- Motion: Lab tier A — stagger-reveal the 3 columns on scroll; the offset mockup pair could get a
  subtle parallax (Lab tier B) if we want more presence.
- Reusable existing pieces: `Common/Reveal.js` for stagger; the "middle column highlighted with a
  tint panel" trick is new to this codebase and worth adding as a reusable idea.

## Structure
Centered H2 → single large split-mockup image → 3-column text row (middle column tinted) → single
centered CTA button.

## Data it needs
Headline, mockup image(s), 3× (sub-heading, description), CTA text/href.

## Risks
The overlapping-mockup image is one flattened asset in the source — if we want it responsive/RTL-
aware we need it as two separate layered images instead of one flat PNG, which is more asset work
but pays off in mirroring. Middle-column tint needs enough contrast to read as "highlighted" but
not so much it looks like an error state.
