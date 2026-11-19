# SEO Page — Stage 2 (Structure)

Route: `/services/seo/` · Components: `components/Seo/` · Status: gray-box wireframe

## Why this route

`components/Layouts/Navbar.js` (the "سيو" item) and `components/Layouts/Footer.js`
("تحسين محركات البحث سيو") **both already link to `#`** — dead placeholders waiting
for exactly this page. Both were pointed at `/services/seo/` when the wireframe landed.

## Research basis

Section list was chosen after reviewing how the leading SEO providers actually
build their service pages, not invented from scratch:

- **WebFX — `/seo/services/`** — the most complete reference (18 sections). Leads
  with value prop + a hard stat + a Clutch rating, then social proof, a checklist
  of what's included, case-study carousel with % lift, a dedicated **AI search**
  section, transparent pricing, and a long FAQ accordion.
- **Victorious — `victorious.com/services/`** — leaner: hero, three-column service
  split, lead capture, award badges.
- **Backlinko — `/seo-services`** — the canonical pillar breakdown used for our
  services grid: on-page, technical, content, link building, local, e-commerce,
  international. Confirms monthly-retainer packaging is the norm.
- **2026 sources across the board** flag **GEO/AEO (Google AI Overviews, ChatGPT
  visibility)** as no longer optional on an SEO service page — hence section 5.

## Existing in-repo copy this page should reuse

`components/Common/SeoShowcase.js` (live on the homepage) already states five
pillars in Arabic — reuse them verbatim rather than rewriting:
تحليل الكلمات المفتاحية · تحسين السيو الفني · بناء الروابط الخلفية ·
تحسين محتوى الصفحات · تقارير أداء شهرية

## Section list

| # | Section | Purpose | Notes |
|---|---------|---------|-------|
| 1 | **Hero** | Value prop + primary CTA | Headline, paragraph, 3 trust bullets, dual CTA, SERP-ranking visual |
| 2 | **Free audit** | Lead capture — the signature SEO-provider element | Domain input + button. Nearly every top provider has one |
| 3 | **Results strip** | Proof in numbers | ⚠️ **Needs real client figures — do not invent** |
| 4 | **Service pillars** | What's actually included | 6 cards: تقني / داخل الصفحة / روابط / محتوى وكلمات مفتاحية / محلي / متاجر |
| 5 | **AI search visibility (GEO)** | 2026 differentiator | الظهور في AI Overviews و ChatGPT |
| 6 | **Process** | De-risk the engagement | 4 steps: تحليل → استراتيجية → تنفيذ → تقارير وتحسين |
| 7 | **Case studies** | Before/after evidence | ⚠️ **Needs real client data — do not invent** |
| 8 | **Reporting** | Kills the "SEO is a black box" objection | What the client receives monthly. Grounded in SeoShowcase's "تقارير أداء شهرية" |
| 9 | **Pricing** | 3 tiers | Retainer-based per research. Prices from client |
| 10 | **FAQ** | Objection handling | Accordion |
| 11 | **Final CTA** | Conversion | Band before footer |

## Open questions for the client

1. Real numbers for section 3 (projects delivered, ranking/traffic lift, retention).
2. Real case studies for section 7 — at minimum industry + metric moved.
3. Pricing model: monthly retainer tiers, or quote-based like app development?
4. Does the free audit (section 2) submit to `/api/contact`, or is it a
   promise-only CTA that opens the contact form?
