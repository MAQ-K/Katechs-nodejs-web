# components/HpNew/ — the new homepage's sections

Every section of the rebuilt homepage lives here, one file per section. The route that
composes them is `pages/hp-new.js` (`http://localhost:3000/hp-new`).

## Why this folder exists separately

The live homepage (`pages/index.js`) is built out of **`components/Common/**`** — eight of its
twelve sections are shared with other pages. Restyling those in place would change the whole
site at once (that is the "runs alone" rule on T-013/T-016 in `brain/MANAGEMENT.md`). So the
new homepage is built here, isolated, and only swapped in when it is finished and approved.

## The contract

Same isolation contract as `components/Sections/`, so nothing we build can break a live page:

1. **One section = one file.** PascalCase, named for what it is: `HeroX.js`, `ServicesGrid.js`.
2. **No `styles/style.scss`.** All styling inside the file via `styled-jsx`. `style.scss` is
   12k+ lines shared by every page and is its own lock zone — we stay out of it entirely.
3. **Prefixed class names.** Every section picks a short unique prefix (`hero-`, `svc-`, …)
   under a shared `hp-` root, e.g. `hp-hero-*`, `hp-svc-*`. Nothing collides.
4. **Inline SVG for icons.** No `bx-*` classes — the solid `bxs-*` glyphs are missing from the
   bundled font anyway (`brain/MANAGEMENT.md` → gotchas).
5. **Content as props with defaults**, so the section renders correctly with zero props. Once
   a section's copy is settled it moves to `data/home-new/data.js` — data-driven is the
   project convention.
6. **RTL first.** The site is Arabic RTL. Use `inset-inline`, `margin-inline`,
   `padding-inline` — never `left`/`right`.
7. **Cairo** for headings (already loaded in `_document.js`). Do not touch the sitewide
   `$heading-font-family`.
8. **Respect `prefers-reduced-motion`** on anything that moves.
9. **Styling a `<Link>` (or any component) needs `:global()`.** styled-jsx adds its scope class
   ONLY to DOM elements it renders itself. A rule written `.my-btn { }` compiles to
   `.my-btn.jsx-hash`, and the `<a>` that `next/link` renders carries only `my-btn` — so the rule
   never matches, silently, and the link falls back to Bootstrap's blue `#0d6efd`. Anchor on the
   scoped parent and wrap the target: `.my-wrap :global(.my-btn) { }`. This shipped unnoticed in
   four components on 2026-09-03.
10. **No backticks inside a `<style jsx>` block** — not even in a CSS comment. A backtick ends the
    template literal and the build fails with a misleading `Expected '}', got '...'`. Broke the
    build three times on 2026-09-03.

## Per-section workflow

Sketch → design → finish. One section at a time, confirmed before moving on:

1. **Sketch** — structure/layout agreed from the drawing in `Homepage/structure-drafts/`,
   built greyscale so we are judging layout and hierarchy, not colour.
2. **Design** — the visual pass, informed by `Homepage/inspirations/` and the standing design
   rule in the root `CLAUDE.md` (ui-library → `ui-ux-pro-max` → `design-taste-frontend`).
3. **Finish** — real Arabic copy, motion, responsive, a11y; then the section is `REVIEW`
   until the user has seen it.

Tracker: `Homepage/README.md`.

## The allowed exceptions to rule 2

**`HeroNav.js`** uses the global `.default-btn` from `styles/style.scss` for the support button. The
user asked for the site's existing button, and reusing the class means it cannot drift from the
other pages and follows any future restyle.

**`AppServices.js`** imports `components/AppDev/AppOrbit.js` and wraps it in `.app-platforms`. The
user asked for "the same as the one on the app dev page", so it renders that component rather than a
copy. AppOrbit is styled entirely from `styles/style.scss` and every rule is nested inside
`.app-platforms`, so the wrapper MUST carry that class or the orbit renders unstyled. `.app-platforms`
is also a section-level rule (navy background, 100px padding) — `.hp-app-orbit-host` cancels that
half.

Those two are the only dependencies on `style.scss` in this folder — keep it that way.
