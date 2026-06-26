// Photo gallery albums. Albums mirror the original site; images are on-brand
// local SVG placeholders — replace with the client's real trip photography.
import { placeholder } from './placeholder'

export interface Album {
  id: string
  title: string
  count: number
}

export const ALBUMS: Album[] = [
  { id: 'niagara-falls', title: 'Niagara Falls', count: 12 },
  { id: 'toronto', title: 'Toronto', count: 10 },
  { id: 'french-canada', title: 'French Canada', count: 14 },
  { id: 'atlantic-provinces', title: 'Atlantic Provinces', count: 11 },
  { id: 'british-columbia', title: 'British Columbia', count: 9 },
  { id: 'italy', title: 'Italy', count: 16 },
  { id: 'uae', title: 'United Arab Emirates', count: 8 },
]

export const albumImg = (albumId: string, i: number, w = 600, h = 600) =>
  placeholder(`${albumId}-${i}`, w, h)

export const albumById = (id: string) => ALBUMS.find((a) => a.id === id)
