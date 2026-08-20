import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass — same pending-data stat row pattern as components/Seo/Results.js.
// No real numbers exist yet (see flag).
const stats = ["متدرب", "دورة", "مدرب", "نسبة إكمال"];

const Stats = () => {
  return (
    <section className="tr-section tr-alt">
      <div className="container">
        <Reveal>
          <div
            className="tr-flag"
            style={{ display: "flex", marginInline: "auto", maxWidth: 640, marginBottom: 36 }}
          >
            <div>
              <strong>مطلوب من العميل:</strong> أرقام حقيقية. لن تُكتب أي
              قيمة هنا دون بيانات فعلية.
            </div>
          </div>
        </Reveal>

        <motion.div
          className="tr-stats-row"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {stats.map((label) => (
            <motion.div className="tr-stat" key={label} variants={staggerItem()}>
              <span className="tr-stat-pending" aria-label="بيانات قادمة">
                <span className="tr-stat-pending-bar"></span>
              </span>
              <span className="tr-stat-label">{label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
