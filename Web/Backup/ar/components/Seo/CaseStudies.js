import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass — from "seo page inspiration/seopage-insp.png": a light
// two-column split (badge + heading + copy on one side, a 2x2 metric-card
// grid on the other) rather than the old dark 3-card grid. Real case-study
// numbers still don't exist (see the flag below), so every card shows its
// metric name and trend direction but the value itself stays a pending
// shimmer bar — same "coming soon, not broken" convention the old cards used
// (.seo-stat-pending), just carried into the new card shape.
const metrics = [
  {
    label: "نمو الزيارات العضوية",
    trend: "up",
  },
  {
    label: "كلمات تصدّرت نتائج البحث",
    trend: "up",
  },
  {
    label: "عملاء محتملون من البحث",
    trend: "up",
  },
  {
    label: "متوسط ترتيب الكلمات المستهدفة",
    trend: "down",
  },
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

            <Reveal delay={0.15}>
              <div className="seo-flag" style={{ marginTop: 28, marginBottom: 0 }}>
                <div>
                  <strong>مطلوب من العميل:</strong> دراسات حالة حقيقية —
                  المجال، المشكلة، ما نُفّذ، والرقم الذي تغيّر، ليحل محل
                  القيم المؤقتة في البطاقات المجاورة.
                </div>
              </div>
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
                  <span className="seo-metric-pending" aria-label="قيمة قادمة"></span>
                  <span className="seo-metric-change">قريبًا</span>
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
