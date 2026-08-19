import React from "react";
import Link from "next/link";

// UX PROTOTYPE — final conversion band before the footer.
const CtaBand = () => {
  return (
    <section className="ux-section">
      <div className="container">
        <div className="ux-card" style={{ textAlign: "center", alignItems: "center", padding: "44px 24px" }}>
          <h2 className="ux-h2">لنبدأ بخطة، لا بإعلان</h2>

          <p className="ux-p" style={{ maxWidth: 520 }}>
            أخبرنا عن نشاطك وأهدافك، ونعود إليك بخطة قنوات وميزانية مقترحة قبل
            أي التزام.
          </p>

          <div className="ux-actions" style={{ justifyContent: "center" }}>
            <Link href="/digital-market-order" className="ux-btn">
              اطلب عرض سعر
            </Link>
            <Link href="/contactWeb" className="ux-btn ux-btn-secondary">
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
