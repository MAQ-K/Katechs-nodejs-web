import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";

import ContactForm from "../components/Contact/WebOrder";
import Footer from "../components/Layouts/Footer";
import Image from "next/image";
import whatsimg from "../public/images/whatsapp.png";


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


      <a href="https://wa.me/+201555085828" className="floatwhats" target="_blank" rel="noreferrer">
      <Image src={whatsimg} className="my-floatwhats" alt="Image" />
      </a>

      <Footer />
    </>
  );
}
