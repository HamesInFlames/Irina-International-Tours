import { Link, useParams } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { CATEGORIES, TOURS, img, toursByCategory, type Category } from '../data/tours'
import { categoryPhoto, BANNER } from '../data/media'
import { PageHero, Section, Reveal, SectionHeading } from '../components/ui'
import { TourCard } from '../components/TourCard'

export function Packages() {
  const { t, lang } = useLang()
  const { category } = useParams<{ category: string }>()
  const active = CATEGORIES.find((c) => c.id === category)

  // Category landing — list of tours
  if (active) {
    const tours = toursByCategory(active.id as Category)
    return (
      <>
        <PageHero seed={`cat-${active.id}`} image={categoryPhoto(active.id)} eyebrow={t('nav.packages')} title={active.label} sub={active.blurb} />
        <Section tone="paper">
          <Link to="/packages" className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-teal-dark">
            ← {t('common.backToPackages')}
          </Link>
          {tours.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {tours.map((tour, i) => <Reveal key={tour.id} delay={i * 0.06}><TourCard tour={tour} /></Reveal>)}
            </div>
          ) : (
            <p className="text-body">{lang === 'ru' ? 'Туры скоро появятся — позвоните нам для подбора.' : 'Tours coming soon — call us and we’ll tailor one for you.'}</p>
          )}
        </Section>
      </>
    )
  }

  // Packages index — category tiles
  return (
    <>
      <PageHero seed="packages-hero" image={BANNER} eyebrow={t('nav.packages')} title={lang === 'ru' ? 'Туры и направления' : 'Tours & destinations'} sub={lang === 'ru' ? 'Выберите категорию, чтобы посмотреть туры.' : 'Choose a category to explore the tours.'} />
      <Section tone="paper">
        <Reveal><SectionHeading eyebrow={lang === 'ru' ? 'Куда отправимся?' : 'Where to next?'} title={lang === 'ru' ? 'Категории туров' : 'Browse by category'} center /></Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.06}>
              <Link to={`/packages/${c.id}`} className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={categoryPhoto(c.id) ?? img(`cat-${c.id}`, 700, 520)} alt={c.label} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy">
                    {toursByCategory(c.id).length} {lang === 'ru' ? 'туров' : 'tours'}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl font-bold text-navy transition group-hover:text-teal">{c.label}</h3>
                  <p className="mt-1 flex-1 text-sm leading-relaxed text-body">{c.blurb}</p>
                  <span className="mt-4 inline-block text-sm font-bold text-teal transition group-hover:translate-x-1">
                    {lang === 'ru' ? 'Смотреть туры' : 'View tours'} →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="white">
        <Reveal><SectionHeading title={t('common.allTours')} center /></Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOURS.filter((tr) => tr.category !== 'seasonal').map((tour, i) => (
            <Reveal key={tour.id} delay={(i % 6) * 0.05}><TourCard tour={tour} /></Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
