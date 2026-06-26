import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { SITE } from '../site'
import { TICO } from '../data/media'

export function Footer() {
  const { t } = useLang()
  const year = 2026

  return (
    <footer>
      {/* Teal quick-links band */}
      <div className="bg-teal text-white">
        <div className="shell flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-sm font-semibold">
          <Link to="/gallery" className="hover:text-white/80">{t('nav.gallery')}</Link>
          <span className="hidden text-white/40 sm:inline">|</span>
          <Link to="/feedback" className="hover:text-white/80">{t('nav.feedback')}</Link>
          <span className="hidden text-white/40 sm:inline">|</span>
          <Link to="/information" className="hover:text-white/80">{t('nav.info')}</Link>
        </div>
      </div>

      {/* Coral contact band */}
      <div className="bg-coral text-white">
        <div className="shell grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="display text-2xl font-bold text-white">{t('contact.title')}</h3>
            <p className="mt-2 max-w-xs text-sm text-white/85">{t('footer.tagline')}</p>
          </div>
          <div className="text-sm">
            <p className="font-bold uppercase tracking-wide text-white/70">{t('contact.office')}</p>
            <p className="mt-2 text-white/90">{SITE.address.line1}</p>
            <p className="text-white/90">{SITE.address.line2}</p>
          </div>
          <div className="text-sm">
            <p className="font-bold uppercase tracking-wide text-white/70">{t('nav.contact')}</p>
            <p className="mt-2"><a href={SITE.phoneHref} className="text-white/90 hover:text-white">{SITE.phone}</a></p>
            <p><a href={SITE.emailHref} className="text-white/90 hover:text-white">{SITE.email}</a></p>
          </div>
          <div className="text-sm">
            <p className="font-bold uppercase tracking-wide text-white/70">{t('contact.hours')}</p>
            <p className="mt-2 text-white/90">Mon – Fri · 10:00 – 16:00</p>
            <p className="text-white/90">Sat / Sun / Holidays · {t('contact.closed')}</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-navy-dark text-white/70">
        <div className="shell flex flex-col items-center justify-between gap-3 py-5 text-xs sm:flex-row">
          <p>© {year} {SITE.name}. {t('footer.rights')}</p>
          <div className="flex items-center gap-3">
            <img src={TICO} alt="TICO — Travel Industry Council of Ontario" className="h-9 w-auto rounded bg-white/95 p-0.5" />
            <span className="rounded bg-white/10 px-2 py-1 font-semibold text-white/80">{t('footer.tico')}</span>
            <span className="rounded bg-white/10 px-2 py-1 font-semibold text-white/80">BBB Accredited</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-white">{t('footer.privacy')}</Link>
            <Link to="/terms" className="hover:text-white">{t('footer.terms')}</Link>
          </div>
        </div>
        <div className="border-t border-white/10 py-3 text-center text-[11px] text-white/45">
          {t('footer.builtBy')}
        </div>
      </div>
    </footer>
  )
}
