import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { img, loc, tourById } from '../data/tours'
import { tourPhoto, ICON } from '../data/media'
import { BookingModal } from '../components/BookingModal'
import { NotFound } from './NotFound'

export function TourDetail() {
  const { t, lang } = useLang()
  const { id } = useParams<{ id: string }>()
  const tour = id ? tourById(id) : undefined
  const [booking, setBooking] = useState(false)

  if (!tour) return <NotFound />
  const tt = loc(tour, lang)

  const info = [
    { icon: ICON.time, label: t('common.duration'), value: `${tour.days} ${t('common.days')}` },
    { icon: ICON.price, label: t('common.double'), value: `$${tour.priceDouble.toLocaleString()} CAD` },
    ...(tour.priceSingle ? [{ icon: ICON.price, label: t('common.single'), value: `$${tour.priceSingle.toLocaleString()} CAD` }] : []),
  ]

  return (
    <>
      {/* Hero */}
      <div className="relative isolate overflow-hidden">
        <img src={tourPhoto(tour.id, tour.category) ?? img(`${tour.id}-hero`, 1600, 640)} alt={tt.name} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/70 to-navy/30" />
        <div className="shell relative py-20 sm:py-24">
          <Link to="/packages" className="text-sm font-semibold text-teal-100 hover:text-white">← {t('common.allTours')}</Link>
          <span className="mt-4 block text-xs font-bold uppercase tracking-[0.2em] text-teal-100">{tt.region}</span>
          <h1 className="display mt-2 max-w-3xl text-4xl font-bold text-white drop-shadow sm:text-5xl">{tt.name}</h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">{tt.summary}</p>
        </div>
      </div>

      <div className="shell grid gap-10 py-14 lg:grid-cols-[1fr_340px]">
        {/* Main */}
        <div>
          {tour.language && (
            <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm font-medium text-amber-800">
              {lang === 'ru' ? `Обратите внимание: этот тур проводится на ${tour.language === 'Russian' ? 'русском' : tour.language} языке.` : `Please note: this tour is guided in ${tour.language}.`}
            </div>
          )}

          <h2 className="display text-2xl font-bold text-navy">{t('common.itinerary')}</h2>
          <ol className="mt-6 space-y-5">
            {tt.itinerary.map((day, i) => (
              <li key={i} className="relative rounded-2xl bg-white p-5 shadow-card ring-1 ring-line">
                <div className="flex items-start gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-sm font-bold text-white">{i + 1}</span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-navy">{day.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-body">{day.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-teal/5 p-6 ring-1 ring-teal/20">
              <h3 className="font-display text-lg font-bold text-teal-dark">✓ {t('common.included')}</h3>
              <ul className="mt-3 space-y-2 text-sm text-body">
                {tt.included.map((x) => <li key={x} className="flex gap-2"><span className="text-teal">•</span>{x}</li>)}
              </ul>
            </div>
            <div className="rounded-2xl bg-coral/5 p-6 ring-1 ring-coral/20">
              <h3 className="font-display text-lg font-bold text-coral-dark">✕ {t('common.excluded')}</h3>
              <ul className="mt-3 space-y-2 text-sm text-body">
                {tt.excluded.map((x) => <li key={x} className="flex gap-2"><span className="text-coral">•</span>{x}</li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Sticky booking card */}
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-line">
            <div className="bg-navy px-6 py-5 text-white">
              <p className="text-sm text-white/70">{t('common.from')}</p>
              <p className="font-display text-3xl font-bold">${tour.priceDouble.toLocaleString()} <span className="text-base font-normal text-white/70">CAD</span></p>
              <p className="text-xs text-white/60">{t('common.perPerson')} · {t('common.double')}</p>
            </div>
            <dl className="divide-y divide-line px-6 text-sm">
              {info.map((row) => (
                <div key={row.label} className="flex items-center justify-between py-3">
                  <dt className="flex items-center gap-2 text-muted">
                    <img src={row.icon} alt="" className="h-4 w-4 object-contain opacity-70" />
                    {row.label}
                  </dt>
                  <dd className="font-semibold text-navy">{row.value}</dd>
                </div>
              ))}
              <div className="py-3">
                <dt className="flex items-center gap-2 text-muted">
                  <img src={ICON.location} alt="" className="h-4 w-4 object-contain opacity-70" />
                  {t('common.departurePoint')}
                </dt>
                <dd className="mt-1 font-medium text-navy">{tt.departurePoint}</dd>
              </div>
            </dl>
            <div className="p-6 pt-2">
              <button onClick={() => setBooking(true)} className="w-full rounded-full bg-coral px-6 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-coral-dark">
                {t('cta.bookNow')}
              </button>
              <p className="mt-3 text-center text-xs text-muted">{lang === 'ru' ? 'Демо: заявка не отправляется на сервер.' : 'Demo: request is not sent to a server.'}</p>
            </div>
          </div>
        </aside>
      </div>

      <BookingModal tour={tour} open={booking} onClose={() => setBooking(false)} />
    </>
  )
}
