// Self-contained, offline image placeholders rendered as inline SVG data URIs.
// Deterministic per seed so the same tour/album always gets the same artwork.
// Replace <img> sources with real photography before launch — see research/NOTES.md.

// Curated travel-toned gradient pairs (on-brand: navy / teal / coral family).
const PAIRS: [string, string][] = [
  ['#114581', '#1ba4c4'], // navy → teal
  ['#1ba4c4', '#7fd1e0'], // teal → sky
  ['#0d3666', '#2f7fb8'], // deep blue
  ['#e9513c', '#f4a261'], // coral → sand (sunset)
  ['#16708a', '#1ba4c4'], // sea
  ['#1b5ca8', '#6fb1e0'], // sky blue
  ['#114581', '#4b3f72'], // dusk
  ['#2a8c7a', '#7fd1b0'], // forest/lake
]

function hash(str: string): number {
  let h = 2166136261
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return Math.abs(h)
}

/** A branded landscape gradient with a faint sun/horizon motif. */
export function placeholder(seed: string, w = 800, h = 520): string {
  const hv = hash(seed)
  const [c1, c2] = PAIRS[hv % PAIRS.length]
  const angle = (hv % 4) * 30
  const sunX = 20 + (hv % 60)
  const sunY = 24 + (hv % 22)
  const horizon = 62 + (hv % 18)

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 100 65" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="g" gradientTransform="rotate(${angle})">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="100" height="65" fill="url(#g)"/>
  <circle cx="${sunX}" cy="${sunY}" r="9" fill="#ffffff" opacity="0.18"/>
  <circle cx="${sunX}" cy="${sunY}" r="5" fill="#ffffff" opacity="0.22"/>
  <path d="M0 ${horizon} Q25 ${horizon - 8} 50 ${horizon} T100 ${horizon - 4} V65 H0 Z" fill="#000000" opacity="0.12"/>
  <path d="M0 ${horizon + 3} Q30 ${horizon - 3} 60 ${horizon + 4} T100 ${horizon} V65 H0 Z" fill="#000000" opacity="0.16"/>
</svg>`

  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}
