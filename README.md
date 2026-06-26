# Irina International Tours — modernized website

A polished, modern rebuild of [torontotrip.com](https://www.torontotrip.com) for **Irina International Tours**, delivered by **Kim Consultant**. Same page structure, content and features as the original — redesigned with contemporary layout, typography, spacing and motion — and the **original color scheme preserved**.

All interactive features (booking requests, schedule calendar, contact / flight / insurance forms) are **fully functional in the UI but disconnected** — nothing is sent to a server. They are ready to be wired to a real inbox / backend later.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build to /dist
npm run preview    # preview the production build
```

## Stack

React 19 · Vite 6 · TypeScript (strict) · Tailwind CSS v4 · Motion · React Router 7.

## Preserved brand palette (from the original site)

| Token | Hex | Use |
|-------|-----|-----|
| Navy | `#114581` | primary brand, hero, headings |
| Teal | `#1BA4C4` | accent, quick-links band |
| Coral | `#E9513C` | CTAs, "Contact Us" band |
| Body gray | `#565656` | body text |
| Paper | `#F7F9FB` | page background |

Defined as design tokens in [`src/index.css`](src/index.css).

## Features (functional, not connected)

- **Bilingual EN / РУ** — language-select **popup on launch / relaunch**, plus a corner switcher (top bar + floating bottom-right) to swap anytime. State persists in `localStorage`.
- **Schedule calendar** — interactive month navigation, tour departures on real dates, sold-out and "today" states; click a departure → tour detail.
- **Tour detail + booking request** — sticky price panel and a booking-request modal with validation and a success state.
- **Contact / Flight / Insurance forms** — validated, with a simulated submit + success confirmation.
- **Gallery** — album grid with a lightbox; **Feedback** testimonial wall.

## Project structure

```
src/
  components/   layout (Header, Footer), Calendar, BookingModal, forms, TourCard, ui primitives
  pages/        Home, About, Packages, TourDetail, Schedule, Seasonal, Flights, Insurance,
                Contact, Gallery, Feedback, Information, Policy, NotFound
  data/         tours, schedule, testimonials, galleries (mock content) + image placeholders
  i18n/         LanguageContext + EN/RU dictionary
  site.ts       company contact details + nav
research/       NOTES.md — full page-by-page audit of the original site + screenshots
```

## Before launch (handoff notes)

1. **Images** are the client's own photos pulled from the original torontotrip.com site, served from [`public/original/`](public/original) and mapped in [`src/data/media.ts`](src/data/media.ts) (hero/Niagara slides, Toronto skyline, Irina's photo, the category covers, gallery albums, flights/insurance). Generated SVG gradients (`src/data/placeholder.ts`) remain only as a fallback when no real photo is mapped. Swap in higher-resolution originals or fresh shoots when available; gallery album interiors currently cycle the real photo pool.
2. **Forms** are disconnected. Wire them to a free email-relay form service (delivering to `tours@iitour.ca`) or a small backend.
3. **Russian content** covers all UI chrome and key headings; long-form tour itineraries are currently English-only — translate as needed.
4. **Deep-link refresh**: as a single-page app, configure the host to rewrite unknown routes to `index.html` (Netlify `_redirects`, Vercel rewrites, etc.).
5. Content (tours, prices, dates, testimonials) is representative mock data modelled on the original — confirm and replace with the client's live details.
