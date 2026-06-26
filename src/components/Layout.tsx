import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { LanguageModal } from './LanguageModal'
import { LanguageSwitcher } from './LanguageSwitcher'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0 }) }, [pathname])
  return null
}

export function Layout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollToTop />
      <LanguageModal />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <LanguageSwitcher variant="floating" />
    </div>
  )
}
