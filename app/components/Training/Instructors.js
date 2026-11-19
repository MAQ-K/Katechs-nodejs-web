import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass — from "app page inspiration/2nd secton inspiration just ui.png"
// (dark team/instructor cards grid). No real instructor names/photos exist
// yet (see flag), so each card keeps an avatar placeholder icon instead of
// a name — content stays unchanged.
const people = [1, 2, 3, 4];

const Instructors = () => {
  return (
    <section className="tr-section tr-dark">
      <div className="container">
        <Reveal>
          <div className="tr-head tr-center">
            <h2 className="tr-h2">من سيدرّبك</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div
            className="tr-flag tr-flag-dark"
            style={{ display: "flex", marginInline: "auto", maxWidth: 640, marginBottom: 36 }}
          >
            <div>
              <strong>مطلوب من العميل:</strong> أسماء وصور وخبرات المدربين
              الحقيقيين. لن تُختلق أسماء أو خبرات.
            </div>
          </div>
        </Reveal>

        <motion.div
          className="tr-grid tr-grid-4"
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {people.map((n) => (
            <motion.div
              className="tr-card tr-card-dark tr-instructor-card"
              key={n}
              variants={staggerItem()}
            >
              <span className="tr-avatar-circle">
                <i className="bx bx-user"></i>
              </span>
              <h3 className="tr-h3">اسم المدرب</h3>
              <p className="tr-fit">التخصص · سنوات الخبرة</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Instructors;
