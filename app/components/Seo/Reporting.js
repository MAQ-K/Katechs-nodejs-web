import React from "react";
import Reveal from "../Common/Reveal";
import { motion, useReducedMotion } from "framer-motion";

const items = [
  "ترتيب كلماتك المستهدفة، وكيف تحرّك خلال الشهر",
  "عدد الزيارات القادمة من البحث، ومن أي صفحات",
  "ما نُفّذ فعليًا خلال الشهر، وما هي خطة الشهر التالي",
];

// Ring row — from "seo page inspiration/seopage-insp2.png". Replaces the old
// animated bar-chart mock (.seo-report-bars) with four partial-circle rings,
// one per report section, each a distinct accent so the eye can tell them
// apart at a glance. Values are illustrative (same mock-data convention the
// old bars used — this is an explainer graphic, not a client's real report).
//
// Layout restructure: dropped the .seo-split two-column mock (rings boxed in
// a half-width .seo-media-panel/.seo-report-card opposite the text) for a
// stacked layout — text block full width on top, then one full-width row
// below with all 4 label/ring pairs. Ring markup/animation unchanged.
//
// Values pass — this section exists to say "the service works", so every
// ring reads consistently strong (high 70s–90s) instead of mixing in
// mediocre ones. Each ring also gets a short positive Arabic descriptor
// under its label (.seo-ring-state) — same "state tag" idea as the trend
// icons in CaseStudies, small enough not to compete with the number.
const rings = [
  { label: "ترتيب الكلمات", state: "ممتاز", value: 88, color: "#1dd3f8" },
  { label: "الزيارات العضوية", state: "نمو قوي", value: 91, color: "#22c55e" },
  { label: "الروابط الخلفية", state: "جيد جدًا", value: 79, color: "#f5a524" },
  { label: "التحويلات", state: "جيد جدًا", value: 76, color: "#0a1f44" },
];

const RING_SIZE = 84;
const RING_STROKE = 7;
const RING_R = (RING_SIZE - RING_STROKE) / 2;
const RING_C = 2 * Math.PI * RING_R;

const Ring = ({ label, state, value, color, delay }) => {
  const reduced = useReducedMotion();
  const offset = RING_C - (value / 100) * RING_C;

  return (
    <div className="seo-ring">
      <span className="seo-ring-label">{label}</span>
      {state && <span className="seo-ring-state">{state}</span>}

      <span className="seo-ring-circle">
        <svg
          className="seo-ring-svg"
          width={RING_SIZE}
          height={RING_SIZE}
          viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}
        >
          <circle
            className="seo-ring-track"
            cx={RING_SIZE / 2}
            cy={RING_SIZE / 2}
            r={RING_R}
            strokeWidth={RING_STROKE}
          />
          <motion.circle
            cx={RING_SIZE / 2}
            cy={RING_SIZE / 2}
            r={RING_R}
            strokeWidth={RING_STROKE}
            stroke={color}
            strokeLinecap="round"
            strokeDasharray={RING_C}
            initial={{ strokeDashoffset: reduced ? offset : RING_C }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <span className="seo-ring-value">{value}%</span>
      </span>
    </div>
  );
};

const Reporting = () => {
  return (
    <section className="seo-section">
      <div className="container">
        <div className="seo-head" style={{ maxWidth: 640 }}>
          <Reveal>
            <h2 className="seo-h2">تعرف بالضبط ما الذي يحدث كل شهر</h2>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="seo-p">
              لا تحتاج أن تثق بنا على العمياء. كل شهر تصلك صورة واضحة عمّا
              نُفّذ وما نتج عنه.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="seo-list" style={{ marginTop: 20 }}>
              {items.map((text) => (
                <li key={text}>
                  <i className="bx bx-check"></i>
                  {text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="seo-ring-row seo-ring-row-full">
            {rings.map((r, i) => (
              <Ring key={r.label} {...r} delay={0.1 * i} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Reporting;
