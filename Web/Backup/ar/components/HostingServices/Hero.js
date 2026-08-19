import React from "react";
import Link from "next/link";
import Image from "next/image";

import { heroBanner } from "../../data/hosting-services/data";

const Hero = () => {
  return (
    <section className="hosting-hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="hosting-hero-img">
              <Image
                src={heroBanner.image}
                alt={heroBanner.heading}
                width={520}
                height={520}
              />

              <div className="hosting-hero-domain-card">
                <span className="hosting-hero-icon-badge">
                  <i className="bx bx-shield-quarter"></i>
                </span>
                <span className="hosting-hero-domain-pill">
                  <i className="bx bx-globe"></i>
                  <span>{heroBanner.floatingCard.domain}</span>
                  <i className="bx bx-pointer hosting-hero-domain-pointer"></i>
                </span>
              </div>

            </div>
          </div>

          <div className="col-lg-6">
            <div className="hosting-hero-text">
              <span data-aos="fade-in" data-aos-duration="1200" data-aos-delay="50">
                {heroBanner.eyebrow}
              </span>

              <h1 data-aos="fade-in" data-aos-duration="1200" data-aos-delay="100">
                {heroBanner.heading}
              </h1>

              <p data-aos="fade-in" data-aos-duration="1200" data-aos-delay="200">
                {heroBanner.subheading}
              </p>

              <div
                className="hosting-hero-badge"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="250"
              >
                <i className="bx bx-check-shield"></i>
                {heroBanner.badge}
              </div>

              <div
                className="hosting-hero-btn"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <Link href={heroBanner.cta.href} className="default-btn">
                  {heroBanner.cta.text}
                  <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>

              <div
                className="hosting-hero-trust"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="350"
              >
                <span className="hosting-hero-trust-stars">
                  {Array.from({ length: heroBanner.trustBadge.rating }).map((_, i) => (
                    <i className="bx bxs-star" key={i}></i>
                  ))}
                </span>
                <span className="hosting-hero-trust-text">
                  {heroBanner.trustBadge.text}
                </span>
                <span className="hosting-hero-trust-caption">
                  {heroBanner.trustBadge.caption}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
