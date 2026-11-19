import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <>
      <section className="main-banner-area main-banner-area-two main-banner-video">
        {/* Video Background */}
        <video className="banner-video-bg" autoPlay muted loop playsInline>
          <source src="/videos/default.mp4" type="video/mp4" />
        </video>
        <div className="banner-video-overlay"></div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-text">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                 نجاحك على الإنترنت يبدأ من هنا
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                    KaTechs توفر لك كل ما تحتاجه لبناء حضور رقمي قوي: تصميم مواقع، استضافة، بريد إلكتروني، تسويق وSEO — بخطوات سهلة وواثقة.
                </p>

                <div
                  className="banner-btn"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link href="/about-us" className="default-btn">
                    ابدأ مشروع الان
                  </Link>

                  <Link href="/contact" className="default-btn">
                    استشارة مجانية
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainBanner;
