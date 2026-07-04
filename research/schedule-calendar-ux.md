# Schedule Calendar UX Research

**Why clients find the old schedule easier — and the best schedule design for IIT's audience**

Prepared 2026-07-04 for the Monday review with the office team.
Audience: Russian- and English-speaking tour clients, ages ~35 to 60+, many booking by phone.
Method: 5 parallel research streams — reconstruction of the original torontotrip.com schedule, evidence-based UX for older adults (NN/g, WCAG, academic), calendar-vs-list evidence (Baymard, NN/g, GOV.UK/USWDS), Russian-language schedule conventions, and an expert heuristic audit of the current code with measured WCAG contrast ratios.

---

## 1. Verdict in one paragraph

The clients are right, and the reasons are measurable — this is not just "people dislike change." The old page shows every departure as a **full-length, wrapping, blue underlined link in black-on-white** (contrast 9.4:1–21:1) — maximum legibility and the strongest "this is clickable" signal the 50+ web generation knows. The new calendar shrinks each departure to an **11px, one-line, ellipsis-truncated chip in teal-on-pale-teal, which measures 2.65:1 contrast — far below the WCAG minimum of 4.5:1** — and sold-out entries are gray-on-gray at 2.31:1 with strikethrough. For eyes over 50 (presbyopia + contrast-sensitivity decline), the core task — *recognizing your tour by name* — became objectively harder. On top of that, the calendar currently **opens on the wrong month with a false "today" marker** (two hardcoded demo values), and the Russian calendar starts the week on **Sunday**, which reads as foreign to Russian speakers (Russian calendars are universally Monday-first). The fix is not going back to the old design — it's keeping the modern look while restoring what the old page did right: **big, high-contrast, full tour names that look like links**, and adopting the industry-standard **chronological list of departures** as the primary view.

## 2. What the old page actually is (reconstructed)

From the prior first-hand audit plus search-index reconstruction (the live site blocks robots; findings below were confirmed via indexed page snippets):

- Hand-built PHP site (no CMS). `/schedule` is a **server-rendered monthly calendar** navigated by plain `?m=<month>&y=<year>` links — every month is a full page load; navigation is unbounded (crawlers walked it back to 1951).
- Instruction text confirmed verbatim: *"Select the tour from the schedule below."* / *"Other dates for 1 day tours available by request."*
- The calendar simply **prints the full tour name as a plain text link** inside the day cell. Nothing is truncated, color-coded, or hover-dependent.
- **"Sold out" is literally typed into the tour name by the admin** (e.g. indexed title *"New Year's Eve in Laurentian Mountains. Sold out."*) — status is words, not color.
- Russian version at `/ru/schedule` («Расписание туров на 2026 год») with fully translated tour names; the "by request" line reads «Однодневные туры возможны на любые даты по запросу».
- Weaknesses worth remembering on Monday: not responsive (desktop table on phones), "Sold out" stays English on Russian pages, dates hand-entered in inconsistent formats, no prices/duration on the calendar either.

**The old page's real virtue is information design, not the calendar per se: every departure is a big, readable, obviously-clickable full tour name with status written in words.**

## 3. Why the new calendar is harder — ranked causes (from the code audit)

Contrast ratios computed from the real tokens in `src/index.css` and classes in `src/components/Calendar.tsx`.

| # | Cause | Detail | Fix |
|---|-------|--------|-----|
| 1 | **Tour names truncated to one 11px line** | `text-[11px]` + `truncate` (Calendar.tsx:102): at ~165px cell width only ~2 words survive. "Ottawa–Quebec City–Montreal (3 days)" and virtually every Russian name get cut off — Russian names are longer, so Russian speakers are hit hardest. Recovery is a hover tooltip: delayed, and nonexistent on touch. 11px is ~half the NN/g minimum for older audiences (12pt+). | Remove `truncate`, let names wrap 2–3 lines, ≥14px (ideally 16px). |
| 2 | **Contrast failures across the calendar** | Teal chip text on 10%-teal: **2.65:1**. Sold-out gray-400 on gray-100: **2.31:1**. Muted day numbers/headers: 3.5–3.7:1 at 12px. WCAG AA requires 4.5:1; these fail even the 3:1 large-text bar. Contrast sensitivity declines measurably from the 40s–50s. Old page: 9.4–21:1. | Navy `#114581` (9.6:1 on white) or near-black for tour names; every calendar text ≥4.5:1. |
| 3 | **Lost link affordance** | Blue underlined links are the single most recognized "click me" signal for users who learned the web in the 2000s (NN/g). Pastel rounded chips with no underline, revealed as interactive only by a hover inversion (older users rarely hover-explore; tablets have no hover), leave low-confidence users unsure the calendar is clickable at all. | Underlined tour-name links in navy/blue, or obvious bordered buttons; affordance visible at rest. |
| 4 | **Wrong month + false "today" (bugs)** | `TODAY = '2026-06-26'` and initial month hardcoded to June (Calendar.tsx:13,19–20). Today is July: page opens on a past month with a coral "today" ring on the wrong date. Nothing says "this site is confusing" faster. | Derive both from `new Date()`. One-line fix — do first. |
| 5 | **Sunday-first week in Russian** | `DOW_RU` starts «Вс». Russian calendars are Monday-first by national standard (GOST ISO 8601-2001); Sunday-first shifts every date one column, so users pattern-matching by position misread departure weekdays. | Monday-first when `lang === 'ru'` (keep Sunday-first for EN — Canadian convention). |
| 6 | **Status by color code + legend, not words** | Sold-out = gray tint + strikethrough; a CSS bug even strikes through the words "Sold out"/"Мест нет" themselves (`no-underline` can't cancel parent `line-through`). The legend swatch (`teal/30`) doesn't match the actual chips (`teal/10`). Older users don't decode legends; the old site just wrote "Sold out." | Words on the chip itself («Мест нет» / "Sold out", not struck through, ≥4.5:1); make the legend redundant. |
| 7 | **Weak information scent** | No duration or price on the calendar; truncation even amputates the "(3 days)" the old names carried. Users can't tell a day trip from a 3-week Europe tour without clicking — and hesitant users treat every click as risk, so they phone, confused. | Duration tag on every entry ("3 days"/«3 дня»), optionally "from $X". |
| 8 | **Mobile agenda details** | The mobile list is the *right* pattern, but: teal "Available" label is 2.94:1 at 12px; month-nav buttons lose their text labels on phones (chevron-only, ~30px targets vs the 44px guideline); "→" is ambiguous. | Darker status colors, keep month names on nav buttons at all widths, ≥44px targets. |
| 9 | **No phone path at the calendar** | This phone-first clientele gets no phone CTA near the schedule. | "Prefer to book by phone? 416-736-0937" strip with a tel: link under the schedule. |

## 4. The evidence base (what the research says)

### Older adults (50–75) — quantified guidelines
- **Text**: ≥12pt minimum for senior audiences (NN/g); 16px de facto accessible body floor; academic reviews find older adults prefer ≥14pt on mobile. Web-use ability declines ~0.8%/year from age 25–60 — this applies to the *whole* 35–60+ range, not just seniors.
- **Contrast**: WCAG AA 4.5:1 normal text / 3:1 large. Low-contrast pastel text is NN/g's most-cited modern anti-pattern: *"illegible, undiscoverable, inaccessible"* — and users **trust** hard-to-read text less. Lens yellowing after ~50 specifically degrades pastel blues/teals.
- **Targets**: 24px legal floor (WCAG 2.2), 44–48px best practice; error rates ~3× higher below 44px; older-adult studies recommend ~17.5mm buttons.
- **Behavior**: seniors are methodical (95% vs 35% of younger users), hesitant to click, blame *themselves* for design failures, and abandon rather than explore. Hover-dependent UI and icon-only controls fail this group. Truncated text is "downright harmful" (Baymard) — users mistake the truncated view for the whole.
- **Familiarity beats novelty** (Jakob's Law; NN/g "users hate change"): layouts that match what users already know reduce cognitive load; for this audience the old page's plain-links-on-white *is* the familiar pattern. NN/g estimates fixing senior UX yields ~35% more business from that segment.

### Calendar grid vs chronological list
- Near-unanimous practitioner guidance: **month grids earn their space only when events are dense**; with IIT's ~5–10 departures/month, a 30–42-cell grid is mostly empty noise that hides information behind clicks/hovers, truncates names, and shrinks touch targets.
- Baymard (1,700 hrs of tours/experiences testing): the calendar date picker *"often fails to meet users' needs… an unnecessary block"* — unless every marked date clearly communicates availability and links onward.
- The two user intents split cleanly: *"What tours are there in July?"* → **list grouped by month** wins. *"Is there a tour on my free weekend?"* → grid's only real strength — served just as well by printing the **weekday on every list row** and/or a weekend filter.
- Endorsed hybrid: **month-grouped agenda list as the default, month tabs/chips to jump, grid (if kept) as a secondary toggle.** This is how NN/g presents its own course schedule; GOV.UK presents official date schedules as lists/tables, never grids; agenda view is the accessibility-recommended mode.
- The new site's **mobile view already does this correctly** — the research says: make that the primary pattern everywhere.

### Russian-language conventions (for a native-feeling «Расписание туров»)
- **Week starts Monday** (GOST ISO 8601-2001) — non-negotiable for the RU grid.
- **Dates**: numeric = DD.MM.YYYY; with month names, genitive lowercase — «26 июня», never «Июнь 26» (the #1 machine-translation tell). Ranges with en dash: «26–28 июня». Show the weekday with each date («сб, 26 июня») — Russian UX canon says it aids orientation.
- **Vocabulary used by real operators**: page title «Расписание туров» or «Календарь туров»; availability «Есть места» / «Осталось 3 места» / «Мест нет» (idiomatic; better than «Продано»); «наличие мест» not «доступность»; bus register is «выезд» / «отправление из Торонто» / «посадка» (pickup) — not hotel/air words («заезд», «вылет»). CTA: «Заказать тур» / «Отправить заявку» (truthful for a request-based flow, avoids the documented «Забронировать»=instant-payment confusion).
- **Russian + diaspora operators overwhelmingly use date lists/tables, not interactive calendars**: tourtrans.ru (guaranteed dates with green checkmarks + «Осталось N мест»), bel-orientir.ru («График автобусных туров… с ценами и наличием мест»), and NYC Russian agencies (newtours.us, mptravel.us) list departures **grouped by month** with $-before-number prices — the closest competitors to IIT all use the list pattern.
- Old site's gap to close: «Sold out» stayed English on Russian pages — always localize status words.

## 5. Recommendation

### Option A — quick repair of the current calendar (1–2 days of work)
Keep the month grid, fix what breaks comprehension:
1. Fix the two bugs: real `new Date()` for today + initial month.
2. Un-truncate tour names; wrap up to 3 lines at ≥14px.
3. Navy/near-black text on white chips with underline; ≥4.5:1 everywhere; sold-out in plain words, no strikethrough.
4. Monday-first week in Russian.
5. Duration tag on chips; phone strip under the calendar.

### Option B — recommended: list-first schedule (the evidence-backed design)
Make the **month-grouped chronological list the primary view on all screen sizes** (the mobile agenda already built, promoted and enriched), with:
- Month chips/tabs across the top («Июль 2026», August 2026 …) instead of one-month-at-a-time paging.
- Each row: **weekday + date** («сб, 26 июня» / "Sat, Jun 26"), **full tour name** as a large underlined navy link (16px+), **duration** («3 дня»), optional "from $X", and **availability in words** («Есть места» / «Мест нет»).
- Rows are full-width tap targets ≥44px; today's row highlighted.
- Keep the month grid as an optional secondary toggle on desktop ("Calendar view") for the "free weekend" browsers — with Option A's fixes applied.
- Phone CTA strip: "Prefer to book by phone? 416-736-0937 · Говорим по-русски".

Option B matches how the clients' own reference points work (Russian bus operators, NYC diaspora agencies, mainstream coach-tour "dates & prices" pages), satisfies every older-adult guideline above, and keeps the modern brand look — while restoring the one thing the old page did best: **you can read every tour name.**

### Keep from the new design (don't regress)
Mobile agenda pattern · full EN/RU localization · prev/next buttons labeled with month names · today highlight (once computed) · sold-out entries staying visible · clean grid styling · one-click path to the tour detail page · the departures data model.

## 6. Sources (primary)

Old-site reconstruction: indexed pages of torontotrip.com (`/schedule`, `/schedule?m=…&y=…`, `/ru/schedule`, `/tours-World-Tours`, `/tour-new-year-laurentian-tour`, …), data.danetsoft.com/torontotrip.com.
Older adults: nngroup.com/articles/usability-for-senior-citizens · nngroup.com/articles/low-contrast · nngroup.com/articles/middle-aged-web-users · nngroup.com/reports/senior-citizens-on-the-web · w3.org/WAI/older-users/developing · w3.org/WAI/WCAG21/Understanding/contrast-minimum · w3.org/WAI/WCAG22/Understanding/target-size-minimum · NIA/NLM senior-friendly checklist · Frontiers in Psychology 2022 (mobile font sizes) · baymard.com/blog/truncation-design.
Calendar vs list: baymard.com/blog/tours-and-experiences-launch · baymard.com/ecommerce-design-examples/date-picker · nngroup.com/articles/date-input · designsystem.digital.gov/components/date-picker · design-system.service.gov.uk/patterns/dates · ui-patterns.com/patterns/EventCalendar · theeventscalendar.com (view-choice guidance) · smashingmagazine.com/2017/07/designing-perfect-date-time-picker · web-accessibility.carnegiemuseums.org/code/calendars.
Russian conventions: GOST ISO 8601-2001 (docs.cntd.ru/document/1200029038) · GOST R 7.0.97-2016 · cldr.unicode.org (genitive month names) · gramota.ru (case, capitalization, ranges) · bureau.ru/soviet · tourtrans.ru · bel-orientir.ru/tours/table-bus · newtours.us · mptravel.us/fromnewyork · netology.ru (Google Hotels «Забронировать» case).
Heuristic audit: contrast ratios computed from `src/index.css` tokens and `src/components/Calendar.tsx` classes via the WCAG relative-luminance formula; nngroup.com/articles/ten-usability-heuristics · nngroup.com/articles/guidelines-for-visualizing-links.

*Method note: several primary pages (nngroup.com, baymard.com, w3.org, gov.uk) block automated fetching; their content was extracted via search-index snippets quoting those pages and should be spot-checked in a browser before quoting verbatim in client-facing material.*
