// Shared bilingual formatters — one source of truth for every surface that
// shows a tour duration or price (schedule list, tour cards, tour detail).

/** "1 day" / "3 days" with Russian plural rules («1 день», «3 дня», «8 дней»). */
export function daysLabel(n: number, lang: string) {
  if (lang !== 'ru') return n === 1 ? '1 day' : `${n} days`
  const mod10 = n % 10
  const mod100 = n % 100
  if (mod10 === 1 && mod100 !== 11) return `${n} день`
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} дня`
  return `${n} дней`
}

/** "$2,390" in English; "$2 390" in Russian, where a comma reads as a decimal separator. */
export function fmtPrice(n: number, lang: string) {
  return `$${n.toLocaleString(lang === 'ru' ? 'ru-RU' : 'en-CA')}`
}
