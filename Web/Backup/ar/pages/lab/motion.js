import React from "react";
import Head from "next/head";
import { motion, useTransform } from "framer-motion";
import LabShell from "../../components/Lab/LabShell";
import LabCell from "../../components/Lab/LabCell";
import LabIndex, { slug } from "../../components/Lab/LabIndex";
import { labGuard } from "../../utils/labData";

import Reveal from "../../components/Common/Reveal";
import Magnetic from "../../components/Common/Magnetic";
import ParticleField from "../../components/Common/ParticleField";
import Tilt3D from "../../components/Emails/Tilt3D";
import BorderBeam from "../../components/Emails/BorderBeam";
import TechMarquee from "../../components/AppDev/TechMarquee";
import AppOrbit from "../../components/AppDev/AppOrbit";

import TextReveal from "../../components/Common/motion/TextReveal";
import StaggerGrid from "../../components/Common/motion/StaggerGrid";
import ScrollProgress from "../../components/Common/motion/ScrollProgress";
import Parallax from "../../components/Common/motion/Parallax";
import Spotlight from "../../components/Common/motion/Spotlight";
import Ripple from "../../components/Common/motion/Ripple";
import ScrollScrub from "../../components/Common/motion/ScrollScrub";
import CountUp from "../../components/Common/motion/CountUp";
import Waves from "../../components/Common/motion/Waves";
import FlipCard from "../../components/Common/motion/FlipCard";
import Orbit3D from "../../components/Common/motion/Orbit3D";
import Cursor from "../../components/Common/motion/Cursor";

// Motion lab — every motion primitive this site owns, running, grouped the same
// way the component gallery is grouped so the two tabs read as one tool.
//
// Each cell names the ui-ux-pro-max motion.csv preset it maps to. Those snippets
// are GSAP and GSAP is NOT installed here (framer-motion ^13 is) — what carries
// over is the tier, duration, easing and do/don't, not the API.

const Card = ({ children, tone, tall }) => (
  <div className={`lab-demo-card ${tone || ""} ${tall ? "tall" : ""}`}>{children}</div>
);

const Icon = ({ name }) => <i className={`bx ${name}`} style={{ fontSize: 22, color: "#0a1f44" }} />;

const GROUPS = [
  {
    group: "Reveals & text",
    blurb: "Entrances. What a section does the first time it comes into view.",
    items: [
      {
        id: "reveal-subtle",
        title: "Scroll reveal — Subtle",
        path: "components/Common/Reveal.js",
        meta: [{ label: "preset", value: "#4 · Subtle" }, { label: "", value: "300–400ms" }],
        replayable: true,
        note:
          'The site\'s replacement for AOS data-aos="fade-up". Under reduced motion it renders the final state immediately — never invisible, never mid-transition.',
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
        meta: [{ label: "preset", value: "#5 / #7 · Standard" }, { label: "", value: "600ms · 80ms" }],
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
        id: "text-reveal",
        title: "Word-by-word headline reveal",
        path: "components/Common/motion/TextReveal.js",
        meta: [{ label: "preset", value: "#9 · Complex" }, { label: "", value: "no paid plugin" }],
        replayable: true,
        note:
          "GSAP's version of #9 needs the paid SplitText plugin. Splits on words, never characters — Arabic is cursive and per-character splitting breaks the joining forms.",
        render: () => (
          <div className="lab-demo">
            <TextReveal
              text="نبني مواقع تحمّل بسرعة وتبيع أكثر"
              className="lab-demo-headline"
              once={false}
            />
          </div>
        ),
      },
      {
        id: "stagger-grid",
        title: "Bento / grid entrance with overshoot",
        path: "components/Common/motion/StaggerGrid.js",
        meta: [{ label: "preset", value: "#8 · Standard" }, { label: "", value: "spring 320/18" }],
        replayable: true,
        note: "The preset asks for back.out(1.4). A low-damping spring gives the same overshoot without an easing plugin.",
        render: () => (
          <div className="lab-demo">
            <StaggerGrid className="lab-demo-grid">
              {["الاستضافة", "التصميم", "الحماية", "البريد", "السيو", "الدعم"].map((t) => (
                <StaggerGrid.Item key={t}>
                  <Card>{t}</Card>
                </StaggerGrid.Item>
              ))}
            </StaggerGrid>
          </div>
        ),
      },
      {
        id: "countup",
        title: "Scroll-triggered count-up",
        path: "components/Common/motion/CountUp.js",
        meta: [{ label: "tier", value: "B — without GSAP" }],
        replayable: true,
        note:
          "Generalised out of AppDev/Stats.js. Latin digits with tabular-nums: every other number on this site is Latin, and tabular stops the row jittering as digit widths change.",
        render: () => (
          <div className="lab-demo lab-demo-row">
            <Card>
              <CountUp to={99} suffix="%" className="lab-demo-num" />
              <small>سرعة الموقع</small>
            </Card>
            <Card>
              <CountUp to={12480} className="lab-demo-num" />
              <small>عميل</small>
            </Card>
            <Card>
              <CountUp to={4.9} decimals={1} className="lab-demo-num" />
              <small>التقييم</small>
            </Card>
          </div>
        ),
      },
    ],
  },
  {
    group: "Hover & cursor",
    blurb: "What the page does under the pointer. Desktop-only by nature — each of these has a touch story.",
    items: [
      {
        id: "magnetic",
        title: "Magnetic hover",
        path: "components/Common/Magnetic.js",
        meta: [{ label: "preset", value: "#3 · Complex" }, { label: "", value: "spring 260/18" }],
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
        id: "spotlight",
        title: "Cursor spotlight",
        path: "components/Common/motion/Spotlight.js",
        meta: [{ label: "cost", value: "0 re-renders" }],
        note:
          "The glow is a radial-gradient built from motion values, so mousemove never re-renders React. Touch devices get nothing, which is correct — there is no pointer to follow.",
        render: () => (
          <div className="lab-demo">
            <Spotlight className="lab-demo-spot">
              <Card tone="dark" tall>
                مرر فوق البطاقة
              </Card>
            </Spotlight>
          </div>
        ),
      },
      {
        id: "ripple",
        title: "Click ripple",
        path: "components/Common/motion/Ripple.js",
        note:
          "Wraps rather than replaces, same contract as Magnetic. Ripples are keyed and self-removing — without cleanup a clicky page leaks DOM nodes all session.",
        render: () => (
          <div className="lab-demo">
            <Ripple>
              <button className="default-btn" type="button">
                اضغط هنا
              </button>
            </Ripple>
          </div>
        ),
      },
      {
        id: "cursor",
        title: "Custom trailing cursor",
        path: "components/Common/motion/Cursor.js",
        meta: [{ label: "guard", value: "pointer:fine only" }],
        note:
          "Scoped to its container, never the whole document. Off on touch and under reduced motion. Grows over anything marked data-cursor=\"grow\" — hover the dark card.",
        render: () => (
          <Cursor className="lab-demo">
            <Card>منطقة عادية</Card>
            <Card tone="dark" data-cursor="grow">
              <span data-cursor="grow">عنصر تفاعلي</span>
            </Card>
          </Cursor>
        ),
      },
      {
        id: "flipcard",
        title: "3D flip card",
        path: "components/Common/motion/FlipCard.js",
        meta: [{ label: "tier", value: "C · CSS 3D" }],
        note:
          "Flips on hover AND on click/Enter/Space — a hover-only flip card is dead on a phone, which is most of this site's traffic. Real button, aria-pressed, one face readable at a time.",
        render: () => (
          <div className="lab-demo">
            <div style={{ width: 260 }}>
              <FlipCard
                height={190}
                front={<Card tall>الباقة الأساسية</Card>}
                back={
                  <Card tone="dark" tall>
                    ٩٩ ر.س / شهرياً
                  </Card>
                }
              />
            </div>
          </div>
        ),
      },
    ],
  },
  {
    group: "Scroll & parallax",
    blurb: "Motion tied to scroll position rather than a one-shot entrance.",
    items: [
      {
        id: "scroll-progress",
        title: "Reading progress bar",
        path: "components/Common/motion/ScrollProgress.js",
        meta: [{ label: "RTL", value: "fills from the right" }],
        note:
          "A bar that fills left-to-right on an Arabic page reads backwards, so transformOrigin follows the document direction. Scroll inside the box to see it move.",
        render: () => (
          <div className="lab-demo-scrollbox">
            <ScrollProgressDemo />
          </div>
        ),
      },
      {
        id: "parallax",
        title: "Layered parallax",
        path: "components/Common/motion/Parallax.js",
        meta: [{ label: "preset", value: "#13 / #14" }],
        note:
          "Decorative layers only — never text. The spring matters: raw scroll mapping judders on trackpads because scroll events aren't frame-aligned. Scroll the page to see the layers separate.",
        render: () => (
          <div className="lab-demo lab-demo-row">
            <Parallax speed={0.18}>
              <Card>طبقة بطيئة</Card>
            </Parallax>
            <Parallax speed={-0.12}>
              <Card tone="dark">طبقة معاكسة</Card>
            </Parallax>
          </div>
        ),
      },
      {
        id: "scroll-scrub",
        title: "Pinned scroll-scrub section",
        path: "components/Common/motion/ScrollScrub.js",
        meta: [{ label: "preset", value: "#6 · Complex" }, { label: "", value: "no ScrollTrigger" }],
        heavy: true,
        note:
          "motion.csv #6 is the pin + scrub preset that normally needs GSAP ScrollTrigger. position:sticky plus framer's scroll progress gets there for free. Expand the cell and scroll.",
        render: () => <ScrollScrubDemo />,
      },
    ],
  },
  {
    group: "3D",
    blurb: "Real depth, all of it CSS transforms. No WebGL, no three.js, no React Three Fiber.",
    items: [
      {
        id: "tilt3d",
        title: "3D tilt — cursor driven",
        path: "components/Emails/Tilt3D.js",
        meta: [{ label: "tier", value: "C · CSS 3D" }, { label: "cost", value: "0 KB" }],
        note: "CSS perspective transform with a glare sweep.",
        render: () => (
          <div className="lab-demo">
            <Tilt3D>
              <Card tone="dark" tall>
                بطاقة ثلاثية الأبعاد
              </Card>
            </Tilt3D>
          </div>
        ),
      },
      {
        id: "tilt3d-depth",
        title: "3D tilt — layered depth (preserve3d)",
        path: "components/Emails/Tilt3D.js",
        meta: [{ label: "preset", value: "#13 · Subtle" }],
        note:
          "`preserve3d` puts children in the same 3D space, so a translateZ layer sits at a real depth and parallaxes against the card.",
        render: () => (
          <div className="lab-demo">
            <Tilt3D preserve3d max={16}>
              <Card tone="dark" tall>
                <span style={{ transform: "translateZ(48px)", display: "inline-block" }}>طبقة أمامية</span>
              </Card>
            </Tilt3D>
          </div>
        ),
      },
      {
        id: "orbit3d",
        title: "3D orbit ring (generic)",
        path: "components/Common/motion/Orbit3D.js",
        meta: [{ label: "tier", value: "C · CSS 3D" }],
        heavy: true,
        note:
          "Generalised from AppDev/AppOrbit.js. Items counter-rotate against the ring so they stay upright instead of tumbling — that counter-spin is the whole trick.",
        render: () => (
          <Orbit3D
            items={[
              <Icon key="1" name="bx-server" />,
              <Icon key="2" name="bx-shield" />,
              <Icon key="3" name="bx-envelope" />,
              <Icon key="4" name="bx-search-alt" />,
              <Icon key="5" name="bx-mobile-alt" />,
              <Icon key="6" name="bx-cloud" />,
            ]}
          />
        ),
      },
      {
        id: "orbit-app",
        title: "App orbit (page-specific)",
        path: "components/AppDev/AppOrbit.js",
        meta: [{ label: "tier", value: "C · CSS 3D" }],
        heavy: true,
        render: () => <AppOrbit />,
      },
    ],
  },
  {
    group: "Ambient & surfaces",
    blurb: "Background life. Everything here stops when it scrolls off screen — an always-on rAF loop is a battery bug.",
    items: [
      {
        id: "waves",
        title: "Canvas waves",
        path: "components/Common/motion/Waves.js",
        meta: [{ label: "deps", value: "none" }, { label: "DPR", value: "capped at 2" }],
        heavy: true,
        note:
          "Under reduced motion it draws one static frame rather than nothing, so the section still looks designed. DPR is capped — uncapped on a 4K display triples the fill area for no visible gain.",
        render: () => (
          <div className="lab-demo lab-demo-canvas">
            <Waves />
          </div>
        ),
      },
      {
        id: "particles",
        title: "Ambient particle network",
        path: "components/Common/ParticleField.js",
        meta: [{ label: "tier", value: "C · canvas" }, { label: "deps", value: "none" }],
        heavy: true,
        note: "Hand-rolled canvas. Stops entirely off screen and under reduced motion.",
        render: () => (
          <div className="lab-demo lab-demo-canvas">
            <ParticleField />
          </div>
        ),
      },
      {
        id: "marquee",
        title: "Infinite marquee",
        path: "components/AppDev/TechMarquee.js",
        meta: [{ label: "tier", value: "C · ambient" }],
        note: "Pauses on hover; edges masked so items fade instead of clipping.",
        render: () => <TechMarquee />,
      },
      {
        id: "borderbeam",
        title: "Border beam",
        path: "components/Emails/BorderBeam.js",
        meta: [{ label: "source", value: "21st.dev → vanilla CSS" }],
        note:
          "One of the six 21st.dev components the Lab assessed. Ported to vanilla CSS — the original needs Tailwind, which this project doesn't have.",
        render: () => (
          <div className="lab-demo">
            <BorderBeam>
              <Card>باقة مميزة</Card>
            </BorderBeam>
          </div>
        ),
      },
    ],
  },
];

// --- demos that need their own state ------------------------------------

const ScrollProgressDemo = () => {
  const ref = React.useRef(null);
  return (
    <div style={{ position: "relative" }}>
      <ScrollProgress containerRef={ref} />
      <div ref={ref} className="lab-demo-scroller">
        {Array.from({ length: 12 }).map((_, i) => (
          <p key={i}>سطر رقم {i + 1} — مرّر داخل هذا الصندوق لرؤية الشريط يتقدم من اليمين.</p>
        ))}
      </div>
    </div>
  );
};

const ScrollScrubDemo = () => (
  <ScrollScrub height={2}>
    {(progress, isStatic) =>
      isStatic ? (
        <Card tone="dark" tall>
          الحالة النهائية
        </Card>
      ) : (
        <ScrubScene progress={progress} />
      )
    }
  </ScrollScrub>
);

const ScrubScene = ({ progress }) => {
  const scale = useTransform(progress, [0, 1], [0.7, 1.15]);
  const rotate = useTransform(progress, [0, 1], [-8, 8]);
  const opacity = useTransform(progress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);
  return (
    <motion.div style={{ scale, rotate, opacity }}>
      <Card tone="dark" tall>
        يتحرك مع التمرير
      </Card>
    </motion.div>
  );
};

// ------------------------------------------------------------------------

const findSpecimen = (id) => {
  for (const g of GROUPS) {
    const hit = g.items.find((s) => s.id === id);
    if (hit) return hit;
  }
  return null;
};

const MotionLab = ({ only, dir, ground }) => {
  if (only) {
    const specimen = findSpecimen(only);
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

  const total = GROUPS.reduce((n, g) => n + g.items.length, 0);

  return (
    <LabShell
      active="Motion"
      title="Motion lab"
      subtitle={`${total} motion primitives, running. Each names the ui-ux-pro-max motion.csv preset it maps to — those snippets are GSAP, which is not installed here, so what carries over is the tier, duration, easing and do/don't, translated to framer-motion or hand-rolled.`}
    >
      <LabIndex groups={GROUPS} />

      {GROUPS.map((group) => (
        <div key={group.group}>
          <h2 className="lab-section-title lab-anchor" id={slug(group.group)}>
            {group.group}
          </h2>
          {group.blurb ? <p className="lab-group-blurb">{group.blurb}</p> : null}

          <div className="lab-grid">
            {group.items.map((s) => (
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
        </div>
      ))}

      <h2 className="lab-section-title">Still missing</h2>
      <p className="lab-todo">
        From motion.csv: <b>#10 / #11</b> page transitions (need an <code>_app.js</code> change — Manager
        call), and <b>#15 / #16</b> loading and skeleton states, which are better built against a real
        loading surface than demoed here.
        <br />
        <b>#9 SplitText</b> and <b>#12 Flip</b> need paid GSAP Club plugins — <code>TextReveal</code> covers
        #9's effect without one; #12 has no free equivalent.
      </p>

      <style jsx global>{`
        .lab-demo {
          padding: 40px 20px;
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
          align-items: center;
        }
        .lab-demo-row {
          gap: 12px;
        }
        .lab-demo-canvas {
          position: relative;
          min-height: 260px;
          background: #06131a;
        }
        .lab-demo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 12px;
          width: 100%;
          max-width: 640px;
        }
        .lab-demo-card {
          min-width: 170px;
          padding: 22px 20px;
          border-radius: 16px;
          background: #fff;
          border: 1px solid #e3e6ea;
          box-shadow: 0 26px 46px -30px rgba(12, 12, 14, 0.2);
          font-family: "Cairo", sans-serif;
          font-weight: 700;
          text-align: center;
          color: #14161a;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }
        .lab-demo-card.tall {
          min-height: 170px;
          width: 100%;
        }
        .lab-demo-card.dark {
          background: #0a1f44;
          color: #fff;
          border-color: #0a1f44;
        }
        .lab-demo-card small {
          font-weight: 400;
          font-size: 12px;
          opacity: 0.7;
        }
        .lab-demo-num {
          font-size: 30px;
          line-height: 1.1;
        }
        .lab-demo-headline {
          font-family: "Cairo", sans-serif;
          font-size: 30px;
          font-weight: 800;
          text-align: center;
          max-width: 620px;
          margin: 0;
          color: #0a1f44;
        }
        .lab-demo-spot {
          width: 320px;
          border-radius: 16px;
        }
        .lab-demo-scrollbox {
          padding: 24px;
          width: 100%;
        }
        .lab-demo-scroller {
          height: 220px;
          overflow: auto;
          border: 1px solid #e3e6ea;
          border-radius: 12px;
          padding: 26px 18px 18px;
          font-family: "Cairo", sans-serif;
          line-height: 2;
        }
        .lab-group-blurb {
          margin: -4px 0 14px;
          font-size: 12.5px;
          line-height: 1.6;
          color: var(--lab-dim);
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
