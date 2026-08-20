import React from "react";
import Link from "next/link";
import Reveal, { staggerParent, staggerItem } from "../Common/Reveal";
import { motion } from "framer-motion";

// Visual pass, same seo-plan card pattern as components/Seo/Pricing.js.
// Pricing model still unconfirmed — see data/digital-marketing/structure.md,
// question 3. Prices stay blank.
const plans = [
  {
    name: "الباقة الأساسية",
    summary: "نشاط صغير يبدأ حضوره الرقمي",
    popular: false,
    features: [
      "قناة إعلانية واحدة",
      "إدارة منصتي تواصل",
      "خطة محتوى شهرية",
      "تقرير شهري",
    ],
  },
  {
    name: "الباقة المتقدمة",
    summary: "الأكثر طلبًا للشركات النامية",
    popular: true,
    features: [
      "كل ما في الأساسية",
      "قنوات إعلانية متعددة",
      "إدارة كل منصات التواصل",
      "تصميم منشورات وإعلانات",
      "لوحة متابعة وتقرير شهري",
    ],
  },
  {
    name: "باقة الشركات",
    summary: "ميزانيات أكبر وأهداف نمو محددة",
    popular: false,
    features: [
      "كل ما في المتقدمة",
      "استراتيجية موسّعة متعددة القنوات",
      "تسويق بالبريد الإلكتروني",
      "تقارير عائد استثمار تفصيلية",
      "مدير حساب مخصّص",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="dm-section" id="pricing">
      <div className="container">
        <Reveal>
          <div className="dm-head dm-center">
            <span className="dm-eyebrow">
              <span className="dot"></span>
              الباقات
            </span>
            <h2 className="dm-h2">اختر ما يناسب حجم نشاطك</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="dm-flag" style={{ display: "flex", marginInline: "auto", maxWidth: 640 }}>
            <div>
              <strong>سؤال مفتوح:</strong> اشتراك شهري (المعتاد في هذا
              المجال) أم تسعير حسب المشروع؟ الأسعار متروكة فارغة حتى يتحدد
              ذلك.
            </div>
          </div>
        </Reveal>

        <motion.div
          className="dm-grid"
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {plans.map((plan) => (
            <motion.div
              className={`dm-card dm-plan${plan.popular ? " is-popular" : ""}`}
              key={plan.name}
              variants={staggerItem()}
            >
              <span className="dm-plan-badge">
                <i className="bx bx-star"></i>
                الأكثر طلبًا
              </span>

              <h3 className="dm-h3">{plan.name}</h3>
              <p className="dm-p">{plan.summary}</p>

              <div className="dm-plan-price">
                <span className="dm-stat-value">— —</span>
                <span className="dm-stat-label">السعر شهريًا</span>
              </div>

              <ul className="dm-list">
                {plan.features.map((f) => (
                  <li key={f}>
                    <i className="bx bx-check"></i>
                    {f}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "auto" }}>
                <Link href="/digital-market-order" className="dm-btn dm-btn-block">
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
