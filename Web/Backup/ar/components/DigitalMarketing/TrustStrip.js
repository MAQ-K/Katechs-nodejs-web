import React from "react";

// UX PROTOTYPE. WebFX puts social proof immediately after the hero; across
// every source the markers that work are client logos, verified review scores
// and concrete numbers — not vague promises.
const logos = [1, 2, 3, 4, 5];

const TrustStrip = () => {
  return (
    <section className="ux-section ux-alt">
      <div className="container">
        <div className="ux-flag">
          <strong>مطلوب من العميل:</strong> شعارات عملاء حقيقية أو أرقام
          موثقة. لن يُكتب أي رقم هنا دون بيانات فعلية.
        </div>

        <p className="ux-small" style={{ textAlign: "center", marginBottom: 18 }}>
          عملاء نعمل معهم
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 14,
            justifyContent: "center",
          }}
        >
          {logos.map((n) => (
            <div
              key={n}
              className="ux-media"
              style={{ minHeight: 72, width: 150, fontSize: 12 }}
            >
              شعار
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
