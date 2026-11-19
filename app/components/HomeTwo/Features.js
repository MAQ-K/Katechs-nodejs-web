import React from "react";
import Link from "next/link";

const featuresData = [
  {
    iconName: "flaticon-engineer",
    title: "مواقع الويب",
    shortText:
      "أي كان مجال نشاطك التجاري فنحن جاهزون  لتصميم موقعك الإلكتروني وإشهار علامتك التجارية على الانترنت ",

    viewDetails: "/services/website-design/",
    aosDelay: "600",
  },
];

const Features = () => {
  return (
    <>
      <div className="features-area mt-minus-70 pb-70">
        <div className="container">
          <div className="row justify-content-center">
            {featuresData &&
              featuresData.slice(0, 3).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6 p-0"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="single-features">
                    <i className={value.iconName}></i>
                    <h3>{value.title}</h3>
                    <p>{value.shortText}</p>

                    <Link href={value.viewDetails} className="read-more-icon">
                      <span className="flaticon-right-arrow"></span>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
