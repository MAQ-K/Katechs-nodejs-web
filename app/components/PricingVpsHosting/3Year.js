import React from "react";
import Link from "next/link";

const ThreeYear = () => {
  return (
    <>
     <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>  VPS 1 </h3>
              <p>  $1650<sub> /السنه</sub></p>
            </div>
            <span>
            $46<sub>/الشهر</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                2 CPU Cores
              </li>
              <li>
                <i className="bx bx-check"></i>
                4GB RAM
              </li>
              <li>
                <i className="bx bx-check"></i>
                80GB NVME Disk
              </li>
             
            </ul>

            <Link href="https://clients.knoztech.com/client/index.php?rp=/store/vps-server-plans/vps-1" className="default-btn">
              احجز الان
            </Link>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>  VPS 2   </h3>
              <p> $2699<sub>/السنه</sub> </p>
            </div>
            
            <span>      

              $75 <sub>/الشهر </sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                4CPU Cores
              </li>
              <li>
                <i className="bx bx-check"></i>
                8GB RAM
              </li>
              <li>
                <i className="bx bx-check"></i>
                160GB NVME Disk
              </li>
             
            </ul>

            <Link href="https://clients.knoztech.com/client/index.php?rp=/store/vps-server-plans/vps-2" className="default-btn">
              احجز الان
            </Link>

            <strong className="popular">Popular</strong>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="single-pricing">
            <div className="pricing-top-heading">
              <h3>  VPS 3 </h3>
              <p>  $4699<  sub>/السنه</sub></p>
            </div>
            <span>
              $130.5<sub>/الشهر</sub>
            </span>

            <ul>
              <li>
                <i className="bx bx-check"></i>
                6 CPU Cores
              </li>
              <li>
                <i className="bx bx-check"></i>
                16GB RAM
              </li>
              <li>
                <i className="bx bx-check"></i>
                320GB NVME Disk
              </li>
             
            </ul>

            <Link href="https://clients.knoztech.com/client/index.php?rp=/store/vps-server-plans/vps-3" className="default-btn">
              ابدا الان
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeYear;
