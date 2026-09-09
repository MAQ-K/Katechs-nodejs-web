import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay } from "swiper/modules";
import { webServices } from "../../data/home-new/data";

// Web services, block 2 of 3 — image-only project cards under the brief.
// Swipe/drag, or arrow keys when the region is focused.
//
// ---- restored 2026-09-09 ----
// A revision earlier the same day cut these down to a thin fixed-height strip
// and moved the "من أعمالنا" heading in here, to buy room for a one-screen
// layout. The user rejected that layout. The cards are cards again, and the
// heading lives back at the foot of the brief's text column where it sits
// directly above them — this block still points its aria-labelledby at it.
//
// ---- LIGHT PASS (2026-09-09, user) ----
// Was navy. Now white tiles with #e2e2e2 hairlines on the screen's #f7f7f7,
// the same light system the other two blocks moved onto in the same pass. The
// band itself belongs to WebServicesScreen — this block only spaces itself.
export default function ProjectsMarquee({ projects = webServices.projects }) {
  const slider = useRef(null);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  useEffect(() => {
    if (reduced) slider.current?.autoplay?.stop();
    else slider.current?.autoplay?.start();
  }, [reduced]);
  if (!projects?.length) return null;
  const move = (direction) => {
    const instance = slider.current;
    if (!instance || instance.destroyed) return;
    const speed = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? 0
      : 450;
    if (direction < 0) instance.slidePrev(speed);
    else instance.slideNext(speed);
  };
  return (
    <div className="hp-marquee-wrap">
      <div className="hp-marquee-inner">
        <div
          className="hp-marquee"
          id="hp-projects-carousel"
          role="region"
          aria-labelledby="hp-projects-title"
          dir="ltr"
          tabIndex={0}
          onFocus={() => slider.current?.autoplay?.stop()}
          onBlur={(event) => {
            if (!reduced && !event.currentTarget.contains(event.relatedTarget)) slider.current?.autoplay?.start();
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              move(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
        >
          <Swiper
            modules={[A11y, Autoplay]}
            autoplay={reduced ? false : { delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            speed={reduced ? 0 : 700}
            onSwiper={(instance) => {
              slider.current = instance;
            }}
            slidesPerView={1.15}
            spaceBetween={16}
            rewind
            breakpoints={{ 576: { slidesPerView: 2 }, 992: { slidesPerView: 3 } }}
            a11y={{
              containerRoleDescriptionMessage: "معرض المشاريع",
              itemRoleDescriptionMessage: "مشروع",
              slideLabelMessage: "{{index}} / {{slidesLength}}",
            }}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <figure className="hp-marquee-item">
                  <img
                    src={project.image}
                    alt={project.name}
                    width="1448"
                    height="1086"
                    loading="lazy"
                    draggable="false"
                  />
                </figure>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <style jsx>{`
        .hp-marquee-wrap {
          padding: 6px 0 clamp(56px, 7vw, 88px);
          font-family: "Cairo", system-ui, sans-serif;
        }
        .hp-marquee-inner {
          width: min(1180px, calc(100% - 48px));
          margin: auto;
        }
        .hp-marquee:focus-visible {
          outline: 2px solid #1dd3f8;
          outline-offset: 4px;
          border-radius: 14px;
        }
        .hp-marquee {
          overflow: hidden;
          min-width: 0;
          direction: ltr;
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            #000 10%,
            #000 90%,
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            #000 10%,
            #000 90%,
            transparent
          );
        }
        .hp-marquee :global(.swiper) {
          cursor: grab;
          overflow: visible;
        }
        .hp-marquee :global(.swiper:active) {
          cursor: grabbing;
        }
        .hp-marquee-item {
          position: relative;
          border: 1px solid #e2e2e2;
          border-radius: 14px;
          overflow: hidden;
          background: #fff;
          margin: 0;
          box-shadow: 0 14px 34px -26px rgba(10, 31, 68, 0.45);
          transition: border-color 0.25s ease, transform 0.25s ease,
            box-shadow 0.25s ease;
        }
        .hp-marquee-item:hover {
          border-color: rgba(29, 211, 248, 0.7);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -24px rgba(10, 31, 68, 0.45);
        }
        .hp-marquee-item img {
          display: block;
          width: 100%;
          height: auto;
          aspect-ratio: 4/3;
          object-fit: cover;
        }
        @media (max-width: 767px) {
          .hp-marquee-inner {
            width: calc(100% - 32px);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hp-marquee :global(.swiper-wrapper) {
            transition-duration: 0ms !important;
          }
          .hp-marquee-item {
            transition: none;
          }
          .hp-marquee-item:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}
