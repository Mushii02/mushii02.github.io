# Mohsin — Portfolio Website

Personal portfolio for Mushii (Roblox Gameplay Engineer).
Plain HTML/CSS/JS — no build tools, no dependencies. Edit a file, refresh the browser, done.

## Preview locally

Double-click **`preview.cmd`** — it starts a tiny local server and opens the site
at http://localhost:8080. Close its window to stop the server.

Don't open `index.html` directly from disk: the page itself works, but YouTube
blocks the showcase videos on `file://` pages (Error 153 — no referrer), so the
videos only play when served over http (the local server or the live site).

## How to edit content

| What | Where |
| --- | --- |
| Shipped games (cards with thumbnails) | `GAMES` list at the top of `script.js` |
| Video showcases (tank, weapon framework, etc.) | `PROJECTS` list at the top of `script.js` — `video` is the YouTube video ID (the part after `watch?v=`). The Showcase nav link and section stay hidden until this list has at least one entry. |
| Bio, experience, skills, contact info | `index.html` — each section is marked with a `<!-- ===== SECTION ===== -->` comment |
| Hero visit / games-shipped stats | Game count comes from the `GAMES` list. Visit totals refresh live from Roblox when the page loads (`visits` is only a fallback). |
| Colors / theme | The `:root` variables at the top of `style.css` |
| Game thumbnails | `assets/games/` — 768x432 PNGs pulled from Roblox |

To add a new game: copy one `{ ... }` block in the `GAMES` list, paste it, and edit the
values. Same for showcases in `PROJECTS`. Live visit counts are pulled from Roblox using
`universeId` (or the place ID in `link`). The `visits` field is only shown if that fetch
fails.
