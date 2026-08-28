import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { useReducedMotion } from "framer-motion";
import { projects } from "../../data/services/data";

// Client work as a full-bleed showcase ribbon: no heading, no captions, just
// the sites drifting past. delay:0 + a linear wrapper transition is the marquee
// recipe — without the linear override Swiper eases each step and it stutters.
//
// No arrows: the ribbon is dragged, not stepped. freeMode lets a drag land
// anywhere instead of snapping back to a slide edge, and grabCursor is what
// swaps the pointer to grab/grabbing so it reads as draggable on hover.

const Projects = () => {
  const reduced = useReducedMotion();

  // Six slides barely cover 1.5 viewports, which is not enough for Swiper's
  // loop to stay seamless on a wide screen — it opens a gap. Doubling the list
  // is the usual marquee guard.
  const track = [...projects, ...projects];

  return (
    <section className="wsv-projects" id="wsv-projects">
      <Swiper
        dir="rtl"
        modules={[Autoplay, FreeMode]}
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
        grabCursor={true}
        // momentum keeps the flick gesture feeling loose; the bounce is off so
        // a hard drag can't rubber-band a looping marquee.
        freeMode={{ enabled: true, momentum: true, momentumBounce: false }}
        className="wsv-projects-swiper"
      >
        {track.map((p, i) => (
          <SwiperSlide key={`${p.id}-${i}`} className="wsv-project-slide">
            <img src={p.image} alt={i < projects.length ? p.name : ""} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
