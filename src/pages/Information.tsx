import { useLang } from '../i18n/LanguageContext'
import { BANNER } from '../data/media'
import { PageHero, Section, Reveal } from '../components/ui'

const SECTIONS = [
  {
    title: 'Daily Tours',
    items: [
      'Departure: Steeles Ave & Dufferin St (near Starbucks).',
      'All pricing is in Canadian dollars.',
      'Cancellation or late arrival on the day of departure is non-refundable.',
      'Payment by cash, debit or credit card at the office (7851 Dufferin St, Unit 202, Concord).',
    ],
  },
  {
    title: 'Bus Tours',
    items: [
      'A deposit of $200 per person is required to reserve.',
      'Deposit is 100% non-refundable forty-five (45) days prior to departure.',
      'Final payment is due 45 days before departure and is non-refundable.',
      'Departure: 1 Promenade Circle (Bathurst St & Centre St) — T&T Supermarket.',
      'No refund for late arrival or no-show.',
    ],
  },
  {
    title: 'Overseas Tours',
    items: [
      'A deposit of $300 per person is required.',
      'Final payment due 60–90 days before departure.',
      'Travel insurance is strongly recommended.',
      'Clients are responsible for passports and visas; a passport must be valid for at least another six (6) months.',
    ],
  },
  {
    title: 'Hotels & Discounts',
    items: [
      'Accommodation in 3★ and 4★ hotels with standard room configurations.',
      'Group occupancy discounts of $20–$100 per person depending on room sharing.',
    ],
  },
]

export function Information() {
  const { t, lang } = useLang()
  return (
    <>
      <PageHero seed="info-hero" image={BANNER} eyebrow={t('nav.info')} title={lang === 'ru' ? 'Полезная информация' : 'Useful information'} sub={lang === 'ru' ? 'Условия бронирования, оплаты и отправления.' : 'Booking, payment and departure terms.'} />
      <Section tone="paper">
        <div className="grid gap-6 sm:grid-cols-2">
          {SECTIONS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl bg-white p-6 shadow-card ring-1 ring-line">
                <h2 className="font-display text-xl font-bold text-navy">{s.title}</h2>
                <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-body">
                  {s.items.map((it) => <li key={it} className="flex gap-2"><span className="mt-1 text-teal">▹</span>{it}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          {lang === 'ru' ? 'Часы работы офиса: Пн–Пт 10:00–16:00.' : 'Office hours: Monday – Friday, 10:00 a.m. – 4:00 p.m.'}
        </p>
      </Section>
    </>
  )
}
