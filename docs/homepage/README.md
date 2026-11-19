# Homepage rebuild — working folder

Everything for the new homepage lives here. Started 2026-09-03.

## Where things are

| What | Where |
|---|---|
| Your sketches / structure drawings | `Homepage/structure-drafts/` |
| Your inspiration & reference images | `Homepage/inspirations/` |
| Your vision, notes, decisions | `Homepage/VISION.md` |
| The route (preview) | `pages/hp-new.js` → `http://localhost:3000/hp-new` |
| The section components | `components/HpNew/` (read its README — the contract) |
| Copy/data, once a section settles | `data/home-new/data.js` |

The live homepage `pages/index.js` is **not touched** until the new one is finished and you
approve the swap.

## How we work each section

Sketch → Design → Finish. One section at a time. Nothing moves on until you've seen it.

1. **Sketch** — I build the structure greyscale from your drawing, so we're judging layout,
   hierarchy and spacing, not colour. You confirm.
2. **Design** — the visual pass, pulled from your inspiration images plus the project's
   standing design sources (`brain/ui-library/`, `ui-ux-pro-max`, then a
   `design-taste-frontend` judgment pass). You confirm.
3. **Finish** — real Arabic copy, motion, responsive breakpoints, a11y. Section marked REVIEW.

## Section tracker

Status: `TODO` · `SKETCH` · `DESIGN` · `FINISH` · `REVIEW` · `DONE`

| # | Section | Status | File | Notes |
|---|---------|--------|------|-------|
| 1 | Hero slider | **DESIGN → REVIEW** | `components/HpNew/HeroSlider.js` | Design pass 2026-09-08 from `inspirations/navbar example .png`: layered navy wash, drifting video, eyebrow pill, 68px/800 headline, white pill CTA, indicator bars that carry the autoplay timer. Accent = brand cyan, used 3 times, by the user's call — not the reference's gold |
| 2 | Domain search | SKETCH → REVIEW | `components/HpNew/DomainSearch.js` | GET form, hands off to WHMCS. Host fixed 2026-09-08 (old one didn't resolve) — ⚠️ new host works but is independently flagged as possibly the wrong company, needs your confirmation |
| 3 | Floating section nav | SKETCH → REVIEW | `components/HpNew/SectionNav.js` | 5 pills, scroll-spy highlight, floats past the domain bar. ⚠️ 2026-09-09: a vertical side-rail mode was built for this component, then rejected by the user ("cancel sidesubnavbar make it like it was") and fully reverted the same day. Back to the original `floating` boolean, one shape. Do not reintroduce a rail/mode prop without being asked again by name. See `brain/logs/2026-09-09.md`, the entry titled "side rail REMOVED entirely" |
| 4 | Web services — brief | **DESIGN → REVIEW** | `components/HpNew/WebServicesBrief.js` | 2026-09-23: rebuilt to the Claude Design handoff — white brief CARD beside a floating 500x420 shot (bento top row). Gradient pill CTA + circular WhatsApp button; the three long `overview.points` became three chips from `webServices.briefChips` |
| 5 | Web services — projects marquee | **DESIGN → REVIEW** | `components/HpNew/ProjectsMarquee.js` | 2026-09-23: now a white card inside the bento, and **Swiper is gone** — plain CSS belt (list rendered twice, 0 → -50%). The "من أعمالنا" heading moved in here from the brief |
| 6 | Web services — plans | **DESIGN → REVIEW** | `components/HpNew/WebServicesPlans.js` | 2026-09-23: rebuilt to the handoff — 999px tab pills, centred 62ch heading, 3-up 16px cards, popular = 2px cyan border + badge + solid CTA. ⚠️ custom is still an empty stub, prices still TODO |
| 7 | Hero top nav (page-scoped) | **DESIGN → REVIEW** | `components/HpNew/HeroNav.js` | Tabs ON the hero. Truly invisible now: no surface, legibility from a scrim it casts. Solid state matches the hero navy; links 14px/500; active = short cyan underline. ⚠️ hp-new only — the shared `Layouts/Navbar.js` is untouched, and the support button is still the global `.default-btn` |
| 8 | App services | **DESIGN → REVIEW** | `components/HpNew/AppServices.js` | 2026-09-23: rebuilt to the handoff. **The three.js aurora is gone** — backdrop is the design's 21-streak pure-CSS light field, which drops a ~600KB chunk. Stage still renders `components/AppDev/AppOrbit.js` ITSELF, not a copy |
| 9 | Email services | **DESIGN → REVIEW** | `components/HpNew/EmailServices.js` | 2026-09-23: rebuilt to the handoff — side rail became a row of three 16px card-tabs (active goes near-black with a gradient underline), aura shapes behind the copy, four colour-cycled tick badges. ⚠️ panel images are still placeholders |
| 10 | Stores (e-commerce) | **DESIGN → REVIEW** | `components/HpNew/Stores.js` | 2026-09-23: rebuilt to the handoff's **option C bento** — tall combo box left, two squares upper-right, one wide box under. 🔴 `stores.journey` and `stores.capabilities` NO LONGER RENDER here (data untouched, still on Web Services). ⚠️ combo + landing illustration slots are empty by design |
| 11 | Marketing | **DESIGN → REVIEW** | `components/HpNew/Marketing.js` | 2026-09-23: **FORKED** out of `components/Common/SeoShowcase.js` so the frozen `pages/index.js` stays untouched. 43/57 split, navy talk right, SEO photo left. The fork also fixes SeoShowcase's forever-running 40ms setInterval — ⚠️ the shared component still has that bug |
| 12 | Why choose us | SKETCH → REVIEW | `components/HpNew/WhyChooseUs.js` | Redesigned 2026-09-08: was a 6-image marquee, now a scroll-synced sticky box that switches through the 4 reasons as you scroll. Mobile: box hidden, list back to compact (no sticky sibling to switch beside) |

> **2026-09-23 — sections 4, 5, 6, 8, 9, 10 and 11 were rebuilt to the Claude Design handoff**
> (`Homepage/Homepage Services Design-handoff/homepage-services-design/project/Homepage.dc.html`),
> on the user's instruction "make it apply it exactly". The hero, domain strip and section nav were
> NOT touched. Everything that changed beyond styling — dropped blocks, dropped libraries, the
> marketing fork, and the per-route Cairo link — is itemised in `brain/logs/2026-09-23.md`. Read that
> before reverting anything here.

> **2026-09-09 — sections 4/5/6: light band only. Two other designs were tried and REJECTED
> the same day.** The three blocks stack in their natural order on a shared light (`#f7f7f7`)
> band: brief (talk-LEFT / image-RIGHT), projects under it, plans under those.
> `components/HpNew/WebServicesScreen.js` owns only that band.
> ⚠️ Rejected in order: (1) forcing all three into a single 100vh screen, and (2) a side rail
> the floating nav morphed into while this section was on screen. Both fully reverted — do not
> rebuild either. See `brain/logs/2026-09-09.md`.

## For reference — what the current homepage is made of

`pages/index.js`, in order. Eight of the twelve are `components/Common/**`, shared with other
pages — which is exactly why the rebuild is isolated in `components/HpNew/`.

| # | Section | Lives in |
|---|---------|----------|
| 1 | MainBanner | `components/HomeTwo/` |
| 2 | ReviewsCounter | `components/HomeTwo/` |
| 3 | OurServices | `components/Services/Services.js` |
| 4 | Web services — brief | **DESIGN → REVIEW** | `components/HpNew/WebServicesBrief.js` | 2026-09-23: rebuilt to the Claude Design handoff — white brief CARD beside a floating 500x420 shot (bento top row). Gradient pill CTA + circular WhatsApp button; the three long `overview.points` became three chips from `webServices.briefChips` |
| 5 | Web services — projects marquee | **DESIGN → REVIEW** | `components/HpNew/ProjectsMarquee.js` | 2026-09-23: now a white card inside the bento, and **Swiper is gone** — plain CSS belt (list rendered twice, 0 → -50%). The "من أعمالنا" heading moved in here from the brief |
| 6 | Web services — plans | **DESIGN → REVIEW** | `components/HpNew/WebServicesPlans.js` | 2026-09-23: rebuilt to the handoff — 999px tab pills, centred 62ch heading, 3-up 16px cards, popular = 2px cyan border + badge + solid CTA. ⚠️ custom is still an empty stub, prices still TODO |
| 7 | EcommercePlatforms | `components/PricingWebsite/` |
| 8 | App services | **DESIGN → REVIEW** | `components/HpNew/AppServices.js` | 2026-09-23: rebuilt to the handoff. **The three.js aurora is gone** — backdrop is the design's 21-streak pure-CSS light field, which drops a ~600KB chunk. Stage still renders `components/AppDev/AppOrbit.js` ITSELF, not a copy |
| 9 | Email services | **DESIGN → REVIEW** | `components/HpNew/EmailServices.js` | 2026-09-23: rebuilt to the handoff — side rail became a row of three 16px card-tabs (active goes near-black with a gradient underline), aura shapes behind the copy, four colour-cycled tick badges. ⚠️ panel images are still placeholders |
| 10 | Stores (e-commerce) | **DESIGN → REVIEW** | `components/HpNew/Stores.js` | 2026-09-23: rebuilt to the handoff's **option C bento** — tall combo box left, two squares upper-right, one wide box under. 🔴 `stores.journey` and `stores.capabilities` NO LONGER RENDER here (data untouched, still on Web Services). ⚠️ combo + landing illustration slots are empty by design |
| 11 | Marketing | **DESIGN → REVIEW** | `components/HpNew/Marketing.js` | 2026-09-23: **FORKED** out of `components/Common/SeoShowcase.js` so the frozen `pages/index.js` stays untouched. 43/57 split, navy talk right, SEO photo left. The fork also fixes SeoShowcase's forever-running 40ms setInterval — ⚠️ the shared component still has that bug |
| 12 | FaqHorizontal | `components/Common/` |
| — | OurProjects, Testimonials | commented out in `pages/index.js` |

`components/HomeOne/` is **orphaned** — nothing imports it. (The T-018 row in
`brain/MANAGEMENT.md` points at that folder and is wrong; corrected in the 2026-09-03 log.)

Current homepage copy is hardcoded in JSX — there is no `data/home/` directory, against the
project's data-driven convention. The rebuild fixes that.

### Web services design review - 2026-09-08
Brief and projects now use the approved reference layout: centered section intro, left copy/right visual, pale bordered panels, and three project cards with directional controls/swipe and 10% edge fades. Implemented in WebServicesBrief.js and ProjectsMarquee.js; intro copy in data/home-new/data.js. Status: DESIGN -> REVIEW. HTTP/markup/assets verified; browser visual review pending.

### Web services reference correction - 2026-09-09
Supersedes the centered-heading layout: joined 62/38 hero/project composition, three-line headline upper left, large laptop visual right, pastel pill plus round contact CTA, three adjacent automatic image-only project panels. Full width and viewport height budget retained. DESIGN -> REVIEW; live visual check pending (browser unavailable).

### Web services restored first attempt - 2026-09-09
User requested the first design attempt. Centered intro, left copy/right decorated visual, 1180px container and manual named project carousel restored. This supersedes all subsequent web services design correction notes. HTTP/markup checked.

### Web services visual design pass — hp-new theme — 2026-09-09
Restyled WebServicesBrief.js, ProjectsMarquee.js and WebServicesPlans.js off the light/monochrome
palette they were restored on, onto the theme HeroSlider/HeroNav/DomainSearch/WhyChooseUs already
established for this page — layered navy (#030916 → #050c1a → #0a1628, bridging into AppServices'
own navy below), brand cyan `#1dd3f8` used sparingly (eyebrow tag, check-icons, active tab pill,
popular plan's border/CTA), Cairo throughout, `.default-btn` reused for the brief's primary CTA
(same global cyan button as the hero/domain/nav). Structure untouched (still talk-left/image-right,
still the 3-card manual carousel, still 3 ARIA tabs with real roving-tabindex semantics) — visual
pass only, per Manager's instruction. Two small continuity fixes: brief's container widened from
1060px to 1180px and plans' from 1320px to 1180px, so all three blocks share one column width and
stop visually stepping in/out against their neighbours. Two data fields that already existed on
`businessWebsites.overview` but were never rendered are now on screen — `eyebrow` and `points` —
nothing invented, just wired up (same as the plan cards' `features`, now bulleted with cyan
check-icons instead of a bare list). Custom tab's empty state kept as-is, no prices added.
`brain/ui-library/inspiration/general-tabbed-product-cards-hostinger.md` is the tab-bar precedent
(pill row, one filled active pill) — its black fill swapped for cyan. `ui-ux-pro-max`'s `search.py`
was unreachable in this session (no working Python interpreter on the machine — `py`/`python3`
both fail) so palette/typography calls were pulled directly from the four already-built hp-new
reference components instead; flagging this so a future session with working Python re-checks
against the skill directly. Verified: `npm run dev`, `.next/cache` cleared first, `/hp-new/` → 200,
no console/compile errors in the dev log. Status: DESIGN → REVIEW, live browser look still pending.
