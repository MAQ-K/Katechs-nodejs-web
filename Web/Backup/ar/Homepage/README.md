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
| 1 | Hero slider | SKETCH → REVIEW | `components/HpNew/HeroSlider.js` | Video bg, 3 cross-fading text slides, dots bottom-right, autoplay + pause on hover |
| 2 | Domain search | SKETCH → REVIEW | `components/HpNew/DomainSearch.js` | GET form, hands off to WHMCS. ⚠️ target host is a placeholder — needs confirming |
| 3 | Floating section nav | SKETCH → REVIEW | `components/HpNew/SectionNav.js` | 5 pills, scroll-spy highlight, floats past the domain bar |
| 4 | Web services — brief | SKETCH → REVIEW | `components/HpNew/WebServicesBrief.js` | Talk LEFT / image RIGHT per sketch. Reuses `businessWebsites.overview` + the Tabqat screenshot |
| 5 | Web services — projects marquee | SKETCH → REVIEW | `components/HpNew/ProjectsMarquee.js` | Full-bleed infinite loop, 6 real projects, masked fade at both ends, pauses on hover |
| 6 | Web services — plans | SKETCH → REVIEW | `components/HpNew/WebServicesPlans.js` | 3 ARIA tabs. business + wordpress use real data; ⚠️ custom is an empty stub, prices are TODO |
| 7 | Hero top nav (page-scoped) | SKETCH → REVIEW | `components/HpNew/HeroNav.js` | Tabs ON the hero. Transparent over it, glassy past it. ⚠️ hp-new only — the shared `Layouts/Navbar.js` is untouched |
| — | Section slots (app-dev, mail, marketing) | TODO | `pages/hp-new.js` | Empty labelled placeholders, so the nav has real targets |

## For reference — what the current homepage is made of

`pages/index.js`, in order. Eight of the twelve are `components/Common/**`, shared with other
pages — which is exactly why the rebuild is isolated in `components/HpNew/`.

| # | Section | Lives in |
|---|---------|----------|
| 1 | MainBanner | `components/HomeTwo/` |
| 2 | ReviewsCounter | `components/HomeTwo/` |
| 3 | OurServices | `components/Services/Services.js` |
| 4 | MakeYourBusiness | `components/Common/` |
| 5 | PricingWebsite | `components/PricingWebsite/PricingStyleOne` |
| 6 | MobileAppPromo | `components/Common/` |
| 7 | EcommercePlatforms | `components/PricingWebsite/` |
| 8 | SeoShowcase | `components/Common/` |
| 9 | OurClientsGallery | `components/Common/` |
| 10 | Partner | `components/Common/` |
| 11 | TrustedCustomers | `components/Common/` |
| 12 | FaqHorizontal | `components/Common/` |
| — | OurProjects, Testimonials | commented out in `pages/index.js` |

`components/HomeOne/` is **orphaned** — nothing imports it. (The T-018 row in
`brain/MANAGEMENT.md` points at that folder and is wrong; corrected in the 2026-09-03 log.)

Current homepage copy is hardcoded in JSX — there is no `data/home/` directory, against the
project's data-driven convention. The rebuild fixes that.
