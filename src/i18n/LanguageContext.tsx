import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { DICT, type Lang } from './dict'

interface LanguageCtx {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
  /** True until the visitor has picked a language this session (drives the launch modal). */
  needsChoice: boolean
  confirmChoice: (l: Lang) => void
  reopenChooser: () => void
}

const Ctx = createContext<LanguageCtx | null>(null)
const STORAGE_KEY = 'iit-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    return saved === 'ru' ? 'ru' : 'en'
  })
  // Show the launch chooser whenever there is no stored preference (fresh launch).
  const [needsChoice, setNeedsChoice] = useState<boolean>(() => {
    return typeof localStorage === 'undefined' || !localStorage.getItem(STORAGE_KEY)
  })

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem(STORAGE_KEY, l) } catch { /* ignore */ }
  }

  const confirmChoice = (l: Lang) => {
    setLang(l)
    setNeedsChoice(false)
  }

  const reopenChooser = () => setNeedsChoice(true)

  const t = (key: string) => DICT[lang][key] ?? DICT.en[key] ?? key

  return (
    <Ctx.Provider value={{ lang, setLang, t, needsChoice, confirmChoice, reopenChooser }}>
      {children}
    </Ctx.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
