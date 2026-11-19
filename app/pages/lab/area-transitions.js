import React, { useEffect, useRef, useState } from "react";
import LabShell from "../../components/Lab/LabShell";
import { labGuard } from "../../utils/labData";

// Five ways to replace the white gap between /services areas with an actual
// transition. Built to be scrolled through and compared directly, not read
// about — each one is real CSS/markup, not a mockup.
//
// Two colours stand in for any pair of adjacent areas — cyan-leaning and
// navy-leaning, the same family the real $wsv-area-* tokens use — so the seam
// treatment reads clearly regardless of which two real areas it sits between.
//
// Demo 5 revives the "blur when crossing" idea from the original scroll-snap
// pass (useSectionSnap.js's is-jumping class): it did not survive the later
// rewrite into useSmoothScroll.js's push-to-cross mechanic, so it is filed
// here as an option to pick back up, not assumed lost for good.

const A = "#dff9fe"; // stand-in for $wsv-area-1 (cyan-leaning)
const B = "#e2e4e9"; // stand-in for $wsv-area-2 (navy-leaning)

const Area = ({ color, label, tall }) => (
  <div
    className={`at-area${tall ? " is-tall" : ""}`}
    style={{ background: color }}
  >
    <span>{label}</span>
    <style jsx>{`
      .at-area {
        height: 320px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: "Almarai", sans-serif;
        font-weight: 700;
        font-size: 22px;
        color: rgba(10, 31, 68, 0.55);
      }
      .at-area.is-tall {
        height: 420px;
      }
    `}</style>
  </div>
);

// --- 1. Curved seam ---------------------------------------------------------
// Same visual language the site already uses (.wsv-hero-curve, .wsv-nav's
// closing dome): an SVG curve dips from A's colour into B's, meeting with no
// gap at all. Static — the shape itself is the whole effect.
const CurvedSeam = () => (
  <div className="at-demo">
    <Area color={A} label="Area A" />
    <div className="at-curve">
      <svg viewBox="0 0 1200 90" preserveAspectRatio="none">
        <path d={`M0,0 C400,90 800,90 1200,0 L1200,90 L0,90 Z`} fill={B} />
      </svg>
    </div>
    <Area color={B} label="Area B" />
    <style jsx>{`
      .at-demo {
        position: relative;
      }
      .at-curve {
        position: relative;
        height: 90px;
        background: ${A};
        margin-top: -1px;
        line-height: 0;
      }
      .at-curve svg {
        width: 100%;
        height: 100%;
        display: block;
      }
    `}</style>
  </div>
);

// --- 2. Gradient crossfade ---------------------------------------------------
// No shape, no line — a band where A's colour blends directly into B's.
// Reads as continuous ground rather than two blocks meeting.
const GradientCrossfade = () => (
  <div className="at-demo">
    <Area color={A} label="Area A" />
    <div className="at-blend" />
    <Area color={B} label="Area B" />
    <style jsx>{`
      .at-blend {
        height: 140px;
        background: linear-gradient(180deg, ${A} 0%, ${B} 100%);
      }
    `}</style>
  </div>
);

// --- 3. Diagonal wipe --------------------------------------------------------
// A's bottom edge and B's top edge are both cut on the same angle, meeting at
// one slanted line. No gap, a harder edge than the curve — reads as more
// "modern landing page" than the curve's softer, house-established shape.
const DiagonalWipe = () => (
  <div className="at-demo">
    <div className="at-a-clip">
      <Area color={A} label="Area A" tall />
    </div>
    <div className="at-b-clip">
      <Area color={B} label="Area B" tall />
    </div>
    <style jsx>{`
      .at-demo {
        display: flex;
        flex-direction: column;
      }
      .at-a-clip {
        clip-path: polygon(0 0, 100% 0, 100% 82%, 0 100%);
        margin-bottom: -70px;
      }
      .at-b-clip {
        clip-path: polygon(0 18%, 100% 0, 100% 100%, 0 100%);
      }
    `}</style>
  </div>
);

// --- 4. Sticky overlap (stacked cards) --------------------------------------
// The only one of the five with REAL scroll-driven motion, and it needs no JS
// to get it: position:sticky pins Area A while Area B scrolls up and
// physically covers it. Scroll this demo itself to see it — the others are
// static shapes, this one only reads correctly in motion.
const StickyOverlap = () => (
  <div className="at-demo at-sticky-demo">
    <div className="at-sticky-a">
      <Area color={A} label="Area A — stays pinned" tall />
    </div>
    <div className="at-sticky-b">
      <Area color={B} label="Area B — scrolls up and over it" tall />
    </div>
    <style jsx>{`
      .at-sticky-demo {
        position: relative;
      }
      .at-sticky-a {
        position: sticky;
        top: 0;
        z-index: 1;
      }
      .at-sticky-b {
        position: relative;
        z-index: 2;
        border-radius: 28px 28px 0 0;
        overflow: hidden;
        box-shadow: 0 -20px 40px rgba(10, 31, 68, 0.18);
      }
    `}</style>
  </div>
);

// --- 5. Blur-cut -------------------------------------------------------------
// Revives the FPS-turn blur from the original scroll-snap pass. No shape
// change at the seam — a hard colour cut, same as a plain gap would have had —
// but crossing it triggers a brief blur pulse on both sides, which is what
// stood in for the gap's "this is a boundary" cue instead of empty space.
const BlurCut = () => {
  const seamRef = useRef(null);
  const [crossing, setCrossing] = useState(false);

  useEffect(() => {
    const el = seamRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCrossing(true);
          window.clearTimeout(io._t);
          io._t = window.setTimeout(() => setCrossing(false), 420);
        }
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`at-demo at-blur${crossing ? " is-crossing" : ""}`}>
      <Area color={A} label="Area A" tall />
      <div ref={seamRef} className="at-seam-trigger" />
      <Area color={B} label="Area B" tall />
      <style jsx>{`
        .at-blur :global(.at-area) {
          transition: filter 0.16s ease-out;
        }
        .at-blur.is-crossing :global(.at-area) {
          filter: blur(2px);
        }
        .at-seam-trigger {
          height: 1px;
        }
        @media (prefers-reduced-motion: reduce) {
          .at-blur :global(.at-area) {
            transition: none;
            filter: none !important;
          }
        }
      `}</style>
    </div>
  );
};

const OPTIONS = [
  {
    id: "curved",
    title: "1 — Curved seam",
    note: "Same shape language the site already uses (hero curve, navigator's closing dome). Soft, on-brand, static.",
    Demo: CurvedSeam,
  },
  {
    id: "gradient",
    title: "2 — Gradient crossfade",
    note: "No line at all — the two colours blend. Reads as one continuous ground rather than two blocks meeting.",
    Demo: GradientCrossfade,
  },
  {
    id: "diagonal",
    title: "3 — Diagonal wipe",
    note: "A harder, more \"modern landing page\" cut. More energy than the curve, less soft.",
    Demo: DiagonalWipe,
  },
  {
    id: "sticky",
    title: "4 — Sticky overlap (stacked cards)",
    note: "The only one with real motion built in — scroll past it to see Area B physically slide up and over Area A. Most dramatic option; needs the most care against the transition mechanic already driving the page.",
    Demo: StickyOverlap,
  },
  {
    id: "blur",
    title: "5 — Blur-cut (the original FPS idea, revived)",
    note: "Hard colour cut, no shape — but crossing it pulses a brief blur, same cue the very first scroll pass had. Scroll slowly through the middle of this block to trigger it.",
    Demo: BlurCut,
  },
];

const AreaTransitionsLab = () => {
  return (
    <LabShell
      title="Area transition options"
      subtitle="Five ways to replace the white gap between /services areas with an actual transition. Scroll through each — #4 and #5 only make sense in motion."
    >
      {OPTIONS.map(({ id, title, note, Demo }) => (
        <div key={id} className="at-block">
          <div className="at-label">
            <span>{title}</span>
            <p>{note}</p>
          </div>
          <div className="at-frame">
            <Demo />
          </div>
        </div>
      ))}

      <style jsx>{`
        .at-block {
          margin: 0 0 56px;
        }
        .at-label {
          margin-bottom: 12px;
        }
        .at-label span {
          font-weight: 700;
          font-size: 16px;
        }
        .at-label p {
          margin: 4px 0 0;
          font-size: 13px;
          color: var(--lab-dim);
          max-width: 640px;
        }
        .at-frame {
          border: 1px solid var(--lab-line);
          border-radius: 10px;
          /* No overflow:hidden here on purpose — it would become demo #4's
             sticky containing box. Any ancestor with overflow != visible does
             that regardless of whether it ever actually scrolls, and since
             this frame doesn't, position:sticky inside it would just never
             fire — it would sit and render as if it were position:static. None
             of the five demos produce content that needs clipping anyway. */
        }
      `}</style>
    </LabShell>
  );
};

export async function getServerSideProps() {
  if (labGuard()) return { notFound: true };
  return { props: {} };
}

export default AreaTransitionsLab;
