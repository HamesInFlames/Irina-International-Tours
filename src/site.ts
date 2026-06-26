// Single source of truth for company contact details used across the site.
export const SITE = {
  name: 'Irina International Tours',
  shortName: 'IITours',
  phone: '416-736-0937',
  phoneHref: 'tel:+14167360937',
  email: 'tours@iitour.ca',
  emailHref: 'mailto:tours@iitour.ca',
  address: {
    line1: '7851 Dufferin St., Unit #202',
    line2: 'Thornhill, ON  L4J 3M4',
  },
  tico: 'TICO Reg. No. 50007929',
  facebook: 'https://www.facebook.com/IITAGENCY#',
  instagram: 'https://www.instagram.com/ii_tours',
  founded: 1989,
}

export const NAV = [
  { to: '/about', key: 'nav.about' },
  { to: '/packages', key: 'nav.packages' },
  { to: '/schedule', key: 'nav.schedule' },
  { to: '/seasonal', key: 'nav.seasonal' },
  { to: '/flights', key: 'nav.flights' },
  { to: '/insurance', key: 'nav.insurance' },
  { to: '/contact', key: 'nav.contact' },
] as const
