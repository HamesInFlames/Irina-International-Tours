// Scheduled departures keyed to calendar dates (ISO yyyy-mm-dd).
// Mirrors the structure of the original interactive schedule calendar.

export interface Departure {
  date: string
  tourId: string
  soldOut?: boolean
}

export const DEPARTURES: Departure[] = [
  // May 2026
  { date: '2026-05-17', tourId: 'niagara-falls-day' },
  { date: '2026-05-23', tourId: 'thousand-islands-cruise' },
  { date: '2026-05-30', tourId: 'ottawa-quebec-montreal' },
  // June 2026 (mirrors the live calendar)
  { date: '2026-06-01', tourId: 'classic-italy', soldOut: true },
  { date: '2026-06-02', tourId: 'germany-romantic-road' },
  { date: '2026-06-05', tourId: 'turkey-civilizations' },
  { date: '2026-06-14', tourId: 'splendor-of-portugal' },
  { date: '2026-06-15', tourId: 'sardinia-corsica' },
  { date: '2026-06-15', tourId: 'greece-and-islands' },
  { date: '2026-06-20', tourId: 'spirit-of-ontario' },
  { date: '2026-06-26', tourId: 'niagara-falls-day' },
  { date: '2026-06-27', tourId: 'spirit-of-ontario' },
  { date: '2026-06-29', tourId: 'ottawa-quebec-montreal' },
  // July 2026
  { date: '2026-07-04', tourId: 'thousand-islands-cruise' },
  { date: '2026-07-11', tourId: 'atlantic-canada' },
  { date: '2026-07-18', tourId: 'niagara-falls-day' },
  { date: '2026-07-25', tourId: 'washington-dc' },
  // Seasonal anchors
  { date: '2026-09-26', tourId: 'canadian-fall-colours' },
  { date: '2026-12-25', tourId: 'christmas-in-new-york' },
  { date: '2026-12-29', tourId: 'laurentian-new-year' },
]

export const departuresOn = (iso: string) => DEPARTURES.filter((d) => d.date === iso)
