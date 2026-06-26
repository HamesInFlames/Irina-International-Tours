import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { useLang } from '../i18n/LanguageContext'
import { SITE } from '../site'
import { featuredTours } from '../data/tours'
import { HERO_SLIDES, OWNER, BANNER } from '../data/media'
import { TourCard } from '../components/TourCard'
import { Reveal, Section, SectionHeading, Eyebrow, TrustBadges } from '../components/ui'

const STATS = [
  { value: '35+', key: 'home.statYears' },
  { value: '60+', key: 'home.statTours' },
  { value: '20k+', key: 'home.statTravellers' },
  { value: '4.9★', key: 'home.statRating' },
]

const WHY = [
  { icon: '🧭', en: ['Off the tourist track', 'Authentic experiences chosen for the insight they give into each region.'], ru: ['В стороне от толп', 'Подлинные впечатления, раскрывающие характер каждого региона.'] },
  { icon: '🏨', en: ['Hand-picked hotels', 'Moderate-finest 3★/4★ hotels selected for quality and central location.'], ru: ['Отобранные отели', 'Лучшие отели 3★/4★ — за качество и удобное расположение.'] },
  { icon: '🎓', en: ['Expert tour directors', 'Experienced, multilingual directors who make every coach tour the ultimate experience.'], ru: ['Опытные руководители', 'Профессиональные гиды, которые делают каждый тур незабываемым.'] },
  { icon: '🛡️', en: ['Travel with confidence', 'TICO-registered and BBB-accredited, with full flight & insurance support.'], ru: ['Спокойствие в пути', 'Регистрация TICO и аккредитация BBB, помощь с билетами и страховкой.'] },
]

export function Home() {
  const { t, lang } = useLang()

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={HERO_SLIDES[0]} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/92 via-navy/75 to-navy/30" />
        <div className="shell relative grid min-h-[78vh] items-center py-20">
          <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="max-w-2xl">
            <Eyebrow className="text-teal-100">{SITE.name} · est. {SITE.founded}</Eyebrow>
            <h1 className="display mt-4 text-5xl font-bold leading-[1.05] text-white drop-shadow sm:text-6xl lg:text-7xl">
              {t('home.heroTitle')}
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85 sm:text-xl">{t('home.heroSub')}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/schedule" className="rounded-full bg-coral px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-coral-dark">
                {t('cta.viewSchedule')}
              </Link>
              <Link to="/packages" className="rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-navy">
                {t('cta.explore')}
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-3 text-white">
              <span className="text-sm uppercase tracking-wide text-white/70">{t('cta.callToday')}</span>
              <a href={SITE.phoneHref} className="font-display text-2xl font-bold text-white hover:text-teal-100">{SITE.phone}</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <div className="bg-white">
        <div className="shell grid grid-cols-2 gap-6 py-10 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.key} delay={i * 0.08} className="text-center">
              <p className="font-display text-4xl font-bold text-navy">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-muted">{t(s.key)}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* WELCOME (navy band) */}
      <section className="bg-navy text-white">
        <div className="shell py-16 text-center sm:py-20">
          <Reveal>
            <h2 className="display text-3xl font-bold text-white sm:text-4xl">{t('home.welcomeTitle')}</h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/85">{t('home.welcomeBody')}</p>
            <p className="mt-6 font-display text-xl italic text-teal-100">{t('home.welcomeTag')}</p>
          </Reveal>
        </div>
      </section>

      {/* HIGHLIGHT TOURS */}
      <Section tone="paper">
        <Reveal><SectionHeading eyebrow={t('home.highlightSub')} title={t('home.highlightTitle')} center /></Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTours().map((tour, i) => (
            <Reveal key={tour.id} delay={i * 0.06}><TourCard tour={tour} /></Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/packages" className="inline-block rounded-full bg-navy px-7 py-3 text-sm font-bold text-white transition hover:bg-navy-light">
            {t('cta.explore')} →
          </Link>
        </div>
      </Section>

      {/* INTRODUCING IIT */}
      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img src={OWNER} alt="Irina Nagel, founder" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card" />
              <div className="absolute -bottom-5 -right-3 rounded-xl bg-coral px-5 py-3 text-white shadow-lift sm:right-6">
                <p className="font-display text-lg font-bold leading-tight">Irina Nagel</p>
                <p className="text-xs text-white/85">Founder & Director</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>{t('home.introTitle')}</Eyebrow>
            <h2 className="display mt-3 text-3xl font-bold text-navy sm:text-4xl">{t('home.introTitle')}</h2>
            <p className="mt-5 text-lg leading-relaxed text-body">{t('home.introBody')}</p>
            <div className="mt-8"><TrustBadges /></div>
          </Reveal>
        </div>
      </Section>

      {/* WHY US */}
      <Section tone="paper">
        <Reveal><SectionHeading eyebrow={lang === 'ru' ? 'Наши преимущества' : 'The IIT difference'} title={t('home.whyTitle')} center /></Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => {
            const [title, body] = lang === 'ru' ? w.ru : w.en
            return (
              <Reveal key={i} delay={i * 0.07}>
                <div className="h-full rounded-2xl bg-white p-6 shadow-card ring-1 ring-line transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-teal/10 text-2xl">{w.icon}</div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{body}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden bg-navy">
        <img src={BANNER} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="shell relative py-16 text-center">
          <Reveal>
            <h2 className="display text-3xl font-bold text-white sm:text-4xl">{lang === 'ru' ? 'Готовы отправиться в путь?' : 'Ready to start your journey?'}</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/80">{lang === 'ru' ? 'Свяжитесь с нами — поможем выбрать идеальный тур.' : 'Get in touch and we’ll help you find the perfect tour.'}</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="rounded-full bg-coral px-7 py-3.5 text-sm font-bold text-white transition hover:bg-coral-dark">{t('cta.requestBooking')}</Link>
              <a href={SITE.phoneHref} className="rounded-full border-2 border-white/40 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-navy">☎ {SITE.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
