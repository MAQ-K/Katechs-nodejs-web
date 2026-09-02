import React from "react";
import Image from "next/image";
import whatsappIcon from "../../public/images/whatsapp.png";

// Floating WhatsApp contact button, mounted once in _app.js.
//
// It used to be copy-pasted into seven page files (index, about-us, contact,
// contactWeb, support, privacy-policy, useful-articles) and absent from the
// other thirty-five — including every services page. Worse, `.floatwhats` and
// `.my-floatwhats` had NO styles anywhere in the codebase, so it never floated
// at all: a 512x512 PNG rendered at its natural size, in normal flow, directly
// above the footer.
//
// One instance here means it is on every page and there is one number to change.

// Kept in one place. If the business line changes, it changes here.
const PHONE = "+201555085828";
const LABEL = "تواصل معنا عبر واتساب";

const WhatsAppFab = () => (
  <a
    href={`https://wa.me/${PHONE}`}
    className="floatwhats"
    target="_blank"
    rel="noreferrer"
    aria-label={LABEL}
  >
    {/* next.config.js sets `images: { unoptimized: true }` sitewide, so this
        ships the 512px source whatever width is declared. It is 30KB, which is
        cheap enough to leave alone; width/height are still worth setting so the
        box is reserved and the browser does not lay out a 512px block first. */}
    <Image src={whatsappIcon} alt="" width={56} height={56} aria-hidden="true" />
  </a>
);

export default WhatsAppFab;
