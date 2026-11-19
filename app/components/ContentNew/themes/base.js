// The user's "general design edits", shared by every -new page that gets a UI
// pass: no navy divider bands, site .default-btn buttons, a photo under the
// hero (and a shorter hero), and the scroll offset for the sticky sub-nav.
// Page themes append their own section rules after this.

export const generalCss = (heroImage) => `
/* no navy divider band between sections */
.cn-root .cn-band{display:none}
.cn-root .cn-lift{margin-top:0;border-radius:0;padding-top:24px}

/* buttons = .default-btn (site cyan #1dd3f8, white text, the two diagonal shine bars) */
.cn-root .cn-btn{position:relative;overflow:hidden;z-index:0;border:0;border-radius:10px;padding:0 35px;font-size:15px;font-weight:700;background:#1dd3f8;color:#fff;transition:all .6s ease}
.cn-root .cn-btn::before,.cn-root .cn-btn::after{content:"";position:absolute;top:-20px;width:10px;height:100px;background:#fff;opacity:.5;transform:rotate(45deg);transition:all .6s ease;pointer-events:none}
.cn-root .cn-btn::before{left:-40px}
.cn-root .cn-btn::after{right:-40px}
.cn-root .cn-btn:hover{color:#fff;transform:translateY(-2px);box-shadow:0 12px 24px -10px rgba(29,211,248,.7)}
.cn-root .cn-btn:hover::before{left:calc(100% + 40px)}
.cn-root .cn-btn:hover::after{right:calc(100% + 40px)}
.cn-root .cn-btn-ghost{background:transparent;border:1.5px solid rgba(255,255,255,.75)}
.cn-root .cn-btn-ghost:hover{background:#fff;color:var(--ink);box-shadow:none}
.cn-root .cn-btn:focus-visible{outline:2px solid #1dd3f8;outline-offset:3px}
.cn-root .cn-zz-link{transition:color .3s}
.cn-root .cn-zz-link:hover{color:var(--cyan-d)}

/* hero: photo under the navy, shorter */
.cn-root.cn-root>.cn-hero{padding-top:calc(28px + 120px);padding-bottom:96px;background:linear-gradient(180deg,rgba(10,31,68,.9),rgba(10,31,68,.74) 55%,rgba(10,31,68,.92)),url(${heroImage}) center/cover no-repeat}
.cn-root .cn-hero::after{height:64px}
.cn-root .cn-hero h1{font-size:46px}
.cn-root .cn-trust span::before{color:#1dd3f8}
@media (max-width:991px){.cn-root.cn-root>.cn-hero{padding-top:calc(28px + 76px)}}
@media (max-width:720px){.cn-root.cn-root>.cn-hero{padding-top:calc(24px + 76px);padding-bottom:72px}.cn-root .cn-hero h1{font-size:32px}}

/* sticky navbar (109px desktop / 75px collapsed, once .is-sticky) + the 63px sub-nav.
   --wsv-nav-h is style.scss's own html{scroll-padding-top} hook (default 90px),
   so anchor/sub-nav jumps land each section right under both bars. This <style>
   only lives while the page is mounted. */
html{--wsv-nav-h:138px}
@media (min-width:992px){html{--wsv-nav-h:172px}}
`;
