import React from "react";
import Link from "next/link";

// ⚠️ TRANSLATED + RE-LAID-OUT 2026-09-08 (user: "change icons & fix layout").
// This form was entirely in English on an otherwise Arabic RTL site — flagged
// but deliberately left untouched by an earlier styling pass (see the NOTE
// comment above `.user-area-all-style` in styles/style.scss: "these three
// pages are still entirely in English... deliberately left alone here — this
// pass only makes them look like the rest of the site"). Translating fixes a
// real RTL bug too: English text inside this page's RTL context was
// rendering "Login to your account!" as "!Login To Your Account" — the
// exclamation mark landing at the START because there was no real Arabic
// content to set the reading direction naturally.
//
// The three social buttons kept their brand names in Latin script (Google /
// Facebook / Twitter) — universal convention in Arabic UI, not an oversight.
//
// ---- the icons ----
// bx bxl-google / bxl-facebook / bxl-twitter all render real glyphs — checked
// against styles/boxicons.min.css and confirmed visually (this project has a
// documented history of bxs-* solid icons existing in CSS with no glyph in
// the bundled font; these are a different prefix, bxl-* brand icons, and were
// verified separately rather than assumed safe by association).
//
// ---- the layout ----
// The three social buttons used to be Bootstrap `col-lg-4` columns, each
// holding a shrink-to-fit `.default-btn`. Three equal-width GRID columns does
// not mean three EVENLY SPACED buttons: with no explicit button width, each
// button sits at its own column's start edge (the RIGHT edge, in this RTL
// row), so the visible gaps between buttons ended up uneven — screenshotted
// before touching this, the gap between the middle and last button was
// visibly wider than between the first two. Replaced with a plain flex row,
// `.social-login-row`, three equal-width flex items — see styles/style.scss.
// ⚠️ Still NOT real OAuth: the three links still point at
// google.com/facebook.com/twitter.com's plain homepages, same as before. That
// is a functionality gap this task did not ask to close, and wiring real
// OAuth needs backend credentials this session does not have — flagged, not
// silently faked further.
const LoginForm = () => {
  return (
    <div className="user-area-all-style log-in-area ptb-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="contact-form-action">
              <div className="form-heading text-center">
                <h3 className="form-title">تسجيل الدخول إلى حسابك</h3>
              </div>

              <form>
                <div className="social-login-row">
                  <a
                    href="https://www.google.com/"
                    className="default-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-google"></i> Google
                  </a>

                  <a
                    href="https://www.facebook.com/"
                    className="default-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-facebook"></i> Facebook
                  </a>

                  <a
                    href="https://www.twitter.com/"
                    className="default-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bx bxl-twitter"></i> Twitter
                  </a>
                </div>

                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        name="name"
                        placeholder="اسم المستخدم أو البريد الإلكتروني"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <input
                        className="form-control"
                        type="password"
                        name="password"
                        placeholder="كلمة المرور"
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6 form-condition">
                    <div className="agree-label">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="gridCheck"
                        >
                          تذكرني
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6">
                    <Link href="/auth/recover-password" className="forget">
                      هل نسيت كلمة المرور؟
                    </Link>
                  </div>

                  <div className="col-12">
                    <button className="default-btn btn-two" type="submit">
                      تسجيل الدخول
                    </button>
                  </div>

                  <div className="col-12">
                    <p className="account-desc">
                      ليس لديك حساب؟
                      <Link href="/auth/sign-up">إنشاء حساب</Link>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
