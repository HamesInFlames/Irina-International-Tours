import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { DEPARTURES, type Departure } from '../data/schedule'
import { loc, tourById, type Tour } from '../data/tours'
import { SITE } from '../site'

const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const MONTHS_RU = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
// Indexed by JS getDay() (0 = Sunday). Russian grids start Monday — see weekStart.
const DOW_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const DOW_RU = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

// Months that have departures ("yyyy-mm"), for the jump chips. Data is static → module scope.
const MONTHS_WITH_TOURS = [...new Set(DEPARTURES.map((d) => d.date.slice(0, 7)))].sort()

const iso = (y: number, m: number, d: number) =>
  `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`

/** First month with departures on/after today, so the page never opens on an
 *  empty month; falls back to the real current month when nothing is upcoming. */
function initialYearMonth(): [number, number] {
  const now = new Date()
  const current = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`
  const next = MONTHS_WITH_TOURS.find((ym) => ym >= current)
  if (!next) return [now.getFullYear(), now.getMonth()]
  return [parseInt(next.slice(0, 4), 10), parseInt(next.slice(5), 10) - 1]
}

function Chevron({ left = false, className = 'h-4 w-4 shrink-0' }: { left?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d={left ? 'M15 18l-6-6 6-6' : 'M9 6l6 6-6 6'} />
    </svg>
  )
}

const NAV_BTN = 'flex min-h-11 items-center gap-1 whitespace-nowrap rounded-full px-2 py-1.5 text-xs font-semibold transition hover:bg-white/15 sm:px-3 sm:text-sm'

export function Calendar() {
  const { t, lang } = useLang()
  const now = new Date()
  const todayIso = iso(now.getFullYear(), now.getMonth(), now.getDate())
  const [[year, month], setYearMonth] = useState<[number, number]>(initialYearMonth)

  const months = lang === 'ru' ? MONTHS_RU : MONTHS_EN
  const dow = lang === 'ru' ? DOW_RU : DOW_EN
  // Russian calendars start the week on Monday (GOST ISO 8601); Canadian English on Sunday.
  const weekStart = lang === 'ru' ? 1 : 0

  const go = (delta: number) => {
    let m = month + delta
    let y = year
    if (m < 0) { m = 11; y-- }
    if (m > 11) { m = 0; y++ }
    setYearMonth([y, m])
  }

  const monthPrefix = `${year}-${String(month + 1).padStart(2, '0')}`
  // Departures this month with their tours resolved up front — a departure whose
  // tourId doesn't resolve is dropped, so a bad-data month still reads as empty.
  const monthDeps = DEPARTURES
    .filter((d) => d.date.startsWith(monthPrefix))
    .map((d) => ({ ...d, tour: tourById(d.tourId) }))
    .filter((d): d is Departure & { tour: Tour } => Boolean(d.tour))
  const empty = monthDeps.length === 0

  const firstDay = (new Date(year, month, 1).getDay() - weekStart + 7) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-line">
      {/* Month nav — month names stay visible at every screen size */}
      <div className="flex items-center justify-between gap-1 bg-navy px-2 py-3 text-white sm:gap-2 sm:px-6 sm:py-4">
        <button onClick={() => go(-1)} className={NAV_BTN}>
          <Chevron left />
          {months[(month + 11) % 12]}
        </button>
        <h3 className="min-w-0 text-center font-display text-base font-bold text-white sm:text-2xl">{months[month]} {year}</h3>
        <button onClick={() => go(1)} className={NAV_BTN}>
          {months[(month + 1) % 12]}
          <Chevron />
        </button>
      </div>

      {/* Jump-to-month chips */}
      <div className="border-b border-line bg-paper/60 px-3 py-3 sm:px-6">
        <div role="group" aria-label={t('schedule.jumpTo')} className="flex gap-2 overflow-x-auto pb-0.5 sm:flex-wrap sm:overflow-visible">
          {MONTHS_WITH_TOURS.map((ym) => {
            const y = parseInt(ym.slice(0, 4), 10)
            const m = parseInt(ym.slice(5), 10) - 1
            const on = y === year && m === month
            return (
              <button
                key={ym}
                onClick={() => setYearMonth([y, m])}
                aria-pressed={on}
                className={`min-h-11 shrink-0 whitespace-nowrap rounded-full px-4 text-[15px] font-semibold transition ${
                  on ? 'bg-navy text-white' : 'bg-white text-navy ring-1 ring-line hover:bg-navy/5'
                }`}
              >
                {months[m]}{y !== now.getFullYear() ? ` ${y}` : ''}
              </button>
            )
          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${year}-${month}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {empty && (
            <p className="border-b border-line px-4 py-4 text-center text-base text-body">{t('schedule.noDepartures')}</p>
          )}
          {/* On phones the month grid scrolls sideways so day cells stay readable */}
          <div className="overflow-x-auto">
            <div className="min-w-[640px]">
              <div className="grid grid-cols-7 border-b border-line bg-paper text-center text-sm font-bold text-body">
                {Array.from({ length: 7 }, (_, i) => dow[(i + weekStart) % 7]).map((d) => (
                  <div key={d} className="py-2">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7">
                {cells.map((day, i) => {
                  if (day === null) return <div key={i} className="min-h-24 border-b border-r border-line bg-paper/40 sm:min-h-28" />
                  const date = iso(year, month, day)
                  const deps = monthDeps.filter((d) => d.date === date)
                  const isToday = date === todayIso
                  return (
                    <div key={i} className={`min-h-24 border-b border-r border-line p-1.5 align-top sm:min-h-28 ${isToday ? 'bg-amber-50' : 'bg-white'}`}>
                      <div className={`mb-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold ${isToday ? 'bg-coral text-white' : 'text-body'}`}>
                        {day}
                      </div>
                      <div className="space-y-1">
                        {deps.map((dep) => (
                          <Link
                            key={`${dep.date}-${dep.tourId}`}
                            to={`/tour/${dep.tour.id}`}
                            className={`block rounded px-1.5 py-1 text-[13px] font-semibold leading-snug transition ${
                              dep.soldOut
                                ? 'bg-gray-50 text-body'
                                : 'text-navy underline decoration-navy/40 underline-offset-2 hover:bg-navy hover:text-white'
                            }`}
                          >
                            {loc(dep.tour, lang).name}
                            {dep.soldOut && <span className="font-bold text-coral-dark"> · {t('common.soldOut')}</span>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Phone strip — this clientele finishes bookings by phone */}
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-line bg-paper/60 px-4 py-4 text-center text-[15px] text-body">
        <span>{t('schedule.phonePrompt')}</span>
        <a href={SITE.phoneHref} className="font-bold text-navy underline decoration-navy/40 underline-offset-2">{SITE.phone}</a>
        {lang !== 'ru' && <span lang="ru" className="text-muted">· Говорим по-русски</span>}
      </div>
    </div>
  )
}
