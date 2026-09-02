import useSmoothScroll from "../Services/useSmoothScroll";

// The sliding scroll, for every page that is not /services.
//
// "Slide scroll for all pages (not mechanism just the slide)" — so this mounts
// useSmoothScroll with `snap: false`, which is its default: the page eases
// toward where the wheel points and glides to a stop, and nothing jumps between
// sections. The area-to-area push-to-cross mechanic stays exclusive to
// /services, which opts in with `{ snap: true }`.
//
// Renders nothing. It exists as a component only because a hook cannot be
// called conditionally — _app.js has to be able to leave it out entirely on
// /services, where the page mounts its own instance. Two live instances would
// both preventDefault the same wheel event and both write window.scrollTo, so
// exactly one must exist at a time.
//
// Only `wheel` is intercepted; keyboard, scrollbar dragging and touch stay
// native, and the whole thing disables itself under prefers-reduced-motion.
const SmoothScrollGlobal = () => {
  useSmoothScroll();
  return null;
};

export default SmoothScrollGlobal;
