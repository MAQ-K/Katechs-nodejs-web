# SSL Certificates — Team Brief

> Audience: designer, content creator, video editor.
> Source: `pages/services/ssl-certificate/index.js`, `components/PricingSSL/*`, `components/SslFaq/FaqContent.js`,
> `components/Services/SSl_types.js`, `components/sslDetails/ServiceDetailsContent.js`.
> Route: `/services/ssl-certificate/`
> ⚠️ **No `data/ssl-certificate/` folder existed before this brief.** No `data.js` — all content hardcoded
> in the components above. Unlike the security page, this content is **real and internally consistent**
> (real third-party CA product names and real prices), just never migrated to the data-driven pattern.

## 1. What the service is

Reselling SSL/TLS certificates from established certificate authorities (RapidSSL, GeoTrust, DigiCert) —
Katechs sells and issues the certificate, the client gets the padlock/HTTPS on their site. Four
verification levels are offered, each with its own vendor products and price tiers.

## 2. All types / tiers / variants

**Four verification levels (tabs), each a named third-party CA product with a real USD price:**

**DV — Domain Validation ("التحقق من صحة المجال"), issues in minutes, for personal sites/blogs:**
| Product | Price | Encryption | Issue time | Fit | Warranty | Browser support |
|---|---|---|---|---|---|---|
| RapidSSL | $17.95 | 256-bit | Minutes | Personal sites | $10,000 | 99.9% |
| GeoTrust QuickSSL Premium | $79 | 256-bit | Minutes | Small projects | $500,000 | 99.9% |

**OV — Organization Validation ("التحقق من صحة المنظمة"), 1-3 days, for businesses:**
| Product | Price | Fit | Warranty |
|---|---|---|---|
| Geotrust True BusinessID | $169.00 | Business | $1,250,000 |
| DigiCert Secure Site | $448 | Business | $1,500,000 |
| DigiCert Secure Site Pro | $1,118 | Business + e-commerce | $1,500,000 |

**EV — Extended Validation ("التحقق الممتد"), 1-5 days, max trust for business/e-commerce:**
| Product | Price | Fit | Warranty |
|---|---|---|---|
| Business ID | $289 | Business + e-commerce | $1,500,000 |
| DigiCert Secure Site | $1,118 | Business + e-commerce | $1,500,000 |
| Secure Site Pro | $1,499 | Business + e-commerce | $1,750,000 |

**Wildcard** (covers a domain + all its subdomains under one certificate):
| Product | Price | Fit | Warranty |
|---|---|---|---|
| RapidSSL Wildcard | $149 | Personal sites | $10,000 |
| GeoTrust QuickSSL Premium Wildcard | $279 | Small projects | $500,000 |
| Geotrust True BusinessID Wildcard | $449 | Business + e-commerce | $1,250,000 |

Every single plan across all 4 tabs includes: 256-bit encryption, trust-site seal, free reissue, 99.9%
browser support — these are constants, not differentiators, and appear as bullet items on every card.

## 3. Target audience

Ranges from personal bloggers (DV tier, cheapest, issued in minutes) up through e-commerce/enterprise
sites needing maximum visitor trust (EV tier, most expensive, full identity verification, 1-5 day
issuance). Wildcard is a cross-cutting option for anyone managing many subdomains under one domain.

## 4. Current page sections (live today, in order)

1. **PageBanner** — title "الأمن والحمايه" (note: should likely be "الأمن والحماية" — missing tāʾ
   marbūṭa, a proofreading fix).
2. **ServiceDetailsContent** — "قم بتأمين موقعك وأضف الثقة لزوار موقعك" — intro paragraph + 4 real bullet
   points (secure browser-server connection, padlock icon, organization identity verification, encrypts
   sensitive customer data).
3. **SSl_types** (`Services/SSl_types.js`) — 3-card overview of verification levels: EV ("أقصى قدر من
   الحماية والثقة"), OV ("SSL قوي على مستوى الأعمال"), DV ("الأمن الأساسي") — a simplified summary before
   the detailed pricing tabs below.
4. **FaqContent** — "ما هو SSL؟" explainer + "إنشاء الثقة والأمن عبر الإنترنت..." — includes a real, useful
   claim: sites using SSL get a **ranking boost in Google search results** ("ثبت أن مواقع الويب التي
   تستخدم SSL تستفيد من التصنيف الأعلى في نتائج البحث").
5. **PricingSSL** (`PricingStyleOne.js`) — the 4-tab, 11-product pricing table detailed above. Every "احجز
   الآن" button links to `https://clients.katechs.com/login` — **this one correctly uses the real Katechs
   client domain**, unlike vps-hosting/wordprees-hosting's KnozTech links.

## 5. For the designer

- This is a genuine **comparison-table page** — 4 tabs × 2-3 products each, each product carrying 7
  identical-structure spec rows (encryption, issue time, fit, warranty, trust seal, reissue, browser
  support). A clean comparison-card or table layout matters more here than on pages with fewer, more
  differentiated plans.
- The "SSl_types" overview cards (EV/OV/DV summary before the detailed pricing) is a good simplify-first
  pattern — worth keeping as a mental model even if visually redesigned: summary cards first, detailed
  pricing tabs after.
- Real third-party CA brand names appear throughout (RapidSSL, GeoTrust, DigiCert) — if the design uses
  any vendor logos, only use real ones the business has confirmed rights to display.

## 6. For the content creator

- Content here is **real and structurally sound** — actual CA products, actual prices, actual warranty
  amounts. This is not lorem ipsum or vendor-template filler like the security page.
- Minor proofreading fix: page title "الأمن والحمايه" → "الأمن والحماية".
- Every plan's spec list repeats the same 7 line items nearly verbatim ("تشفير 256 بت", "إعادة إصدار
  مجانية", etc.) — if a redesign wants richer differentiation copy, that would need real input on what
  else actually differs beyond price/warranty/issue-time, since those are the only 3 numbers that change
  card to card today.
- No `data.js` exists — recommend extracting this into `data/ssl-certificate/data.js` given how much
  structured tabular data is currently inline across 4 separate component files (DvSSL.js, OvSSL.js,
  EvSSL.js, WildcardSSL.js).

## 7. For the video editor

- Reasonable candidate for a **short "why SSL matters" explainer** — the Google-ranking-boost claim and
  the padlock/trust angle are both concrete, visual, and easy to demonstrate (browser address bar
  before/after).
- A **"which SSL level do I need" quick-decision video** could work well given the clear DV → OV → EV
  ladder already exists in the copy.

## 8. Open questions / flags

1. Minor: page title "الأمن والحمايه" has a spelling fix needed → "الأمن والحماية".
2. No `data.js` exists — all 11 products across 4 tabs are hardcoded across 5 separate component files.
   Recommend consolidating into `data/ssl-certificate/data.js` before further content work, since this
   is the most tabular/repetitive content structure of any service reviewed.
3. Confirm the business still resells these specific CA products/tiers/prices before publishing them as
   current pricing — CA product pricing changes over time and this data's age is unknown.
4. This page correctly uses the real Katechs client-area domain (`clients.katechs.com`) for all order
   links — worth using as the reference/fix target when correcting vps-hosting's and
   wordprees-hosting's wrong `clients.knoztech.com` links.
