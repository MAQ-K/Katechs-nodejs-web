import React from "react";
import Link from "next/link";

// UX PROTOTYPE — enrolment band before the footer. Destination still open;
// question 6 in data/training/structure.md.
const CtaBand = () => {
  return (
    <section className="ux-section ux-alt">
      <div className="container">
        <div className="ux-card" style={{ textAlign: "center", alignItems: "center", padding: "44px 24px" }}>
          <h2 className="ux-h2">ابدأ من الدورة التي تناسبك</h2>

          <p className="ux-p" style={{ maxWidth: 520 }}>
            تصفّح الدورات المتاحة، أو تواصل معنا إن لم تكن متأكدًا من أيها
            يناسب مستواك.
          </p>

          <div className="ux-actions" style={{ justifyContent: "center" }}>
            <Link href="#courses" className="ux-btn">
              تصفح الدورات
            </Link>
            <Link href="/contactWeb" className="ux-btn ux-btn-secondary">
              اسأل عن الدورة المناسبة
            </Link>
          </div>

          <p className="ux-note">
            سؤال مفتوح: التسجيل عبر نموذج جديد أم /contactWeb أم منصة خارجية؟
          </p>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
