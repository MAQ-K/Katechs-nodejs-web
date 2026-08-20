import React from "react";
import Link from "next/link";
import Reveal from "../Common/Reveal";
import Magnetic from "../Common/Magnetic";

// Visual pass — enrolment band before the footer. Destination still open;
// question 6 in data/training/structure.md.
const CtaBand = () => {
  return (
    <section className="tr-section tr-alt">
      <div className="container">
        <Reveal>
          <div className="tr-cta-band">
            <h2 className="tr-h2">ابدأ من الدورة التي تناسبك</h2>

            <p className="tr-p" style={{ maxWidth: 520, marginInline: "auto" }}>
              تصفّح الدورات المتاحة، أو تواصل معنا إن لم تكن متأكدًا من أيها
              يناسب مستواك.
            </p>

            <div className="tr-actions tr-center" style={{ marginTop: 26 }}>
              <Magnetic>
                <Link href="#courses" className="tr-btn">
                  تصفح الدورات
                  <i className="bx bx-left-arrow-alt"></i>
                </Link>
              </Magnetic>
              <Link href="/contactWeb" className="tr-btn tr-btn-ghost">
                اسأل عن الدورة المناسبة
              </Link>
            </div>

            <p className="tr-note">
              سؤال مفتوح: التسجيل عبر نموذج جديد أم /contactWeb أم منصة
              خارجية؟
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaBand;
