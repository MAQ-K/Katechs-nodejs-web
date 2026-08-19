import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import PricingWebsite from "/components/PricingWebsite/PricingStyleOne";
import FaqContent from "/components/FaqWebsite/FaqContent";
import ServiceDetailsContent from "../../../components/webDeatails/ServiceDetailsContent";
import ServiceDetailsContent1 from "../../../components/webDeatailsFooter/ServiceDetailsContent";
import WhatWeOffer from "../../../components/websitefeature/WhatWeOffer";
import ContactInfo from "../../../components/Contact/popupformPage";
import Footer from "../../../components/Layouts/Footer";
import Head from "next/head";
export default function Services2Page() {
  return (
    <>


      <Head>
        <title>تصميم المواقع الإلكترونية</title>
        <meta name="description" content="أي كان مجال نشاطك التجاري فنحن جاهزون لإشهار علامتك التجارية من خلال تصميم موقع إلكتروني احترافي باستخدام احدث التقنيات البرمجية"/>
        <meta property="og:title" content="تصميم المواقع الإلكترونية" />
      </Head>


      <Navbar />

      <PageBanner
        pageTitle="تصميم المواقع الالكترونية"
        homePageUrl="/"
        homePageText=""
        activePageText=""
      />

      
      <ServiceDetailsContent />

      <WhatWeOffer />


      <PricingWebsite />


      <ContactInfo />

      <ServiceDetailsContent1 />

      <FaqContent />
  
 


      <Footer />
    </>
  );
}
