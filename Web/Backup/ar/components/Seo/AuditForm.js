import React, { useState } from "react";
import Reveal from "../Common/Reveal";
import Magnetic from "../Common/Magnetic";

// Visual pass — from brain/ui-library/inspiration/seo page/2ndsec.png: one
// bordered bar holding the field(s) and the submit button, not separate
// labelled fields stacked above a detached button. Interaction logic
// unchanged from the UX prototype.
const AuditForm = () => {
  const [site, setSite] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!site.trim()) {
      setError("أدخل رابط موقعك");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("أدخل بريدًا إلكترونيًا صحيحًا");
      return;
    }

    setError("");
    setSent(true);
  };

  return (
    <section className="seo-section seo-dark" id="audit">
      <div className="container">
        <Reveal>
          <div className="seo-head seo-center">
            <span className="seo-eyebrow">
              <span className="dot"></span>
              مجاني وبدون التزام
            </span>
            <h2 className="seo-h2">تحليل مجاني لموقعك</h2>
            <p className="seo-p">
              أرسل رابط موقعك ونرسل لك تقريرًا يوضح أهم ما يمنعه من الظهور،
              دون التزام.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ maxWidth: 640, marginInline: "auto" }}>
            {sent ? (
              <div className="seo-success" role="status">
                تم استلام طلبك — سنرسل التقرير إلى {email} خلال يوم عمل.
                <div className="seo-note">
                  (نموذج تجريبي: لا يُرسل فعليًا بعد — راجع السؤال 4 في
                  data/seo/structure.md)
                </div>
              </div>
            ) : (
              <form
                className={`seo-audit-bar${
                  error ? " seo-audit-bar-error" : ""
                }`}
                onSubmit={handleSubmit}
                noValidate
              >
                <div className="seo-audit-bar-field">
                  <label className="visually-hidden" htmlFor="seo-audit-site">
                    رابط الموقع
                  </label>
                  <input
                    id="seo-audit-site"
                    type="text"
                    placeholder="رابط موقعك — example.com"
                    value={site}
                    onChange={(e) => setSite(e.target.value)}
                  />
                </div>

                <div className="seo-audit-bar-field">
                  <label className="visually-hidden" htmlFor="seo-audit-email">
                    البريد الإلكتروني
                  </label>
                  <input
                    id="seo-audit-email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <Magnetic>
                  <button type="submit" className="seo-audit-bar-submit">
                    أرسل التقرير
                    <i className="bx bx-left-arrow-alt"></i>
                  </button>
                </Magnetic>
              </form>
            )}

            {error && (
              <p className="seo-error" style={{ marginTop: 10 }} role="alert">
                {error}
              </p>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default AuditForm;
