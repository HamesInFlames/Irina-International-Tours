// Photo gallery albums. Albums mirror the original site; images are on-brand
// local SVG placeholders — replace with the client's real trip photography.
import { placeholder } from './placeholder'

export interface Album {
  id: string
  title: string
  titleRu: string
  count: number
}

export const ALBUMS: Album[] = [
  { id: 'niagara-falls', title: 'Niagara Falls', titleRu: 'Ниагарский водопад', count: 12 },
  { id: 'toronto', title: 'Toronto', titleRu: 'Торонто', count: 10 },
  { id: 'french-canada', title: 'French Canada', titleRu: 'Французская Канада', count: 14 },
  { id: 'atlantic-provinces', title: 'Atlantic Provinces', titleRu: 'Атлантические провинции', count: 11 },
  { id: 'british-columbia', title: 'British Columbia', titleRu: 'Британская Колумбия', count: 9 },
  { id: 'italy', title: 'Italy', titleRu: 'Италия', count: 16 },
  { id: 'uae', title: 'United Arab Emirates', titleRu: 'ОАЭ', count: 8 },
]

export const albumTitle = (a: Album, lang: string) => (lang === 'ru' ? a.titleRu : a.title)

export const albumImg = (albumId: string, i: number, w = 600, h = 600) =>
  placeholder(`${albumId}-${i}`, w, h)

export const albumById = (id: string) => ALBUMS.find((a) => a.id === id)
