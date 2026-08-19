import React from "react";
import Link from "next/link";
import Image from "next/image";

import shapeImg1 from "../../public/images/shape/services-shape/1.png";
import shapeImg2 from "../../public/images/shape/services-shape/2.png";
import shapeImg3 from "../../public/images/shape/services-shape/3.png";
import shapeImg4 from "../../public/images/shape/services-shape/4.png";
import shapeImg5 from "../../public/images/shape/services-shape/5.png";
import shapeImg6 from "../../public/images/shape/services-shape/6.png";

const MakeYourBusiness = () => {
  return (
    <>
      <section className="business-area ptb-100">
        <div className="business-wave business-wave-top">
          <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
            <path d="M0,30 C360,160 1080,-90 1440,30 L1440,0 L0,0 Z"></path>
          </svg>
        </div>

        <div className="offer-shape">
          <Image src={shapeImg1} alt="Image" width={300} height={375} />
          <Image src={shapeImg2} alt="Image" width={300} height={375} />
          <Image src={shapeImg3} alt="Image" width={41} height={36} />
          <Image src={shapeImg4} alt="Image" width={20} height={20} />
          <Image src={shapeImg5} alt="Image" width={28} height={30} />
          <Image src={shapeImg6} alt="Image" width={25} height={25} />
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="business-content">
                <h2>لماذا تختار كاتكس؟</h2>
              </div>

              <div className="single-business">
                <i className="flaticon-shield"></i>
                <h3>الخبرة</h3>
                <p>
                فريق متخصص ذو خبرة عالية في الحلول الرقمية داخل مصر ودول الخليج العربي
                </p>
              </div>

              <div className="single-business">
                <i className="flaticon-support"></i>
                <h3>الدعم</h3>
                <p>
                دعم متواصل وتعاون شفاف مع العميل، مع فريق جاهز
                لمساعدتك في كل خطوة
                </p>
              </div>

              <div className="single-business">
                <i className="flaticon-project-management"></i>
                <h3>الحلول المتكاملة</h3>
                <p>
                كل ما يحتاجه بيزنسك تحت سقف واحد: تصميم، استضافة،
                تسويق، وحماية
                </p>
              </div>

              <div className="single-business">
                <i className="flaticon-diamond"></i>
                <h3>جودة التزام وضمان استرداد</h3>
                <p>
                أعلى معايير الجودة و الالتزام بالمواعيد وضمان استرداد 14 يوم
                </p>
              </div>

              <div className="business-btn">
                <Link href="/digital-market-order" className="default-btn">
                  المزيد
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">16+</span>
                    </h2>
                    <p>الخبرة</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">100%</span>
                    </h2>
                    <p>الدقة</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">14</span>
                    </h2>
                    <p>يوم ضمان استرداد</p>
                  </div>
                </div>

                <div 
                  className="col-lg-6 col-sm-6 counter-nth"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <div className="single-counter">
                    <h2>
                      <span className="target">24/7</span>
                    </h2>
                    <p>الدعم</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="business-wave business-wave-bottom">
          <svg viewBox="0 0 1440 140" preserveAspectRatio="none">
            <path d="M0,50 C360,-80 1080,180 1440,50 L1440,140 L0,140 Z"></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default MakeYourBusiness;
