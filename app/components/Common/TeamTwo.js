import React from "react";
import Image from "next/image";

import teamShape from "../../public/images/team/team-shape.png";

const teamData = [
  {
    image: "/images/team/team5.png",
    name: "Karen Peter",
    designation: "CEO & Founder",
    aosDelay: "100",

    socialLinks: [
      {
        iconName: "bx bxl-facebook",
        url: "https://facebook.com/",
      },
      {
        iconName: "bx bxl-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
      {
        iconName: "bx bxl-pinterest-alt",
        url: "https://pinterest.com/",
      },
    ],
  },
  {
    image: "/images/team/team9.jpg",
    name: "Mostafa Alqersh",
    designation: "Web Developer",
    aosDelay: "200",

    socialLinks: [
      {
        iconName: "bx bxl-facebook",
        url: "https://facebook.com/",
      },
      {
        iconName: "bx bxl-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
      {
        iconName: "bx bxl-pinterest-alt",
        url: "https://pinterest.com/",
      },
    ],
  },
  {
    image: "/images/team/team7.png",
    name: "Alisa Maria",
    designation: "Web Developer",
    aosDelay: "300",

    socialLinks: [
      {
        iconName: "bx bxl-facebook",
        url: "https://facebook.com/",
      },
      {
        iconName: "bx bxl-twitter",
        url: "https://twitter.com/",
      },
      {
        iconName: "bx bxl-linkedin",
        url: "https://linkedin.com/",
      },
      {
        iconName: "bx bxl-pinterest-alt",
        url: "https://pinterest.com/",
      },
    ],
  },
];

const TeamTwo = () => {
  return (
    <>
      <section className="team-area pb-70">
        <div className="container">
          <div className="section-title home-four-section-title">
            <h2 className="pt-100">الفريق </h2>
            <p>
              لدينا فريق من امهر المبرمجين قادرون علي تنفيذ كافة المشريع والتعامل مع المشكلات
            </p>
          </div>

          <div className="row justify-content-center">
            {teamData &&
              teamData.slice(0, 3).map((value, i) => (
                <div
                  className="col-lg-4 col-sm-6"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay={value.aosDelay}
                  key={i}
                >
                  <div className="single-team active">
                    <div className="team-single-img">
                      <Image
                        src={value.image}
                        alt="Image"
                        width={140}
                        height={140}
                      />

                      <div className="team-img">
                        <Image
                          src={teamShape}
                          alt="Image"
                          width={208}
                          height={198}
                        />
                      </div>
                    </div>

                    <div className="team-content">
                      <h3>{value.name}</h3>
                      <span>{value.designation}</span>

                      <ul>
                        {value.socialLinks.map((value, i) => (
                          <li key={i}>
                            <a href={value.url} target="_blank">
                              <i className={value.iconName}></i>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamTwo;
