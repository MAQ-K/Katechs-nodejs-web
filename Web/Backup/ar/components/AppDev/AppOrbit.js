import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
  animate,
} from "framer-motion";

// Real 3D, the 0 KB way — a carousel of phone screens standing on a ring in
// 3D space (Motion Lab: CSS 3D transforms tier). Each phone is placed with
// rotateY(angle) translateZ(radius) inside one perspective container.
//
// The ring answers to two inputs at once, added together:
//   • scroll position — it turns as the section passes through the viewport;
//   • the pointer — grab it and drag sideways to spin it yourself, and it
//     keeps going with inertia on release, easing to a stop.
// Dragging doesn't cancel the scroll contribution; the two just sum, so
// letting go mid-page never snaps the ring back to a "correct" angle.
//
// backface-visibility hides the half of the ring facing away, so the far side
// never shows up mirrored. Because every phone is ordinary HTML, the Arabic
// captions shape and join correctly and stay translatable — the exact thing
// WebGL text cannot do. (The stage disables text selection so a drag never
// turns into a text highlight.)
const screens = [
  { icon: "bx bx-store", label: "متجر إلكتروني", tone: "a" },
  { icon: "bx bx-wallet", label: "محفظة ودفع", tone: "b" },
  { icon: "bx bx-calendar-check", label: "حجز مواعيد", tone: "c" },
  { icon: "bx bx-map-alt", label: "توصيل وتتبّع", tone: "a" },
  { icon: "bx bx-line-chart", label: "لوحة تحكم", tone: "b" },
  { icon: "bx bx-chat", label: "تواصل ودعم", tone: "c" },
];

const STEP = 360 / screens.length;
const RADIUS = 250;
const DRAG_SPEED = 0.35; // degrees of rotation per pixel dragged

const AppOrbit = () => {
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

  // Just over one full turn across the section — enough that every screen
  // comes around, slow enough that it never reads as spinning.
  const scrollRotate = useTransform(smooth, [0, 1], [-25, 335]);
  const restingRotate = useMotionValue(-25);
  const base = reduced ? restingRotate : scrollRotate;

  // What the pointer has added, on top of whatever scroll is contributing.
  const dragRotate = useMotionValue(0);
  const rotateY = useTransform([base, dragRotate], ([b, d]) => b + d);

  // Velocity is tracked by hand rather than read off the motion value, so the
  // inertia throw matches the last few milliseconds of the gesture instead of
  // the whole drag.
  const gesture = useRef({ x: 0, time: 0, velocity: 0, id: null });

  const onPointerDown = (e) => {
    // Ignore secondary buttons so a right-click never starts a spin.
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
    if (gesture.current.id !== e.pointerId) return;

    const dx = e.clientX - gesture.current.x;
    const dt = e.timeStamp - gesture.current.time;

    dragRotate.set(dragRotate.get() + dx * DRAG_SPEED);

    if (dt > 0) {
      // px/ms → deg/s, which is what the inertia animation wants.
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

    // A flick keeps spinning and decays to a stop; a slow release just stops.
    if (!reduced && Math.abs(velocity) > 20) {
      animate(dragRotate, dragRotate.get() + velocity * 0.35, {
        type: "inertia",
        velocity,
        power: 0.6,
        timeConstant: 420,
      });
    }
  };

  return (
    <div className="app-orbit" ref={ref}>
      <span className="app-orbit-glow" aria-hidden="true"></span>

      <div
        className={`app-orbit-stage${dragging ? " is-dragging" : ""}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <motion.div className="app-orbit-ring" style={{ rotateY }}>
          {screens.map((s, i) => (
            <div
              className={`app-orbit-phone tone-${s.tone}`}
              key={s.label}
              style={{
                transform: `rotateY(${i * STEP}deg) translateZ(${RADIUS}px)`,
              }}
            >
              <span className="app-orbit-notch" aria-hidden="true"></span>

              <span className="app-orbit-screen" aria-hidden="true">
                <span className="app-orbit-appbar"></span>
                <span className="app-orbit-icon">
                  <i className={s.icon}></i>
                </span>
                <span className="app-orbit-line w-80"></span>
                <span className="app-orbit-line w-55"></span>
                <span className="app-orbit-tiles">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
                <span className="app-orbit-cta"></span>
              </span>

              <span className="app-orbit-label">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <span className="app-orbit-hint">اسحب لتدوير النماذج — أو مرّر الصفحة</span>
    </div>
  );
};

export default AppOrbit;
