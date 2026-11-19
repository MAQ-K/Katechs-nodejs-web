import React from "react";
import Reveal from "../Common/Reveal";
import Magnetic from "../Common/Magnetic";

// Visual pass — real table semantics kept (thead/tbody/th scope), skinned
// to match the tr- design system. Copy unchanged.
const rows = [1, 2, 3, 4];

const Schedule = () => {
  return (
    <section className="tr-section" id="schedule">
      <div className="container">
        <Reveal>
          <div className="tr-head tr-center">
            <h2 className="tr-h2">المواعيد القادمة</h2>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="tr-flag" style={{ display: "flex", marginInline: "auto", maxWidth: 640 }}>
            <div>
              <strong>مطلوب من العميل:</strong> مواعيد الدفعات القادمة وعدد
              المقاعد الفعلي.
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="tr-table-wrap">
            <table className="tr-table">
              <thead>
                <tr>
                  <th scope="col">الدورة</th>
                  <th scope="col">تاريخ البدء</th>
                  <th scope="col">النمط</th>
                  <th scope="col">المقاعد المتبقية</th>
                  <th scope="col">
                    <span>التسجيل</span>
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
                      <Magnetic>
                        <button type="button" className="tr-btn tr-btn-sm">
                          سجّل
                        </button>
                      </Magnetic>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Schedule;
