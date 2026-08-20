import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass — four-step process, same connector treatment as
// components/Seo/Process.js. Steps are unchanged, reused verbatim from
// components/Services/digital-service.js.
const steps = [
  {
    title: "دراسة السوق والمنافسين",
    text: "نفهم أين يقف سوقك ومن ينافسك وعلى ماذا ينفقون.",
  },
  {
    title: "تحديد الجمهور المستهدف بدقة",
    text: "نحدد من نخاطب بالضبط، بدل الإنفاق على جمهور عام.",
  },
  {
    title: "اختيار القنوات الأنسب",
    text: "نختار القنوات التي يوجد فيها جمهورك، لا كل القنوات.",
  },
  {
    title: "تنفيذ الحملات ومتابعتها",
    text: "تنفيذ حملات مدفوعة وعضوية، مع تحسين مستمر حسب النتائج.",
  },
];

const Strategy = () => {
  return (
    <section className="dm-section dm-alt" id="strategy">
      <div className="container">
        <Reveal>
          <div className="dm-head dm-center">
            <span className="dm-eyebrow">
              <span className="dot"></span>
              الاستراتيجية
            </span>
            <h2 className="dm-h2">نبدأ كل مشروع بفهم عميق لأهدافك</h2>
          </div>
        </Reveal>

        <motion.div
          className="dm-grid dm-grid-4 dm-process-grid"
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {steps.map((step, i) => (
            <motion.div className="dm-card" key={step.title} variants={staggerItem()}>
              <span className="dm-step-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="dm-h3">{step.title}</h3>
              <p className="dm-p">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1}>
          <p className="dm-note">
            عناوين الخطوات مكتوبة فعليًا في
            components/Services/digital-service.js
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Strategy;
