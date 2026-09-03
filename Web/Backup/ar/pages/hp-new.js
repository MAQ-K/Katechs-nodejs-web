import React, { Fragment } from "react";
import Head from "next/head";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";

// === New homepage — independent rebuild ===
// Built section by section: sketch → design → finish. Nothing here touches pages/index.js,
// components/Common/**, or styles/style.scss. Working folder: Web/Backup/ar/Homepage/
//
// Add each finished section as one import + one line in the stack below, in visual order.
// Section components live in components/HpNew/ (see that folder's README for the contract).

export default function HpNewPage() {
  return (
    <Fragment>
      <Head>
        <title>الصفحة الرئيسية — نسخة جديدة</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <Navbar />

      <main className="hp-new-root">
        {/* --- sections go here, in order --- */}

        <section className="hp-new-empty">
          <p>الصفحة الرئيسية الجديدة — لم تُبنَ أي قسم بعد.</p>
          <p className="hp-new-empty-sub">
            Section 1 goes here. Drop the sketch in <code>Homepage/structure-drafts/</code> and the
            references in <code>Homepage/inspirations/</code>.
          </p>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .hp-new-root {
          display: block;
        }
        .hp-new-empty {
          min-height: 60vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          text-align: center;
          padding: 80px 24px;
          color: #6b7280;
          font-family: "Cairo", system-ui, sans-serif;
        }
        .hp-new-empty p {
          margin: 0;
          font-size: 18px;
        }
        .hp-new-empty-sub {
          font-size: 14px;
          direction: ltr;
          color: #9ca3af;
        }
        .hp-new-empty code {
          background: #f3f4f6;
          border-radius: 4px;
          padding: 2px 6px;
          font-size: 13px;
        }
      `}</style>
    </Fragment>
  );
}
