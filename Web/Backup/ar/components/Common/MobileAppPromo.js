import React from "react";
import Link from "next/link";
import Image from "next/image";

import appMockupImg from "../../public/images/mobile-app/app-mockup.png";

const MobileAppPromo = () => {
  return (
    <>
      <section className="mobile-app-area pt-70 pb-100">
        <div className="container">
          <div className="mobile-app-card">
            <div className="mobile-app-shapes">
              <i className="bx bx-mobile-alt mobile-app-shape mobile-app-shape-1"></i>
              <i className="bx bxs-bell mobile-app-shape mobile-app-shape-2"></i>
              <i className="bx bx-message-rounded-dots mobile-app-shape mobile-app-shape-3"></i>
              <i className="bx bx-code-alt mobile-app-shape mobile-app-shape-4"></i>
              <i className="bx bx-cloud-upload mobile-app-shape mobile-app-shape-5"></i>
              <i className="bx bxs-star mobile-app-shape mobile-app-shape-6"></i>
              <i className="bxl-apple bx mobile-app-shape mobile-app-shape-7"></i>
              <i className="bxl-android bx mobile-app-shape mobile-app-shape-8"></i>
            </div>

            <div className="mobile-app-row">
              <div className="mobile-app-media">
                <div
                  className="mobile-app-media-box"
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                >
                  <Image
                    src={appMockupImg}
                    alt="تصميم تطبيقات جوال احترافية - KaTechs"
                    width={320}
                    height={526}
                  />
                </div>
              </div>

              <div
                className="mobile-app-content"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <span className="mobile-app-eyebrow">تطبيقات جوال احترافية</span>
                <h2>حوّل فكرتك إلى تطبيق يستخدمه عملاؤك يوميًا</h2>
                <p>
                  من التصميم إلى الإطلاق، نبني لك تطبيقًا احترافيًا يجعل
                  عملاءك يعودون إليك في كل مرة يحتاجون فيها خدماتك.
                </p>

                <Link href="/contactWeb" className="default-btn">
                  ابدأ تطبيقك الآن
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileAppPromo;
