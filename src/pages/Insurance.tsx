import { useLang } from '../i18n/LanguageContext'
import { SITE } from '../site'
import { INSURANCE_IMG } from '../data/media'
import { PageHero, Section, Reveal, SectionHeading } from '../components/ui'
import { InsuranceEnquiryForm } from '../components/EnquiryForms'

export function Insurance() {
  const { t } = useLang()
  return (
    <>
      <PageHero seed="insurance-hero" image={INSURANCE_IMG} eyebrow="New service" title={t('insurance.title')} sub={t('insurance.lead')} />
      <Section tone="white">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow={t('insurance.lead')} title={t('insurance.title')} />
            <p className="mt-5 leading-relaxed text-body">{t('insurance.body')}</p>
            <div className="mt-6 rounded-xl bg-paper p-5 text-sm text-body ring-1 ring-line">
              ☎ <a href={SITE.phoneHref} className="font-bold text-navy">{SITE.phone}</a> · ✉ <a href={SITE.emailHref} className="font-bold text-navy">{SITE.email}</a>
            </div>
          </Reveal>
          <Reveal delay={0.1}><InsuranceEnquiryForm /></Reveal>
        </div>
      </Section>
    </>
  )
}
