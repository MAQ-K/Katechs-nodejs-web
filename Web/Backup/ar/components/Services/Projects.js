import React from "react";
import CoverflowCarousel from "../Sections/CoverflowCarousel";
import { projects } from "../../data/services/data";

// Client work as a 3D cover-flow ring. Replaced the Swiper marquee: that one
// drifted past and could not be stopped on a single project, this one has a
// focused centre card, so each site gets its name and type read alongside it.
//
// The carousel itself is a portable Sections/ component and knows nothing about
// this page — mapping data/services/data.js onto its slide shape is this file's
// only job. No duplication of the list: `projects` stays the single source.
//
// Cards are 4:3 because every screenshot in public/images/projects is 1448x1086;
// leaving the carousel's square default would have cropped a quarter off each.
//
// No arrows here: it advances on its own every 4s and can be dragged, so the
// buttons were a third way to do the same thing. Autoplay pauses on hover and
// on focus, and arrow keys still step it once the frame is focused.

const Projects = () => {
  const slides = projects.map((p) => ({
    src: p.image,
    alt: p.name,
    title: p.name,
    subtitle: p.type,
  }));

  return (
    <section className="wsv-projects" id="wsv-projects">
      <CoverflowCarousel
        slides={slides}
        cardWidth="clamp(210px, 30vw, 380px)"
        cardHeight="clamp(158px, 22.5vw, 285px)"
        autoplay={4000}
        showCaption
        label="أعمالنا"
      />
    </section>
  );
};

export default Projects;
