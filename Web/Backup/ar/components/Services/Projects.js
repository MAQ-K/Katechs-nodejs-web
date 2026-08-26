import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useReducedMotion } from "framer-motion";
import { projects } from "../../data/services/data";

// Client work as a full-bleed showcase ribbon: no heading, no captions, just
// the sites drifting past. delay:0 + a linear wrapper transition is the marquee
// recipe — without the linear override Swiper eases each step and it stutters.

const Projects = () => {
  const swiperRef = useRef(null);
  const reduced = useReducedMotion();

  // Arrows must not inherit speed={5000}, or a click takes five seconds.
  const step = (dir) => {
    const s = swiperRef.current;
    if (!s) return;
    if (dir === "next") s.slideNext(600);
    else s.slidePrev(600);
  };

  return (
    <section className="wsv-projects" id="wsv-projects">
      <Swiper
        dir="rtl"
        onSwiper={(s) => (swiperRef.current = s)}
        modules={[Autoplay]}
        slidesPerView="auto"
        spaceBetween={20}
        loop={true}
        speed={reduced ? 600 : 5000}
        autoplay={
          reduced
            ? false
            : { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }
        }
        allowTouchMove={true}
        className="wsv-projects-swiper"
      >
        {projects.map((p) => (
          <SwiperSlide key={p.id} className="wsv-project-slide">
            <img src={p.image} alt={p.name} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        className="wsv-arrow wsv-arrow-start"
        aria-label="السابق"
        onClick={() => step("prev")}
      >
        <i className="bx bx-chevron-right"></i>
      </button>
      <button
        type="button"
        className="wsv-arrow wsv-arrow-end"
        aria-label="التالي"
        onClick={() => step("next")}
      >
        <i className="bx bx-chevron-left"></i>
      </button>
    </section>
  );
};

export default Projects;
