import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Draft case studies (user, 2026-09-28: "نتائج عملاء => add good draft data").
// ⚠️ Illustrative figures, not real clients. Replace with real case studies
// before launch. Layout: one featured case + two stacked, instead of three
// equal cards (the page already has two other 3-col grids).
const cases = [
  {
    sector: "متجر إلكتروني",
    title: "متجر أزياء نسائية",
    text: "مبيعات متذبذبة تعتمد على العروض فقط. أعدنا بناء حملات البحث والسوشيال حول المنتجات الأعلى ربحًا.",
    value: "+184%",
    label: "نمو المبيعات من الإعلانات",
    extra: [
      { value: "4.6x", label: "عائد الإنفاق الإعلاني" },
      { value: "-41%", label: "تكلفة الطلب الواحد" },
    ],
    duration: "خلال 6 أشهر",
  },
  {
    sector: "عيادات",
    title: "مجموعة عيادات أسنان",
    text: "حجوزات عبر إعلانات البحث المحلي وصفحة هبوط لكل خدمة.",
    value: "+320",
    label: "حجز شهري جديد",
    duration: "خلال 4 أشهر",
  },
  {
    sector: "عقارات",
    title: "شركة تطوير عقاري",
    text: "استهداف دقيق على ميتا بدل جمهور عام، مع متابعة يومية للعملاء المحتملين.",
    value: "-58%",
    label: "تكلفة العميل المحتمل",
    duration: "خلال 3 أشهر",
  },
];

const Results = () => {
  const [featured, ...rest] = cases;

  return (
    <section className="dm-section dm-dark">
      <div className="container">
        <Reveal>
          <div className="dm-head dm-center">
            <h2 className="dm-h2">نتائج عملاء</h2>
            <p className="dm-p">
              أرقام من حملات أدرناها، مقاسة من أول شهر حتى آخر تقرير.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="dm-cases"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.article className="dm-case is-featured" variants={staggerItem()}>
            <span className="dm-case-tag">{featured.sector}</span>
            <h3 className="dm-h3">{featured.title}</h3>
            <p className="dm-p">{featured.text}</p>

            <div className="dm-case-metric">
              <span className="dm-case-value" dir="ltr">{featured.value}</span>
              <span className="dm-case-label">{featured.label}</span>
            </div>

            <div className="dm-case-extra">
              {featured.extra.map((m) => (
                <div key={m.label}>
                  <span className="dm-case-value sm" dir="ltr">{m.value}</span>
                  <span className="dm-case-label">{m.label}</span>
                </div>
              ))}
            </div>

            <span className="dm-case-duration">
              <i className="bx bx-time-five"></i>
              {featured.duration}
            </span>
          </motion.article>

          {rest.map((c) => (
            <motion.article className="dm-case" key={c.title} variants={staggerItem()}>
              <span className="dm-case-tag">{c.sector}</span>
              <h3 className="dm-h3">{c.title}</h3>
              <p className="dm-p">{c.text}</p>

              <div className="dm-case-metric">
                <span className="dm-case-value" dir="ltr">{c.value}</span>
                <span className="dm-case-label">{c.label}</span>
              </div>

              <span className="dm-case-duration">
                <i className="bx bx-time-five"></i>
                {c.duration}
              </span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Results;
