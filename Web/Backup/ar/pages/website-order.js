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

      



      <main className="website-order-page">
        <div className="container">
          <div className="website-order-form-shell">
            <iframe
              className="website-order-form-frame"
              title="طلب تصميم موقع ويب"
              src="https://forms.katechs.com/katechskat1/form/Untitled1/formperma/q-7XHxrMJTylMxkwu8CXHSY7qCCH1-VH2ZMylKekCZE"
              loading="lazy"
              frameBorder="0"
              aria-label="طلب تصميم موقع ويب"
            ></iframe>
          </div>
        </div>
      </main>






      <Footer />
    </>
  );
}
