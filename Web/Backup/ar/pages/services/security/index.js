import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import FaqContent from "/components/security-fag/FaqContent";
import Email_typs from "/components/Services/securityfeature";
import ServiceDetailsContent from "../../../components/securityDetails/ServiceDetailsContent";
import Footer from "../../../components/Layouts/Footer";
import WhatWeOffer from "../../../components/securityfeature/WhatWeOffer";
import ServicesStyleTwo from "../../../components/Services/security-details";
export default function Services2Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="حماية شبكات الشركات"
        homePageUrl="/"
        homePageText=""
        activePageText=""
      />



      <ServicesStyleTwo />

      <WhatWeOffer />

      <ServiceDetailsContent />
      

      
      <FaqContent />

      <Email_typs />
      
  


      <Footer />
    </>
  );
}
