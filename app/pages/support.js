import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/support";
import Footer from "../components/Layouts/Footer";

import { Fragment } from 'react'

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="الدعم الفني"
        homePageUrl="/"

      />

      <ContactInfo />

     
      <Footer />
    </>
  );
}
