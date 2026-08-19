import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import afaqImg from "../../public/images/projects/afaqedu-project.png";
import alamoudiImg from "../../public/images/projects/alamoudi-projects.png";
import doffoImg from "../../public/images/projects/Doffo-Project.png";
import risaImg from "../../public/images/projects/risa-salt-project.png";
import tabqatImg from "../../public/images/projects/tabqat-project.png";
import voirImg from "../../public/images/projects/voirboutiq-project.png";

const projects = [
  { title: "شركة آفاق التعليمية", img: afaqImg, zoom: 1.3 },
  { title: "متجر العمودي", img: alamoudiImg },
  { title: "دفو تطبيق بيع وشراء", img: doffoImg },
  { title: "شركة الرياض لصناعة الملح", img: risaImg },
  { title: "شركة الطبقات المتعددة", img: tabqatImg },
  { title: "متجر فوا", img: voirImg },
];

const OurClientsGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="clients-gallery-area pt-70 pb-100">
        <div className="clients-gallery-wave clients-gallery-wave-top">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,40 C360,110 1080,-30 1440,40 L1440,0 L0,0 Z"></path>
          </svg>
        </div>

        <div className="container">
          <div className="clients-gallery-row">
            <div className="clients-gallery-gallery">
              <h3 className="clients-gallery-mobile-heading">
                خبرة أثبتناها في كل مشروع
              </h3>

              <div className="clients-gallery-badge">
                <span className="clients-gallery-badge-label">شركاء النجاح</span>
                <span className="clients-gallery-badge-number">16</span>
                <span className="clients-gallery-badge-sub">عام من الخبرة</span>
              </div>

              <div className="clients-gallery-box">
                {projects.map((project, index) => (
                  <div
                    className={
                      "clients-gallery-slide" +
                      (index === activeIndex ? " active" : "")
                    }
                    key={index}
                  >
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      sizes="500px"
                      style={{
                        objectFit: "cover",
                        borderRadius: "18px",
                        transform: project.zoom ? `scale(${project.zoom})` : undefined,
                      }}
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>

              <h4 className="clients-gallery-caption" key={activeIndex}>
                {projects[activeIndex].title}
              </h4>
            </div>

            <div className="clients-gallery-title">
              <h3 className="clients-gallery-desktop-heading">
                خبرة أثبتناها في كل مشروع
              </h3>
              <p className="clients-gallery-desktop-text">
                كل مشروع في معرض أعمالنا هو قصة نجاح لعميل وثق بنا منذ اللحظة
                الأولى، وشاركنا رؤيته وطموحه في أن يكون له بصمة رقمية مميزة،
                فحوّلنا فكرته من مجرد تصوّر بسيط إلى منصة رقمية احترافية
                متكاملة، مبنية بعناية وباهتمام بأدق التفاصيل، وجاهزة للانطلاق
                ومنافسة السوق بثقة وثبات من أول يوم.
              </p>
              <p className="clients-gallery-mobile-text">
                كل مشروع في معرض أعمالنا هو قصة نجاح لعميل وثق بنا منذ اللحظة
                الأولى، وشاركنا رؤيته وطموحه في أن يكون له بصمة رقمية مميزة
              </p>

              <div className="clients-gallery-buttons">
                <Link href="/contact" className="default-btn">
                  استشارة مجانية
                </Link>
                <Link href="/about-us" className="default-btn">
                  ابدأ مشروعك الان
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="clients-gallery-wave clients-gallery-wave-bottom">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,60 C360,-10 1080,130 1440,60 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default OurClientsGallery;
