import React from "react";
import Link from "next/link";
import Image from "next/image";

import servicesImg from "../../public/images/services-details/services-katechs.png";

const servicesData = [
  {
    number: "01",
    category: "حجز نطاق واستضافة",
    tagline: "موقعك شغال دايمًا... بسرعة وبدون انقطاع",
    icon: "flaticon-cloud-computing",
    link: "/services/hosting-services/",
  },
  {
    number: "02",
    category: "تسويق إلكتروني",
    tagline: "حملات تسويق تحوّل الإعلانات إلى مبيعات فعلية",
    icon: "flaticon-promotion",
    link: "/services/degital-market/",
  },
  {
    number: "03",
    category: "بريد إلكتروني احترافي",
    tagline: "مصداقية أعلى لشركتك ببريد إلكتروني احترافي",
    icon: "flaticon-envelope",
    link: "/services/emails/",
  },
  {
    number: "04",
    category: "تطبيقات الجوال",
    tagline: "بيزنسك في جيب عملائك على مدار الساعة",
    icon: "flaticon-interactivity",
    link: "#",
  },
  {
    number: "05",
    category: "تصميم مواقع الويب",
    tagline: "موقع يجذب عملاء جدد ويحوّلهم لمبيعات فعلية",
    icon: "flaticon-engineer",
    link: "/services/website-design/",
  },
  {
    number: "06",
    category: "خدمات السيو",
    tagline: "تصدّر نتائج البحث في جوجل واجذب زوارًا مهتمين فعليًا",
    icon: "flaticon-target",
    link: "#",
  },
  {
    number: "07",
    category: "حملات بريد إلكتروني",
    tagline: "حملات بريد إلكتروني تصل مباشرة لعملائك وتزيد تفاعلهم",
    icon: "flaticon-conversation",
    link: "#",
  },
  {
    number: "08",
    category: "أمن وحماية",
    tagline: "بياناتك وبيانات عملائك في أمان تام، دائمًا",
    icon: "flaticon-cyber-security",
    link: "/services/security/",
  },
];

const rightServices = servicesData.slice(0, 4);
const leftServices = servicesData.slice(4, 8);

const Services = () => {
  return (
    <>
      <section className="industries-serve-area our-services-area pt-70 pb-100">
        <div className="container">
          <div className="section-title">
            <span>خدماتنا</span>
            <h2>حلول رقمية متكاملة تناسب كل مراحل نمو أعمالك</h2>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="row">
                {rightServices.map((service, i) => (
                  <div className="col-lg-12 col-md-6" key={service.number}>
                    <Link
                      href={service.link}
                      className="single-industries"
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay={100 * (i + 1)}
                    >
                      <i className={service.icon}></i>
                      <h3>{service.category}</h3>
                      <p>{service.tagline}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="industries-img service-media-wrap"
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <Image src={servicesImg} alt="خدمات KATECHS" />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="row">
                {leftServices.map((service, i) => (
                  <div className="col-lg-12 col-md-6" key={service.number}>
                    <Link
                      href={service.link}
                      className="single-industries right-item"
                      data-aos="fade-in"
                      data-aos-duration="1200"
                      data-aos-delay={100 * (i + 1)}
                    >
                      <i className={service.icon}></i>
                      <h3>{service.category}</h3>
                      <p>{service.tagline}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
