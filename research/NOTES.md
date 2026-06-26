# Irina International Tours (torontotrip.com) — Replication Notes

Research captured 2026-06-26 for Kim Consultant. Source site: https://www.torontotrip.com
Goal: faithful **content + feature** replica with a **modernized design/layout**, preserving the original color scheme. Features (calendar, booking request, contact, insurance/flight enquiries) are replicated as **functional but disconnected** UI (client-side state, mock data, no backend).

---

## Brand / Design Tokens (PRESERVE)

Extracted from computed styles on the live site.

| Role | Color | Hex |
|------|-------|-----|
| Primary navy (brand, header band, headings) | rgb(17,69,129) | `#114581` |
| Teal / cyan accent (sub-nav bar, secondary headings) | rgb(27,164,196) | `#1BA4C4` |
| Coral / red-orange accent (highlights, "Contact Us" band, H1 accents) | rgb(233,81,60) | `#E9513C` |
| Body text gray | rgb(86,86,86) | `#565656` |
| Secondary gray | rgb(88,88,88) | `#585858` |
| Link blue (default) | rgb(0,0,238) | `#0000EE` (modernize → navy/teal) |
| White (panels) | — | `#FFFFFF` |
| Light gray panel | rgb(243,243,243) | `#F3F3F3` |
| Black | — | `#000000` |

**Fonts:** Body = Arial/Helvetica sans-serif. Accents/headings sometimes Times New Roman.
→ Modernize: keep navy/teal/coral palette; upgrade type to a clean modern sans (e.g. Inter/Poppins) for UI with an elegant serif option for display headings. Gray body text stays.

**Logo:** "iiTours" globe mark + "Irina International Tours / Canadian Travel Company" lockup (`/img/iit-logo.jpg`).

**Contact (used site-wide in header/footer):**
- Phone: **416-736-0937**
- Email: **tours@iitour.ca**
- Address: **7851 Dufferin St., Unit #202, Thornhill ON L4J 3M4** (Concord)
- Hours: **Mon–Fri 10:00am–4:00pm**; Sat/Sun/Holidays closed
- TICO Reg. **No. 50007929**; BBB accredited
- Facebook link in top bar
- Bilingual: **English / Русский** (Russian-speaking guides; heavily Russian clientele)

---

## Global Layout

1. **Top bar** (navy): language toggle EN/РУ + Facebook icon.
2. **Header**: logo left, horizontal nav: ABOUT US · PACKAGES · SCHEDULE · SEASONAL · FLIGHTS · INSURANCE · CONTACT. Active item highlighted navy.
3. **Page hero**: full-width photo banner (Niagara Falls on home, Toronto skyline on schedule, etc.) with overlay text.
4. **Content**.
5. **Teal sub-nav band**: Photo Galleries | Tourists' Feedback | Useful Information.
6. **Coral "Contact Us" footer band**: address, phone, email, hours, TICO/BBB.
7. **Footer**: copyright, Privacy Policy, Terms & Conditions.

---

## Pages

### Home ( / )
- On load: **language-select modal** (EN / RU) — "Please select your language / Пожалуйста выберите язык".
- Hero: Niagara Falls photo, "Travel With Us", "Call Us Today 416-736-0937".
- Navy band: **"Welcome to IITours"** — "Irina International Tours is proud to celebrate more than 20 successful years in the travel industry. We are a Toronto, Canada based Tour Company, specializing in local and international motorcoach tours… 'The best quality products with excellent value'."
- **"Our Highlight Tours"** (coral H1).
- **"Introducing Irina International Tours"** (coral banner) — long intro about genuine bus tours of Canada/USA/Europe, off-the-tourist-track experiences, moderate-fine hotels, experienced Tour Directors. Photo of **Irina Nagel** (owner).
- TICO + BBB trust badges.
- Links to Galleries / Feedback / Information.

### About Us ( /about )
- Photo of Irina + "Discover Irina International Tours (IIT)".
- "Nearly 35 years of highly rated local and international motorcoach tours"; mission = the journey, not just destination.
- Differentiators: personalized itineraries, hand-picked quality hotels, expert tour directors, coverage of Canada/USA/Europe/Asia. "A Legacy of Excellence: Celebrating more than 30 years."
- Services: daily sightseeing (Toronto, Niagara Falls, 1000 Islands cruises) + fully escorted 3–14 day tours (Eastern/Western Canada & USA); plus airline tickets, cruises, hotels worldwide; group/conference customization.
- TICO No.50007929 + BBB.

### Packages ( /packages )
Six category tiles (image + title) linking to listings:
1. **Italy (groups from Toronto)**
2. **English Tours**
3. **Canada Tours**
4. **Daily Tours**
5. **USA Tours**
6. **Best destinations in the World**
→ Category → tour list → **tour detail page**.

### Schedule ( /schedule )  ★ KEY FEATURE — interactive calendar
- Toronto skyline hero. Heading "**Tour Schedule 2026**", "Select the tour from the schedule below." "Other dates for 1 day tours available by request."
- **Monthly calendar grid** with ‹ Prev / Month / Next › navigation. Tours appear as links inside day cells; "Sold out" shown inline; today's cell highlighted (pale yellow).
- Sample (June 2026): Jun 1 Colorado–Utah–Wyoming (Sold out); Jun 2 Germany's Romantic Road; Jun 5 Turkey; Jun 14 Splendor of Portugal & Madeira; Jun 15 Sardinia–Corsica + Greece & Islands; Jun 20 St. Marie Mission POW WOW; Jun 26 Niagara Falls Tour; Jun 27 Spirit of Ontario; Jun 29 Ottawa–Quebec City–Montreal (3 days).
→ Replicate: clickable month nav, day cells with tour chips, click tour → detail/booking. Disconnected (mock data).

### Tour Detail (e.g. /tour-christmas-in-new-york)  ★ booking template
- Hero image (≈740×330).
- Icon info boxes: dates, duration, price (double/single), departure point.
- **"Christmas in New-York"** — 4 days, departs Dec 25 2025, Toronto↔NYC. Double 920 CAD / Single 1,220 CAD (taxes incl).
- Day-by-day itinerary (Day 1–4).
- Includes: bus, 3 nights hotel, 3 breakfasts, Russian-speaking guide, taxes. Excludes: other meals, personal expenses, gratuities, insurance.
- Note "this tour is in Russian language." Meeting point: 1 Promenade Circle (Bathurst & Centre), T&T Supermarket.
- **Booking button** → booking request.

### Seasonal ( /seasonal )
- Cards: **Christmas and New Year Tours**, **Canadian Fall Colours**. (e.g. New Year's Eve in Laurentian Mountains 2025-12-29; Christmas in New-York 2025-12-25.)

### Flights ( /flights )
- Announcement page: "brand new service — Airlines (Flights) booking!" Full start-to-finish service. CTA: tell us where/when → call 416-736-0937. **No form on original** → modernize with a **flight enquiry form** (disconnected).

### Insurance ( /insurance )
- Announcement page: "Travel Insurance!" full service. CTA call 416-736-0937. → modernize with **insurance enquiry form** (disconnected).

### Contact ( /contact )  ★ form
- Greeting + **contact form**: Name*, E-mail*, Phone*, Comments & Questions, Captcha*.
- Business info block (address/phone/email/hours).

### Gallery ( /gallery )
- Grid of 7 albums: United Arab Emirates, Italy, French Canada, Atlantic Provinces, Niagara Falls, Toronto, British Columbia. → modern lightbox grid.

### Feedback ( /feedback )
- Testimonials list (names link to full reviews). 27 reviewers. Sample (Nataliya Bantsur): "Thank you very much for the nice, well organized trip to New York… Special thank you to Andrew and Inna. Their incredible knowledge and experience made our trip unforgettable." → modern testimonial cards.

### Useful Information ( /information ) — Terms & Conditions
- Sections: Daily Tours, Bus Tours, Overseas Tours, Hotel standards, Discounts.
- Daily tours depart Steeles Ave & Dufferin (near Starbucks); CAD; same-day cancellation non-refundable; cash/debit/credit at office.
- Bus tours: $200/person deposit, 100% non-refundable 45 days prior; depart 1 Promenade Circle (T&T). No refund late/no-show.
- Overseas: $300/person deposit; final 60–90 days prior; insurance strongly recommended; passport valid 6+ months.
- Hotels 3★/4★. Group occupancy discounts $20–$100/person.

### Privacy / Terms — standard policy pages.

---

## Features to replicate (functional, disconnected)
1. **Language toggle EN/РУ** — UI control + load modal (RU content stubbed).
2. **Schedule calendar** — month navigation, tour chips on days, sold-out state, click→detail.
3. **Booking request** — from tour detail; modal/page form (tour, dates, occupancy, pax, name/email/phone) → client-side success state.
4. **Contact form** — Name/Email/Phone/Comments (+ simple captcha-style check) → success state.
5. **Flight & Insurance enquiry forms** — modernized (originals were call-only).
6. **Gallery lightbox**, **Feedback cards**.

All forms validate and show a success confirmation; nothing is sent to a server.
