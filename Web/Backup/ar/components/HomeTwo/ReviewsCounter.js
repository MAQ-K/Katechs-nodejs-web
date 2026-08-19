import React from "react";

const statsData = [
  { value: "499+", label: "استضافة مدارة" },
  { value: "349+", label: "إيميل مدار" },
  { value: "240+", label: "مشروع ويب وتطبيق" },
  { value: "24/7", label: "دعم فني" },
];

const joyIcons = [
  { icon: "bxs-heart", className: "joy-icon-1" },
  { icon: "bxs-like", className: "joy-icon-2" },
  { icon: "bxs-smile", className: "joy-icon-3" },
  { icon: "bxs-gift", className: "joy-icon-4" },
  { icon: "bxs-bulb", className: "joy-icon-5" },
  { icon: "bxs-badge-check", className: "joy-icon-6" },
  { icon: "bxs-star", className: "joy-icon-7" },
  { icon: "bxs-heart", className: "joy-icon-8" },
];

const ReviewsCounter = () => {
  return (
    <>
      <section className="reviews-counter-area ptb-100 pt-0">
        {/* Top curve */}
        <div className="reviews-wave reviews-wave-top">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,40 C360,110 1080,-30 1440,40 L1440,0 L0,0 Z"></path>
          </svg>
        </div>

        <div className="reviews-blob reviews-blob-one"></div>
        <div className="reviews-blob reviews-blob-two"></div>

        {/* Floating joy icons */}
        <div className="joy-icons">
          {joyIcons.map((item, i) => (
            <i
              key={i}
              className={`bx ${item.icon} joy-icon ${item.className}`}
            ></i>
          ))}
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <div
                className="overall-rating"
                data-aos="zoom-in"
                data-aos-duration="900"
              >
                <div className="rating-score-wrap">
                  <h3 className="rating-score">4.5</h3>
                </div>
                <ul className="rating-stars">
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star"></i>
                  </li>
                  <li>
                    <i className="bx bxs-star-half"></i>
                  </li>
                </ul>
                <p>تقييم عملائنا بناءً على تجاربهم الحقيقية معنا</p>
              </div>
            </div>
          </div>

          <div className="row">
            {statsData.map((stat, i) => (
              <div
                className="col-lg-3 col-sm-6 counter-nth"
                data-aos="zoom-in-up"
                data-aos-duration="900"
                data-aos-delay={120 * (i + 1)}
                key={i}
              >
                <div className="single-counter">
                  <h2>
                    <span className="target">{stat.value}</span>
                  </h2>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom curve */}
        <div className="reviews-wave reviews-wave-bottom">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,60 C360,-10 1080,130 1440,60 L1440,100 L0,100 Z"></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default ReviewsCounter;
