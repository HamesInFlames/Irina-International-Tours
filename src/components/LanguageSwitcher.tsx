import { useLang } from '../i18n/LanguageContext'
import { LANG_LABEL, type Lang } from '../i18n/dict'
import { FLAG } from '../data/media'

function Flag({ lang }: { lang: Lang }) {
  return <img src={FLAG[lang]} alt="" className="h-3.5 w-5 rounded-[2px] object-cover ring-1 ring-black/10" />
}

/** Compact EN/RU toggle used in the top bar and the floating corner control. */
export function LanguageSwitcher({ variant = 'bar' }: { variant?: 'bar' | 'floating' }) {
  const { lang, setLang } = useLang()

  if (variant === 'floating') {
    return (
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-1 rounded-full bg-white/95 p-1 shadow-lift ring-1 ring-line backdrop-blur">
        {(['en', 'ru'] as Lang[]).map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-semibold transition ${
              lang === l ? 'bg-navy text-white' : 'text-body hover:bg-paper'
            }`}
          >
            <Flag lang={l} />
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1 text-sm">
      {(['en', 'ru'] as Lang[]).map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="px-1 text-white/40">|</span>}
          <button
            onClick={() => setLang(l)}
            aria-pressed={lang === l}
            className={`flex items-center gap-1.5 rounded px-1.5 py-0.5 transition ${
              lang === l ? 'font-bold text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            <Flag lang={l} />
            <span className="hidden sm:inline">{LANG_LABEL[l]}</span>
            <span className="sm:hidden">{l.toUpperCase()}</span>
          </button>
        </span>
      ))}
    </div>
  )
}
