import React, { useId } from "react";
import { customProjectForm } from "../../data/home-new/data";

// The "تطوير مخصّص" tab's panel — a requirements form that hands off to
// WhatsApp rather than posting anywhere. There is no endpoint for it: the
// submit handler builds a message out of the filled fields and opens wa.me, so
// the user reviews and sends it themselves (that is what config.hint says).
//
// ---- DESIGN SYSTEM PASS (2026-09-23, user) ----
// Matches Homepage.dc.html: one bordered 16px card, two equal columns — pitch
// and contact details on one side, the fields stacked on the other. The design
// mocks six fields; this renders all seven from customProjectForm.fields,
// textarea included, because the form actually works and the seventh field is
// the one that carries the brief.
//
// ⚠️ The submit button is #fff on #1dd3f8 (~1.7:1) because that is what the
// design specifies, and it is the same CTA treatment the design uses in the
// hero and the nav. Raised with the user on 2026-09-23. If it should meet AA,
// the fix is the design's OTHER cyan pairing — #06222b on #1dd3f8 (~9:1),
// already used by the plan tabs and the popular-plan CTA.
export default function CustomProjectForm({ config = customProjectForm }) {
  const base = useId();
  const submit = (event) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const lines = config.fields
      .map((field) => {
        const value = String(values.get(field.name) || "").trim();
        return value ? `${field.label}: ${value}` : null;
      })
      .filter(Boolean);
    window.open(
      `${config.whatsapp}?text=${encodeURIComponent(
        [config.messageTitle, ...lines].join("\n")
      )}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="hp-custom" dir="rtl">
      <div className="hp-custom-intro">
        <h3>{config.heading}</h3>
        <p className="hp-custom-lead">{config.description}</p>
        <p className="hp-custom-label">{config.contactLabel}</p>
        <p className="hp-custom-phone" dir="ltr">
          {config.contactPhone}
        </p>
        <p className="hp-custom-label">{config.detailsLabel}</p>
        <p className="hp-custom-note">{config.detailsText}</p>
      </div>

      <form className="hp-custom-fields" onSubmit={submit}>
        {config.fields.map((field) => (
          <label key={field.name} htmlFor={`${base}-${field.name}`}>
            <span>
              {field.label}
              {field.required ? null : <small> ({config.optional})</small>}
            </span>
            {field.type === "textarea" ? (
              <textarea
                id={`${base}-${field.name}`}
                name={field.name}
                required={field.required}
                maxLength={field.maxLength}
                placeholder={field.placeholder}
                rows={3}
              />
            ) : (
              <input
                id={`${base}-${field.name}`}
                name={field.name}
                type={field.type || "text"}
                required={field.required}
                maxLength={field.maxLength}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                dir={field.type === "tel" ? "ltr" : "rtl"}
              />
            )}
          </label>
        ))}
        <button type="submit">{config.submitLabel}</button>
        <p className="hp-custom-hint">{config.hint}</p>
      </form>

      <style jsx>{`
        .hp-custom {
          border: 1px solid #e2e2e2;
          border-radius: 16px;
          background: #fff;
          padding: clamp(24px, 3vw, 40px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          box-shadow: 0 18px 40px -28px rgba(10, 31, 68, 0.35);
          font-family: "Cairo", system-ui, sans-serif;
        }
        .hp-custom-intro h3 {
          font: 800 clamp(22px, 2.6vw, 30px) / 1.4 "Cairo", system-ui, sans-serif;
          color: #212121;
          margin: 0 0 12px;
        }
        .hp-custom-lead {
          font-size: 15px;
          line-height: 1.95;
          color: #555;
          margin: 0 0 20px;
        }
        .hp-custom-label {
          font-size: 14px;
          font-weight: 700;
          color: #212121;
          margin: 0 0 6px;
        }
        .hp-custom-phone {
          font-size: 15px;
          color: #0f8fae;
          margin: 0 0 20px;
          text-align: right;
        }
        .hp-custom-note {
          font-size: 14px;
          line-height: 1.9;
          color: #555;
          margin: 0;
        }
        .hp-custom-fields {
          display: grid;
          gap: 12px;
          align-content: start;
          min-width: 0;
        }
        .hp-custom-fields label {
          display: grid;
          gap: 6px;
          font-family: "Cairo", system-ui, sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #444;
        }
        .hp-custom-fields small {
          font-weight: 400;
          color: #777;
        }
        .hp-custom-fields input,
        .hp-custom-fields textarea {
          min-height: 44px;
          width: 100%;
          border: 1px solid #d9d9d9;
          border-radius: 12px;
          background: #fff;
          padding: 10px 14px;
          font-family: "Almarai", system-ui, sans-serif;
          /* 16px, not the design's 14px: anything under 16px makes iOS Safari
             zoom the whole page on focus. The label above it carries the
             design's 13px, so the field still reads as secondary. */
          font-size: 16px;
          color: #212121;
        }
        .hp-custom-fields textarea {
          resize: vertical;
        }
        .hp-custom-fields input::placeholder,
        .hp-custom-fields textarea::placeholder {
          color: #8a8a8a;
        }
        .hp-custom-fields input:focus-visible,
        .hp-custom-fields textarea:focus-visible {
          outline: 2px solid #0a1f44;
          outline-offset: 2px;
        }
        .hp-custom-fields button {
          display: block;
          width: 100%;
          text-align: center;
          margin-top: 4px;
          padding: 14px 20px;
          border: 0;
          border-radius: 10px;
          background: #1dd3f8;
          color: #fff;
          font: 700 15px / 1 "Cairo", system-ui, sans-serif;
          cursor: pointer;
          transition: opacity 0.25s ease;
        }
        .hp-custom-fields button:hover {
          opacity: 0.88;
        }
        .hp-custom-fields button:focus-visible {
          outline: 2px solid #0a1f44;
          outline-offset: 3px;
        }
        .hp-custom-hint {
          font-size: 12.5px;
          color: #777;
          margin: 0;
          text-align: center;
        }
        @media (max-width: 767px) {
          .hp-custom {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
