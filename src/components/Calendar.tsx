import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { DEPARTURES } from '../data/schedule'
import { loc, tourById } from '../data/tours'
import { SITE } from '../site'

const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const MONTHS_RU = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
// Indexed by JS getDay() (0 = Sunday). Russian grids start Monday — see weekStart.
const DOW_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const DOW_RU = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']

const iso = (y: number, m: number, d: number) =>
  `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`

/** "1 day" / "3 days" with Russian plural rules («1 день», «3 дня», «8 дней»). */
function daysLabel(n: number, lang: string) {
  if (lang !== 'ru') return n === 1 ? '1 day' : `${n} days`
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return `${n} день`
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} дня`
  return `${n} дней`
}

export function Calendar() {
  const { t, lang } = useLang()
  const now = new Date()
  const todayIso = iso(now.getFullYear(), now.getMonth(), now.getDate())
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth())
  const [view, setView] = useState<'list' | 'grid'>('list')

  const months = lang === 'ru' ? MONTHS_RU : MONTHS_EN
  const dow = lang === 'ru' ? DOW_RU : DOW_EN
  // Russian calendars start the week on Monday (GOST ISO 8601); Canadian English on Sunday.
  const weekStart = lang === 'ru' ? 1 : 0

  const go = (delta: number) => {
    let m = month + delta
    let y = year
    if (m < 0) { m = 11; y-- }
    if (m > 11) { m = 0; y++ }
    setMonth(m); setYear(y)
  }

  // Months that actually have departures → the jump chips.
  const monthsWithTours = [...new Set(DEPARTURES.map((d) => d.date.slice(0, 7)))].sort()

  const monthPrefix = `${year}-${String(month + 1).padStart(2, '0')}`
  const monthDeps = DEPARTURES
    .filter((d) => d.date.startsWith(monthPrefix))
    .sort((a, b) => a.date.localeCompare(b.date))

  const firstDay = (new Date(year, month, 1).getDay() - weekStart + 7) % 7
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)

  const status = (soldOut?: boolean) =>
    soldOut
      ? <span className="font-bold text-coral-dark">{t('common.soldOut')}</span>
      : <span className="font-bold text-green-700">{t('common.available')}</span>

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-line">
      {/* Month nav — month names stay visible at every screen size */}
      <div className="flex items-center justify-between gap-2 bg-navy px-3 py-3 text-white sm:px-6 sm:py-4">
        <button onClick={() => go(-1)} className="flex min-h-11 items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold transition hover:bg-white/15">
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          {months[(month + 11) % 12]}
        </button>
        <h3 className="text-center font-display text-lg font-bold text-white sm:text-2xl">{months[month]} {year}</h3>
        <button onClick={() => go(1)} className="flex min-h-11 items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold transition hover:bg-white/15">
          {months[(month + 1) % 12]}
          <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>

      {/* Jump-to-month chips + view toggle */}
      <div className="flex items-center gap-3 border-b border-line bg-paper/60 px-3 py-3 sm:px-6">
        <div aria-label={t('schedule.jumpTo')} className="flex min-w-0 flex-1 gap-2 overflow-x-auto pb-0.5 sm:flex-wrap sm:overflow-visible">
          {monthsWithTours.map((ym) => {
            const y = parseInt(ym.slice(0, 4), 10)
            const m = parseInt(ym.slice(5), 10) - 1
            const on = y === year && m === month
            return (
              <button
                key={ym}
                onClick={() => { setYear(y); setMonth(m) }}
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
        {/* Grid exists only on ≥sm screens; phones always get the list */}
        <div className="hidden shrink-0 overflow-hidden rounded-full ring-1 ring-line sm:flex" role="group" aria-label={`${t('schedule.viewList')} / ${t('schedule.viewGrid')}`}>
          <button
            onClick={() => setView('list')}
            aria-pressed={view === 'list'}
            className={`min-h-11 px-4 text-sm font-semibold transition ${view === 'list' ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-navy/5'}`}
          >
            {t('schedule.viewList')}
          </button>
          <button
            onClick={() => setView('grid')}
            aria-pressed={view === 'grid'}
            className={`min-h-11 px-4 text-sm font-semibold transition ${view === 'grid' ? 'bg-navy text-white' : 'bg-white text-navy hover:bg-navy/5'}`}
          >
            {t('schedule.viewGrid')}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${year}-${month}-${view}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Primary view: month-grouped departure list (all screen sizes) */}
          <div className={view === 'list' ? 'block' : 'sm:hidden'}>
            {monthDeps.length === 0 ? (
              <p className="px-4 py-10 text-center text-base text-body">{t('schedule.noDepartures')}</p>
            ) : (
              <ul className="divide-y divide-line">
                {monthDeps.map((dep, j) => {
                  const tour = tourById(dep.tourId)
                  if (!tour) return null
                  const day = parseInt(dep.date.slice(8), 10)
                  const wd = dow[new Date(year, month, day).getDay()]
                  const isToday = dep.date === todayIso
                  return (
                    <li key={j}>
                      <Link
                        to={`/tour/${tour.id}`}
                        className={`flex min-h-16 items-center gap-4 px-4 py-3.5 transition hover:bg-paper active:bg-paper sm:px-6 ${isToday ? 'bg-amber-50' : ''}`}
                      >
                        <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-xl ${isToday ? 'bg-coral text-white' : 'bg-navy/5 text-navy'}`}>
                          <span className="text-xl font-bold leading-none">{day}</span>
                          <span className="mt-0.5 text-[11px] font-semibold uppercase opacity-80">{wd}</span>
                        </span>
                        <span className="min-w-0 flex-1">
                          {isToday && (
                            <span className="mb-0.5 inline-block rounded bg-coral px-1.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white">
                              {t('schedule.today')}
                            </span>
                          )}
                          <span className="block text-base font-bold leading-snug text-navy underline decoration-navy/40 underline-offset-2 sm:text-lg">
                            {loc(tour, lang).name}
                          </span>
                          <span className="mt-0.5 block text-sm text-body">
                            {daysLabel(tour.days, lang)} · {t('common.from')} ${tour.priceDouble.toLocaleString('en-CA')} · {status(dep.soldOut)}
                          </span>
                        </span>
                        <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-navy/50" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 6l6 6-6 6" /></svg>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>

          {/* Secondary view: month grid (desktop toggle only) */}
          <div className={view === 'grid' ? 'hidden sm:block' : 'hidden'}>
            <div className="grid grid-cols-7 border-b border-line bg-paper text-center text-sm font-bold text-body">
              {Array.from({ length: 7 }, (_, i) => dow[(i + weekStart) % 7]).map((d) => (
                <div key={d} className="py-2">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {cells.map((day, i) => {
                if (day === null) return <div key={i} className="min-h-28 border-b border-r border-line bg-paper/40" />
                const date = iso(year, month, day)
                const deps = DEPARTURES.filter((d) => d.date === date)
                const isToday = date === todayIso
                return (
                  <div key={i} className={`min-h-28 border-b border-r border-line p-1.5 align-top ${isToday ? 'bg-amber-50' : 'bg-white'}`}>
                    <div className={`mb-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-sm font-bold ${isToday ? 'bg-coral text-white' : 'text-body'}`}>
                      {day}
                    </div>
                    <div className="space-y-1">
                      {deps.map((dep, j) => {
                        const tour = tourById(dep.tourId)
                        if (!tour) return null
                        return (
                          <Link
                            key={j}
                            to={`/tour/${tour.id}`}
                            className={`block rounded px-1.5 py-1 text-[13px] font-semibold leading-snug transition ${
                              dep.soldOut
                                ? 'bg-gray-50 text-body'
                                : 'text-navy underline decoration-navy/40 underline-offset-2 hover:bg-navy hover:text-white'
                            }`}
                          >
                            {loc(tour, lang).name}
                            {dep.soldOut && <span className="font-bold text-coral-dark"> · {t('common.soldOut')}</span>}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Phone strip — this clientele finishes bookings by phone */}
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 border-t border-line bg-paper/60 px-4 py-4 text-center text-[15px] text-body">
        <span>{t('schedule.phonePrompt')}</span>
        <a href={SITE.phoneHref} className="font-bold text-navy underline decoration-navy/40 underline-offset-2">{SITE.phone}</a>
        {lang !== 'ru' && <span className="text-muted">· Говорим по-русски</span>}
      </div>
    </div>
  )
}
