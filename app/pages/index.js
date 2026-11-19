import React from "react";
import Navbar from "../components/Layouts/Navbar";
import MainBanner from "../components/HomeTwo/MainBanner";
import ReviewsCounter from "../components/HomeTwo/ReviewsCounter";
import OurServices from "../components/Services/Services";
import PricingWebsite from "/components/PricingWebsite/PricingStyleOne";
import EcommercePlatforms from "../components/PricingWebsite/EcommercePlatforms";
import MobileAppPromo from "../components/Common/MobileAppPromo";
import MakeYourBusiness from "../components/Common/MakeYourBusiness";
import OurProjects from "../components/Common/OurProjects";
import OurClientsGallery from "../components/Common/OurClientsGallery";
import Testimonials from "../components/Common/Testimonials";
import TrustedCustomers from "../components/Common/TrustedCustomers";
import Partner from "../components/Common/Partner";
import FaqHorizontal from "../components/Common/FaqHorizontal";
import SeoShowcase from "../components/Common/SeoShowcase";
import Footer from "../components/Layouts/Footer";
import { Fragment } from 'react'
import Head from "next/head";

export default function Index2Page() {
  return (
    <>
    
    <Head>
      <title>استضافة و برمجة مواقع الانترنت</title>
      <meta name="description" content="اعثر على كل ما تحتاج إليه لاستضافة وبرمجة مواقع الإنترنت  و الشهرة والتألق على الانترنت لجذب الكثير من العملاء عبر الانترنت"/>
      <meta property="og:title" content="استضافة وبرمجة مواقع الانترنت" />
    </Head>

      <Navbar />

      <MainBanner />

      <ReviewsCounter />

      <OurServices />

      <MakeYourBusiness />

      <PricingWebsite />

      <MobileAppPromo />

      <EcommercePlatforms />

      <SeoShowcase />

      {/* <OurProjects /> */}

      <OurClientsGallery />

      {/* <Testimonials /> */}

      <div className="pt-70">
        <Partner />
      </div>

      <TrustedCustomers />

      <FaqHorizontal />

      

     {/*  <a href="https://form.jotform.com/241284812756562" className="float" target="_blank"  rel="noreferrer">
      طلب استشاره
      </a>
 */}

     

      <Footer />
    </>
  );
}
