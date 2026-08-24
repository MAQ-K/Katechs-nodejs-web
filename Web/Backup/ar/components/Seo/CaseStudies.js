import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// From "seo page inspiration/cards.png" — dark, 3-card grid, content
// centered under a top badge/icon (not left-aligned like Pillars' 6-card
// grid from "3rd section.png"). Field structure follows WebFX's case-study
// cards (industry → challenge → what was done → the metric that moved).
// Values stay blank — no client case studies exist yet, see the flag.
const cases = [1, 2, 3];

const CaseStudies = () => {
  return (
    <section className="seo-section seo-dark">
      <div className="container">
        <Reveal>
          <div className="seo-head seo-center" style={{ maxWidth: 640, marginInline: "auto" }}>
            <h2 className="seo-h2">نتائج عملاء</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div
            className="seo-flag seo-flag-dark"
            style={{ display: "flex", marginInline: "auto", maxWidth: 640 }}
          >
            <div>
              <strong>مطلوب من العميل:</strong> دراسات حالة حقيقية — المجال،
              المشكلة، ما نُفّذ، والرقم الذي تغيّر. لا يمكن كتابة هذا القسم
              بدونها.
            </div>
          </div>
        </Reveal>

        <motion.div
          className="seo-grid"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cases.map((n) => (
            <motion.div
              className="seo-card seo-card-dark seo-card-centered"
              key={n}
              variants={staggerItem()}
            >
              <span className="seo-icon-well">
                <i className="bx bx-line-chart"></i>
              </span>

              <div className="seo-tag-row">
                <span className="seo-tag">المجال</span>
              </div>

              <h3 className="seo-h3">اسم العميل أو القطاع</h3>
              <p className="seo-p">
                وصف مختصر للوضع قبل البدء والمشكلة التي كانت تمنع الظهور.
              </p>

              <div className="seo-card-metric">
                <span className="seo-stat-pending" aria-label="بيانات قادمة">
                  <span className="seo-stat-pending-bar seo-stat-pending-bar-dark"></span>
                </span>
                <span className="seo-stat-label">النتيجة خلال 00 شهرًا</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudies;
