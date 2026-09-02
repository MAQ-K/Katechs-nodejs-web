# Pages that are not a service page

Everything under `pages/services/**` is excluded. Everything below is the rest of the site.
Links assume `npm run dev` is running (`http://localhost:3000`).

## Core
- [Homepage](http://localhost:3000/)
- [About](http://localhost:3000/about-us/)
- [Contact](http://localhost:3000/contact/)
- [Contact (web)](http://localhost:3000/contactWeb/) — a second, separate contact page
- [Support](http://localhost:3000/support/)

## Orders / checkout (tied to a service, but not under `/services/`)
- [Hosting order](http://localhost:3000/hosting-order/)
- [Website order](http://localhost:3000/website-order/)
- [Digital marketing order](http://localhost:3000/digital-market-order/)

## Auth
- [Login](http://localhost:3000/auth/login/)
- [Sign up](http://localhost:3000/auth/sign-up/)
- [Recover password](http://localhost:3000/auth/recover-password/)

## News / blog
- [News index](http://localhost:3000/news/)
- [Email blog](http://localhost:3000/news/email-blog/)
- [Security blog](http://localhost:3000/news/security-blog/)
- [SSL blog](http://localhost:3000/news/ssl-blog/)
- [Web hosting blog](http://localhost:3000/news/web-hosting-blog/)
- [Website design blog](http://localhost:3000/news/website-design-blog/)

## Case studies
- [Case study details](http://localhost:3000/case-studies/case-studies-details/) — no top-level
  `/case-studies` index exists, only this details page

## Legal
- [Privacy policy](http://localhost:3000/privacy-policy/)
- [Terms and conditions](http://localhost:3000/Terms_and_Conditions/)

## Other
- [Jobs](http://localhost:3000/jobs/)
- [Useful articles](http://localhost:3000/useful-articles/)
- [Offers](http://localhost:3000/offers/) — ⚠️ `npm run build` currently fails because of this
  page (known site-wide issue, `pages/offers.js`)
- [Coming soon](http://localhost:3000/coming-soon/)
- 404 — no direct link; it renders for any route that doesn't exist

## ⚠️ One page to flag
- [Training](http://localhost:3000/training/) — lives **outside** `/services/`, but per
  `brain/MANAGEMENT.md` it's tracked as one of the three "last service pages" (SEO, Digital
  Marketing, Training) being rebuilt under goal G1. Content-wise it's a service page even though
  its URL isn't nested under `/services/`.

## Not counted above (dev tooling / internal, not real site pages)
- `pages/lab/**` — dev-only, 404s in production. Start here anyway:
  [Lab hub](http://localhost:3000/lab/)
- `pages/api/**` — backend endpoints, not pages
