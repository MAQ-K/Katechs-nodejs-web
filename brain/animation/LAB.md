# The Lab — Motion / 3D / UI Kit
> The motion language of this site. **Check here before adding any animation, hover, 3D, or shadow.**
> Owner: UI Animator. Source artifact (live, interactive — every demo actually runs):
> https://claude.ai/code/artifact/ebce0bd4-72de-4487-aa0c-43dcab93d7bb

The artifact is the original lab. This file is its **checked-in, offline copy** — the part that survives
without a browser. When you use something from the artifact, write it down here so it stops being remote.
> Status: partially ported (task **T-002**). Sections marked ⏳ still need pulling from the artifact.

---

## Non-negotiables

1. **Reduced motion is required, not optional.** Every animated component must read `useReducedMotion()`
   (or `matchMedia("(prefers-reduced-motion: reduce)")`) and render the **final state** — never invisible,
   never mid-transition. See `components/Common/Reveal.js` for the reference implementation.
2. **No always-on rAF loops.** Canvas/ambient effects stop when scrolled out of view. An always-running
   loop on a marketing page is a battery bug.
3. **Nothing touches the DOM during SSR.** This is the Pages Router with a custom `server.js` — canvas and
   measurement work goes inside `useEffect`.
4. **Wrap, don't replace.** Motion wrappers keep the real `<Link>`/`<button>` inside so semantics and focus
   survive (`Magnetic.js` is the pattern).
5. **RTL-aware.** Directional motion (slide-in from the side) must respect RTL. Prefer vertical motion or
   logical direction over hardcoded left/right.

---

## Tier A — Framer Motion reveals (default choice)
Scroll reveals, staggers, entrance transitions. Already installed (`framer-motion` ^13).
Replaces AOS `data-aos="fade-up"` with spring easing and real stagger.

**Built:** `components/Common/Reveal.js` — props `delay`, `y` (26), `duration` (0.6), `as`, `once`.
```jsx
<Reveal delay={0.08} as="section">…</Reveal>
```
Use for: section entrances, card grids (stagger via incrementing `delay`), headline reveals.

## Tier B — GSAP ScrollTrigger (scroll-driven, pinned, count-ups)
For anything tied to scroll *progress* rather than a one-shot entrance.
**Built:** `components/AppDev/Stats.js` — scroll-triggered count-up (Tier B counter mechanic, done without
pulling GSAP in — check it before adding the dependency).
⏳ Install + wiring notes for this Next.js Pages Router + RTL setup still to be ported from the artifact.

## Tier C — Ambient / 3D
**Built:**
- `components/Common/ParticleField.js` — hand-rolled canvas particle network, no dependency. Props: `count` (46), `color` (`"29, 211, 248"` RGB triplet), `linkDistance` (128). Points drift, link to near neighbours, lean away from the cursor. Stops off-screen and under reduced motion.
- `components/AppDev/AppOrbit.js` — CSS 3D transforms tier, phones placed in 3D space.
- `components/AppDev/Hero.js` — layered-depth parallax against the mockup on card tilt.
- `components/AppDev/TechMarquee.js` — infinite marquee, pauses on hover, edges masked so items fade rather than clip.
- `components/Common/Magnetic.js` — magnetic hover, `strength` (0.35) + clamped `radius` (90) so a wide button doesn't slide across the row.

⏳ Six advanced 3D scenes in raw WebGL/canvas + the React Three Fiber pipeline guide — still in the artifact only.

**Also built, 2026-08-30 — `components/Motion/`, ambient + CSS-3D batch** (all pure CSS, no rAF, reduced-motion
opts out via `@media (prefers-reduced-motion: reduce)`, demoed at `/lab/motion/`):
- `FloatingBlobs.js` — two blurred gradient blobs drifting on offset loops (background layer).
- `GradientAurora.js` — `background-position` animated across an oversized gradient.
- `FloatingIcons.js` — a row of badges bobbing on staggered delays.
- `WaveDivider.js` — a seamless self-scrolling SVG wave section divider.
- `OrbitRing.js` — dots placed by rotation, the ring spun as one element.
- `Cube3D.js` — six real faces in one `preserve-3d` box, spinning on two axes.
- `FlipCard3D.js` — two real faces flipped 180° on Y, hover **and** focus (keyboard-safe).
- `CardStack3D.js` — a deck fanned out on Z/rotate, flattening to a row on hover.
- `OrbitSphere3D.js` — icon badges on a `rotateY` + `translateZ` ring inside one spinning `preserve-3d` scene.
- `ParallaxLayers3D.js` — three depth layers reacting to cursor at different rates (framer-motion springs,
  same mechanic as `Tilt3D`'s `preserve3d` mode, extended to a whole scene instead of one card).

## Tier D — anime.js (real dependency, installed 2026-08-30)
`animejs` ^4.5.0 is now a real npm dependency — a user decision (asked directly, chose "install it" over
hand-rolling the same effects with framer-motion/CSS, the pattern used for GSAP-sourced ideas). Reach for
this tier for anything its API is genuinely the better tool for: SVG line-draw/motion-path, scroll-scrubbed
progress, spring-released dragging, per-character text stagger. For a plain scroll reveal or hover, Tier A
(`Reveal.js`/`Magnetic.js`) is still the default — don't reach for a 4th animation engine on this site for
something Tier A already does.

**Built**, all in `components/AnimeJs/`, demoed at `/lab/motion/`:
- `TweenBasics.js` — core `animate()`: translate/rotate/scale/color tween.
- `EasingShowcase.js` — six easings (incl. a spring) racing side by side.
- `StaggerGrid.js` — `stagger()` radiating from a grid's center.
- `TimelineSequence.js` — `createTimeline()` chaining three steps with negative offsets.
- `SvgLineDraw.js` — `svg.createDrawable()`, length-aware stroke draw-in.
- `MotionPathDemo.js` — `svg.createMotionPath()`, an HTML element banking along an SVG curve.
- `DraggableCard.js` — `createDraggable()` with a spring release back into bounds.
- `ScrollScrub.js` — `onScroll({ sync: true })`, progress scrubs with the scrollbar.
- `TextSplitReveal.js` — `text.split()`, per-character stagger-in.

All follow the same non-negotiables as every other tier: `useEffect`-only DOM access (SSR-safe), the
returned animation instance is `.pause()`d on unmount, and RTL is respected (drag/scroll demos don't assume
a fixed left/right).

---

## UI Kit — the shadow / surface recipe

The lab's signature is a **soft emboss: a layered box-shadow, not a single flat blur.**
In this codebase the working shapes are long, low-opacity, heavily negative-spread shadows:
```scss
box-shadow: 0 40px 70px -40px rgba(12, 12, 14, 0.25);   // section card / banner
box-shadow: 0 26px 46px -30px rgba(12, 12, 14, 0.2);    // card hover lift
box-shadow: 0 10px 18px -10px rgba(12, 12, 14, 0.4);    // small control press
box-shadow: 0 0 0 3px rgba(29, 211, 248, 0.18);         // focus / active ring ($main-color cyan)
```
Hover transitions: `transform .25s ease, border-color .25s ease, box-shadow .25s ease`
Snappy controls: `transform .18s cubic-bezier(0.22, 1, 0.36, 1)`

**Radius:** the lab default is 40px, but this site's reference images won: **16px** for hero/media cards,
**5px** for option cards, **8px** for icon tiles (and icon tiles get **no** shadow). Ask before deviating.
⏳ Full 4-layer emboss recipe + button/badge/typography patterns to be ported verbatim from the artifact.

---

## 21st.dev / shadcn verdicts

**This project has no Tailwind and no shadcn.** The lab assessed six 21st.dev components and ported them to
vanilla CSS. Read the verdicts before reusing any 21st.dev/shadcn snippet — most need a rewrite, not a paste.
Known verdict in use: the **border beam** was rejected/adapted for `components/AppDev/Pricing.js` (see its header comment).
⏳ Remaining five verdicts to be ported.

---

## Preset index — `ui-ux-pro-max/data/motion.csv` → what we actually use

16 presets, 6 categories, 3 intensity tiers. **The snippets are GSAP; GSAP is not installed.** Translate to
framer-motion or hand-roll. The row's tier / duration / easing / do / don't / perf all still apply.
Full source table: `~/.claude/skills/ui-ux-pro-max/data/motion.csv` (see `brain/ui-library/SOURCES.md`).

| # | Category · Tier | Timing / easing | Our equivalent | Ships in |
|---|---|---|---|---|
| 1 | Hover micro · Subtle | 150–200ms `power1.out` | CSS transition | site-wide buttons |
| 2 | Hover micro · Standard | 200–300ms `power2.out` | CSS `transform .25s ease` + Lab shadow | card grids |
| 3 | Hover micro · Complex | 300–500ms `elastic.out(1,0.4)` | `Common/Magnetic.js` (framer spring) | Magnetic |
| 4 | Scroll reveal · Subtle | 300–400ms `power1.out` | `<Reveal y={12} duration={0.35}>` | Reveal |
| 5 | Scroll reveal · Standard | 400–600ms `power2.out`, stagger .08 | `<Reveal>` + incrementing `delay` | Reveal |
| 6 | Scroll reveal · Complex | scrub + pin | **not built** — needs ScrollTrigger → Manager call | — |
| 7 | Stagger list · Subtle | 250–350ms, stagger .03 | `<Reveal>` delay ladder | card grids |
| 8 | Stagger list · Standard | 300–450ms `back.out(1.4)` | framer `variants` + `staggerChildren` | **not built** |
| 9 | Stagger list · Complex | SplitText chars | ❌ **paid plugin — unavailable** | — |
| 10 | Page transition · Subtle | 200–300ms fade | framer `AnimatePresence` on route change | **not built** |
| 11 | Page transition · Standard | 400–600ms overlay wipe | **not built** | — |
| 12 | Page transition · Complex | GSAP Flip | ❌ **paid plugin — unavailable** | — |
| 13 | Parallax · Subtle | scrub, `yPercent 10` | framer `useScroll` + `useTransform` | `AppDev/Hero.js` (layered depth) |
| 14 | Parallax · Standard | multi-layer scrub | same, per layer | **not built** |
| 15 | Loading · Subtle | 1200–1600ms shimmer loop | CSS `@keyframes` | pending/skeleton bars |
| 16 | Loading · Standard | 800–1200ms dot loop | CSS `@keyframes` | — |

Rule #13/#14 carry a hard constraint worth repeating: **parallax goes on decorative layers only, never on text.**
Rule #15/#16: kill the loop the moment real content mounts — no orphaned infinite tweens.

## See it running
`npm run dev` → **http://localhost:3000/lab/motion/** — every primitive above, live, with a
reduced-motion toggle, an RTL switch and viewport widths. Dev only; `/lab/` 404s in production.

## Adding to the lab
New preset → `brain/animation/presets/<name>.md` with: what it does, when to use it, the code, the
reduced-motion fallback, and where it already ships. Then link it from this file and broadcast in `STATE.md`.
