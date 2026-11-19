import React, { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import Reveal from "../Common/Reveal";

// Each step's illustration is built from plain divs (skeleton bars, plates,
// bubbles) rather than an image — same abstract-UI treatment as the reference,
// but it stays crisp at any size and needs no new assets.
//
// The illustrations are wired for motion in SCSS: bars sweep a shimmer, the
// approval check draws its stroke in, and the launch bubbles drift — all
// on-hover or in-view, all CSS, so no per-element JS runs on scroll.
const artwork = {
  brief: (
    <div className="app-step-plate">
      <span className="app-step-avatar">
        <i className="bx bx-user"></i>
      </span>
      <span className="app-step-bar w-70"></span>
      <span className="app-step-bar w-90"></span>
      <span className="app-step-bar w-50"></span>
    </div>
  ),
  design: (
    <div className="app-step-plate app-step-plate-row">
      <span className="app-step-thumb"></span>
      <span className="app-step-lines">
        <span className="app-step-bar w-100"></span>
        <span className="app-step-bar w-70"></span>
      </span>
      <span className="app-step-check">
        <i className="bx bx-check"></i>
      </span>
    </div>
  ),
  build: (
    <div className="app-step-stack">
      <span className="app-step-sheet app-step-sheet-back"></span>
      <span className="app-step-sheet app-step-sheet-mid"></span>
      <span className="app-step-sheet app-step-sheet-front">
        <i className="bx bx-code-alt"></i>
        <span className="app-step-bar w-80"></span>
        <span className="app-step-bar w-55"></span>
      </span>
    </div>
  ),
  launch: (
    <div className="app-step-bubbles">
      <span className="app-step-bubble app-step-bubble-1">جاهز للنشر</span>
      <span className="app-step-bubble app-step-bubble-2">تطبيقك على المتاجر</span>
      <span className="app-step-bubble app-step-bubble-3">ودعم مستمر</span>
    </div>
  ),
};

const steps = [
  { label: "الخطوة الأولى", title: "التخطيط والدراسة", tag: "دراسة مجانية", art: "brief" },
  { label: "الخطوة الثانية", title: "تصميم UI/UX", tag: "تصاميم تفاعلية", art: "design" },
  { label: "الخطوة الثالثة", title: "التطوير والبرمجة", tag: "كود نظيف", art: "build" },
  { label: "الخطوة الرابعة", title: "الإطلاق والدعم", tag: "دعم مستمر", art: "launch" },
];

const Process = () => {
  const rowRef = useRef(null);
  const reduced = useReducedMotion();

  // Scroll-linked rail: the connector line between the four cards fills as the
  // row passes through the viewport, so the reader literally watches the
  // project move from brief to launch.
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start 85%", "end 55%"],
  });
  const fill = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.4,
  });

  return (
    <section className="app-process" id="process">
      <div className="container">
        <div className="app-process-head">
          <Reveal className="app-process-badge">
            <i className="bx bx-broadcast"></i>
            كيف نعمل
          </Reveal>

          <Reveal as="h2" delay={0.08}>
            أربع خطوات واضحة من الفكرة
            <br />
            إلى تطبيق منشور على المتاجر
          </Reveal>
        </div>

        <div className="app-process-rail-wrap" aria-hidden="true">
          <span className="app-process-rail"></span>
          <motion.span
            className="app-process-rail-fill"
            style={reduced ? { scaleX: 1 } : { scaleX: fill }}
          />
        </div>

        <div className="row app-process-row" ref={rowRef}>
          {steps.map((step, i) => (
            <div className="col-lg-3 col-sm-6" key={step.title}>
              <Reveal
                className="app-step-card"
                delay={0.07 * i}
                whileHover={reduced ? undefined : { y: -8 }}
              >
                <span className="app-step-label">{step.label}</span>
                <h3>{step.title}</h3>

                <div className="app-step-art">{artwork[step.art]}</div>

                <span className="app-step-tag">{step.tag}</span>

                {i < steps.length - 1 && (
                  <span className="app-step-arrow" aria-hidden="true">
                    <i className="bx bx-left-arrow-alt"></i>
                  </span>
                )}
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
