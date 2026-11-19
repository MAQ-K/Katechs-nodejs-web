import React from "react";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass, same seo-plan card pattern as components/Seo/Pricing.js.
// Real prices/refund policy still open — see data/training/structure.md,
// question 2. Prices stay blank.
const plans = [
  {
    name: "دورة مفردة",
    summary: "تسجّل في دورة واحدة",
    popular: false,
    features: ["وصول كامل لمحتوى الدورة", "المشروع النهائي", "شهادة إتمام"],
  },
  {
    name: "مسار كامل",
    summary: "عدة دورات متتابعة في مجال واحد",
    popular: true,
    features: [
      "كل دورات المسار",
      "متابعة فردية مع مرشد",
      "شهادة لكل دورة",
      "سعر أقل من شراء الدورات منفردة",
    ],
  },
  {
    name: "اشتراك",
    summary: "وصول مفتوح لفترة محددة",
    popular: false,
    features: [
      "وصول لكل الدورات المتاحة",
      "دورات جديدة أثناء اشتراكك",
      "شهادة عند إتمام أي دورة",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="tr-section tr-alt" id="pricing">
      <div className="container">
        <Reveal>
          <div className="tr-head tr-center">
            <h2 className="tr-h2">الأسعار</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="tr-flag" style={{ display: "flex", marginInline: "auto", maxWidth: 640 }}>
            <div>
              <strong>مطلوب من العميل:</strong> الأسعار الفعلية، وهل يوجد
              تقسيط أو خصم للتسجيل المبكر؟
            </div>
          </div>
        </Reveal>

        <motion.div
          className="tr-grid"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {plans.map((plan) => (
            <motion.div
              className={`tr-card tr-plan${plan.popular ? " is-popular" : ""}`}
              key={plan.name}
              variants={staggerItem()}
            >
              <span className="tr-plan-badge">
                <i className="bx bx-star"></i>
                الأكثر طلبًا
              </span>

              <h3 className="tr-h3">{plan.name}</h3>
              <p className="tr-p">{plan.summary}</p>

              <div className="tr-plan-price">
                <span className="tr-stat-value">— —</span>
                <span className="tr-stat-label">السعر</span>
              </div>

              <ul className="tr-list">
                {plan.features.map((f) => (
                  <li key={f}>
                    <i className="bx bx-check"></i>
                    {f}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "auto" }}>
                <button type="button" className="tr-btn tr-btn-block">
                  سجّل الآن
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
