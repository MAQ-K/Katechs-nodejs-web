import React, { useMemo, useState } from "react";

// UX PROTOTYPE — the filtering here is genuinely wired up, because the
// filter → result-count → empty-state → load-more flow IS what needs
// reviewing. Card fields follow General Assembly's catalog (tag, title, short
// description, delivery method, duration) plus level / start date / price,
// which a paid B2C catalog needs.
//
// ⚠ The courses below are STRUCTURAL PLACEHOLDERS so the filtering can be
// exercised. They are not a proposed curriculum — the real course list is
// open question 1 in data/training/structure.md.
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
    <section className="ux-section" id="courses">
      <div className="container">
        <div className="ux-head">
          <h2 className="ux-h2">الدورات المتاحة</h2>
          <p className="ux-p">اختر المجال والمستوى ونمط التعلم الذي يناسبك.</p>
        </div>

        <div className="ux-flag">
          <strong>مطلوب من العميل:</strong> قائمة الدورات الحقيقية. الدورات
          المعروضة هنا عناصر تجريبية لاختبار الفلترة فقط — وليست منهجًا مقترحًا.
        </div>

        <div className="ux-filters">
          <div className="ux-field">
            <label className="ux-label" htmlFor="ux-f-field">المجال</label>
            <select id="ux-f-field" className="ux-select" value={field} onChange={onFilter(setField)}>
              <option>{ALL}</option>
              {FIELDS.map((f) => <option key={f}>{f}</option>)}
            </select>
          </div>

          <div className="ux-field">
            <label className="ux-label" htmlFor="ux-f-level">المستوى</label>
            <select id="ux-f-level" className="ux-select" value={level} onChange={onFilter(setLevel)}>
              <option>{ALL}</option>
              {LEVELS.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>

          <div className="ux-field">
            <label className="ux-label" htmlFor="ux-f-format">نمط التعلم</label>
            <select id="ux-f-format" className="ux-select" value={format} onChange={onFilter(setFormat)}>
              <option>{ALL}</option>
              {FORMATS.map((f) => <option key={f}>{f}</option>)}
            </select>
          </div>

          <button
            type="button"
            className="ux-btn ux-btn-secondary"
            onClick={reset}
            disabled={!isFiltered}
          >
            إعادة تعيين
          </button>
        </div>

        <p className="ux-filter-count" role="status">
          {filtered.length} دورة مطابقة
        </p>

        {filtered.length === 0 ? (
          <div className="ux-success">
            لا توجد دورات مطابقة لهذا الاختيار.
            <div className="ux-note">
              (حالة فارغة — جزء من تدفق الفلترة المطلوب مراجعته)
            </div>
          </div>
        ) : (
          <div className="ux-grid ux-grid-3">
            {visible.map((course) => (
              <div className="ux-card" key={course.id}>
                <div className="ux-tag-row">
                  <span className="ux-tag">{course.field}</span>
                  <span className="ux-tag">{course.level}</span>
                </div>

                <h3 className="ux-h3">{course.title}</h3>
                <p className="ux-p">
                  وصف مختصر للدورة في سطرين، يوضح ما سيتعلمه المتدرب وما الذي
                  سيكون قادرًا على فعله بعدها.
                </p>

                <div style={{ marginTop: "auto", paddingTop: 12 }}>
                  <p className="ux-small" style={{ marginBottom: 12 }}>
                    {course.format} · 00 ساعة · يبدأ 00/00
                  </p>

                  <div className="ux-actions">
                    <span className="ux-tag">السعر —</span>
                    <button type="button" className="ux-btn ux-btn-sm">
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
              className="ux-btn ux-btn-secondary"
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
