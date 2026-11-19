# Corporate Network Security — Team Brief

> Audience: designer, content creator, video editor.
> Source: `pages/services/security/index.js`, `components/Services/security-details.js`,
> `components/securityfeature/WhatWeOffer.js`, `components/securityDetails/ServiceDetailsContent.js`,
> `components/security-fag/FaqContent.js`, `components/Services/securityfeature.js`.
> Route: `/services/security/`
> ⚠️ **No `data/security/` folder existed before this brief — created now to hold it.** There is no
> `data.js`; every string below is hardcoded directly in the components listed above, and the content
> reads as **generic cybersecurity-vendor marketing copy (Sophos/Veritas-style), not Katechs-specific
> service description.** This needs the heaviest content review of any service page in this set.

## 1. What the service is

As described on the page: corporate network security — firewall, endpoint detection & response, backup/
recovery. In practice this reads like repackaged third-party security-vendor marketing material rather
than a description of a Katechs-delivered service — see flags below.

## 2. All types / tiers / variants

**No pricing plans exist for this service at all** — no plan cards, no tiers, no prices anywhere on the
page or in its components. This is the only service in this set with zero pricing content of any kind.

The page instead lists **feature/capability claims**, organized into 3 unlabelled groups across 3
different components:

**Group A — "جدار الحماية" (Firewall), `Services/security-details.js`:**
اكتشاف المخاطر الخفية · إيقاف التهديدات غير المعروفة · عزل الأنظمة المصابة · الرؤية والحماية · الأمن
المتزامن · الحماية المتقدمة من التهديدات
— every one of these 6 items has an **empty description** (`<p></p>` with no text), just an icon and a
one-line title.

**Group B — "فوائد حماية شبكة الشركة للأعمال" (business benefits), `securityfeature/WhatWeOffer.js`:**
دمج الأجهزة (single-device management for SMBs) · إدارة مبسطة وتصحيح (unified console) · انخفاض التكلفة
(cheaper than multiple devices) · سرعة الإضاءة ("XG" hardware, Intel multi-core — a specific vendor
product reference) · حماية شاملة (endpoint/mobile/web/email encryption + DLP)
— these 5 have full body text, but the copy is written about a specific third-party security appliance
("XG"), not a Katechs offering.

**Group C — "نقطة نهاية الاعتراض X" (endpoint interception), `Services/securityfeature.js`:**
الكشف عن نقطة النهاية والاستجابة لها · الكشف والاستجابة الموسعة (XDR) · مكافحة برامج الفدية · تكنولوجيا
التعلم العميق · منع الاستغلال · إدارة الاستجابة للتهديدات · التخفيف النشط للخصم · الإدارة المركزية
— all 8 items are icon + one-line label, no body text at all.

## 3. Target audience

As currently written: SMBs wanting unified network-security hardware/console (Group B explicitly frames
itself around "small and medium businesses" cost/complexity reduction).

## 4. Current page sections (live today, in order)

1. **PageBanner** — title "حماية شبكات الشركات", no breadcrumb text.
2. **ServicesStyleTwo** (`components/Services/security-details.js`, despite the generic import name) —
   "جدار الحماية" section, Group A above — 6 cards, **all descriptions empty**.
3. **WhatWeOffer** — "فوائد حماية شبكة الشركة للأعمال", Group B above — 5 cards with full body text, but
   about third-party ("XG") hardware.
4. **ServiceDetailsContent** — single intro block: "حماية شبكات الشركات" heading + one paragraph
   describing "a comprehensive set of security tools including logging, history and reporting... routing,
   firewall, NAT, basic remote access" — again reads as generic network-appliance description, not
   Katechs-specific.
5. **FaqContent** — single accordion item: "النسخ الاحتياطية للبيانات" (data backup), body text is
   **explicitly about "Backup Exec"** (a real third-party product name — Veritas Backup Exec) — "يمكّنك
   Backup Exec من..." — this is literally third-party vendor documentation copy, not written for
   Katechs.
6. **Email_typs** (`Services/securityfeature.js`, misleadingly named) — "نقطة نهاية الاعتراض X" section,
   Group C above.

## 5. For the designer

- Given the content is largely vendor-marketing boilerplate, there isn't a clear Katechs service story to
  design around yet — recommend holding significant visual investment here until content is resolved (see
  flags).
- No pricing exists, so no plan-card layout is needed for this page, unlike every other service.
- If this page is kept, the icon set used (`flaticon-shield`, `flaticon-chip`, etc.) is at least
  consistent with other legacy-template pages (ssl-certificate, website-design use the same set).

## 6. For the content creator

- 🔴 **This page is not written for Katechs.** It explicitly names third-party products — "Backup Exec"
  (Veritas), "XG" (Sophos firewall hardware), "XDR" — as if Katechs sells or resells them, with zero
  Katechs-specific framing anywhere. Before writing anything new, the business needs to clarify: does
  Katechs actually resell/deploy these named products, or is this template copy that was never replaced?
- 🔴 Group A (Firewall, 6 items) and Group C (endpoint interception, 8 items) have **zero body copy** —
  just icon + one-line label each. Even if the underlying service claims are validated, none of these 14
  items has an actual sentence explaining what it means for a Katechs client.
- No prices, no plans, no packages of any kind — if this is meant to be a sellable service (not just an
  informational page), that's a gap, not a content-writing task — needs a business decision on what's
  actually being sold first.
- Recommend this page gets a full content rewrite from scratch once the underlying "what do we actually
  offer" question is answered by the business, rather than editing/translating the existing vendor copy.

## 7. For the video editor

- Not a good candidate for video work in its current state — there's no real Katechs security offering
  described clearly enough to explain in a video yet. Revisit once content is resolved.

## 8. Open questions / flags

1. 🔴 **The entire page reads as third-party security-vendor marketing copy** (Veritas Backup Exec, Sophos
   XG/XDR terminology) rather than a description of something Katechs sells — needs a business decision
   before any content or design work proceeds: is this a real, resold service, or should the page be
   rebuilt around what Katechs actually offers?
2. 🔴 **No pricing/plans exist at all** — the only service page in this review with zero monetization
   content.
3. 14 of the ~19 feature items across the page have no body text at all (just icon + title).
4. No `data.js` exists — recommend creating `data/security/data.js` once the content direction is
   resolved; do not migrate the current vendor copy verbatim without the business's sign-off.
5. Component naming is confusing and may cause future collisions: `Services/securityfeature.js` is
   imported as `Email_typs` in the page, and `Services/security-details.js` is imported as
   `ServicesStyleTwo` — worth flagging to the Implementer for a rename pass, not a content issue but will
   affect anyone editing this page next.
