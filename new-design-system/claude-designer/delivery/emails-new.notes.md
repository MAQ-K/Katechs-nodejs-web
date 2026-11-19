# emails-new.html: notes (page 3, /services/emails-new/)

Sticky height 172px (90px navy bar + 82px sub-nav). The hero and the sub-nav together fill the first screen. Section order is unchanged. Every Arabic word is copied from the snapshot.

- **Hero:** right-aligned. Light 300 display title in two tones: "إنشاء بريد إلكتروني احترافي" in navy, "باسم شركتك" in grey. One navy pill, with WhatsApp as a text link (the outlined button is gone). The trust row uses dots instead of ticks. The background photo is replaced by a 4:3 placeholder on the left.
- **Sub-nav:** grey pill track; the current section is a navy pill (scroll-spy). It replaces the cyan pill.
- **Why (لماذا بريد باسم شركتك؟):** content section, right-aligned. The eyebrow text is set as the section title, two-tone. The first sentence of the paragraph is set in bold navy and the rest in body grey. The 3 problems are white panels with pale numbers 01–03 and a short dash instead of ticks.
- **Features:** opener, centred, on the grey band. The page's signature interaction: the hovered or focused panel widens. The cyan number tiles and the top bar are removed.
- **Plans:** opener, centred. The provider tabs and the currency switch sit on one row. The "most popular" plan is a navy panel instead of having a cyan button. "كل المواصفات" opens as a layer over the card, so the section keeps its height. On screens 820px tall or less, the title block becomes title-right / text-left so it still fits.
- **Chooser:** content section, right-aligned. The form is a white panel with filled pill inputs, rounded-square checkboxes and a grey result box.
- **Steps:** changed from centred to **right-aligned**: the title sits beside the video, and the 4 steps run in one row below. This was the only way to fit the steps and the video on one screen. The closing line and its link move under the lead.
- **Proof:** opener, centred. Metrics and 6 logo slots are on the right, the video and quote on the left. Every placeholder text is kept as written ([عدد], [شعار عميل]…).
- **FAQ:** opener, centred, 2 columns. Only one answer can be open at a time (native `<details name>`), so the section never grows. The sign is a text `+` / `−`.
- **Final CTA:** the navy band (the only one on the page) with the form in a white panel.
- **Removed:** the keyword-highlight bar (`cn-kwbar`) and the `<mark>` styling. They are SEO tooling, not content; the words stay.
- **Shadows:** none on this page (the default).
- **Copy notes (nothing changed):** only Egyptian-pound prices are in the snapshot, so the ر.س switch toggles visually but shows the same prices. "مساحة [المساحة] لكل حساب" is still a placeholder in the copy.
