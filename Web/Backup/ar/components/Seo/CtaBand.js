import React from "react";
import Link from "next/link";
import Reveal from "../Common/Reveal";
import Magnetic from "../Common/Magnetic";

const CtaBand = () => {
  return (
    <section className="seo-section seo-dark">
      <div className="container">
        <Reveal>
          <div className="seo-cta-band">
            <h2 className="seo-h2">ابدأ بمعرفة أين يقف موقعك الآن</h2>

            <p className="seo-p" style={{ maxWidth: 520, marginInline: "auto" }}>
              تحليل مجاني يوضح أهم ما يمنع موقعك من الظهور، ثم تقرر إن أردت
              المتابعة معنا.
            </p>

            <div className="seo-actions seo-center" style={{ marginTop: 26 }}>
              <Magnetic>
                <Link href="#audit" className="seo-btn seo-btn-invert">
                  احصل على التحليل المجاني
                  <i className="bx bx-left-arrow-alt"></i>
                </Link>
              </Magnetic>
              <Link href="/contactWeb" className="seo-btn seo-btn-ghost">
                تواصل معنا
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaBand;
