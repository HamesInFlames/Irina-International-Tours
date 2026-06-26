import { useLang } from '../i18n/LanguageContext'
import { SITE } from '../site'
import { PageHero, Section } from '../components/ui'

export function Policy({ kind }: { kind: 'privacy' | 'terms' }) {
  const { t, lang } = useLang()
  const title = kind === 'privacy' ? t('footer.privacy') : t('footer.terms')

  const privacy = lang === 'ru'
    ? [
        'Мы уважаем вашу конфиденциальность. Личные данные, которые вы предоставляете (имя, телефон, электронная почта), используются исключительно для обработки вашего запроса на бронирование или вопроса.',
        'Мы не продаём и не передаём ваши данные третьим лицам, за исключением случаев, необходимых для оформления вашего тура (например, отелям или авиакомпаниям).',
        'Это демонстрационный сайт: формы не отправляют данные на сервер.',
      ]
    : [
        'We respect your privacy. Personal information you provide (name, phone, e-mail) is used solely to process your booking request or enquiry.',
        'We do not sell or share your information with third parties except as required to arrange your travel (for example, hotels or airlines).',
        'This is a demonstration site: the forms do not transmit data to any server.',
      ]

  const terms = lang === 'ru'
    ? [
        'Бронируя тур, вы соглашаетесь с условиями оплаты, депозита и отмены, указанными на странице «Полезная информация».',
        'Цены указаны в канадских долларах и могут меняться до подтверждения бронирования.',
        'Для зарубежных туров настоятельно рекомендуется туристическая страховка.',
      ]
    : [
        'By booking a tour you agree to the payment, deposit and cancellation terms set out on the Useful Information page.',
        'Prices are in Canadian dollars and may change until a booking is confirmed.',
        'Travel insurance is strongly recommended for all overseas tours.',
      ]

  const body = kind === 'privacy' ? privacy : terms

  return (
    <>
      <PageHero seed={`policy-${kind}`} eyebrow={SITE.name} title={title} />
      <Section tone="white">
        <div className="mx-auto max-w-3xl space-y-5 text-body">
          {body.map((p, i) => <p key={i} className="leading-relaxed">{p}</p>)}
          <p className="pt-4 text-sm text-muted">{SITE.tico} · {SITE.address.line1}, {SITE.address.line2}</p>
        </div>
      </Section>
    </>
  )
}
