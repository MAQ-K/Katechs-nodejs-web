# Katechs (AR) — Project Management File

> Read this file first in any new chat about this project. Keep it updated as work progresses — it's the single source of truth for context across sessions.

## Brief

`Web/Backup/ar` is the **Arabic** build of the Katechs website — a Next.js 14 (Pages Router) IT/hosting/security services site, built on the "Jumpx" React/Next.js template. Bootstrap 5 + custom SCSS theme, RTL layout (`styles/rtl.css`), AOS scroll animations, Swiper carousels.

Current goal: **build new pages** using the **same theme/design system** (colors, fonts, Navbar/Footer, component conventions) but with a **different UI/UX style** for the new page content.

## Environment

- **Framework**: Next.js 14, Pages Router (not App Router). Custom `server.js` (plain `http` server wrapping Next, not `next start`).
- **Styling**: Bootstrap 5 + `styles/style.scss` / `styles/responsive.scss` (compiled to `.css` + `.css.map`, committed). `styles/rtl.css` handles RTL. No CSS Modules / styled-components — global SCSS classes.
- **Structure convention**:
  - `pages/<route>.js` — thin page files, compose `Layout` + a stack of components.
  - `components/<PageName>/` — components dedicated to one page (e.g. `HomeOne`, `PricingWebsite`, `securityDetails`).
  - `components/Common/` — shared cross-page sections (CTA, Testimonials, Team, PageBanner, Newsletter, Partner, etc.).
  - `components/Layouts/` — `Navbar.js`, `Footer.js` (the shared shell).
  - `components/Shared/GoTop.js` — shared utility widget.
  - `utils/baseUrl.js` — env-aware base URL (`Katechs.com` in prod, `localhost:3000` in dev).
- **Forms/email**: `pages/api/contact.js` and `pages/api/web.js` send mail via `nodemailer-sendgrid-transport`. reCAPTCHA is client-side only (not verified server-side — see Known Issues).
- **Run locally**: `npm run dev` (runs `node server.js`, port 3000). `npm run build` for production build.
- **Lint**: `eslint:recommended` + `plugin:react/recommended`, but `next.config.js` sets `eslint.ignoreDuringBuilds: true` — lint does not block builds.

## Design References

- **Motion / 3D / UI Kit Lab** — https://claude.ai/code/artifact/ebce0bd4-72de-4487-aa0c-43dcab93d7bb — a live, interactive reference (not a mockup — every demo actually runs) covering: three animation tiers (Framer Motion reveals, GSAP ScrollTrigger, ambient/3D) with install + wiring code for this specific Next.js Pages Router + RTL setup; six advanced 3D scenes in raw WebGL/canvas with a React Three Fiber pipeline guide; six 21st.dev components assessed and ported to vanilla CSS (this project has no Tailwind/shadcn — see verdicts before reusing any 21st.dev/shadcn snippet); and a UI Kit section with the exact soft-emboss shadow recipe (4-layer box-shadow, not a flat blur), button/badge/card/typography patterns pulled from a reference template the user liked. **Before styling any new card, button, badge, or adding motion/3D to a page, check this lab first** — it documents what fits this codebase and what doesn't, and why.

## History

- **2026-08-18** — Did a full review of `Web/Backup/ar`. Key findings (see Known Issues below): hardcoded SendGrid API key in two API route files, broken `.gitignore` entry for `sendgrid.env`, 32 `npm audit` vulnerabilities (incl. critical in `swiper`), reCAPTCHA not verified server-side, no input sanitization on contact forms, stray files committed (`contact.zip`, log files, `check-mockup.png`).
- **2026-08-18** — Agreed direction: build new pages reusing the existing theme/shell (Navbar, Footer, SCSS tokens) but with a distinct UI/UX treatment for new page content, following the existing `pages/<route>.js` + `components/<PageName>/` pattern.

## Known Issues / Security Debt (not yet fixed — do not ignore)

1. **[Critical]** Hardcoded live SendGrid API key in `pages/api/contact.js:7` and `pages/api/web.js:7`. Needs rotation + move to `process.env.SENDGRID_API_KEY`.
2. **[Critical]** `.gitignore` has a corrupted line meant to ignore `sendgrid.env` (currently untracked but NOT actually ignored — a plain `git add .` would stage a file containing a raw API key).
3. **[Critical]** `npm audit`: 32 vulnerabilities (9 critical, 14 high), notably prototype pollution in `swiper` (actively used for carousels).
4. **[Medium]** reCAPTCHA only gates the submit button client-side; `/api/contact` and `/api/web` never verify the token server-side — bypassable by calling the API directly.
5. **[Medium]** No input validation/escaping before interpolating form fields into email HTML (`pages/api/contact.js`, `pages/api/web.js`) — HTML injection into support inbox possible.
6. **[Low]** Committed log/junk files: `stderr.log` (leaks prod server path), `dev-stdout.log`, `dev-stderr.log`, `pages/contact.zip`, `check-mockup.png`, `tmp/restart.txt`.

## Plan

- [ ] Fix credential exposure (rotate key, env var, `.gitignore` fix) — should happen before any further commits/pushes.
- [ ] Define the new UI/UX direction for new pages (style reference, layout ideas) — pending input.
- [ ] Build new page(s): page file in `pages/`, dedicated component folder in `components/`, reuse `Layout`/Navbar/Footer, reuse SCSS tokens, new visual treatment for the content sections.
- [ ] (Optional/parked) Address `npm audit` findings, server-side recaptcha verification, input sanitization.

## Task Log

| Date | Task | Status |
|------|------|--------|
| 2026-08-18 | Full codebase review | Done |
| 2026-08-18 | Create this management file | Done |
| 2026-08-18 | Hosting services — Stage 1 (Understand): wrote `data/hosting-services/brief.md` + `data.js`, scaffolded flat data folders for vps-hosting/wordprees-hosting | Done — pending user review |
| 2026-08-18 | Hosting services — Stage 3, Section 1 (Hero): built `components/HostingServices/Hero.js`, new `.hosting-hero*` styles in `styles/style.scss` (compiled to `style.css`), wired into `pages/services/hosting-services/index.js` replacing `PageBanner`, added `#pricing` anchor. Verified rendering via dev server. Placeholder image (`main-img1.png`) — real asset pending. | Done — pending visual review with user |
| 2026-08-18 | Hero refinement: real hero image (`public/images/hosting-services/hero-website-live.png`, user-provided) wired in; heading/eyebrow/badge switched to Cairo font (already loaded in `_document.js`, previously unused — scoped to hero only, sitewide `$heading-font-family` untouched); image capped to 420px; domain floating card redesigned as a pill (globe icon + domain text) + separate shield-icon badge. | Done — pending visual review with user |
| 2026-08-18 | Hero: domain badge reworked (rounded-card not full pill, deeper shadow, cursor accent) + image bumped to 520px after "shitty badge" feedback. Added second floating card — rocket icon + conic-gradient % ring at bottom-right of hero image. | Done — pending visual review with user |
| 2026-08-18 | Hero: reverted the rocket/speed-card addition per user correction (misread the ask). Attempted full-width CTA bar per re-annotated sketch — user rejected it, reverted back to compact `default-btn` inside the text column. | Reverted |
| 2026-08-18 | Hero: added rocket loader bar — full-width animated progress track at the bottom of the hero section (below the text/image row), fills to 99% via CSS `@keyframes` + custom property, rocket icon riding the leading edge, label + percentage below. Confirmed placement with user via AskUserQuestion before building (learned from prior back-and-forth). | Done — pending visual review with user |
| 2026-08-18 | Hero: added a small continuous float animation on the loader rocket, then reverted immediately per user ("REVERT") — rocket is back to static positioning at the fill's leading edge, no ongoing animation. | Reverted |
| 2026-08-18 | Hero rebuilt against a full-page reference screenshot the user provided (`public/images/New folder/chrome-capture-2026-08-18.png`, a Hostinger AR hosting landing page). Removed the rocket loader bar (not in the reference), added a circular "speed ring" badge (99, lightning icon) at the image's bottom-right mirroring the reference's PageSpeed card, and added a 5-star "ممتاز" trust row under the CTA button (no fabricated third-party review logos). User confirmed via AskUserQuestion: continue section-by-section workflow; pricing cards up next. | Done — pending visual review with user |
| 2026-08-18 | Hero: swapped column order — image column now first in DOM (renders right in RTL), text column second (renders left), matching user's "image right, text left" request. No SCSS changes needed. | Done |
| 2026-08-18 | Pricing section modernized: new `components/HostingServices/Pricing.js` (first component built directly against `data/hosting-services/data.js`'s `pricing` object — no more hardcoded plan JSX), replaces `PricingShareHosting/PricingStyleOne` in the page. New `.hosting-pricing-*` SCSS classes (not touching shared `.single-pricing`/`.currency-switch` used by other pricing pages) — modern cards, middle "الاكثر طلبا" plan highlighted in solid black + scaled up, pill currency switch, checklist with check icons. | Done — pending visual review with user |
| 2026-08-18 | Fixed: `bx bxs-check-circle` (a "solid" Boxicons variant) rendered as an empty box in the pricing checklist — the CSS rule/codepoint exists in `styles/boxicons.min.css` but the bundled icon font lacks that glyph. Swapped to plain `bx bx-check` (confirmed working elsewhere) wrapped in a small circle badge for the same visual effect. **Gotcha for future icon choices: prefer `bx-*` (regular) over `bxs-*` (solid) in this project unless verified to render.** | Fixed |
| 2026-08-18 | Fixed unrelated pre-existing bug (spotted via user screenshot, not part of hosting-services scope): `components/Common/Partner.js` (used on `/` and `/about-us/`) had zero CSS for `.logo-section`/`.logo-container`/`.logo-box` — raw `<img>` logos (up to 2560×742px, e.g. Laravel) rendered at native size, huge and overlapping. Added proper flex layout + normalized logo height (45px) in `styles/style.scss`. | Fixed |
| 2026-08-18 | Remade the "جرب لوحة التحكم cPanel" FAQ section into a banner: new `components/HostingServices/CpanelBanner.js` + `cpanelBanner` data in `data/hosting-services/data.js`, replaces `FaqContent` on this page only (`FaqContent` itself untouched — still used by vps-hosting/wordprees-hosting). Layout: text+CTA on the right (`default-btn`, same theme as elsewhere), illustration (`public/images/faq-img.png`, existing asset, blue palette) overflowing the top of a rounded gradient-tinted banner frame on the left, per user's sketch + reference image. Confirmed left/right placement with user via AskUserQuestion before building (sketch and written instructions conflicted). | Done — pending visual review with user |
| 2026-08-18 | Noticed (not by me) `pages/services/hosting-services/index.js` changed on disk: `ServicesStyleTwo` commented out, `FeatureHost` swapped for a new `components/HostingServices/FeatureGrid.js`. Left as-is per instructions (current state, not reverted). | Noted |
| 2026-08-18 | Pricing: changed the popular plan card ("استضافة الموزعين") background from solid black to dark navy blue (`#0a1f44`) per user request. | Done |
| 2026-08-18 | Fixed broken footer logo/shape images (user screenshot). Root cause: corrupted `.next/cache` (webpack "invalid block type" errors seen a few steps earlier when restarting the dev server). Image files themselves were always valid (verified with `sharp`). Cleared `.next/cache` and restarted — all footer images now resolve 200. | Fixed |
| 2026-08-18 | Feature grid ("التزويد الفوري" card, `components/HostingServices/FeatureGrid.js` — new component that appeared on disk outside this session) had no explicit font-family on its `h3`/`p`, inheriting an inconsistent fallback. Set `h3` to Cairo (matches every other new-section heading: Hero, Pricing, CpanelBanner) and `p` to `$body-font-family` explicitly. | Fixed |
| 2026-08-18 | cPanel banner: swapped the placeholder illustration for the user's new SEO/growth-themed image (moved to `public/images/hosting-services/cpanel-banner-seo.png`, was in `public/images/New folder/`), updated `next/image` dimensions for its landscape aspect ratio (1536×1024 → 460×307) and reduced the overflow pull-up (-100px → -70px) to match the shorter height. **Flag:** this image is a photo composite with its own blurred/vignette edges, unlike the old transparent illustration — worth a visual check that it blends well with the gradient banner frame once viewed. | Done — pending visual review with user |
| 2026-08-18 | cPanel banner: made image bigger — widened its column from col-lg-5 to col-lg-6 (text column narrowed 7→6 to match) and bumped `next/image` size 460×307 → 690×460, same 3:2 ratio. | Done |
| 2026-08-18 | cPanel banner: image now visually breaks out past the banner frame (bigger than the banner, not just bigger overall) — `width: 135%` on the img (overriding `max-width`), pulled up `-140px` and left `-70px` so it overflows the card's top and outer edge, plus a stronger drop shadow to sell the "standing out" effect. Reset to contained 100%-width on mobile (<992px). Bumped intrinsic `next/image` size to 780×520 for quality at the larger display size. | Done — pending visual review with user |
| 2026-08-18 | cPanel banner image: per user's exact style spec, dialed width down 135%→110% and dropped the drop-shadow (commented out, not deleted). | Done |
| 2026-08-19 | **Emails page — structure pass.** Built `components/Emails/` (`Hero`, `PricingFlow`, `FeaturesPlaceholder`, `FaqPlaceholder`, `wireframeStyles.js`) as gray-box wireframes with real interaction only, wired into `pages/services/emails/index.js` (replaced `PageBanner`/`ServiceDetailsContent`/`Email_typs`/`PricingEmail`/`FaqContent`). Layout from user's sketch: hero (image + title/paragraph/3 bullets), 3 big option cards → synced compact tab bar → plan cards that swap per type, then Features and FAQ blocks. Confirmed interaction model with user before building. | Done |
| 2026-08-19 | Emails hero UI (section 1): `.email-hero` — soft-emboss gradient image card (recipe from the Motion/3D/UI Kit Lab, retoned to `$main-color` cyan), Cairo headline, 3 icon-badge bullets, `default-btn` CTA. Per user: 160px top padding to clear the navbar, card centered in its column, **16px radius (from the reference image, not the lab's 40px)**, image column left / text right. Placeholder envelope icon — no suitable real photo in `public/images` yet. | Done |
| 2026-08-19 | Emails option cards (section 2): `.email-type-card` — logo tile, real copy reused from `Email_typs.js`, active state = cyan gradient + "اختر هذه الباقة", hover lift. Per user: card radius 5px, icon tile 8px radius and no shadow. | Done |
| 2026-08-19 | Emails pricing (section 3): created `data/emails/data.js` (all plans/prices/features carried over verbatim from `components/PricingEmail/*`), rebuilt tab bar (pill tabs, cyan active) + `.email-plan-card` (soft-emboss, check/x feature list, navy `#0a1f44` most-popular card matching the hosting page). **Gotcha: named the modifier `is-popular`, not `popular` — the theme's global `.popular` (style.scss:3325) is a rotated red corner ribbon and was rotating the whole card 45°.** | Done — pending visual review with user |
| 2026-08-19 | Emails features (section 4) + FAQ (section 5). Features: bento grid (`.email-features-grid`, CSS Grid 6-col, 3 cards span-2 + 2 cards span-3) per user's reference screenshot — flat white cards, thin border, no emboss shadow, deliberately different from this page's other sections. All 5 feature claims restate facts already stated elsewhere on this page (99.9% uptime, antivirus/spam, cross-device, migration tool) — none invented. FAQ: real `Accordion` from `react-accessible-accordion` (already a dependency, used elsewhere), 5 new Q&As grounded in existing page facts — flagged in `data.js` for the client to review wording since the source FAQ components (`EmailFag` etc.) are single blurbs, not real Q&A pairs to copy from. | Done — pending visual review with user |
| 2026-08-19 | **Motion layer added across the whole page** (framer-motion, added to `package.json`) — landed mid-session from a parallel edit, reconciled rather than reverted per the Design References lab: `components/Common/Reveal.js` (scroll-reveal + stagger helpers, replaces AOS), `components/Emails/Tilt3D.js` (cursor-tilt wrapper on the hero image), `components/Emails/BorderBeam.js` (rotating conic-gradient border on the popular plan card — the lab's top-rated 21st.dev pick, "Take it — best of the six"). I added the missing `.email-plan-beam`/`.email-beam-inner` SCSS (the component had no matching styles yet) and fixed a duplicate FAQ chevron (`react-accessible-accordion/dist/fancy-example.css`, imported globally in `_app.js`, draws its own `::before` arrow that doubled up with the custom plus/x icon — killed via `&::before { display:none }` scoped to `.email-faq-accordion`). **Gotcha: this project's dev server is fragile to concurrent edits — two dev-server instances mid-session (one crashed on file deletion, corrupted `.next` cache produced `SyntaxError: Unexpected end of JSON input` on manifest reads). Fix was killing all node processes on :3000 and deleting `.next` entirely before one clean restart.** All 5 sections verified error-free via Playwright afterward. | Done — pending visual review with user |

## New Page Workflow (agreed process — follow for every new page)

Each new page is built in 3 stages, walked through together before moving to the next:

1. **Understand** — what service/topic this page is for, the page's goal, what content/information needs to be displayed.
2. **Structure** — page structure, UX draft (rough flow of sections), list of elements/components needed.
3. **Design** — section-by-section UI design, then the full page UI/UX put together.

Do not skip ahead to design before structure is agreed, and don't skip structure before the goal/content is agreed.

## Data Folder Convention

Each service page gets **one flat folder directly under `data/`**, named after its route (matches the folder under `pages/services/`) — not nested under a literal `services/` folder. That one folder holds everything for all 3 stages of that page, separate from any component markup:

- `brief.md` — Stage 1 deliverable: **starts with a short "Summary — the actual service data" block** (plan names, prices, features, selling points — the real content, not a list of section names), then page goal, audience, full section-by-section content, open questions. Reviewed with the user before Stage 2.
- `data.js` — same content as a structured JS module (plain objects/arrays), scaffolded for later import by new components in Stage 3. Not wired into pages until the new page is actually built.
- (Stage 2/3 will add more files to the same folder, e.g. `structure.md`, `design.md` — TBD as we reach those stages.)

```
data/
  hosting-services/   ← populated (brief.md, data.js)
  emails/              ← populated (data.js only — page came from a sketch, not a Stage 1 brief)
  vps-hosting/         ← placeholder README, not started
  wordprees-hosting/   ← placeholder README, not started
```

## Conventions to Follow for New Work

- New pages: `pages/<route>.js` (thin) + `components/<PageName>/*.js` (page-specific sections), same as existing pages — do not introduce a new folder structure or styling system (no CSS Modules, no styled-components, no Tailwind) unless explicitly requested.
- Reuse `components/Layouts/Navbar.js` + `Footer.js` for the page shell.
- Reuse `components/Common/*` for generic sections (CTA, Testimonials, PageBanner, etc.) where it fits; only build new one-off components for the parts that need the new UX treatment.
- Keep RTL in mind (Arabic site) — verify new markup/styles work with `styles/rtl.css`.
- Don't add new hardcoded secrets — use env vars for anything sensitive.
