import React from "react";

// UX PROTOTYPE. For a paid B2C course this is a primary trust signal, second
// only to graduate outcomes.
const people = [1, 2, 3, 4];

const Instructors = () => {
  return (
    <section className="ux-section ux-alt">
      <div className="container">
        <div className="ux-head ux-center">
          <h2 className="ux-h2">من سيدرّبك</h2>
        </div>

        <div className="ux-flag">
          <strong>مطلوب من العميل:</strong> أسماء وصور وخبرات المدربين
          الحقيقيين. لن تُختلق أسماء أو خبرات.
        </div>

        <div className="ux-grid ux-grid-4">
          {people.map((n) => (
            <div className="ux-card" key={n} style={{ textAlign: "center", alignItems: "center" }}>
              <div
                className="ux-media"
                style={{ width: 88, height: 88, minHeight: 0, borderRadius: "50%", fontSize: 11, marginBottom: 14 }}
              >
                صورة
              </div>
              <h3 className="ux-h3">اسم المدرب</h3>
              <p className="ux-small">التخصص · سنوات الخبرة</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
