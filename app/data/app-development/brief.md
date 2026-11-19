# App Development — Team Brief

> Audience: designer, content creator, video editor. Not a code walkthrough — read this to understand
> what we sell and what already exists on the live page before you touch anything.
> Source: `pages/services/app-development/index.js`, `components/AppDev/*`, `data/app-development/data.js`.
> Route: `/services/app-development/`

## 1. What the service is

We build custom mobile apps for clients — native iOS, native Android, or one cross-platform app that
runs on both. The pitch on the page: "we turn your idea into an app your customers use every day,"
covering planning, design, development and launch on the app stores.

## 2. All types / tiers / variants

**Platform choice (not a plan — a technical option, explained in the Platforms section):**
| Option | Tech | Fit |
|---|---|---|
| تطبيقات iOS | Swift | iPhone/iPad only |
| تطبيقات أندرويد | Kotlin | Android devices only |
| تطبيقات هجينة (hybrid) | Flutter | Both platforms, one codebase |

**Pricing plans — exist in `data.js` (`plans` export) but are currently NOT rendered on the live page.**
There is no `Pricing.js` component wired into `pages/services/app-development/index.js` — the page goes
straight from Hero → Platforms → Process → Features → Faq. ⚠️ Flag: if the team wants these plans visible,
the Implementer needs to add a Pricing component; right now this content only exists in the data file.

| Plan | Scope | Price | Badge | Key features |
|---|---|---|---|---|
| باقة الانطلاق | One platform (iOS or Android) | حسب نطاق المشروع (quote-based) | — | Single-platform app, full UI/UX, interactive prototypes before dev, one store launch, post-launch support |
| باقة النمو | Both platforms, one Flutter codebase | حسب نطاق المشروع | **الأكثر طلبًا** | Both platforms together, unified Flutter code, UI/UX, prototypes, both stores, ongoing updates |
| باقة الشركات | Custom native app | حسب نطاق المشروع | — | Native Swift + Kotlin, admin dashboard + system integration, both stores, custom support plan |

No numeric prices exist anywhere for this service — genuinely quote-based (custom app work scoped per
project). This is intentional, documented in the data file's own comment, not a gap to fill with invented
numbers.

## 3. Target audience

Businesses that want a custom mobile app (not a website) — anyone needing native performance, app-store
presence, or push/offline capability a website can't give them. The three plans imply a range from a
single-platform MVP up to a company with its own backend/dashboard needs.

## 4. Current page sections (live today)

1. **Hero** — headline "نحوّل فكرتك إلى تطبيق يستخدمه عملاؤك كل يوم", 3-tag eyebrow (iOS/أندرويد/هجينة),
   phone mockup image (`public/images/mobile-app/app-mockup.png`, rendered at 480×600) with 3 floating
   badges (App Store, Google Play, "أداء أصلي") and a scroll-linked parallax effect. CTA → `/contactWeb`,
   secondary link → `#process`.
2. **Platforms** — "نطوّر على المنصة التي يستخدمها عملاؤك", an orbit-style visual (`AppOrbit`) plus 3
   platform cards (iOS/Android/Hybrid) each with a single CTA "اطلب الآن" → `/contactWeb`. (This link used
   to point at a `#pricing` anchor; the user explicitly asked to remove the pricing section on
   2026-09-04, so it now points at contact instead — see code comment.)
3. **Process** — "أربع خطوات واضحة من الفكرة إلى تطبيق منشور على المتاجر": التخطيط والدراسة (دراسة مجانية)
   → تصميم UI/UX (تصاميم تفاعلية) → التطوير والبرمجة (كود نظيف) → الإطلاق والدعم (دعم مستمر). Each step has
   an abstract CSS illustration (skeleton bars/plates, no real screenshots).
4. **Features** — "نبني تطبيقك بمعايير تجعله جاهزًا للنشر والنموّ": 3 cards — نماذج تفاعلية قبل البرمجة /
   كود نظيف قابل للتوسّع / نشر على المتاجر ودعم مستمر — each with a small abstract mockup illustration
   (phone screens / code editor rows / store listing).
5. **FAQ** — 6 real Q&A pairs in `data.js` (duration depends on scope, iOS+Android together, see design
   before code starts, we handle store publishing, post-launch support, cost determined after free study).

## 5. For the designer

- Platform distinction is currently icon + label only (bxl-apple / bxl-android / bx-devices) — no real
  screenshots of an actual Katechs-built app exist on this page. If real app screenshots exist from past
  projects, they'd strengthen this page a lot more than the abstract CSS mockups currently used.
- If the pricing plans in `data.js` do get built into a visible section, it needs a 3-card layout with one
  "الأكثر طلبًا" (باقة النمو) highlighted — consistent with the plan-card pattern used on other service
  pages (SEO, Digital Marketing, Emails).
- The Process section's 4-step connector rail (scroll-filling line) is already implemented — no new
  pattern needed there.

## 6. For the content creator

- All copy on this page is real, specific Arabic — no lorem ipsum, no placeholders. This page is in
  better shape than several others.
- The pricing plans in `data.js` are written and ready but sitting unused — worth deciding whether they
  should be published or intentionally left off the page (the Platforms section literally used to link to
  `#pricing` before the user asked for it to be removed, so this may be a deliberate "no visible pricing"
  decision, not an oversight — confirm before writing more pricing copy).
- FAQ answers are honest about "no price/timeline promised until the free study" — keep that tone if
  writing more content for this page.

## 7. For the video editor

- Strong candidate for **before/after or process walkthrough**: the 4-step Process section (study →
  design → build → launch) is a natural motion-graphics or short-video explainer opportunity — it's
  currently built entirely from abstract CSS shapes, not real footage.
- A **short app-demo screen recording** (if a real client app exists) would replace the abstract "phone
  screens" mockup in the Features section with something real.
- Not an obvious fit for testimonial-style video yet — no client names or case studies exist for this
  service (see flag below).

## 8. Open questions / flags

1. ⚠️ **Pricing plans exist in code but are not shown on the page.** `data/app-development/data.js`
   exports `pricingSection` and `plans`, but no `Pricing.js` component is imported into
   `pages/services/app-development/index.js`. Confirm with the team whether this is intentional (quote-only
   page) or a component that should be added.
2. No real client app examples/screenshots/case studies appear anywhere on this page — everything visual
   is abstract/illustrative. If real project examples exist, they would be a stronger addition than
   anything currently here.
3. No prices anywhere — confirmed intentional per the data file's own comment, not a content gap.
