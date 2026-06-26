import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { DEPARTURES } from '../data/schedule'
import { tourById } from '../data/tours'

const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const MONTHS_RU = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
const DOW_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const DOW_RU = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']

const TODAY = '2026-06-26' // demo "today"
const iso = (y: number, m: number, d: number) =>
  `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`

export function Calendar() {
  const { t, lang } = useLang()
  const [year, setYear] = useState(2026)
  const [month, setMonth] = useState(5) // June (0-indexed)

  const months = lang === 'ru' ? MONTHS_RU : MONTHS_EN
  const dow = lang === 'ru' ? DOW_RU : DOW_EN

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const go = (delta: number) => {
    let m = month + delta
    let y = year
    if (m < 0) { m = 11; y-- }
    if (m > 11) { m = 0; y++ }
    setMonth(m); setYear(y)
  }

  // build grid cells (leading blanks + days)
  const cells: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)
  while (cells.length % 7 !== 0) cells.push(null)

  // Departures in the visible month, ordered — used for the mobile agenda list.
  const monthPrefix = `${year}-${String(month + 1).padStart(2, '0')}`
  const monthDeps = DEPARTURES
    .filter((d) => d.date.startsWith(monthPrefix))
    .sort((a, b) => a.date.localeCompare(b.date))

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-line">
      {/* Month nav */}
      <div className="flex items-center justify-between bg-navy px-4 py-4 text-white sm:px-6">
        <button onClick={() => go(-1)} className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold transition hover:bg-white/15">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          <span className="hidden sm:inline">{months[(month + 11) % 12]}</span>
        </button>
        <h3 className="font-display text-xl font-bold sm:text-2xl">{months[month]} {year}</h3>
        <button onClick={() => go(1)} className="flex items-center gap-1 rounded-full px-3 py-1.5 text-sm font-semibold transition hover:bg-white/15">
          <span className="hidden sm:inline">{months[(month + 1) % 12]}</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>

      {/* Desktop grid (hidden on phones) */}
      <div className="hidden sm:block">
      {/* Day-of-week header */}
      <div className="grid grid-cols-7 border-b border-line bg-paper text-center text-xs font-bold uppercase tracking-wide text-muted">
        {dow.map((d) => <div key={d} className="py-2">{d}</div>)}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${year}-${month}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-7"
        >
          {cells.map((day, i) => {
            if (day === null) return <div key={i} className="min-h-24 border-b border-r border-line bg-paper/40" />
            const date = iso(year, month, day)
            const deps = DEPARTURES.filter((d) => d.date === date)
            const isToday = date === TODAY
            return (
              <div
                key={i}
                className={`min-h-24 border-b border-r border-line p-1.5 align-top ${isToday ? 'bg-amber-50' : 'bg-white'}`}
              >
                <div className={`mb-1 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${isToday ? 'bg-coral text-white' : 'text-muted'}`}>
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
                        title={tour.name}
                        className={`block truncate rounded px-1.5 py-1 text-[11px] font-semibold leading-tight transition ${
                          dep.soldOut
                            ? 'bg-gray-100 text-gray-400 line-through'
                            : 'bg-teal/10 text-teal hover:bg-teal hover:text-white'
                        }`}
                      >
                        {tour.name}
                        {dep.soldOut && <span className="ml-1 no-underline">· {t('common.soldOut')}</span>}
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </motion.div>
      </AnimatePresence>
      </div>

      {/* Mobile agenda list (phones) */}
      <div className="sm:hidden">
        {monthDeps.length === 0 ? (
          <p className="px-4 py-8 text-center text-sm text-muted">
            {lang === 'ru' ? 'В этом месяце отправлений нет — другие даты по запросу.' : 'No departures this month — other dates available by request.'}
          </p>
        ) : (
          <ul className="divide-y divide-line">
            {monthDeps.map((dep, j) => {
              const tour = tourById(dep.tourId)
              if (!tour) return null
              const day = parseInt(dep.date.slice(8), 10)
              const wd = dow[new Date(year, month, day).getDay()]
              const isToday = dep.date === TODAY
              return (
                <li key={j}>
                  <Link to={`/tour/${tour.id}`} className="flex items-center gap-3 px-4 py-3 transition active:bg-paper">
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg ${isToday ? 'bg-coral text-white' : 'bg-navy/5 text-navy'}`}>
                      <span className="text-base font-bold leading-none">{day}</span>
                      <span className="mt-0.5 text-[10px] font-semibold uppercase opacity-70">{wd}</span>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className={`block text-sm font-semibold text-navy ${dep.soldOut ? 'line-through opacity-60' : ''}`}>{tour.name}</span>
                      <span className={`text-xs font-medium ${dep.soldOut ? 'text-coral' : 'text-teal'}`}>
                        {dep.soldOut ? t('common.soldOut') : t('common.available')}
                      </span>
                    </span>
                    <span className="shrink-0 text-teal">→</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      {/* Legend (desktop grid only) */}
      <div className="hidden flex-wrap items-center gap-4 px-4 py-3 text-xs text-muted sm:flex sm:px-6">
        <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-teal/30" /> {t('schedule.legendTour')}</span>
        <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-gray-200" /> {t('schedule.legendSold')}</span>
        <span className="flex items-center gap-1.5"><span className="h-3 w-3 rounded-full bg-coral" /> {t('schedule.today')}</span>
      </div>
    </div>
  )
}
