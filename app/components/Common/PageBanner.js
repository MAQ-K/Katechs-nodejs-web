import React from "react";
import Link from "next/link";
import Image from "next/image";

// Animate Shape Images
import animateShape1 from "../../public/images/home-one/shape/animate1.png";
import animateShape2 from "../../public/images/home-one/shape/animate2.png";
import animateShape3 from "../../public/images/home-one/shape/animate3.png";



const PageBanner = ({
  pageTitle,
  homePageUrl,
  homePageText,
  activePageText,
}) => {
  return (
    <>
      <div className="page-title-area item-bg1">
        <div className="container">
          <div className="page-title-content">
          
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link href={homePageUrl}>{homePageText}</Link>
              </li>
              <li>{activePageText}</li>
            </ul>
          </div>
         
        </div>
      </div>
      
    </>
  );
};

export default PageBanner;
