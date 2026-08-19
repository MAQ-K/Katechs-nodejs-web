import React from "react";

// UX PROTOTYPE — real table semantics (thead/tbody/th scope) and horizontal
// scroll on narrow screens. Does double duty: practical (when can I start?)
// and urgency (seats remaining).
const rows = [1, 2, 3, 4];

const Schedule = () => {
  return (
    <section className="ux-section" id="schedule">
      <div className="container">
        <div className="ux-head ux-center">
          <h2 className="ux-h2">المواعيد القادمة</h2>
        </div>

        <div className="ux-flag">
          <strong>مطلوب من العميل:</strong> مواعيد الدفعات القادمة وعدد المقاعد
          الفعلي.
        </div>

        <div className="ux-table-wrap">
          <table className="ux-table">
            <thead>
              <tr>
                <th scope="col">الدورة</th>
                <th scope="col">تاريخ البدء</th>
                <th scope="col">النمط</th>
                <th scope="col">المقاعد المتبقية</th>
                <th scope="col">
                  <span className="ux-small">التسجيل</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((n) => (
                <tr key={n}>
                  <td>اسم الدورة</td>
                  <td>00/00/0000</td>
                  <td>مباشر</td>
                  <td>00</td>
                  <td>
                    <button type="button" className="ux-btn ux-btn-sm">
                      سجّل
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
