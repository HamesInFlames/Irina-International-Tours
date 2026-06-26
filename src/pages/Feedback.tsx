import { useLang } from '../i18n/LanguageContext'
import { TESTIMONIALS } from '../data/testimonials'
import { BANNER } from '../data/media'
import { PageHero, Section, Reveal, SectionHeading } from '../components/ui'

function initials(name: string) {
  const words = name.replace(/^From the.*/i, 'Grateful Tourists').split(/\s+/)
  return words.slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-gold" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}
    </div>
  )
}

export function Feedback() {
  const { t, lang } = useLang()
  const featured = TESTIMONIALS.filter((tm) => tm.featured)
  const rest = TESTIMONIALS.filter((tm) => !tm.featured)

  return (
    <>
      <PageHero seed="feedback-hero" image={BANNER} eyebrow={t('nav.feedback')} title={lang === 'ru' ? 'Отзывы туристов' : 'Tourists’ feedback'} sub={lang === 'ru' ? 'Что говорят наши путешественники.' : 'In the words of our travellers.'} />

      <Section tone="white">
        <Reveal>
          <SectionHeading
            eyebrow={lang === 'ru' ? 'Спасибо за доверие' : 'Thank you for travelling with us'}
            title={lang === 'ru' ? 'Истории наших туристов' : 'Stories from our travellers'}
            sub={lang === 'ru' ? `Более ${TESTIMONIALS.length} отзывов от путешественников с 1989 года.` : `${TESTIMONIALS.length}+ heartfelt reviews from travellers since 1989.`}
            center
          />
        </Reveal>

        {/* Featured */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {featured.map((tm, i) => {
            const name = lang === 'ru' && tm.nameRu ? tm.nameRu : tm.name
            return (
            <Reveal key={tm.name} delay={i * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl bg-gradient-to-br from-navy to-navy-light p-7 text-white shadow-lift sm:p-8">
                <Stars />
                <blockquote className="mt-4 flex-1 font-display text-lg leading-relaxed text-white/95">“{lang === 'ru' ? tm.textRu : tm.text}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/15 pt-5">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-sm font-bold">{initials(tm.name)}</span>
                  <span>
                    <span className="block font-bold">{name}</span>
                    <span className="block text-xs uppercase tracking-wide text-teal-100">{lang === 'ru' ? tm.tripRu : tm.trip}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Wall */}
      <Section tone="paper">
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {rest.map((tm, i) => {
            const name = lang === 'ru' && tm.nameRu ? tm.nameRu : tm.name
            return (
            <Reveal key={tm.name} delay={(i % 3) * 0.05} className="mb-6 break-inside-avoid">
              <figure className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-line">
                <div className="flex items-center justify-between">
                  <Stars />
                  <span className="text-2xl leading-none text-teal/25">”</span>
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-body">{lang === 'ru' ? tm.textRu : tm.text}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-navy text-xs font-bold text-white">{initials(tm.name)}</span>
                  <span className="min-w-0">
                    <span className="block truncate font-display font-bold text-navy">{name}</span>
                    <span className="block truncate text-xs text-muted">{lang === 'ru' ? tm.tripRu : tm.trip}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
            )
          })}
        </div>
      </Section>
    </>
  )
}
