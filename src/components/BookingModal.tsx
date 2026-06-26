import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLang } from '../i18n/LanguageContext'
import type { Tour } from '../data/tours'
import { Field, Input, Select, SubmitButton, SuccessPanel, useFakeSubmit } from './forms'

/** Booking-request modal launched from a tour detail page. Disconnected (demo). */
export function BookingModal({ tour, open, onClose }: { tour: Tour; open: boolean; onClose: () => void }) {
  const { t } = useLang()
  const { pending, done, submit, reset } = useFakeSubmit()
  const [v, setV] = useState({ name: '', email: '', phone: '', occ: 'double', pax: '2', date: '' })
  const [err, setErr] = useState('')

  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setV({ ...v, [k]: e.target.value })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!v.name || !v.email || !v.phone) { setErr(t('form.errRequired')); return }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) { setErr(t('form.errEmail')); return }
    setErr('')
    submit()
  }

  const close = () => { onClose(); setTimeout(() => { reset(); setErr('') }, 200) }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center overflow-y-auto bg-navy/55 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            className="my-8 w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 bg-gradient-to-br from-navy to-teal px-6 py-5 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-white/70">{t('cta.requestBooking')}</p>
                <h3 className="font-display text-xl font-bold">{tour.name}</h3>
              </div>
              <button onClick={close} aria-label="Close" className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/15 hover:bg-white/25">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>

            <div className="p-6">
              {done ? (
                <SuccessPanel onReset={close} />
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-4 sm:grid-cols-2">
                  <Field label={t('form.name')} required><Input value={v.name} onChange={set('name')} /></Field>
                  <Field label={t('form.phone')} required><Input value={v.phone} onChange={set('phone')} inputMode="tel" /></Field>
                  <Field label={t('form.email')} required full><Input value={v.email} onChange={set('email')} inputMode="email" /></Field>
                  <Field label={t('form.occupancy')}>
                    <Select value={v.occ} onChange={set('occ')}>
                      <option value="double">{t('common.double')}</option>
                      <option value="single">{t('common.single')}</option>
                    </Select>
                  </Field>
                  <Field label={t('form.travellers')}>
                    <Select value={v.pax} onChange={set('pax')}>
                      {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n}</option>)}
                    </Select>
                  </Field>
                  <Field label={t('form.preferredDate')} full>
                    <Input type="date" value={v.date} onChange={set('date')} />
                  </Field>
                  {err && <p className="text-sm font-medium text-coral sm:col-span-2">{err}</p>}
                  <div className="sm:col-span-2"><SubmitButton pending={pending} /></div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
