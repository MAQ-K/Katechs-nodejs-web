// UI pass on /services/emails-new/ (user review, 2026-10-29). Layered after the
// team's own CSS, so it only restyles: the markup and copy stay theirs.
// Look = the old /services/emails/ page (style.scss: $main-color #1dd3f8,
// $heading-color, $body-color, Almarai, the soft-emboss card shadow,
// .default-btn). Not its layout or data.

import React from "react";
import ParticleField from "../../Common/ParticleField";
import { generalCss } from "./base";

// top-level sections of the team's page, by position (the hero is the 1st)
const S2 = ".cn-root>section:nth-of-type(3)";
const S3 = ".cn-root>section:nth-of-type(4)";
const S4 = ".cn-root>section:nth-of-type(5)";
const S5 = ".cn-root>section:nth-of-type(6)";

const css = `
.cn-root{--navy:#0a1f44;--ink:#0a1f44;--cyan:#1dd3f8;--cyan-d:#0a9cbd;--bg:#fff;--text:#4d4d4d;--muted:#6b7280;--line:rgba(15,23,42,.08);--head:#212121;
--emboss:0 7.77px 16px rgba(15,23,42,.06),0 3px 3px rgba(15,23,42,.08),inset 0 -8px 0 rgba(0,0,0,.03),inset 0 4px 0 rgba(255,255,255,.6);
--emboss-h:0 18px 30px -12px rgba(15,23,42,.14),0 3px 3px rgba(15,23,42,.08),inset 0 -8px 0 rgba(0,0,0,.03),inset 0 4px 0 rgba(255,255,255,.6);
font-family:"Almarai",sans-serif;background:var(--bg)}
.cn-root .cn-h2{color:var(--head)}
${generalCss("/images/cta-bg.jpg")}

/* cards: the old page's soft-emboss recipe */
.cn-root .cn-card{border-radius:16px;box-shadow:var(--emboss)}
.cn-root .cn-card:hover{box-shadow:var(--emboss-h)}
.cn-root .cn-cta{background:var(--ink)}

/* plan tabs + currency switch: the old page's pill tabs */
.cn-root .cn-tabs{gap:12px}
.cn-root .cn-tabs button{border:0;border-radius:100px;padding:0 24px;background:#fff;color:var(--head);box-shadow:0 5px 11px rgba(15,23,42,.055),0 2px 2px rgba(15,23,42,.09),inset 0 -5px 0 rgba(0,0,0,.03),inset 0 2.5px 0 rgba(255,255,255,.55);transition:background .3s,color .3s,transform .2s}
.cn-root .cn-tabs button:hover{transform:translateY(-2px);color:var(--cyan-d)}
.cn-root .cn-tabs button[aria-selected="true"],.cn-root .cn-cur button[aria-pressed="true"]{background:var(--cyan);color:#fff}

/* section 1 — "لماذا بريد باسم شركتك؟" (section 2 of type: the hero is the first) */
.cn-root>section:nth-of-type(2) .cn-eyebrow{font-size:34px;font-weight:800;line-height:1.45;color:var(--head);margin-bottom:18px}
.cn-root>section:nth-of-type(2) .cn-eyebrow.cn-center{font-size:28px}
@media (max-width:720px){.cn-root>section:nth-of-type(2) .cn-eyebrow{font-size:26px}.cn-root>section:nth-of-type(2) .cn-eyebrow.cn-center{font-size:23px}}
.cn-root>section:nth-of-type(2) .cn-eyebrow::after{content:"";display:block;width:56px;height:4px;border-radius:2px;background:var(--cyan);margin-top:14px}
.cn-root>section:nth-of-type(2) .cn-eyebrow.cn-center::after{margin-inline:auto}
.cn-root>section:nth-of-type(2) .cn-imgslot{background:url(/images/google-email1-scaled.webp) center/94% auto no-repeat,linear-gradient(160deg,#eafcff,#d3f4fb 55%,#bce8f3);box-shadow:var(--emboss)}
.cn-root>section:nth-of-type(2) .cn-imgslot>span{visibility:hidden}
.cn-root>section:nth-of-type(2) .cn-g3{counter-reset:pain}
.cn-root>section:nth-of-type(2) .cn-feat{counter-increment:pain;position:relative;overflow:hidden;padding:30px 28px;gap:10px}
.cn-root>section:nth-of-type(2) .cn-feat::before{content:counter(pain,decimal-leading-zero);width:48px;height:48px;border-radius:14px;background:#e9fbff;color:var(--cyan-d);font-weight:800;font-size:17px;display:flex;align-items:center;justify-content:center;margin-bottom:8px;transition:background .3s,color .3s}
.cn-root>section:nth-of-type(2) .cn-feat::after{content:"";position:absolute;top:0;right:0;width:0;height:4px;background:var(--cyan);transition:width .45s ease}
.cn-root>section:nth-of-type(2) .cn-feat:hover::before{background:var(--cyan);color:#fff}
.cn-root>section:nth-of-type(2) .cn-feat:hover::after{width:100%}
.cn-root>section:nth-of-type(2) .cn-feat b{font-size:19px;line-height:1.55;padding-bottom:12px;border-bottom:1px solid var(--line)}
.cn-root>section:nth-of-type(2) .cn-feat span{font-size:15px;line-height:1.9}
@media (min-width:1081px){.cn-root>section:nth-of-type(2) .cn-feat b{min-height:calc(2 * 1.55em + 12px)}}
.cn-root>section:nth-of-type(2) .cn-note-line{max-width:900px;margin:40px auto 0;padding:18px 28px;border-radius:16px;background:linear-gradient(160deg,#eafcff,#d8f6fc);color:var(--head);font-weight:700;font-size:17px;line-height:1.8}

/* One-screen rule (user): on desktop a section is exactly one screen below the
   sticky navbar + sub-nav (--wsv-nav-h), and its content grows to use that space
   (vh-scaled sizes; the image/text row takes whatever is left), so the next
   section never peeks in. Number sits beside each card title. !important only
   beats the team's inline style="" margins / min-height. */
@media (min-width:992px){
.cn-root>section:nth-of-type(2){display:flex;flex-direction:column;min-height:calc(100vh - var(--wsv-nav-h));padding:clamp(16px,3.6vh,64px) 0}
.cn-root>section:nth-of-type(2)>.cn-wrap{flex:1;display:flex;flex-direction:column;width:100%}
@media (min-width:1500px){.cn-root>section:nth-of-type(2)>.cn-wrap{max-width:1320px}}
.cn-root>section:nth-of-type(2) .cn-split{flex:1;gap:clamp(32px,4vw,64px);align-items:center}
.cn-root>section:nth-of-type(2) .cn-eyebrow{font-size:clamp(26px,3.7vh,42px);margin-bottom:clamp(8px,1.4vh,22px)}
.cn-root>section:nth-of-type(2) .cn-eyebrow.cn-center{font-size:clamp(22px,3vh,32px);margin-top:clamp(20px,4vh,64px)!important;margin-bottom:0}
.cn-root>section:nth-of-type(2) .cn-eyebrow::after{margin-top:clamp(6px,1vh,14px)}
.cn-root>section:nth-of-type(2) .cn-lead{font-size:clamp(16px,2.1vh,21px)!important;line-height:1.85}
.cn-root>section:nth-of-type(2) .cn-imgslot{min-height:0!important;height:100%;align-self:stretch;background-size:auto 86%,auto}
.cn-root>section:nth-of-type(2) .cn-g3{margin-top:clamp(14px,2.6vh,40px)!important;gap:clamp(18px,2vw,28px)}
.cn-root>section:nth-of-type(2) .cn-feat{display:grid;grid-template-columns:auto 1fr;align-items:center;column-gap:16px;row-gap:clamp(6px,1vh,14px);padding:clamp(16px,2.4vh,34px) 26px}
.cn-root>section:nth-of-type(2) .cn-feat::before{width:clamp(40px,4.4vh,48px);height:clamp(40px,4.4vh,48px);border-radius:13px;font-size:16px;margin:0}
.cn-root>section:nth-of-type(2) .cn-feat b{padding-bottom:0;border:0;font-size:clamp(16px,2vh,20px)}
.cn-root>section:nth-of-type(2) .cn-feat span{grid-column:1/-1;padding-top:clamp(6px,1vh,14px);border-top:1px solid var(--line);font-size:clamp(15px,1.8vh,16px);line-height:1.85}
.cn-root>section:nth-of-type(2) .cn-note-line{margin-top:clamp(12px,2.2vh,36px);padding:clamp(8px,1.3vh,18px) 26px;font-size:clamp(15px,1.9vh,18px)}
}
/* 3 cards in a row: reserve two title lines so the dividers line up (the tallest card sets the row height anyway) */
@media (min-width:1081px){.cn-root>section:nth-of-type(2) .cn-feat b{min-height:calc(2 * 1.55em)}}

/* section 2 — "المميزات": the team's 4 features in the old page's "لماذا تحتاج هذه
   الخدمة" bento (.email-features in style.scss): #f7f8fa band, 6-col grid, white
   bordered cards, icon rings, a sparkline that draws in, a mini-panel widget.
   Wide/narrow alternate: 4+2 then 2+4. The visuals are added by enhance() below. */
${S2}{background:#f7f8fa;padding-top:72px}
${S2} .cn-g4{grid-template-columns:repeat(6,minmax(0,1fr));gap:24px}
${S2} .cn-feat{grid-column:span 2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;text-align:center;background:#fff;border:1px solid rgba(15,23,42,.08);border-radius:16px;box-shadow:none;padding:clamp(22px,3.4vh,40px) clamp(22px,2.4vw,32px);transition:transform .35s ease,box-shadow .35s ease,border-color .35s ease}
${S2} .cn-feat:hover{transform:translateY(-6px);border-color:rgba(29,211,248,.45);box-shadow:0 16px 30px -20px rgba(15,23,42,.18)}
${S2} .cn-feat>b{font-size:clamp(17px,2.1vh,19px);color:var(--head);margin-bottom:8px}
${S2} .cn-feat>span{font-size:clamp(14px,1.8vh,15.5px);color:var(--text);line-height:1.85}
${S2} .cn-feat:nth-child(1),${S2} .cn-feat:nth-child(4){grid-column:span 4;display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);column-gap:clamp(20px,2.4vw,36px);align-content:center;align-items:start;justify-items:start;text-align:right}
${S2} .cn-fx-w{grid-column:2;grid-row:1/4;align-self:stretch;width:100%}

${S2} .cn-fx-ring{width:clamp(64px,9vh,90px);height:clamp(64px,9vh,90px);flex:none;border-radius:50%;border:1px solid rgba(15,23,42,.1);display:flex;align-items:center;justify-content:center;margin:0 auto clamp(14px,2.4vh,22px);font-size:30px;color:var(--text);position:relative;transition:color .35s,border-color .35s}
${S2} .cn-fx-ring.cn-fx-sm{width:50px;height:50px;font-size:20px;margin:0 0 clamp(12px,2vh,22px)}
${S2} .cn-feat:hover .cn-fx-ring{color:var(--cyan);border-color:rgba(29,211,248,.5)}
${S2} .cn-fx-pulse{animation:cnPulse 2.2s ease-out infinite}
${S2} .cn-fx-orbit::after{content:"";position:absolute;inset:-7px;border-radius:50%;border:1.5px dashed rgba(29,211,248,.55);animation:cnSpin 14s linear infinite}
@keyframes cnPulse{0%{box-shadow:0 0 0 0 rgba(29,211,248,.35)}100%{box-shadow:0 0 0 14px rgba(29,211,248,0)}}
@keyframes cnSpin{to{transform:rotate(360deg)}}

${S2} .cn-fx-chart{display:flex;flex-direction:column;min-height:120px;background:#fafafa;border:1px solid rgba(15,23,42,.06);border-radius:12px;padding:14px 16px 0;overflow:hidden}
${S2} .cn-fx-dots{display:flex;gap:5px;margin-bottom:10px}
${S2} .cn-fx-dots i{width:6px;height:6px;border-radius:50%;background:rgba(15,23,42,.15)}
${S2} .cn-fx-chart svg{flex:1;width:100%;min-height:40px;display:block;clip-path:inset(0 100% 0 0);transition:clip-path 1.3s cubic-bezier(.22,1,.36,1) .15s}
${S2} .cn-fx-chart polyline{fill:none;stroke:var(--head);stroke-width:2;stroke-linejoin:round;vector-effect:non-scaling-stroke}
${S2} .cn-fx-chart polygon{fill:rgba(29,211,248,.14);opacity:0;transition:opacity .8s ease .9s}
${S2}.cn-fx-on .cn-fx-chart svg{clip-path:inset(0)}
${S2}.cn-fx-on .cn-fx-chart polygon{opacity:1}

${S2} .cn-fx-panel{display:flex;flex-direction:column;justify-content:center;gap:10px;background:#fafafa;border:1px solid rgba(15,23,42,.06);border-radius:12px;padding:14px 16px}
${S2} .cn-fx-row{display:flex;align-items:center;gap:12px;background:#fff;border-radius:10px;padding:8px 12px;box-shadow:0 2px 6px rgba(15,23,42,.05);opacity:0;transform:translateX(-14px);transition:opacity .5s ease,transform .5s ease}
${S2} .cn-fx-row:nth-child(2){transition-delay:.12s}
${S2} .cn-fx-row:nth-child(3){transition-delay:.24s}
${S2}.cn-fx-on .cn-fx-row{opacity:1;transform:none}
${S2} .cn-fx-av{width:30px;height:30px;flex:none;border-radius:50%;background:rgba(29,211,248,.12);color:var(--cyan);display:flex;align-items:center;justify-content:center;font-size:16px}
${S2} .cn-fx-bars{flex:1;display:flex;flex-direction:column;gap:5px}
${S2} .cn-fx-bars i{display:block;height:6px;border-radius:3px;background:#eceef4}
${S2} .cn-fx-bars i+i{width:60%;background:#f3f4f7}
${S2} .cn-fx-tg{width:34px;height:20px;flex:none;border-radius:20px;background:var(--cyan);position:relative}
${S2} .cn-fx-tg::after{content:"";position:absolute;top:3px;left:3px;width:14px;height:14px;border-radius:50%;background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.2)}
${S2} .cn-fx-tg.cn-fx-off{background:#d5d8e0}
${S2} .cn-fx-tg.cn-fx-off::after{left:auto;right:3px}

@media (prefers-reduced-motion:reduce){${S2} .cn-fx-pulse,${S2} .cn-fx-orbit::after{animation:none}${S2} .cn-fx-chart svg{clip-path:none;transition:none}${S2} .cn-fx-chart polygon,${S2} .cn-fx-row{opacity:1;transform:none;transition:none}}

/* one screen (desktop) */
@media (min-width:992px){
${S2}{display:flex;flex-direction:column;min-height:calc(100vh - var(--wsv-nav-h));padding:clamp(20px,4vh,64px) 0}
${S2}>.cn-wrap{flex:1;display:flex;flex-direction:column;width:100%}
${S2} .cn-h2{font-size:clamp(28px,4vh,40px)}
${S2} .cn-lead{margin-top:clamp(6px,1.2vh,16px);font-size:clamp(16px,2vh,18px)}
${S2} .cn-g4{flex:1;grid-auto-rows:1fr;margin-top:clamp(16px,3.2vh,44px)!important}
/* widgets stretch to the card instead of setting its height */
${S2} .cn-fx-w{contain:size;min-height:0}
}
/* short screens: icon beside the title, so two rows of cards still fit one screen */
@media (min-width:992px) and (max-height:940px){
${S2} .cn-g4{gap:18px}
${S2} .cn-feat{display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:14px;align-items:center;align-content:center;justify-items:start;text-align:right;padding:clamp(14px,2.4vh,26px) clamp(20px,2vw,28px)}
${S2} .cn-feat:nth-child(1),${S2} .cn-feat:nth-child(4){grid-template-columns:auto minmax(0,1fr) minmax(0,1.1fr)}
${S2} .cn-fx-ring,${S2} .cn-fx-ring.cn-fx-sm{width:46px;height:46px;font-size:20px;margin:0}
${S2} .cn-fx-orbit::after{inset:-5px}
${S2} .cn-feat>b{grid-column:2;grid-row:1;margin:0}
${S2} .cn-feat>span{grid-column:1/3;grid-row:2;margin-top:clamp(6px,1.2vh,12px)}
${S2} .cn-fx-w{grid-column:3;grid-row:1/3}
${S2} .cn-fx-panel{gap:8px;padding:10px 14px}
${S2} .cn-fx-row{padding:6px 10px}
${S2} .cn-fx-av{width:26px;height:26px;font-size:14px}
}
@media (min-width:992px) and (max-height:800px){${S2} .cn-fx-row:nth-child(3){display:none}}
@media (min-width:1500px){${S2}>.cn-wrap{max-width:1320px}}
@media (max-width:991px){
${S2} .cn-g4{grid-template-columns:repeat(2,minmax(0,1fr))}
${S2} .cn-feat{grid-column:span 1}
${S2} .cn-feat:nth-child(1),${S2} .cn-feat:nth-child(4){grid-column:span 2}
}
@media (max-width:575px){
${S2} .cn-g4{grid-template-columns:1fr}
${S2} .cn-feat,${S2} .cn-feat:nth-child(1),${S2} .cn-feat:nth-child(4){grid-column:span 1}
${S2} .cn-feat:nth-child(1),${S2} .cn-feat:nth-child(4){grid-template-columns:1fr}
${S2} .cn-fx-w{grid-column:1;grid-row:auto;margin-top:18px}
}

/* section 3 — "الخطط". One screen: plan tabs and the currency switch share a row,
   the intro line runs wider, card spacing scales with height, and "كل المواصفات"
   opens as a floating panel over the card so opening it can't push the section
   past the screen. */
${S3}{padding-top:72px}
${S3} .cn-pkgs{margin-top:28px}
@media (min-width:992px){
${S3}{display:flex;flex-direction:column;min-height:calc(100vh - var(--wsv-nav-h));padding:clamp(16px,3.4vh,56px) 0}
${S3}>.cn-wrap{flex:1;width:100%;display:grid;grid-template-columns:1fr auto 1fr;grid-template-rows:auto auto auto auto 1fr auto;column-gap:16px}
${S3}>.cn-wrap>div.cn-center{display:contents}
${S3} .cn-note-line{grid-column:1/-1;grid-row:6;margin:clamp(10px,2vh,28px) 0 0}
${S3} .cn-eyebrow{grid-column:1/-1;grid-row:1;text-align:center;margin-bottom:clamp(2px,.6vh,8px)}
${S3} .cn-h2{grid-column:1/-1;grid-row:2;text-align:center;font-size:clamp(26px,3.8vh,40px)}
${S3} .cn-lead{grid-column:1/-1;grid-row:3;justify-self:center;text-align:center;max-width:none;margin-top:clamp(4px,1vh,14px);font-size:clamp(15px,1.9vh,18px)}
${S3} .cn-tabs{grid-column:2;grid-row:4;margin:clamp(12px,2.4vh,32px) 0 0}
${S3} .cn-cur{grid-column:3;grid-row:4;justify-self:end;align-self:center;margin:clamp(12px,2.4vh,32px) 0 0}
${S3} .cn-tabpanel{grid-column:1/-1;grid-row:5;align-self:center;margin-top:clamp(16px,3vh,40px)}
${S3} .cn-pkgs{margin-top:0}
${S3} .cn-pkg{padding:clamp(16px,2.6vh,32px) clamp(18px,1.8vw,28px)}
${S3} .cn-pkg h3{font-size:clamp(18px,2.4vh,22px)}
${S3} .cn-pkg .cn-price{margin-top:clamp(6px,1.4vh,18px);display:flex;align-items:baseline;flex-wrap:wrap;column-gap:10px}
${S3} .cn-pkg .cn-price strong{font-size:clamp(22px,3vh,28px)}
${S3} .cn-pkg .cn-ticks{margin-top:clamp(6px,1.2vh,16px);gap:clamp(4px,.8vh,8px)}
${S3} .cn-pkg .cn-ticks li{font-size:clamp(14px,1.75vh,15px)}
${S3} details.cn-more{position:relative;margin:clamp(2px,.6vh,10px) 0 clamp(6px,1.4vh,20px)}
${S3} details.cn-more summary{min-height:clamp(32px,4.4vh,44px)}
${S3} details.cn-more[open]>.cn-ticks{position:absolute;right:-10px;left:-10px;bottom:calc(100% + 4px);z-index:6;margin:0;padding:16px 18px;background:#fff;border-radius:14px;box-shadow:0 18px 40px rgba(15,23,42,.18);max-height:50vh;overflow:auto}
${S3} .cn-pkg .cn-btn{min-height:clamp(42px,5vh,52px)}
}
@media (min-width:1500px){${S3}>.cn-wrap{max-width:1320px}}
/* short screens: the note line moves into the empty right side of the tabs row */
@media (min-width:992px) and (max-height:940px){
${S3} .cn-note-line{grid-column:1;grid-row:4;align-self:center;text-align:right;font-size:14px;line-height:1.7;margin:clamp(12px,2.4vh,32px) 0 0}
${S3} .cn-pkg .cn-ticks{gap:4px}
}
@media (min-width:992px) and (max-height:800px){
${S3}{padding:12px 0}
${S3} .cn-pkg{padding:14px 18px}
${S3} .cn-pkg-for{margin-top:0}
${S4}{padding:12px 0}
${S4} .cn-chooser input[type=number]{min-height:42px;padding:8px 14px}
${S4} .cn-chooser .cn-chk{min-height:28px}
${S4} .cn-chooser fieldset{display:grid;grid-template-columns:1fr 1fr;gap:6px 18px}
${S5}{padding:12px 0}
${S5} .cn-steps{gap:12px}
${S5} .cn-steps li{padding:12px 14px}
${S5} .cn-steps p{line-height:1.7}
}
@media (min-width:992px) and (max-height:760px){${S3},${S4}{padding:4px 0}${S3} .cn-tabpanel{margin-top:12px}${S4} .cn-chooser.cn-chooser{gap:8px}}

/* section 4 — "أداة اختيار الخطة": the app-development hero's moving background
   (ParticleField canvas + pulsing cyan glow, via theme.decor), title styled like
   section 1, form tightened so the section is one screen. */
${S4}{position:relative;overflow:hidden;background:#f5f6f8;padding-top:72px}
${S4} .cn-decor{position:absolute;inset:0;z-index:0;pointer-events:none}
${S4} .cn-particles{position:absolute;inset:0;width:100%;height:100%}
${S4} .cn-glow{position:absolute;top:-180px;left:50%;width:900px;height:620px;margin-left:-450px;background:radial-gradient(ellipse at center,rgba(29,211,248,.16) 0%,rgba(29,211,248,0) 62%);animation:appGlowPulse 9s ease-in-out infinite}
${S4}>.cn-wrap{position:relative;z-index:1}
${S4} .cn-eyebrow{display:inline-block;padding:6px 16px;border-radius:100px;background:rgba(29,211,248,.12);color:var(--cyan-d);font-size:14px;margin-bottom:14px}
${S4} .cn-h2{font-size:clamp(30px,4.4vh,44px)}
${S4} .cn-h2::after{content:"";display:block;width:56px;height:4px;border-radius:2px;background:var(--cyan);margin-top:14px}
${S4} .cn-lead{max-width:480px}
${S4} .cn-chooser{box-shadow:var(--emboss-h)}
@media (min-width:992px){
${S4}{display:flex;flex-direction:column;min-height:calc(100vh - var(--wsv-nav-h));padding:clamp(16px,3.4vh,56px) 0}
${S4}>.cn-wrap{flex:1;width:100%;display:flex;align-items:center}
${S4} .cn-split{width:100%}
${S4} .cn-lead{font-size:clamp(16px,2.1vh,19px)}
${S4} .cn-chooser{padding:clamp(18px,3vh,30px);gap:clamp(10px,1.8vh,16px)}
${S4} .cn-ch-out{padding:clamp(12px,2vh,18px) 20px}
}
@media (prefers-reduced-motion:reduce){${S4} .cn-glow{animation:none}}
@media (max-width:720px){${S4} .cn-h2{font-size:28px}}

/* section 5 — "خطوات البدء": the 4 steps as a 2×2 grid beside the video, the
   video's caption and the chooser link underneath it (user's layout). */
${S5}{padding-top:72px}
@media (min-width:992px){
${S5}{display:flex;flex-direction:column;min-height:calc(100vh - var(--wsv-nav-h));padding:clamp(16px,3.4vh,56px) 0}
${S5}>.cn-wrap{flex:1;width:100%;display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);grid-template-rows:auto 1fr auto;column-gap:clamp(32px,4vw,64px)}
${S5}>.cn-wrap>div.cn-center{grid-column:1/-1}
${S5} .cn-h2{font-size:clamp(26px,3.8vh,40px)}
${S5} .cn-lead{margin-top:clamp(4px,1vh,14px);font-size:clamp(15px,1.9vh,18px)}
${S5} .cn-steps{grid-column:1;grid-row:2/4;align-self:center;grid-template-columns:1fr 1fr;gap:clamp(14px,2vh,22px);margin:clamp(16px,3vh,40px) 0 0}
${S5} .cn-steps li{padding:clamp(14px,2.4vh,26px);display:grid;grid-template-columns:auto minmax(0,1fr);column-gap:12px;align-items:center;align-content:start}
${S5} .cn-steps li>p{grid-column:1/-1;margin-top:clamp(6px,1vh,10px)}
${S5} .cn-steps li>span{width:clamp(32px,4vh,40px);height:clamp(32px,4vh,40px)}
${S5} .cn-steps b{font-size:clamp(16px,2vh,18px);margin-top:0}
${S5} .cn-steps p{font-size:clamp(14px,1.7vh,15px)}
${S5} .cn-vid{grid-column:2;grid-row:2;align-self:end;justify-self:center;width:100%;max-width:min(100%,calc((100vh - var(--wsv-nav-h) - 300px) * 16 / 9));margin:clamp(16px,3vh,40px) 0 0}
${S5} .cn-vid figcaption{margin-top:clamp(6px,1.2vh,12px)}
${S5} .cn-note-line{grid-column:2;grid-row:3;margin:clamp(8px,1.6vh,20px) 0 0}
}
@media (min-width:1500px){${S5}>.cn-wrap{max-width:1320px}}
`;

// Decorative, text-free DOM for the section 2 bento (aria-hidden). Mapped to the
// team's 4 features by position: 1 إرسال واستقبال سريع, 2 أمان وخصوصية,
// 3 نسخ احتياطي, 4 إدارة سهلة. If they change the count, the section stays plain.
const LINE = "0,64 16,60 32,62 48,53 64,55 80,44 96,46 112,34 128,30 144,18 160,8";

function enhance(root) {
  const sec = root.querySelectorAll(":scope > section")[2];
  const cards = sec ? sec.querySelectorAll(".cn-g4 > .cn-feat") : [];
  if (cards.length !== 4) return undefined;
  const added = [];
  const put = (card, where, cls, html) => {
    const d = document.createElement("div");
    d.className = cls;
    d.setAttribute("aria-hidden", "true");
    d.innerHTML = html;
    card[where](d);
    added.push(d);
  };
  const row = (off) =>
    `<div class="cn-fx-row"><div class="cn-fx-av"><i class="bx bx-user"></i></div><div class="cn-fx-bars"><i></i><i></i></div><div class="cn-fx-tg${off ? " cn-fx-off" : ""}"></div></div>`;

  put(cards[0], "prepend", "cn-fx-ring cn-fx-sm", '<i class="bx bx-send"></i>');
  put(cards[0], "append", "cn-fx-w cn-fx-chart",
    `<div class="cn-fx-dots"><i></i><i></i><i></i></div><svg viewBox="0 0 160 70" preserveAspectRatio="none"><polygon points="${LINE} 160,70 0,70"/><polyline pathLength="1" points="${LINE}"/></svg>`);
  put(cards[1], "prepend", "cn-fx-ring cn-fx-pulse", '<i class="bx bx-shield-quarter"></i>');
  put(cards[2], "prepend", "cn-fx-ring cn-fx-orbit", '<i class="bx bx-cloud-upload"></i>');
  put(cards[3], "prepend", "cn-fx-ring cn-fx-sm", '<i class="bx bx-slider-alt"></i>');
  put(cards[3], "append", "cn-fx-w cn-fx-panel", row(false) + row(false) + row(true));

  const io = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting) {
        sec.classList.add("cn-fx-on");
        io.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  io.observe(sec);
  return () => {
    io.disconnect();
    sec.classList.remove("cn-fx-on");
    added.forEach((n) => n.remove());
  };
}

// section index 4 = "أداة اختيار الخطة" (0 is the hero)
const decor = [
  {
    section: 4,
    className: "cn-decor",
    node: (
      <>
        <ParticleField className="cn-particles" count={44} />
        <span className="cn-glow" />
      </>
    ),
  },
];

const emailsTheme = { css, subnav: true, enhance, decor };
export default emailsTheme;
