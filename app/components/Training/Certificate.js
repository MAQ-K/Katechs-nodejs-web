import React from "react";
import Reveal from "../Common/Reveal";

// Visual pass — split layout, same pattern as components/Seo/AiSearch.js,
// with an illustrative certificate-seal mock instead of a placeholder photo
// (no real certificate design exists yet). Copy unchanged — accreditation
// wording stays open per the note.
const points = [
  "تُمنح بعد تسليم المشروع النهائي، لا بمجرد الحضور",
  "تحمل اسم الدورة وعدد ساعاتها",
  "نسخة رقمية يمكن إضافتها لملفك المهني",
];

const Certificate = () => {
  return (
    <section className="tr-section tr-alt">
      <div className="container">
        <div className="tr-split">
          <div>
            <Reveal delay={0.05}>
              <h2 className="tr-h2">شهادة إتمام عند نهاية الدورة</h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="tr-p">
                الشهادة ليست ورقة حضور — تُمنح بعد إنجاز المشروع النهائي
                واستيفاء متطلبات الدورة.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <ul className="tr-list" style={{ marginTop: 20 }}>
                {points.map((text) => (
                  <li key={text}>
                    <i className="bx bx-check"></i>
                    {text}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="tr-note">
                سؤال مفتوح: هل الشهادة معتمدة من جهة خارجية أم صادرة من
                كاتكس؟ الصياغة الحالية لا تدّعي أي اعتماد خارجي.
              </p>
            </Reveal>
          </div>

          <div>
            <Reveal>
              <div className="tr-media-panel">
                <div className="tr-cert-card">
                  <span className="tr-cert-seal">
                    <i className="bx bx-medal"></i>
                  </span>
                  <div className="tr-skel-line w80" style={{ marginInline: "auto" }}></div>
                  <div className="tr-skel-line w60" style={{ marginInline: "auto" }}></div>
                  <div className="tr-cert-line"></div>
                  <div className="tr-cert-foot">
                    <span>اسم المتدرب</span>
                    <span>KaTechs</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
