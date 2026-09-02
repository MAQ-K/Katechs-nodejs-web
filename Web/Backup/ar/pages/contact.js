import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Layouts/Footer";

import { Fragment } from 'react'

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="تواصل معنا"
        homePageUrl="/"

      />

      <ContactInfo />

      <ContactForm />

     
   

 {/*      <a href="https://form.jotform.com/241284812756562" className="float" target="_blank"  rel="noreferrer">
      طلب استشاره
      </a>
 */}

      <Footer />
    </>
  );
}
