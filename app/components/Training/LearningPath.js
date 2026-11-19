import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass — from "app page inspiration/process section 3rd section.png"
// (4-step "how it works" horizontal process with numbered cards + arrow
// connectors). Copy unchanged.
const steps = [
  { title: "الأساسيات", text: "تبدأ من الصفر دون افتراض خبرة سابقة." },
  { title: "تطبيق عملي", text: "تمارين بعد كل جزء، تطبّق ما تعلمته مباشرة." },
  { title: "مشروع تخرج", text: "مشروع كامل تبنيه بنفسك بإشراف المدرب." },
  { title: "الشهادة", text: "شهادة إتمام بعد تسليم المشروع النهائي." },
];

const LearningPath = () => {
  return (
    <section className="tr-section" id="learning-path">
      <div className="container">
        <Reveal>
          <div className="tr-head tr-center">
            <span className="tr-eyebrow">
              <span className="dot"></span>
              مسار الدورة
            </span>
            <h2 className="tr-h2">كيف تسير الدورة من أولها لآخرها</h2>
          </div>
        </Reveal>

        <motion.div
          className="tr-grid tr-grid-4 tr-process-grid"
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {steps.map((step, i) => (
            <motion.div className="tr-card" key={step.title} variants={staggerItem()}>
              <span className="tr-step-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="tr-h3">{step.title}</h3>
              <p className="tr-p">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LearningPath;
