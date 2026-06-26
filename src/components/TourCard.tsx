import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { img, loc, type Tour } from '../data/tours'
import { tourPhoto } from '../data/media'

export function TourCard({ tour }: { tour: Tour }) {
  const { t, lang } = useLang()
  const tt = loc(tour, lang)
  return (
    <Link
      to={`/tour/${tour.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-lift"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={tourPhoto(tour.id, tour.category) ?? img(tour.id)}
          alt={tt.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold uppercase tracking-wide text-navy">
          {tt.region}
        </span>
        <span className="absolute bottom-3 right-3 rounded-full bg-coral px-3 py-1 text-xs font-bold text-white">
          {tour.days} {t('common.days')}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-navy transition group-hover:text-teal">{tt.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{tt.summary}</p>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
          <span className="text-sm text-muted">
            {t('common.from')}{' '}
            <span className="text-lg font-bold text-navy">${tour.priceDouble.toLocaleString()}</span>{' '}
            <span className="text-xs">CAD</span>
          </span>
          <span className="text-sm font-bold text-teal transition group-hover:translate-x-0.5">
            {t('cta.viewTour')} →
          </span>
        </div>
      </div>
    </Link>
  )
}
