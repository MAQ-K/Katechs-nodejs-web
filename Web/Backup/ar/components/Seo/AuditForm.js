import React, { useState } from "react";

// UX PROTOTYPE — this one is genuinely interactive, because the interaction IS
// the thing being reviewed: validation, error state, and what the user sees
// after submitting. Nothing is sent anywhere yet; where it should submit is
// open question 4 in data/seo/structure.md.
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
    <section className="ux-section ux-alt" id="audit">
      <div className="container">
        <div className="ux-head ux-center">
          <h2 className="ux-h2">تحليل مجاني لموقعك</h2>
          <p className="ux-p">
            أرسل رابط موقعك ونرسل لك تقريرًا يوضح أهم ما يمنعه من الظهور، دون
            التزام.
          </p>
        </div>

        <div style={{ maxWidth: 640, marginInline: "auto" }}>
          {sent ? (
            <div className="ux-success" role="status">
              تم استلام طلبك — سنرسل التقرير إلى {email} خلال يوم عمل.
              <div className="ux-note">
                (نموذج تجريبي: لا يُرسل فعليًا بعد — راجع السؤال 4 في
                data/seo/structure.md)
              </div>
            </div>
          ) : (
            <form className="ux-form-row" onSubmit={handleSubmit} noValidate>
              <div className="ux-field">
                <label className="ux-label" htmlFor="ux-audit-site">
                  رابط الموقع
                </label>
                <input
                  id="ux-audit-site"
                  className={`ux-input${error && !site.trim() ? " ux-input-error" : ""}`}
                  type="text"
                  placeholder="example.com"
                  value={site}
                  onChange={(e) => setSite(e.target.value)}
                />
              </div>

              <div className="ux-field">
                <label className="ux-label" htmlFor="ux-audit-email">
                  البريد الإلكتروني
                </label>
                <input
                  id="ux-audit-email"
                  className="ux-input"
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button type="submit" className="ux-btn">
                أرسل التقرير
              </button>
            </form>
          )}

          {error && (
            <p className="ux-error" style={{ marginTop: 10 }} role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AuditForm;
