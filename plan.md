# plan.md — Visit Eagleland (AI-built version)

Planner: Claude Opus 5.5. Built for BCIT FWDP 1500, Assignment #2, Gen AI Planning Activity.
This is a **new** version of the Country Website project. Do not copy any older Eagleland site.

## 1. Project summary

A 4-page tourism-style website about **Eagleland**, the fictional country from the game *EarthBound* (Mother 2).
Plain HTML, CSS and a tiny bit of JavaScript only. **No templates or frameworks** (a reset/normalize file is allowed).

- Live location: `kimdesignedthis.com/visit-eagleland-ai/` (a new subfolder, so nothing existing is overwritten)
- GitHub: a new **public** repo named `visit-eagleland-ai`

## 2. Pages and content

All text is written **originally** for this site (summaries in our own words, no copying from wikis or guides).
Mention that EarthBound and Eagleland belong to Nintendo / Ape / HAL Laboratory, and that this is a student fan project.

| File | Page | Content | Required elements on this page |
|---|---|---|---|
| `index.html` | Home | Hero welcome, short intro to Eagleland, 4 "featured town" cards | **CSS Grid** for the town cards, 1+ image |
| `towns.html` | Towns | Onett, Twoson, Threed, Fourside: what each town is like and what to see | **table** comparing the towns (town, vibe, must-see, best for), 1+ image |
| `visit.html` | Plan Your Visit | Travel tips, a short "local saying" quote, a video, and a contact form | **blockquote**, **video**, **contact form** |
| `credits.html` | Credits | Every image, video, font and the AI tools used | List of credits, each naming **the page where the asset is used**, the creator, a link to the source, and the licence |

### Contact form (visit.html)
Does not need to work, but must be semantic and accessible:
- `<form>` with a `<fieldset>` and `<legend>`
- Fields: name, email (`type="email"`), "Which town are you visiting?" (`<select>`), message (`<textarea>`), a checkbox, and a submit `<button type="submit">`
- **Every field has a visible `<label>` whose `for` matches the field's `id`.** No placeholder-only fields.
- `required` on name, email and message

## 3. Shared parts on every page

- `<a class="skip-link" href="#main">Skip to content</a>` as the first item in `<body>`
- `<header>` with site name and the **same `<nav>`** linking to all 4 pages (mark the current page with `aria-current="page"`)
- `<main id="main">`, `<footer>` with a fan-project note and a link to Credits
- `<meta name="description" content="...">` with a **unique** SEO description on each page
- `<meta name="viewport" ...>`, `lang="en"`, a unique `<title>` per page
- Favicon links on every page (see section 6)
- `<script src="js/main.js" defer></script>` in the `<head>` (not at the bottom of the body)

## 4. Design

New, clean and modern look with a light nod to the game's retro style.

- **Colours:** cream background `#FFF8EC`, dark navy text `#1F2340`, red accent `#B8323A` (5.6:1 on cream), teal accent `#1A6B61` (6.0:1 on cream). These darker accents pass WCAG AA (4.5:1) for normal text. Do not use lighter tints for text.
- **Fonts (custom font requirement):**
  - Headings: **"Press Start 2P"** (pixel font, SIL Open Font License), self-hosted as `.woff2` in `/fonts`, used only for short headings
  - Fallback: if the font file can't be downloaded or its licence can't be confirmed, use a system font stack, keep the `@font-face` rule commented out, and list the font as "to add" in the README
  - Body: system font stack for readability
- **Layout:** mobile-first single column; town cards become a 2-column then 4-column **Grid**; header/nav uses **Flexbox**
- Visible focus styles on all links, buttons and fields

## 5. Images and video (Creative Commons only)

Nintendo's game art is **not** Creative Commons, so do not use screenshots or official art.

- **Illustrations:** create **original SVG illustrations** for the hero and town cards (simple shapes: a hilltop town, a bus, a city skyline). Save each as its own `.svg` file in `/images` and place it with **`<img src="images/name.svg" alt="..." width height>`**, not inline `<svg>`, so they count toward the 2-image requirement even if no photos can be found. Credit them as "original artwork created with AI assistance (Claude)".
- **Photos:** use 2+ photos from **Wikimedia Commons** with a CC0 or CC BY licence that look like Eagleland's real-world inspiration (small-town America, a desert road, a city skyline). Check and record each licence.
- **Video:** one short CC-licensed video from Wikimedia Commons (for example a small-town or road-trip clip). Use `<video controls>` with a `<track>` or text description if captions aren't available.
- **Optimization:** save images as `.webp` at the size they display (max ~1600px wide), add `width`, `height`, meaningful `alt` text, and `loading="lazy"` below the fold. Keep the video short and compressed.
- **If an asset can't be downloaded or its licence is unclear, don't use it.** Leave a clear placeholder and list it in the README as "to add".

## 6. Favicon (mobile, tablet, desktop)

In `/images/favicon/`: `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` (180×180), `icon-192.png`, `icon-512.png`, plus `site.webmanifest`. Link `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png` and the manifest in every page's `<head>` (see section 12). `icon-192.png` and `icon-512.png` are listed **inside `site.webmanifest`**, not in the `<head>`.

## 7. File structure

```
visit-eagleland-ai/
├── index.html
├── towns.html
├── visit.html
├── credits.html
├── css/
│   ├── reset.css
│   └── styles.css      (one shared external stylesheet, mobile-first)
├── js/main.js          (mobile nav toggle only)
├── fonts/
├── images/  (+ images/favicon/)
├── video/
├── plan.md
├── ai-log.md          (AI prompt log, linked from credits.html)
└── README.md
```

## 8. Code quality rules

- Semantic HTML (`header`, `nav`, `main`, `section`, `article`, `figure`/`figcaption`, `footer`), one `<h1>` per page, no skipped heading levels
- Clean, indented, commented CSS grouped by section; **mobile-first** with `min-width` media queries (e.g. 600px, 900px, 1200px)
- Works from **320px to 1920px** wide with no sideways scrolling
- Fully keyboard navigable; the mobile nav toggle is a `<button>` with `aria-expanded`
- Validate HTML (W3C validator) and CSS before finishing

## 9. Git and AI credit

- New git repo; commit after each main step (setup, each page, styles, assets, fixes)
- Every AI-written commit gets a trailer, for example:
  `git commit -m "Build towns page" --trailer "Assisted-by: Claude Sonnet 5.5"`
- **AI roles (use these names everywhere: credits, README, commits):**
  - Planner: Claude Opus 5.5 (Claude app chat)
  - Reviewer: Claude Sonnet 5.5 (Claude Code in VS Code, separate chat)
  - Builder: Claude Sonnet 5.5 (Claude Code in VS Code, new chat)
- Credits page and README name the AI tools and models used for planning, review and building

## 10. Build order

1. Set up folders, reset.css, empty styles.css, git init, first commit
2. Shared header, nav, footer and head tags (copy into all 4 pages)
3. Home page with Grid town cards
4. Towns page with table
5. Visit page with blockquote, video and accessible contact form
6. Credits page
7. Styles: mobile first, then larger screens
8. Assets: SVGs, CC photos, video, font, favicons; fill in credits
9. Check every requirement in section 11, then fix

## 11. Requirements checklist

- [ ] 4 pages: 3 about Eagleland + 1 credits
- [ ] Credits list the page each asset is used on, with creator links and AI tools
- [ ] 1 table, 2+ images, 1 video/audio, 1 blockquote, 1 accessible contact form
- [ ] Same nav on all pages, linking to every page
- [ ] SEO meta description on each page
- [ ] Favicon for mobile, tablet and desktop on all pages
- [ ] 1 external stylesheet shared by all pages
- [ ] CSS Grid, CSS Flexbox, 1 custom font
- [ ] Semantic, clean HTML and CSS
- [ ] Mobile-first, works 320px–1920px
- [ ] Skip link and keyboard navigation
- [ ] Optimized images and video
- [ ] All content is Creative Commons or original
- [ ] Public GitHub repo

---

# Part B: Exact build details (follow these exactly; do not improvise)

## 12. `<head>` template (use on every page, change only title and description)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>PAGE NAME | Visit Eagleland</title>
  <meta name="description" content="UNIQUE 140–160 CHARACTER DESCRIPTION OF THIS PAGE">
  <link rel="icon" href="images/favicon/favicon.svg" type="image/svg+xml">
  <link rel="icon" href="images/favicon/favicon-32.png" sizes="32x32" type="image/png">
  <link rel="apple-touch-icon" href="images/favicon/apple-touch-icon.png">
  <link rel="manifest" href="images/favicon/site.webmanifest">
  <link rel="preload" href="fonts/press-start-2p.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/styles.css">
  <script src="js/main.js" defer></script>
</head>
```

All paths are **relative** (no leading `/`), because the site lives in a subfolder.

## 13. Shared header, nav and footer (identical on every page)

```html
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header">
  <a class="logo" href="index.html">Visit Eagleland</a>
  <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">Menu</button>
  <nav id="site-nav" class="site-nav" aria-label="Main">
    <ul>
      <li><a href="index.html">Home</a></li>
      <li><a href="towns.html">Towns</a></li>
      <li><a href="visit.html">Plan Your Visit</a></li>
      <li><a href="credits.html">Credits</a></li>
    </ul>
  </nav>
</header>
<main id="main"> ... </main>
<footer class="site-footer">
  <p>A student fan project for BCIT. EarthBound and Eagleland belong to Nintendo, Ape Inc. and HAL Laboratory.</p>
  <p><a href="credits.html">Image, video and AI credits</a></p>
</footer>
```

- Add `aria-current="page"` to the current page's nav link.
- `js/main.js` only toggles the nav: on button click, flip `aria-expanded` and a class on the nav. On screens 900px and wider, the toggle is hidden and the nav is always shown.
- Without JavaScript, the nav must still be visible (hide it only when the `js` class is on `<html>`, added by main.js).

## 14. Page outlines (headings in this exact order)

### index.html
- `h1` Welcome to Eagleland
- Hero: intro paragraph (2–3 sentences) + hero SVG illustration in a `<figure>`
- `h2` Four Towns, One Big Adventure → 4 cards in a **Grid** (`<ul class="town-grid">` of `<li><article>`), each with `h3` town name, small SVG, 1 sentence, link to `towns.html#town-id`
- `h2` Why Visit? → short paragraph + 1 CC photo in a `<figure>` with `<figcaption>`

### towns.html
- `h1` Towns of Eagleland
- `h2` Compare the Towns → `<table>` with `<caption>`, `<thead>`, `<th scope="col">` headers: Town, Vibe, Must-See, Best For; first cell of each row is `<th scope="row">`. Wrap the table in a div that scrolls sideways on small screens.
- One `<section>` per town with `id="onett"`, `id="twoson"`, `id="threed"`, `id="fourside"`, each with `h2` town name, 1–2 paragraphs, and an image (SVG or CC photo) in a `<figure>`

### visit.html
- `h1` Plan Your Visit
- `h2` Getting Around → 1 paragraph + list of 3–4 tips
- `h2` Local Wisdom → `<blockquote>` with an original saying, plus `<cite>` naming the (fictional) speaker, e.g. a town resident. Do not quote real game dialogue.
- `h2` See It for Yourself → `<video controls preload="metadata" width height>` with `<source>` (.webm and/or .mp4) and a text description below
- `h2` Contact Us → the accessible form from section 2

### credits.html
- `h1` Credits
- `h2` Text, `h2` Images, `h2` Video, `h2` Fonts, `h2` AI Tools: each a list. Every item names: what it is, **which page it appears on**, creator (linked), source link, licence (linked).
- **Text:** all page text is original writing by Kim Janzen with AI assistance. Town names, Eagleland and EarthBound lore come from the game *EarthBound* (Nintendo, Ape Inc., HAL Laboratory) and are **not** Creative Commons; they are used for a non-commercial student fan project. Name the source of town facts (Kim's knowledge of the game).
- **AI Tools:** name each model and its role, and **link to the AI log**: `<a href="https://github.com/GITHUB_USER/visit-eagleland-ai/blob/main/ai-log.md">AI prompts and process log</a>`. `ai-log.md` is in the project root and records the prompts used. Leave `GITHUB_USER` as-is so Kim can fill in her GitHub username.

## 15. CSS details

- Custom properties in `:root` for all colours, spacing and fonts
- `@font-face` for Press Start 2P with `font-display: swap`; headings use it at a modest size (it is wide); body uses a system stack
- Mobile first. Breakpoints: `min-width: 600px` (2-col grid), `900px` (desktop nav, 4-col grid), `1200px` (max-width container 1100px centered)
- `img, svg, video { max-width: 100%; height: auto; display: block; }`
- `.skip-link` hidden off-screen until `:focus`
- `:focus-visible` outline 3px teal on links, buttons, inputs
- Header uses **Flexbox**; town cards use **Grid**

## 16. Definition of done (test each one before finishing)

1. Open every page at 320px, 768px, 1280px and 1920px wide: no sideways scroll, nothing overlaps.
2. Press Tab from the top of each page: the skip link appears first and jumps to main content; every link, button and field can be reached and has a visible focus outline.
3. Click every form label: the cursor moves into its field.
4. Every nav link works on every page, and the current page is marked.
5. Every `<img>` has alt text, width and height; images are .webp or .svg.
6. The video plays and has a description.
7. W3C HTML validator shows no errors on all 4 pages.
8. Every asset on the site appears in credits.html with its page, creator, source and licence.
9. The favicon shows in the browser tab.
10. Section 11 checklist is all ticked.

## 17. Wireframes (mobile left, desktop right)

### All pages: header
```
MOBILE (320px)                 DESKTOP (900px+)
+------------------------+     +---------------------------------------------+
| Visit Eagleland [Menu] |     | Visit Eagleland   Home Towns Visit Credits  |
+------------------------+     +---------------------------------------------+
| (nav opens below)      |
```

### index.html
```
+------------------------+     +---------------------------------------------+
| H1 Welcome to Eagleland|     | H1 Welcome to Eagleland                      |
| intro text             |     | intro text            |  [hero SVG image]    |
| [hero SVG image]       |     +---------------------------------------------+
| H2 Four Towns...       |     | H2 Four Towns, One Big Adventure             |
| [card Onett]           |     | [Onett] [Twoson] [Threed] [Fourside]  (grid) |
| [card Twoson]          |     +---------------------------------------------+
| [card Threed]          |     | H2 Why Visit?                                |
| [card Fourside]        |     | text                  |  [CC photo]          |
| H2 Why Visit? text     |     +---------------------------------------------+
| [CC photo]             |     | footer                                       |
| footer                 |     +---------------------------------------------+
```

### towns.html
```
+------------------------+     +---------------------------------------------+
| H1 Towns of Eagleland  |     | H1 Towns of Eagleland                        |
| H2 Compare the Towns   |     | H2 Compare the Towns                         |
| [table, scrolls ->]    |     | [ full-width table ]                         |
| H2 Onett  text [image] |     | H2 Onett    text            |  [image]       |
| H2 Twoson text [image] |     | H2 Twoson   [image]         |  text          |
| ... Threed, Fourside   |     | ... alternating sides                        |
```

### visit.html
```
+------------------------+     +---------------------------------------------+
| H1 Plan Your Visit     |     | H1 Plan Your Visit                           |
| H2 Getting Around list |     | H2 Getting Around | H2 Local Wisdom (quote) |
| H2 Local Wisdom quote  |     | H2 See It for Yourself  [ video ]            |
| H2 See It [video]      |     | H2 Contact Us  [ form, max ~600px wide ]     |
| H2 Contact Us [form]   |     |                                              |
```

### credits.html
```
Single column at all sizes: H1, then H2 sections (Text, Images, Video, Fonts, AI Tools), each a list.
```
