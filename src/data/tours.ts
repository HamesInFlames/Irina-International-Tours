// Mock tour data for the Irina International Tours replica.
// Content modelled on the real torontotrip.com listings; prices in CAD.
// Images are on-brand local SVG placeholders — swap for real photography before launch.
import { placeholder } from './placeholder'

export type Category = 'daily' | 'canada' | 'usa' | 'italy' | 'english' | 'world' | 'seasonal'

export interface ItineraryDay {
  title: string
  body: string
}

export interface Tour {
  id: string
  name: string
  category: Category
  region: string
  summary: string
  days: number
  priceDouble: number
  priceSingle?: number
  departurePoint: string
  language?: string
  itinerary: ItineraryDay[]
  included: string[]
  excluded: string[]
  featured?: boolean
}

export const CATEGORIES: { id: Category; label: string; blurb: string }[] = [
  { id: 'daily', label: 'Daily Tours', blurb: 'Toronto, Niagara Falls & 1000 Islands day trips.' },
  { id: 'canada', label: 'Canada Tours', blurb: 'Eastern & Western Canada, fully escorted.' },
  { id: 'usa', label: 'USA Tours', blurb: 'New York, Washington, the South & beyond.' },
  { id: 'italy', label: 'Italy (groups from Toronto)', blurb: 'Guided Italian journeys departing Toronto.' },
  { id: 'english', label: 'English Tours', blurb: 'Tours guided in English.' },
  { id: 'world', label: 'Best Destinations in the World', blurb: 'Europe, Asia & the South Pacific.' },
]

export function img(id: string, w = 800, h = 520) {
  return placeholder(id, w, h)
}

export const TOURS: Tour[] = [
  {
    id: 'niagara-falls-day',
    name: 'Niagara Falls Day Tour',
    category: 'daily',
    region: 'Ontario, Canada',
    summary: 'The classic day trip to one of the natural wonders of the world — falls, wine country and Niagara-on-the-Lake.',
    days: 1,
    priceDouble: 110,
    departurePoint: 'Steeles Ave & Dufferin St (near Starbucks)',
    itinerary: [
      { title: 'Morning', body: 'Depart Toronto and travel along the scenic Niagara Parkway. Stop at the Floral Clock and the Whirlpool Rapids.' },
      { title: 'Midday', body: 'Arrive at the Falls for free time, an optional Hornblower cruise and lunch overlooking the Horseshoe Falls.' },
      { title: 'Afternoon', body: 'Visit Niagara-on-the-Lake and a local winery for an icewine tasting before returning to Toronto.' },
    ],
    included: ['Comfortable motorcoach', 'Professional guide', 'All taxes'],
    excluded: ['Meals', 'Optional cruise & tastings', 'Gratuities'],
    featured: true,
  },
  {
    id: 'thousand-islands-cruise',
    name: '1000 Islands Cruise & Tour',
    category: 'daily',
    region: 'Ontario, Canada',
    summary: 'A relaxing day on the St. Lawrence River with a sightseeing cruise through the famous Thousand Islands.',
    days: 1,
    priceDouble: 135,
    departurePoint: 'Steeles Ave & Dufferin St (near Starbucks)',
    itinerary: [
      { title: 'Morning', body: 'Scenic drive east toward Gananoque with commentary on the region’s history.' },
      { title: 'Midday', body: 'Board a sightseeing cruise weaving between hundreds of islands, including Boldt Castle.' },
      { title: 'Afternoon', body: 'Free time in Gananoque before the return journey to Toronto.' },
    ],
    included: ['Motorcoach', 'Sightseeing cruise', 'Guide', 'Taxes'],
    excluded: ['Meals', 'Boldt Castle admission', 'Gratuities'],
    featured: true,
  },
  {
    id: 'spirit-of-ontario',
    name: 'Spirit of Ontario — Mennonite Country',
    category: 'canada',
    region: 'Ontario, Canada',
    summary: 'A journey into the land of the Mennonites — St. Jacobs, farmers’ markets and rolling countryside.',
    days: 1,
    priceDouble: 125,
    departurePoint: 'Steeles Ave & Dufferin St (near Starbucks)',
    itinerary: [
      { title: 'Full day', body: 'Travel to St. Jacobs to explore the village, the farmers’ market and Mennonite heritage sites with a knowledgeable guide.' },
    ],
    included: ['Motorcoach', 'Guide', 'Taxes'],
    excluded: ['Meals', 'Gratuities'],
  },
  {
    id: 'ottawa-quebec-montreal',
    name: 'Ottawa · Quebec City · Montreal',
    category: 'canada',
    region: 'Ontario & Quebec, Canada',
    summary: 'Three days through Canada’s capital and the romantic cities of French Canada.',
    days: 3,
    priceDouble: 545,
    priceSingle: 745,
    departurePoint: '1 Promenade Circle (Bathurst & Centre St), T&T Supermarket',
    itinerary: [
      { title: 'Day 1 — Ottawa', body: 'Depart Toronto for Ottawa. Tour Parliament Hill, the Rideau Canal and the ByWard Market.' },
      { title: 'Day 2 — Quebec City', body: 'Continue to Quebec City. Walking tour of Old Quebec, Château Frontenac and Place Royale.' },
      { title: 'Day 3 — Montreal', body: 'Explore Old Montreal and Notre-Dame Basilica before the return to Toronto.' },
    ],
    included: ['Motorcoach', '2 nights 3★/4★ hotel', '2 breakfasts', 'Tour director', 'Taxes'],
    excluded: ['Lunches & dinners', 'Admissions', 'Gratuities', 'Insurance'],
    featured: true,
  },
  {
    id: 'atlantic-canada',
    name: 'Atlantic Canada & the Maritimes',
    category: 'canada',
    region: 'Nova Scotia · PEI · New Brunswick',
    summary: 'Lighthouses, lobster and the Cabot Trail across Canada’s beautiful east coast.',
    days: 9,
    priceDouble: 2390,
    priceSingle: 3090,
    departurePoint: '1 Promenade Circle (Bathurst & Centre St), T&T Supermarket',
    itinerary: [
      { title: 'Days 1–3', body: 'Travel east through Quebec to New Brunswick — Hopewell Rocks and the Bay of Fundy tides.' },
      { title: 'Days 4–6', body: 'Nova Scotia: Halifax, Peggy’s Cove and the Cabot Trail on Cape Breton Island.' },
      { title: 'Days 7–9', body: 'Prince Edward Island and the return across the Confederation Bridge to Toronto.' },
    ],
    included: ['Motorcoach', '8 nights hotels', '8 breakfasts', 'Tour director', 'Taxes'],
    excluded: ['Most meals', 'Admissions', 'Gratuities', 'Insurance'],
  },
  {
    id: 'christmas-in-new-york',
    name: 'Christmas in New York',
    category: 'usa',
    region: 'New York, USA',
    summary: 'Four festive days in Manhattan — Rockefeller Center, Fifth Avenue and the lights of Times Square.',
    days: 4,
    priceDouble: 920,
    priceSingle: 1220,
    departurePoint: '1 Promenade Circle (Bathurst & Centre St), T&T Supermarket',
    language: 'Russian',
    itinerary: [
      { title: 'Day 1', body: 'Early departure from Toronto (7am), border crossing and a scenic drive through New York and Pennsylvania with guide commentary. Hotel check-in on arrival in NYC.' },
      { title: 'Day 2', body: 'Breakfast, then a panoramic city tour — Downtown Manhattan, Wall Street, the Hudson ferry, Museum Mile and free time in Midtown.' },
      { title: 'Day 3', body: 'Breakfast, then Rockefeller Center observation deck, Lincoln Center, Fifth Avenue, the UN, Central Park and free time at Times Square.' },
      { title: 'Day 4', body: 'Breakfast, return journey with a lunch stop, border crossing and arrival in Toronto by 10pm.' },
    ],
    included: ['Comfortable bus', '3 nights hotel', '3 breakfasts', 'Russian-speaking guide', 'All taxes'],
    excluded: ['Meals beyond breakfast', 'Personal expenses', 'Gratuities', 'Travel & medical insurance'],
    featured: true,
  },
  {
    id: 'washington-dc',
    name: 'Washington DC & Philadelphia',
    category: 'usa',
    region: 'USA',
    summary: 'The monuments of the US capital and the birthplace of American independence.',
    days: 4,
    priceDouble: 880,
    priceSingle: 1180,
    departurePoint: '1 Promenade Circle (Bathurst & Centre St), T&T Supermarket',
    itinerary: [
      { title: 'Day 1', body: 'Depart Toronto toward Philadelphia with overnight en route.' },
      { title: 'Day 2', body: 'Philadelphia — Independence Hall and the Liberty Bell, then on to Washington DC.' },
      { title: 'Day 3', body: 'Full day in Washington: the National Mall, Capitol, White House and Smithsonian museums.' },
      { title: 'Day 4', body: 'Return journey to Toronto.' },
    ],
    included: ['Motorcoach', '3 nights hotel', '3 breakfasts', 'Tour director', 'Taxes'],
    excluded: ['Most meals', 'Admissions', 'Gratuities', 'Insurance'],
  },
  {
    id: 'classic-italy',
    name: 'Classic Italy — Rome, Florence & Venice',
    category: 'italy',
    region: 'Italy',
    summary: 'A grand tour of Italy’s three iconic cities, in a group departing from Toronto.',
    days: 10,
    priceDouble: 3290,
    priceSingle: 4090,
    departurePoint: 'Group flight from Toronto Pearson (YYZ)',
    itinerary: [
      { title: 'Days 1–4 — Rome', body: 'The Colosseum, Roman Forum, Vatican Museums, St. Peter’s Basilica and the Trevi Fountain.' },
      { title: 'Days 5–7 — Florence & Tuscany', body: 'Renaissance Florence, the Duomo, Uffizi and a day in the Tuscan hills.' },
      { title: 'Days 8–10 — Venice', body: 'St. Mark’s Square, a gondola experience and the islands of the lagoon before the flight home.' },
    ],
    included: ['Return group flights', '9 nights hotels', 'Daily breakfast', 'Tour director', 'Coach transfers'],
    excluded: ['Most lunches & dinners', 'Admissions', 'Gratuities', 'Insurance'],
    featured: true,
  },
  {
    id: 'splendor-of-portugal',
    name: 'The Splendor of Portugal & Madeira',
    category: 'world',
    region: 'Portugal',
    summary: 'Lisbon, Porto and the flower island of Madeira on a relaxed escorted journey.',
    days: 11,
    priceDouble: 3590,
    priceSingle: 4490,
    departurePoint: 'Group flight from Toronto Pearson (YYZ)',
    itinerary: [
      { title: 'Days 1–4 — Lisbon', body: 'Belém Tower, Jerónimos Monastery, Sintra and the coast at Cascais.' },
      { title: 'Days 5–7 — Porto & the Douro', body: 'Port wine cellars and a Douro Valley river cruise.' },
      { title: 'Days 8–11 — Madeira', body: 'Funchal, levada walks and the dramatic cliffs of Cabo Girão.' },
    ],
    included: ['Return group flights', '10 nights hotels', 'Daily breakfast', 'Tour director'],
    excluded: ['Most meals', 'Admissions', 'Gratuities', 'Insurance'],
  },
  {
    id: 'greece-and-islands',
    name: 'Greece & the Islands',
    category: 'world',
    region: 'Greece',
    summary: 'Ancient Athens and the Aegean — Mykonos and Santorini at their most beautiful.',
    days: 10,
    priceDouble: 3390,
    priceSingle: 4190,
    departurePoint: 'Group flight from Toronto Pearson (YYZ)',
    itinerary: [
      { title: 'Days 1–3 — Athens', body: 'The Acropolis, Parthenon and the Plaka district.' },
      { title: 'Days 4–6 — Mykonos', body: 'Whitewashed lanes, windmills and Aegean beaches.' },
      { title: 'Days 7–10 — Santorini', body: 'Caldera views, Oia sunsets and the return flight home.' },
    ],
    included: ['Return group flights', '9 nights hotels', 'Daily breakfast', 'Ferries', 'Tour director'],
    excluded: ['Most meals', 'Admissions', 'Gratuities', 'Insurance'],
  },
  {
    id: 'turkey-civilizations',
    name: 'Turkey — In the Footsteps of Great Civilizations',
    category: 'world',
    region: 'Turkey',
    summary: 'Istanbul, Cappadocia and the ancient cities of Anatolia.',
    days: 12,
    priceDouble: 3190,
    priceSingle: 3990,
    departurePoint: 'Group flight from Toronto Pearson (YYZ)',
    itinerary: [
      { title: 'Days 1–4 — Istanbul', body: 'Hagia Sophia, the Blue Mosque, Topkapi Palace and the Grand Bazaar.' },
      { title: 'Days 5–8 — Cappadocia', body: 'Fairy chimneys, cave churches and an optional hot-air balloon flight.' },
      { title: 'Days 9–12 — Aegean coast', body: 'Ephesus, Pamukkale and the return home.' },
    ],
    included: ['Return group flights', '11 nights hotels', 'Daily breakfast', 'Tour director'],
    excluded: ['Most meals', 'Balloon flight', 'Gratuities', 'Insurance'],
  },
  {
    id: 'germany-romantic-road',
    name: "Germany's Romantic Road",
    category: 'world',
    region: 'Germany',
    summary: 'Bavaria’s storybook towns, castles and the Alps.',
    days: 9,
    priceDouble: 2990,
    priceSingle: 3690,
    departurePoint: 'Group flight from Toronto Pearson (YYZ)',
    itinerary: [
      { title: 'Days 1–3 — Munich', body: 'Marienplatz, the English Garden and a Bavarian evening.' },
      { title: 'Days 4–6 — Romantic Road', body: 'Rothenburg ob der Tauber, Würzburg and medieval walled towns.' },
      { title: 'Days 7–9 — The Alps', body: 'Neuschwanstein Castle and the foothills of the Alps before the flight home.' },
    ],
    included: ['Return group flights', '8 nights hotels', 'Daily breakfast', 'Tour director'],
    excluded: ['Most meals', 'Admissions', 'Gratuities', 'Insurance'],
  },
  {
    id: 'sardinia-corsica',
    name: 'Luxurious Islands of Italy & France (Sardinia–Corsica)',
    category: 'italy',
    region: 'Italy & France',
    summary: 'The Mediterranean’s most beautiful islands — beaches, citadels and coastal drives.',
    days: 11,
    priceDouble: 3790,
    priceSingle: 4690,
    departurePoint: 'Group flight from Toronto Pearson (YYZ)',
    itinerary: [
      { title: 'Days 1–5 — Sardinia', body: 'Cagliari, the Costa Smeralda and ancient nuraghe sites.' },
      { title: 'Days 6–11 — Corsica', body: 'Bonifacio’s cliffs, Ajaccio and the mountain interior before the flight home.' },
    ],
    included: ['Return group flights', 'Inter-island ferry', '10 nights hotels', 'Daily breakfast', 'Tour director'],
    excluded: ['Most meals', 'Admissions', 'Gratuities', 'Insurance'],
  },
  {
    id: 'laurentian-new-year',
    name: "New Year's Eve in the Laurentian Mountains",
    category: 'seasonal',
    region: 'Quebec, Canada',
    summary: 'Ring in the New Year in a Quebec mountain resort — snow, festivities and a gala dinner.',
    days: 3,
    priceDouble: 690,
    priceSingle: 920,
    departurePoint: '1 Promenade Circle (Bathurst & Centre St), T&T Supermarket',
    itinerary: [
      { title: 'Day 1', body: 'Depart Toronto for the Laurentians; check in to the mountain resort.' },
      { title: 'Day 2 — New Year’s Eve', body: 'Free time for skiing and spa, followed by a festive gala dinner and celebration.' },
      { title: 'Day 3', body: 'Mont-Tremblant village and the return to Toronto.' },
    ],
    included: ['Motorcoach', '2 nights resort', '2 breakfasts', 'Gala dinner', 'Tour director'],
    excluded: ['Lift tickets', 'Other meals', 'Gratuities', 'Insurance'],
    featured: true,
  },
  {
    id: 'canadian-fall-colours',
    name: 'Canadian Fall Colours',
    category: 'seasonal',
    region: 'Ontario & Quebec, Canada',
    summary: 'Algonquin Park and the Laurentians ablaze with autumn maple.',
    days: 4,
    priceDouble: 760,
    priceSingle: 1020,
    departurePoint: '1 Promenade Circle (Bathurst & Centre St), T&T Supermarket',
    itinerary: [
      { title: 'Day 1', body: 'Depart Toronto for Algonquin Provincial Park — the heart of the fall colour season.' },
      { title: 'Days 2–3', body: 'Scenic drives, lookout walks and the Laurentian Mountains in full autumn colour.' },
      { title: 'Day 4', body: 'Ottawa highlights and the return to Toronto.' },
    ],
    included: ['Motorcoach', '3 nights hotels', '3 breakfasts', 'Tour director', 'Taxes'],
    excluded: ['Most meals', 'Admissions', 'Gratuities', 'Insurance'],
  },
]

export const tourById = (id: string) => TOURS.find((t) => t.id === id)
export const toursByCategory = (c: Category) => TOURS.filter((t) => t.category === c)
export const featuredTours = () => TOURS.filter((t) => t.featured)
