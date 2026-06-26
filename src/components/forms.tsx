import { useMemo, useState, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { useLang } from '../i18n/LanguageContext'

/* ---------- Field primitives ---------- */

interface FieldProps {
  label: string
  required?: boolean
  children: ReactNode
  error?: string
  full?: boolean
}

export function Field({ label, required, children, error, full }: FieldProps) {
  const { t } = useLang()
  return (
    <label className={`block ${full ? 'sm:col-span-2' : ''}`}>
      <span className="mb-1.5 flex items-center gap-1 text-sm font-semibold text-ink">
        {label}
        {required && <span className="text-xs font-normal text-coral">({t('form.required')})</span>}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-coral">{error}</span>}
    </label>
  )
}

const fieldCls =
  'w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink shadow-sm outline-none transition focus:border-teal focus:ring-2 focus:ring-teal/20'

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={fieldCls} />
}
export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={`${fieldCls} min-h-28 resize-y`} />
}
export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} className={fieldCls} />
}

/* ---------- Simple arithmetic captcha (client-side only) ---------- */

export function useCaptcha() {
  const a = useMemo(() => 3 + Math.floor(((Date.now() / 1000) % 7)), [])
  const b = useMemo(() => 2 + Math.floor(((Date.now() / 100) % 6)), [])
  return { a, b, answer: a + b }
}

/* ---------- Success panel ---------- */

export function SuccessPanel({ onReset }: { onReset: () => void }) {
  const { t } = useLang()
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      className="rounded-2xl border border-teal/30 bg-teal/5 p-8 text-center"
    >
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-teal text-white">
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h3 className="mt-4 font-display text-xl font-bold text-navy">{t('form.successTitle')}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm text-body">{t('form.successBody')}</p>
      <button
        onClick={onReset}
        className="mt-5 rounded-full border border-teal px-5 py-2 text-sm font-bold text-teal transition hover:bg-teal hover:text-white"
      >
        {t('form.another')}
      </button>
    </motion.div>
  )
}

/* ---------- Submit button with pending state ---------- */

export function SubmitButton({ pending }: { pending: boolean }) {
  const { t } = useLang()
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-7 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-coral-dark disabled:opacity-60"
    >
      {pending && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      )}
      {pending ? t('form.sending') : t('form.send')}
    </button>
  )
}

/* ---------- shared submit simulation ---------- */

export function useFakeSubmit() {
  const [pending, setPending] = useState(false)
  const [done, setDone] = useState(false)
  const submit = () => {
    setPending(true)
    // simulate a network round-trip — nothing leaves the browser
    window.setTimeout(() => {
      setPending(false)
      setDone(true)
    }, 900)
  }
  const reset = () => setDone(false)
  return { pending, done, submit, reset }
}
