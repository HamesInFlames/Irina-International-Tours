import { useLang } from '../i18n/LanguageContext'
import { BANNER } from '../data/media'
import { PageHero, Section, Reveal } from '../components/ui'

const SECTIONS = [
  {
    en: {
      title: 'Daily Tours',
      items: [
        'Departure: Steeles Ave & Dufferin St (near Starbucks).',
        'All pricing is in Canadian dollars.',
        'Cancellation or late arrival on the day of departure is non-refundable.',
        'Payment by cash, debit or credit card at the office (7851 Dufferin St, Unit 202, Concord).',
      ],
    },
    ru: {
      title: 'Однодневные туры',
      items: [
        'Отправление: Steeles Ave и Dufferin St (рядом со Starbucks).',
        'Все цены указаны в канадских долларах.',
        'Отмена или опоздание в день отправления не возвращается.',
        'Оплата наличными, дебетовой или кредитной картой в офисе (7851 Dufferin St, Unit 202, Concord).',
      ],
    },
  },
  {
    en: {
      title: 'Bus Tours',
      items: [
        'A deposit of $200 per person is required to reserve.',
        'Deposit is 100% non-refundable forty-five (45) days prior to departure.',
        'Final payment is due 45 days before departure and is non-refundable.',
        'Departure: 1 Promenade Circle (Bathurst St & Centre St) — T&T Supermarket.',
        'No refund for late arrival or no-show.',
      ],
    },
    ru: {
      title: 'Автобусные туры',
      items: [
        'Для бронирования требуется депозит $200 с человека.',
        'Депозит не возвращается за 45 дней до отправления.',
        'Окончательная оплата вносится за 45 дней до отправления и не возвращается.',
        'Отправление: 1 Promenade Circle (Bathurst St и Centre St) — супермаркет T&T.',
        'Возврат за опоздание или неявку не производится.',
      ],
    },
  },
  {
    en: {
      title: 'Overseas Tours',
      items: [
        'A deposit of $300 per person is required.',
        'Final payment due 60–90 days before departure.',
        'Travel insurance is strongly recommended.',
        'Clients are responsible for passports and visas; a passport must be valid for at least another six (6) months.',
      ],
    },
    ru: {
      title: 'Зарубежные туры',
      items: [
        'Требуется депозит $300 с человека.',
        'Окончательная оплата — за 60–90 дней до отправления.',
        'Настоятельно рекомендуется туристическая страховка.',
        'Клиенты сами отвечают за паспорта и визы; паспорт должен быть действителен ещё не менее шести (6) месяцев.',
      ],
    },
  },
  {
    en: {
      title: 'Hotels & Discounts',
      items: [
        'Accommodation in 3★ and 4★ hotels with standard room configurations.',
        'Group occupancy discounts of $20–$100 per person depending on room sharing.',
      ],
    },
    ru: {
      title: 'Отели и скидки',
      items: [
        'Размещение в отелях 3★ и 4★ со стандартными номерами.',
        'Групповые скидки $20–$100 с человека в зависимости от размещения в номере.',
      ],
    },
  },
]

export function Information() {
  const { t, lang } = useLang()
  return (
    <>
      <PageHero seed="info-hero" image={BANNER} eyebrow={t('nav.info')} title={lang === 'ru' ? 'Полезная информация' : 'Useful information'} sub={lang === 'ru' ? 'Условия бронирования, оплаты и отправления.' : 'Booking, payment and departure terms.'} />
      <Section tone="paper">
        <div className="grid gap-6 sm:grid-cols-2">
          {SECTIONS.map((s, i) => {
            const sec = lang === 'ru' ? s.ru : s.en
            return (
            <Reveal key={sec.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-card ring-1 ring-line">
                <h2 className="font-display text-xl font-bold text-navy">{sec.title}</h2>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-body">
                  {sec.items.map((it) => <li key={it} className="flex gap-2"><span className="mt-1 text-teal">▹</span>{it}</li>)}
                </ul>
              </div>
            </Reveal>
            )
          })}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          {lang === 'ru' ? 'Часы работы офиса: Пн–Пт 10:00–16:00.' : 'Office hours: Monday – Friday, 10:00 a.m. – 4:00 p.m.'}
        </p>
      </Section>
    </>
  )
}
