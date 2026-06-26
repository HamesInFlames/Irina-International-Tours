import { useLang } from '../i18n/LanguageContext'
import { TESTIMONIALS } from '../data/testimonials'
import { BANNER } from '../data/media'
import { PageHero, Section, Reveal, SectionHeading } from '../components/ui'

function initials(name: string) {
  return name.split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase()
}

export function Feedback() {
  const { t, lang } = useLang()
  return (
    <>
      <PageHero seed="feedback-hero" image={BANNER} eyebrow={t('nav.feedback')} title={lang === 'ru' ? 'Отзывы туристов' : 'Tourists’ feedback'} sub={lang === 'ru' ? 'Что говорят наши путешественники.' : 'In the words of our travellers.'} />
      <Section tone="paper">
        <Reveal><SectionHeading eyebrow={lang === 'ru' ? 'Спасибо за доверие' : 'Thank you for travelling with us'} title={lang === 'ru' ? 'Истории наших туристов' : 'Stories from our travellers'} center /></Reveal>
        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {TESTIMONIALS.map((tm, i) => (
            <Reveal key={tm.name} delay={(i % 3) * 0.06} className="mb-6 break-inside-avoid">
              <figure className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-line">
                <div className="text-3xl leading-none text-teal/30">“</div>
                <blockquote className="-mt-2 text-sm leading-relaxed text-body">{tm.text}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-navy text-xs font-bold text-white">{initials(tm.name)}</span>
                  <span>
                    <span className="block font-display font-bold text-navy">{tm.name}</span>
                    <span className="block text-xs text-muted">{tm.trip}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
