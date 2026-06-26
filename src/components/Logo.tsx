import { Link } from 'react-router-dom'
import { LOGO } from '../data/media'

export function Logo() {
  return (
    <Link to="/" className="group inline-flex items-center" aria-label="Irina International Tours — home">
      <img
        src={LOGO}
        alt="Irina International Tours"
        className="h-11 w-auto transition-transform group-hover:scale-[1.02] sm:h-12"
      />
    </Link>
  )
}
