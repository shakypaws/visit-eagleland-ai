# Visit Eagleland (AI-built version)

A 4-page tourism-style fan website about **Eagleland**, the fictional country from the game *EarthBound*.
Built for BCIT FWDP 1500, Assignment #2 (Gen AI Planning Activity). Plain HTML, CSS and a tiny bit of JavaScript, with no frameworks or templates.

EarthBound and Eagleland belong to Nintendo, Ape Inc. and HAL Laboratory. This is a non-commercial student fan project.

## Pages

- `index.html`: Home (hero, CSS Grid town cards, Why Visit)
- `towns.html`: Towns (comparison table and one section per town)
- `visit.html`: Plan Your Visit (tips, blockquote, video, accessible contact form)
- `credits.html`: Credits (every asset with page, creator, source and licence)

Full build instructions are in [plan.md](plan.md). The AI prompt log is in [ai-log.md](ai-log.md).

## AI tools and roles

- **Planner:** Claude Opus 5.5 (Claude app chat)
- **Reviewer:** Claude Sonnet 5.5 (Claude Code in VS Code, separate chat)
- **Builder:** Claude Sonnet 5.5 (Claude Code in VS Code, new chat)

Every commit made by the Builder carries the trailer `Assisted-by: Claude Sonnet 5.5`.

## Assets and optimization notes

- **Illustrations:** original 16-bit-style pixel-art SVGs (square `rect` pixels with `shape-rendering="crispEdges"`), made with Claude Sonnet 5.5 and used through `<img>` tags. No Nintendo characters, sprites or logos are used or imitated.
- **Photos:** two Wikimedia Commons photos (CC0 and CC BY 4.0), converted to `.webp` with `cwebp` (quality 80, 1280px wide).
- **Video:** one CC BY 2.0 clip from Wikimedia Commons. No video encoder (ffmpeg) was available on this Mac, so I used the 480p WebM version that Wikimedia Commons already provides (about 1 MB, 11 seconds). There is no MP4 version. The clip has no speech, so a text description sits under it instead of a caption track.
- **Font:** Press Start 2P (SIL Open Font License), self-hosted in `fonts/` with its licence text.
- **Favicons:** `images/favicon/` has an SVG, 32px and 180px PNGs, and the 192px and 512px icons listed in `site.webmanifest`.

## To add or do

- Replace `GITHUB_USER` in the AI log link at the bottom of `credits.html` with the real GitHub username.
- Create the public GitHub repo `visit-eagleland-ai` and upload to `kimdesignedthis.com/visit-eagleland-ai/` (not done on purpose).
- Run the official W3C HTML and CSS validators. Java is not installed on this Mac, so the local W3C validator could not run. The pages were checked with `html-validate` instead (no errors).
- Optional: add an MP4 copy of the video for older browsers.
