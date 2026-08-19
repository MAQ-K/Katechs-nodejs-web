import React from "react";
import Link from "next/link";

// UX PROTOTYPE. Monthly retainer tiers are the industry norm (WebFX publishes
// "from $X/month" plus an "included in all plans" checklist). Model still
// unconfirmed — see data/digital-marketing/structure.md, question 3.
const plans = [
  {
    name: "الباقة الأساسية",
    summary: "نشاط صغير يبدأ حضوره الرقمي",
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
    <section className="ux-section" id="pricing">
      <div className="container">
        <div className="ux-head ux-center">
          <span className="ux-eyebrow">الباقات</span>
          <h2 className="ux-h2">اختر ما يناسب حجم نشاطك</h2>
        </div>

        <div className="ux-flag">
          <strong>سؤال مفتوح:</strong> اشتراك شهري (المعتاد في هذا المجال) أم
          تسعير حسب المشروع؟ الأسعار متروكة فارغة حتى يتحدد ذلك.
        </div>

        <div className="ux-grid ux-grid-3">
          {plans.map((plan) => (
            <div className="ux-card" key={plan.name}>
              <h3 className="ux-h3">{plan.name}</h3>
              <p className="ux-p">{plan.summary}</p>

              <div style={{ padding: "14px 0", borderBottom: "1px solid var(--ux-line)", marginBottom: 14 }}>
                <span className="ux-stat-value">— —</span>
                <span className="ux-stat-label">السعر شهريًا</span>
              </div>

              <ul className="ux-list">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div style={{ marginTop: "auto" }}>
                <Link href="/digital-market-order" className="ux-btn ux-btn-block">
                  اطلب الباقة
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
