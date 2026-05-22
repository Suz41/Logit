# Log!t

A personal movie logging app built as a single-file web app. Search movies via TMDB, rate them, and track your watching habits — all stored locally in your browser.

**Live:** https://suz41.github.io/Logit

## Features

- **Movie search** — powered by TMDB API
- **Rating system** — rate movies from 0.5 to 5 stars
- **Poster picker** — choose from multiple poster options
- **Editable metadata** — title, year, genre, director, actors, language, country, runtime, notes
- **Month-grouped library** — movies organized by when you logged them
- **Grid layouts** — toggle between different column counts
- **Dark theme** — easy on the eyes
- **Local storage** — all data stays in your browser

## Stats Page (PS.html)

A companion stats dashboard that visualizes your movie data:

- Total movies, countries watched, and runtime stats
- Expandable chip grids for genres, actors, directors, and languages
- Rating distribution chart
- Monthly activity heatmap
- Decade breakdown
- Recent movies list

## How to Use

1. Open the app in your browser
2. Search for a movie using the search bar
3. Tap a result to add it to your library
4. Tap the poster to change it, or tap the rating to edit it
5. Tap the profile button to view your stats

## Tech Stack

- HTML / CSS / JavaScript (single file)
- TMDB API for movie data
- localStorage for persistence
