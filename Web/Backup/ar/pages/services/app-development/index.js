import React from "react";
import Navbar from "../../../components/Layouts/Navbar";
import Hero from "../../../components/AppDev/Hero";
import Platforms from "../../../components/AppDev/Platforms";
import Process from "../../../components/AppDev/Process";
import Features from "../../../components/AppDev/Features";
import Faq from "../../../components/AppDev/Faq";
import Footer from "../../../components/Layouts/Footer";

export default function AppDevelopmentPage() {
  return (
    <>
      <Navbar />

      <Hero />

      <Platforms />

      <Process />

      <Features />

      <Faq />

      <Footer />
    </>
  );
}
