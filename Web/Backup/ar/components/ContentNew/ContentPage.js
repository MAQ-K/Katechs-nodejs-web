import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Head from "next/head";
import Navbar from "../Layouts/Navbar";
import Footer from "../Layouts/Footer";

// Renders one content-team page converted by scripts/build-content-new.js.
// The markup is the team's own, verbatim (copy + keywords are fixed); this
// component only supplies the site shell and the behaviour their inline
// <script> used to provide.
//
// ?kw=1 turns the team's keyword review layer back on (highlights + legend,
// hover a highlight for its search volume / role).

// The mockups were written against browser defaults. Put those back for the
// elements style.css / Bootstrap reboot style globally (h1-h6 font/colour,
// p size+margin, a inline-block+transition, button reset...). Zero-specificity
// :where() so every rule of the page's own CSS, emitted after this, still wins.
const RESET = `
.cn-root :where(h1,h2,h3,h4,h5,h6,p,a,ul,ol,li,button,label,legend,fieldset,mark,small,b,strong,input,select,textarea,details,summary,table,th,td,img,figure,blockquote){all:revert}
.cn-root:not(.cn-kw-review) .cn-kwbar{display:none}
.cn-root.cn-kw-review .cn-kwbar{top:110px}
.cn-root.cn-root>.cn-hero{padding-top:calc(56px + 120px)}
@media (max-width:991px){.cn-root.cn-root>.cn-hero{padding-top:calc(56px + 76px)}}
@media (max-width:720px){.cn-root.cn-root>.cn-hero{padding-top:calc(40px + 76px)}}
.cn-root .cn-rv.cn-in{transition-delay:var(--cn-d,0s)}
.cn-root .cn-subnav{position:sticky;top:var(--cn-nav,76px);z-index:20;background:rgba(255,255,255,.94);backdrop-filter:blur(10px);border-bottom:1px solid var(--line);box-shadow:0 6px 18px rgba(15,23,42,.06)}
.cn-root .cn-subnav ul{display:flex;gap:4px;max-width:1360px;margin:0 auto;padding:10px 24px;list-style:none;overflow-x:auto;scrollbar-width:none}
.cn-root .cn-subnav ul::-webkit-scrollbar{display:none}
.cn-root .cn-subnav li{margin:0;flex:none}
.cn-root .cn-subnav li:first-child{margin-inline-start:auto}
.cn-root .cn-subnav li:last-child{margin-inline-end:auto}
.cn-root .cn-subnav a{display:block;white-space:nowrap;padding:8px 14px;border-radius:100px;font-size:14px;font-weight:700;color:var(--text);text-decoration:none;transition:background .3s,color .3s}
.cn-root .cn-subnav a:hover{color:var(--cyan-d)}
.cn-root .cn-subnav a[aria-current="true"]{background:var(--cyan);color:#fff}
.cn-root>section.cn-arrive>.cn-wrap{animation:cnArrive .6s cubic-bezier(.22,1,.36,1)}
@keyframes cnArrive{from{opacity:.35;transform:translateY(14px)}to{opacity:1;transform:none}}
@media (prefers-reduced-motion:reduce){.cn-root>section.cn-arrive>.cn-wrap{animation:none}}
`;
// ^ the mockup hero's own top padding plus the fixed navbar (navbar-navy is
// 119px tall on desktop, 75px once it collapses), so the breadcrumb clears it.

// Annual price per account, copied from the email page's chooser script.
const CHOOSER_PLANS = {
  basic: ["بريد احترافي (كاتكس)", 1039],
  prod: ["بريد احترافي + الإنتاجية (كاتكس)", 1559],
  gs: ["Google Workspace Business Starter", 4199],
  gstd: ["Google Workspace Business Standard", 8711],
  ms: ["Microsoft 365 Business Standard", 6839],
};

function useMockupBehaviour(ref) {
  useEffect(() => {
    const root = ref.current;
    const $$ = (sel) => Array.from(root.querySelectorAll(sel));
    root.classList.add("cn-js");

    if (new URLSearchParams(window.location.search).get("kw") === "1") {
      root.classList.add("cn-kw-review");
      root.classList.remove("cn-kw-off");
    }

    // reveal on scroll (no-JS: everything visible)
    let io;
    if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              const el = e.target;
              el.classList.add("cn-in");
              io.unobserve(el);
              // once in, drop the reveal classes so hovers get the card's own snappier transition back
              el.addEventListener("transitionend", () => {
                el.classList.remove("cn-rv", "cn-in");
                el.style.removeProperty("--cn-d");
              }, { once: true });
            }
          }),
        { threshold: 0.12 }
      );
      $$(".cn-sec .cn-eyebrow,.cn-sec .cn-h2,.cn-sec .cn-lead,.cn-card,.cn-steps li,.cn-note-line,.cn-vid,.cn-ba,.cn-imgslot").forEach((el) => {
        el.classList.add("cn-rv");
        // cards in the same row come in one after another
        if (el.matches(".cn-card,.cn-steps li")) el.style.setProperty("--cn-d", (Array.prototype.indexOf.call(el.parentElement.children, el) % 4) * 0.09 + "s");
        io.observe(el);
      });
    }

    // tabs (no-JS: all plans visible)
    const tablists = $$("[role=tablist]").map((tl) => $$("[role=tab]").filter((t) => tl.contains(t)));
    const showTab = (tabs, t) =>
      tabs.forEach((x) => {
        const on = x === t;
        x.setAttribute("aria-selected", on);
        x.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(x.getAttribute("aria-controls"));
        if (panel) panel.hidden = !on;
      });
    tablists.forEach((tabs) => tabs.length && showTab(tabs, tabs[0]));

    // email plan chooser
    const users = root.querySelector("#ch-users");
    const calcChooser = () => {
      if (!users) return;
      const n = Math.max(1, parseInt(users.value) || 1);
      const c = (id) => root.querySelector("#" + id).checked;
      const k = c("ch-office") ? "ms" : c("ch-store") ? "gstd" : c("ch-meet") ? "gs" : c("ch-docs") ? "prod" : "basic";
      root.querySelector("#ch-plan").textContent = CHOOSER_PLANS[k][0];
      root.querySelector("#ch-cost").textContent =
        "التكلفة التقديرية: " + (n * CHOOSER_PLANS[k][1]).toLocaleString("en-US") + " ج.م سنوياً لـ " + n + " حساب";
    };
    calcChooser();

    const onClick = (e) => {
      const cur = e.target.closest(".cn-cur button");
      if (cur) {
        const c = cur.dataset.c;
        $$(".cn-cur button").forEach((x) => x.setAttribute("aria-pressed", x === cur));
        $$(".cn-price strong").forEach((s) => {
          s.firstChild.nodeValue = s.dataset[c];
          s.querySelector("span").textContent = c === "egp" ? "ج.م" : "ر.س";
        });
        $$(".cn-pv").forEach((s) => (s.textContent = s.dataset[c]));
        return;
      }
      const tab = e.target.closest("[role=tab]");
      if (tab) {
        showTab(tablists.find((tabs) => tabs.includes(tab)) || [], tab);
        return;
      }
      // video facade: the team replaces data-src with the real embed
      const vid = e.target.closest(".cn-vid-btn[data-src]");
      if (vid) {
        const i = document.createElement("iframe");
        i.src = vid.dataset.src + "?autoplay=1";
        i.allow = "autoplay; encrypted-media";
        i.allowFullscreen = true;
        i.title = vid.getAttribute("aria-label");
        i.style.cssText = "width:100%;aspect-ratio:16/9;border:0;border-radius:20px";
        vid.replaceWith(i);
        return;
      }
      const kw = e.target.closest(".cn-kwbar button");
      if (kw) {
        root.classList.toggle("cn-kw-off");
        kw.textContent = root.classList.contains("cn-kw-off") ? "إظهار التمييز" : "إخفاء التمييز";
      }
    };

    const onKey = (e) => {
      const tab = e.target.closest("[role=tab]");
      const d = e.key === "ArrowLeft" ? 1 : e.key === "ArrowRight" ? -1 : 0;
      if (!tab || !d) return;
      const tabs = tablists.find((t) => t.includes(tab)) || [];
      const n = tabs[(tabs.indexOf(tab) + d + tabs.length) % tabs.length];
      n.focus();
      showTab(tabs, n);
    };

    const onInput = (e) => {
      const range = e.target.closest(".cn-ba-range");
      if (range) {
        const f = range.closest(".cn-ba-frame");
        f.querySelector(".cn-ba-after").style.clipPath = "inset(0 0 0 " + range.value + "%)";
        f.style.setProperty("--ba", range.value + "%");
      }
      if (e.target.closest(".cn-chooser")) calcChooser();
    };

    // The chooser never submits; the quote forms have no endpoint yet
    // (the team left action="[رابط استقبال النموذج]").
    const onSubmit = (e) => {
      if (e.target.matches(".cn-chooser, [data-cn-unwired]")) e.preventDefault();
    };

    root.addEventListener("click", onClick);
    root.addEventListener("keydown", onKey);
    root.addEventListener("input", onInput);
    root.addEventListener("change", onInput);
    root.addEventListener("submit", onSubmit);
    return () => {
      io && io.disconnect();
      root.removeEventListener("click", onClick);
      root.removeEventListener("keydown", onKey);
      root.removeEventListener("input", onInput);
      root.removeEventListener("change", onInput);
      root.removeEventListener("submit", onSubmit);
    };
  }, [ref]);
}

// Sticky bar of the page's sections, labelled with each section's own eyebrow
// (the team's text). Sits right under the hero; --cn-nav tracks the fixed
// navbar's bottom, which moves when it gains .is-sticky.
// Sub-nav click: glide to the section (eased, duration scales with distance),
// then its content rises in (.cn-arrive). Our own tween because the global
// smooth-scroll hook turns CSS smooth scrolling off (html.wsv-smooth). The
// landing line is html's scroll-padding-top (--wsv-nav-h = navbar + sub-nav).
let glide = null;
function arrive(e, id) {
  const sec = document.getElementById(id);
  if (!sec) return;
  e.preventDefault();
  history.replaceState(null, "", "#" + id);
  const land = () => {
    sec.classList.remove("cn-arrive");
    void sec.offsetWidth; // restart the animation on repeat clicks
    sec.classList.add("cn-arrive");
    setTimeout(() => sec.classList.remove("cn-arrive"), 700);
  };
  const pad = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const from = window.scrollY;
  const to = Math.min(
    sec.getBoundingClientRect().top + from - pad,
    document.documentElement.scrollHeight - window.innerHeight
  );
  const dist = to - from;
  if (glide) cancelAnimationFrame(glide);
  if (Math.abs(dist) < 2 || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: to, behavior: "instant" });
    land();
    return;
  }
  const dur = Math.min(1100, 450 + Math.abs(dist) * 0.12);
  const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
  const t0 = performance.now();
  const step = (now) => {
    const t = Math.min(1, (now - t0) / dur);
    window.scrollTo({ top: from + dist * ease(t), behavior: "instant" });
    if (t < 1) glide = requestAnimationFrame(step);
    else {
      glide = null;
      land();
    }
  };
  glide = requestAnimationFrame(step);
}

function SubNav({ items }) {
  const [active, setActive] = useState(items[0].id);
  const list = useRef(null);

  useEffect(() => {
    const navbar = document.querySelector(".navbar-area");
    const onScroll = () => {
      const top = navbar ? Math.max(0, navbar.getBoundingClientRect().bottom) : 0;
      document.documentElement.style.setProperty("--cn-nav", top + "px");
      let cur = items[0].id;
      items.forEach((it) => {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top <= top + 90) cur = it.id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // .is-sticky animates the navbar's height after the scroll event has fired
    const ro = navbar && new ResizeObserver(onScroll);
    ro && ro.observe(navbar);
    return () => {
      ro && ro.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      document.documentElement.style.removeProperty("--cn-nav");
    };
  }, [items]);

  // phones: keep the active pill in view inside the horizontally scrolling bar
  useEffect(() => {
    const ul = list.current;
    const a = ul && ul.querySelector('[aria-current="true"]');
    if (!a || ul.scrollWidth <= ul.clientWidth) return;
    const r = a.getBoundingClientRect();
    const u = ul.getBoundingClientRect();
    ul.scrollBy({ left: r.left + r.width / 2 - (u.left + u.width / 2), behavior: "smooth" });
  }, [active]);

  return (
    <nav aria-label="أقسام الصفحة">
      <ul ref={list}>
        {items.map((it) => (
          <li key={it.id}>
            <a
              href={"#" + it.id}
              aria-current={it.id === active ? "true" : undefined}
              onClick={(e) => arrive(e, it.id)}
            >
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// The team's markup is one innerHTML string, so the sub-nav is portalled into
// a slot inserted after their hero rather than rendered in the JSX tree.
function useSubNav(ref, on) {
  const [nav, setNav] = useState(null);
  useEffect(() => {
    if (!on) return undefined;
    const root = ref.current;
    const hero = root.querySelector(":scope > .cn-hero");
    const items = Array.from(root.querySelectorAll(":scope > section"))
      .filter((s) => s !== hero)
      .map((s, i) => {
        const eb = s.querySelector(".cn-eyebrow");
        if (!eb) return null;
        if (!s.id) s.id = "cn-s" + i;
        return { id: s.id, label: eb.textContent.trim() };
      })
      .filter(Boolean);
    if (!items.length) return undefined;
    const slot = document.createElement("div");
    slot.className = "cn-subnav";
    hero ? hero.after(slot) : root.prepend(slot);
    setNav({ slot, items });
    return () => {
      slot.remove();
      setNav(null);
    };
  }, [ref, on]);
  return nav;
}

// theme.decor: [{ section, className, node }] — a React node (e.g. ParticleField)
// rendered into a slot prepended to the Nth top-level <section> of the team's markup.
function useDecor(ref, decor) {
  const [slots, setSlots] = useState([]);
  useEffect(() => {
    if (!decor || !decor.length) return undefined;
    const secs = ref.current.querySelectorAll(":scope > section");
    const made = decor.map((d) => {
      const sec = secs[d.section];
      if (!sec) return null;
      const el = document.createElement("div");
      el.className = d.className;
      el.setAttribute("aria-hidden", "true");
      sec.prepend(el);
      return el;
    });
    setSlots(made);
    return () => {
      made.forEach((el) => el && el.remove());
      setSlots([]);
    };
  }, [ref, decor]);
  return slots;
}

export default function ContentPage({ page, theme }) {
  const ref = useRef(null);
  useMockupBehaviour(ref);
  const subnav = useSubNav(ref, theme && theme.subnav);
  const decor = useDecor(ref, theme && theme.decor);
  // a theme may add decorative (aria-hidden, text-free) DOM around the team's markup
  useEffect(() => (theme && theme.enhance ? theme.enhance(ref.current) : undefined), [theme]);

  return (
    <>
      <Head>
        <title>{page.title}</title>
        {page.meta.map((m, i) => (
          <meta key={i} {...m} />
        ))}
        {page.canonical && <link rel="canonical" href={page.canonical} />}
        {/* Review copies under -new URLs: keep them out of the index until they replace the live pages. */}
        <meta name="robots" content="noindex, nofollow" />
        {page.jsonLd.map((j, i) => (
          <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: j }} />
        ))}
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar theme="navy" />

      <style dangerouslySetInnerHTML={{ __html: RESET + page.css + (theme ? theme.css : "") }} />
      <div ref={ref} className="cn-root cn-kw-off" dir="rtl" dangerouslySetInnerHTML={{ __html: page.html }} />
      {subnav && createPortal(<SubNav items={subnav.items} />, subnav.slot)}
      {decor.map((el, i) => el && createPortal(theme.decor[i].node, el, "decor" + i))}

      <Footer />
    </>
  );
}
