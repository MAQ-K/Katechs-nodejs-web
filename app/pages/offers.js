import Head from "next/head";
import Script from "next/script";
import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import PricingWebsite from "../components/PricingOfferWebsite/PricingStyleOne";
import FaqContent from "../components/FaqWebsite/FaqContent";
import ServiceDetailsContent from "../components/WebOfferDeatails/ServiceDetailsContent";
import ServiceDetailsContent1 from "../components/webDeatailsFooter/ServiceDetailsContent";
import ContactInfo from "../components/Contact/popupformPage";
import Footer from "../components/Layouts/Footer";
export default function Services2Page() {
  return (
    <>


      <Head>
        <title>عرض خاص لفترة محدودة</title>
        <meta name="description" content="أي كان مجال نشاطك التجاري فنحن جاهزون لإشهار علامتك التجارية من خلال تصميم موقع إلكتروني احترافي باستخدام أحدث التقنيات البرمجية" />
        <meta property="og:title" content="تصميم المواقع الإلكترونية" />
      </Head>

      {/* Google Ads tag + "مشاهدة صفحة" conversion event, fired on every view of this page */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-17408670143"
        strategy="afterInteractive"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { window.dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'AW-17408670143');
          gtag('event', 'conversion', {
            send_to: 'AW-17408670143/gdK0CIjqy_saEL_zjO1A',
            value: 1.0,
            currency: 'EGP'
          });
        `}
      </Script>


      <Navbar />

      <PageBanner
        pageTitle="عرض خاص لفترة محدودة "
        homePageUrl="/"
        homePageText=""
        activePageText=""
      />

      
      <ServiceDetailsContent />



      <PricingWebsite />




 



      <Footer />
    </>
  );
}
