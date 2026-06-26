import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLang } from '../i18n/LanguageContext'
import { ALBUMS, type Album } from '../data/galleries'
import { galleryCover, PHOTO_POOL, BANNER } from '../data/media'
import { PageHero, Section, Reveal, SectionHeading } from '../components/ui'

// Fill an album's interior grid with real photos: its own cover first,
// then the rest of the real photo pool, cycled to the album's photo count.
function albumPhotos(albumId: string, count: number): string[] {
  const cover = galleryCover(albumId)
  const rest = PHOTO_POOL.filter((p) => p !== cover)
  const ordered = cover ? [cover, ...rest] : rest
  return Array.from({ length: count }, (_, i) => ordered[i % ordered.length])
}

export function Gallery() {
  const { t, lang } = useLang()
  const [album, setAlbum] = useState<Album | null>(null)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const photos = album ? albumPhotos(album.id, album.count) : []

  return (
    <>
      <PageHero seed="gallery-hero" image={BANNER} eyebrow={t('nav.gallery')} title={lang === 'ru' ? 'Фотогалереи' : 'Photo galleries'} sub={lang === 'ru' ? 'Моменты из наших путешествий.' : 'Moments from our journeys around the world.'} />

      <Section tone="paper">
        {!album ? (
          <>
            <Reveal><SectionHeading eyebrow={lang === 'ru' ? 'Альбомы' : 'Albums'} title={lang === 'ru' ? 'Выберите альбом' : 'Browse the albums'} center /></Reveal>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ALBUMS.map((a, i) => (
                <Reveal key={a.id} delay={i * 0.05}>
                  <button onClick={() => setAlbum(a)} className="group flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white text-left shadow-card ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img src={galleryCover(a.id) ?? PHOTO_POOL[0]} alt={a.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent" />
                      <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy">
                        {a.count} {lang === 'ru' ? 'фото' : 'photos'}
                      </span>
                    </div>
                    <div className="flex flex-1 items-center justify-between p-5">
                      <h3 className="font-display text-xl font-bold text-navy transition group-hover:text-teal">{a.title}</h3>
                      <span className="text-sm font-bold text-teal transition group-hover:translate-x-1">{lang === 'ru' ? 'Открыть' : 'View'} →</span>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </>
        ) : (
          <>
            <button onClick={() => setAlbum(null)} className="mb-8 inline-flex items-center gap-1 text-sm font-semibold text-teal hover:text-teal-dark">
              ← {lang === 'ru' ? 'Все альбомы' : 'All albums'}
            </button>
            <h2 className="display text-3xl font-bold text-navy">{album.title}</h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {photos.map((src, i) => (
                <button key={i} onClick={() => setLightbox(i)} className="group overflow-hidden rounded-xl ring-1 ring-line">
                  <img src={src} alt="" loading="lazy" className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105" />
                </button>
              ))}
            </div>
          </>
        )}
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {album && lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <button className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25" aria-label="Close">
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l! - 1 + album.count) % album.count) }}
              className="absolute left-4 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25" aria-label="Previous"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <motion.img
              key={lightbox}
              src={photos[lightbox]}
              alt=""
              initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
              className="max-h-[82vh] max-w-[90vw] rounded-xl object-contain shadow-lift"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox((l) => (l! + 1) % album.count) }}
              className="absolute right-4 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white hover:bg-white/25" aria-label="Next"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
