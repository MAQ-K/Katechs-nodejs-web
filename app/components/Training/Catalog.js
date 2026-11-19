import React, { useMemo, useState } from "react";
import Reveal from "../Common/Reveal";

// Visual pass — the filtering logic is unchanged (this IS what needs
// reviewing), only the skin moved from .ux-* to .tr-*. Card fields follow
// the same structure as before: tag row, title, short description,
// format/duration/start, price + register.
//
// ⚠ The courses below are STRUCTURAL PLACEHOLDERS so the filtering can be
// exercised. Not a proposed curriculum — real course list is open question 1
// in data/training/structure.md.
const PLACEHOLDER_COURSES = [
  { id: 1, title: "دورة تجريبية أ", field: "برمجة", level: "مبتدئ", format: "مباشر" },
  { id: 2, title: "دورة تجريبية ب", field: "برمجة", level: "متوسط", format: "ذاتي" },
  { id: 3, title: "دورة تجريبية ج", field: "تسويق", level: "مبتدئ", format: "مباشر" },
  { id: 4, title: "دورة تجريبية د", field: "تسويق", level: "متقدم", format: "حضوري" },
  { id: 5, title: "دورة تجريبية هـ", field: "تصميم", level: "مبتدئ", format: "ذاتي" },
  { id: 6, title: "دورة تجريبية و", field: "تصميم", level: "متوسط", format: "مباشر" },
  { id: 7, title: "دورة تجريبية ز", field: "برمجة", level: "متقدم", format: "حضوري" },
  { id: 8, title: "دورة تجريبية ح", field: "تسويق", level: "متوسط", format: "ذاتي" },
];

const FIELDS = ["برمجة", "تسويق", "تصميم"];
const LEVELS = ["مبتدئ", "متوسط", "متقدم"];
const FORMATS = ["مباشر", "ذاتي", "حضوري"];
const PAGE_SIZE = 6;

const ALL = "الكل";

const Catalog = () => {
  const [field, setField] = useState(ALL);
  const [level, setLevel] = useState(ALL);
  const [format, setFormat] = useState(ALL);
  const [shown, setShown] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    return PLACEHOLDER_COURSES.filter(
      (c) =>
        (field === ALL || c.field === field) &&
        (level === ALL || c.level === level) &&
        (format === ALL || c.format === format)
    );
  }, [field, level, format]);

  const reset = () => {
    setField(ALL);
    setLevel(ALL);
    setFormat(ALL);
    setShown(PAGE_SIZE);
  };

  const onFilter = (setter) => (e) => {
    setter(e.target.value);
    setShown(PAGE_SIZE);
  };

  const visible = filtered.slice(0, shown);
  const isFiltered = field !== ALL || level !== ALL || format !== ALL;

  return (
    <section className="tr-section" id="courses">
      <div className="container">
        <Reveal>
          <div className="tr-head">
            <h2 className="tr-h2">الدورات المتاحة</h2>
            <p className="tr-p">اختر المجال والمستوى ونمط التعلم الذي يناسبك.</p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="tr-flag">
            <div>
              <strong>مطلوب من العميل:</strong> قائمة الدورات الحقيقية.
              الدورات المعروضة هنا عناصر تجريبية لاختبار الفلترة فقط — وليست
              منهجًا مقترحًا.
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="tr-filters">
            <div className="tr-field">
              <label className="tr-label" htmlFor="tr-f-field">
                المجال
              </label>
              <select
                id="tr-f-field"
                className="tr-select"
                value={field}
                onChange={onFilter(setField)}
              >
                <option>{ALL}</option>
                {FIELDS.map((f) => (
                  <option key={f}>{f}</option>
                ))}
              </select>
            </div>

            <div className="tr-field">
              <label className="tr-label" htmlFor="tr-f-level">
                المستوى
              </label>
              <select
                id="tr-f-level"
                className="tr-select"
                value={level}
                onChange={onFilter(setLevel)}
              >
                <option>{ALL}</option>
                {LEVELS.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </div>

            <div className="tr-field">
              <label className="tr-label" htmlFor="tr-f-format">
                نمط التعلم
              </label>
              <select
                id="tr-f-format"
                className="tr-select"
                value={format}
                onChange={onFilter(setFormat)}
              >
                <option>{ALL}</option>
                {FORMATS.map((f) => (
                  <option key={f}>{f}</option>
                ))}
              </select>
            </div>

            <button
              type="button"
              className="tr-btn tr-btn-ghost"
              onClick={reset}
              disabled={!isFiltered}
            >
              إعادة تعيين
            </button>
          </div>
        </Reveal>

        <p className="tr-filter-count" role="status">
          {filtered.length} دورة مطابقة
        </p>

        {filtered.length === 0 ? (
          <div className="tr-empty">
            لا توجد دورات مطابقة لهذا الاختيار.
            <div className="tr-note">
              (حالة فارغة — جزء من تدفق الفلترة المطلوب مراجعته)
            </div>
          </div>
        ) : (
          <div className="tr-grid">
            {visible.map((course) => (
              <div className="tr-card" key={course.id}>
                <div className="tr-tag-row">
                  <span className="tr-tag">{course.field}</span>
                  <span className="tr-tag">{course.level}</span>
                </div>

                <h3 className="tr-h3">{course.title}</h3>
                <p className="tr-p">
                  وصف مختصر للدورة في سطرين، يوضح ما سيتعلمه المتدرب وما
                  الذي سيكون قادرًا على فعله بعدها.
                </p>

                <div style={{ marginTop: "auto", paddingTop: 12 }}>
                  <p className="tr-fit" style={{ marginBottom: 12 }}>
                    {course.format} · 00 ساعة · يبدأ 00/00
                  </p>

                  <div className="tr-actions">
                    <span className="tr-tag">السعر —</span>
                    <button type="button" className="tr-btn tr-btn-sm">
                      سجّل
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {shown < filtered.length && (
          <div style={{ textAlign: "center", marginTop: 24 }}>
            <button
              type="button"
              className="tr-btn tr-btn-ghost"
              onClick={() => setShown((s) => s + PAGE_SIZE)}
            >
              عرض المزيد ({filtered.length - shown})
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalog;
