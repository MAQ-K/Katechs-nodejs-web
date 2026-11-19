# Digital Marketing Page — Stage 2 (Structure)

Route: `/services/digital-marketing/` · Components: `components/DigitalMarketing/` · Status: gray-box wireframe

## Routing decision (confirmed with user, 2026-08-20)

A live page already existed at **`/services/degital-market/`** — note the typo — built from old
template components and linked from `components/Services/Services.js`. The navbar and footer
"تسويق إلكتروني" items were dead (`#`).

User chose: **new route at the correctly-spelled `/services/digital-marketing/`**, old page retired.

Actions taken:

- `pages/services/degital-market/index.js` deleted.
- **A permanent redirect `/services/degital-market/` → `/services/digital-marketing/` was added to
  `next.config.js`** so the old URL does not 404 and any inbound links / indexing survive. This
  mitigates the one cost of the chosen option.
- `Navbar.js`, `Footer.js`, and `Services.js` all repointed to the new route.
- The old page's *components* were deliberately **left in place** (`components/digitalfeature/`,
  `components/Services/digital-service.js`, `components/degital-markiting-details/`,
  `components/degital-market-faq/`) — they are the copy source for the UI phase, and
  `WhyChooseUs` is shared with other pages.

## Research basis

- **WebFX — `/digital-marketing/services/`** — the most complete reference (18 sections). Its flow is
  credibility → education → services → social proof → differentiation → comparison → objection
  handling → conversion, with CTAs repeated at each decision stage.
- **Digital Agency Network — 2026 services list** — the canonical service taxonomy (26 tracked service
  types). Most in-demand in 2026: Web Design 22%, Web Development 20%, SEO 20%, Digital Strategy 19%,
  Social Media Marketing 19%.
- Across sources, the modern credibility markers are **client logos, verified review scores, and
  concrete performance numbers rather than vague promises** — hence section 2 exists and is flagged
  as needing real data.

## IA decision — no GEO/AI section here

The SEO page (`/services/seo/`) already owns the GEO / AI Overviews section. Repeating it here would
put two of our own pages in competition for the same intent — the exact duplicate-content problem the
routing decision was made to avoid. Instead, **the SEO card in the channels grid (section 3)
cross-links to `/services/seo/`** rather than restating it.

## Existing in-repo copy this page should reuse

Real Arabic copy already written, to be reused verbatim in the UI phase rather than rewritten:

- `components/Services/digital-service.js` — the strategy steps (section 4):
  دراسة السوق والمنافسين · تحديد الجمهور المستهدف بدقة · اختيار القنوات الأنسب لتحقيق الأهداف ·
  تنفيذ حملات تسويق رقمي (مدفوعة وعضوية)
- `components/digitalfeature/WhatWeOffer.js` — social media management (section 5):
  إعداد خطة محتوى استراتيجية شهرية · تصميم منشورات جذابة بصريًا وكتابيًا ·
  التفاعل مع الجمهور والرد على الاستفسارات · منصات: فيسبوك، إنستغرام، تويتر، لينكد إن، تيك توك
- `components/degital-markiting-details/ServiceDetailsContent.js` — the intro paragraph and the
  existing CTA target `/digital-market-order`.

## Section list

| # | Section | Purpose | Notes |
|---|---------|---------|-------|
| 1 | **Hero** | Value prop + primary CTA | Dual CTA; primary goes to the existing `/digital-market-order` form |
| 2 | **Trust strip** | Credibility immediately after hero, per WebFX | ⚠ **Needs real logos / numbers — do not invent** |
| 3 | **Channels grid** | The core offering | 6 cards: SEO (cross-links out) · إعلانات مدفوعة · إعلانات السوشيال · إدارة منصات التواصل · التسويق بالمحتوى · التسويق بالبريد |
| 4 | **Strategy** | How the plan gets built | 4 steps, copy already exists in `digital-service.js` |
| 5 | **Social media management** | Deepest-demand service, own section | Copy already exists in `WhatWeOffer.js` |
| 6 | **Why KaTechs** | Differentiation block | WebFX devotes a large block to this |
| 7 | **Results / case studies** | Evidence | ⚠ **Needs real client data — do not invent** |
| 8 | **Reporting & ROI** | Kills the "where did my budget go" objection | Research flags real-time dashboards + ROI tracking as expected in 2026 |
| 9 | **Pricing** | Packages | ⚠ **Model unconfirmed — retainer vs quote** |
| 10 | **FAQ** | Objection handling | Accordion |
| 11 | **Final CTA** | Conversion | Band before footer |

## Open questions for the client

1. Real client logos and/or performance numbers for section 2.
2. Real case studies for section 7 — at minimum industry + the metric that moved.
3. Pricing model for section 9: monthly retainer tiers (the industry norm) or quote-based?
4. Which ad platforms to name explicitly — Google Ads, Meta, TikTok, Snapchat, X?
5. Should the existing `/digital-market-order` form stay the CTA target, or move to `/contactWeb`?
