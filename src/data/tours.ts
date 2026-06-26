// Mock tour data for the Irina International Tours replica.
// Content modelled on the real torontotrip.com listings; prices in CAD.
// Each tour carries English fields plus a `ru` override block so the language
// toggle localises names, summaries, itineraries, inclusions and departure.
// Images are on-brand local SVG placeholders / real site photos — see media.ts.
import { placeholder } from './placeholder'

export type Category = 'daily' | 'canada' | 'usa' | 'italy' | 'english' | 'world' | 'seasonal'

export interface ItineraryDay {
  title: string
  body: string
}

/** Fields that have a Russian translation. */
export interface Localizable {
  name: string
  region: string
  summary: string
  departurePoint: string
  itinerary: ItineraryDay[]
  included: string[]
  excluded: string[]
}

export interface Tour extends Localizable {
  id: string
  category: Category
  days: number
  priceDouble: number
  priceSingle?: number
  language?: string
  featured?: boolean
  ru: Localizable
}

/** Return a tour with its fields in the requested language. */
export function loc(t: Tour, lang: string): Tour {
  return lang === 'ru' ? { ...t, ...t.ru } : t
}

export const CATEGORIES: { id: Category; label: string; labelRu: string; blurb: string; blurbRu: string }[] = [
  { id: 'daily', label: 'Daily Tours', labelRu: 'Однодневные туры', blurb: 'Toronto, Niagara Falls & 1000 Islands day trips.', blurbRu: 'Однодневные поездки: Торонто, Ниагара и «Тысяча островов».' },
  { id: 'canada', label: 'Canada Tours', labelRu: 'Туры по Канаде', blurb: 'Eastern & Western Canada, fully escorted.', blurbRu: 'Восточная и Западная Канада, с полным сопровождением.' },
  { id: 'usa', label: 'USA Tours', labelRu: 'Туры по США', blurb: 'New York, Washington, the South & beyond.', blurbRu: 'Нью-Йорк, Вашингтон, юг и не только.' },
  { id: 'italy', label: 'Italy (groups from Toronto)', labelRu: 'Италия (группы из Торонто)', blurb: 'Guided Italian journeys departing Toronto.', blurbRu: 'Путешествия по Италии с гидом, вылет из Торонто.' },
  { id: 'english', label: 'English Tours', labelRu: 'Туры на английском', blurb: 'Tours guided in English.', blurbRu: 'Туры с гидом на английском языке.' },
  { id: 'world', label: 'Best Destinations in the World', labelRu: 'Лучшие направления мира', blurb: 'Europe, Asia & the South Pacific.', blurbRu: 'Европа, Азия и Южная часть Тихого океана.' },
]

export function img(id: string, w = 800, h = 520) {
  return placeholder(id, w, h)
}

export const TOURS: Tour[] = [
  {
    id: 'niagara-falls-day',
    category: 'daily',
    days: 1,
    priceDouble: 110,
    featured: true,
    name: 'Niagara Falls Day Tour',
    region: 'Ontario, Canada',
    summary: 'The classic day trip to one of the natural wonders of the world — falls, wine country and Niagara-on-the-Lake.',
    departurePoint: 'Steeles Ave & Dufferin St (near Starbucks)',
    itinerary: [
      { title: 'Morning', body: 'Depart Toronto and travel along the scenic Niagara Parkway. Stop at the Floral Clock and the Whirlpool Rapids.' },
      { title: 'Midday', body: 'Arrive at the Falls for free time, an optional Hornblower cruise and lunch overlooking the Horseshoe Falls.' },
      { title: 'Afternoon', body: 'Visit Niagara-on-the-Lake and a local winery for an icewine tasting before returning to Toronto.' },
    ],
    included: ['Comfortable motorcoach', 'Professional guide', 'All taxes'],
    excluded: ['Meals', 'Optional cruise & tastings', 'Gratuities'],
    ru: {
      name: 'Однодневный тур на Ниагарский водопад',
      region: 'Онтарио, Канада',
      summary: 'Классическая однодневная поездка к одному из природных чудес света — водопады, винный край и Ниагара-он-те-Лейк.',
      departurePoint: 'Steeles Ave и Dufferin St (рядом со Starbucks)',
      itinerary: [
        { title: 'Утро', body: 'Отправление из Торонто по живописной Ниагарской аллее. Остановка у Цветочных часов и порогов Уирлпул.' },
        { title: 'День', body: 'Прибытие к водопаду: свободное время, по желанию круиз Hornblower и обед с видом на водопад «Подкова».' },
        { title: 'После обеда', body: 'Посещение Ниагара-он-те-Лейк и местной винодельни с дегустацией ледяного вина, затем возвращение в Торонто.' },
      ],
      included: ['Комфортабельный автобус', 'Профессиональный гид', 'Все налоги'],
      excluded: ['Питание', 'Круиз и дегустации (по желанию)', 'Чаевые'],
    },
  },
  {
    id: 'thousand-islands-cruise',
    category: 'daily',
    days: 1,
    priceDouble: 135,
    featured: true,
    name: '1000 Islands Cruise & Tour',
    region: 'Ontario, Canada',
    summary: 'A relaxing day on the St. Lawrence River with a sightseeing cruise through the famous Thousand Islands.',
    departurePoint: 'Steeles Ave & Dufferin St (near Starbucks)',
    itinerary: [
      { title: 'Morning', body: 'Scenic drive east toward Gananoque with commentary on the region’s history.' },
      { title: 'Midday', body: 'Board a sightseeing cruise weaving between hundreds of islands, including Boldt Castle.' },
      { title: 'Afternoon', body: 'Free time in Gananoque before the return journey to Toronto.' },
    ],
    included: ['Motorcoach', 'Sightseeing cruise', 'Guide', 'Taxes'],
    excluded: ['Meals', 'Boldt Castle admission', 'Gratuities'],
    ru: {
      name: 'Круиз и тур «Тысяча островов»',
      region: 'Онтарио, Канада',
      summary: 'Спокойный день на реке Святого Лаврентия с обзорным круизом по знаменитому архипелагу «Тысяча островов».',
      departurePoint: 'Steeles Ave и Dufferin St (рядом со Starbucks)',
      itinerary: [
        { title: 'Утро', body: 'Живописная дорога на восток в сторону Гананоке с рассказом об истории региона.' },
        { title: 'День', body: 'Обзорный круиз между сотнями островов, включая замок Болдт.' },
        { title: 'После обеда', body: 'Свободное время в Гананоке, затем возвращение в Торонто.' },
      ],
      included: ['Автобус', 'Обзорный круиз', 'Гид', 'Налоги'],
      excluded: ['Питание', 'Вход в замок Болдт', 'Чаевые'],
    },
  },
  {
    id: 'spirit-of-ontario',
    category: 'canada',
    days: 1,
    priceDouble: 125,
    name: 'Spirit of Ontario — Mennonite Country',
    region: 'Ontario, Canada',
    summary: 'A journey into the land of the Mennonites — St. Jacobs, farmers’ markets and rolling countryside.',
    departurePoint: 'Steeles Ave & Dufferin St (near Starbucks)',
    itinerary: [
      { title: 'Full day', body: 'Travel to St. Jacobs to explore the village, the farmers’ market and Mennonite heritage sites with a knowledgeable guide.' },
    ],
    included: ['Motorcoach', 'Guide', 'Taxes'],
    excluded: ['Meals', 'Gratuities'],
    ru: {
      name: 'Дух Онтарио — страна меннонитов',
      region: 'Онтарио, Канада',
      summary: 'Путешествие в страну меннонитов — Сент-Джейкобс, фермерские рынки и живописные сельские пейзажи.',
      departurePoint: 'Steeles Ave и Dufferin St (рядом со Starbucks)',
      itinerary: [
        { title: 'Весь день', body: 'Поездка в Сент-Джейкобс: знакомство с деревней, фермерским рынком и наследием меннонитов в сопровождении опытного гида.' },
      ],
      included: ['Автобус', 'Гид', 'Налоги'],
      excluded: ['Питание', 'Чаевые'],
    },
  },
  {
    id: 'ottawa-quebec-montreal',
    category: 'canada',
    days: 3,
    priceDouble: 545,
    priceSingle: 745,
    featured: true,
    name: 'Ottawa · Quebec City · Montreal',
    region: 'Ontario & Quebec, Canada',
    summary: 'Three days through Canada’s capital and the romantic cities of French Canada.',
    departurePoint: '1 Promenade Circle (Bathurst & Centre St), T&T Supermarket',
    itinerary: [
      { title: 'Day 1 — Ottawa', body: 'Depart Toronto for Ottawa. Tour Parliament Hill, the Rideau Canal and the ByWard Market.' },
      { title: 'Day 2 — Quebec City', body: 'Continue to Quebec City. Walking tour of Old Quebec, Château Frontenac and Place Royale.' },
      { title: 'Day 3 — Montreal', body: 'Explore Old Montreal and Notre-Dame Basilica before the return to Toronto.' },
    ],
    included: ['Motorcoach', '2 nights 3★/4★ hotel', '2 breakfasts', 'Tour director', 'Taxes'],
    excluded: ['Lunches & dinners', 'Admissions', 'Gratuities', 'Insurance'],
    ru: {
      name: 'Оттава · Квебек · Монреаль',
      region: 'Онтарио и Квебек, Канада',
      summary: 'Три дня по столице Канады и романтическим городам Французской Канады.',
      departurePoint: '1 Promenade Circle (Bathurst и Centre St), супермаркет T&T',
      itinerary: [
        { title: 'День 1 — Оттава', body: 'Отправление из Торонто в Оттаву. Парламентский холм, канал Ридо и рынок Байуорд.' },
        { title: 'День 2 — Квебек', body: 'Переезд в город Квебек. Пешеходная экскурсия по Старому Квебеку, замок Фронтенак и площадь Руаяль.' },
        { title: 'День 3 — Монреаль', body: 'Старый Монреаль и базилика Нотр-Дам, затем возвращение в Торонто.' },
      ],
      included: ['Автобус', '2 ночи в отеле 3★/4★', '2 завтрака', 'Руководитель тура', 'Налоги'],
      excluded: ['Обеды и ужины', 'Входные билеты', 'Чаевые', 'Страховка'],
    },
  },
  {
    id: 'atlantic-canada',
    category: 'canada',
    days: 9,
    priceDouble: 2390,
    priceSingle: 3090,
    name: 'Atlantic Canada & the Maritimes',
    region: 'Nova Scotia · PEI · New Brunswick',
    summary: 'Lighthouses, lobster and the Cabot Trail across Canada’s beautiful east coast.',
    departurePoint: '1 Promenade Circle (Bathurst & Centre St), T&T Supermarket',
    itinerary: [
      { title: 'Days 1–3', body: 'Travel east through Quebec to New Brunswick — Hopewell Rocks and the Bay of Fundy tides.' },
      { title: 'Days 4–6', body: 'Nova Scotia: Halifax, Peggy’s Cove and the Cabot Trail on Cape Breton Island.' },
      { title: 'Days 7–9', body: 'Prince Edward Island and the return across the Confederation Bridge to Toronto.' },
    ],
    included: ['Motorcoach', '8 nights hotels', '8 breakfasts', 'Tour director', 'Taxes'],
    excluded: ['Most meals', 'Admissions', 'Gratuities', 'Insurance'],
    ru: {
      name: 'Атлантическая Канада и Приморье',
      region: 'Новая Шотландия · ОПЭ · Нью-Брансуик',
      summary: 'Маяки, лобстеры и трасса Кабота вдоль прекрасного восточного побережья Канады.',
      departurePoint: '1 Promenade Circle (Bathurst и Centre St), супермаркет T&T',
      itinerary: [
        { title: 'Дни 1–3', body: 'Путь на восток через Квебек в Нью-Брансуик — скалы Хоупвелл и приливы залива Фанди.' },
        { title: 'Дни 4–6', body: 'Новая Шотландия: Галифакс, Пегги-Ков и трасса Кабота на острове Кейп-Бретон.' },
        { title: 'Дни 7–9', body: 'Остров Принца Эдуарда и возвращение по мосту Конфедерации в Торонто.' },
      ],
      included: ['Автобус', '8 ночей в отелях', '8 завтраков', 'Руководитель тура', 'Налоги'],
      excluded: ['Большинство приёмов пищи', 'Входные билеты', 'Чаевые', 'Страховка'],
    },
  },
  {
    id: 'christmas-in-new-york',
    category: 'usa',
    days: 4,
    priceDouble: 920,
    priceSingle: 1220,
    featured: true,
    language: 'Russian',
    name: 'Christmas in New York',
    region: 'New York, USA',
    summary: 'Four festive days in Manhattan — Rockefeller Center, Fifth Avenue and the lights of Times Square.',
    departurePoint: '1 Promenade Circle (Bathurst & Centre St), T&T Supermarket',
    itinerary: [
      { title: 'Day 1', body: 'Early departure from Toronto (7am), border crossing and a scenic drive through New York and Pennsylvania with guide commentary. Hotel check-in on arrival in NYC.' },
      { title: 'Day 2', body: 'Breakfast, then a panoramic city tour — Downtown Manhattan, Wall Street, the Hudson ferry, Museum Mile and free time in Midtown.' },
      { title: 'Day 3', body: 'Breakfast, then Rockefeller Center observation deck, Lincoln Center, Fifth Avenue, the UN, Central Park and free time at Times Square.' },
      { title: 'Day 4', body: 'Breakfast, return journey with a lunch stop, border crossing and arrival in Toronto by 10pm.' },
    ],
    included: ['Comfortable bus', '3 nights hotel', '3 breakfasts', 'Russian-speaking guide', 'All taxes'],
    excluded: ['Meals beyond breakfast', 'Personal expenses', 'Gratuities', 'Travel & medical insurance'],
    ru: {
      name: 'Рождество в Нью-Йорке',
      region: 'Нью-Йорк, США',
      summary: 'Четыре праздничных дня на Манхэттене — Рокфеллер-центр, Пятая авеню и огни Таймс-сквер.',
      departurePoint: '1 Promenade Circle (Bathurst и Centre St), супермаркет T&T',
      itinerary: [
        { title: 'День 1', body: 'Ранний выезд из Торонто (7:00), пересечение границы и живописная дорога через штаты Нью-Йорк и Пенсильвания с рассказом гида. Заселение в отель по прибытии в Нью-Йорк.' },
        { title: 'День 2', body: 'Завтрак, затем обзорная экскурсия — Нижний Манхэттен, Уолл-стрит, паром через Гудзон, Музейная миля и свободное время в Мидтауне.' },
        { title: 'День 3', body: 'Завтрак, смотровая площадка Рокфеллер-центра, Линкольн-центр, Пятая авеню, ООН, Центральный парк и свободное время на Таймс-сквер.' },
        { title: 'День 4', body: 'Завтрак, обратная дорога с остановкой на обед, пересечение границы и прибытие в Торонто к 22:00.' },
      ],
      included: ['Комфортабельный автобус', '3 ночи в отеле', '3 завтрака', 'Русскоязычный гид', 'Все налоги'],
      excluded: ['Питание, кроме завтраков', 'Личные расходы', 'Чаевые', 'Туристическая и медицинская страховка'],
    },
  },
  {
    id: 'washington-dc',
    category: 'usa',
    days: 4,
    priceDouble: 880,
    priceSingle: 1180,
    name: 'Washington DC & Philadelphia',
    region: 'USA',
    summary: 'The monuments of the US capital and the birthplace of American independence.',
    departurePoint: '1 Promenade Circle (Bathurst & Centre St), T&T Supermarket',
    itinerary: [
      { title: 'Day 1', body: 'Depart Toronto toward Philadelphia with overnight en route.' },
      { title: 'Day 2', body: 'Philadelphia — Independence Hall and the Liberty Bell, then on to Washington DC.' },
      { title: 'Day 3', body: 'Full day in Washington: the National Mall, Capitol, White House and Smithsonian museums.' },
      { title: 'Day 4', body: 'Return journey to Toronto.' },
    ],
    included: ['Motorcoach', '3 nights hotel', '3 breakfasts', 'Tour director', 'Taxes'],
    excluded: ['Most meals', 'Admissions', 'Gratuities', 'Insurance'],
    ru: {
      name: 'Вашингтон и Филадельфия',
      region: 'США',
      summary: 'Монументы столицы США и колыбель американской независимости.',
      departurePoint: '1 Promenade Circle (Bathurst и Centre St), супермаркет T&T',
      itinerary: [
        { title: 'День 1', body: 'Отправление из Торонто в сторону Филадельфии с ночёвкой в пути.' },
        { title: 'День 2', body: 'Филадельфия — Индепенденс-холл и Колокол Свободы, затем переезд в Вашингтон.' },
        { title: 'День 3', body: 'Целый день в Вашингтоне: Национальная аллея, Капитолий, Белый дом и музеи Смитсоновского института.' },
        { title: 'День 4', body: 'Возвращение в Торонто.' },
      ],
      included: ['Автобус', '3 ночи в отеле', '3 завтрака', 'Руководитель тура', 'Налоги'],
      excluded: ['Большинство приёмов пищи', 'Входные билеты', 'Чаевые', 'Страховка'],
    },
  },
  {
    id: 'classic-italy',
    category: 'italy',
    days: 10,
    priceDouble: 3290,
    priceSingle: 4090,
    featured: true,
    name: 'Classic Italy — Rome, Florence & Venice',
    region: 'Italy',
    summary: 'A grand tour of Italy’s three iconic cities, in a group departing from Toronto.',
    departurePoint: 'Group flight from Toronto Pearson (YYZ)',
    itinerary: [
      { title: 'Days 1–4 — Rome', body: 'The Colosseum, Roman Forum, Vatican Museums, St. Peter’s Basilica and the Trevi Fountain.' },
      { title: 'Days 5–7 — Florence & Tuscany', body: 'Renaissance Florence, the Duomo, Uffizi and a day in the Tuscan hills.' },
      { title: 'Days 8–10 — Venice', body: 'St. Mark’s Square, a gondola experience and the islands of the lagoon before the flight home.' },
    ],
    included: ['Return group flights', '9 nights hotels', 'Daily breakfast', 'Tour director', 'Coach transfers'],
    excluded: ['Most lunches & dinners', 'Admissions', 'Gratuities', 'Insurance'],
    ru: {
      name: 'Классическая Италия — Рим, Флоренция и Венеция',
      region: 'Италия',
      summary: 'Большое путешествие по трём знаковым городам Италии в группе с вылетом из Торонто.',
      departurePoint: 'Групповой вылет из аэропорта Торонто Пирсон (YYZ)',
      itinerary: [
        { title: 'Дни 1–4 — Рим', body: 'Колизей, Римский форум, музеи Ватикана, собор Святого Петра и фонтан Треви.' },
        { title: 'Дни 5–7 — Флоренция и Тоскана', body: 'Ренессансная Флоренция, Дуомо, галерея Уффици и день среди тосканских холмов.' },
        { title: 'Дни 8–10 — Венеция', body: 'Площадь Сан-Марко, прогулка на гондоле и острова лагуны перед вылетом домой.' },
      ],
      included: ['Групповые авиабилеты туда-обратно', '9 ночей в отелях', 'Завтрак каждый день', 'Руководитель тура', 'Трансферы на автобусе'],
      excluded: ['Большинство обедов и ужинов', 'Входные билеты', 'Чаевые', 'Страховка'],
    },
  },
  {
    id: 'splendor-of-portugal',
    category: 'world',
    days: 11,
    priceDouble: 3590,
    priceSingle: 4490,
    name: 'The Splendor of Portugal & Madeira',
    region: 'Portugal',
    summary: 'Lisbon, Porto and the flower island of Madeira on a relaxed escorted journey.',
    departurePoint: 'Group flight from Toronto Pearson (YYZ)',
    itinerary: [
      { title: 'Days 1–4 — Lisbon', body: 'Belém Tower, Jerónimos Monastery, Sintra and the coast at Cascais.' },
      { title: 'Days 5–7 — Porto & the Douro', body: 'Port wine cellars and a Douro Valley river cruise.' },
      { title: 'Days 8–11 — Madeira', body: 'Funchal, levada walks and the dramatic cliffs of Cabo Girão.' },
    ],
    included: ['Return group flights', '10 nights hotels', 'Daily breakfast', 'Tour director'],
    excluded: ['Most meals', 'Admissions', 'Gratuities', 'Insurance'],
    ru: {
      name: 'Великолепие Португалии и Мадейры',
      region: 'Португалия',
      summary: 'Лиссабон, Порту и цветущий остров Мадейра в неспешном туре с сопровождением.',
      departurePoint: 'Групповой вылет из аэропорта Торонто Пирсон (YYZ)',
      itinerary: [
        { title: 'Дни 1–4 — Лиссабон', body: 'Башня Белен, монастырь Жеронимуш, Синтра и побережье Кашкайша.' },
        { title: 'Дни 5–7 — Порту и Дору', body: 'Винные погреба портвейна и круиз по долине реки Дору.' },
        { title: 'Дни 8–11 — Мадейра', body: 'Фуншал, прогулки вдоль левад и впечатляющие скалы Кабу-Жиран.' },
      ],
      included: ['Групповые авиабилеты туда-обратно', '10 ночей в отелях', 'Завтрак каждый день', 'Руководитель тура'],
      excluded: ['Большинство приёмов пищи', 'Входные билеты', 'Чаевые', 'Страховка'],
    },
  },
  {
    id: 'greece-and-islands',
    category: 'world',
    days: 10,
    priceDouble: 3390,
    priceSingle: 4190,
    name: 'Greece & the Islands',
    region: 'Greece',
    summary: 'Ancient Athens and the Aegean — Mykonos and Santorini at their most beautiful.',
    departurePoint: 'Group flight from Toronto Pearson (YYZ)',
    itinerary: [
      { title: 'Days 1–3 — Athens', body: 'The Acropolis, Parthenon and the Plaka district.' },
      { title: 'Days 4–6 — Mykonos', body: 'Whitewashed lanes, windmills and Aegean beaches.' },
      { title: 'Days 7–10 — Santorini', body: 'Caldera views, Oia sunsets and the return flight home.' },
    ],
    included: ['Return group flights', '9 nights hotels', 'Daily breakfast', 'Ferries', 'Tour director'],
    excluded: ['Most meals', 'Admissions', 'Gratuities', 'Insurance'],
    ru: {
      name: 'Греция и острова',
      region: 'Греция',
      summary: 'Древние Афины и Эгейское море — Миконос и Санторини во всей красе.',
      departurePoint: 'Групповой вылет из аэропорта Торонто Пирсон (YYZ)',
      itinerary: [
        { title: 'Дни 1–3 — Афины', body: 'Акрополь, Парфенон и район Плака.' },
        { title: 'Дни 4–6 — Миконос', body: 'Белоснежные улочки, ветряные мельницы и пляжи Эгейского моря.' },
        { title: 'Дни 7–10 — Санторини', body: 'Виды на кальдеру, закаты в Ие и обратный вылет домой.' },
      ],
      included: ['Групповые авиабилеты туда-обратно', '9 ночей в отелях', 'Завтрак каждый день', 'Паромы', 'Руководитель тура'],
      excluded: ['Большинство приёмов пищи', 'Входные билеты', 'Чаевые', 'Страховка'],
    },
  },
  {
    id: 'turkey-civilizations',
    category: 'world',
    days: 12,
    priceDouble: 3190,
    priceSingle: 3990,
    name: 'Turkey — In the Footsteps of Great Civilizations',
    region: 'Turkey',
    summary: 'Istanbul, Cappadocia and the ancient cities of Anatolia.',
    departurePoint: 'Group flight from Toronto Pearson (YYZ)',
    itinerary: [
      { title: 'Days 1–4 — Istanbul', body: 'Hagia Sophia, the Blue Mosque, Topkapi Palace and the Grand Bazaar.' },
      { title: 'Days 5–8 — Cappadocia', body: 'Fairy chimneys, cave churches and an optional hot-air balloon flight.' },
      { title: 'Days 9–12 — Aegean coast', body: 'Ephesus, Pamukkale and the return home.' },
    ],
    included: ['Return group flights', '11 nights hotels', 'Daily breakfast', 'Tour director'],
    excluded: ['Most meals', 'Balloon flight', 'Gratuities', 'Insurance'],
    ru: {
      name: 'Турция — по следам великих цивилизаций',
      region: 'Турция',
      summary: 'Стамбул, Каппадокия и древние города Анатолии.',
      departurePoint: 'Групповой вылет из аэропорта Торонто Пирсон (YYZ)',
      itinerary: [
        { title: 'Дни 1–4 — Стамбул', body: 'Айя-София, Голубая мечеть, дворец Топкапы и Гранд-базар.' },
        { title: 'Дни 5–8 — Каппадокия', body: 'Каменные «дымоходы фей», пещерные церкви и полёт на воздушном шаре (по желанию).' },
        { title: 'Дни 9–12 — Эгейское побережье', body: 'Эфес, Памуккале и возвращение домой.' },
      ],
      included: ['Групповые авиабилеты туда-обратно', '11 ночей в отелях', 'Завтрак каждый день', 'Руководитель тура'],
      excluded: ['Большинство приёмов пищи', 'Полёт на шаре', 'Чаевые', 'Страховка'],
    },
  },
  {
    id: 'germany-romantic-road',
    category: 'world',
    days: 9,
    priceDouble: 2990,
    priceSingle: 3690,
    name: "Germany's Romantic Road",
    region: 'Germany',
    summary: 'Bavaria’s storybook towns, castles and the Alps.',
    departurePoint: 'Group flight from Toronto Pearson (YYZ)',
    itinerary: [
      { title: 'Days 1–3 — Munich', body: 'Marienplatz, the English Garden and a Bavarian evening.' },
      { title: 'Days 4–6 — Romantic Road', body: 'Rothenburg ob der Tauber, Würzburg and medieval walled towns.' },
      { title: 'Days 7–9 — The Alps', body: 'Neuschwanstein Castle and the foothills of the Alps before the flight home.' },
    ],
    included: ['Return group flights', '8 nights hotels', 'Daily breakfast', 'Tour director'],
    excluded: ['Most meals', 'Admissions', 'Gratuities', 'Insurance'],
    ru: {
      name: 'Романтическая дорога Германии',
      region: 'Германия',
      summary: 'Сказочные городки Баварии, замки и Альпы.',
      departurePoint: 'Групповой вылет из аэропорта Торонто Пирсон (YYZ)',
      itinerary: [
        { title: 'Дни 1–3 — Мюнхен', body: 'Мариенплац, Английский сад и баварский вечер.' },
        { title: 'Дни 4–6 — Романтическая дорога', body: 'Ротенбург-об-дер-Таубер, Вюрцбург и средневековые города-крепости.' },
        { title: 'Дни 7–9 — Альпы', body: 'Замок Нойшванштайн и предгорья Альп перед вылетом домой.' },
      ],
      included: ['Групповые авиабилеты туда-обратно', '8 ночей в отелях', 'Завтрак каждый день', 'Руководитель тура'],
      excluded: ['Большинство приёмов пищи', 'Входные билеты', 'Чаевые', 'Страховка'],
    },
  },
  {
    id: 'sardinia-corsica',
    category: 'italy',
    days: 11,
    priceDouble: 3790,
    priceSingle: 4690,
    name: 'Luxurious Islands of Italy & France (Sardinia–Corsica)',
    region: 'Italy & France',
    summary: 'The Mediterranean’s most beautiful islands — beaches, citadels and coastal drives.',
    departurePoint: 'Group flight from Toronto Pearson (YYZ)',
    itinerary: [
      { title: 'Days 1–5 — Sardinia', body: 'Cagliari, the Costa Smeralda and ancient nuraghe sites.' },
      { title: 'Days 6–11 — Corsica', body: 'Bonifacio’s cliffs, Ajaccio and the mountain interior before the flight home.' },
    ],
    included: ['Return group flights', 'Inter-island ferry', '10 nights hotels', 'Daily breakfast', 'Tour director'],
    excluded: ['Most meals', 'Admissions', 'Gratuities', 'Insurance'],
    ru: {
      name: 'Роскошные острова Италии и Франции (Сардиния–Корсика)',
      region: 'Италия и Франция',
      summary: 'Красивейшие острова Средиземноморья — пляжи, цитадели и прибрежные дороги.',
      departurePoint: 'Групповой вылет из аэропорта Торонто Пирсон (YYZ)',
      itinerary: [
        { title: 'Дни 1–5 — Сардиния', body: 'Кальяри, Коста-Смеральда и древние памятники нураги.' },
        { title: 'Дни 6–11 — Корсика', body: 'Скалы Бонифачо, Аяччо и горная глубинка перед вылетом домой.' },
      ],
      included: ['Групповые авиабилеты туда-обратно', 'Паром между островами', '10 ночей в отелях', 'Завтрак каждый день', 'Руководитель тура'],
      excluded: ['Большинство приёмов пищи', 'Входные билеты', 'Чаевые', 'Страховка'],
    },
  },
  {
    id: 'laurentian-new-year',
    category: 'seasonal',
    days: 3,
    priceDouble: 690,
    priceSingle: 920,
    featured: true,
    name: "New Year's Eve in the Laurentian Mountains",
    region: 'Quebec, Canada',
    summary: 'Ring in the New Year in a Quebec mountain resort — snow, festivities and a gala dinner.',
    departurePoint: '1 Promenade Circle (Bathurst & Centre St), T&T Supermarket',
    itinerary: [
      { title: 'Day 1', body: 'Depart Toronto for the Laurentians; check in to the mountain resort.' },
      { title: 'Day 2 — New Year’s Eve', body: 'Free time for skiing and spa, followed by a festive gala dinner and celebration.' },
      { title: 'Day 3', body: 'Mont-Tremblant village and the return to Toronto.' },
    ],
    included: ['Motorcoach', '2 nights resort', '2 breakfasts', 'Gala dinner', 'Tour director'],
    excluded: ['Lift tickets', 'Other meals', 'Gratuities', 'Insurance'],
    ru: {
      name: 'Новый год в Лаврентийских горах',
      region: 'Квебек, Канада',
      summary: 'Встретьте Новый год на горном курорте Квебека — снег, праздник и гала-ужин.',
      departurePoint: '1 Promenade Circle (Bathurst и Centre St), супермаркет T&T',
      itinerary: [
        { title: 'День 1', body: 'Отправление из Торонто в Лаврентийские горы; заселение на горный курорт.' },
        { title: 'День 2 — Канун Нового года', body: 'Свободное время для лыж и спа, затем праздничный гала-ужин и встреча Нового года.' },
        { title: 'День 3', body: 'Деревня Мон-Тремблан и возвращение в Торонто.' },
      ],
      included: ['Автобус', '2 ночи на курорте', '2 завтрака', 'Гала-ужин', 'Руководитель тура'],
      excluded: ['Ски-пассы', 'Прочее питание', 'Чаевые', 'Страховка'],
    },
  },
  {
    id: 'canadian-fall-colours',
    category: 'seasonal',
    days: 4,
    priceDouble: 760,
    priceSingle: 1020,
    name: 'Canadian Fall Colours',
    region: 'Ontario & Quebec, Canada',
    summary: 'Algonquin Park and the Laurentians ablaze with autumn maple.',
    departurePoint: '1 Promenade Circle (Bathurst & Centre St), T&T Supermarket',
    itinerary: [
      { title: 'Day 1', body: 'Depart Toronto for Algonquin Provincial Park — the heart of the fall colour season.' },
      { title: 'Days 2–3', body: 'Scenic drives, lookout walks and the Laurentian Mountains in full autumn colour.' },
      { title: 'Day 4', body: 'Ottawa highlights and the return to Toronto.' },
    ],
    included: ['Motorcoach', '3 nights hotels', '3 breakfasts', 'Tour director', 'Taxes'],
    excluded: ['Most meals', 'Admissions', 'Gratuities', 'Insurance'],
    ru: {
      name: 'Осенние краски Канады',
      region: 'Онтарио и Квебек, Канада',
      summary: 'Парк Алгонкин и Лаврентийские горы в пылающих красках осеннего клёна.',
      departurePoint: '1 Promenade Circle (Bathurst и Centre St), супермаркет T&T',
      itinerary: [
        { title: 'День 1', body: 'Отправление из Торонто в провинциальный парк Алгонкин — сердце осеннего сезона красок.' },
        { title: 'Дни 2–3', body: 'Живописные дороги, прогулки к смотровым площадкам и Лаврентийские горы в полном осеннем убранстве.' },
        { title: 'День 4', body: 'Достопримечательности Оттавы и возвращение в Торонто.' },
      ],
      included: ['Автобус', '3 ночи в отелях', '3 завтрака', 'Руководитель тура', 'Налоги'],
      excluded: ['Большинство приёмов пищи', 'Входные билеты', 'Чаевые', 'Страховка'],
    },
  },
]

export const tourById = (id: string) => TOURS.find((t) => t.id === id)
export const toursByCategory = (c: Category) => TOURS.filter((t) => t.category === c)
export const featuredTours = () => TOURS.filter((t) => t.featured)
