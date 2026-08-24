import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// From "seo page inspiration/numbers section 2nd.png" — a bordered white
// card holding the number row, not the numbers loose on the section bg.
// No real client numbers exist yet (see flag) — a static "00" read as a
// broken counter rather than a deliberate pending state, so this shows a
// shimmering placeholder bar instead. Swap seo-stat-pending for a real
// <span className="seo-stat-value"> once figures land.
const stats = [
  "مواقع نعمل عليها",
  "كلمات في الصفحة الأولى",
  "متوسط نمو الزيارات",
  "سنوات خبرة",
];

const Results = () => {
  return (
    <section className="seo-section">
      <div className="container">
        <Reveal>
          <div className="seo-head seo-center">
            <h2 className="seo-h2">نتائج نقيسها، لا وعود</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="seo-flag" style={{ display: "flex", marginInline: "auto", maxWidth: 640 }}>
            <div>
              <strong>مطلوب من العميل:</strong> أرقام حقيقية لهذا القسم. لن
              تُكتب أي قيمة هنا دون بيانات فعلية.
            </div>
          </div>
        </Reveal>

        <div className="seo-stats-card">
          <motion.div
            className="seo-stats-row"
            variants={staggerParent(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {stats.map((label) => (
              <motion.div className="seo-stat" key={label} variants={staggerItem()}>
                <span className="seo-stat-pending" aria-label="بيانات قادمة">
                  <span className="seo-stat-pending-bar"></span>
                </span>
                <span className="seo-stat-label">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Results;
