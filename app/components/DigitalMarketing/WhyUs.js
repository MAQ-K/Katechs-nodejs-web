import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass — light 3-col card grid (deliberately not dark, to stay
// distinct from the Channels section right above it). Copy unchanged,
// already written in components/digitalfeature/WhatWeOffer.js style.
const reasons = [
  {
    icon: "bx-group",
    title: "فريق كامل بتكلفة أقل من توظيف واحد",
    text: "تحصل على مصمم وكاتب محتوى ومختص إعلانات بدل راتب موظف واحد.",
  },
  {
    icon: "bx-rocket",
    title: "تبدأ فورًا",
    text: "لا وقت توظيف ولا تدريب. الفريق جاهز ويعرف ما يفعله.",
  },
  {
    icon: "bx-globe",
    title: "خبرة من قطاعات مختلفة",
    text: "نرى ما ينجح في أسواق متعددة وننقل ذلك إلى حملتك.",
  },
  {
    icon: "bx-slider-alt",
    title: "تحدد مستوى مشاركتك",
    text: "تتابع بالتفصيل أو تتركها علينا وتستلم التقارير فقط.",
  },
  {
    icon: "bx-coin-stack",
    title: "ميزانيتك تذهب للإعلان لا للرواتب",
    text: "نسبة أكبر من إنفاقك تصل فعلًا إلى جمهورك المستهدف.",
  },
  {
    icon: "bx-layer",
    title: "خدمات مترابطة تحت سقف واحد",
    text: "الموقع والسيو والإعلانات والمحتوى تُدار معًا بدل تفرقها بين جهات.",
  },
];

// Sticky heading beside a 2-col list with no card boxes (design pass,
// 2026-09-28): the page's other grids are cards, this one breathes.
const WhyUs = () => {
  return (
    <section className="dm-section dm-alt">
      <div className="container">
        <div className="dm-why">
          <Reveal className="dm-why-head">
            <h2 className="dm-h2">لماذا وكالة بدل فريق داخلي؟</h2>
            <p className="dm-p">
              المقارنة الحقيقية ليست بيننا وبين وكالة أخرى، بل بين الاستعانة
              بنا وبناء فريق داخلي.
            </p>
          </Reveal>

          <motion.ul
            className="dm-why-list"
            variants={staggerParent(0.08)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {reasons.map((item) => (
              <motion.li key={item.title} variants={staggerItem()}>
                <span className="dm-icon-well">
                  <i className={`bx ${item.icon}`}></i>
                </span>
                <h3 className="dm-h3">{item.title}</h3>
                <p className="dm-p">{item.text}</p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
