# SEO — Team Brief

> Audience: designer, content creator, video editor.
> Source: `pages/services/seo/index.js`, `components/Seo/*`, `data/seo/structure.md` (planning doc, not a
> data.js — see flag).
> Route: `/services/seo/`

## 1. What the service is

Search engine optimization: we work on a client's site from the inside — technical structure, speed,
content, and backlinks — so it ranks for what their customers are actually searching, with a monthly
report showing what changed.

## 2. All types / tiers / variants

**Six SEO pillars offered (Pillars section, all real copy):**
| Pillar | One-line description |
|---|---|
| السيو التقني | Site speed, indexing, structure, crawl errors |
| تحسين محتوى الصفحات | Titles/descriptions/on-page text for both readers and search engines |
| تحليل الكلمات المفتاحية | What customers actually search, pages built around those terms |
| بناء الروابط الخلفية | Trust-building backlinks from authoritative sites |
| السيو المحلي | Google Maps + local search results |
| سيو المتاجر الإلكترونية | Product/category pages for e-commerce search |

Plus a dedicated **AI Search / GEO section** (2026 differentiator, not a "pillar" but its own section):
optimizing content so AI Overviews/ChatGPT-style answers can cite the site — structured data, direct
answers up front, AI-quotable content structure.

**Pricing plans exist in code (`components/Seo/Pricing.js`) but the component is NOT imported into the
live page.** 3 tiers, no numbers assigned yet:

| Plan | Summary | Badge | Features |
|---|---|---|---|
| الباقة الأساسية | موقع صغير أو نشاط محلي | — | تحليل تقني، تحسين عدد محدود من الصفحات، كلمات مفتاحية أساسية، تقرير شهري |
| الباقة المتقدمة | الأكثر طلبًا للشركات النامية | **الأكثر طلبًا** | كل ما في الأساسية + تحسين مستمر للمحتوى، روابط خلفية، سيو محلي وخرائط جوجل، جلسة متابعة |
| باقة الشركات | مواقع كبيرة أو متاجر إلكترونية | — | كل ما في المتقدمة + سيو المتاجر، تهيئة لنتائج الذكاء الاصطناعي، خطة محتوى موسّعة، مدير حساب مخصّص |

Every plan card renders `— —` for price; monthly retainer vs. quote-based is an open question in the
code, same unresolved decision as the Digital Marketing page.

## 3. Target audience

Any business or site owner wanting more organic (unpaid) search traffic — the "free audit" lead-capture
form is the entry point aimed at visitors who don't yet know what's wrong with their site.

## 4. Current page sections (live today, in order)

1. **Hero** — "اجعل عملاءك يجدونك أول ما يبحثون," a SERP-ranking mock card (3 result rows, one flagged
   "#1 ↑") plus a "240% نمو الزيارات العضوية" stat badge, 3 proof bullets. CTA → `#audit` ("احصل على تحليل
   مجاني"), secondary → `/contactWeb` ("تواصل معنا" — this used to point at `#pricing` before the pricing
   section was removed from the page on 2026-09-04 per the user's request).
2. **AuditForm** (`#audit`) — "تحليل مجاني لموقعك" — a real interactive form (site URL + email, client-side
   validated) but ⚠️ **it does not actually send anywhere yet** — submitting shows a success message with an
   on-page dev note admitting "نموذج تجريبي: لا يُرسل فعليًا بعد."
3. **Results** — "نتائج نقيسها، لا وعود" — 4 stat slots (مواقع نعمل عليها / كلمات في الصفحة الأولى /
   متوسط نمو الزيارات / سنوات خبرة), **all placeholder pending-shimmer bars**, no real numbers. On-page
   flag: "مطلوب من العميل: أرقام حقيقية لهذا القسم."
4. **Pillars** — the 6 pillar cards above.
5. **AiSearch** — the GEO/AI-search section described above, with a mock "AI Overview" summary card
   (skeleton lines + "مصدر: katechs.com" citation).
6. **Process** — 4 steps: تحليل الموقع والمنافسين → استراتيجية وكلمات مفتاحية → التنفيذ والتحسين →
   التقارير والمتابعة.
7. **CaseStudies** — "نتائج تُقاس، لا وعود" — a 2×2 metric-card grid (organic traffic growth, keywords
   ranking #1, leads from search, average keyword ranking), **every value is a pending placeholder**
   ("قريبًا"), with an on-page flag requesting real case studies (industry, problem, execution, the number
   that moved).
8. **Reporting** — "تعرف بالضبط ما الذي يحدث كل شهر" — 3 bullets (keyword ranking movement, organic
   traffic + source pages, monthly execution + next month's plan) plus a **4-ring progress visual**
   (ترتيب الكلمات 88%, الزيارات العضوية 91%, الروابط الخلفية 79%, التحويلات 76%). ⚠️ These ring values are
   explicitly noted in code as **illustrative mock data, not a real client's numbers** — deliberately
   chosen to "read consistently strong," not sourced from any actual report.
9. **FAQ** — 5 real Q&A pairs (when results appear, no one can guarantee #1 ranking, SEO vs. paid ads,
   do we need site access, what if the site is brand new).
10. **CtaBand** — "ابدأ بمعرفة أين يقف موقعك الآن" final CTA. Buttons → `#audit` and `/contactWeb`.

**`Pricing.js` exists in the folder but is not rendered on the page** — same situation as Digital
Marketing's Pricing/TrustStrip.

## 5. For the designer

- Same "pending shimmer, not fake numbers" convention appears in 3 different places (Results,
  CaseStudies, and implicitly the ring values) — keep that visual language consistent if redesigning; it's
  intentional, not a placeholder bug.
- The Reporting section's 4 partial-circle progress rings are a distinctive, already-built visual pattern
  — reuse it if other pages need a "performance dashboard" motif rather than inventing a new one.
- If Pricing gets added to the live page, it already exists built and matches the plan-card visual system
  shared with Digital Marketing/Emails.

## 6. For the content creator

- **Results and CaseStudies sections are both 100% placeholder**, waiting on real numbers/case studies —
  cannot be written without real client data, and the code is explicit that no value should be invented.
- **The free-audit form is not actually wired to send an email or API call yet** — this is a functionality
  gap for the Implementer, not a content gap, but content should not promise "you will receive a report"
  more strongly than the current dev-note-flagged reality.
- **The Reporting section's ring percentages (88/91/79/76) are illustrative, not real** — if this section
  is ever treated as "our real client average performance," that would be inventing a stat; it should stay
  framed as an example, or be replaced once real reporting data exists.
- Pricing model (retainer vs. quote) is unresolved — same open question as Digital Marketing.
- Everything else (Hero, Pillars, AiSearch, Process, FAQ, CtaBand) is real, specific Arabic copy.

## 7. For the video editor

- **Strong candidate for a "how the free audit works" short explainer** — the form exists and is
  interactive, but a video walking through what a client receives would help sell it given it doesn't
  actually send anything yet.
- **The Reporting section's 4-ring visual** is a natural fit for a short animated data-reveal video once
  real client numbers exist to replace the current illustrative ones.
- Case studies (once real data lands) are the highest-value video opportunity on this page — same as
  Digital Marketing.

## 8. Open questions / flags

1. ⚠️ **Free audit form doesn't send anywhere yet** — client-side only, explicitly flagged in code as
   "نموذج تجريبي." Needs backend wiring before this can be promoted as a real lead-capture tool.
2. ⚠️ Real numbers needed for Results (4 stats) and CaseStudies (4 metrics) — currently pending-shimmer
   placeholders, cannot be filled without real client data.
3. ⚠️ Reporting section's 4-ring values (88/91/79/76%) are illustrative mock data, not from a real
   client — flag if this is ever presented as "typical results."
4. Pricing model undecided: monthly retainer vs. quote-based — `Pricing.js` exists but isn't wired into
   the page, mirroring Digital Marketing's identical situation.
5. `data/seo/structure.md` is a planning/wireframe doc from before the visual pass, not the current
   data source — this brief supersedes it for "what's actually on the page today."
