# Log!t

Personal movie logger. Search via TMDB, rate, and track — stored locally in your browser.

https://suz41.github.io/Logit

## Updates

- **v1.5.2** — Profile page with avatar, bio, quick stats, month streak, activity heatmap
- **v1.5.1** — Compact stats layout: all cards in 2-col grid, tighter spacing, smaller avatars
- **v1.5.0** — Moved Clear All Data to About page alongside API key
- **v1.4.9** — Most Rewatched card in stats; Release Years decade breakdown; API key moved to about page
- **v1.4.8** — Inline search bar in settings row (filter logged movies by title); grid column size persists on load; about page theme matches main/stats
- **v1.4.7** — Fix top directors/actors not expanding in stats (duplicate click handler)
- **v1.4.5** — Month headers show month only (no year); add button flush in nav bar; logo left-aligned plain white, bumped to 22px
- **v1.4.4** — Poster arrays no longer stored in localStorage; fetched on-demand from TMDB when opening picker (fixes storage full)
- **v1.4.3** — Android back button closes overlays (popstate); stats page back falls back to index.html instead of looping
- **v1.4.2** — Tighter poster grid spacing (3px gap, compact padding)
- **v1.4.1** — Grid columns 3-10; auto-hide bottom nav on scroll; smaller minimal month headers
- **v1.4.0** — iOS-style clean redesign: frosted glass header, rounded cards with shadows, iOS system colors, polished empty state, sheet drag handles, bigger toggle switches, blue add button
- **v1.3.1** — Add movie button in bottom nav (center floating +); removed nav bar from stats page
- **v1.3.0** — iOS-style bottom nav (Library + Stats); date toggle & column picker in header settings pill with gear icon
- **v1.1.6** — Bottom nav bar: grid, dates, stats moved out of header
- **v1.1.5** — Fix IMDB link search; toggle dates button; fix poster height at 10 columns; clean stats: removed pill badges and genre expand; centered stats header
- **v1.1.4** — IMDB link paste-to-search; imdb_id in exports; full language names in stats; click genre/language/region to see movies; smaller bottom buttons; export/import moved to bottom
- **v1.1.3** — Export asks JSON or TXT before downloading
- **v1.1.2** — Month sections persist open/close state across re-renders; smoother open/close animation
- **v1.1.1** — Month sections no longer auto-open on page load
- **v1.1.0** — Removed Supabase & Firebase; pure localStorage (no external dependencies)
- **v1.0.9** — Fix movie disappearing on refresh (both pages)
- **v1.0.7** — iOS-style toggle switches for rewatch (compact 38×22px, 9px label)
- **v1.0.6** — Rewatch checkbox in meta edit; rewatch badge on movie cards
- **v1.0.5** — Slim export; import (JSON file, paste text, IMDB/TMDB IDs, freeform); rewatch toggle on add; poster re-fetch on import
- **v1.0.4** — Moved import to stats page; About & Clear buttons moved to stats bottom
- **v1.0.3** — Bulk import (paste freeform text)
- **v1.0.2** — About page (tech stack, storage usage)
- **v1.0.1** — Clear All button in stats
- **v1.0.0** — Initial release
