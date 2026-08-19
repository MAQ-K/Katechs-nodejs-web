import React from "react";

// UX PROTOTYPE. De-risks the purchase for a first-time learner by showing what
// a course actually looks like from start to finish.
const steps = [
  { title: "الأساسيات", text: "تبدأ من الصفر دون افتراض خبرة سابقة." },
  { title: "تطبيق عملي", text: "تمارين بعد كل جزء، تطبّق ما تعلمته مباشرة." },
  { title: "مشروع تخرج", text: "مشروع كامل تبنيه بنفسك بإشراف المدرب." },
  { title: "الشهادة", text: "شهادة إتمام بعد تسليم المشروع النهائي." },
];

const LearningPath = () => {
  return (
    <section className="ux-section">
      <div className="container">
        <div className="ux-head ux-center">
          <span className="ux-eyebrow">مسار الدورة</span>
          <h2 className="ux-h2">كيف تسير الدورة من أولها لآخرها</h2>
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
      </div>
    </section>
  );
};

export default LearningPath;
