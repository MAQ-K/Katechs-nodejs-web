import React from "react";

// UX PROTOTYPE. These four steps are NOT invented — they are already written
// in components/Services/digital-service.js and reused verbatim.
const steps = [
  {
    title: "دراسة السوق والمنافسين",
    text: "نفهم أين يقف سوقك ومن ينافسك وعلى ماذا ينفقون.",
  },
  {
    title: "تحديد الجمهور المستهدف بدقة",
    text: "نحدد من نخاطب بالضبط، بدل الإنفاق على جمهور عام.",
  },
  {
    title: "اختيار القنوات الأنسب",
    text: "نختار القنوات التي يوجد فيها جمهورك، لا كل القنوات.",
  },
  {
    title: "تنفيذ الحملات ومتابعتها",
    text: "تنفيذ حملات مدفوعة وعضوية، مع تحسين مستمر حسب النتائج.",
  },
];

const Strategy = () => {
  return (
    <section className="ux-section ux-alt" id="strategy">
      <div className="container">
        <div className="ux-head ux-center">
          <span className="ux-eyebrow">الاستراتيجية</span>
          <h2 className="ux-h2">نبدأ كل مشروع بفهم عميق لأهدافك</h2>
        </div>

        <div className="ux-grid ux-grid-4">
          {steps.map((step, i) => (
            <div className="ux-card" key={step.title}>
              <span className="ux-step-num">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="ux-h3">{step.title}</h3>
              <p className="ux-p">{step.text}</p>
            </div>
          ))}
        </div>

        <p className="ux-note">
          عناوين الخطوات مكتوبة فعليًا في components/Services/digital-service.js
        </p>
      </div>
    </section>
  );
};

export default Strategy;
