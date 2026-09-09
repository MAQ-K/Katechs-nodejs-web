import React, { useId } from "react";
import { customProjectForm } from "../../data/home-new/data";

export default function CustomProjectForm({ config = customProjectForm }) {
  const base = useId();
  const submit = (event) => {
    event.preventDefault();
    const values = new FormData(event.currentTarget);
    const lines = config.fields.map((field) => {
      const value = String(values.get(field.name) || "").trim();
      return value ? `${field.label}: ${value}` : null;
    }).filter(Boolean);
    window.open(`${config.whatsapp}?text=${encodeURIComponent([config.messageTitle, ...lines].join("\n"))}`, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="hp-custom-layout">
      <div className="hp-custom-intro" dir="rtl">
        <h3>{config.heading}</h3>
        <p>{config.description}</p>
        <a className="hp-custom-contact" href={config.whatsapp} target="_blank" rel="noopener noreferrer">
          <span className="hp-custom-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></svg>
          </span>
          <span><strong>{config.contactLabel}</strong><span dir="ltr">{config.contactPhone}</span></span>
        </a>
        <div className="hp-custom-details"><h4>{config.detailsLabel}</h4><p>{config.detailsText}</p></div>
      </div>
    <form className="hp-custom-form" onSubmit={submit} dir="rtl">
      <div className="hp-custom-fields">
        {config.fields.map((field) => (
          <div key={field.name} className={field.type === "textarea" ? "hp-custom-field is-wide" : "hp-custom-field"}>
            <label htmlFor={`${base}-${field.name}`}>
              {field.label} {field.required ? <span aria-hidden="true">*</span> : <small>({config.optional})</small>}
            </label>
            {field.type === "textarea" ? (
              <textarea id={`${base}-${field.name}`} name={field.name} required={field.required} maxLength={field.maxLength} placeholder={field.placeholder} rows={2} />
            ) : (
              <input id={`${base}-${field.name}`} name={field.name} type={field.type || "text"} required={field.required} maxLength={field.maxLength} autoComplete={field.autoComplete} placeholder={field.placeholder} dir={field.type === "tel" ? "ltr" : "rtl"} />
            )}
          </div>
        ))}
      </div>
      <div className="hp-custom-actions">
        <button type="submit" className="default-btn">{config.submitLabel}</button>
        <p>{config.hint}</p>
      </div>
    </form>
      <style jsx>{`
        .hp-custom-layout { display: grid; grid-template-columns: 1fr 1.15fr; direction: ltr; background: #fff; font-family: "Cairo", sans-serif; text-align: right; }
        .hp-custom-intro { padding: 24px; }
        .hp-custom-intro h3 { margin: 0 0 16px; font-family: inherit; font-size: clamp(28px, 3vw, 42px); font-weight: 800; color: #111; line-height: 1.4; }
        .hp-custom-intro p { color: #666; font-size: 15px; line-height: 1.95; margin: 0; }
        .hp-custom-contact { display: flex; align-items: center; gap: 14px; margin-top: 20px; color: #161616; width: fit-content; }
        .hp-custom-contact strong { display: block; font-size: 14px; margin-bottom: 4px; }
        .hp-custom-contact span[dir] { display: block; font-size: 13px; color: #666; }
        .hp-custom-icon { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 10px; background: #fafafa; }
        .hp-custom-contact:focus-visible { outline: 2px solid #0a1f44; outline-offset: 4px; }
        .hp-custom-details { margin-top: 20px; max-width: 400px; }
        .hp-custom-details h4 { font-family: inherit; font-weight: 700; font-size: 15px; margin: 0 0 8px; color: #161616; }
        .hp-custom-form { min-width: 0; padding: 18px; border-left: 1px solid #eee; background: #fafafa; }
        .hp-custom-fields { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 12px; }
        .hp-custom-field { min-width: 0; }
        .is-wide { grid-column: 1 / -1; }
        label { display: block; margin-bottom: 6px; color: #212121; font-size: 13px; font-weight: 600; }
        small { color: #606060; font-weight: 400; }
        input, textarea { width: 100%; min-height: 44px; padding: 8px 10px; border: 1px solid #e1e1e1; border-radius: 8px; background: #fff; color: #212121; font: inherit; font-size: 16px; }
        textarea { resize: vertical; }
        input::placeholder, textarea::placeholder { color: #6b7280; }
        input:focus, textarea:focus { outline: 2px solid #0a1f44; outline-offset: 2px; }
        .hp-custom-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-top: 12px; }
        .hp-custom-actions button { width: 100%; border: 0; border-radius: 8px; background: #171717; color: #fff; font-family: inherit; }
        .hp-custom-actions button:hover { background: #303030; }
        .hp-custom-actions button:focus-visible { outline: 2px solid #0a1f44; outline-offset: 3px; }
        .hp-custom-actions p { margin: 0; color: #606060; font-size: 13px; }
        @media (max-width: 767px) { .hp-custom-layout { grid-template-columns: 1fr; } .hp-custom-form { border-left: 0; border-top: 1px solid #eee; } }
        @media (max-width: 575px) { .hp-custom-form { padding: 16px; } .hp-custom-fields { grid-template-columns: 1fr; } .hp-custom-actions button { width: 100%; } }
      `}</style>
    </div>
  );
}
