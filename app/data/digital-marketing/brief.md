# Digital Marketing — Team Brief

> Audience: designer, content creator, video editor.
> Source: `pages/services/digital-marketing/index.js`, `components/DigitalMarketing/*`,
> `data/digital-marketing/structure.md` (planning doc, not a data.js — see flag).
> Route: `/services/digital-marketing/`

## 1. What the service is

Full digital-marketing management: we study the client's market and audience, pick the right channels
(SEO, paid ads, social ads, social media management, content marketing, email marketing), run the
campaigns, and report monthly on what was spent and what it returned.

## 2. All types / tiers / variants

**Six channels offered (Channels section, all real copy):**
| Channel | One-line pitch | Notes |
|---|---|---|
| تحسين محركات البحث (SEO) | ظهور دائم بدون دفع لكل زيارة | Cross-links to `/services/seo/` — deliberately not duplicated here |
| الإعلانات المدفوعة | حملات بحث تصل من يبحث عن خدمتك الآن | |
| إعلانات السوشيال ميديا | استهداف دقيق حسب الاهتمام والموقع والسلوك | |
| إدارة منصات التواصل | خطة محتوى شهرية، تصميم منشورات، رد على الجمهور | |
| التسويق بالمحتوى | يبني ثقة الجمهور قبل أن يُطلب منه شيء | |
| التسويق بالبريد الإلكتروني | يعيد العملاء الحاليين بدل ملاحقة عملاء جدد فقط | |

**Pricing plans exist in code (`components/DigitalMarketing/Pricing.js`) but the component is NOT
imported into the live page** (same situation as SEO — see that brief). 3 tiers, no numbers assigned yet:

| Plan | Summary | Badge | Features |
|---|---|---|---|
| الباقة الأساسية | نشاط صغير يبدأ حضوره الرقمي | — | قناة إعلانية واحدة، إدارة منصتي تواصل، خطة محتوى شهرية، تقرير شهري |
| الباقة المتقدمة | الأكثر طلبًا للشركات النامية | **الأكثر طلبًا** | كل ما في الأساسية + قنوات متعددة، كل منصات التواصل، تصميم منشورات وإعلانات، لوحة متابعة |
| باقة الشركات | ميزانيات أكبر وأهداف نمو محددة | — | كل ما في المتقدمة + استراتيجية موسّعة، تسويق بالبريد، تقارير عائد استثمار، مدير حساب مخصّص |

Every plan card literally renders `— —` for price with an open question in the code: monthly retainer
vs. quote-based pricing is still unconfirmed.

## 3. Target audience

Business owners who want marketing handled end-to-end instead of hiring an in-house team — the "WhyUs"
section frames the pitch explicitly as "agency vs. building an internal team," not "us vs. another agency."

## 4. Current page sections (live today, in order)

1. **Hero** — "حملات تسويق تتحول إلى مبيعات، لا مجرد مشاهدات," 3 proof bullets, a campaign-performance
   mock card (Google Ads / Social / Email bars). CTA → `/digital-market-order` ("اطلب عرض سعر"), secondary
   → `#channels`. ⚠️ Code comment flags an open question: does the primary CTA stay on
   `/digital-market-order` or move to `/contactWeb`?
2. **Channels** — the 6-card grid above, dark section, id `#channels`.
3. **Strategy** — 4-step process: دراسة السوق والمنافسين → تحديد الجمهور المستهدف → اختيار القنوات
   الأنسب → تنفيذ الحملات ومتابعتها.
4. **SocialMedia** — "بناء حضور رقمي مؤثر، لا مجرد نشر منتظم," a mock social-post card, 3 bullet points
   (content plan / visual posts / audience engagement), and platform tag row: فيسبوك، إنستغرام، تويتر،
   لينكد إن، تيك توك.
5. **WhyUs** — "لماذا وكالة بدل فريق داخلي؟" — 6 reason cards (team cost vs. one salary, start
   immediately, cross-industry experience, control your involvement level, budget goes to ads not
   salaries, integrated services under one roof).
6. **Results** — "نتائج عملاء" — 3 case-study card slots, **all placeholder**: sector tag, generic
   "اسم العميل أو القطاع" heading, and a pending-shimmer bar instead of a real percentage. On-page flag:
   "مطلوب من العميل: دراسات حالة حقيقية — القطاع، المشكلة، ما نُفّذ، والرقم الذي تغيّر."
7. **Reporting** — "تعرف أين ذهبت ميزانيتك وماذا أعادت" — 3 bullets (spend/leads per channel, cost per
   lead, monthly plan) + an animated bar-chart mock (illustrative, not real data).
8. **FAQ** — 5 real Q&A pairs (ad budget separate from management fee, how much ad budget to start,
   when results appear, difference from the SEO page, do you need a website first).
9. **CtaBand** — "لنبدأ بخطة، لا بإعلان" final CTA, dark band. Buttons → `/digital-market-order` and
   `/contactWeb`.

**Two components exist in the folder but are NOT rendered on the page:** `Pricing.js` (see above) and
`TrustStrip.js` — a client-logo strip with 5 placeholder boxes literally reading "شعار" and an on-page
flag: "مطلوب من العميل: شعارات عملاء حقيقية أو أرقام موثقة. لن يُكتب أي رقم هنا دون بيانات فعلية."

## 5. For the designer

- Results and CaseStudies-style sections use a deliberate "pending shimmer" placeholder pattern instead of
  a fake "+00%" — keep that convention if you touch these sections; don't design in fake numbers.
- If Pricing and TrustStrip get added to the live page, they follow the same plan-card / logo-row visual
  language already built and used on the SEO page — reuse, don't redesign from scratch.
- The Channels grid explicitly cross-links out to the SEO page rather than duplicating that content —
  worth keeping in mind if redesigning icons/cards so the "this links elsewhere" cue stays visible.

## 6. For the content creator

- **Results section is 100% placeholder** — 3 empty case-study cards, explicitly waiting on real client
  data (sector, problem, what was done, the number that moved). Cannot be written without that input.
- **TrustStrip (client logos), if activated, is also 100% placeholder** — same "no fake numbers/logos"
  rule.
- **Pricing has no numbers** — retainer vs. quote-based model is an open business decision, not a content
  gap to fill in.
- Hero has an open CTA-routing question (`/digital-market-order` vs `/contactWeb`) baked into a visible
  on-page note — flag this to be resolved and the debug note removed before ship.
- Everything else (Channels, Strategy, SocialMedia, WhyUs, Reporting, FAQ, CtaBand) is real, specific
  Arabic copy — no lorem ipsum.

## 7. For the video editor

- **Strong fit for a "campaign performance" explainer**: the Hero's static bar-chart mock (Google Ads /
  Social / Email fill bars) and the Reporting section's animated bars are both stand-ins for what could be
  a short real dashboard walkthrough or animated data-reveal video.
- **Social media section** (mock post card with likes/comments/shares) is a natural fit for a short
  reel/carousel-style teaser once real client social work exists to show.
- Case studies (once real data lands) are the highest-value video opportunity on this page —
  before/after traffic or lead numbers, testimonial-style.

## 8. Open questions / flags

1. ⚠️ Real case-study data needed for the Results section (sector, problem, execution, result) — nothing
   can be written there without it.
2. ⚠️ Real client logos or verified numbers needed if TrustStrip gets activated.
3. ⚠️ Pricing model undecided: monthly retainer tiers vs. quote-based — prices are blank either way until
   this is resolved.
4. ⚠️ Primary CTA target inconsistency: Hero/CtaBand point to `/digital-market-order`; an on-page code
   comment questions whether this should be `/contactWeb` instead — needs a decision, and the debug note
   deleted regardless.
5. Ad platforms are referenced generically ("السوشيال") rather than by name — an open question in the
   code asks whether to name Google/Meta/TikTok/Snapchat/X explicitly.
6. `Pricing.js` and `TrustStrip.js` exist as finished components but are not wired into the page — confirm
   with the Implementer whether they should be added or intentionally stay unused (mirrors the SEO page's
   identical situation).
