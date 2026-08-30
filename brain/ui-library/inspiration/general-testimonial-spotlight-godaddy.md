# Single testimonial spotlight — big photo + overlapping quote card

**Type:** testimonial
**For page:** general
**Verdict:** Proposed
**Found:** 2026-08-29 by Manager (user-supplied screenshot, source: godaddy.com — note this one is
GoDaddy, not Hostinger, unlike the other entries filed alongside it today)

## Source
- godaddy.com marketing page, "GoDaddy Airo" testimonial (exact URL not captured — user pasted
  the screenshot directly in chat)
- Screenshot: `assets/general-testimonial-spotlight-godaddy.png`

## Why it fits Katechs
One large real customer photo fills most of the section (not a stock-feeling headshot — an
environmental, editorial-style photo), with a white quote card overlapping its right edge,
breaking the photo's rectangle. The quote itself is large and set in quote marks with no
attribution photo duplicated inside the card. Below the quote: a short vertical list of icon +
label pairs naming the *specific products* the customer used (Domain Name, Business Email,
Conversations…) — this converts a generic "great service!" testimonial into concrete proof of
what was actually built/used, plus a small thumbnail of the customer's finished site tucked into
the corner of the card as final proof.

## Fit with our stack
- Card overlapping a photo is a straightforward `position: relative` + negative-margin technique,
  no framework needed.
- RTL: card should overlap the *left* edge of the photo instead of the right, so it still reads
  as "breaking into" the image in the natural reading direction.
- Motion: Lab tier A — Reveal on the card sliding in from its overlap edge.
- Reusable existing pieces: none yet — our current `Common/Testimonials.js` /
  `Common/TeamTwo.js` are grid-based, not single-spotlight. This is a genuinely new pattern for
  the registry if adopted, worth its own component rather than retrofitting Testimonials.js.

## Structure
Section heading (small, top-left) → large photo → overlapping white quote card (quote text →
icon+label product list → finished-site thumbnail).

## Data it needs
Section heading, photo, quote text, customer name/role (not clearly shown in this crop — verify),
list of product icon+label pairs, finished-site thumbnail image + link.

## Risks
Needs a genuinely good, high-res customer photo to work — a mediocre stock photo undercuts the
whole "real story" effect this design relies on. Long Arabic quotes may overflow the fixed-width
card — the card needs to grow rather than truncate.
