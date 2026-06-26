import { motion } from 'motion/react'
import type { ReactNode } from 'react'
import { img } from '../data/tours'

/** Fade/slide content in as it scrolls into view. */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Section({ children, className = '', tone = 'paper' }: { children: ReactNode; className?: string; tone?: 'paper' | 'white' | 'navy' }) {
  const bg = tone === 'white' ? 'bg-white' : tone === 'navy' ? 'bg-navy text-white' : 'bg-paper'
  return (
    <section className={`${bg} py-16 sm:py-20 ${className}`}>
      <div className="shell">{children}</div>
    </section>
  )
}

export function Eyebrow({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-teal ${className}`}>
      <span className="h-px w-6 bg-teal" />
      {children}
    </span>
  )
}

export function SectionHeading({ eyebrow, title, sub, center, light }: { eyebrow?: string; title: string; sub?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && <Eyebrow className={center ? 'justify-center' : ''}>{eyebrow}</Eyebrow>}
      <h2 className={`display mt-3 text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {sub && <p className={`mt-3 text-lg ${light ? 'text-white/80' : 'text-body'}`}>{sub}</p>}
    </div>
  )
}

/** Full-width page banner with photo + navy gradient overlay. */
export function PageHero({ seed, title, sub, eyebrow, image }: { seed: string; title: string; sub?: string; eyebrow?: string; image?: string }) {
  return (
    <div className="relative isolate overflow-hidden">
      <img src={image ?? img(seed, 1600, 600)} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
      <div className="shell relative py-20 sm:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}>
          {eyebrow && (
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-teal-100/90">
              <span className="h-px w-6 bg-teal" />
              {eyebrow}
            </span>
          )}
          <h1 className="display mt-3 max-w-3xl text-4xl font-bold text-white drop-shadow sm:text-5xl">{title}</h1>
          {sub && <p className="mt-4 max-w-xl text-lg text-white/85">{sub}</p>}
        </motion.div>
      </div>
    </div>
  )
}

export function TrustBadges({ light = false }: { light?: boolean }) {
  const base = light ? 'border-white/25 text-white/90' : 'border-line text-body'
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className={`flex items-center gap-2 rounded-full border ${base} px-4 py-2 text-sm font-semibold`}>
        <span className="text-gold">★</span> TICO Reg. No. 50007929
      </span>
      <span className={`flex items-center gap-2 rounded-full border ${base} px-4 py-2 text-sm font-semibold`}>
        <span className="text-gold">✓</span> BBB Accredited
      </span>
      <span className={`flex items-center gap-2 rounded-full border ${base} px-4 py-2 text-sm font-semibold`}>
        <span className="text-gold">⌛</span> Since 1989
      </span>
    </div>
  )
}
