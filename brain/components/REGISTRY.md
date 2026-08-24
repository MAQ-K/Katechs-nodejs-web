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
| SEO page (11 sections) | `Seo/Hero.js`, `AuditForm.js`, `Results.js`, `Pillars.js`, `AiSearch.js`, `Process.js`, `CaseStudies.js`, `Reporting.js`, `Pricing.js`, `Faq.js`, `CtaBand.js` | Copy inline in components (no `data/seo/data.js` yet — flagged as open questions in `data/seo/structure.md`) | Reveal + Magnetic | Shipped — flat black/white editorial system (`seo-` SCSS prefix, ~style.scss:9804), alternating light/dark bands, built from `public/images/seo page inspiration/*.png`. T-011 (2026-08-24) reviewed it against both inspiration sets and closed two gaps: `Results.js` stats now sit in a bordered `.seo-stats-card` (was loose numbers), `CaseStudies.js` cards use a centered icon-first `.seo-card-centered` variant instead of reusing Pillars' left-aligned card. Results/CaseStudies show shimmer "pending" placeholders, not real numbers — real client figures still needed (see structure.md). Pricing has no real prices yet — model unconfirmed. |

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
