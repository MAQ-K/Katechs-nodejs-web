import React from "react";

// UX PROTOTYPE. Wording depends on whether the certificate is accredited by a
// third party or issued by KaTechs — open question 5 in
// data/training/structure.md. Deliberately worded as "شهادة إتمام" only, since
// claiming accreditation without confirmation would be a false claim.
const points = [
  "تُمنح بعد تسليم المشروع النهائي، لا بمجرد الحضور",
  "تحمل اسم الدورة وعدد ساعاتها",
  "نسخة رقمية يمكن إضافتها لملفك المهني",
];

const Certificate = () => {
  return (
    <section className="ux-section ux-alt">
      <div className="container">
        <div className="ux-split">
          <div>
            <h2 className="ux-h2">شهادة إتمام عند نهاية الدورة</h2>

            <p className="ux-p">
              الشهادة ليست ورقة حضور — تُمنح بعد إنجاز المشروع النهائي
              واستيفاء متطلبات الدورة.
            </p>

            <ul className="ux-list">
              {points.map((text) => (
                <li key={text}>{text}</li>
              ))}
            </ul>

            <p className="ux-note">
              سؤال مفتوح: هل الشهادة معتمدة من جهة خارجية أم صادرة من كاتكس؟
              الصياغة الحالية لا تدّعي أي اعتماد خارجي.
            </p>
          </div>

          <div>
            <div className="ux-media">مساحة صورة — نموذج الشهادة</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
