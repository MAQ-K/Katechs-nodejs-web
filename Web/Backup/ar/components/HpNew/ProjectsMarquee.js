import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import { webServices } from "../../data/home-new/data";

// Web services, block 2 of 3. Structure unchanged from the 2026-09-09
// "first attempt" restore — image-only cards, swipe/drag or arrow keys when
// focused. VISUAL pass only: moved off the light/monochrome palette onto the
// same navy the brief block above it now uses, so the two read as one
// section instead of a seam. See WebServicesBrief.js for the token notes.
export default function ProjectsMarquee({ projects = webServices.projects }) {
  const slider = useRef(null);
  if (!projects?.length) return null;
  const move = (direction) => {
    const instance = slider.current;
    if (!instance || instance.destroyed) return;
    const speed = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 450;
    if (direction < 0) instance.slidePrev(speed);
    else instance.slideNext(speed);
  };
  return (
    <div className="hp-marquee-wrap">
      <div className="hp-marquee-inner">
        <div className="hp-marquee" id="hp-projects-carousel" role="region" aria-labelledby="hp-projects-title" dir="ltr" tabIndex={0}
          onKeyDown={(event) => { if (event.key === "ArrowLeft" || event.key === "ArrowRight") { event.preventDefault(); move(event.key === "ArrowLeft" ? -1 : 1); } }}>
          <Swiper modules={[A11y]} onSwiper={(instance) => { slider.current = instance; }} slidesPerView={1.15} spaceBetween={16} rewind
            breakpoints={{ 576: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
            a11y={{ containerRoleDescriptionMessage: "معرض المشاريع", itemRoleDescriptionMessage: "مشروع", slideLabelMessage: "{{index}} / {{slidesLength}}" }}>
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <figure className="hp-marquee-item">
                  <img src={project.image} alt={project.name} width="1448" height="1086" loading="lazy" draggable="false" />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style jsx>{`
        .hp-marquee-wrap { background: #050c1a; padding: 6px 0 clamp(56px, 7vw, 88px); color: #fff; font-family: "Cairo", sans-serif; }
        .hp-marquee-inner { width: min(1180px, calc(100% - 48px)); margin: auto; }
        .hp-marquee:focus-visible { outline: 2px solid #1dd3f8; outline-offset: 4px; border-radius: 14px; }
        .hp-marquee { min-width: 0; direction: ltr; -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent); mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent); }
        .hp-marquee :global(.swiper) { cursor: grab; overflow: visible; }
        .hp-marquee :global(.swiper:active) { cursor: grabbing; }
        .hp-marquee-item { position: relative; border: 1px solid rgba(255, 255, 255, 0.14); border-radius: 14px; overflow: hidden; background: #0d1a30; margin: 0; box-shadow: 0 20px 50px -28px rgba(0, 0, 0, 0.75); transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease; }
        .hp-marquee-item:hover { border-color: rgba(29, 211, 248, 0.45); transform: translateY(-4px); box-shadow: 0 24px 56px -24px rgba(29, 211, 248, 0.2); }
        .hp-marquee-item img { display: block; width: 100%; height: auto; aspect-ratio: 4/3; object-fit: cover; }
        @media (max-width: 767px) { .hp-marquee-inner { width: calc(100% - 32px); } }
        @media (prefers-reduced-motion: reduce) { .hp-marquee :global(.swiper-wrapper) { transition-duration: 0ms !important; } .hp-marquee-item { transition: none; } .hp-marquee-item:hover { transform: none; } }
      `}</style>
    </div>
  );
}
