import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";

import Footer from "../components/Layouts/Footer";
import Head from "next/head";
export default function Services2Page() {
  return (
    <>


      <Head>
        <title>توظيف</title>
        <meta name="description" content="أي كان مجال نشاطك التجاري فنحن جاهزون لإشهار علامتك التجارية من خلال تصميم موقع إلكتروني احترافي باستخدام احدث التقنيات البرمجية"/>
        <meta property="og:title" content="تصميم المواقع الإلكترونية" />
      </Head>


      <Navbar theme="navy" />

      <PageBanner
        pageTitle="طلب استضافة مواقع  "
        homePageUrl="/"
        homePageText=""
        activePageText=""
      />

      {/* Uses the portable .ds-* design-system layer (styles/style.scss,
          "=== DESIGN SYSTEM — COMPONENT LAYER ==="), the same classes
          documented at /lab/design-system/. The page owns no styling of its
          own any more. Navbar/PageBanner/Footer are shared components and are
          intentionally untouched. */}
      <div className="container ds-section">
        <div className="ds-frame">
          <div className="ds-frame-media">
            <iframe
              title="طلب استضافة"
              src="https://forms.katechs.com/katechskat1/form/34991/formperma/CnfaSPEyBVYClLkV6P1OgCDHhnbBWELZCMwZo9sihns"
              style={{ height: "600px" }}
              aria-label="طلب استضافة"
            ></iframe>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
