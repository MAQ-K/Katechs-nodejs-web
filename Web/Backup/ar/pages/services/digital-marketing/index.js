import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import Hero from "../../../components/DigitalMarketing/Hero";
import TrustStrip from "../../../components/DigitalMarketing/TrustStrip";
import Channels from "../../../components/DigitalMarketing/Channels";
import Strategy from "../../../components/DigitalMarketing/Strategy";
import SocialMedia from "../../../components/DigitalMarketing/SocialMedia";
import WhyUs from "../../../components/DigitalMarketing/WhyUs";
import Results from "../../../components/DigitalMarketing/Results";
import Reporting from "../../../components/DigitalMarketing/Reporting";
import Pricing from "../../../components/DigitalMarketing/Pricing";
import Faq from "../../../components/DigitalMarketing/Faq";
import CtaBand from "../../../components/DigitalMarketing/CtaBand";
import Footer from "../../../components/Layouts/Footer";

export default function DigitalMarketingPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <TrustStrip />

      <Channels />

      <Strategy />

      <SocialMedia />

      <WhyUs />

      <Results />

      <Reporting />

      <Pricing />

      <Faq />

      <CtaBand />

      <Footer />
    </>
  );
}
