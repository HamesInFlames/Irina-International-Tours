import { AnimatePresence, motion } from 'motion/react'
import { useLang } from '../i18n/LanguageContext'
import { LANG_LABEL, type Lang } from '../i18n/dict'
import { FLAG } from '../data/media'

/** Launch chooser — appears on first visit / relaunch until a language is picked. */
export function LanguageModal() {
  const { needsChoice, confirmChoice, t } = useLang()

  return (
    <AnimatePresence>
      {needsChoice && (
        <motion.div
          className="fixed inset-0 z-[60] grid place-items-center bg-navy/55 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Select language"
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-lift"
          >
            <div className="bg-gradient-to-br from-navy to-teal px-8 py-7 text-center text-white">
              <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-white/15">
                <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
                </svg>
              </div>
              <p className="font-display text-2xl font-bold">ii<span className="text-white">Tours</span></p>
              <p className="mt-1 text-sm text-white/80">{t('lang.welcome')}</p>
            </div>

            <div className="px-8 py-7 text-center">
              <p className="font-semibold text-navy">{t('lang.choose')}</p>
              <p className="text-sm text-muted">{t('lang.chooseRu')}</p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {(['en', 'ru'] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => confirmChoice(l)}
                    className="group flex flex-col items-center gap-2 rounded-xl border-2 border-line px-4 py-5 transition hover:border-teal hover:bg-paper hover:shadow-card"
                  >
                    <img src={FLAG[l]} alt="" className="h-10 w-14 rounded object-cover shadow-sm ring-1 ring-black/10" />
                    <span className="font-semibold text-navy group-hover:text-teal">{LANG_LABEL[l]}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
