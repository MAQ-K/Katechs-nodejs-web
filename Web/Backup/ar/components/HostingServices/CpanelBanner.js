import React from "react";
import Link from "next/link";
import Image from "next/image";

import { cpanelBanner } from "../../data/hosting-services/data";

const CpanelBanner = () => {
  return (
    <section className="hosting-cpanel-banner-section">
      <div className="container">
        <div className="hosting-cpanel-banner">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hosting-cpanel-banner-text">
                <h2>{cpanelBanner.heading}</h2>
                <p>{cpanelBanner.description}</p>
                <Link href={cpanelBanner.cta.href} className="default-btn">
                  {cpanelBanner.cta.text}
                  <i className="bx bx-right-arrow-alt"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hosting-cpanel-banner-img">
                <Image
                  src={cpanelBanner.image}
                  alt={cpanelBanner.heading}
                  width={780}
                  height={520}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CpanelBanner;
