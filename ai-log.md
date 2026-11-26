# AI Log: Visit Eagleland (AI-built version)

This file records the AI tools, models and prompts used to plan, review and build this site,
for BCIT FWDP 1500 Assignment #2 (Gen AI Planning Activity). Author: Kim Janzen.

## Roles

| Step | Tool | Model |
|---|---|---|
| Plan | Claude app (chat) | Claude Opus 5.5 |
| Review the plan | Claude Code in VS Code | Claude Sonnet 5.5 |
| Build | Claude Code in VS Code | Claude Sonnet 5.5 |

## 1. Planning (Claude Opus 5.5)

**What I asked for (summary of my prompts):**
- Make a plan.md for a new version of my Country Website project, based on the Country Website requirements PDF.
- Topic: Eagleland, the fictional country from *EarthBound*, the same topic as my original project.
- I asked whether the new site should copy my old design. The brief allows either, so we chose a **new design** (the old site's URL and code were not given to the AI).
- I asked for the plan to be as accurate and detailed as possible, so a cheaper model could build it without guessing.

**Key decisions from the planning chat:**
- **Hosting:** use a new subfolder (`kimdesignedthis.com/visit-eagleland-ai/`) so my original project isn't overwritten.
- **Images:** Nintendo's game art is not Creative Commons, so the site uses original SVG illustrations plus CC0 / CC BY photos and video from Wikimedia Commons.
- **Font:** Press Start 2P (SIL Open Font License) for headings, system fonts for body text.
- **Pages:** Home, Towns (table), Plan Your Visit (blockquote, video, contact form), Credits.
- **Detail for the builder:** after the first draft, I asked the planner to add exact code templates, page outlines and a test list so Sonnet could build it accurately.

**What the AI produced:** plan.md, with pages, required elements, design, Creative Commons rules, favicon, file structure, build order, a requirements checklist, exact code templates, page outlines and a definition of done.

## 2. Review (Claude Sonnet 5.5, separate chat)

**Prompt:**
```
You are reviewing a website plan. Read Gen-AI-Planning-Activity-Requirements.pdf and visit-eagleland-ai/plan.md.
1. List any requirement from the PDF that plan.md misses or gets wrong.
2. Give up to 5 suggestions to improve the plan.
Do not edit any files yet. Keep it short and plain.
```

**What it found:** no link to the AI chat or resource; no credit for EarthBound text and lore; the 2-image requirement depended on photos; favicon instructions didn't match; no wireframes; accent colours failed contrast; AI model roles didn't match; no font fallback.

**Changes I accepted (made to plan.md by the planner):** all of them. Darker accent colours (checked: 5.6:1 and 6.0:1), illustrations as `<img src="....svg">`, a Text credits section, matching favicon instructions, AI roles named, font fallback, wireframes, and this AI log linked from the credits page.

## 3. Build (Claude Sonnet 5.5, new chat)

**Prompt:**
```
Build the website described in visit-eagleland-ai/plan.md. Work only inside the visit-eagleland-ai folder.

Rules:
- Follow plan.md exactly, including Part B and the wireframes. Do not add features that aren't in the plan.
- Start with: git init, then commit after each step in section 10. Add the trailer --trailer "Assisted-by: Claude Sonnet 5.5" to every commit.
- For Wikimedia Commons photos and the video: only use files where you can confirm the licence is CC0 or CC BY / CC BY-SA. Record the creator, source URL, licence and page used for each one in credits.html.
- Convert photos to .webp if a tool is available on this Mac. If not, use resized, compressed .jpg and note it in the README.
- If any asset can't be downloaded, follow the fallback rules in plan.md and keep going. Don't stop to ask me.
- Do not push to GitHub and do not upload anything.
- When finished, run every test in section 16 that you can, tick the section 11 checklist, and give me a short list of anything not done.
```

## 4. Checks and fixes

_Add follow-up prompts here as you make changes._
