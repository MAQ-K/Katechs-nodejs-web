import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

const steps = [
  {
    title: "تحليل الموقع والمنافسين",
    text: "نفحص موقعك ونقارنه بمن يتصدّر أمامك، ونحدد الفجوات.",
  },
  {
    title: "استراتيجية وكلمات مفتاحية",
    text: "نتفق على العبارات المستهدفة وخطة الصفحات قبل أي تنفيذ.",
  },
  {
    title: "التنفيذ والتحسين",
    text: "عمل فعلي على الموقع: التقني، المحتوى، الروابط.",
  },
  {
    title: "التقارير والمتابعة",
    text: "تقرير شهري يوضح ما نُفّذ وما تغيّر في الترتيب والزيارات.",
  },
];

const Process = () => {
  return (
    <section className="seo-section seo-alt" id="process">
      <div className="container">
        <Reveal>
          <div className="seo-head seo-center">
            <span className="seo-eyebrow">
              <span className="dot"></span>
              كيف نعمل
            </span>
            <h2 className="seo-h2">أربع مراحل واضحة من أول يوم</h2>
          </div>
        </Reveal>

        <motion.div
          className="seo-grid seo-grid-4 seo-process-grid"
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {steps.map((step, i) => (
            <motion.div className="seo-card" key={step.title} variants={staggerItem()}>
              <span className="seo-step-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="seo-h3">{step.title}</h3>
              <p className="seo-p">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
