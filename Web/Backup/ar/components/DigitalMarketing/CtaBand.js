import React from "react";
import Link from "next/link";
import Reveal from "../Common/Reveal";
import Magnetic from "../Common/Magnetic";

const CtaBand = () => {
  return (
    <section className="dm-section dm-dark">
      <div className="container">
        <Reveal>
          <div className="dm-cta-band">
            <h2 className="dm-h2">لنبدأ بخطة، لا بإعلان</h2>

            <p className="dm-p" style={{ maxWidth: 520, marginInline: "auto" }}>
              أخبرنا عن نشاطك وأهدافك، ونعود إليك بخطة قنوات وميزانية مقترحة
              قبل أي التزام.
            </p>

            <div className="dm-actions dm-center" style={{ marginTop: 26 }}>
              <Magnetic>
                <Link href="/digital-market-order" className="dm-btn dm-btn-invert">
                  اطلب عرض سعر
                  <i className="bx bx-left-arrow-alt"></i>
                </Link>
              </Magnetic>
              <Link href="/contactWeb" className="dm-btn dm-btn-ghost">
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
