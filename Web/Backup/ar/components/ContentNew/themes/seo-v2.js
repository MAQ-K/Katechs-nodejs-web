// UI pass on /seo-new/quote-v2/ (user review, 2026-10-29) — the general edits
// only, so far; section rules get appended as the user walks the page.
// The team's own palette stays (no "old page theme" was asked for here).

import { generalCss } from "./base";

// top-level sections of the team's page, by position (the hero is the 1st)
const S1 = ".cn-root>section:nth-of-type(2)";

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
${S1} .cn-feat{border:1px solid rgba(220,38,38,.12);border-inline-start:4px solid rgba(220,38,38,.55);box-shadow:0 10px 28px -8px rgba(220,38,38,.22)}
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
`;

const seoV2Theme = { css, subnav: true };
export default seoV2Theme;
