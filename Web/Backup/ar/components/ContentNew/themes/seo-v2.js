// UI pass on /seo-new/quote-v2/ (user review, 2026-10-29) — the general edits
// only, so far; section rules get appended as the user walks the page.
// The team's own palette stays (no "old page theme" was asked for here).

import { generalCss } from "./base";

// top-level sections of the team's page, by position (the hero is the 1st)
const S1 = ".cn-root>section:nth-of-type(2)";
const S2 = ".cn-root>section:nth-of-type(3)";

const css = `
${generalCss("/images/seo.png")}

/* hovers */
.cn-root .cn-card{transition:transform .25s,box-shadow .25s,border-color .25s}
.cn-root .cn-type .cn-ic{transition:background .3s,color .3s,transform .3s}
.cn-root .cn-type:hover .cn-ic{background:#1dd3f8;color:#fff;transform:scale(1.06)}
.cn-root .cn-case-img{transition:transform .5s ease}
.cn-root .cn-case:hover .cn-case-img{transform:scale(1.03)}
.cn-root details.cn-faq summary{transition:color .25s}
.cn-root details.cn-faq summary:hover{color:var(--cyan-d)}
.cn-root .cn-note-line a{transition:color .25s}
.cn-root .cn-note-line a:hover{color:var(--ink)}

/* section 1 — "هل يبدو هذا مألوفاً؟" (user's sketch): label + intro on top, the 3
   problem cards stacked on the right beside the video, one screen. The cards carry
   a red-tinted shadow so they read as problems. !important only beats the team's
   inline style="" margins/sizes. */
${S1} .cn-feat{border:0;box-shadow:0 10px 28px -8px rgba(220,38,38,.22)}
${S1} .cn-feat:hover{box-shadow:0 18px 38px -10px rgba(220,38,38,.34)}
${S1} .cn-feat b{color:#b42318}
@media (min-width:992px){
${S1}{display:flex;flex-direction:column;min-height:calc(100vh - var(--wsv-nav-h));padding:clamp(16px,3.4vh,56px) 0}
${S1}>.cn-wrap{flex:1;width:100%;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.25fr);grid-template-rows:auto auto 1fr auto;column-gap:clamp(28px,3.4vw,56px)}
${S1} .cn-eyebrow{grid-column:1/-1;grid-row:1;margin:0 0 clamp(6px,1.2vh,14px)!important;font-size:clamp(14px,1.8vh,16px)}
${S1}>.cn-wrap>div.cn-center{grid-column:1/-1;grid-row:2}
${S1} .cn-lead{font-size:clamp(16px,2.2vh,20px)!important}
${S1} .cn-g3{grid-column:1;grid-row:3;align-self:center;grid-template-columns:1fr;gap:clamp(10px,1.8vh,18px);margin:clamp(16px,3vh,40px) 0 0!important}
${S1} .cn-feat{padding:clamp(14px,2.2vh,24px) clamp(18px,1.8vw,26px)}
${S1} .cn-vid{grid-column:2;grid-row:3;align-self:center;justify-self:center;width:100%;max-width:min(100%,calc((100vh - var(--wsv-nav-h) - 290px) * 16 / 9));margin:clamp(16px,3vh,40px) 0 0}
${S1} .cn-vid figcaption{margin-top:clamp(6px,1.2vh,12px)}
${S1} .cn-note-line{grid-column:1/-1;grid-row:4;margin:clamp(10px,2vh,28px) 0 0}
}
@media (min-width:1500px){${S1}>.cn-wrap{max-width:1320px}}
@media (min-width:992px) and (max-height:800px){${S1}{padding:10px 0}${S1} .cn-g3{gap:8px}${S1} .cn-feat{padding:10px 18px}${S1} .cn-feat span{line-height:1.7}}

/* section 2 — "ما الذي ستكسبه": horizontal accordion (user's reference). The 6
   cards share one panel; a closed card is a strip with its number and its title
   turned sideways, the open one (hover / focus / click, first open by default)
   widens to show the title, the text and an icon tile. Phones: plain cards. */
${S2} .cn-g3{counter-reset:gain}
${S2} .cn-feat{counter-increment:gain}
${S2} .cn-feat::before{content:counter(gain,decimal-leading-zero);font:700 13px/1 ui-monospace,Consolas,monospace;color:var(--muted);letter-spacing:.5px}
${S2} .cn-gx-vis{display:none}
@media (min-width:992px){
${S2}{--strip:clamp(64px,5.4vw,84px);--vis:clamp(150px,24vh,240px);--gapc:clamp(24px,3vw,48px);--padl:clamp(22px,3vw,40px);display:flex;flex-direction:column;min-height:calc(100vh - var(--wsv-nav-h));padding:clamp(16px,3.4vh,56px) 0}
${S2}>.cn-wrap{flex:1;width:100%;display:flex;flex-direction:column}
${S2} .cn-h2{font-size:clamp(26px,3.8vh,40px)}
${S2} .cn-lead{margin-top:clamp(4px,1vh,14px);font-size:clamp(15px,1.9vh,18px)}
${S2} .cn-g3{flex:1;display:flex;gap:0;min-height:280px;max-height:520px;margin-top:clamp(18px,3.4vh,44px)!important;background:#fff;border-radius:18px;box-shadow:0 18px 40px -18px rgba(15,23,64,.18);overflow:hidden;container-type:inline-size}
${S2} .cn-feat{position:relative;flex:0 0 var(--strip);min-width:0;margin:0;border-radius:0;box-shadow:none;background:transparent;border-inline-start:1px solid var(--line);padding:0;overflow:hidden;cursor:pointer;transform:none!important;transition:flex-grow .6s cubic-bezier(.22,1,.36,1),background-color .4s}
${S2} .cn-feat:first-child{border-inline-start:0}
${S2} .cn-feat:hover{box-shadow:none}
${S2} .cn-feat:not(.is-open):hover{background:#f7fbfd}
${S2} .cn-feat:focus-visible{outline:2px solid #1dd3f8;outline-offset:-4px}
${S2} .cn-feat::before{position:absolute;top:clamp(18px,3vh,28px);right:0;width:var(--strip);text-align:center}
${S2} .cn-feat>b{position:absolute;bottom:clamp(18px,3vh,28px);right:calc(var(--strip) / 2);transform:translateX(50%) rotate(180deg);writing-mode:vertical-rl;white-space:nowrap;font-size:clamp(15px,1.9vh,17px);color:var(--ink)}
${S2} .cn-feat>span{display:none}
/* The open card's columns are sized from the PANEL's width (100cqw), not the
   card's, so its content is laid out at its final size from the first frame:
   as the card widens it just uncovers it (overflow:hidden) instead of
   re-wrapping the text on every frame. Open width = panel − 5 strips. */
${S2} .cn-feat.is-open{flex-grow:1;cursor:default;display:grid;grid-template-columns:calc(100cqw - 6 * var(--strip) - 8px - var(--padl) - var(--vis) - var(--gapc)) var(--vis);grid-template-rows:1fr auto;column-gap:var(--gapc);padding:clamp(22px,3.4vh,40px) calc(var(--strip) + 8px) clamp(22px,3.4vh,40px) var(--padl)}
${S2} .cn-feat.is-open>b{position:static;transform:none;writing-mode:horizontal-tb;white-space:normal;grid-column:1;grid-row:1;align-self:start;font-size:clamp(24px,3.6vh,36px);line-height:1.35;color:var(--head,#212121);animation:cnGxIn .45s .22s cubic-bezier(.22,1,.36,1) both}
${S2} .cn-feat.is-open>span{display:block;grid-column:1;grid-row:2;align-self:end;max-width:440px;font-size:clamp(15px,1.9vh,17px);line-height:1.9;animation:cnGxIn .45s .3s cubic-bezier(.22,1,.36,1) both}
${S2} .cn-feat.is-open>.cn-gx-vis{display:flex;grid-column:2;grid-row:1/3;align-self:center;width:var(--vis);aspect-ratio:1;align-items:center;justify-content:center;border-radius:14px;background-image:linear-gradient(rgba(15,143,174,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(15,143,174,.09) 1px,transparent 1px),linear-gradient(160deg,#eafcff,#d3f4fb);background-size:28px 28px,28px 28px,auto;font-size:clamp(48px,7vh,72px);color:#0f8fae;animation:cnGxIn .45s .28s cubic-bezier(.22,1,.36,1) both}
${S2} .cn-feat.is-open::before{color:#0f8fae}
@keyframes cnGxIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
}
@media (min-width:1500px){${S2}>.cn-wrap{max-width:1320px}}
@media (prefers-reduced-motion:reduce){${S2} .cn-feat{transition:none}${S2} .cn-feat.is-open>*{animation:none}}
`;

// Section 2 accordion: decorative icon tile per card (aria-hidden, text-free),
// mapped by position to the team's 6 gains; hover / focus / click opens a card.
const GAIN_ICONS = ["bx-target-lock", "bx-line-chart", "bx-message-dots", "bx-shield-quarter", "bx-refresh", "bx-trending-up"];

function enhance(root) {
  const sec = root.querySelectorAll(":scope > section")[2];
  const cards = sec ? Array.from(sec.querySelectorAll(".cn-g3 > .cn-feat")) : [];
  if (cards.length !== GAIN_ICONS.length) return undefined;
  const tiles = cards.map((card, i) => {
    const d = document.createElement("div");
    d.className = "cn-gx-vis";
    d.setAttribute("aria-hidden", "true");
    d.innerHTML = `<i class="bx ${GAIN_ICONS[i]}"></i>`;
    card.append(d);
    card.tabIndex = 0;
    return d;
  });
  const open = (card) => cards.forEach((c) => {
    c.classList.toggle("is-open", c === card);
    c.setAttribute("aria-expanded", c === card ? "true" : "false");
  });
  open(cards[0]);
  const cardOf = (e) => {
    const card = e.target.closest && e.target.closest(".cn-feat");
    return card && cards.includes(card) && !card.classList.contains("is-open") ? card : null;
  };
  const pick = (e) => {
    const card = cardOf(e);
    if (card) open(card);
  };
  // hover intent: only a strip the pointer rests on opens, so sweeping across
  // the panel to reach one doesn't open every strip on the way
  let wait = null;
  const hover = (e) => {
    clearTimeout(wait);
    const card = cardOf(e);
    if (card) wait = setTimeout(() => open(card), 120);
  };
  sec.addEventListener("mouseover", hover);
  sec.addEventListener("focusin", pick);
  sec.addEventListener("click", pick);
  return () => {
    clearTimeout(wait);
    sec.removeEventListener("mouseover", hover);
    sec.removeEventListener("focusin", pick);
    sec.removeEventListener("click", pick);
    tiles.forEach((t) => t.remove());
    cards.forEach((c) => {
      c.classList.remove("is-open");
      c.removeAttribute("aria-expanded");
      c.removeAttribute("tabindex");
    });
  };
}

const seoV2Theme = { css, subnav: true, enhance };
export default seoV2Theme;
