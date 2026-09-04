import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
  animate,
} from "framer-motion";
import { appServices } from "../../data/home-new/data";
import phoneImg from "../../public/images/mobile-app/app-mockup-phone.png";

// App services — talk on the left, a 3D stage on the right.
//
// ---- what the stage is, and why ----
// The real KATECHS render is the FRONT FACE of an actual 3D slab, with CSS side
// rails giving it thickness and a drawn glass back. So it turns a full 360:
// front, edge-on rails at 90deg, back, round again. A ring of CSS-drawn phones
// orbits behind it.
//
// The earlier version only tilted the flat photo within a range, because a photo
// has its perspective baked in and side-on it reads as a paper sliver. Giving it
// real geometry is what fixes that — the photo is now one face of an object
// rather than the object itself.
//
// The front image is app-mockup-phone.png, cropped from app-mockup.png to the
// phone alone (source bbox x213-819, y189-1353, found by scanning the alpha
// channel). The original has floating Android and iOS badges either side; on a
// rotating slab those would swing around with it, so they are cropped out.
//
// ONE gesture drives both. The same drag turns the ring (free, with an inertia
// throw) and the slab (at 0.7 of the ring rate), so the stage reads as a single
// object rather than two things that happen to move.
//
// Mechanics — scroll-linked base rotation, hand-tracked velocity, inertia throw
// on release — are lifted from AppOrbit.js. Read that file before changing them;
// its comments explain why velocity is measured by hand and why dragging is
// added to scroll rather than replacing it.

const STEP = 360 / appServices.orbit.length;
const RADIUS = 240;
const DRAG_SPEED = 0.35; // degrees of ring rotation per pixel dragged

// The render is the FRONT FACE of a real 3D slab (CSS rails for thickness, a
// drawn back), so it turns a full 360 rather than tilting within a range.
//
// Resting angle: the photo was shot at roughly a 3/4 view, so its perspective is
// baked in. Parking the slab at -20deg makes the slab geometry agree
// with the perspective already in the pixels — at 0deg the phone would look
// turned even though the geometry says it is face-on.
const PHONE_REST = -20;
// Slower than the ring behind it, so the two do not look glued together.
const PHONE_RATIO = 0.7;

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const AppServices = ({ content = appServices }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [dragging, setDragging] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.5,
  });

  // Just over one turn across the section: every drawn phone comes around, but
  // it never reads as spinning.
  const scrollRotate = useTransform(smooth, [0, 1], [-30, 330]);
  const restingRotate = useMotionValue(-30);
  const base = reduced ? restingRotate : scrollRotate;

  const dragRotate = useMotionValue(0);
  const ringRotate = useTransform([base, dragRotate], ([b, d]) => b + d);

  // The slab answers to the DRAG only, not to scroll: a phone rotating on its
  // own as the page moved would look like it was drifting, where the ring behind
  // it is clearly a carousel and reads correctly either way.
  // Unclamped — it is a real object now, so it can go all the way round.
  const phoneRotateY = useTransform(
    dragRotate,
    (d) => PHONE_REST + d * PHONE_RATIO
  );
  const phoneRotateX = useMotionValue(0);

  // Velocity tracked by hand so the throw matches the last few milliseconds of
  // the gesture rather than the whole drag — see AppOrbit.js.
  const gesture = useRef({ x: 0, time: 0, velocity: 0, id: null });

  const onPointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    dragRotate.stop();
    gesture.current = {
      x: e.clientX,
      time: e.timeStamp,
      velocity: 0,
      id: e.pointerId,
    };
    setDragging(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e) => {
    // Before any drag starts, a hovering pointer leans the render slightly on
    // its X axis. Small, and only vertical, so it cannot fight the drag.
    if (gesture.current.id === null && !reduced) {
      const box = e.currentTarget.getBoundingClientRect();
      const dy = (e.clientY - (box.top + box.height / 2)) / (box.height / 2);
      phoneRotateX.set(clamp(-dy * 5, -5, 5));
      return;
    }
    if (gesture.current.id !== e.pointerId) return;

    const dx = e.clientX - gesture.current.x;
    const dt = e.timeStamp - gesture.current.time;

    dragRotate.set(dragRotate.get() + dx * DRAG_SPEED);

    if (dt > 0) {
      // px/ms -> deg/s, which is what the inertia animation wants.
      gesture.current.velocity = (dx / dt) * DRAG_SPEED * 1000;
    }
    gesture.current.x = e.clientX;
    gesture.current.time = e.timeStamp;
  };

  const endDrag = (e) => {
    if (gesture.current.id !== e.pointerId) return;
    const { velocity } = gesture.current;
    gesture.current.id = null;
    setDragging(false);
    e.currentTarget.releasePointerCapture?.(e.pointerId);

    if (!reduced && Math.abs(velocity) > 20) {
      animate(dragRotate, dragRotate.get(), {
        type: "inertia",
        velocity,
        power: 0.6,
        timeConstant: 420,
      });
    }
  };

  const onPointerLeave = () => {
    phoneRotateX.set(0);
  };

  return (
    <div className="hp-app" ref={ref}>
      <div className="hp-app-inner">
        <div className="hp-app-text">
          <span className="hp-app-eyebrow">{content.eyebrow}</span>
          <h2>{content.heading}</h2>
          <p>{content.body}</p>

          <ul className="hp-app-list">
            {content.points.map((point) => (
              <li key={point}>
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="hp-app-cta">
            <Link href={content.cta.href} className="hp-app-btn">
              {content.cta.label}
            </Link>
            <Link href={content.secondary.href} className="hp-app-btn is-ghost">
              {content.secondary.label}
            </Link>
          </div>
        </div>

        {/* The whole stage is decorative: the drawn phones repeat capability
            names already listed above, and the render is a product shot. A
            screen reader gets the text column and skips all of this. */}
        <div
          className={"hp-app-stage" + (dragging ? " is-dragging" : "")}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={onPointerLeave}
          aria-hidden="true"
        >
          <motion.div className="hp-app-ring" style={{ rotateY: ringRotate }}>
            {content.orbit.map((s, i) => (
              <div
                className="hp-app-orbit-phone"
                key={s.label}
                style={{
                  transform:
                    "rotateY(" + i * STEP + "deg) translateZ(" + RADIUS + "px)",
                }}
              >
                <span className="hp-app-orbit-notch" />
                <span className="hp-app-orbit-screen">
                  <span className="hp-app-orbit-icon">
                    <i className={s.icon} />
                  </span>
                  <span className="hp-app-orbit-line w80" />
                  <span className="hp-app-orbit-line w55" />
                </span>
                <span className="hp-app-orbit-label">{s.label}</span>
              </div>
            ))}
          </motion.div>

          <div className="hp-app-render">
            {/* Ground shadow. A SIBLING of the slab, never a filter on it:
                filter creates a containing block and forces a preserve-3d
                subtree to flatten, which would collapse the whole phone back
                into a flat picture the moment it was applied. */}
            <span className="hp-app-shadow" />

            <motion.div
              className="hp-app-slab"
              style={{ rotateY: phoneRotateY, rotateX: phoneRotateX }}
            >
              <span className="hp-app-face is-front">
                <Image
                  src={phoneImg}
                  alt=""
                  width={606}
                  height={1164}
                  priority={false}
                />
              </span>

              {/* The back: dark glass and a camera module. Drawn, because there
                  is no photograph of this phone from behind. */}
              <span className="hp-app-face is-back">
                <span className="hp-app-cam">
                  <span />
                  <span />
                  <span />
                </span>
              </span>

              {/* The two long edges. These are what you see at 90deg, and they
                  are the reason the slab reads as an object with thickness
                  instead of a sheet of paper. */}
              <span className="hp-app-rail is-start" />
              <span className="hp-app-rail is-end" />
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hp-app {
          width: 100%;
          padding-block: clamp(56px, 8vw, 104px);
          background: #0a1628;
          overflow: hidden;
        }
        .hp-app-inner {
          width: min(1320px, 100% - 48px);
          margin-inline: auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: clamp(32px, 5vw, 72px);
        }
        /* Talk LEFT, stage RIGHT, matching the draft. The DOM keeps the heading
           first; only the visual columns swap. Same approach as
           WebServicesBrief.js. */
        .hp-app-text {
          order: 2;
        }
        .hp-app-stage {
          order: 1;
        }
        .hp-app-eyebrow {
          display: inline-block;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.62);
          margin-bottom: 12px;
        }
        .hp-app-text h2 {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: clamp(24px, 3.2vw, 40px);
          font-weight: 700;
          line-height: 1.35;
          color: #fff;
          margin: 0 0 16px;
        }
        .hp-app-text p {
          font-size: clamp(15px, 1.5vw, 17px);
          line-height: 2;
          color: rgba(255, 255, 255, 0.72);
          margin: 0 0 24px;
        }
        .hp-app-list {
          list-style: none;
          margin: 0 0 32px;
          padding: 0;
          display: grid;
          gap: 12px;
        }
        .hp-app-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.86);
        }
        .hp-app-list svg {
          flex: 0 0 auto;
          margin-top: 5px;
          color: #fff;
        }
        .hp-app-cta {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        /* :global() because next/link renders these anchors — styled-jsx only
           scopes elements it renders itself. See components/HpNew/README.md #9. */
        .hp-app-cta :global(.hp-app-btn) {
          display: inline-block;
          padding: 13px 30px;
          border-radius: 10px;
          border: 1px solid #fff;
          background: #fff;
          color: #0a1628;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          transition: opacity 0.25s ease;
        }
        .hp-app-cta :global(.hp-app-btn:hover) {
          opacity: 0.86;
          color: #0a1628;
        }
        .hp-app-cta :global(.hp-app-btn.is-ghost) {
          background: transparent;
          color: #fff;
        }
        .hp-app-cta :global(.hp-app-btn.is-ghost:hover) {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          opacity: 1;
        }

        /* ---- the stage ---- */
        .hp-app-stage {
          position: relative;
          height: clamp(420px, 52vw, 600px);
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 1200px;
          cursor: grab;
          /* A drag must never turn into a text selection. */
          user-select: none;
          -webkit-user-select: none;
          touch-action: pan-y;
        }
        .hp-app-stage.is-dragging {
          cursor: grabbing;
        }
        .hp-app-ring {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hp-app-orbit-phone {
          position: absolute;
          width: 116px;
          height: 232px;
          border-radius: 20px;
          padding: 10px 8px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.16);
          /* Hides the half of the ring facing away, so the far side never shows
             up mirrored. */
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .hp-app-orbit-notch {
          width: 34px;
          height: 4px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.3);
        }
        .hp-app-orbit-screen {
          flex: 1 1 auto;
          width: 100%;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px;
        }
        .hp-app-orbit-icon {
          font-size: 26px;
          line-height: 1;
          color: #fff;
        }
        .hp-app-orbit-line {
          height: 5px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.22);
        }
        .hp-app-orbit-line.w80 {
          width: 80%;
        }
        .hp-app-orbit-line.w55 {
          width: 55%;
        }
        .hp-app-orbit-label {
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          white-space: nowrap;
        }

        /* ---- the real phone, as a 3D slab, in front of the ring ---- */
        .hp-app-render {
          position: relative;
          z-index: 2;
          /* Both faces and both rails size themselves off these two, so the
             geometry stays correct at every viewport width. */
          --w: clamp(190px, 24vw, 300px);
          --d: calc(var(--w) * 0.055);
          --r: calc(var(--w) * 0.135);
          width: var(--w);
          /* 606x1164 is the cropped source. */
          aspect-ratio: 606 / 1164;
          transform-style: preserve-3d;
          /* The stage owns the gesture; nothing in here should intercept it. */
          pointer-events: none;
        }
        .hp-app-slab {
          position: absolute;
          inset: 0;
          transform-style: preserve-3d;
        }
        .hp-app-face {
          position: absolute;
          inset: 0;
          display: block;
          border-radius: var(--r);
          /* Each face hides its own reverse, so front and back never bleed
             through one another mid-turn. */
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .hp-app-face.is-front {
          transform: translateZ(calc(var(--d) / 2));
        }
        .hp-app-face.is-back {
          transform: rotateY(180deg) translateZ(calc(var(--d) / 2));
          background: linear-gradient(150deg, #23262c 0%, #101216 48%, #2a2e35 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .hp-app-cam {
          position: absolute;
          inset-block-start: 4%;
          /* PHYSICAL left: this is a fixed point on an object, not text that
             should flip with the document direction. */
          left: 6%;
          width: 30%;
          aspect-ratio: 1;
          border-radius: 24%;
          background: linear-gradient(140deg, #2e323a, #16181d);
          border: 1px solid rgba(255, 255, 255, 0.09);
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-content: center;
          justify-items: center;
          gap: 6%;
          padding: 12%;
        }
        .hp-app-cam span {
          width: 78%;
          aspect-ratio: 1;
          border-radius: 50%;
          background: radial-gradient(circle at 32% 28%, #4c525c, #0a0b0e 70%);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
        }
        .hp-app-cam span:nth-child(3) {
          grid-column: 1 / -1;
          width: 40%;
        }
        /* The long edges — what you see at 90deg, and the reason this reads as
           an object with thickness rather than a sheet of paper. */
        .hp-app-rail {
          position: absolute;
          top: 0;
          height: 100%;
          width: var(--d);
          left: calc(50% - var(--d) / 2);
          border-radius: calc(var(--d) / 2);
          background: linear-gradient(
            to bottom,
            #4a4f57 0%,
            #23262b 12%,
            #34383f 50%,
            #1b1d21 88%,
            #4a4f57 100%
          );
        }
        .hp-app-rail.is-start {
          transform: rotateY(-90deg) translateZ(calc(var(--w) / 2));
        }
        .hp-app-rail.is-end {
          transform: rotateY(90deg) translateZ(calc(var(--w) / 2));
        }
        .hp-app-shadow {
          position: absolute;
          inset-block-end: -6%;
          left: 10%;
          width: 80%;
          height: 7%;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.55);
          filter: blur(22px);
        }
        .hp-app-face :global(img) {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        @media (max-width: 991px) {
          .hp-app-inner {
            width: calc(100% - 32px);
            grid-template-columns: 1fr;
          }
          /* Stacked, the heading leads — the column swap means nothing with one
             column. */
          .hp-app-text {
            order: 1;
          }
          .hp-app-stage {
            order: 2;
            height: clamp(360px, 78vw, 460px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-app-cta :global(.hp-app-btn) {
            transition: none;
          }
          /* Nothing turns, so the grab affordance would be a lie. */
          .hp-app-stage {
            cursor: default;
          }
        }
      `}</style>
    </div>
  );
};

export default AppServices;
