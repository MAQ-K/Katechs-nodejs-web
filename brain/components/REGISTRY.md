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
| BW Plans | `Services/BusinessWebsites/Plans.js` | `data/services/data.js` → `businessWebsites.pricing` | Reveal + feature stagger, `whileHover` lift | Area 1 §2. CSS-grid 3-up (`.seo-grid` breakpoints, not AppDev's Bootstrap row). EG/SA currency toggle, local state, grid keyed on currency. Recommended tier = **static** navy highlight, deliberately not AppDev's rotating beam. 🔴 **Prices are `"—"` placeholders — needs 6 real figures from the business.** |
| BW Faq | `Services/BusinessWebsites/Faq.js` | `data/services/data.js` → `businessWebsites.{faqSection,faqs}` | react-accessible-accordion + Reveal stagger | Area 1 §3, closes the area. 4 questions on purpose ("not too long"). Navy-tinted variant of the site's standard `.app-faq-accordion` recipe — same `::before:none` double-chevron fix. |
| Section Snap (hook) | `Services/useSectionSnap.js` | — | native CSS scroll-snap + wheel accumulator | Desktop-only (≥992px), off under reduced motion. Exports `SNAP_SELECTOR` — the snap set lives there and nowhere else; the hook tags matches with `.wsv-snap` so SCSS needs only one class. Returns `markProgrammatic()` for the SideRail to call so the two don't fight. |
| Scroll Progress | `Services/ScrollProgress.js` | — | none, informational | Thin fill bar pinned just under the fixed navbar (measured live via ResizeObserver, not hard-coded — the navbar's height changes with `.is-sticky`). Whole-document scroll, NOT desktop-gated or area-aware like the rail/snap — stays meaningful on phones. |

## Motion / interaction primitives (see `brain/animation/LAB.md`)
| Component | Path | Notes |
|-----------|------|-------|
| Reveal | `Common/Reveal.js` | Scroll reveal + stagger. Reduced-motion safe. Use instead of AOS on new sections. |
| Magnetic | `Common/Magnetic.js` | Magnetic hover wrapper. Keeps inner Link/button semantics. |
| ParticleField | `Common/ParticleField.js` | Ambient canvas network. Stops off-screen. |
| AppOrbit | `AppDev/AppOrbit.js` | CSS 3D phone orbit. |
| TechMarquee | `AppDev/TechMarquee.js` | Infinite marquee, masked edges, pauses on hover. |
| Stats | `AppDev/Stats.js` | Scroll count-up without GSAP. |

## anime.js primitives (`components/AnimeJs/`, `animejs` ^4.5.0)
Tier D in `brain/animation/LAB.md` — a real dependency (2026-08-30, user's call). Reach for these when the
API is genuinely the better tool (SVG draw/path, scroll-scrub, spring drag, text stagger); Tier A stays the
default for a plain reveal/hover. All demoed at `/lab/motion/`.

| Component | Path | Notes |
|-----------|------|-------|
| TweenBasics | `AnimeJs/TweenBasics.js` | Core `animate()` — translate/rotate/scale/color. |
| EasingShowcase | `AnimeJs/EasingShowcase.js` | Six easings incl. a spring, side by side. |
| StaggerGrid | `AnimeJs/StaggerGrid.js` | `stagger()` radiating from a grid's center. |
| TimelineSequence | `AnimeJs/TimelineSequence.js` | `createTimeline()`, three steps, negative offsets. |
| SvgLineDraw | `AnimeJs/SvgLineDraw.js` | `svg.createDrawable()` length-aware line draw-in. |
| MotionPathDemo | `AnimeJs/MotionPathDemo.js` | `svg.createMotionPath()` — HTML element banking along a curve. |
| DraggableCard | `AnimeJs/DraggableCard.js` | `createDraggable()` with spring release into bounds. |
| ScrollScrub | `AnimeJs/ScrollScrub.js` | `onScroll({ sync: true })` — progress scrubs with scroll. |
| TextSplitReveal | `AnimeJs/TextSplitReveal.js` | `text.split()` — per-character stagger-in. |

## Ambient + CSS-3D primitives (`components/Motion/`)
Tier C in `brain/animation/LAB.md`, added 2026-08-30. Pure CSS — no rAF, no WebGL/three.js, reduced-motion
respected via media query. All demoed at `/lab/motion/`.

| Component | Path | Notes |
|-----------|------|-------|
| FloatingBlobs | `Motion/FloatingBlobs.js` | Two blurred gradient blobs drifting on offset loops. |
| GradientAurora | `Motion/GradientAurora.js` | Animated `background-position` gradient wash. |
| FloatingIcons | `Motion/FloatingIcons.js` | Badge row bobbing on staggered delays. |
| WaveDivider | `Motion/WaveDivider.js` | Seamless self-scrolling SVG wave divider. |
| OrbitRing | `Motion/OrbitRing.js` | Dot ring spinning as one element. |
| Cube3D | `Motion/Cube3D.js` | Six-face `preserve-3d` cube spinning on two axes. |
| FlipCard3D | `Motion/FlipCard3D.js` | Two-face 180° Y flip, hover + focus. |
| CardStack3D | `Motion/CardStack3D.js` | Fanned Z/rotate deck, flattens on hover. |
| OrbitSphere3D | `Motion/OrbitSphere3D.js` | Icon badges orbiting in 3D depth. |
| ParallaxLayers3D | `Motion/ParallaxLayers3D.js` | Three depth layers, cursor-parallax (framer-motion). |

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
