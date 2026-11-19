# WordPress Hosting — Team Brief

> Audience: designer, content creator, video editor.
> Source: `pages/services/wordprees-hosting/index.js`, `components/PricingWordpressHosting/*`,
> `components/Services/ServicesStyleTwo.js`, `components/Services/hostingFeature.js`, `components/Faq/FaqContent.js`.
> Route: `/services/wordprees-hosting/` (note the misspelling in the route itself — "wordprees")
> ⚠️ **No `data.js` exists for this page.** All content is hardcoded in the components listed above —
> same legacy-template situation as vps-hosting. `data/wordprees-hosting/README.md` (now superseded by
> this brief) already flagged this.

## 1. What the service is

Hosting plans optimized specifically for WordPress sites — sold separately from the general "استضافة"
plans on the hosting-services page, with a plan ladder aimed at everything from a personal WordPress blog
up to a WordPress-based online store.

## 2. All types / tiers / variants

**Two billing cycles (tabs: "سنوي" / "3 سنوات"), 4 plans each, prices in USD:**

| Plan | RAM / CPU | Yearly price | Yearly monthly-equiv. | 3-year price | 3-year monthly-equiv. | Badge |
|---|---|---|---|---|---|---|
| خطة شخصية | 2GB RAM / 1 CPU | $200/year | $16.5/mo | $540 | $15/mo | — |
| خطة أعمال | 4GB RAM / 2 CPU | $324/year | $27/mo | $900 | $25/mo | **Popular** |
| خطة أعمال برو | 6GB RAM / 3 CPU | $564/year | $47/mo | $1,476 | $41/mo | — |
| خطة التجارة الإلكترونية | 8GB RAM / 3 CPU | $684/year | $57/mo | $1,872 | $52/mo | — |

**Shared feature list, identical across all 4 plans** (only RAM/CPU differ): unlimited SSD space,
unlimited traffic, unlimited domains, free SSL certificate, free CDN optimization.

## 3. Target audience

WordPress site owners across a size spectrum — a personal blog (خطة شخصية), a small business (خطة أعمال),
a growing business needing more resources (خطة أعمال برو), and an online store on WordPress/WooCommerce
(خطة التجارة الإلكترونية) — the plan names make the intended buyer explicit at each tier.

## 4. Current page sections (live today)

1. **PageBanner** — title "استضافه ووردبريس" (note: missing hamza, "استضافة" is the standard spelling —
   worth a proofreading pass), no breadcrumb text set.
2. **ServicesStyleTwo** (shared) — same generic 6-card offer grid as hosting-services and vps-hosting,
   empty card descriptions.
3. **PricingWordpressHosting** — the 4-plan × 2-billing-cycle table above.
4. **FaqContent** (shared, `components/Faq/FaqContent.js`) — same single cPanel FAQ item, dead demo-login
   CTA, shared verbatim across all 3 hosting pages.
5. **FeatureHost** (shared, `components/Services/hostingFeature.js`) — same 6-card "مميزات استضافة
   KATECHS" feature grid shared across all 3 hosting pages.

## 5. For the designer

- With 4 plans instead of 3 (vs. hosting-services and vps-hosting), the pricing table needs a 4-column
  layout that still reads clearly on smaller viewports — check how the existing `.single-pricing` cards
  wrap at `col-lg-3`.
- Same lack of distinct visual identity as vps-hosting: every non-pricing section is the shared hosting
  template. If WordPress hosting should feel visually distinct (e.g. WordPress-blue branding, WP logo
  usage), that doesn't exist yet.
- No plan-to-audience visual cue exists beyond the plan name itself (e.g. no icon differentiating
  "personal blog" from "e-commerce") — an opportunity to add one.

## 6. For the content creator

- ⚠️ **Same "كنوز تك" brand-name leak** as vps-hosting — the shared `hostingFeature.js` component's body
  copy says "كنوز تك" instead of Katechs/كاتكس. Needs a real copy fix (shared across 3 pages, so fixing
  it here fixes it everywhere at once).
- ⚠️ **Same `clients.knoztech.com` order-link issue** — every "احجز الآن"/"ابدا الان" button on this
  pricing table points to `https://clients.knoztech.com/...`, not a Katechs domain. Flag to the business
  before shipping — this is the same critical issue flagged on the vps-hosting brief.
- Page title spelling: "استضافه" should likely be "استضافة" (missing tāʾ marbūṭa hamza treatment) — a
  small but visible proofreading fix.
- No `data.js` exists — recommend extracting all of the above into `data/wordprees-hosting/data.js`
  (or consider fixing the route's "wordprees" typo to "wordpress" while doing so — flag to the
  Implementer, this is a route/URL change outside content scope).
- Feature list per plan (unlimited SSD/traffic/domains, free SSL, free CDN) is identical across all 4
  tiers — only the RAM/CPU numbers differentiate them. If the business wants clearer tier differentiation
  beyond raw specs (e.g. support level, backup frequency), that content doesn't exist yet.

## 7. For the video editor

- A **"why WordPress-specific hosting" explainer** (vs. generic shared hosting) could work well, given WP
  hosting is usually sold on performance/security tuning specific to WordPress — none of that
  differentiation is currently visible in copy, so a video would need real specifics first.
- The e-commerce tier (خطة التجارة الإلكترونية) could pair well with a short "WordPress + WooCommerce
  store" demo once real client examples exist.

## 8. Open questions / flags

1. 🔴 **Order buttons point to `clients.knoztech.com`, not a Katechs domain** — same critical flag as
   vps-hosting, needs a business decision.
2. 🔴 **"كنوز تك" brand-name leak** in the shared feature-grid component — same fix needed as vps-hosting
   (fixing the shared component fixes both pages).
3. Route itself is misspelled ("wordprees-hosting" instead of "wordpress-hosting") and the page title has
   a minor spelling issue ("استضافه" vs "استضافة") — flag both, though the route rename is an Implementer/
   redirect decision, not content-only.
4. No `data.js` exists — recommend creating one and migrating hardcoded strings out of components.
5. Every non-pricing section is verbatim-shared with hosting-services and vps-hosting — same open question
   as vps-hosting about whether this page should get distinct WordPress-specific identity.
