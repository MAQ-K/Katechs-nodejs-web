# Design intelligence — where it lives

These are **local, offline, already installed**. Search them before the web.

## `ui-ux-pro-max` — the database
`~/.claude/skills/ui-ux-pro-max/` (on this machine:
`C:/Users/ELTANANY01007675193/.claude/skills/ui-ux-pro-max/`)

| File | Holds | Who reads it |
|------|-------|--------------|
| `data/motion.csv` | 16 motion presets — tier, trigger, duration, easing, snippet, do/don't, perf | UI Animator |
| `data/stacks/threejs.csv` | Three.js guidance | UI Animator |
| `data/stacks/nextjs.csv`, `react.csv` | Pages Router / React idioms | Implementer, Animator |
| `data/react-performance.csv` | Perf rules | Implementer, Tester |
| `data/styles.csv` | 84 visual styles | UI Searcher |
| `data/colors.csv` | 192 palettes | UI Searcher |
| `data/google-fonts.csv`, `typography.csv` | 74 font pairings | UI Searcher |
| `data/products.csv`, `ui-reasoning.csv` | 192 product types + reasoning rules | UI Searcher |
| `data/ux-guidelines.csv` | 98 UX rules | UI Searcher, **Tester (audit checklist)** |
| `data/landing.csv`, `icons.csv`, `charts.csv`, `app-interface.csv` | Landing patterns, 104 icons, 25 chart types | UI Searcher |

**Cite what you use.** File + row, in the library entry, the component header comment, and your report.

## `design-taste-frontend` — the judgment pass
`~/.claude/skills/design-taste-frontend/` — anti-slop frontend skill for landing pages and redesigns.
Invoked by the **UI Implementer** on every new page/section build.

## `brandkit`
Brand-guideline boards, logo systems, identity decks. Not in the current pipeline — available if brand work comes up.

---

## The translation tax — read this before using any of it

Both skills assume **Tailwind + shadcn**, and `motion.csv` snippets are **GSAP**.
This project has **neither**: Bootstrap 5 + global SCSS, and `framer-motion` ^13.

So every recommendation crosses a translation step:
- Tailwind utilities → a class block appended to `styles/style.scss`
- shadcn/Radix component → hand-built, or skipped
- GSAP tween → framer-motion, or hand-rolled (`AppDev/Stats.js`, `Common/ParticleField.js` are the precedents)

The **tier, duration, easing, do/don't and perf notes survive translation** — only the API changes.
GSAP / ScrollTrigger / R3F installs are a **Manager decision**. Presets **#9 (SplitText)** and
**#12 (Flip)** need paid GSAP Club plugins → **unavailable**.

## Also ours, not from a skill
- `brain/animation/LAB.md` — the Motion/3D/UI Kit Lab, this site's own motion language
- `brain/components/REGISTRY.md` — what already exists
- `public/images/seo page inspiration/`, `public/images/app page inspiration/` — reference screenshots already collected
- The live Lab: `http://localhost:3000/lab/` (dev only)

## Standing rule (2026-08-24, user) — external visual references

In addition to the local databases above, **21st.dev** and **dribbble.com** are approved visual-inspiration
sources for every `/ag-ui-search` pass. How to use them:

- **Design/layout only — never copy code.** These sites are for the visual mechanic (composition, hierarchy,
  density, motion feel), not for lifting markup or CSS.
- **Work section by section**, matched against the page's *existing* structure — hero-for-hero,
  pricing-for-pricing, etc. Not a full-page redesign pass.
- **Find more than one candidate per section.** File multiple `Proposed` options so the Manager/user has a
  real choice, not a single take-it-or-leave-it pick.
- **Screenshot the design**, save to `brain/ui-library/inspiration/assets/`, and file a normal entry via
  `_TEMPLATE.md` (source URL + screenshot + why it fits + stack translation, same as any other entry).
- Every entry filed this way must **surface on `/lab/ui-library/`** so it's visible in the live Lab, not
  just in the markdown index.
