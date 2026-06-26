import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { Field, Input, Select, SubmitButton, SuccessPanel, useFakeSubmit } from './forms'

/** Flight enquiry — the original site directed callers to phone; modernized here. */
export function FlightEnquiryForm() {
  const { t } = useLang()
  const { pending, done, submit, reset } = useFakeSubmit()
  const [v, setV] = useState({ name: '', email: '', from: '', to: '', depart: '', ret: '', pax: '1' })
  const [err, setErr] = useState('')
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setV({ ...v, [k]: e.target.value })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!v.name || !v.email || !v.from || !v.to) { setErr(t('form.errRequired')); return }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) { setErr(t('form.errEmail')); return }
    setErr(''); submit()
  }
  if (done) return <SuccessPanel onReset={reset} />

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-2xl bg-white p-6 shadow-card ring-1 ring-line sm:grid-cols-2 sm:p-8">
      <Field label={t('form.name')} required><Input value={v.name} onChange={set('name')} /></Field>
      <Field label={t('form.email')} required><Input value={v.email} onChange={set('email')} inputMode="email" /></Field>
      <Field label={t('form.from')} required><Input value={v.from} onChange={set('from')} placeholder="Toronto (YYZ)" /></Field>
      <Field label={t('form.to')} required><Input value={v.to} onChange={set('to')} placeholder="…" /></Field>
      <Field label={t('form.depart')}><Input type="date" value={v.depart} onChange={set('depart')} /></Field>
      <Field label={t('form.return')}><Input type="date" value={v.ret} onChange={set('ret')} /></Field>
      <Field label={t('form.passengers')}>
        <Select value={v.pax} onChange={set('pax')}>{[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n}</option>)}</Select>
      </Field>
      {err && <p className="text-sm font-medium text-coral sm:col-span-2">{err}</p>}
      <div className="sm:col-span-2"><SubmitButton pending={pending} /></div>
    </form>
  )
}

/** Insurance enquiry — modernized from the original call-only page. */
export function InsuranceEnquiryForm() {
  const { t } = useLang()
  const { pending, done, submit, reset } = useFakeSubmit()
  const [v, setV] = useState({ name: '', email: '', coverage: 'single', dates: '', travellers: '1' })
  const [err, setErr] = useState('')
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setV({ ...v, [k]: e.target.value })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!v.name || !v.email) { setErr(t('form.errRequired')); return }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) { setErr(t('form.errEmail')); return }
    setErr(''); submit()
  }
  if (done) return <SuccessPanel onReset={reset} />

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4 rounded-2xl bg-white p-6 shadow-card ring-1 ring-line sm:grid-cols-2 sm:p-8">
      <Field label={t('form.name')} required><Input value={v.name} onChange={set('name')} /></Field>
      <Field label={t('form.email')} required><Input value={v.email} onChange={set('email')} inputMode="email" /></Field>
      <Field label={t('form.coverage')}>
        <Select value={v.coverage} onChange={set('coverage')}>
          <option value="single">Single trip</option>
          <option value="annual">Annual / multi-trip</option>
          <option value="medical">Emergency medical</option>
          <option value="cancellation">Trip cancellation</option>
        </Select>
      </Field>
      <Field label={t('form.travellers')}>
        <Select value={v.travellers} onChange={set('travellers')}>{[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n}</option>)}</Select>
      </Field>
      <Field label={t('form.travelDates')} full><Input value={v.dates} onChange={set('dates')} placeholder="e.g. 14 Jun – 25 Jun 2026" /></Field>
      {err && <p className="text-sm font-medium text-coral sm:col-span-2">{err}</p>}
      <div className="sm:col-span-2"><SubmitButton pending={pending} /></div>
    </form>
  )
}
