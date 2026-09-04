import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import Hero from "../../../components/Seo/Hero";
import AuditForm from "../../../components/Seo/AuditForm";
import Results from "../../../components/Seo/Results";
import Pillars from "../../../components/Seo/Pillars";
import AiSearch from "../../../components/Seo/AiSearch";
import Process from "../../../components/Seo/Process";
import CaseStudies from "../../../components/Seo/CaseStudies";
import Reporting from "../../../components/Seo/Reporting";
import Faq from "../../../components/Seo/Faq";
import CtaBand from "../../../components/Seo/CtaBand";
import Footer from "../../../components/Layouts/Footer";

export default function SeoPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <AuditForm />

      <Results />

      <Pillars />

      <AiSearch />

      <Process />

      <CaseStudies />

      <Reporting />

      <Faq />

      <CtaBand />

      <Footer />
    </>
  );
}
