import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass — light testimonial-style card grid. No real graduate quotes
// exist yet (see flag) — copy unchanged.
const items = [1, 2, 3];

const Outcomes = () => {
  return (
    <section className="tr-section">
      <div className="container">
        <Reveal>
          <div className="tr-head tr-center">
            <h2 className="tr-h2">ماذا حقق خريجونا</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="tr-flag" style={{ display: "flex", marginInline: "auto", maxWidth: 640 }}>
            <div>
              <strong>مطلوب من العميل:</strong> آراء ونتائج خريجين حقيقية. لا
              تُختلق شهادات متدربين.
            </div>
          </div>
        </Reveal>

        <motion.div
          className="tr-grid"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {items.map((n) => (
            <motion.div className="tr-card" key={n} variants={staggerItem()}>
              <i className="bx bxs-quote-alt-left tr-quote-icon"></i>
              <p className="tr-p">
                نص رأي المتدرب — ما الذي كان يريده قبل الدورة، وما الذي
                استطاع فعله بعدها.
              </p>

              <div className="tr-outcome-foot">
                <span className="tr-avatar-circle tr-avatar-sm">
                  <i className="bx bx-user"></i>
                </span>
                <div>
                  <p className="tr-h3" style={{ margin: 0, fontSize: 14 }}>
                    اسم الخريج
                  </p>
                  <p className="tr-fit" style={{ margin: 0 }}>
                    الدورة · النتيجة
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Outcomes;
