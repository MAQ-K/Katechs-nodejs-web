import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import Hero from "../../../components/Emails/Hero";
import PricingFlow from "../../../components/Emails/PricingFlow";
import Features from "../../../components/Emails/Features";
import Faq from "../../../components/Emails/Faq";
import Footer from "../../../components/Layouts/Footer";

export default function Services2Page() {
  return (
    <>
      <Navbar />

      <Hero />

      <PricingFlow />

      <Features />

      <Faq />

      <Footer />
    </>
  );
}
