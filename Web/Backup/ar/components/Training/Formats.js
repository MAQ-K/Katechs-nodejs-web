import React from "react";

// UX PROTOTYPE. Across the 2026 bootcamp roundups, delivery format is the axis
// buyers actually compare providers on, so it gets its own block.
const formats = [
  {
    title: "مباشر مع مدرب",
    text: "محاضرات حيّة بمواعيد ثابتة مع مجموعة، وتفاعل مباشر مع المدرب.",
    fit: "يناسب من يحتاج التزامًا وجدولًا واضحًا",
  },
  {
    title: "ذاتي مع إرشاد فردي",
    text: "تدرس حسب وقتك، مع جلسات فردية دورية مع مرشد يتابع تقدمك.",
    fit: "يناسب الموظفين وأصحاب الوقت غير المنتظم",
  },
  {
    title: "حضوري",
    text: "تدريب في مقر التدريب، بتفاعل مباشر مع المدرب وزملائك.",
    fit: "يناسب من يفضّل التعلم وجهًا لوجه",
  },
];

const Formats = () => {
  return (
    <section className="ux-section ux-alt">
      <div className="container">
        <div className="ux-head ux-center">
          <h2 className="ux-h2">اختر النمط الذي يناسب وقتك</h2>
        </div>

        <div className="ux-grid ux-grid-3">
          {formats.map((item) => (
            <div className="ux-card" key={item.title}>
              <span className="ux-icon" aria-hidden="true"></span>
              <h3 className="ux-h3">{item.title}</h3>
              <p className="ux-p">{item.text}</p>
              <p className="ux-small" style={{ marginTop: "auto", paddingTop: 8 }}>
                {item.fit}
              </p>
            </div>
          ))}
        </div>

        <p className="ux-note">
          سؤال مفتوح: هل الأنماط الثلاثة متوفرة فعلًا؟ يُحذف ما لا ينطبق.
        </p>
      </div>
    </section>
  );
};

export default Formats;
