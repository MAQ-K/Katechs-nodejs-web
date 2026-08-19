import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import PricingSSL from "/components/PricingSSL/PricingStyleOne";
import FaqContent from "/components/SslFaq/FaqContent";
import SSl_types from "/components/Services/SSl_types";
import ServiceDetailsContent from "../../../components/sslDetails/ServiceDetailsContent";
import Footer from "../../../components/Layouts/Footer";

export default function Services2Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="الأمن والحمايه"
        homePageUrl="/"
        homePageText=""
        activePageText=""
      />


      
      <ServiceDetailsContent />


      <SSl_types />

      <FaqContent />

      <PricingSSL />
      



      <Footer />
    </>
  );
}
