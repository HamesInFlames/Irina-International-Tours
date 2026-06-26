import { useLang } from '../i18n/LanguageContext'
import { SITE } from '../site'
import { SKYLINE } from '../data/media'
import { PageHero, Section, Reveal } from '../components/ui'
import { ContactForm } from '../components/ContactForm'

export function Contact() {
  const { t } = useLang()
  return (
    <>
      <PageHero seed="contact-hero" image={SKYLINE} eyebrow={t('nav.contact')} title={t('contact.title')} sub={t('contact.intro')} />
      <Section tone="paper">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          <Reveal><ContactForm /></Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-5">
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-line">
                <h3 className="font-display text-lg font-bold text-navy">{t('contact.office')}</h3>
                <p className="mt-3 text-sm text-body">{SITE.address.line1}<br />{SITE.address.line2}</p>
                <div className="mt-4 space-y-1 text-sm">
                  <p>☎ <a href={SITE.phoneHref} className="font-semibold text-navy hover:text-teal">{SITE.phone}</a></p>
                  <p>✉ <a href={SITE.emailHref} className="font-semibold text-navy hover:text-teal">{SITE.email}</a></p>
                </div>
              </div>
              <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-line">
                <h3 className="font-display text-lg font-bold text-navy">{t('contact.hours')}</h3>
                <p className="mt-3 text-sm text-body">{t('contact.hoursVal')}</p>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-line">
                <img src={SKYLINE} alt="Office location" className="h-44 w-full object-cover" />
                <div className="bg-white p-4 text-xs text-muted">{SITE.tico} · BBB Accredited</div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
