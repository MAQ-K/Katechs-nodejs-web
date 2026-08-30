# Full-bleed video hero with inline domain search

**Type:** hero
**For page:** general (homepage candidate — G5)
**Verdict:** Proposed
**Found:** 2026-08-29 by Manager (user-supplied screenshot, source: hostinger.com homepage)

## Source
- hostinger.com homepage (exact URL not captured — user pasted the screenshot directly in chat)
- Screenshot: `assets/general-hero-search-video-hostinger.png`

## Why it fits Katechs
Dark navbar sits directly on top of a full-bleed background video/photo (skateboarder, high
motion energy) with a dark overlay for text contrast. Two things stacked above the video: a
white search bar (rounded, icon + placeholder + solid button) floating near the top as its own
interactive element, independent of the headline block below it — and the actual hero copy
(headline, subtext, white CTA button, trust microcopy "30-day money-back guarantee") positioned
lower-left over the image. A small floating "Free domain for 1 year" badge sits top-right,
separate from both. This is a hero doing three jobs at once (search utility + persuasion + trust
signal) without feeling cluttered, because each does its own thing in its own zone of the frame.

## Fit with our stack
- Video hero already exists in this codebase (`Services/Hero.js` uses background
  video/AnimatePresence slides) — this is a strong precedent to extend rather than build fresh.
- RTL: search bar icon + button swap sides; hero copy block moves to lower-right; floating badge
  moves to top-left.
- Motion: Lab tier B — subtle zoom/pan on the background video (Ken Burns), Reveal + stagger on
  the copy block.
- Reusable existing pieces: `components/Services/Hero.js` background video/overlay pattern,
  `Sections/HeroBuildSmarter.js` pill-badge styling for the floating "Free domain" chip.

## Structure
Dark navbar → full-bleed video/image background w/ dark overlay → floating search bar (top,
independent) → floating trust badge (top-right, independent) → headline + subtext + CTA + trust
microcopy (lower-left).

## Data it needs
Nav items, video/image asset, search placeholder + button text + submit action, floating badge
text, headline, subtext, CTA text/href, trust microcopy.

## Risks
Background video is a real performance cost — needs a poster-frame fallback and
`prefers-reduced-motion` handling (freeze on first frame). Search bar submitting to something
real (domain lookup) is a backend dependency, not just UI — needs a Manager decision on whether
Katechs actually offers that or if it should be a simpler "contact us" input instead.
