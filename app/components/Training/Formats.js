import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass — from "app page inspiration/features section.png" (light,
// small 3-card grid with small UI chrome). Copy unchanged.
const formats = [
  {
    icon: "bx-broadcast",
    title: "مباشر مع مدرب",
    text: "محاضرات حيّة بمواعيد ثابتة مع مجموعة، وتفاعل مباشر مع المدرب.",
    fit: "يناسب من يحتاج التزامًا وجدولًا واضحًا",
  },
  {
    icon: "bx-time-five",
    title: "ذاتي مع إرشاد فردي",
    text: "تدرس حسب وقتك، مع جلسات فردية دورية مع مرشد يتابع تقدمك.",
    fit: "يناسب الموظفين وأصحاب الوقت غير المنتظم",
  },
  {
    icon: "bx-building-house",
    title: "حضوري",
    text: "تدريب في مقر التدريب، بتفاعل مباشر مع المدرب وزملائك.",
    fit: "يناسب من يفضّل التعلم وجهًا لوجه",
  },
];

const Formats = () => {
  return (
    <section className="tr-section tr-alt">
      <div className="container">
        <Reveal>
          <div className="tr-head tr-center">
            <h2 className="tr-h2">اختر النمط الذي يناسب وقتك</h2>
          </div>
        </Reveal>

        <motion.div
          className="tr-grid"
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {formats.map((item) => (
            <motion.div className="tr-card" key={item.title} variants={staggerItem()}>
              <span className="tr-icon-well">
                <i className={`bx ${item.icon}`}></i>
              </span>
              <h3 className="tr-h3">{item.title}</h3>
              <p className="tr-p">{item.text}</p>
              <p className="tr-fit" style={{ marginTop: "auto", paddingTop: 8 }}>
                {item.fit}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1}>
          <p className="tr-note">
            سؤال مفتوح: هل الأنماط الثلاثة متوفرة فعلًا؟ يُحذف ما لا ينطبق.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Formats;
