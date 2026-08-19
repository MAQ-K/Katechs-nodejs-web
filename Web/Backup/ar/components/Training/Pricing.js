import React from "react";

// UX PROTOTYPE. Unlike the service pages, a B2C course page is expected to
// show a real per-seat price rather than "request a quote" — but no price
// exists yet, so the figures stay blank. Open question 2 in
// data/training/structure.md.
const plans = [
  {
    name: "دورة مفردة",
    summary: "تسجّل في دورة واحدة",
    features: ["وصول كامل لمحتوى الدورة", "المشروع النهائي", "شهادة إتمام"],
  },
  {
    name: "مسار كامل",
    summary: "عدة دورات متتابعة في مجال واحد",
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
    features: ["وصول لكل الدورات المتاحة", "دورات جديدة أثناء اشتراكك", "شهادة عند إتمام أي دورة"],
  },
];

const Pricing = () => {
  return (
    <section className="ux-section ux-alt" id="pricing">
      <div className="container">
        <div className="ux-head ux-center">
          <h2 className="ux-h2">الأسعار</h2>
        </div>

        <div className="ux-flag">
          <strong>مطلوب من العميل:</strong> الأسعار الفعلية، وهل يوجد تقسيط أو
          خصم للتسجيل المبكر؟
        </div>

        <div className="ux-grid ux-grid-3">
          {plans.map((plan) => (
            <div className="ux-card" key={plan.name}>
              <h3 className="ux-h3">{plan.name}</h3>
              <p className="ux-p">{plan.summary}</p>

              <div style={{ padding: "14px 0", borderBottom: "1px solid var(--ux-line)", marginBottom: 14 }}>
                <span className="ux-stat-value">— —</span>
                <span className="ux-stat-label">السعر</span>
              </div>

              <ul className="ux-list">
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div style={{ marginTop: "auto" }}>
                <button type="button" className="ux-btn ux-btn-block">
                  سجّل الآن
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
