import React from "react";
import Head from "next/head";
import LabShell from "../../components/Lab/LabShell";
import LabCell from "../../components/Lab/LabCell";
import { labGuard } from "../../utils/labData";

import Reveal from "../../components/Common/Reveal";
import Magnetic from "../../components/Common/Magnetic";
import ParticleField from "../../components/Common/ParticleField";
import Tilt3D from "../../components/Emails/Tilt3D";
import BorderBeam from "../../components/Emails/BorderBeam";
import TechMarquee from "../../components/AppDev/TechMarquee";
import AppOrbit from "../../components/AppDev/AppOrbit";
import Stats from "../../components/AppDev/Stats";

import TweenBasics from "../../components/AnimeJs/TweenBasics";
import EasingShowcase from "../../components/AnimeJs/EasingShowcase";
import StaggerGrid from "../../components/AnimeJs/StaggerGrid";
import TimelineSequence from "../../components/AnimeJs/TimelineSequence";
import SvgLineDraw from "../../components/AnimeJs/SvgLineDraw";
import MotionPathDemo from "../../components/AnimeJs/MotionPathDemo";
import DraggableCard from "../../components/AnimeJs/DraggableCard";
import ScrollScrub from "../../components/AnimeJs/ScrollScrub";
import TextSplitReveal from "../../components/AnimeJs/TextSplitReveal";

// Motion lab — every primitive this site owns, running, next to the
// ui-ux-pro-max motion.csv row it corresponds to.
//
// The presets in that CSV are GSAP snippets and GSAP is NOT installed here
// (framer-motion ^13 is). What survives the translation is the tier, the
// duration, the easing and the do/don't — which is why each cell shows them.
//
// Bare mode (?only=<id>) is what the viewport-width iframes load.

const Card = ({ children, tone }) => (
  <div className={`lab-demo-card ${tone || ""}`}>{children}</div>
);

const SPECIMENS = [
  {
    id: "reveal-subtle",
    title: "Scroll reveal — Subtle",
    path: "components/Common/Reveal.js",
    meta: [
      { label: "preset", value: "#4 Scroll Reveal · Subtle" },
      { label: "", value: "300–400ms" },
    ],
    replayable: true,
    note:
      "The site's replacement for AOS data-aos=\"fade-up\". Under reduced motion it renders the final state immediately — never invisible, never mid-transition.",
    render: () => (
      <div className="lab-demo">
        <Reveal y={12} duration={0.35}>
          <Card>عنوان القسم — يظهر عند التمرير</Card>
        </Reveal>
      </div>
    ),
  },
  {
    id: "reveal-stagger",
    title: "Scroll reveal — Standard, staggered",
    path: "components/Common/Reveal.js",
    meta: [
      { label: "preset", value: "#5 / #7 · Standard" },
      { label: "", value: "600ms · stagger 80ms" },
    ],
    replayable: true,
    note: "Stagger is an incrementing delay prop, not a container variant — same result, no extra API.",
    render: () => (
      <div className="lab-demo lab-demo-row">
        {[0, 1, 2, 3].map((i) => (
          <Reveal key={i} delay={i * 0.08}>
            <Card>بطاقة {i + 1}</Card>
          </Reveal>
        ))}
      </div>
    ),
  },
  {
    id: "magnetic",
    title: "Magnetic hover",
    path: "components/Common/Magnetic.js",
    meta: [
      { label: "preset", value: "#3 Hover · Complex" },
      { label: "", value: "spring 260/18" },
    ],
    note:
      "Wraps its child so the real button keeps its semantics and focus ring. The pull is clamped by `radius` so a wide button can't slide across the row.",
    render: () => (
      <div className="lab-demo">
        <Magnetic>
          <button className="default-btn" type="button">
            مرر الماوس هنا
          </button>
        </Magnetic>
      </div>
    ),
  },
  {
    id: "tilt3d",
    title: "3D tilt — cursor driven",
    path: "components/Emails/Tilt3D.js",
    meta: [
      { label: "tier", value: "C · CSS 3D" },
      { label: "cost", value: "0 KB" },
    ],
    note: "CSS perspective transform with a glare sweep. No WebGL, no three.js.",
    render: () => (
      <div className="lab-demo">
        <Tilt3D>
          <Card tone="dark">بطاقة ثلاثية الأبعاد</Card>
        </Tilt3D>
      </div>
    ),
  },
  {
    id: "tilt3d-depth",
    title: "3D tilt — layered depth (preserve3d)",
    path: "components/Emails/Tilt3D.js",
    meta: [
      { label: "tier", value: "C · CSS 3D" },
      { label: "preset", value: "#13 Parallax · Subtle" },
    ],
    note:
      "`preserve3d` puts the children in the same 3D space, so a translateZ layer sits at a real depth and parallaxes against the card. Decorative layers only — never text (motion.csv #13).",
    render: () => (
      <div className="lab-demo">
        <Tilt3D preserve3d max={16}>
          <Card tone="dark">
            <span style={{ transform: "translateZ(48px)", display: "inline-block" }}>
              طبقة أمامية
            </span>
          </Card>
        </Tilt3D>
      </div>
    ),
  },
  {
    id: "borderbeam",
    title: "Border beam",
    path: "components/Emails/BorderBeam.js",
    meta: [{ label: "source", value: "21st.dev → vanilla CSS" }],
    note:
      "One of the six 21st.dev components the Lab assessed. Ported to vanilla CSS — the original needs Tailwind, which this project does not have.",
    render: () => (
      <div className="lab-demo">
        <BorderBeam>
          <Card>باقة مميزة</Card>
        </BorderBeam>
      </div>
    ),
  },
  {
    id: "marquee",
    title: "Infinite marquee",
    path: "components/AppDev/TechMarquee.js",
    meta: [{ label: "tier", value: "C · ambient" }],
    note: "Pauses on hover; edges are masked so items fade instead of clipping.",
    render: () => <TechMarquee />,
  },
  {
    id: "countup",
    title: "Scroll-triggered count-up",
    path: "components/AppDev/Stats.js",
    meta: [
      { label: "preset", value: "#5 Scroll Reveal · Standard" },
      { label: "tier", value: "B — without GSAP" },
    ],
    note:
      "motion.csv's Tier-B counter mechanic, hand-rolled. Precedent for translating a GSAP preset instead of installing GSAP.",
    replayable: true,
    render: () => <Stats />,
  },
  {
    id: "orbit",
    title: "3D orbit (CSS transforms)",
    path: "components/AppDev/AppOrbit.js",
    meta: [{ label: "tier", value: "C · CSS 3D" }],
    heavy: true,
    render: () => <AppOrbit />,
  },
  {
    id: "particles",
    title: "Ambient particle network",
    path: "components/Common/ParticleField.js",
    meta: [
      { label: "tier", value: "C · canvas" },
      { label: "deps", value: "none" },
    ],
    heavy: true,
    note:
      "Hand-rolled canvas. Stops entirely when scrolled off screen and under reduced motion — an always-on rAF loop on a marketing page is a battery bug.",
    render: () => (
      <div className="lab-demo lab-demo-canvas">
        <ParticleField />
      </div>
    ),
  },
  {
    id: "anime-tween",
    title: "anime.js — Core tween",
    path: "components/AnimeJs/TweenBasics.js",
    meta: [
      { label: "source", value: "animejs.com — Animation" },
      { label: "lib", value: "animejs ^4" },
    ],
    replayable: true,
    note:
      "The animate() call every other anime.js specimen here builds on: translate, rotate, scale and a color tween on one element, alternating forever.",
    render: () => <TweenBasics />,
  },
  {
    id: "anime-easings",
    title: "anime.js — Easing curves compared",
    path: "components/AnimeJs/EasingShowcase.js",
    meta: [{ label: "source", value: "animejs.com — Easings" }],
    replayable: true,
    note:
      "Six easings (including a spring) racing the same distance — the fastest way to feel the difference rather than read it off a curve graph.",
    render: () => <EasingShowcase />,
  },
  {
    id: "anime-stagger",
    title: "anime.js — Stagger from center",
    path: "components/AnimeJs/StaggerGrid.js",
    meta: [{ label: "source", value: "animejs.com — Utilities · stagger()" }],
    replayable: true,
    note:
      "stagger() turns one selector into a per-element delay curve — here radiating out from the grid's center instead of a flat left-to-right sweep.",
    render: () => <StaggerGrid />,
  },
  {
    id: "anime-timeline",
    title: "anime.js — Timeline sequencing",
    path: "components/AnimeJs/TimelineSequence.js",
    meta: [{ label: "source", value: "animejs.com — Timeline" }],
    replayable: true,
    note:
      "createTimeline() chains three animate() steps with negative offsets so each one starts slightly before the last finishes, instead of hand-timed setTimeouts.",
    render: () => <TimelineSequence />,
  },
  {
    id: "anime-svg-draw",
    title: "anime.js — SVG line draw",
    path: "components/AnimeJs/SvgLineDraw.js",
    meta: [{ label: "source", value: "animejs.com — SVG · createDrawable()" }],
    replayable: true,
    note:
      "createDrawable() measures the path's real length and drives stroke-dashoffset from it, so the line draws in at a constant speed regardless of how curvy it is.",
    render: () => <SvgLineDraw />,
  },
  {
    id: "anime-motion-path",
    title: "anime.js — Motion path",
    path: "components/AnimeJs/MotionPathDemo.js",
    meta: [{ label: "source", value: "animejs.com — SVG · createMotionPath()" }],
    replayable: true,
    note:
      "createMotionPath() turns an SVG path into translateX/translateY/rotate values, so a plain HTML dot can travel and bank along a curve, not just a straight line.",
    render: () => <MotionPathDemo />,
  },
  {
    id: "anime-draggable",
    title: "anime.js — Draggable with spring release",
    path: "components/AnimeJs/DraggableCard.js",
    meta: [{ label: "source", value: "animejs.com — Draggable" }],
    note:
      "createDraggable() adds pointer-driven dragging plus a spring-based snap back to the container bounds on release — no extra drag library.",
    render: () => <DraggableCard />,
  },
  {
    id: "anime-scroll",
    title: "anime.js — Scroll-scrubbed progress",
    path: "components/AnimeJs/ScrollScrub.js",
    meta: [{ label: "source", value: "animejs.com — Events · onScroll()" }],
    note:
      "onScroll({ sync: true }) links an animation's progress directly to scroll position inside a container, scrubbing forward and backward with the scrollbar.",
    render: () => <ScrollScrub />,
  },
  {
    id: "anime-text-split",
    title: "anime.js — Per-character text reveal",
    path: "components/AnimeJs/TextSplitReveal.js",
    meta: [{ label: "source", value: "animejs.com — Text · split()" }],
    replayable: true,
    note:
      "text.split() breaks a heading into per-character spans (words still wrap naturally), turning a line fade into a per-letter stagger for free.",
    render: () => <TextSplitReveal />,
  },
];

const MotionLab = ({ only, dir, ground }) => {
  if (only) {
    const specimen = SPECIMENS.find((s) => s.id === only);
    if (!specimen) {
      return <p style={{ padding: 24, fontFamily: "sans-serif" }}>Unknown specimen: {only}</p>;
    }
    return (
      <>
        <Head>
          <meta name="robots" content="noindex,nofollow" />
        </Head>
        <div dir={dir} style={ground === "dark" ? { background: "#0c0e11" } : undefined}>
          {specimen.render()}
        </div>
        <style jsx global>{`
          .lab-demo {
            padding: 40px 20px;
            display: flex;
            gap: 14px;
            justify-content: center;
            flex-wrap: wrap;
          }
        `}</style>
      </>
    );
  }

  return (
    <LabShell
      active="Motion"
      title="Motion lab"
      subtitle="Every motion primitive this site owns, running. Each cell names the ui-ux-pro-max motion.csv preset it maps to — those snippets are GSAP, which is not installed here, so what carries over is the tier, duration, easing and do/don't, translated to framer-motion or hand-rolled."
    >
      <div className="lab-grid">
        {SPECIMENS.map((s) => (
          <LabCell
            key={s.id}
            id={s.id}
            title={s.title}
            path={s.path}
            meta={s.meta}
            note={s.note}
            heavy={s.heavy}
            replayable={s.replayable}
            bareHref={`/lab/motion/?only=${s.id}`}
          >
            {s.render()}
          </LabCell>
        ))}
      </div>

      <h2 className="lab-section-title">Not built yet</h2>
      <p className="lab-todo">
        From motion.csv, still missing here: <b>#6</b> scrub + pin scrollytelling and <b>#11</b> overlay-wipe
        page transition (both need a Manager call on GSAP ScrollTrigger), <b>#8</b> `back.out` stagger grid,
        <b>#10</b> fade page transition, <b>#14</b> multi-layer parallax.
        <br />
        <b>#9</b> SplitText and <b>#12</b> Flip need paid GSAP Club plugins — treat them as unavailable.
      </p>

      <style jsx global>{`
        .lab-demo {
          padding: 40px 20px;
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .lab-demo-row {
          gap: 12px;
        }
        .lab-demo-canvas {
          position: relative;
          min-height: 260px;
          background: #06131a;
        }
        .lab-demo-card {
          min-width: 190px;
          padding: 26px 22px;
          border-radius: 16px;
          background: #fff;
          border: 1px solid #e3e6ea;
          box-shadow: 0 26px 46px -30px rgba(12, 12, 14, 0.2);
          font-family: "Cairo", sans-serif;
          font-weight: 700;
          text-align: center;
          color: #14161a;
        }
        .lab-demo-card.dark {
          background: #0a1f44;
          color: #fff;
          border-color: #0a1f44;
        }
        .lab-todo {
          font-size: 13px;
          line-height: 1.8;
          color: var(--lab-dim);
          background: var(--lab-panel);
          border: 1px solid var(--lab-line);
          border-radius: 10px;
          padding: 14px 16px;
        }
      `}</style>
    </LabShell>
  );
};

export async function getServerSideProps({ query }) {
  if (labGuard()) return { notFound: true };

  return {
    props: {
      only: query.only || null,
      dir: query.dir === "ltr" ? "ltr" : "rtl",
      ground: query.ground === "dark" ? "dark" : "light",
    },
  };
}

export default MotionLab;
