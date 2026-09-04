import React from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/logo-konoz-ar.png";
import shape1 from "../../public/images/shape/footer-shape-one.png";
import shape2 from "../../public/images/shape/footer-shape-two.png";

const Footer = () => {
  
  return (
    <>
      <footer className="footer-top-area pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <Link href="/" className="logo">
                  <Image src={logo} alt="logo" width={200} height={37} />
                </Link>

                <p>
                نحن شركة مصريه رسمية بالقاهره نقدم حلولًا رقمية متكاملة
                 تساعدك على الوصول إلى أهدافك بكل احترافية. نحن متخصصون
                 في تصميم مواقع إلكترونية مبتكرة تلبي جميع احتياجاتك
                </p>

                <p>
                  <strong>الرقم الضريبي: 107-241-769</strong>
                </p>

                <ul className="social-icon">
                  <li>
                    <a href="https://www.facebook.com/1katechs" target="_blank" rel="noreferrer">
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ka.techs/" target="_blank" rel="noreferrer">
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/KA_TECHS" target="_blank" rel="noreferrer">
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@KATECHS-j9h" target="_blank" rel="noreferrer">
                      <i className="bx bxl-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiktok.com/@ka.techs" target="_blank" rel="noreferrer">
                      <i className="bx bxl-tiktok"></i>
                    </a>
                  </li>
                
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <h3>الخدمات</h3>
                <ul>
                  <li>
                    <Link href="/services/hosting-services/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      دومين و استضافة
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/emails/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      بريد إلكتروني
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/website-design/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      مواقع ويب
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/seo/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      تحسين محركات البحث سيو
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/app-development/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      تطبيقات الجوال
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/digital-marketing/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      تسويق إلكتروني
                    </Link>
                  </li>

                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h3>روابط هامة</h3>

                <ul>
                  <li>
                    <Link href="/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                     الرئيسيه
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <i className="right-icon bx bx-chevrons-right"></i>
                     من نحن
                    </Link>
                  </li>
               
                
                  {/* Training page hidden for now (user request, 2026-09-04) —
                      see components/Layouts/Navbar.js for the matching nav-link
                      removal and pages/training/index.js for the notFound.
                  <li>
                    <Link href="/training/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      تدريب
                    </Link>
                  </li>
                  */}
                  <li>
                    <Link href="/contact">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      اتصل بنا
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                      الشروط والاحكام
                    </Link>
                  </li>
                  <li>
                    <Link href="/jobs/">
                      <i className="right-icon bx bx-chevrons-right"></i>
                       التوظيف
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <h3>تواصل</h3>

                <ul className="information">
                  <li className="address">
                    <i className="flaticon-call"></i>
                    <span>واتساب</span>
                    201555085828+
                  </li>

                  <li className="address">
                    <i className="flaticon-envelope"></i>
                    <span>مبيعات</span>
                    sales@katechs.com
                  </li>

                  <li className="address">
                    <i className="flaticon-maps-and-flags"></i>
                    <span>العنوان</span>
                    مصر - القاهره - التجمع الخامس - بلس مول المستثمرين - مكتب RO1
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-shape">
          <Image src={shape1} alt="Image" width={270} height={235} />
          <Image src={shape2} alt="Image" width={270} height={235} />
        </div>
      </footer>

      {/* Footer Bottom Area   */}
      <footer className="footer-bottom-area">
        <div className="container">
          <div className="row align-items-center">
            

            <div className="col-lg-4">
              <div className="privacy">
                <ul>
                
                </ul>
              </div>
            </div>
            

            <div className="col-lg-6">
              <div className="copy-right">
                <p>
                  
                  
                  جميع الحقوق محفوظة لـ كنوز الجيل للتكنولوجيا المتطورة (KATECHS)   © 2025-2011   
                
                
                </p>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="designed">
                
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
