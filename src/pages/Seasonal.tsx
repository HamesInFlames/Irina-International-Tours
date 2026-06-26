import { useLang } from '../i18n/LanguageContext'
import { TOURS } from '../data/tours'
import { BANNER } from '../data/media'
import { PageHero, Section, Reveal, SectionHeading } from '../components/ui'
import { TourCard } from '../components/TourCard'

export function Seasonal() {
  const { t, lang } = useLang()
  const seasonal = TOURS.filter((tr) => tr.category === 'seasonal')
  return (
    <>
      <PageHero seed="seasonal-hero" image={BANNER} eyebrow={t('nav.seasonal')} title={lang === 'ru' ? 'Сезонные туры' : 'Seasonal tours'} sub={lang === 'ru' ? 'Рождество, Новый год и осенние краски Канады.' : 'Christmas, New Year and Canada’s autumn colours.'} />
      <Section tone="paper">
        <Reveal><SectionHeading eyebrow={lang === 'ru' ? 'Особое время года' : 'Time of year'} title={lang === 'ru' ? 'Праздничные и сезонные путешествия' : 'Holiday & seasonal getaways'} center /></Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {seasonal.map((tour, i) => <Reveal key={tour.id} delay={i * 0.06}><TourCard tour={tour} /></Reveal>)}
        </div>
      </Section>
    </>
  )
}
