import React from "react";

// UX PROTOTYPE. WebFX devotes a large block to "agency vs in-house", because
// that — not another agency — is the real competing option for this buyer.
const reasons = [
  {
    title: "فريق كامل بتكلفة أقل من توظيف واحد",
    text: "تحصل على مصمم وكاتب محتوى ومختص إعلانات بدل راتب موظف واحد.",
  },
  {
    title: "تبدأ فورًا",
    text: "لا وقت توظيف ولا تدريب — الفريق جاهز ويعرف ما يفعله.",
  },
  {
    title: "خبرة من قطاعات مختلفة",
    text: "نرى ما ينجح في أسواق متعددة وننقل ذلك إلى حملتك.",
  },
  {
    title: "تحدد مستوى مشاركتك",
    text: "تتابع بالتفصيل أو تتركها علينا وتستلم التقارير فقط.",
  },
  {
    title: "ميزانيتك تذهب للإعلان لا للرواتب",
    text: "نسبة أكبر من إنفاقك تصل فعلًا إلى جمهورك المستهدف.",
  },
  {
    title: "خدمات مترابطة تحت سقف واحد",
    text: "الموقع والسيو والإعلانات والمحتوى تُدار معًا بدل تفرقها بين جهات.",
  },
];

const WhyUs = () => {
  return (
    <section className="ux-section ux-alt">
      <div className="container">
        <div className="ux-head">
          <h2 className="ux-h2">لماذا وكالة بدل فريق داخلي؟</h2>
          <p className="ux-p">
            المقارنة الحقيقية ليست بيننا وبين وكالة أخرى، بل بين الاستعانة بنا
            وبناء فريق داخلي.
          </p>
        </div>

        <div className="ux-grid ux-grid-3">
          {reasons.map((item) => (
            <div className="ux-card" key={item.title}>
              <span className="ux-icon" aria-hidden="true"></span>
              <h3 className="ux-h3">{item.title}</h3>
              <p className="ux-p">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
