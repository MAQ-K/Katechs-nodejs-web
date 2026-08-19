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
        pageTitle="طلب استضافة مواقع  "
        homePageUrl="/"
        homePageText=""
        activePageText=""
      />

      


    <iframe
      title="طلب استضافة"
      src="https://forms.katechs.com/katechskat1/form/34991/formperma/CnfaSPEyBVYClLkV6P1OgCDHhnbBWELZCMwZo9sihns"
      style={{ height: '500px', width: '99%', border: 'none' }}
      frameBorder="0"
      aria-label="طلب استضافة"
    ></iframe>





      <Footer />
    </>
  );
}
