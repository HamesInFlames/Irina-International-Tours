import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useLang } from '../i18n/LanguageContext'
import { NAV, SITE } from '../site'
import { Logo } from './Logo'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // close mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname])
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top utility bar */}
      <div className="bg-navy text-white">
        <div className="shell flex h-9 items-center justify-between">
          <a href={SITE.phoneHref} className="text-xs font-medium text-white/85 hover:text-white">
            ☎ {SITE.phone}
          </a>
          <div className="flex items-center gap-3">
            <LanguageSwitcher variant="bar" />
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><path d="M14 13.5h2.5l1-4H14V7c0-1 .5-2 2-2h2V1.5C17.3 1.3 16 1 14.7 1 11.8 1 10 2.7 10 5.7v3.8H6.5v4H10V23h4z" /></svg>
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-6 w-6 place-items-center rounded-full bg-white/15 text-white transition hover:bg-white/30"
            >
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-white/95 backdrop-blur">
        <div className="shell flex h-20 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-full px-3.5 py-2 text-sm font-semibold uppercase tracking-wide transition ${
                    isActive ? 'bg-navy text-white' : 'text-ink hover:bg-paper hover:text-navy'
                  }`
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden rounded-full bg-coral px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-coral-dark xl:inline-block"
          >
            {t('cta.requestBooking')}
          </Link>

          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-11 w-11 place-items-center rounded-lg text-navy hover:bg-paper lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-line bg-white lg:hidden">
          <div className="shell flex flex-col py-2">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={close}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wide ${
                    isActive ? 'bg-navy text-white' : 'text-ink hover:bg-paper'
                  }`
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={close}
              className="mt-2 rounded-lg bg-coral px-3 py-3 text-center text-sm font-bold text-white"
            >
              {t('cta.requestBooking')}
            </Link>
          </div>
        </nav>
      )}

    </header>
  )
}
