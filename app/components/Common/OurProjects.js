import React, { useRef } from "react";
import Image from "next/image";

import afaqImg from "../../public/images/projects/afaqedu-project.png";
import alamoudiImg from "../../public/images/projects/alamoudi-projects.png";
import doffoImg from "../../public/images/projects/Doffo-Project.png";
import risaImg from "../../public/images/projects/risa-salt-project.png";
import tabqatImg from "../../public/images/projects/tabqat-project.png";
import voirImg from "../../public/images/projects/voirboutiq-project.png";

const projects = [
  { title: "شركة آفاق التعليمية", img: afaqImg },
  { title: "متجر العمودي", img: alamoudiImg },
  { title: "دفو تطبيق بيع وشراء", img: doffoImg },
  { title: "شركة الرياض لصناعة الملح", img: risaImg },
  { title: "شركة الطبقات المتعددة", img: tabqatImg },
  { title: "متجر فوا", img: voirImg },
];

const OurProjects = () => {
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const moved = useRef(false);

  const startDrag = (pageX) => {
    isDragging.current = true;
    moved.current = false;
    startX.current = pageX;
    startScrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.classList.add("dragging");
  };

  const drag = (pageX) => {
    if (!isDragging.current) return;
    const walk = pageX - startX.current;
    if (Math.abs(walk) > 5) moved.current = true;
    trackRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const endDrag = () => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.classList.remove("dragging");
  };

  const handleMouseDown = (e) => {
    e.preventDefault();
    startDrag(e.pageX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    drag(e.pageX);
  };

  const handleClickCapture = (e) => {
    if (moved.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <>
      <section className="our-projects-area pt-70 pb-100">
        <div className="container">
          <div className="section-title">
            <h3>خبرة أثبتناها في كل مشروع</h3>
            <p>كل مشروع في معرض أعمالنا هو قصة نجاح لعميل وثق بنا لتحويل فكرته إلى منصة رقمية احترافية جاهزة للانطلاق</p>
          </div>
        </div>

        <div
          className="our-projects-track"
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={endDrag}
          onMouseLeave={endDrag}
          onClickCapture={handleClickCapture}
        >
          {projects.map((project, index) => (
            <div className="our-projects-item" key={index}>
              <div className="our-projects-img">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 75vw, 420px"
                  style={{ objectFit: "cover" }}
                  draggable={false}
                />
              </div>
              <h4>{project.title}</h4>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default OurProjects;
