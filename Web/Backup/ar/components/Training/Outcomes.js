import React from "react";

// UX PROTOTYPE. The single strongest converter on a paid course page — and the
// one thing that absolutely cannot be written without the client.
const items = [1, 2, 3];

const Outcomes = () => {
  return (
    <section className="ux-section">
      <div className="container">
        <div className="ux-head ux-center">
          <h2 className="ux-h2">ماذا حقق خريجونا</h2>
        </div>

        <div className="ux-flag">
          <strong>مطلوب من العميل:</strong> آراء ونتائج خريجين حقيقية. لا
          تُختلق شهادات متدربين.
        </div>

        <div className="ux-grid ux-grid-3">
          {items.map((n) => (
            <div className="ux-card" key={n}>
              <p className="ux-p">
                نص رأي المتدرب — ما الذي كان يريده قبل الدورة، وما الذي استطاع
                فعله بعدها.
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginTop: "auto",
                  paddingTop: 16,
                }}
              >
                <div
                  className="ux-media"
                  style={{ width: 42, height: 42, minHeight: 0, borderRadius: "50%", fontSize: 10, padding: 0 }}
                >
                  صورة
                </div>
                <div>
                  <p className="ux-h3" style={{ margin: 0, fontSize: 14 }}>اسم الخريج</p>
                  <p className="ux-small" style={{ margin: 0 }}>الدورة · النتيجة</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
