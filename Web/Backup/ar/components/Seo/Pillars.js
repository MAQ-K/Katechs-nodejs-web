import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass — from "seo page inspiration/3rd section.png" (dark, 6-card
// grid). Copy unchanged: five pillars reused verbatim from
// components/Common/SeoShowcase.js, e-commerce SEO added per Backlinko.
const pillars = [
  {
    icon: "bx-code-alt",
    title: "السيو التقني",
    text: "سرعة الموقع، الفهرسة، البنية، الأخطاء التي تمنع جوجل من قراءة صفحاتك.",
  },
  {
    icon: "bx-file-blank",
    title: "تحسين محتوى الصفحات",
    text: "العناوين والوصف والنصوص داخل كل صفحة، بحيث تخدم الباحث ومحرك البحث معًا.",
  },
  {
    icon: "bx-search-alt",
    title: "تحليل الكلمات المفتاحية",
    text: "معرفة ما يبحث عنه عملاؤك فعلًا، وبناء صفحاتك حول تلك العبارات.",
  },
  {
    icon: "bx-link",
    title: "بناء الروابط الخلفية",
    text: "روابط من مواقع ذات ثقة ترفع مصداقية موقعك أمام محركات البحث.",
  },
  {
    icon: "bx-map-pin",
    title: "السيو المحلي",
    text: "الظهور في خرائط جوجل ونتائج البحث المحلية لمن يبحث بالقرب منك.",
  },
  {
    icon: "bx-store",
    title: "سيو المتاجر الإلكترونية",
    text: "صفحات المنتجات والتصنيفات، بحيث تصل منتجاتك لمن يبحث عنها مباشرة.",
  },
];

const Pillars = () => {
  return (
    <section className="seo-section seo-dark">
      <div className="container">
        <Reveal>
          <div className="seo-head seo-center" style={{ maxWidth: 640, marginInline: "auto" }}>
            <h2 className="seo-h2">ما الذي نعمل عليه بالضبط</h2>
            <p className="seo-p">
              السيو ليس بندًا واحدًا — هذه المحاور الستة هي ما نغطيه في كل
              مشروع.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="seo-grid"
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {pillars.map((item) => (
            <motion.div
              className="seo-card seo-card-dark"
              key={item.title}
              variants={staggerItem()}
            >
              <span className="seo-icon-well">
                <i className={`bx ${item.icon}`}></i>
              </span>
              <h3 className="seo-h3">{item.title}</h3>
              <p className="seo-p">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pillars;
