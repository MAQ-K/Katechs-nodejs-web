# Inspiration analysis: new design system

_Art Director, 2026-11-19. Source: the 5 images in `new-design-system/design system inspirations/`._
_This is an analysis, not a decision. Every choice below is left to the user._

Hex values are estimates read from compressed JPGs. Treat them as ±3–5 in each channel.

| Short name | File | What it is |
|---|---|---|
| **Ocamba** | `5366d8c80791e4085216226568a5d7a3.jpg` | Software company, "What We Do" services carousel |
| **Metafore** | `5980c255489044ae71b2c45e8cf76927.jpg` | AI platform, "Mission" section with 4 numbered cards |
| **UX Creatives** | `7234704e161681c7a3eff00ce42d1573.jpg` | Agency portfolio shot: a healthcare services section shown on a laptop mockup |
| **Luxura** | `b60e377101f2d7e89dc9a634ec5bf620.jpg` | Fashion brand, "Why choose us" bento grid + testimonials |
| **Whenevr** | `f0f61acdd770bc346cb285a20a1a54f7.jpg` | Design-subscription agency, blog index (built in Framer) |

---

## The most important finding first

**All five images are built from cards.** Every one of them puts content in rounded panels. This
looks like it contradicts "no boxes, no borders", but look closer: **none of the cards has a visible
border line.** Each card is separated from the page only by a **change of tone** (white on light grey,
or slightly darker grey on light grey), a **large corner radius**, and at most a very soft shadow.

So the user is probably not against *grouping*. They are against **outlined boxes**: thin
border lines, hard edges, the "bordered card" look of the 2026-09-01 `.ds-new-*` system. This must
be confirmed with the user (Question 1 below), because it changes the whole system.

Second finding: **none of the five uses pure white as the page ground.** All use a light neutral
grey (about `#EFEFEF`–`#F5F5F5`). But **four of the five use pure white for the cards** sitting on
that grey. White as a small surface on grey is fine for them; white as the whole page is not.

---

## 1. Per image

### 1.1 Ocamba (`5366d8c80791e4085216226568a5d7a3.jpg`)

**What it is.** The services section of a software/marketing-tools company: a large "What We Do"
heading on the left, a horizontal row of service cards running off the right edge. Calm, quiet,
very product-like.

**Ground & colour.**
- Page ground ~`#F2F2F2` (the frame around it is ~`#E5E5E5`, that is the Dribbble presentation, not the site).
- Cards: pure white `#FFFFFF`. Small pill controls (nav, "Contact Us", icon circles): ~`#E8E8E8`.
- Ink: near-black ~`#111111`. Body text: dark grey ~`#333`. Muted footnote text: ~`#9A9A9A`.
- Accent: none in the UI. The only colour is a blue 3D image inside the first card (~`#3B6FE0`).
- Total: 3 greys + black + one image colour. Contrast feel: soft, low-stress; only the heading is strong.

**Typography.**
- Display heading: a geometric/grotesk sans with slightly quirky letterforms ("What We Do"), regular
  weight, ~4× body size. Body text is tiny (~10–11px in the shot) and **Title Case Every Word**.
- Card titles: regular weight, ~1.4× body. No bold anywhere; hierarchy comes from size alone.
- Letter-spacing normal; line length in cards very short (~30 characters).
- **Arabic:** "size only, no bold" works in Almarai (300/400 for body and display). Title Case does
  not exist in Arabic, ignore it. The tiny body size will not work in Arabic: Arabic needs ~15–20%
  larger body text than Latin to read the same.

**Layout & structure.**
- Asymmetric split: heading + "About Us" button + footnote in a narrow left column, cards fill the rest.
- Cards are a **horizontal carousel** cut off at the edge (signals "more to the side"), with
  arrow buttons and a dash-style progress indicator.
- **Separation without borders:** white cards on grey ground; a short 1px dash above each card's
  body text (a tiny rule, not a frame); generous empty space at the top of each card.
- Density: low. About half of each card is empty.

**Imagery.** One card has a 3D-rendered blue block image (looks AI/3D-stock). Faint dotted sphere
graphic behind the cards on the right. Images sit inside the card with rounded corners.

**Buttons, links, UI.**
- "About Us": **outlined pill** with a thin dark border and a ↗ arrow. "Contact Us": filled light-grey pill + arrow.
- Nav: grouped in a light-grey pill, active item marked by a tiny triangle.
- Small round icon buttons inside each card (bottom), ~`#F0F0F0` circles.
- Arrows (↘ ↗ →) are used everywhere as the "go" hint.

**Motion hints.** Carousel with drag/arrow navigation; cursor visible (it's a motion shot). Likely
horizontal slide + card hover.

**Fits the taste:** soft grey ground, no card borders, no bold shouting, lots of air.
**Conflicts:** the outlined "About Us" pill is a border; small icons in each card; the 3D blue image
and dotted sphere read as AI/stock.

**Take**
- Grey ground + borderless white cards.
- Hierarchy by size, not by weight.
- Horizontal service carousel that bleeds off the edge.
- The short dash above body text as a quiet divider.

**Avoid**
- The outlined pill button, the per-card icons, the 3D stock image, Title Case body text, tiny body size.

---

### 1.2 Metafore (`5980c255489044ae71b2c45e8cf76927.jpg`)

**What it is.** A "Mission" section of an AI platform: a two-tone headline, a short paragraph with a
dark button, then four cards where one is expanded with an image. Clean, premium, a little "tech".

**Ground & colour.**
- Ground ~`#F6F7F8` (very slightly cool) with a **faint square grid** ~`#ECEEF0` behind the top area.
- Cards: white `#FFFFFF`, extremely soft glow-shadow.
- Ink: deep navy-black ~`#0F1A2A`. Body: grey ~`#6B7280`.
- **Accent: teal ~`#1F8A80`**, used on one word of the headline ("Intelligence.") and in the image.
- Big numbers "01. 03. 04." in a very pale grey ~`#E6E8EB`: decoration through tone, not colour.
- Button: near-black ~`#1E1E1E` gradient pill with a soft shadow.
- Total: grey ground, white, navy-black ink, one grey, one accent. Contrast: crisp but gentle.

**Typography.**
- Neo-grotesk sans (Inter / Suisse-like), regular weight, **tight letter-spacing** on the display.
- Headline ~3.5× body. Card title in the open card ~2.5× body. Closed card titles ~1.3× body.
- Eyebrow "MISSION" in a small mono, uppercase, inside a pale pill with an icon.
- Two-tone headline: line 1 ink, line 2 accent.
- **Arabic:** two-tone headlines work very well in Arabic (colour, not italic). Don't copy the tight
  tracking: never letter-space Arabic. Uppercase mono eyebrow has no Arabic equivalent; use a small
  regular-weight label instead.

**Layout & structure.**
- Top: headline left, paragraph + button right (a 2-column intro).
- Below: 4 cards in a row, the second one **taller and wider** (active/expanded). An accordion-in-a-row.
- **Separation:** white on near-white tone shift + soft shadow + the grid texture fading out.
  Big pale numbers give each card identity without a border.

**Imagery.** One abstract 3D render (teal glass ribbons). Strongly "AI-company" look.

**Buttons, links, UI.** Dark filled pill with soft shadow. Small square icons in pale tiles in each card.

**Motion hints.** The expanded card implies hover/click → card grows, image appears. Strong, clear interaction.

**Fits:** off-white ground, borderless cards, single accent used sparingly, two-tone heading, pale big numbers.
**Conflicts:** icons in every card and in the eyebrow; the abstract 3D ribbon render is exactly
"AI-looking"; the grid background is a mild "tech template" cliché.

**Take**
- One accent colour, used on one word per headline at most.
- Navy-black ink (close to Katechs' current navy).
- Expand-one-card interaction for a list of 3–5 services or steps.
- Large pale numerals as quiet structure.

**Avoid**
- Icons, the abstract 3D render, the grid texture, mono uppercase eyebrows.

---

### 1.3 UX Creatives (`7234704e161681c7a3eff00ce42d1573.jpg`)

**What it is.** A portfolio image: a healthcare services section shown on a tilted laptop in a dark
slate studio scene. It is two references in one: **the mockup style** and **the web page on the screen**.

**Ground & colour.**
- **Mockup scene:** dark blue-slate ~`#2F3447` → `#4B5169` with black ~`#0B0B0E` on the right; white text.
- **Web page on screen:** white `#FFFFFF` ground, cards in very pale blue ~`#EEF3F8`, one active card
  in light blue ~`#D3E5F4`. Arrow circles white with light-blue arrows ~`#7DAFDF`.
- Ink: near-black; second heading line in mid-grey ~`#7A7A7A`.
- Total on the page: white, 2 pale blues, black, grey. Very cool and clinical.

**Typography.**
- Thin/light geometric sans (Sofia/Quicksand-like), weight ~300, rounded.
- Heading ~3× body, two-tone: line 1 black, line 2 grey ("You Can Get").
- Card labels sit in white pill tags.
- **Arabic:** Almarai Light (300) gives a similar soft, light display. Two-tone works.

**Layout & structure.**
- Heading left, short paragraph top right.
- Horizontal **drag carousel** of tall cards, with a round "DRAG ‹ ›" cursor between cards.
- **Separation:** pale-blue tinted cards on white (tone shift only), no borders, soft shadow.

**Imagery.**
- Inside the page: a 3D-rendered spine inside the active card (cut-out, runs off the card edge).
- **The mockup itself:** real laptop (MacBook Pro, space grey), **three-quarter angle, slightly from
  above**, cropped hard so the screen fills most of the frame and the laptop runs off two edges.
  Moody, low-key studio light, dark backdrop, soft reflections. This is a very good model for the
  Katechs device mockups.

**Buttons, links, UI.** Round white buttons with a diagonal arrow; pill tags; custom drag cursor.

**Motion hints.** Drag carousel with a custom cursor. Card hover lifts and tints.

**Fits:** no borders, soft tinted cards, light type, the mockup photography is real and premium (not AI).
**Conflicts:** the screen page uses pure white ground; the 3D spine render; healthcare-blue is cold.

**Take**
- **Mockup direction:** real device, three-quarter angle, tight crop that bleeds off the frame, dark
  or deep-toned backdrop, soft natural reflections. Screen shows a real page.
- Tinted card (ground colour + a touch of the accent) instead of white card.
- Two-tone heading (ink + grey).
- Custom "drag" cursor for carousels.

**Avoid**
- White page ground, cold clinical blue, 3D organ/object renders.

---

### 1.4 Luxura (`b60e377101f2d7e89dc9a634ec5bf620.jpg`)

**What it is.** A fashion brand: centred section titles with pill eyebrows, a bento grid of
benefit cards with cut-out photos, then four testimonial cards. Polished, editorial, warm.

**Ground & colour.**
- Ground ~`#F4F4F4`.
- Cards: **darker than the ground**, ~`#EAEAEA`. One inner image tile ~`#F7F7F7`. This is the
  only reference where panels are darker, not lighter, than the page. No white anywhere large.
- Eyebrow pills: ~`#E6E6E6` with grey uppercase text ~`#6B6B6B`.
- Ink ~`#1A1A1A`. Muted second part of a sentence ~`#B5B5B5`. Sub-headings ~`#555`.
- Button: near-black pill ~`#1F1F1F` with a white circle holding an arrow.
- Accent: none in the UI. Colour comes **only from the photos** (skin tones, blue jacket, gold).
- Total UI colours: 4 greys + black. Contrast: soft overall, strong only on headings and the button.

**Typography.**
- Neo-grotesk sans (SF/Inter-like). Section titles regular weight ~2.5× body, centred.
- Card statements medium weight ~1.8× body, and **two-tone inside one sentence**: the first words in
  ink, the rest in pale grey ("Trusted by *fashion connoisseurs worldwide*"). Reads like a voice
  getting quieter. Very strong idea, and it works in Arabic with no changes.
- Big stat "50%" ~3× body.
- **Arabic:** all of this translates. Centred section titles work in Arabic. Uppercase eyebrows become
  a small regular label.

**Layout & structure.**
- Centred title block (eyebrow pill → title → 2-line subtitle), then content in a 12-col grid.
- Bento grid: 1 tall card + 3 cards of different sizes.
- **Separation:** tone (darker panels on lighter ground), large radius (~20px), and very large
  vertical space between sections (~120–150px). No rules, no shadows, no borders.
- Testimonials: 4 tall cards, quote top, avatar + name bottom, big empty middle.

**Imagery.**
- **Cut-out photos placed directly on the panel tone** (hand with rings, woman in sunglasses,
  chess piece). Photos bleed off the card edge (the woman is cut by the card's bottom edge).
- Colour grade: warm, high-contrast, rich.
- **Warning:** the chess queen, the woman and the hands look AI-generated, and the handshake is
  exactly the stock cliché the Designer Brief must avoid.

**Buttons, links, UI.** Dark pill with an arrow-in-white-circle; small round grey prev/next buttons.

**Motion hints.** Testimonial carousel. Bento cards could reveal on scroll.

**Fits:** off-white ground, no borders, no icons, no white panels, colour only from photos,
two-tone sentences, big space between sections.
**Conflicts:** the imagery is AI-looking and clichéd (handshake, chess piece); testimonial cards are
mostly empty space.

**Take**
- **Panels darker than the ground** (no white at all). The softest option for the eyes.
- Two-tone sentences (ink → pale grey) as a signature typographic device.
- Cut-out photos on a tone panel, bleeding off one edge.
- Big vertical space between sections; centred title blocks.
- Dark pill button with an arrow circle.

**Avoid**
- Handshakes, chess pieces, AI-smooth people. Testimonial cards that are 70% empty.

---

### 1.5 Whenevr (`f0f61acdd770bc346cb285a20a1a54f7.jpg`)

**What it is.** The blog index of a design-subscription agency (built in Framer): centred bold
headline with one italic serif word, a large featured post, then three post cards. Confident,
editorial, very "studio".

**Ground & colour.**
- Ground ~`#EFEFEF`.
- Cards: white `#FFFFFF` with a **thick, soft white rim** (an inner image inset ~6px inside a slightly
  lighter outer card) and a very soft shadow. It reads like a physical tile, not an outline.
- Ink ~`#111111`. Body grey ~`#7A7A7A`. Tag pills: ~`#EDEDED` with black text.
- Accent: none in the UI. Colour only from images (one red-orange flower centre).
- Total: grey, white, black, one grey. Contrast: high on headings, soft on body.

**Typography.**
- Display: **bold grotesk with very tight tracking** (~-3%), ~4× body, centred, plus **one italic
  serif word** ("*faster.*"). Logo and "by Whenvr" also in italic serif. This mix is the personality.
- Card titles: medium weight ~1.4× body. Body ~1× in grey.
- **Arabic:** Almarai Bold/ExtraBold gives the heavy display. The italic serif accent has no direct
  Arabic version; the equivalent would be **one word set in a contrasting Arabic face** (a Naskh or
  Thuluth-flavoured display face) or in the accent colour. Needs a decision (Question 4).

**Layout & structure.**
- Simple top bar: logo left, 3 text links spread across, "Menu" pill right. No boxes around nav.
- Centred eyebrow pill → headline. Featured card: image half / text half. Then a 3-up grid.
- **Separation:** white tiles on grey + soft shadow + consistent ~16px gutters.

**Imagery.**
- Abstract, desaturated, soft-focus images (blurred figure, macro flower, figure with visor,
  two hands reaching). Images fade to white at their bottom edge into the card.
- **All four look AI-generated** (smooth gradients, uncanny figures). The "two hands reaching" is a
  Michelangelo cliché. This is the clearest conflict with the user's taste.
- But the **treatment** is useful: muted grade, mostly greyscale with one colour note, image melts
  into the ground instead of having a hard edge.

**Buttons, links, UI.** Nav as plain text links; "Menu" as white pill with chevron; tag pills on images; "5 min read" with a dot.

**Motion hints.** Framer site: likely scroll reveals, hover lift on cards, image zoom on hover.

**Fits:** grey ground, no borders, no icons, editorial confidence, plain text nav.
**Conflicts:** AI-looking images; the double-rim card is close to a "box" feel; white tiles.

**Take**
- Bold, tight display headline with one contrasting word.
- Plain text navigation, no boxes.
- Image grade: mostly neutral/desaturated with one colour note; image can fade into the ground.

**Avoid**
- The AI imagery itself. The double-rim tile if the user feels it as a box.

---

## 2. Across all five

### What they share (probably what the user is drawn to)
1. **Light neutral grey ground, never white.** Range `#EFEFEF`–`#F6F7F8`. All neutral or a hair cool; none warm/cream.
2. **Borderless rounded panels.** Radius roughly 16–24px. Separated by tone (and sometimes a very soft shadow), never by a line.
3. **Near-black ink, not pure black, and almost no colour in the UI.** 0 or 1 accent. Colour comes from the images.
4. **Two-tone headings.** 4 of 5 split a heading or sentence into ink + something quieter (grey, teal, or italic serif).
5. **Big, regular-weight display type; small, grey body.** Hierarchy by size and tone more than by weight (except Whenevr).
6. **Pill shapes for everything small:** buttons, tags, eyebrows, nav groups. Dark filled pill = primary action.
7. **Arrows as the "go" sign** (↗ → ↘), often in a circle. Not icons in the decorative sense; they are functional.
8. **Horizontal rows that run off the edge** (carousel / drag) in 3 of 5.
9. **Lots of empty space** inside panels and between sections.

### Where they disagree
- **Panel lighter or darker than the ground?** White on grey (Ocamba, Metafore, Whenevr) vs darker grey on lighter grey (Luxura) vs tinted on white (UX Creatives).
- **Display weight:** light/regular (Ocamba, Metafore, UX Creatives, Luxura) vs bold and tight (Whenevr).
- **Alignment:** left-aligned asymmetric intros (Ocamba, Metafore, UX Creatives) vs centred title blocks (Luxura, Whenevr).
- **Accent:** none (Ocamba, Luxura, Whenevr) vs teal (Metafore) vs pale blue (UX Creatives).
- **Shadow:** none (Luxura) vs very soft (Metafore, Whenevr, UX Creatives).

### Surprising
- The user said "no boxes", yet every reference is card-based. The difference is the **border**.
- Small icons appear in Ocamba and Metafore; the user doesn't want icons. These pages still look good
  with the icons removed (the big numbers or dash rules do the work).
- **Almost all the imagery in the references is AI-looking or 3D-stock** (3D blocks, glass ribbons,
  3D spine, chess queen, blurred figures). The user likes the *pages*, not the *images*. Our
  photos and mockups must be real and human-made; this is where Katechs can look more honest than the references.
- Only one reference (UX Creatives) shows a device mockup, and it is the strongest image of the five.

---

## 3. Answers to the open questions

### Ground: what replaces pure white?
The references all say: **light neutral grey.**
- **A. Neutral light grey `#F2F2F2`** (Ocamba/Luxura/Whenevr average). Safe, proven, every photo sits well on it. Risk: can feel a little flat/"Framer template".
- **B. Very slightly cool grey `#F5F6F8`** (Metafore). Ties to a navy ink, feels clean and tech. Risk: cool can feel clinical.
- **C. Very slightly warm off-white `#F4F2EE`.** Not in the references. Softer on the eyes and more distinct, warmer for an Arabic audience. Risk: drifts toward "beige", and photos must be graded to match.
- **D. Dark site.** Not supported by any page reference (only the mockup scene is dark). Not recommended as the main ground.

**Recommendation: A or B,** leaning **B (`#F5F6F8`) if navy stays as the ink**, A if ink becomes neutral black. Use dark (the UX Creatives slate) only for the mockup scenes, not the page.

### Colour: navy ink? one accent? how do photos and colour work together?
- **A. Monochrome UI, colour only from photos** (Luxura, Whenevr). Calmest, most premium. Risk: brand recognition depends entirely on the visuals.
- **B. Navy-black ink + one accent used rarely** (Metafore): one word per headline, the primary button, links. Risk: the accent must be chosen carefully (PENDING, I won't invent it).
- **C. Tinted system** (UX Creatives): panels get a pale tint of the brand colour. Risk: every panel colour must be balanced against photos; can look "healthcare".

**Recommendation: B.** Keep a navy-black ink (`#0F1A2A`-like, close to the current navy) so the brand
continues, and allow one accent at most, spent on one word and the main action. Photos are graded
neutral-to-cool so they don't fight the accent.

### Typography: keep Almarai? How big is big?
- References use big, mostly regular-weight display (3–4× body) and a two-tone treatment.
- **A. Keep Almarai** (300/400/700/800). It has the light weight for soft display and the heavy weight for a Whenevr-style headline. Zero cost. Risk: it is very common on Arabic sites.
- **B. Almarai for body + a second Arabic display face for headings.** Gives the personality the Latin references get from their quirky grotesks / italic serif. Risk: loading cost, needs a font choice (user decision).
- **C. Almarai + a contrasting face for one word only** (the Whenevr italic-serif trick in Arabic). Risk: easy to overdo.

**Scale suggestion:** body 18px (Arabic needs more than the references' 14–16px), display 56–72px on desktop (~3.5–4×), section title ~40px, card title ~24px. Never add letter-spacing to Arabic; use line-height ~1.3 for display, ~1.8 for body.
**Recommendation: A for now,** with the two-tone (ink → muted grey) device as the signature. Revisit B after a first specimen page.

### Separating content without boxes
The references use, in order of frequency: **tone shift panels, big vertical space, type size, soft shadow, tiny dash rules, edge-bleeding rows.** No full borders.
- **A. Space + type only** (no panels at all). Most faithful to "no boxes". Risk: none of the references actually does this; long service pages can blur together.
- **B. Borderless tone panels** (Luxura: panel slightly darker than the ground, no shadow) + big section spacing. Risk: user may still read panels as "boxes".
- **C. White tiles with soft shadow on grey** (Metafore/Whenevr). Most "card"-like. Risk: closest to the old boxed feel, and brings white back.

**Recommendation: B,** used sparingly (only where items are siblings: services, steps, testimonials), with A as the default for text sections. Section-to-section separation by space and alternating ground tone (e.g. `#F5F6F8` ↔ `#ECEEF1`), never by lines.

### Buttons and links
All five agree: **pills.**
- **A. Dark filled pill + arrow in a circle** (Luxura, Metafore). Clear primary action, no border. Risk: the arrow circle is close to an icon (but functional).
- **B. Text link + arrow, underline on hover** for secondary actions. Lightest. Risk: weak as a primary CTA.
- **C. Outlined pill** (Ocamba). Uses a border, conflicts with taste. Not recommended.

**Recommendation: A for primary, B for secondary.** The arrow must be mirrored for RTL (points left / up-left).

### Imagery: full-bleed, cut-outs, or framed?
- **A. Cut-out photos on a tone panel, bleeding off one edge** (Luxura, UX Creatives spine). Very distinctive, no frame. Risk: cut-outs are expensive for the designer, and need careful light matching.
- **B. Rounded image inside a panel / tile** (Ocamba, Whenevr). Easiest, consistent. Risk: more "card" feeling.
- **C. Image that fades into the ground** (Whenevr bottom fade). Soft, no edge. Risk: can look AI if overused.
- **Mockups:** follow UX Creatives: real device, three-quarter angle from slightly above, tight crop bleeding off the frame, deep-toned backdrop or the site ground, soft real reflections, screen shows a real Katechs page.

**Recommendation: A for photos of people/objects, B for mockups shown inside a section,** UX Creatives-style hero mockups for big moments. This feeds the Designer Brief.

### Motion
The references imply: **horizontal drag/arrow carousels, one card expanding (Metafore), hover lift/tint, custom drag cursor, scroll reveals.**
- **A. Calm reveals only** (fade/rise on scroll). Safe. Risk: generic.
- **B. Calm reveals + one signature interaction** per page type (the Metafore expanding card for services, or a drag carousel). Risk: needs RTL-correct direction (drag starts from the right).
- **C. Rich motion** (parallax mockups, cursor effects everywhere). Risk: busy, slow, reads "template".

**Recommendation: B.**

---

## 4. Starting token draft

> **DRAFT. Proposal only. Nothing here is decided.** Derived from the five images. The accent is left
> PENDING on purpose.

```
/* Ground */
--ground:        #F5F6F8;   /* page (option B). Option A: #F2F2F2 */
--ground-alt:    #ECEEF1;   /* alternate section tone / panel (darker than ground, Luxura idea) */
--surface:       #FAFBFC;   /* only if a lighter panel is needed; avoid pure #FFF */

/* Ink */
--ink:           #0F1A2A;   /* navy-black, keeps the current navy family */
--ink-2:         #3A4454;   /* body text */
--muted:         #8A929E;   /* secondary text, second half of two-tone headings */
--faint:         #D9DDE3;   /* big decorative numerals, 1px dash rules */

/* Accent */
--accent:        PENDING;   /* one colour, max one use per screen */

/* Action */
--btn-bg:        var(--ink);
--btn-fg:        var(--ground);

/* Shape */
--radius-panel:  20px;
--radius-media:  16px;
--radius-pill:   999px;
--shadow:        none;      /* option: 0 10px 30px rgba(15,26,42,.06) if panels need lift */

/* Type (Almarai, desktop) */
--fs-display:    64px;  line-height 1.25
--fs-h2:         40px;  line-height 1.3
--fs-h3:         24px;  line-height 1.4
--fs-body:       18px;  line-height 1.8
--fs-small:      14px;  line-height 1.6
/* weights: display 300 or 800 (decide), headings 700, body 400. letter-spacing: 0 always. */

/* Spacing rhythm (8px base) */
8 · 16 · 24 · 32 · 48 · 64 · 96 · 128
/* gutter between panels 16–24; inside panels 32–40; between sections 96–128 */
```

Note: the "one section = one screen" rule on desktop still applies; the section spacing above is
inside that screen, not added on top of it.

---

## 5. Questions for the user

1. **Boxes:** every reference uses rounded panels without borders. Is that acceptable to you? Is
   "no boxes" really "no outlines / no hard-edged bordered cards"? Or do you want no panels at all?
2. **White:** four references put white cards on a grey page. Is white OK as a small surface, or
   should nothing be white (Luxura style: panels darker than the page)?
3. **Ground temperature:** neutral grey (`#F2F2F2`), a cool grey that goes with navy (`#F5F6F8`), or
   a slightly warm off-white (`#F4F2EE`, not in the references)?
4. **Headline personality:** light and calm (Ocamba, Luxura) or bold and tight (Whenevr)? And do
   you want a "special word" in a second Arabic typeface, like Whenevr's italic serif?
5. **Accent:** none (colour only from photos), or one? If one, keep a Katechs brand colour?
6. **Alignment:** centred section titles (Luxura, Whenevr) or right-aligned asymmetric intros
   (Ocamba, Metafore mirrored for RTL)?
7. **Arrow circles:** the references use arrow buttons everywhere. Do you count those as "icons"
   you don't want, or are functional arrows fine?
8. **What did you like in each image?** One line each would remove most of the guessing. Was it
   the page, a colour, the mockup, a single detail?
9. The imagery in the references is mostly AI-looking. Confirm you liked the layouts, not the images.
