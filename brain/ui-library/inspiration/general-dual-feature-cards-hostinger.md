# Dual feature cards — checklist + mockup, two audiences side by side

**Type:** features
**For page:** general (services hub or a two-audience page like Emails/Hosting)
**Verdict:** Proposed
**Found:** 2026-08-29 by Manager (user-supplied screenshot, source: hostinger.com marketing site)

## Source
- hostinger.com — email/marketing product page (exact URL not captured — user pasted the
  screenshot directly in chat)
- Screenshot: `assets/general-dual-feature-cards-hostinger.png`

## Why it fits Katechs
Centered eyebrow pill + big centered headline sets up the section, then two equal-width white
cards below present two related-but-distinct offers side by side (here: "Business email" vs.
"Marketing email"). Each card: small category tag, bold sub-heading, short paragraph, a 3-item
checkmark list (✓ in brand color) of concrete benefits, a text link (not a button — lower visual
weight, "soft CTA"), then a product mockup image bleeding out of the bottom of the card with a
floating UI chip overlaid (same "floating chip" trick as the tabbed-cards entry). The checklist
is doing real work here — it's scannable proof, not marketing fluff.

## Fit with our stack
- Plain flex/grid two-up cards, checkmark list is a standard `<ul>` with an inline SVG check —
  no framework dependency.
- RTL: checkmarks stay on the same side as the text they precede (start-side, so right-aligned in
  RTL); mockup image bleed direction should mirror.
- Motion: Lab tier A — Reveal + stagger on the checklist items (`Common/Reveal.js` already does
  this exact stagger pattern elsewhere in the codebase).
- Reusable existing pieces: `Common/Reveal.js` for the entrance; this is a strong candidate to
  replace the two Emails page placeholders (`Emails/FeaturesPlaceholder.js`) which are explicitly
  marked "real UI pending" in `brain/components/REGISTRY.md`.

## Structure
Centered eyebrow pill → centered H2 → 2-column card grid → per card: tag, sub-heading,
description, 3-item checklist, text link, bottom-bleeding mockup image with floating chip.

## Data it needs
Section eyebrow + headline. Per card: tag, sub-heading, description, 3 checklist items, link
text/href, mockup image, floating chip text.

## Risks
The mockup image bleeding past the card edge needs `overflow: visible` on the card but
`overflow: hidden` on the section (same clip-vs-shadow split we just solved on
`Sections/HeroBuildSmarter.js` — reuse that pattern). Long Arabic checklist items may wrap to 2
lines and misalign the two cards' checklists — set a `min-height` per list item or accept
slight height mismatch.
