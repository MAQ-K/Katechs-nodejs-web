import React from "react";

// UX PROTOTYPE.
const steps = [
  {
    title: "تحليل الموقع والمنافسين",
    text: "نفحص موقعك ونقارنه بمن يتصدّر أمامك، ونحدد الفجوات.",
  },
  {
    title: "استراتيجية وكلمات مفتاحية",
    text: "نتفق على العبارات المستهدفة وخطة الصفحات قبل أي تنفيذ.",
  },
  {
    title: "التنفيذ والتحسين",
    text: "عمل فعلي على الموقع: التقني، المحتوى، الروابط.",
  },
  {
    title: "التقارير والمتابعة",
    text: "تقرير شهري يوضح ما نُفّذ وما تغيّر في الترتيب والزيارات.",
  },
];

const Process = () => {
  return (
    <section className="ux-section ux-alt" id="process">
      <div className="container">
        <div className="ux-head ux-center">
          <span className="ux-eyebrow">كيف نعمل</span>
          <h2 className="ux-h2">أربع مراحل واضحة من أول يوم</h2>
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

export default Process;
