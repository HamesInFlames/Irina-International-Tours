// Real image assets pulled from the original torontotrip.com site (the client's
// own photography), served from /public/original. Where a specific photo exists
// we use it; otherwise components fall back to the generated placeholder().

const P = '/original'

export const LOGO = `${P}/iit-logo.jpg`
export const SLOGAN = `${P}/slogan.png`
export const OWNER = `${P}/irina-headshot.png`
export const TICO = `${P}/tico.jpg`

// Language flags (original site assets)
export const FLAG: Record<'en' | 'ru', string> = {
  en: `${P}/eng.jpg`,
  ru: `${P}/rus.jpg`,
}

// Tour-detail info icons (original site assets)
export const ICON = {
  cal: `${P}/ico-cal.jpg`,
  location: `${P}/ico-location.jpg`,
  price: `${P}/ico-price.jpg`,
  time: `${P}/ico-time.jpg`,
}

// Homepage hero slideshow (Niagara / scenic) + page banners
export const HERO_SLIDES = [
  `${P}/slide_KIMAflYV8A.jpg`,
  `${P}/slide_veVBLbrm5v.jpg`,
  `${P}/slide_exDxl8zZJQ.jpg`,
]
export const SKYLINE = `${P}/toronto.jpg`
export const BANNER = `${P}/level_2_bg_AB3nIFjcEQ.jpg`
export const FLIGHTS_IMG = `${P}/flights.jpg`
export const INSURANCE_IMG = `${P}/insurance.jpg`

// Package categories → original subsection covers
const CATEGORY_PHOTO: Record<string, string> = {
  daily: `${P}/subsect_tbn_UI63zGFm8K.jpg`,
  canada: `${P}/subsect_tbn_AK8FTHewxH.jpg`,
  usa: `${P}/subsect_tbn_yoScbk3nR8.jpg`,
  italy: `${P}/subsect_tbn_xXFETO1DBv.jpg`,
  english: `${P}/subsect_tbn_5DKfFtu9zP.jpg`,
  world: `${P}/subsect_tbn_tC20SRUllu.jpg`,
  seasonal: `${P}/subsect_tbn_Qb6Ud6xTs2.jpg`,
}
export const categoryPhoto = (id: string): string | undefined => CATEGORY_PHOTO[id]

// Gallery albums → original album covers
const GALLERY_COVER: Record<string, string> = {
  'niagara-falls': `${P}/gallery_tbn_hGNwyiPHpY.jpg`,
  toronto: `${P}/gallery_tbn_qgmnjliN19.jpg`,
  'french-canada': `${P}/gallery_tbn_hoM7diIDTC.jpg`,
  'atlantic-provinces': `${P}/gallery_tbn_D5qLlclivf.jpg`,
  'british-columbia': `${P}/gallery_tbn_r8CeR71piT.jpg`,
  italy: `${P}/gallery_tbn_vMRPgkf6OO.jpg`,
  uae: `${P}/gallery_tbn_kFpzygPM15.jpg`,
}
export const galleryCover = (id: string): string | undefined => GALLERY_COVER[id]

// A pool of all real photos — used to fill gallery album interiors and other
// tiles with genuine imagery rather than placeholders.
export const PHOTO_POOL: string[] = [
  ...Object.values(GALLERY_COVER),
  ...HERO_SLIDES,
  SKYLINE,
  `${P}/product_tbn_WL0PCImNs2.jpg`,
  `${P}/product_tbn_LQ6gpfcucS.jpg`,
  `${P}/subsect_tbn_R36bNj7oCd.jpg`,
]

// Specific tour photos where the original had one; otherwise use the tour's
// category photo so every card still shows a real regional image.
const TOUR_PHOTO: Record<string, string> = {
  'christmas-in-new-york': `${P}/product_tbn_WL0PCImNs2.jpg`,
  'niagara-falls-day': GALLERY_COVER['niagara-falls'],
  'thousand-islands-cruise': `${P}/product_tbn_LQ6gpfcucS.jpg`,
  'classic-italy': GALLERY_COVER.italy,
  'sardinia-corsica': GALLERY_COVER.italy,
  'atlantic-canada': GALLERY_COVER['atlantic-provinces'],
  'ottawa-quebec-montreal': GALLERY_COVER['french-canada'],
}
export const tourPhoto = (id: string, category?: string): string | undefined =>
  TOUR_PHOTO[id] ?? (category ? CATEGORY_PHOTO[category] : undefined)
