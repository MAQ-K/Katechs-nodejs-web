// Converts the content team's page mockups (Content/**.html) into data files
// that components/ContentNew/ContentPage.js renders under the -new routes.
//
//   node scripts/build-content-new.js
//
// Re-run it whenever the content team sends a new version of a file. The text
// is copied byte for byte (the team's copy and keywords are not negotiable);
// only the wrapper changes:
//   - every class gets a `cn-` prefix and every CSS rule is scoped under
//     `.cn-root`, so Bootstrap/style.css can't reach in and the mockup CSS
//     can't leak out (`.btn`, `.card`, `.h2`, `.lead` all exist in Bootstrap)
//   - the mockup's stand-in header, footer and WhatsApp button are dropped:
//     the real Navbar, Footer and WhatsAppFab render instead
//   - <script> blocks are dropped; ContentPage.js re-implements them
//   - internal links point at the -new routes, placeholder links become "#"
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "Content");
const OUT = path.join(ROOT, "data", "content-new");

// The hub's only layout note: "same hands-and-sky photo from the current
// design as background, no slider". The gradient is the mockup's own, made
// translucent so the photo shows through.
const HUB_HERO_CSS =
  ".cn-root .cn-hero{background:linear-gradient(180deg,rgba(100,150,191,.55) 0%,rgba(67,128,176,.6) 60%,rgba(45,100,147,.8) 100%),url(/images/inspiration/webservices_page/placeholder.jpg) center/cover no-repeat}";

const PAGES = [
  { src: "Website-Services/Website-Section-Hub/katechs-hub-v2.html", out: "web-design-hub", css: HUB_HERO_CSS },
  { src: "Website-Services/Website-Custom/katechs-custom-website_1.html", out: "web-design-custom-website" },
  { src: "Website-Services/WordPress-Web-Store/katechs-wordpress.html", out: "web-design-wordpress" },
  { src: "Website-Services/Store-Online-/katechs-online-store.html", out: "web-design-online-store" },
  { src: "Website-Services/Salla-Store/katechs-salla-store.html", out: "web-design-salla-store" },
  { src: "Email-Services/katechs-email.html", out: "emails" },
  { src: "SEO-Services/V1/katechs-seo-packages.html", out: "seo-v1-packages" },
  { src: "SEO-Services/V1/katechs-seo-quote.html", out: "seo-v1-quote" },
  { src: "SEO-Services/V2/katechs-seo-packages.html", out: "seo-v2-packages" },
  { src: "SEO-Services/V2/katechs-seo-quote.html", out: "seo-v2-quote" },
];

// Content-team URL -> the -new route it is built at for now.
const LINKS = [
  ["/web-design/", "/web-design-new/"],
  ["/services/emails/", "/services/emails-new/"],
  ["/seo/", "/seo-new/packages-v2/"],
];

const decode = (s) =>
  s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

const attrs = (tag) => {
  const o = {};
  for (const m of tag.matchAll(/([\w:-]+)="([^"]*)"/g)) o[m[1]] = decode(m[2]);
  return o;
};

const visibleText = (html) => html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();

function scopeSelector(sel) {
  const s = sel.trim().replace(/\.(-?[_a-zA-Z][\w-]*)/g, ".cn-$1");
  const root = s.match(/^(html|body|:root)(?![\w-])/);
  if (root) return ".cn-root" + s.slice(root[0].length);
  if (s.startsWith(".cn-js")) return ".cn-root" + s; // was `html.js` toggled by script
  return ".cn-root " + s;
}

function scopeCss(css) {
  let out = "";
  let pos = 0;
  while (pos < css.length) {
    const open = css.indexOf("{", pos);
    if (open < 0) break;
    const prelude = css.slice(pos, open).trim();
    let depth = 1;
    let j = open + 1;
    while (depth) {
      if (css[j] === "{") depth++;
      else if (css[j] === "}") depth--;
      j++;
    }
    const inner = css.slice(open + 1, j - 1);
    if (/^@(media|supports)/.test(prelude)) out += `${prelude}{${scopeCss(inner)}}\n`;
    else if (prelude.startsWith("@")) out += `${prelude}{${inner}}\n`;
    else out += `${prelude.split(",").map(scopeSelector).join(",")}{${inner}}\n`;
    pos = j;
  }
  return out;
}

function rewriteHref(href) {
  if (href.includes("[")) return "#"; // placeholder the team hasn't filled yet
  for (const [from, to] of LINKS) if (href.startsWith(from)) return to + href.slice(from.length);
  return href;
}

function convert({ src, css: extraCss = "" }) {
  const file = fs.readFileSync(path.join(SRC, src), "utf8");
  const head = file.slice(0, file.indexOf("</head>"));
  let body = file.slice(file.indexOf("<body"), file.lastIndexOf("</body>"));
  body = body.slice(body.indexOf(">") + 1);

  const title = decode(head.match(/<title>([^<]*)<\/title>/)[1]);
  const meta = [...head.matchAll(/<meta\s[^>]*>/g)]
    .map((m) => attrs(m[0]))
    .filter((a) => !a.charset && a.name !== "viewport");
  const canonical = (head.match(/<link rel="canonical" href="([^"]*)"/) || [])[1] || null;
  const jsonLd = [...head.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) =>
    m[1].trim()
  );
  const css = [...head.matchAll(/<style>([\s\S]*?)<\/style>/g)].map((m) => m[1]).join("\n");

  body = body
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<header class="top">[\s\S]*?<\/header>/, "")
    .replace(/<footer>[\s\S]*?<\/footer>/, "")
    .replace(/<a [^>]*class="wa"[\s\S]*?<\/a>/, "");
  const sourceText = visibleText(body);

  body = body
    .replace(/\son[a-z]+="[^"]*"/g, "")
    .replace(/\saction="\[[^"]*\]"/g, " data-cn-unwired")
    .replace(/\sclass="([^"]*)"/g, (_, c) => ` class="${c.trim().split(/\s+/).map((t) => "cn-" + t).join(" ")}"`)
    .replace(/\shref="([^"]*)"/g, (_, h) => ` href="${rewriteHref(h)}"`)
    .trim();

  // Only attributes may change. If the copy moved by one character, stop.
  if (visibleText(body) !== sourceText) throw new Error(`${src}: page text differs from the source`);

  return { source: `Content/${src}`, title, meta, canonical, jsonLd, css: scopeCss(css) + extraCss, html: body };
}

fs.mkdirSync(OUT, { recursive: true });
for (const page of PAGES) {
  const data = convert(page);
  const js =
    `// GENERATED from ${data.source} by scripts/build-content-new.js — do not edit.\n` +
    `// Change the source file and re-run the script instead.\n` +
    `const page = ${JSON.stringify(data, null, 1)};\nexport default page;\n`;
  fs.writeFileSync(path.join(OUT, `${page.out}.js`), js);
  console.log(`${page.out}.js  ${data.html.length} chars html, ${data.css.length} chars css`);
}
