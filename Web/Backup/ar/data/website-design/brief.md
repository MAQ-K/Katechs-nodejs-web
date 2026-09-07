# Website Design — Team Brief

> Audience: designer, content creator, video editor.
> Source: `pages/services/website-design/index.js`, `components/PricingWebsite/*`,
> `components/websitefeature/WhatWeOffer.js`, `components/webDeatails/ServiceDetailsContent.js`,
> `components/webDeatailsFooter/ServiceDetailsContent.js`, `components/FaqWebsite/FaqContent.js`.
> Route: `/services/website-design/`
> ⚠️ **No `data/website-design/` folder existed before this brief.** No `data.js` — content hardcoded
> across the components above. Content is real (not vendor-template filler like security), but this page
> is the **legacy version of what `data/services/data.js`'s "مواقع الشركات" and "ووردبريس" areas on the
> new Web Services hub are meant to replace** — see the cross-reference flag below, this is important for
> the whole team to understand before doing new work here.

## 1. What the service is

General website design & development — the page pitches Katechs building, designing and coding a
client's website to establish their brand online, with a currency-aware pricing table (Egypt/Saudi toggle
exists in the component, though only Egypt pricing data is populated — see flag).

## 2. All types / tiers / variants

**Three offers, single billing (no yearly/3-year tabs like the hosting pages), currency switch UI exists
(EG/SA) but only EG prices are populated in code:**

| Plan | Discount shown | List price | Final price | Includes | CTA |
|---|---|---|---|---|---|
| ويب أعمال (Business Web) | خصم 50% | 9,998ج.م | **4,999ج.م** | Domain booking, dynamic professional interface, 3 sub-pages, 2GB hosting, 10 company email accounts, multilingual dashboard, 3 business-day delivery | `/website-order` |
| ويب وورد بريس (WordPress Web) | خصم 40% | 13,998ج.م | **6,999ج.م** | Domain booking, professional WordPress site, up to 6 sub-pages, 5GB hosting, 20 company email accounts, self-manage content, 10 business-day delivery | `/website-order` |
| مخصص (Custom, quote-based) | — | — | عرض سعر | Fully custom design, unlimited pages/features, custom feature development, hosting+email, full easy dashboard, Agile process, delivery time scales with project size | `/website-order` |

⚠️ The currency-switch component (`PricingWebsite/PricingStyleOne.js`) has working EG↔SA toggle UI and
`Yearly.js` does contain an `SA` price object (1,998/999 for Business, 2,499/1,499 for WordPress) — so
**Saudi pricing does exist here, unlike hosting-services' currency bug** — worth noting as a positive
precedent the hosting-services fix could reference.

## 3. Target audience

Both a startup and an established company, per the pricing section's own subtitle: "سواء كنت شركة ناشئة
أو مؤسسة كبيرة، عندنا خطة تصميم موقع تناسب مجالك وأهدافك." The 3-tier ladder (business site → WordPress →
fully custom) covers a small-business budget site up to a fully bespoke build.

## 4. Current page sections (live today, in order)

1. **Head** — real page `<title>` "تصميم المواقع الإلكترونية" and meta description already set (one of
   the only service pages with explicit SEO meta tags in the page file itself).
2. **PageBanner** — title "تصميم المواقع الالكترونية", no breadcrumb text.
3. **ServiceDetailsContent** (`webDeatails/`) — "جذب الكثير من العملاء عبر الانترنت" — intro paragraph
   about modern tech + clean code + closing security holes, CTA → `https://katechs.com/contactWeb/`
   ("تواصل معنا").
4. **WhatWeOffer** — "لماذا KATECHS لتطوير المواقع الإلكترونية" — 4 cards: احدث التقنيات (latest tech),
   الاستجابة (responsive across devices), الشهرة والبحث (SEO-friendly), الحماية والأمان (clean code,
   closed vulnerabilities).
5. **PricingWebsite** — the 3-plan table above, with a working EG/SA currency toggle.
6. **ContactInfo** (`Contact/popupformPage.js`) — a contact form component (not reviewed in detail here —
   outside content scope, flagging its presence).
7. **ServiceDetailsContent1** (`webDeatailsFooter/`) — second intro block, "أجعل من أعمالك التجارية بوابة
   إلكترونية لعملاءك على الانترنت" — a "why you need a website at all" pitch (identity, mission, services,
   products), positioned near the footer as a second persuasion pass.
8. **FaqContent** — single accordion item: "خمسة عشر عام من الخبرة صممنا فيها مئات المشاريع" (**fifteen
   years of experience, hundreds of projects**) — ⚠️ this is a specific factual claim (15 years, hundreds
   of projects) that must be verified against the real company history before being kept — see flag.

## 5. For the designer

- The pricing table's EG/SA currency toggle is **already functionally correct** (real SA prices exist,
  unlike the hosting-services bug) — if redesigning, preserve the toggle mechanic and just restyle it.
- Three-tier ladder (fixed-price → fixed-price → quote-based custom) is a common, well-understood pattern
  — no unusual layout challenge here, similar to app-development's plan-card shape.
- Two separate "why choose us" style blocks exist (WhatWeOffer + ServiceDetailsContent1) with different
  framing (technical capability vs. business-identity pitch) — worth checking for redundancy/overlap if
  consolidating the page.

## 6. For the content creator

- 🔴 **"خمسة عشر عام من الخبرة صممنا فيها مئات المشاريع" (15 years of experience, hundreds of projects)
  is a specific factual claim sitting in the FAQ section** — this must be confirmed as true by the
  business before being reused anywhere else (About page, other service pages, marketing material). Do
  not treat it as pre-verified just because it's already live.
- This page substantially **overlaps with the new Web Services hub's "مواقع الشركات" and "ووردبريس" areas**
  (see `data/services/brief.md`, areas 2 and 3) — the hub's `data/services/data.js` already has richer,
  newer, MSA-register copy for what is functionally the same two offers (business site, WordPress site)
  plus a third e-commerce tier this legacy page bundles into "ويب أعمال" instead of splitting out. Before
  writing new copy for this standalone page, confirm with the team whether it's being kept in parallel
  with the hub, retired in favor of the hub's areas, or merged — writing content twice for the same
  service would be wasted work.
- Discount framing ("خصم 50%", "خصم 40%" off a struck-through higher price) is a different sales pattern
  than the hub's plain-price cards — flag this stylistic difference if unifying the two.
- No `data.js` exists — recommend extracting into `data/website-design/data.js`, especially since real,
  working SA pricing data already exists in `Yearly.js` and shouldn't be lost in a rewrite.

## 7. For the video editor

- Reasonable candidate for a **portfolio/before-after reel** — real client project images already exist
  in `public/images/projects/` (used on the Web Services hub: Tabqat, Doffo, Afaqedu, Alamoudi, Risa Salt,
  Voirboutiq) and could be reused here to show real completed work rather than the current generic stock
  images (`website.webp`, `offer1.png`).
- The "15 years / hundreds of projects" claim, once verified, could anchor a short brand-credibility video
  — but only after that number is confirmed real.

## 8. Open questions / flags

1. 🔴 **"15 years, hundreds of projects" is an unverified factual claim** sitting in this page's FAQ —
   confirm with the business before it's reused elsewhere.
2. ⚠️ **This page significantly overlaps with the Web Services hub's built areas** (`data/services/brief.md`)
   — needs a decision on whether this standalone page stays live, gets retired, or gets merged, before
   investing more content work in either one independently.
3. No `data.js` exists — recommend creating `data/website-design/data.js`; preserve the already-correct
   EG/SA pricing data during migration.
4. This page's pricing uses a "discount off a list price" framing while the newer Web Services hub areas
   use plain (currently placeholder) prices with no discount framing — worth a consistency decision if
   both stay live.
