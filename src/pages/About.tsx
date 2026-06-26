import { useLang } from '../i18n/LanguageContext'
import { OWNER, BANNER } from '../data/media'
import { PageHero, Section, Reveal, SectionHeading, Eyebrow, TrustBadges } from '../components/ui'

// The full services breakdown from the original Irina International Tours site.
const PROVIDES = [
  {
    icon: '🚌',
    en: { title: 'Daily — Group & Individual Sightseeing', note: 'Day tours' },
    ru: { title: 'Ежедневные — групповые и индивидуальные экскурсии', note: 'Однодневные' },
    tours: [
      'City of Toronto sightseeing tour',
      'Niagara Falls / Niagara-on-the-Lake sightseeing tour',
      '“1,000 Islands” boat cruise & sightseeing tour',
      'St. Mary’s Mission / Lake Huron “30,000 Islands” boat cruise & sightseeing tour',
    ],
  },
  {
    icon: '🍁',
    en: { title: 'Eastern Canada — Fully Escorted', note: '3 – 14 day tours' },
    ru: { title: 'Восточная Канада — с полным сопровождением', note: 'Туры 3 – 14 дней' },
    tours: [
      'Ottawa / Montreal / Quebec City / Tadoussac (whale watching)',
      'Ottawa / Montreal / Quebec City',
      'Montreal / Quebec City',
    ],
  },
  {
    icon: '🏔️',
    en: { title: 'Western Canada — Fully Escorted', note: '5 – 7 day tours' },
    ru: { title: 'Западная Канада — с полным сопровождением', note: 'Туры 5 – 7 дней' },
    tours: ['Vancouver / Victoria / Whistler'],
  },
  {
    icon: '🗽',
    en: { title: 'United States of America — Fully Escorted', note: '4 – 8 day tours' },
    ru: { title: 'США — с полным сопровождением', note: 'Туры 4 – 8 дней' },
    tours: [
      'Boston / Newport / Cape Cod',
      'Chicago',
      'New York',
      'New York / Philadelphia / Atlantic City',
      'New York / Washington',
      'California and Arizona States',
    ],
  },
]

export function About() {
  const { t, lang } = useLang()

  return (
    <>
      <PageHero seed="about-hero" image={BANNER} eyebrow={t('nav.about')} title={lang === 'ru' ? 'О компании Irina International Tours' : 'Discover Irina International Tours'} sub={lang === 'ru' ? 'Почти 35 лет высоко оценённых автобусных туров.' : 'Nearly 35 years of highly-rated local and international motorcoach tours.'} />

      <Section tone="white">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <figure>
              <img src={OWNER} alt="Irina Nagel" className="aspect-square w-full rounded-2xl object-cover shadow-card" />
              <figcaption className="mt-4 text-center">
                <span className="block font-display text-xl font-bold text-navy">Irina Nagel</span>
                <span className="block text-sm font-semibold uppercase tracking-wide text-coral">
                  {lang === 'ru' ? 'Основатель и директор' : 'Founder & Director'}
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>{lang === 'ru' ? 'Наследие качества' : 'A legacy of excellence'}</Eyebrow>
            <h2 className="display mt-3 text-3xl font-bold text-navy">{lang === 'ru' ? 'Важна не только цель, но и путь' : 'It’s not just the destination — it’s the journey'}</h2>
            <p className="mt-5 leading-relaxed text-body">
              {lang === 'ru'
                ? 'Более 30 лет мы создаём по-настоящему запоминающиеся путешествия. Мы продумываем индивидуальные маршруты, выбираем качественные отели и работаем с опытными руководителями туров по Канаде, США, Европе и Азии.'
                : 'For more than 30 years we have created genuinely memorable journeys. We craft personalised itineraries, hand-pick quality hotels, and work with expert tour directors across Canada, the United States, Europe and Asia — because how you travel matters as much as where you go.'}
            </p>
            <div className="mt-7"><TrustBadges /></div>
          </Reveal>
        </div>
      </Section>

      {/* What we provide — full services breakdown */}
      <Section tone="paper">
        <Reveal><SectionHeading eyebrow={lang === 'ru' ? 'Что мы предлагаем' : 'What we provide'} title={lang === 'ru' ? 'Наши туры и услуги' : 'Our tours & services'} center /></Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PROVIDES.map((group, i) => {
            const head = lang === 'ru' ? group.ru : group.en
            return (
              <Reveal key={i} delay={(i % 2) * 0.08}>
                <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-line sm:p-7">
                  <div className="flex items-start gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal/10 text-2xl">{group.icon}</span>
                    <div>
                      <h3 className="font-display text-lg font-bold leading-tight text-navy">{head.title}</h3>
                      <span className="mt-0.5 inline-block rounded-full bg-navy/5 px-2.5 py-0.5 text-xs font-semibold text-navy/70">{head.note}</span>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-body">
                    {group.tours.map((tour) => (
                      <li key={tour} className="flex gap-2"><span className="mt-1 text-teal">▹</span><span>{tour}</span></li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>

        {/* International + custom groups */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl bg-navy p-6 text-white shadow-card sm:p-7">
              <h3 className="font-display text-lg font-bold text-white">🌍 {lang === 'ru' ? 'По всему миру' : 'A truly international tour company'}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {lang === 'ru'
                  ? 'Мы предлагаем направления по всему миру — Южная и Центральная Америка, Азия, Европа, Южно-Тихоокеанский регион и Северная Америка — с учётом потребностей каждого путешественника. Также мы оформляем авиабилеты, круизы и проживание в отелях по всему миру.'
                  : 'We offer destinations across South & Central America, Asia, Europe, the South Pacific and North America, catering to the needs of every individual. We also provide airline tickets, cruises and hotel accommodation throughout the world.'}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl bg-white p-6 shadow-card ring-1 ring-line sm:p-7">
              <h3 className="font-display text-lg font-bold text-navy">🎯 {lang === 'ru' ? 'Группы и мероприятия' : 'Special-interest groups & events'}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {lang === 'ru'
                  ? 'Для тематических групп, конференций, выставок и съездов Irina International Tours позволит вам выбрать, чем заняться, и составит индивидуальную программу под ваши задачи.'
                  : 'For special-interest groups, conferences, trade exhibitions and conventions, Irina International Tours lets you choose what you want to do and personalises your touring around it.'}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
