import { useLang } from '../i18n/LanguageContext'
import { SITE } from '../site'
import { FLIGHTS_IMG } from '../data/media'
import { PageHero, Section, Reveal, SectionHeading } from '../components/ui'
import { FlightEnquiryForm } from '../components/EnquiryForms'

export function Flights() {
  const { t } = useLang()
  return (
    <>
      <PageHero seed="flights-hero" image={FLIGHTS_IMG} eyebrow="New service" title={t('flights.title')} sub={t('flights.lead')} />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow={t('flights.lead')} title={t('flights.title')} />
            <p className="mt-5 leading-relaxed text-body">{t('flights.body')}</p>
            <div className="mt-6 rounded-xl bg-paper p-5 text-sm text-body ring-1 ring-line">
              ☎ <a href={SITE.phoneHref} className="font-bold text-navy">{SITE.phone}</a> · ✉ <a href={SITE.emailHref} className="font-bold text-navy">{SITE.email}</a>
            </div>
          </Reveal>
          <Reveal delay={0.1}><FlightEnquiryForm /></Reveal>
        </div>
      </Section>
    </>
  )
}
