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


      <Navbar />

      <PageBanner
        pageTitle="طلب موقع الكتروني"
        homePageUrl="/"
        homePageText=""
        activePageText=""
      />

      



      {/* Design system: .ds-section + .ds-frame — same treatment as every
          other embedded-form page. The form itself is third-party and cannot
          be styled from here, so the frame is what makes it read as designed. */}
      <div className="container ds-section">
        <div className="ds-frame">
          <div className="ds-frame-media">
            <iframe
              title="طلب تصميم موقع ويب"
              aria-label="طلب تصميم موقع ويب"
              loading="lazy"
              style={{ height: "1500px" }}
              src="https://forms.katechs.com/katechskat1/form/Untitled1/formperma/q-7XHxrMJTylMxkwu8CXHSY7qCCH1-VH2ZMylKekCZE"
            ></iframe>
          </div>
        </div>
      </div>






      <Footer />
    </>
  );
}
