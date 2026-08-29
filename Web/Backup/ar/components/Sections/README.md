# components/Sections/ — standalone, portable sections

**Any Claude session (or agent) touching this folder: read this file before adding, editing,
or reusing anything in here.**

## What this folder is

A user gives us a reference image of a web section (hero, pricing block, feature grid,
testimonial strip, whatever). We rebuild it as **one single, self-contained file** that:

- has **zero dependency** on this project's `styles/style.scss`, Boxicons/icon fonts, or
  `data/**` files
- can be lifted out of this repo and dropped into **any other Next.js project** and it will
  just work, unchanged
- still renders correctly inside *this* project when imported normally

This is deliberately a different contract than everything else under `components/`. The rest
of the codebase is data-driven and shares the global SCSS system (see the root `CLAUDE.md` and
`brain/MANAGEMENT.md` → Brief). Sections in here are the opposite on purpose: **isolated,
copy-paste-portable building blocks**, built one at a time from a reference image on request.

## Rules for every file in this folder

1. **One section = one file.** Do not split a section's styles or markup into a second file,
   and do not make two sections share a file.
2. **No external CSS.** All styling lives inside the component via `styled-jsx`
   (`<style jsx>{...}</style>`) — it ships with Next.js, so nothing extra to install. Never
   import `styles/style.scss`, a CSS module, or an icon font here.
3. **No `data/**` imports.** Content comes in as props with sensible defaults matching the
   original reference image, so the component renders correctly with zero props.
4. **Self-drawn icons only.** Use inline SVG for any icon/chevron/arrow. Don't reach for
   `bx-*` classes — those depend on the site's bundled icon font and won't exist in another
   project.
5. **Class names must be prefixed and scoped to the file.** Pick a short unique prefix per
   section (e.g. `hbs-*` for `HeroBuildSmarter.js`) so nothing collides if two of these ever
   render on the same page.
6. **File name = the section's identity**, PascalCase, descriptive of what it is, not which
   page it's for (this folder doesn't know or care what page uses it):
   `HeroBuildSmarter.js`, `PricingThreeTier.js`, `FeatureGridIcons.js`, etc.
7. **Props over hardcoding.** Every piece of visible text/link should be a prop with a
   default — that's what makes one file reusable across pages and projects.

## How to build a new one from a reference image

1. Create `components/Sections/<DescriptiveName>.js`.
2. Match the reference image's layout, spacing, type scale, and colors as closely as
   reasonably possible.
3. Register it in the gallery: `pages/lab/sections.js` — import the component and add one
   entry to its `SECTIONS` array (`id`, `title`, `file`, `Component`). Then check it at
   `http://localhost:3000/lab/sections/` with the dev server running. Don't skip this — a
   section that doesn't render isn't done.
4. Add one line for it under **Sections index** below.

## Where to preview them

`npm run dev` → **http://localhost:3000/lab/sections/** — every section in this folder,
rendered full-width, one under another, straight from the real component code (also reachable
from the "Sections" tab in the `/lab/` nav bar). Dev only — 404s in a production build, same as
the rest of `/lab/`.

## How to use one of these in a real page

```jsx
import HeroBuildSmarter from "../components/Sections/HeroBuildSmarter";

<HeroBuildSmarter
  badgeText="..."
  headlineBold="..."
  headlineLight="..."
  subtitle="..."
  ctaText="..."
  ctaHref="/contact"
/>
```

Wiring one into `pages/<route>.js` is still page-work — announce it in `brain/STATE.md` like
any other `pages/<route>.js` edit (that file is the standard collision hot-spot per
`brain/README.md`).

## Sections index

| File | What it is | Notes |
|------|------------|-------|
| `HeroBuildSmarter.js` | Full-bleed hero: pill badge, two-tone headline, single black CTA, thin-stroked arc at the bottom edge. Optional `backgroundImage` prop for a photo/image background (auto-adds a legibility overlay); no subtitle. | Built from a user-supplied reference image, 2026-08-29. Edited same day: arc now reaches the section's actual edges instead of being clipped early, lighter shading, background-image support added, subtitle removed. |

> Add a row every time a new file lands here. Never delete a row for a file that still exists.
