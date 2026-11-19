# Hosting Services Page — Stage 1: Understand

> Status: **draft for review** — extracted from the current live page (`pages/services/hosting-services/index.js`) and its components. Content is mirrored as-is for now; flag anything to correct, cut, or add before we move to Stage 2 (structure).

## Summary — the actual service data

**Service**: shared web hosting + free domain, sold in two currencies with different plan sets.

**EG plans (ج.م, monthly):**
- استضافة أعمال — 1999ج.م (165/شهر): 1 موقع، 2GB SSD، 5GB ترافيك، 10 بريد، نطاق+SSL مجاناً، تنفيذ 24 ساعة
- استضافة الموزعين — 3,249ج.م/شهر **(الأكثر طلبا)**: 25 حساب عميل، 75GB، ترافيك غير محدود، WHMCS
- سرفر VPS خاص — 3,799ج.م/شهر: 2 نواة/4GB رام، 80GB NVMe، SSH كامل، لوحة WHM

**SA plans (مسعّرة فعلياً بالج.م — bug، 3 سنوات):**
- استضافة فضية — 5152ج.م (143ج.م/شهر): 1 موقع، 5GB SSD، بريد غير محدود
- استضافة ذهبية — 8716ج.م (243ج.م/شهر) **(الأكثر طلبا)**: 3 مواقع، 10GB SSD
- استضافة ماسية — 15520ج.م (432ج.م/شهر): مواقع/مساحة/ترافيك غير محدودة

**Recurring selling points across the page**: 99.9% uptime guarantee, free SSL on all plans, SSD/NVMe storage, unlimited domains & email (higher tiers), one-click install control panel (cPanel), 24/7 support, root/SSH access on VPS tier.

**Single FAQ item today**: how to use cPanel — with a (currently dead) demo-login CTA.

**All plan CTAs point to** `/hosting-order`.

## Page goal

This page sells **shared web hosting + domain** ("دومين واستضافة موقعك"). Its job is to:

- Reassure visitors the hosting is fast, reliable, and easy to start with ("جاهزين من أول يوم" — ready from day one).
- Present hosting plans/pricing so the visitor can pick one and click through to order.
- Answer the top setup question (cPanel) to reduce hesitation.
- Reinforce trust with a second features pass before the footer.

Route: `/services/hosting-services/`
Order/CTA target: `/hosting-order` (all plan buttons link here — page itself does not have a form).

## Target audience

Business owners / individuals in Egypt and Saudi Arabia looking to host a website — currency toggle (ج.م / ر.س) implies both markets are actively served with different plan structures.

## What needs to be displayed (current content, section by section)

### 1. Hero / Page banner
- Title: **"دومين واستضافة موقعك — جاهزين من أول يوم"**
- No breadcrumb text set currently (`homePageText`/`activePageText` are empty).

### 2. Offer highlights (6 cards, icon + title, no body copy currently)
Section eyebrow: "الحصول علي استضافة آمنة جديرة بالثقة مع أفضل سعر"
Section title: "استضافة سريعة وموثوقة"

1. ضمان وقت تشغيل بنسبة 99.9%
2. خوادم محسنة و فائقة السرعه 24/7
3. شهادات SSL مجانية لجميع مواقع الويب
4. لوحة تحكم سهلة الإعداد مع أدوات تثبيت بنقرة واحدة
5. خوادم آمنة و سريعة. مع وحدات تخزين SSD نقية.
6. نطاقات ومساحة ويب وحسابات بريد إلكتروني غير محدودة

*(Note: every card's `<p>` description is currently empty — this component is shared verbatim with the VPS and WordPress hosting pages, so it's generic, not hosting-specific.)*

### 3. Pricing plans
Section eyebrow: "خدمات استضافة كاتكس"
Section title: "باقات استضافة مرنة وبأسعار تناسب ميزانيتك"
Subtitle: "اختار الباقة اللي تناسب أعمالك"

Currency toggle: **ج.م (Egypt)** ↔ **ر.س (Saudi)** — each shows a **different plan set**, not just a converted price:

**Egypt (ج.م) — 3 plans, monthly billing:**
| Plan | Price | Tagline | Features | Badge |
|---|---|---|---|---|
| استضافة أعمال | 1999ج.م (165/شهر) | — | 1 موقع، 2GB SSD، ترافيك 5GB، 10 بريد إلكتروني، نطاق مجاناً، SSL مجاناً، لوحة تحكم متعددة اللغات، تنفيذ خلال 24 ساعة | — |
| استضافة الموزعين | 3,249ج.م/الشهر | كن موزع وحقق الربح | 25 حساب عميل، 75GB، ترافيك غير محدود، سرفر باسم نطاقك، نطاق/1199، SSL مجاناً، WHMCS | **الاكثر طلبا** |
| سرفر VPS خاص | 3,799ج.م/شهر | سيرفرك تحت إدارتك | 2 نواة/4GB رام، 80GB NVMe، إدارة ذاتية، SSH كامل، نطاق/1199، ترحيل بيانات مجاني، لوحة WHM كاملة | — |

**Saudi Arabia (ر.س) — 3 plans, 3-year billing (shown with monthly equivalent):**
| Plan | Price (3yr) | Monthly equiv. | Features | Badge |
|---|---|---|---|---|
| استضافة فضية | 5152ج.م | 143ج.م/الشهر | 1 موقع، 5GB SSD، ترافيك 5GB، بريد غير محدود، نطاق مجاناً، SSL مجاناً، لوحة متعددة اللغات | — |
| استضافة ذهبية | 8716ج.م | 243ج.م/الشهر | 3 مواقع، 10GB SSD، ترافيك 10GB، بريد غير محدود، نطاق مجاناً، SSL مجاناً، لوحة متعددة اللغات | **الاكثر طلبا** |
| استضافة ماسية | 15520ج.م | 432ج.م/الشهر | مواقع غير محدودة، مساحة غير محدودة، ترافيك غير محدود، بريد غير محدود، نطاق مجاني، SSL مجاناً، لوحة متعددة اللغات | — |

> ⚠️ Flag for review: despite the toggle being labeled ج.م (Egypt) vs ر.س (Saudi), **both variants currently price in ج.م (Egyptian pounds)** — the Saudi variant doesn't actually show ر.س. Also plan naming/structure differs completely between the two (business/reseller/VPS vs silver/gold/diamond) rather than being the same 3 tiers in two currencies. Worth deciding in Stage 2 whether the new page keeps two genuinely different plan sets or unifies them.

### 4. FAQ
- Single question: **"جرب لوحة التحكم cPanel السهلة، الآن!"**
- Body: managing domains/email/files via a simple multilingual interface, invites trying a demo account.
- CTA: "تسجيل الدخول الي حساب تجريبي" (button, currently `href="#"` — not wired to a real demo).
- *(Shared FAQ component/content across hosting-services, vps-hosting, wordprees-hosting — not hosting-specific FAQ content yet.)*

### 5. Feature grid ("مميزات استضافة KATECHS") — 6 cards with full body copy
1. **تخزين عالي الأداء** — SSD 20x faster than SATA, 30GB–240GB range.
2. **التزويد الفوري** — provisioned in seconds vs. hours/days for typical VPS.
3. **ضمان وقت تشغيل 99.9%** — hardware/network/infra uptime guarantee, 24/7/365 support.
4. **لوحة تحكم سهلة** — scale RAM/storage up/down easily from the control panel.
5. **خوادم متعددة اللغات** — PHP, MySQL, Perl, Python, Ruby preinstalled; customizable Linux-based server software.
6. **خيارات برامج مرنة** — full root access, install/customize any software.

*(Also shared verbatim across the 3 hosting pages — generic hosting capability claims, some phrasing reads more VPS-oriented than shared-hosting-oriented, e.g. "root access" — worth reviewing for accuracy on a shared-hosting page.)*

## Open questions for Stage 2

1. Keep the EG/SA plan mismatch (different tiers per currency) or normalize to one plan structure with per-market pricing?
2. Fix the ر.س currency display bug, or drop the toggle if only one market is currently served?
3. Offer-highlight cards have no body copy and the feature grid is generic/shared across pages — do we want hosting-specific copy for the new version, or keep these sections shared/generic by design?
4. FAQ has only 1 question and a dead demo-login link — expand FAQ content and/or fix/remove the link?
