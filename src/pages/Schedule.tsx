import { useLang } from '../i18n/LanguageContext'
import { SKYLINE } from '../data/media'
import { PageHero, Section, Reveal } from '../components/ui'
import { Calendar } from '../components/Calendar'

export function Schedule() {
  const { t } = useLang()
  return (
    <>
      <PageHero seed="toronto-skyline" image={SKYLINE} eyebrow={t('nav.schedule')} title={t('schedule.title').replace('{year}', String(new Date().getFullYear()))} sub={t('schedule.sub')} />
      <Section tone="paper">
        <Reveal><Calendar /></Reveal>
      </Section>
    </>
  )
}
