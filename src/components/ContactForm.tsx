import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { Field, Input, Textarea, SubmitButton, SuccessPanel, useCaptcha, useFakeSubmit } from './forms'

export function ContactForm() {
  const { t } = useLang()
  const { pending, done, submit, reset } = useFakeSubmit()
  const captcha = useCaptcha()
  const [v, setV] = useState({ name: '', email: '', phone: '', message: '', captcha: '' })
  const [errs, setErrs] = useState<Record<string, string>>({})

  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setV({ ...v, [k]: e.target.value })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const next: Record<string, string> = {}
    if (!v.name || !v.email || !v.phone) next.form = t('form.errRequired')
    if (v.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) next.email = t('form.errEmail')
    if (parseInt(v.captcha, 10) !== captcha.answer) next.captcha = t('form.errCaptcha')
    setErrs(next)
    if (Object.keys(next).length === 0) submit()
  }

  if (done) return <SuccessPanel onReset={() => { reset(); setV({ name: '', email: '', phone: '', message: '', captcha: '' }) }} />

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-line sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t('form.name')} required>
          <Input value={v.name} onChange={set('name')} autoComplete="name" />
        </Field>
        <Field label={t('form.phone')} required>
          <Input value={v.phone} onChange={set('phone')} autoComplete="tel" inputMode="tel" />
        </Field>
        <Field label={t('form.email')} required error={errs.email} full>
          <Input value={v.email} onChange={set('email')} autoComplete="email" inputMode="email" />
        </Field>
        <Field label={t('form.message')} full>
          <Textarea value={v.message} onChange={set('message')} />
        </Field>
        <Field label={`${t('form.captcha')} ${captcha.a} + ${captcha.b}?`} required error={errs.captcha}>
          <Input value={v.captcha} onChange={set('captcha')} inputMode="numeric" />
        </Field>
      </div>
      {errs.form && <p className="mt-4 text-sm font-medium text-coral">{errs.form}</p>}
      <div className="mt-6">
        <SubmitButton pending={pending} />
      </div>
    </form>
  )
}
