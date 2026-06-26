import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'

export function NotFound() {
  const { lang } = useLang()
  return (
    <section className="grid min-h-[60vh] place-items-center bg-paper">
      <div className="shell text-center">
        <p className="font-display text-7xl font-bold text-navy">404</p>
        <h1 className="mt-3 font-display text-2xl font-bold text-navy">{lang === 'ru' ? 'Страница не найдена' : 'Page not found'}</h1>
        <p className="mt-2 text-body">{lang === 'ru' ? 'Возможно, эта страница уехала в тур.' : 'This page may have gone on tour.'}</p>
        <Link to="/" className="mt-6 inline-block rounded-full bg-coral px-7 py-3 text-sm font-bold text-white transition hover:bg-coral-dark">
          {lang === 'ru' ? 'На главную' : 'Back home'}
        </Link>
      </div>
    </section>
  )
}
