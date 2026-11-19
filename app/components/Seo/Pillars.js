import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Layout restack — dropped the left/right split (badge+heading opposite a
// 2-col card grid) for a stacked/centered layout matching the seo-head
// seo-center convention already used by Process.js, Results.js, Pricing.js
// etc: badge + heading + copy centered full width on top, then all 6 pillar
// cards below in the shared 3-col .seo-grid (collapses 3 -> 2 -> 1, same as
// every other seo-grid usage on this page). Card shape (.seo-card-corner)
// and content (6 pillars) unchanged from the split version.
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
    <section className="seo-section seo-alt">
      <div className="container">
        <div className="seo-head seo-center">
          <Reveal>
            <span className="seo-badge-solid">المحاور</span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="seo-h2">ما الذي نعمل عليه بالضبط</h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="seo-p">
              السيو ليس بندًا واحدًا — هذه المحاور الستة هي ما نغطيه في كل
              مشروع.
            </p>
          </Reveal>
        </div>

        <motion.div
          className="seo-grid"
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {pillars.map((item) => (
            <motion.div
              className="seo-card seo-card-corner"
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
