# Web Services Hub — Team Brief

> Audience: designer, content creator, video editor.
> Source: `pages/services/index.js`, `components/Services/ServiceArea/*`, `components/Services/Ecommerce/*`,
> `components/Services/Consulting/*`, `components/Sections/HeroBuildSmarter.js`, `data/services/data.js`.
> Route: `/services/`
>
> This is **not one service** — it's the top-level "Web Services" landing page with an intro block plus
> 4 distinct service areas underneath. Per `brain/MANAGEMENT.md`'s canonical area numbering: the user
> counts the intro (hero + carousel + navigator) as **area 1**; areas 2-5 are the 4 real services covered
> below (labelled "area 2" through "area 5" in team communication, `businessWebsites`/`wordpress`/
> `ecommerce`/`consulting` in code). **Two of the four areas (E-commerce and Consulting) deliberately have
> no pricing cards at all** — this is a documented design decision, not missing content — see each area's
> section below.

## 1. What the service is (page-level)

A single hub page that lets a visitor pick which kind of website they need — a company/business site, a
WordPress site they can self-manage, a full online store, or a performance/SEO audit for a site they
already have — and routes them into the right area of the same page. Built to a "5-second rule": the
visitor should understand their options almost instantly.

## Intro (area 1 — hero, carousel, navigator)

Not a sellable service on its own, but sets up all 4 areas below:

- **Hero** (`HeroBuildSmarter`) — 3 auto-rotating slides (6s interval), each with its own badge/headline/
  CTA: (1) "موقعك الإلكتروني يبدأ من هنا" → `/website-order`, (2) "تصميم يليق باسم عملك" → real-projects
  carousel, (3) "لا نتركك بعد التسليم" (hosting/maintenance) → `/services/hosting-services`.
- **Projects carousel** — 6 **real, named client projects** with real screenshots already in
  `public/images/projects/`: طبقات (construction/insulation site), دفو (e-commerce store), آفاق التعليمية
  (education platform), العمودي (company profile site), ريزا سولت (product/brand site), فوار بوتيك
  (fashion e-commerce store). This is genuine portfolio proof, not stock imagery.
  ⚠️ Note: hero background media is still a placeholder path
  (`/images/inspiration/webservices_page/placeholder.jpg`) that needs moving to a real image path before
  ship — flagged directly in the data file.
- **ServiceNav** — 4 clickable cards, one per area below, each a one-line "is this for you?" pitch that
  jumps to that area's anchor.

## 2. Area 2 — مواقع الشركات (Business Websites)

**What it is:** a company website meant to reflect the business's real size and build credibility from
the first visit — not a generic template.

**Plans/tiers** (currencies EG ج.م and SA ر.س — same 3 tiers duplicated per currency, all prices are
placeholders):

| Plan | Summary | Badge | Features | Price |
|---|---|---|---|---|
| موقع تعريفي | Company wants clear online presence | — | Up to 5 pages, custom design, contact form + WhatsApp link, fully responsive, basic SEO, 1 month post-launch support | **— (TODO(prices))** |
| موقع شركة كامل | Company with services/work to showcase professionally | **الأكثر طلبًا** | Everything in تعريفي + services pages + portfolio, self-updatable blog, content-editing dashboard, advanced SEO, 3 months support | **— (TODO(prices))** |
| موقع + متجر | Company selling products online alongside its profile | — | Everything in شركة كامل + full e-commerce store, payment/shipping gateways, product/order/inventory management, sales reports, 6 months support | **— (TODO(prices))** |

**FAQ (4 real Q&A):** typical build duration (2-3 weeks intro, 3-5 weeks full), can I request edits after
delivery (yes, free support period included per plan), do I need to prepare content myself (no, we help),
can I edit content myself after delivery (yes, via dashboard).

**Sections on the page:** Overview (split: real Tabqat-project image + credibility copy) → 3-tier pricing
cards → FAQ.

## 3. Area 3 — ووردبريس (WordPress)

**What it is:** positioned differently from area 2 — not "credibility," but **control/independence**: the
client runs the site themselves after handover without paying for every small edit.

**Plans/tiers** (same EG/SA currency structure, all prices are placeholders):

| Plan | Summary | Badge | Features | Price |
|---|---|---|---|---|
| ووردبريس أساسي | Intro site the client manages from day one | — | Up to 5 pages, custom-branded template, fully Arabic dashboard, contact form + WhatsApp, basic SEO, admin training session | **— (TODO(prices))** |
| ووردبريس احترافي | Site with growing content and an active blog | **الأكثر طلبًا** | Everything in أساسي + services/portfolio pages, full blog with categories/tags, licensed premium plugins, advanced SEO, automatic backups | **— (TODO(prices))** |
| ووردبريس متعدد اللغات | Multi-language or special-requirement site | — | Everything in احترافي + 2+ language support, integration with existing systems, advanced speed optimization, multiple team permission levels, ongoing maintenance | **— (TODO(prices))** |

**FAQ (4 real Q&A, WordPress-specific objections, not repeating area 2's):** is WordPress secure (yes, if
built/maintained correctly — we handle updates/backups), will it get slow over time (no, if built with a
clean template and few plugins), do I actually own the site (yes, fully — domain/hosting in your name,
portable anywhere), do I need technical skill to manage it (no — Arabic dashboard + training session +
reference video).

**Sections on the page:** Overview (real Alamoudi-project image + independence-focused copy) → 3-tier
pricing cards → FAQ.

## 4. Area 4 — التجارة الإلكترونية (E-commerce Development)

**What it is:** building a full online store — explicitly framed as "not just a catalogue" but the
complete path from product to paid order.

**⚠️ No pricing cards exist for this area at all — this is deliberate, not missing content.** The
brief behind this area (`rest of web servicespage areas.md`, referenced in code comments) rules pricing
cards out entirely: store scope varies too widely (catalogue size, payment gateways, shipping, countries,
languages, ERP integrations) to price on a card. The close is a proposal request instead.

**Structure instead of tiers:**
- **Buying-journey diagram** (4 steps, RTL, right-to-left reading): المنتج → صفحة المنتج → السلة → الدفع,
  ending in a mock "طلب جديد / تم الدفع بنجاح" result card. ⚠️ Explicitly a diagram/mockup, not a real
  sales figure — code comments warn not to add any number here that could be read as a real metric.
- **"ما الذي تديره بنفسك" capabilities** (6 items): المنتجات، الطلبات، المدفوعات، الشحن، الشراء من الجوال،
  التكاملات.
- **Closing CTA**: "جاهز تبدأ البيع أونلاين؟" → `/contactWeb`.
- **3 wide cards below the CTA** (added per user request): "نبني متجرك" (build/launch — design, product
  setup, payment/shipping, domain), "تدير متجرك" (manage/run it yourself — orders/inventory dashboard,
  training, support), "نبني لك صفحة هبوط" (landing page — single product/offer/campaign, no full store
  needed, launch within days). Each has its own real illustrative image
  (`public/images/ecommerce/salla-store-card.webp`, `shopify-store-card.webp`,
  `landing-page-store-card.webp`, all 1120×747) and a soft text-link CTA rather than a button, so the
  section's one heavy CTA stays the main "جاهز تبدأ البيع أونلاين؟" band above.

## 5. Area 5 — استشارات وتحسين أداء المواقع (Website Consulting & Performance)

**What it is:** for visitors who **already have a website** and want to know why it isn't performing —
deliberately diagnostic in tone, not another "we'll build you a site" pitch.

**⚠️ No pricing cards here either — also deliberate.** The brief is explicit: you can't ask someone to
pick a tier before they know what's wrong with their site. The free audit/diagnostic is the single entry
product.

**Structure instead of tiers — a 3-step diagnostic flow, all sample data explicitly labelled as such:**
1. **فحص الموقع (scan)** — 5 illustrative scores: الأداء 63, السيو 71, تجربة الجوال 58, التحويل 54,
   السلامة التقنية 62. Labelled on-screen "أرقام توضيحية" (illustrative numbers).
2. **المشاكل المكتشفة (issues found)** — 5 example issues at 3 severity levels: بطء التحميل على الجوال
   (عالية), ضعف وضوح أزرار الإجراء (عالية), ترتيب غير واضح للصفحة (متوسطة), خلل في تتبع التحويلات
   (متوسطة), ملاحظات تقنية بسيطة (منخفضة). Labelled "أمثلة على ما نجده عادة" (typical examples).
3. **خطة العمل (action plan)** — 3 priority buckets: أصلح الآن (fix now — critical, costing customers
   today), حسّن بعدها (improve next — important but not urgent), اختبر لاحقاً (test later — lower
   priority experiments).

**What's analyzed (6 items):** الأداء (performance), السيو والفحص التقني (SEO/technical audit), تجربة
المستخدم (UX/navigation/mobile), التحويل (forms/CTAs/checkout funnel), التتبع (analytics/conversion
tracking), توصيات قابلة للتنفيذ (actionable recommendations, not just a technical report).

**Closing CTA:** "جاهز تحسّن موقعك؟" → `/contactWeb` ("حلّل موقعي").

## 6. Target audience (all areas)

- **Area 2 (business sites):** companies wanting a credible online presence, ranging from a simple intro
  site up to one bundling a full store.
- **Area 3 (WordPress):** clients who specifically want to self-manage content after launch without
  ongoing dependency on Katechs for every edit.
- **Area 4 (e-commerce):** anyone ready to sell products online, from a single-product landing page up to
  a full multi-integration store — scope-driven, not tier-driven.
- **Area 5 (consulting):** site owners who already have a website that underperforms and want a clear,
  prioritized diagnosis of what to fix.

## 7. For the designer

- Areas 2 & 3 share **identical generic components** (`ServiceArea/Overview`, `Plans`, `Faq`) — per an
  explicit code rule, these must never be forked per area; any visual change to one changes both. Design
  work here should target the shared component, not one area's instance of it.
  areas). Any comparison-table thinking (like SEO/hosting have) doesn't apply to Area 5's diagnostic flow.
- Areas 4 & 5 are intentionally bespoke, pricing-free layouts — a diagram/journey visual (area 4) and a
  3-step scan→issues→plan diagnostic visual (area 5). Neither should be redesigned toward a plan-card
  layout; that would contradict the documented reasoning for why pricing was excluded.
- Area 4's 3 closing cards use real, specific images (Salla/Shopify-style store screenshots + a landing
  page illustration) at 1120×747 — reuse these dimensions if adding more cards to keep the row even.
- Area 1's hero background is still a placeholder file path — needs a real image before this ships (see
  flag).

## 8. For the content creator

- 🔴 **Every price across Area 2 and Area 3 (6 EG plans + 6 SA plans, 24 numbers total) is a placeholder
  em-dash marked `TODO(prices)`.** Both areas' code comments are explicit: published prices are a
  commitment to customers and must come from the business, not be inferred — and specifically call out
  the hosting-services page's standing SA-pricing bug (SA tier priced in ج.م instead of ر.س) as a mistake
  not to repeat here. This is the single biggest content gap on the whole hub.
- Area 1's hero background image path is a placeholder (`placeholder.jpg` sitting in an inspiration
  folder) — needs moving to a real production image path.
- Everything else — Area 1's 3 hero slides, the 6 real project entries, Area 2/3's overview copy and FAQ,
  Area 4's journey/capabilities/3-card copy, Area 5's diagnostic-flow copy — is real, deliberately written
  Arabic copy, not lorem ipsum. Register is consistently Modern Standard Arabic across areas 2-5.
- Area 4 and Area 5's sample numbers/issues (scan scores, priority levels) are **explicitly fake
  illustrative data for the visual, not real audit results** — code comments are emphatic these must never
  be read as real. Keep that framing (or the visible on-screen "أرقام توضيحية" labels) if this content is
  ever touched.
- This hub's Area 2/3 content is newer and more complete (MSA register, real FAQ, real client images) than
  the older standalone `pages/services/website-design/index.js` page, which covers overlapping ground
  (business site + WordPress site) with older, more colloquial copy. See `data/website-design/brief.md`
  section 8 — a decision is needed on whether both pages stay live long-term.

## 9. For the video editor

- **Area 1's projects carousel** is the strongest existing video opportunity on the whole hub — 6 real,
  named client sites already have screenshots; a short "real client work" reel or before/after case-study
  video would use material that already exists rather than needing new production.
- **Area 4's buying-journey diagram** (product → product page → cart → checkout) is built as a static
  diagram and would translate directly into a short animated explainer of "how a sale happens on your new
  store."
- **Area 5's 3-step diagnostic flow** (scan → issues → plan) is structured almost like a video storyboard
  already — a natural fit for a short "how our site audit works" explainer once real (non-placeholder)
  example data is available, or even using the current illustrative data with an on-screen "example only"
  label as the video already does in text.

## 10. Open questions / flags

1. 🔴 **24 placeholder prices** across Area 2 and Area 3 (EG + SA, 3 tiers each) — the single largest
   content gap on this page, explicitly waiting on the business, not inferable.
2. Area 1's hero background is a placeholder image path in an inspiration folder, not a real production
   asset — needs to move before ship.
3. Confirm whether `pages/services/website-design/index.js` (the older standalone page) stays live
   alongside this hub's Area 2/3, gets retired, or gets merged — see `data/website-design/brief.md`.
4. Area 4 and Area 5's sample diagnostic/journey numbers are illustrative by design — flag if anyone
   later treats them as real data when extending these sections.
5. Areas 2 & 3 use shared generic components by explicit rule — any content or design change intended for
   "just one area" needs to be checked against both areas' rendered output before shipping.
