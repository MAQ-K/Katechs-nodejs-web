import React from "react";
import Navbar from "../components/Layouts/Navbar";
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/Contact/ContactInfo";
import ContactForm from "../components/Contact/ContactForm";
import Footer from "../components/Layouts/Footer";
import Image from "next/image";
import whatsimg from "../public/images/whatsapp.png";


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



     
      <a href="https://wa.me/+201555085828" className="floatwhats" target="_blank" rel="noreferrer">
      <Image src={whatsimg} className="my-floatwhats" alt="Image" />
      </a>
   

 {/*      <a href="https://form.jotform.com/241284812756562" className="float" target="_blank"  rel="noreferrer">
      طلب استشاره
      </a>
 */}

      <Footer />
    </>
  );
}
