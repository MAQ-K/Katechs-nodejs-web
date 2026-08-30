# Full-bleed AI-assistant CTA band

**Type:** CTA
**For page:** general (anywhere a "talk to AI / not sure what to pick" moment fits)
**Verdict:** Proposed
**Found:** 2026-08-29 by Manager (user-supplied screenshot, source: hostinger.com marketing site)

## Source
- hostinger.com (exact URL not captured — user pasted the screenshot directly in chat)
- Screenshot: `assets/general-ai-assistant-cta-hostinger.png`

## Why it fits Katechs
A full-width flat-purple band, no card/container — the whole section IS the CTA. Left side:
large left-aligned headline ("Not sure which plan to choose?"), a short 2-line subtext
introducing a named AI agent ("Kodee") by name and role, then a white pill button ("Ask Kodee")
that pops hard against the purple field. Right side: a large abstract geometric graphic (angular
overlapping shapes in two purple tones) — decorative, but it fills what would otherwise be dead
space and keeps the band from feeling like a plain text banner. Naming the AI assistant is doing
real personality work here that a generic "Chat with us" button doesn't.

## Fit with our stack
- Pure CSS band + one SVG/graphic — no framework need.
- RTL: flip the whole layout (headline+button move to the right, graphic to the left) rather than
  just mirroring text alignment, since the graphic is asymmetric.
- Motion: Lab tier A — the geometric shapes could get a slow idle drift (tier B, ambient) if we
  want more life; button gets standard hover-lift.
- Reusable existing pieces: `Common/ParticleField.js` is our existing "ambient background
  interest" primitive but is dot/network based — this calls for a simpler static/slow-drift
  geometric shape instead, likely a new small primitive if adopted.

## Structure
Full-width flat-color band → left: headline + subtext + white pill button. Right: decorative
geometric graphic.

## Data it needs
Headline, subtext (incl. the assistant's name), button text/href/action, graphic asset (or
CSS-drawn shapes to avoid an image dependency).

## Risks
Naming an AI assistant is a product decision, not just a design one — needs the user/Manager to
confirm Katechs wants a named assistant persona before this ships as more than a visual idea.
Long Arabic headline could crowd the button on smaller widths — stack vertically below ~768px.
