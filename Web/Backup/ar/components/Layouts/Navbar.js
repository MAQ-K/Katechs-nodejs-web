import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import logo from "../../public/images/logo-konoz-ar.png";

const Navbar = ({ theme }) => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <>
     <div
        id="navbar"
        className={`navbar-area fixed-top ${
          theme === "navy" ? "navbar-navy" : ""
        }`}
      >
        <nav className="navbar navbar-expand-md navbar-light">
          <div className="container navbar_new_container">
            <Link href="/" className="navbar-brand">
              <Image src={logo} alt="logo" width={180} height={37} />
            </Link>

            {/* Toggle navigation */}
            <button   
              onClick={toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-bar top-bar"></span>
              <span className="icon-bar middle-bar"></span>
              <span className="icon-bar bottom-bar"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav m-auto">

                <li className="nav-item m-ll">
                  <Link
                        href="/about-us/"
                        className={`nav-link ${
                          currentPath == "/about-us/" && "active"
                        }`}
                      >
                        عن الشركة
                    </Link>

                </li>

                <li className="nav-item">
                <Link
                          href="/services/hosting-services/"
                          className={`nav-link ${
                            currentPath == "/services/hosting-services/" && "active"
                          }`}
                        >
                    دومين و استضافة
                  </Link>

                </li>

                <li className="nav-item">
                  <Link
                    href="/services/emails/"
                    className={`nav-link ${
                      currentPath == "/services/emails" && "active"
                    }`}
                  >
                    بريد إلكتروني
                  </Link>
                </li>

                <li className="nav-item">
                      <Link
                            href="/services/website-design/"
                            className={`nav-link ${
                              currentPath == "/services/website-design " && "active"
                            }`}
                          >
                             مواقع ويب
                      </Link>
                </li>

                <li className="nav-item">
                  <Link
                        href="/services/app-development/"
                        className={`nav-link ${
                          currentPath == "/services/app-development" && "active"
                        }`}
                      >
                        تطبيقات الموبايل
                    </Link>
                </li>

                <li className="nav-item">
                  <Link
                        href="#"
                        className={`nav-link ${
                          currentPath == "" && "active"
                        }`}
                      >
                        سيو
                    </Link>
                </li>

                <li className="nav-item">
                  <Link
                        href="#"
                        className={`nav-link ${
                          currentPath == "" && "active"
                        }`}
                      >
                        تسويق إلكتروني
                    </Link>
                </li>




       {/*          <li className="nav-item">
                  <Link
                    href="/news/"
                    className={`nav-link ${
                      currentPath == "/news/" && "active"
                    }`}
                  >
                    المدونة
                  </Link>
                </li>
                */}

                <li className="nav-item m-rr">
                  <Link
                        href="#"
                        className={`nav-link ${
                          currentPath == "" && "active"
                        }`}
                      >
                        التدريب
                    </Link>
                </li>





          </ul>

               {/* Welcome developers! 
                <div className="others-options m-rr">
                  <Link href="/support/" className="default-btn">
                  الدعم الفني 
                  </Link>
                </div>
          
              */}

                <div className="others-options m-rr">
                <Link  href="/support/" className="default-btn">

                  الدعم الفني <i className="bx bx-log-in-circle"></i>



                </Link>
               </div>

              

             {/*  <div className="others-options">
                <Link href="https://template.knoztech.com" className="language-btn">
                   English
                </Link>
              </div> */}

             


              
            </div>            
          </div>
        </nav>
        
      </div>
    </>
  );
};

export default Navbar;
