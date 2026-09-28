import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass — from "seo page inspiration/seopage-insp.png": a light
// two-column split (badge + heading + copy on one side, a 2x2 metric-card
// grid on the other) rather than the old dark 3-card grid. Figures filled in
// at the user's request (2026-09-28). ⚠️ Illustrative — confirm with the
// client before launch. Every trend is "up": a falling rank number is an
// improvement, so the amber "down" styling would read as bad news.
const metrics = [
  { label: "نمو الزيارات العضوية", value: "240%", change: "خلال 12 شهرًا", trend: "up" },
  { label: "كلمات تصدّرت نتائج البحث", value: "+850", change: "في الصفحة الأولى", trend: "up" },
  { label: "عملاء محتملون من البحث", value: "3.2x", change: "مقارنة بالبداية", trend: "up" },
  { label: "متوسط ترتيب الكلمات المستهدفة", value: "#6", change: "كان #38", trend: "up" },
];

const CaseStudies = () => {
  return (
    <section className="seo-section seo-alt">
      <div className="container">
        <div className="seo-split seo-split-results">
          <div>
            <Reveal>
              <span className="seo-badge-solid">نتائج</span>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="seo-h2">نتائج تُقاس، لا وعود</h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="seo-p">
                كل عميل يبدأ من نقطة مختلفة، لكن ما نتابعه واحد: زيارات
                عضوية أكثر، كلمات مستهدفة تتقدّم في الترتيب، وعملاء محتملون
                يصلون من البحث فعليًا.
              </p>
            </Reveal>

          </div>

          <motion.div
            className="seo-metric-grid"
            variants={staggerParent(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {metrics.map((m) => (
              <motion.div className="seo-metric-card" key={m.label} variants={staggerItem()}>
                <span
                  className={`seo-metric-icon ${
                    m.trend === "down" ? "is-down" : "is-up"
                  }`}
                >
                  <i className={`bx ${m.trend === "down" ? "bx-trending-down" : "bx-trending-up"}`}></i>
                </span>

                <div className="seo-metric-row">
                  <span className="seo-metric-value" dir="ltr">{m.value}</span>
                  <span className="seo-metric-change">{m.change}</span>
                </div>

                <span className="seo-metric-label">{m.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
