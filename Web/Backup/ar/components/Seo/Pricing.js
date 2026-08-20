import React from "react";
import Link from "next/link";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass. Research says monthly retainer tiers are the norm for SEO,
// but the model is still unconfirmed — see data/seo/structure.md, question 3.
// Plans differ on real scope; prices stay blank.
const plans = [
  {
    name: "الباقة الأساسية",
    summary: "موقع صغير أو نشاط محلي",
    popular: false,
    features: [
      "تحليل تقني للموقع",
      "تحسين عدد محدود من الصفحات",
      "كلمات مفتاحية أساسية",
      "تقرير شهري",
    ],
  },
  {
    name: "الباقة المتقدمة",
    summary: "الأكثر طلبًا للشركات النامية",
    popular: true,
    features: [
      "كل ما في الأساسية",
      "تحسين مستمر للمحتوى",
      "بناء روابط خلفية",
      "سيو محلي وخرائط جوجل",
      "تقرير شهري وجلسة متابعة",
    ],
  },
  {
    name: "باقة الشركات",
    summary: "مواقع كبيرة أو متاجر إلكترونية",
    popular: false,
    features: [
      "كل ما في المتقدمة",
      "سيو المتاجر وصفحات المنتجات",
      "تهيئة للظهور في نتائج الذكاء الاصطناعي",
      "خطة محتوى موسّعة",
      "مدير حساب مخصّص",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="seo-section seo-alt" id="pricing">
      <div className="container">
        <Reveal>
          <div className="seo-head seo-center">
            <span className="seo-eyebrow">
              <span className="dot"></span>
              الباقات
            </span>
            <h2 className="seo-h2">اختر ما يناسب حجم موقعك</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="seo-flag" style={{ display: "flex", marginInline: "auto", maxWidth: 640 }}>
            <div>
              <strong>سؤال مفتوح:</strong> اشتراك شهري (وهو المعتاد في هذا
              المجال) أم تسعير حسب المشروع؟ الأسعار متروكة فارغة حتى يتحدد
              ذلك.
            </div>
          </div>
        </Reveal>

        <motion.div
          className="seo-grid"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {plans.map((plan) => (
            <motion.div
              className={`seo-card seo-plan${plan.popular ? " is-popular" : ""}`}
              key={plan.name}
              variants={staggerItem()}
            >
              <span className="seo-plan-badge">
                <i className="bx bx-star"></i>
                الأكثر طلبًا
              </span>

              <h3 className="seo-h3">{plan.name}</h3>
              <p className="seo-p">{plan.summary}</p>

              <div className="seo-plan-price">
                <span className="seo-stat-value">— —</span>
                <span className="seo-stat-label">السعر شهريًا</span>
              </div>

              <ul className="seo-list">
                {plan.features.map((f) => (
                  <li key={f}>
                    <i className="bx bx-check"></i>
                    {f}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "auto" }}>
                <Link href="/contactWeb" className="seo-btn seo-btn-block">
                  اطلب الباقة
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
