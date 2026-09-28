# general 
this edits is global for all services pages 

# image hover ✅ DONE (2026-09-28)
not the effect it have now 
i want to uppear a corner border for top right and bottom left with like a tiny zoom to the image
the border color that appear after hover is dark blue 

save the old hover so if we needed it we can use it 

> Done: `.svc-img-hover` (end of `styles/style.scss`) on the hosting hero, cPanel banner, app-dev hero,
> and the legacy website-design / ssl / security images. Old 3D tilt is kept in
> `components/Emails/Tilt3D.js` — wrap an image in `<Tilt3D max={8}>` to bring it back.
>
> Follow-up (2026-09-28): brackets pushed out to 18px from the image (was 10px). Added to the 3 SSL-type
> images on ssl-certificate. SEO, digital-marketing and emails have no content images (CSS/SVG only);
> the AppDev orbit phone screens and the decorative `offer-shape` blobs were left alone.
> Brackets lengthened 56px → 80px.

# header bg ✅ DONE (2026-09-28)
every service page's header uses the hosting-services one (`<Navbar theme="navy" />`, #060c4a).
Template demos (service-details, style-3, style-4) left on the default header.

# btns hover ✅ DONE (2026-09-28)
its having 2 effects now 
remove the one that make the btn move from it space

> Done: removed the magnetic "follow the cursor" wrapper and the hover lifts from every service-page
> button. The colour/fill hover stays. Plan cards still lift as a whole on hover (that's the card, not the button).

# plans cards ✅ DONE (2026-09-28)
make all plan cards style follow the style on the host services page {only the style}

> Done: website-design, vps-hosting, wordprees-hosting and ssl-certificate cards now use the hosting card look
> (emails, /services already did). Homepage pricing untouched.

# back to the top btn ✅ DONE (2026-09-28)
move the whatsapp btn to the right and keep the back to the top btn on the left

---

# Email serevices page ✅ DONE (2026-09-28)
in لماذا تحتاج هذه الخدمة i have an UI edit
the graphs look unreasonable they dont show that it go up XD please fix it make it like it have progress

> Done: both graphs (speed card + cross-device card) are now steadily rising lines with small dips and a
> soft cyan fill under them (`components/Emails/Features.js`).

# app dev page ✅ DONE (2026-09-28)
make the نطوّر على المنصة
التي يستخدمها عملاؤك section same as the app dev section in the new homepage 
i want the same element but one edit the mobile object on the middle talk on the right features on the left 

> Done: `components/AppDev/Platforms.js` now renders the homepage's `HpNew/AppServices` with a new optional
> `features` prop → 3 columns: text right, phone orbit middle, iOS / Android / Hybrid cards left.
> Homepage passes no `features`, so it's unchanged. Stacks to one column under 992px.


# SEO page ✅ DONE (2026-09-28)
the تواصل معنا in the start of the page section color need to be dark blue 
make this kind of titles 
المحاور المحاور بحث الذكاء الاصطناعي  كيف نعمل bigger so it have more appearing
there are 2 section need data to be filled : add a good results dat

> Done: hero "تواصل معنا" is navy (`.seo-link-btn`). Section labels (`.seo-eyebrow`, `.seo-badge-solid`)
> 12–13px → 16px. Results + CaseStudies filled, "مطلوب من العميل" flags removed.
> ⚠️ 240% and 15 years match existing site copy; +120 sites, +3,500 / +850 keywords, 3.2x leads,
> rank #38 → #6 are illustrative — confirm real figures before launch.

# Digital Markiting page ✅ DONE (2026-09-28)
if the section have blue make it dark blue 
remove any type of this bullshit "سؤال مفتوح: أي منصات إعلانية نذكرها بالاسم — Google، Meta، TikTok، Snapchat، X؟" remove it all 
نتائج عملاء => add good draft data 
enhance the design in general it feel kinda poor in term of design 
> Done:
> - Cyan accents → navy (`$dm-accent` in style.scss). Cyan kept only where it sits on a navy ground.
> - Every "سؤال مفتوح" / "مطلوب من العميل" / dev note removed (also from the unused Pricing/TrustStrip).
> - نتائج عملاء: 3 draft cases (fashion store, dental clinics, real estate), one featured + two stacked.
>   ⚠️ Illustrative numbers, replace with real case studies before launch. Same for the report-mock KPIs.
> - Design pass: Channels → bento (2 wide glass tiles), WhyUs → sticky heading + 2-col list (no cards),
>   Results → featured case layout, social + report mocks got real content instead of grey bars,
>   bigger labels and step numbers, em-dashes removed from visible copy.

> Follow-up (2026-09-28): hovers on everything interactive-looking (cards, bento tiles, why-list, cases,
> pills/tags, checklists, the 3 mockups, campaign rows, report bars, FAQ). Cyan brought back as the
> hover/highlight colour on top of the navy base (dots, button hover, icon wells, gradients in bars/fills).
> Buttons (2026-09-28): the page now uses the site's own `.default-btn app-btn-shine` (primary, same as AppDev)
> and `.default-btn active` (secondary). The page-only `.dm-btn*` styles were deleted.

> back to the top ✅ DONE (2026-09-28): WhatsApp pinned bottom-RIGHT (physical `right`, desktop + mobile),
> back-to-top stays bottom-LEFT (rtl.css). Global, both mounted in _app.js. Exception left as-is:
> /hp-new's DomainSearch.js parks WhatsApp beside the search field on desktop (its own design).



# web services page ✅ DONE (2026-09-28)

-area 1 [hero , breif , nav boxes]
in our projects : add feature that the user if press on the image of project ot get bigger so he can see it this apply on the image the it have it turn in the middle 
make the nav sidebar on the left move to the right a little bit 

-area 2 [business website serives]
make the image have the hover effect we made erlier and the image it self no on a bg 
make the card style same as the style of plan cards on the host services page
use our btn style 

area 3 [wordpress services]
same as area 2

area 3 [ecommerce]
edit the services already in this area to the services we have the 4 
make them 4 services in the same row with a good style and make the cta in it more appearing 
keep our style i

> Done:
> - Area 1: click the CENTRE project (or Enter when focused) → large view in a native <dialog>
>   (Esc / backdrop / × close). Clicking a side project rotates it to the centre. Side rail 16px → 32px from the edge.
> - Areas 2 + 3 (same components): overview image has no white plate, has the corner-bracket hover; its CTA is
>   `.default-btn app-btn-shine`. Plan cards follow hosting: no icon well, cards centred so the popular one stands
>   taller, spinning border ring on the popular card, cyan currency switch, bigger price.
> - E-commerce: the 4 services (build, manage, build + manage, landing page) in one row; each CTA is now a full
>   `.default-btn`. The combo package moved into data/services/data.js so the homepage and /services share it;
>   its image is the build + manage photos side by side.

