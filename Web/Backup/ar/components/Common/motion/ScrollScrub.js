import React, { useRef } from "react";
import { useScroll, useReducedMotion } from "framer-motion";

// Pinned, scroll-scrubbed section — motion.csv #6 (Scroll Reveal · Complex),
// the "scrollytelling" preset. The GSAP version needs ScrollTrigger's pin; this
// gets there with `position: sticky` plus framer's scroll progress, so it costs
// nothing extra.
//
// How it works: the outer element is `height * 100vh` tall, the inner one sticks
// to the viewport for that whole distance, and `progress` (0 → 1) is handed to
// the children as a render prop. Everything driven by it scrubs with the scroll
// rather than playing on a timer.
//
// Under reduced motion the section collapses to a normal, non-pinned block and
// the children get progress = 1 (their finished state).
const ScrollScrub = ({ children, height = 2.5, className, stickyClassName }) => {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  if (reduced) {
    return (
      <section className={className}>
        <div className={stickyClassName}>{children(null, true)}</div>
      </section>
    );
  }

  return (
    <section ref={ref} className={className} style={{ height: `${height * 100}vh`, position: "relative" }}>
      <div
        className={stickyClassName}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children(scrollYProgress, false)}
      </div>
    </section>
  );
};

// Callers map the progress themselves with framer's own useTransform — no
// wrapper here, because a wrapper would have to fake a MotionValue for the
// reduced-motion path and that breaks in ways that are hard to see.
// The render prop's second argument tells you when you're in that path:
//
//   <ScrollScrub>
//     {(progress, isStatic) =>
//       isStatic ? <Final /> : <Scene progress={progress} />
//     }
//   </ScrollScrub>
//
// ...and inside <Scene>: const x = useTransform(progress, [0, 1], [0, -400]);

export default ScrollScrub;
