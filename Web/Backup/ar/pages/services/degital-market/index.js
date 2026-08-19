import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import PageBanner from "../../../components/Common/PageBanner";
import Services from "/components/Services/digital-service";

import WhatWeOffer from "/components/digitalfeature/WhatWeOffer";
import WhyChooseUs from "/components/why-katechs/WhyChooseUs";

import FaqContent from "/components/degital-market-faq/FaqContent";
import ServiceDetailsContent from "../../../components/degital-markiting-details/ServiceDetailsContent";
import Footer from "../../../components/Layouts/Footer";

export default function Services2Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="التسويق الرقمي"
        homePageUrl="/"
        homePageText=""
        activePageText=""
      />


      
      <ServiceDetailsContent />
      
      <WhatWeOffer />
      <Services />


      <FaqContent />
      <WhyChooseUs />
      





      <Footer />
    </>
  );
}
