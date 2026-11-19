import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";

import ContactForm from "../components/Contact/WebOrder";
import Footer from "../components/Layouts/Footer";

import { Fragment } from 'react'

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="اطلب الان"
        homePageUrl="/"

      />

      <ContactForm />

      <Footer />
    </>
  );
}
