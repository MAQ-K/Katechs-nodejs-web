import React, { useEffect, useState } from "react";
import LabShell from "../../components/Lab/LabShell";
import { labGuard } from "../../utils/labData";

// The design system extracted from the Web Services page, in two halves:
//   TOKENS     — the --ds-* custom properties (styles/style.scss,
//                "=== DESIGN SYSTEM TOKENS ===")
//   COMPONENTS — the portable .ds-* class layer built from them
//                (styles/style.scss, "=== DESIGN SYSTEM — COMPONENT LAYER ===")
//
// Everything rendered below uses the REAL .ds-* classes, not a copy. If a rule
// changes in the stylesheet this page changes with it — which is the point of
// documenting a system inside the system rather than in a separate spec.
//
// Token VALUES are read from getComputedStyle at runtime rather than re-typed,
// for the same reason: a hand-copied hex list is how documentation quietly
// goes stale.

const TOKEN_GROUPS = {
  colour: [
    { v: "--ds-navy", label: "Navy", note: "primary ink + solid surfaces" },
    { v: "--ds-cyan", label: "Cyan", note: "accent — arrives on hover, rarely at rest" },
    { v: "--ds-muted", label: "Muted", note: "secondary text, labels" },
    { v: "--ds-heading", label: "Heading" },
    { v: "--ds-body", label: "Body text" },
    { v: "--ds-white", label: "White" },
    { v: "--ds-line", label: "Line", note: "hairline borders" },
    { v: "--ds-band", label: "Band", note: "neutral alternate ground" },
  ],
  radii: [
    { v: "--ds-r-card", label: "Card" },
    { v: "--ds-r-btn", label: "Button" },
    { v: "--ds-r-well", label: "Icon well" },
    { v: "--ds-r-pill", label: "Pill" },
  ],
  rhythm: [
    { v: "--ds-gap-section", label: "Section gap" },
    { v: "--ds-gap-area", label: "Area gap" },
  ],
};

const EXTRA_TOKENS = [
  "--ds-font",
  "--ds-h2",
  "--ds-body-size",
  "--ds-body-line",
  "--ds-eyebrow",
  "--ds-shadow-card",
  "--ds-shadow-card-hover",
  "--ds-shadow-lift",
];

const useTokens = () => {
  const [values, setValues] = useState({});
  useEffect(() => {
    const cs = getComputedStyle(document.documentElement);
    const next = {};
    Object.values(TOKEN_GROUPS)
      .flat()
      .forEach(({ v }) => {
        next[v] = cs.getPropertyValue(v).trim();
      });
    EXTRA_TOKENS.forEach((v) => {
      next[v] = cs.getPropertyValue(v).trim();
    });
    setValues(next);
  }, []);
  return values;
};

// Each block shows the live component and the class you write to get it.
const Block = ({ title, cls, note, children, ground }) => (
  <div className="dsl-block">
    <div className="dsl-block-head">
      <strong>{title}</strong>
      {cls ? <code>{cls}</code> : null}
    </div>
    {note ? <p className="dsl-block-note">{note}</p> : null}
    <div className={`dsl-stage${ground ? " is-band" : ""}`}>{children}</div>
    <style jsx>{`
      .dsl-block {
        margin: 0 0 34px;
      }
      .dsl-block-head {
        display: flex;
        align-items: baseline;
        gap: 10px;
        flex-wrap: wrap;
        margin-bottom: 4px;
      }
      .dsl-block-head strong {
        font-size: 14px;
      }
      .dsl-block-head code {
        font-size: 12px;
        color: var(--lab-dim);
      }
      .dsl-block-note {
        margin: 0 0 12px;
        font-size: 12.5px;
        color: var(--lab-dim);
        max-width: 660px;
      }
      .dsl-stage {
        padding: 24px;
        border: 1px solid var(--lab-line);
        border-radius: 10px;
        background: #fff;
      }
      .dsl-stage.is-band {
        background: #f5f6f8;
      }
    `}</style>
  </div>
);

const Section = ({ title, note, children }) => (
  <div className="dsl-section">
    <h2>{title}</h2>
    {note ? <p>{note}</p> : null}
    {children}
    <style jsx>{`
      .dsl-section {
        margin: 0 0 60px;
        padding-top: 8px;
        border-top: 2px solid var(--lab-line);
      }
      .dsl-section h2 {
        font-family: "Almarai", sans-serif;
        font-size: 19px;
        font-weight: 700;
        margin: 12px 0 6px;
      }
      .dsl-section > p {
        font-size: 13px;
        color: var(--lab-dim);
        max-width: 680px;
        margin: 0 0 24px;
      }
    `}</style>
  </div>
);

const DesignSystemLab = () => {
  const t = useTokens();

  return (
    <LabShell
      title="Design system"
      subtitle="Extracted from /services so every page can share one look. Tokens are read live from the stylesheet; every component below is the real .ds-* class, not a mockup — copy the class name and it works on any page."
    >
      {/* ================= TOKENS ================= */}
      <Section
        title="Colour"
        note="Cyan is an accent, not a resting colour — across the whole system it arrives on hover and rarely sits at rest on its own."
      >
        <div className="dsl-swatches">
          {TOKEN_GROUPS.colour.map(({ v, label, note }) => (
            <div key={v} className="dsl-swatch">
              <span
                className="dsl-swatch-fill"
                style={{
                  background: t[v] || "transparent",
                  border: v === "--ds-white" ? "1px solid #e3e6ea" : "none",
                }}
              />
              <strong>{label}</strong>
              <code>{v}</code>
              <span>{t[v] || "…"}</span>
              {note ? <em>{note}</em> : null}
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Typography"
        note="Almarai, everywhere. It is the single site-wide family as of 2026-09-02, replacing both Droid Arabic Kufi and Cairo. Note it ships only four weights — 300, 400, 700, 800 — so a rule asking for 500 renders at 400 and one asking for 600 renders at 700."
      >
        <Block title="Eyebrow" cls=".ds-eyebrow">
          <span className="ds-eyebrow">اختر ما يناسبك</span>
        </Block>
        <Block title="Heading" cls=".ds-h2">
          <h2 className="ds-h2">عنوان القسم الرئيسي</h2>
        </Block>
        <Block title="Sub-heading" cls=".ds-h3">
          <h3 className="ds-h3">عنوان فرعي داخل بطاقة</h3>
        </Block>
        <Block title="Body" cls=".ds-p">
          <p className="ds-p">
            نص أساسي للفقرات — نبني لك موقعًا يجعل عميلك يفهم من أنتم، وماذا
            تقدّمون، ولماذا يختاركم، خلال ثوانٍ.
          </p>
        </Block>
        <Block title="Note" cls=".ds-note">
          <p className="ds-note">نص صغير للملاحظات والتنبيهات تحت البطاقات.</p>
        </Block>
      </Section>

      <Section title="Radii">
        <div className="dsl-radii">
          {TOKEN_GROUPS.radii.map(({ v, label }) => (
            <div key={v} className="dsl-radius">
              <span style={{ borderRadius: t[v] || 0 }} />
              <strong>{label}</strong>
              <code>{v}</code>
              <em>{t[v] || "…"}</em>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Elevation"
        note="Layered emboss, not a single drop shadow — two outer layers for depth plus two insets faking a lit top edge and a shaded bottom. Cards use this INSTEAD of a border: at Arabic text sizes a hairline outline reads harder than the shadow does."
      >
        <div className="dsl-elev">
          <div className="dsl-elev-box" style={{ boxShadow: t["--ds-shadow-card"] }}>
            <code>--ds-shadow-card</code>
          </div>
          <div className="dsl-elev-box" style={{ boxShadow: t["--ds-shadow-card-hover"] }}>
            <code>--ds-shadow-card-hover</code>
          </div>
          <div className="dsl-elev-box" style={{ boxShadow: t["--ds-shadow-lift"] }}>
            <code>--ds-shadow-lift</code>
          </div>
        </div>
      </Section>

      <Section
        title="Rhythm"
        note="Two steps only. The area gap is several times the section gap so a page groups into areas first, sections second — a 2:1 ratio was tried and read as 'the same'."
      >
        {TOKEN_GROUPS.rhythm.map(({ v, label }) => (
          <div key={v} className="dsl-rhythm">
            <span>
              {label} <code>{v}</code> <em>{t[v] || "…"}</em>
            </span>
            <span className="dsl-rhythm-bar" style={{ width: t[v] || 0 }} />
          </div>
        ))}
      </Section>

      {/* ================= COMPONENTS ================= */}
      <Section
        title="Buttons"
        note="One dominant shape per view. .ds-btn is the base and carries no colour of its own — always pair it with a variant, so a half-applied style can never leave text at the wrong contrast."
      >
        <Block
          title="Primary — on light"
          cls=".ds-btn .ds-btn-solid"
          note="Navy at rest, cyan on hover."
        >
          <a href="#" onClick={(e) => e.preventDefault()} className="ds-btn ds-btn-solid">
            اطلب عرض سعر
          </a>
        </Block>
        <Block
          title="Primary — on dark"
          cls=".ds-btn .ds-btn-light"
          note="The inverse fill, so the dominant action stays dominant on a navy ground."
        >
          <div className="ds-cta">
            <a href="#" onClick={(e) => e.preventDefault()} className="ds-btn ds-btn-light">
              حلّل موقعي
            </a>
          </div>
        </Block>
        <Block title="Full width — in a card" cls=".ds-btn .ds-btn-solid .ds-btn-block">
          <div style={{ maxWidth: 260 }}>
            <a href="#" onClick={(e) => e.preventDefault()} className="ds-btn ds-btn-solid ds-btn-block">
              ابدأ الآن
            </a>
          </div>
        </Block>
        <Block
          title="Secondary"
          cls=".ds-link"
          note="Deliberately a link, not a second filled button — two dominant shapes split the decision and neither wins."
        >
          <a href="#" onClick={(e) => e.preventDefault()} className="ds-link">
            تحدث معنا أولاً
          </a>
        </Block>

        <Block
          title="New — Monochrome dark"
          cls=".ds-new-btn .ds-new-btn-dark"
          note="From design system stuff/inspirations — black at rest, dark grey on hover. Adapted from a Uiverse.io snippet (elements code.md), contrast bumped to white text for readability."
        >
          <a href="#" onClick={(e) => e.preventDefault()} className="ds-new-btn ds-new-btn-dark">
            Sign up here
          </a>
        </Block>
        <Block
          title="New — Monochrome outline (pairs with dark)"
          cls=".ds-new-btn .ds-new-btn-outline"
          note="The split-hero reference pairs this with the dark button above — one filled, one outlined, both black/grey instead of navy/cyan."
        >
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#" onClick={(e) => e.preventDefault()} className="ds-new-btn ds-new-btn-outline">
              Jump on a call
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="ds-new-btn ds-new-btn-dark">
              Sign up here
            </a>
          </div>
        </Block>
      </Section>

      <Section title="Cards">
        <Block
          title="Card"
          cls=".ds-card"
          note="Static by default. Add .ds-card-hover only when the card is actually a link — a card that lifts without being clickable implies an affordance it doesn't have."
          ground
        >
          <div className="ds-grid-3">
            <div className="ds-card">
              <span className="ds-icon">
                <i className="bx bx-buildings" aria-hidden="true"></i>
              </span>
              <h3 className="ds-h3">موقع تعريفي</h3>
              <p className="ds-note">شركة تريد حضورًا واضحًا على الإنترنت.</p>
              <ul className="ds-list ds-list-sm">
                <li>
                  <i className="bx bx-check" aria-hidden="true"></i>
                  <span>حتى 5 صفحات</span>
                </li>
                <li>
                  <i className="bx bx-check" aria-hidden="true"></i>
                  <span>تصميم مخصّص</span>
                </li>
              </ul>
              <div className="ds-card-foot">
                <a href="#" onClick={(e) => e.preventDefault()} className="ds-btn ds-btn-solid ds-btn-block">
                  اطلب عرض سعر
                </a>
              </div>
            </div>

            <div className="ds-card is-dark">
              <span className="ds-badge">الأكثر طلبًا</span>
              <span className="ds-icon">
                <i className="bx bx-been-here" aria-hidden="true"></i>
              </span>
              <h3 className="ds-h3">موقع شركة كامل</h3>
              <p className="ds-note">لعرض الخدمات والأعمال باحتراف.</p>
              <ul className="ds-list ds-list-sm">
                <li>
                  <i className="bx bx-check" aria-hidden="true"></i>
                  <span>كل ما في الباقة السابقة</span>
                </li>
                <li>
                  <i className="bx bx-check" aria-hidden="true"></i>
                  <span>لوحة تحكم للمحتوى</span>
                </li>
              </ul>
              <div className="ds-card-foot">
                <a href="#" onClick={(e) => e.preventDefault()} className="ds-btn ds-btn-solid ds-btn-block">
                  اطلب عرض سعر
                </a>
              </div>
            </div>

            <div className="ds-card ds-card-hover">
              <span className="ds-icon ds-icon-sm">
                <i className="bx bx-cart-alt" aria-hidden="true"></i>
              </span>
              <h3 className="ds-h3">بطاقة قابلة للنقر</h3>
              <p className="ds-note">
                هذه البطاقة ترتفع عند المرور عليها — <code>.ds-card-hover</code>
              </p>
            </div>
          </div>
        </Block>

        <Block
          title="Dark variant"
          cls=".ds-card.is-dark"
          note="For the one option you want chosen. Everything inside re-points automatically — heading, body, icon well, list ticks and the CTA all invert without being restated at the call site."
        />

        <Block
          title="New — Stat card"
          cls=".ds-new-stat-card"
          note="From inspirations/cards style.png — a thin real border instead of the emboss shadow, a kebab-menu header row, a big number with an up/down percentage pill, and a hairline-divided footer line."
          ground
        >
          <div className="ds-grid-3">
            <div className="ds-new-stat-card">
              <div className="ds-new-stat-head">
                <span>All Orders</span>
                <i className="bx bx-dots-horizontal-rounded" aria-hidden="true"></i>
              </div>
              <div className="ds-new-stat-value">
                122,380
                <span className="ds-new-stat-pill is-up">
                  <i className="bx bx-up-arrow-alt" aria-hidden="true"></i> 15.1%
                </span>
              </div>
              <p className="ds-new-stat-foot">
                Vs last month: <b>105,922</b>
              </p>
            </div>

            <div className="ds-new-stat-card">
              <div className="ds-new-stat-head">
                <span>Order Created</span>
                <i className="bx bx-dots-horizontal-rounded" aria-hidden="true"></i>
              </div>
              <div className="ds-new-stat-value">
                1.9M
                <span className="ds-new-stat-pill is-down">
                  <i className="bx bx-down-arrow-alt" aria-hidden="true"></i> 2%
                </span>
              </div>
              <p className="ds-new-stat-foot">
                Vs last month: <b>2.0M</b>
              </p>
            </div>

            <div className="ds-new-stat-card">
              <div className="ds-new-stat-head">
                <span>Active Users</span>
                <i className="bx bx-dots-horizontal-rounded" aria-hidden="true"></i>
              </div>
              <div className="ds-new-stat-value">
                48,210
                <span className="ds-new-stat-pill is-up">
                  <i className="bx bx-up-arrow-alt" aria-hidden="true"></i> 3.7%
                </span>
              </div>
              <p className="ds-new-stat-foot">
                Vs last month: <b>46,480</b>
              </p>
            </div>
          </div>
        </Block>

        <Block
          title="New — Image card"
          cls=".ds-new-media-card"
          note="From inspirations/img style.png — the image IS the card, a bottom gradient carries a title, a price/subtitle line and a floating white pill CTA."
          ground
        >
          <div className="ds-grid-2">
            <div
              className="ds-new-media-card"
              style={{
                backgroundImage:
                  "linear-gradient(160deg, #6084a4, #0a1f44)",
              }}
            >
              <div className="ds-new-media-card-body">
                <h3>Design Fundamentals</h3>
                <p>Starting at $29 per month</p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="ds-new-btn"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div
              className="ds-new-media-card"
              style={{
                backgroundImage:
                  "linear-gradient(160deg, #1dd3f8, #0a1f44)",
              }}
            >
              <div className="ds-new-media-card-body">
                <h3>Advanced Motion</h3>
                <p>Starting at $29 per month</p>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="ds-new-btn"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </Block>
      </Section>

      <Section title="Lists, badges and tags">
        <Block
          title="Ticked list"
          cls=".ds-list"
          note="The tick sits in a fixed well with a top margin rather than being vertically centred — an Arabic item that wraps to two lines keeps its tick on the first line instead of drifting to the middle."
        >
          <ul className="ds-list">
            <li>
              <i className="bx bx-check" aria-hidden="true"></i>
              <span>بنية ومحتوى نجهّزهما معك، لا نطلب منك تسليمنا كل شيء جاهزًا</span>
            </li>
            <li>
              <i className="bx bx-check" aria-hidden="true"></i>
              <span>سريع على الجوال ومهيّأ لمحركات البحث</span>
            </li>
          </ul>
        </Block>
        <Block title="Badge" cls=".ds-badge">
          <span className="ds-badge">الأكثر طلبًا</span>
        </Block>
        <Block title="Tags" cls=".ds-tag .is-high / .is-mid / .is-low">
          <span className="ds-tag is-high">عالية</span>{" "}
          <span className="ds-tag is-mid">متوسطة</span>{" "}
          <span className="ds-tag is-low">منخفضة</span>
        </Block>

        <Block
          title="New — Combo tag"
          cls=".ds-new-combo-tag .ds-new-combo-tag-part"
          note="From inspirations/tags style.png — a pill split into two parts by a hairline divider: a strong status word on one side, a plain descriptor on the other. .is-good / .is-bad colour the icon only, not the whole pill."
        >
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <span className="ds-new-combo-tag">
              <span className="ds-new-combo-tag-part is-strong is-good">
                <i className="bx bx-shield-alt-2" aria-hidden="true"></i>
                Protection
              </span>
              <span className="ds-new-combo-tag-part">
                <i className="bx bx-x-circle" aria-hidden="true"></i>
                SSO login
              </span>
            </span>

            <span className="ds-new-combo-tag">
              <span className="ds-new-combo-tag-part is-strong is-good">
                <i className="bx bx-check-circle" aria-hidden="true"></i>
                Live
              </span>
              <span className="ds-new-combo-tag-part">
                <i className="bx bx-x-circle" aria-hidden="true"></i>
                Audit trails
              </span>
            </span>

            <span className="ds-new-combo-tag">
              <span className="ds-new-combo-tag-part is-strong is-bad">
                <i className="bx bx-x-circle" aria-hidden="true"></i>
                Safety checks
              </span>
              <span className="ds-new-combo-tag-part">
                <i className="bx bx-shield-alt-2" aria-hidden="true"></i>
                Production
              </span>
            </span>
          </div>
        </Block>
      </Section>

      <Section title="Layout">
        <Block
          title="Split"
          cls=".ds-split"
          note="Media one side, copy the other. Put the media FIRST in the DOM: under RTL the grid places it left, so an Arabic reader meets the heading before the image — and below 991px it reorders so text still comes first when the columns stack."
          ground
        >
          <div className="ds-split">
            <div className="ds-frame">
              <div className="ds-frame-media">
                <div className="dsl-fake-img">صورة / وسائط</div>
              </div>
            </div>
            <div>
              <span className="ds-eyebrow">نظرة عامة</span>
              <h2 className="ds-h2">موقع يعكس حجم شركتك الحقيقي</h2>
              <p className="ds-p">
                نبدأ من نشاطك أنت: ماذا تقدّم، ولمن، ولماذا يختارك العميل.
              </p>
            </div>
          </div>
        </Block>

        <Block
          title="New — Bold split hero"
          cls=".ds-new-hero-split"
          note="From inspirations/split-img style.png — a plain outline pill instead of a coloured eyebrow, a much larger black headline, monochrome copy, and an outline+dark button pair instead of one dominant navy CTA. Right side is a flat placeholder plate, same idea as .ds-frame-media but undecorated."
          ground
        >
          <div className="ds-new-hero-split">
            <div>
              <span className="ds-new-hero-pill">We&apos;re live!</span>
              <h2>This is the start of something!</h2>
              <p>
                Managing a small business today is already tough. Avoid
                further complications by ditching outdated, tedious trade
                methods.
              </p>
              <div className="ds-new-hero-actions">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="ds-new-btn ds-new-btn-outline"
                >
                  Jump on a call
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="ds-new-btn ds-new-btn-dark"
                >
                  Sign up here
                </a>
              </div>
            </div>
            <div className="ds-new-hero-placeholder" />
          </div>
        </Block>

        <Block title="Media frame" cls=".ds-frame > .ds-frame-media" note="Outer plate plus inner media — what stops a raw image or an embedded iframe from reading as pasted onto the page." />
        <Block title="Grids" cls=".ds-grid-3 / .ds-grid-2" note="3-up collapsing to 2-up at 991px and 1-up at 575px." />
        <Block title="Section rhythm" cls=".ds-section / .ds-band / .ds-head" note=".ds-section sets vertical rhythm only and no ground of its own, so it sits on white or on .ds-band without fighting either." />
      </Section>

      <Section title="Accordion">
        <Block
          title="FAQ"
          cls=".ds-accordion"
          note="Shapes react-accessible-accordion (already a dependency). One rule in it is load-bearing: fancy-example.css is imported globally and draws its own chevron on ::before — without display:none every row shows two icons."
          ground
        >
          <div className="ds-accordion">
            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button" aria-expanded="true">
                  <span>كم تستغرق مدة تنفيذ الموقع؟</span>
                  <i className="bx bx-plus" aria-hidden="true"></i>
                </div>
              </div>
              <div className="accordion__panel">
                <p>
                  موقع تعريفي عادة من أسبوعين إلى ثلاثة أسابيع. نتفق على جدول
                  زمني واضح قبل البدء.
                </p>
              </div>
            </div>
            <div className="accordion__item">
              <div className="accordion__heading">
                <div className="accordion__button" aria-expanded="false">
                  <span>هل أقدر أطلب تعديلات بعد التسليم؟</span>
                  <i className="bx bx-plus" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </Block>
      </Section>

      <Section title="CTA band">
        <Block title="CTA" cls=".ds-cta">
          <div className="ds-cta">
            <h2>جاهز تبدأ مشروعك؟</h2>
            <p>أخبرنا باحتياجك ونرشّح لك الأنسب.</p>
            <a href="#" onClick={(e) => e.preventDefault()} className="ds-btn ds-btn-light">
              اطلب عرضًا
            </a>
          </div>
        </Block>
      </Section>

      <Section title="Segmented switch">
        <Block
          title="Switch"
          cls=".ds-switch"
          note="Buttons, not radio inputs — it changes a view, it doesn't submit a value, and radio semantics would mislead a screen reader."
          ground
        >
          <div className="ds-switch">
            <button type="button" className="is-active">
              ج.م
            </button>
            <button type="button">ر.س</button>
          </div>
        </Block>
      </Section>

      <Section
        title="Scroll"
        note="The site's signature scroll feel — the page eases toward where the wheel is pointing instead of jumping, and glides briefly after the gesture stops. useSmoothScroll.js also arms a push-to-cross mechanic between areas: a gesture at a boundary must be deliberate (~6 mouse notches) before it carries you across. Desktop only, off under reduced motion. Not a swatch — feel it live."
      >
        <div className="dsl-links">
          <a href="/services/" target="_blank" rel="noreferrer">
            /services/ — the reference implementation
          </a>
          <a href="/lab/area-transitions/">
            /lab/area-transitions/ — five boundary treatments built on it
          </a>
        </div>
      </Section>

      <style jsx>{`
        .dsl-swatches {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
        }
        .dsl-swatch {
          display: flex;
          flex-direction: column;
          gap: 2px;
          font-size: 12px;
        }
        .dsl-swatch-fill {
          height: 60px;
          border-radius: 10px;
          margin-bottom: 8px;
        }
        .dsl-swatch strong {
          font-size: 13px;
        }
        .dsl-swatch code,
        .dsl-swatch em {
          color: var(--lab-dim);
          font-style: normal;
        }

        .dsl-radii {
          display: flex;
          flex-wrap: wrap;
          gap: 24px;
        }
        .dsl-radius {
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 12px;
        }
        .dsl-radius span:first-child {
          width: 72px;
          height: 72px;
          background: #e3e6ea;
          margin-bottom: 4px;
        }
        .dsl-radius code,
        .dsl-radius em {
          color: var(--lab-dim);
          font-style: normal;
        }

        .dsl-elev {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          padding: 16px 4px;
        }
        .dsl-elev-box {
          width: 190px;
          height: 92px;
          border-radius: 16px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11.5px;
        }
        .dsl-elev-box code {
          color: var(--lab-dim);
        }

        .dsl-rhythm {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 14px;
          font-size: 12px;
          color: var(--lab-dim);
        }
        .dsl-rhythm-bar {
          height: 14px;
          max-width: 100%;
          border-radius: 4px;
          background: #1dd3f8;
        }

        .dsl-fake-img {
          aspect-ratio: 4 / 3;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #e6edf5;
          color: #6084a4;
          font-family: "Almarai", sans-serif;
          font-size: 14px;
        }

        .dsl-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
          font-size: 14px;
        }
        .dsl-links a {
          color: #1dd3f8;
        }
      `}</style>
    </LabShell>
  );
};

export async function getServerSideProps() {
  if (labGuard()) return { notFound: true };
  return { props: {} };
}

export default DesignSystemLab;
