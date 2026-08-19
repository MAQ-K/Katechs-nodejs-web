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
        pageTitle="توظيف"
        homePageUrl="/"
        homePageText=""
        activePageText=""
      />

      

 
      <iframe
        title="لتحسين جودة الخدمة يرجى تعبئة النموذج"
        aria-label="لتحسين جودة الخدمة يرجى تعبئة النموذج"
        frameBorder="0"
        style={{ height: '1500px', width: '100%', border: 'none' }}
        src="https://forms.zohopublic.com/katechskat1/form/DigitalMarketForm/formperma/E6R5tU78jTvSCQ65WFUKBH9w0pG4pqqvFWEk1VLCUqA"
      />






      <Footer />
    </>
  );
}
