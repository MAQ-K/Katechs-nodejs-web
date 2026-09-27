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

# btns hover ✅ DONE (2026-09-28)
its having 2 effects now 
remove the one that make the btn move from it space

> Done: removed the magnetic "follow the cursor" wrapper and the hover lifts from every service-page
> button. The colour/fill hover stays. Plan cards still lift as a whole on hover (that's the card, not the button).

# plans cards ✅ DONE (2026-09-28)
make all plan cards style follow the style on the host services page {only the style}

> Done: website-design, vps-hosting, wordprees-hosting and ssl-certificate cards now use the hosting card look
> (emails, /services already did). Homepage pricing untouched.

---
