# Trust wall — Trustpilot rating + tagged testimonial cards

**Type:** testimonial
**For page:** general
**Verdict:** Proposed
**Found:** 2026-08-29 by Manager (user-supplied screenshot, source: hostinger.com marketing site)

## Source
- hostinger.com (exact URL not captured — user pasted the screenshot directly in chat)
- Screenshot: `assets/general-trust-wall-hostinger.png`

## Why it fits Katechs
Centered eyebrow pill ("Trusted by") + bold centered headline, then a **third-party trust proof
row** immediately below the headline — "Excellent", 5-star row, review count, Trustpilot logo —
placed before any testimonial content, so the credibility signal lands first. Below that, a
horizontal row of plain white cards (no photo dominance here, unlike the spotlight pattern): each
has a small product-icon badge, the quote text, small pill tags naming which products the
customer uses, then avatar + name + role at the bottom. One card breaks the pattern with a
"Watch video" link instead of just text — signals that video testimonials exist as a richer tier.

## Fit with our stack
- Standard card grid/row, horizontally scrollable on mobile — no framework dependency. The
  Trustpilot widget specifically would need either a real Trustpilot integration or an honest
  placeholder if Katechs doesn't have one.
- RTL: card internals mirror normally (icon/tags stay same relative order, just flipped).
- Motion: Lab tier A — stagger-reveal the card row; tier B if the row becomes an
  auto-scrolling marquee (`AppDev/TechMarquee.js` is an existing precedent for that).
- Reusable existing pieces: `Common/Testimonials.js` is the closest existing component — this
  entry proposes adding the third-party rating row above it and per-card product tags, both new.

## Structure
Eyebrow pill → centered H2 → third-party rating row (rating word, stars, count, logo) → card row
(icon badge, quote, product tags, avatar+name+role, optional "watch video" link).

## Data it needs
Headline, rating value + review count + platform name/logo, per card: icon, quote, product tags,
avatar, name, role, optional video link.

## Risks
A fabricated or unverified rating/review-count is a trust violation if Katechs doesn't actually
have that Trustpilot presence — **do not ship fake numbers**; either integrate a real rating
source or drop that row entirely. Real customer quotes/photos needed, not placeholder lorem.
