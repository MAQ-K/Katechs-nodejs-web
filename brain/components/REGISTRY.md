# Component Registry
> **Look here before you build anything.** Reuse beats rebuild.
> Owner: UI Implementer. Full sweep pending — task **T-003**.
> Root: `Web/Backup/ar/components/`
>
> 👁️ **See them running:** `npm run dev` → **http://localhost:3000/lab/components/** — every component below
> rendered in isolation, at any viewport width, RTL or LTR. Adding a component? Add its row here **and** its
> entry in `components/Lab/specimens.js`, in the same commit.

## How to read a zone
- `Common/` — shared across pages. **Editing these affects every page.** Manager approval required.
- `Layouts/` — Navbar/Footer shell. Same rule.
- `<PageName>/` — owned by one page. Safe to change *if you hold the lock*.
- `Sections/` — **standalone, portable one-file sections.** Different contract from everything
  else here: no SCSS/data/icon-font dependency, self-contained via `styled-jsx`, built one at a
  time from a user-supplied reference image. **Read `components/Sections/README.md` first**
  before adding or touching anything in this zone.

## Standalone sections (`components/Sections/`)
See `components/Sections/README.md` for the full contract.
👁️ **Preview them:** `npm run dev` → **http://localhost:3000/lab/sections/**. Index of what exists:

| Component | Path | Notes |
|-----------|------|-------|
| Hero — Build Smarter | `Sections/HeroBuildSmarter.js` | Pill badge, two-tone headline, subtitle, black CTA, radial arc shadow. Built from a user reference image, 2026-08-29. 2026-08-30: wired in as the `/services` hero; gained `subtitle` / `minHeight` / `marginBottom` / `overlay` / `backgroundSize` / `backgroundPosition` / `bottomRadius` + optional slide rotation, all defaulting to the original reference so the Lab demos are unchanged. |
| Carousel — Coverflow | `Sections/CoverflowCarousel.js` | 3D cover-flow ring: drag + flick throw, arrow keys, optional caption / arrows / dots / autoplay. Ported 2026-08-30 from a TS + Tailwind + lucide-react original — transform engine unchanged, everything else rewritten to this stack. In use on `/services` via `Services/Projects.js`. |

## New-generation components (built under the current UI/UX direction)

| Component | Path | Data source | Motion | Status |
|-----------|------|-------------|--------|--------|
| Hosting Hero | `HostingServices/Hero.js` | `data/hosting-services/data.js` | — | Shipped |
| Hosting Pricing | `HostingServices/Pricing.js` | `data/hosting-services/data.js` → `pricing` | — | Shipped — first fully data-driven card set |
| cPanel Banner | `HostingServices/CpanelBanner.js` | `data/hosting-services/data.js` → `cpanelBanner` | — | Shipped |
| Feature Grid | `HostingServices/FeatureGrid.js` | — | — | Shipped (appeared outside session; verify data wiring) |
| Emails Hero | `Emails/Hero.js` | — | — | Shipped — soft-emboss card, 16px radius |
| Emails Option Cards + Tabs | `Emails/PricingFlow.js` | — | — | Shipped — synced tab bar ↔ plan cards |
| Emails Features / FAQ | `Emails/FeaturesPlaceholder.js`, `Emails/FaqPlaceholder.js` | — | — | **Placeholder** — real UI pending |
| SEO Results split | `Seo/CaseStudies.js` | local const, real case-study numbers pending (flag in-file) | Reveal + stagger | Shipped — light 2-col split (badge/heading/copy + 2x2 metric-card grid), replaces old dark 3-card grid |
| SEO Reporting ring row | `Seo/Reporting.js` | local const (illustrative) | framer-motion stroke animation on scroll | Shipped — text block full width on top, 4 label-over-ring pairs in one full-width row below (was a half-width `.seo-split` mock) |
| SEO Pillars split | `Seo/Pillars.js` | local const, 6 pillars (copy unchanged) | Reveal + stagger | Shipped — light 2-col split (badge/heading/copy + 2-col card grid), replaces old dark 3x2 card grid |
| Services Hero | `Services/Hero.js` | `data/services/data.js` → `heroMedia`, `heroSlides` | AnimatePresence slide crossfade (existing) | Shipped (T-014e) — restyled to match `brain/ui-library/inspiration/web services  page hero .png`: glassy pill badge with `bx-chevron-left` (mirrored for RTL), oversized `clamp(36px,6vw,72px)` headline, solid-white dominant primary CTA vs. underlined-text secondary CTA, blurred radial `.wsv-hero-arc-glow` shadow arc over the existing flat `.wsv-hero-sweep` seam into `$wsv-band`. Background video/image and Arabic copy untouched. |
| BW Overview | `Services/BusinessWebsites/Overview.js` | `data/services/data.js` → `businessWebsites.overview` | Reveal + stagger | Area 1 §1. Split; media div first in DOM so RTL puts text right. Real Tabqat mockup, not a CSS skeleton. |
| BW Trust Logos | `Services/BusinessWebsites/TrustLogos.js` | `data/services/data.js` → `businessWebsites.logos` | Reveal + stagger | Area 1 §1b. Real client logos only, greyscale at rest. No counts/ratings — fabricated numbers are a trust violation. |
| BW Plans | `Services/BusinessWebsites/Plans.js` | `data/services/data.js` → `businessWebsites.pricing` | Reveal + feature stagger, `whileHover` lift | Area 1 §2. CSS-grid 3-up (`.seo-grid` breakpoints, not AppDev's Bootstrap row). EG/SA currency toggle, local state, grid keyed on currency. Recommended tier = **static** navy highlight, deliberately not AppDev's rotating beam. 🔴 **Prices are `"—"` placeholders — needs 6 real figures from the business.** |

## Motion / interaction primitives (see `brain/animation/LAB.md`)
| Component | Path | Notes |
|-----------|------|-------|
| Reveal | `Common/Reveal.js` | Scroll reveal + stagger. Reduced-motion safe. Use instead of AOS on new sections. |
| Magnetic | `Common/Magnetic.js` | Magnetic hover wrapper. Keeps inner Link/button semantics. |
| ParticleField | `Common/ParticleField.js` | Ambient canvas network. Stops off-screen. |
| AppOrbit | `AppDev/AppOrbit.js` | CSS 3D phone orbit. |
| TechMarquee | `AppDev/TechMarquee.js` | Infinite marquee, masked edges, pauses on hover. |
| Stats | `AppDev/Stats.js` | Scroll count-up without GSAP. |

## Legacy / template components (Jumpx base — mostly lorem ipsum, pre-direction)
`AboutOne` `AboutTwo` `Auth` `CaseStudiesDetails` `ComingSoon` `Contact` `DigitalMarketing` `EmailFag`
`EmailGoogleDataFag` `EmailMicrosoftDataFag` `EmailProDataFag` `ErrorPage` `Faq` `FaqWebsite` `HomeOne`
`HomeTwo` `HomeThree` `HomeFour` `HomeFive` `News` `PricingEmail` `PricingOfferWebsite` `PricingSSL`
`PricingShareHosting` `PricingVpsHosting` `PricingWebsite` `PricingWordpressHosting` `PrivacyPolicy` `Seo`
`ServiceDetails` `Services` `Shared` `SslFaq` `Ssl_*_data_faq` `Team` `TermsAndConditions` `Testimonials`
`Training` `WebOfferAbout` `WebOfferDeatails` `degital-market*` `digitalfeature` `hostingDetails`
`marketingFaq` `security-fag` `securityDetails` `securityfeature` `sslDetails` `webDeatails*`
`websitefeature` `why-katechs`

> ⚠️ Several legacy components still carry lorem ipsum (`AboutTwo/*`, `degital-markiting-/WhatWeOffer/*`,
> `ComingSoon/*`). Content & Data Manager owns clearing these.

## Lab (dev tooling — not part of the site)
| Component | Path | Notes |
|-----------|------|-------|
| LabShell | `Lab/LabShell.js` | Lab chrome: viewport / RTL / freeze / ground toggles. styled-jsx only — zero footprint on the real site |
| LabCell | `Lab/LabCell.js` | One specimen: error boundary, replay, iframe-based real viewport widths, on-demand mount for heavy ones |
| specimens | `Lab/specimens.js` | The gallery registry. Explicit, not a glob — legacy components need props their page supplies |

## When you build something new
Add a row here **in the same commit** as the component. Include: path, its data source, whether it's
page-scoped or shared, and any gotcha the next person would hit.
