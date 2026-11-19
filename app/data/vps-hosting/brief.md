# VPS Hosting — Team Brief

> Audience: designer, content creator, video editor.
> Source: `pages/services/vps-hosting/index.js`, `components/PricingVpsHosting/*`,
> `components/Services/ServicesStyleTwo.js`, `components/Services/hostingFeature.js`, `components/Faq/FaqContent.js`.
> Route: `/services/vps-hosting/`
> ⚠️ **No `data.js` exists for this page.** All content below is hardcoded directly in the components
> listed above — this is a legacy template page, not yet migrated to the `data/<page>/data.js` pattern
> every other service follows. `data/vps-hosting/README.md` (now superseded by this brief) already flagged
> this as "not started yet."

## 1. What the service is

Standalone VPS (Virtual Private Server) hosting — a dedicated virtual server (not shared hosting) sold
directly, separate from the bundled "سرفر VPS خاص" tier that also appears on the hosting-services page.

## 2. All types / tiers / variants

**Two billing cycles (tabs: "سنوي" / "3 سنوات"), 3 VPS sizes each, prices in USD:**

| Plan | CPU / RAM / Disk | Yearly price | Yearly monthly-equiv. | 3-year price | 3-year monthly-equiv. | Badge |
|---|---|---|---|---|---|---|
| VPS 1 | 2 Cores / 4GB RAM / 80GB NVMe | $599/year | $49.95/mo | $1,650 | $46/mo | — |
| VPS 2 | 4 Cores / 8GB RAM / 160GB NVMe | $949/year | $79/mo | $2,699 | $75/mo | **Popular** |
| VPS 3 | 6 Cores / 16GB RAM / 320GB NVMe | $1,699/year | $141.5/mo | $4,699 | $130.5/mo | — |

No feature list beyond the specs above — no mention of control panel, backups, or support tier
differences between the three sizes.

## 3. Target audience

Technical users or businesses needing dedicated server resources beyond shared hosting — likely
developers, agencies, or larger sites needing guaranteed CPU/RAM rather than the shared "استضافة أعمال"
tier on the main hosting page.

## 4. Current page sections (live today)

1. **PageBanner** — title "سيرفرات VPS", no breadcrumb text set.
2. **ServicesStyleTwo** (shared, `components/Services/ServicesStyleTwo.js`) — identical 6-card offer grid
   to the one on hosting-services: 99.9% uptime, optimized 24/7 servers, free SSL, easy control panel,
   secure SSD servers, unlimited domains/space/email. **Every card's description is empty** — same
   generic-shared-component situation the hosting-services brief already flagged.
3. **PricingVpsHosting** — the 3-plan × 2-billing-cycle table above.
4. **FaqContent** (`components/Faq/FaqContent.js`) — **the exact same single cPanel FAQ item and dead
   demo-login CTA** already documented in `data/hosting-services/brief.md` section 4 — shared verbatim
   across hosting-services, vps-hosting, and wordprees-hosting.
5. **FeatureHost** (`components/Services/hostingFeature.js`) — **the exact same 6-card feature grid**
   ("مميزات استضافة KATECHS": high-performance storage, instant provisioning, 99.9% uptime, easy control
   panel, multi-language servers, flexible software options) already documented in the hosting-services
   brief as shared verbatim across all 3 hosting pages.

## 5. For the designer

- This page currently has **no distinct visual identity** — every section except the pricing table is
  copy-pasted from hosting-services. If VPS is meant to feel like a more technical/power-user product than
  shared hosting, that differentiation doesn't exist yet visually or in copy.
- Pricing table uses plain USD figures with a yearly/3-year tab switch — no currency toggle (EG/SA) like
  the hosting-services page has, so no localization treatment is needed here, just the 2-tab switch.

## 6. For the content creator

- ⚠️ **Brand mismatch inside the body copy itself.** The shared feature-grid text literally reads
  "يضمن **كنوز تك** مدة تشغيل الأجهزة..." and "صممت **كنوز تك** خوادم VPS الخاصة بنا..." — "كنوز تك"
  (KnozTech) is a different brand name than Katechs, left over from a template/reused copy source. Every
  other instance on the page says "كاتكس"/nothing at all. This needs a real content pass, not a
  find-and-replace guess, since the surrounding sentences may need re-writing rather than a straight
  swap.
- ⚠️ **All "احجز الآن" / order buttons link to `https://clients.knoztech.com/...`** — a completely
  different domain than Katechs' own client area. This is either a serious bug (orders going to the wrong
  company) or evidence this page is a direct unmodified copy of a KnozTech/reseller template that was
  never adapted. Flag to the business before this page goes live in its current form — this is not a
  content fix, it's a business-critical link.
- No `data.js` exists — every string above needs to be extracted into `data/vps-hosting/data.js` before
  real content work can happen cleanly; right now it's all inline JSX.
- The offer-grid cards (section 2) and feature-grid (section 4) have zero VPS-specific copy — they're
  identical to hosting-services word for word.

## 7. For the video editor

- A short **"what is a VPS vs shared hosting" explainer** could work well here, given the target audience
  is more technical and would benefit from a clear differentiation video — none exists currently.
- Not a strong candidate for testimonial/demo video without more distinguishing content first — right now
  there isn't enough VPS-specific material to build a video around.

## 8. Open questions / flags

1. 🔴 **Order buttons point to `clients.knoztech.com`, not a Katechs domain** — needs an urgent business
   decision: correct client-area URL, or confirmation this integration is intentional (e.g. Katechs
   resells KnozTech VPS infrastructure).
2. 🔴 **Body copy says "كنوز تك" instead of "كاتكس"/Katechs** in the shared feature-grid component — needs
   a real copy fix, not a placeholder swap, since it's shared across 3 pages.
3. No `data.js` exists for this page — recommend creating `data/vps-hosting/data.js` and migrating the
   hardcoded strings out of the components as part of any content work here.
4. Every non-pricing section is verbatim-shared with hosting-services and wordprees-hosting — confirm
   with the team whether VPS should get its own distinct copy/visual identity or stay intentionally
   generic.
