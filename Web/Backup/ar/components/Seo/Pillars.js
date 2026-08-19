import React from "react";

// UX PROTOTYPE. The first five pillars are the ones already stated in
// components/Common/SeoShowcase.js (live on the homepage) — reused rather than
// rewritten. E-commerce SEO is the one addition, from Backlinko's breakdown.
const pillars = [
  {
    title: "السيو التقني",
    text: "سرعة الموقع، الفهرسة، البنية، الأخطاء التي تمنع جوجل من قراءة صفحاتك.",
  },
  {
    title: "تحسين محتوى الصفحات",
    text: "العناوين والوصف والنصوص داخل كل صفحة، بحيث تخدم الباحث ومحرك البحث معًا.",
  },
  {
    title: "تحليل الكلمات المفتاحية",
    text: "معرفة ما يبحث عنه عملاؤك فعلًا، وبناء صفحاتك حول تلك العبارات.",
  },
  {
    title: "بناء الروابط الخلفية",
    text: "روابط من مواقع ذات ثقة ترفع مصداقية موقعك أمام محركات البحث.",
  },
  {
    title: "السيو المحلي",
    text: "الظهور في خرائط جوجل ونتائج البحث المحلية لمن يبحث بالقرب منك.",
  },
  {
    title: "سيو المتاجر الإلكترونية",
    text: "صفحات المنتجات والتصنيفات، بحيث تصل منتجاتك لمن يبحث عنها مباشرة.",
  },
];

const Pillars = () => {
  return (
    <section className="ux-section ux-alt">
      <div className="container">
        <div className="ux-head">
          <h2 className="ux-h2">ما الذي نعمل عليه بالضبط</h2>
          <p className="ux-p">
            السيو ليس بندًا واحدًا — هذه المحاور الستة هي ما نغطيه في كل مشروع.
          </p>
        </div>

        <div className="ux-grid ux-grid-3">
          {pillars.map((item) => (
            <div className="ux-card" key={item.title}>
              <span className="ux-icon" aria-hidden="true"></span>
              <h3 className="ux-h3">{item.title}</h3>
              <p className="ux-p">{item.text}</p>
            </div>
          ))}
        </div>

        <p className="ux-note">
          خمسة من هذه المحاور مكتوبة فعليًا في
          components/Common/SeoShowcase.js — أُعيد استخدامها كما هي.
        </p>
      </div>
    </section>
  );
};

export default Pillars;
