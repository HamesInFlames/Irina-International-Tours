import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Packages } from './pages/Packages'
import { TourDetail } from './pages/TourDetail'
import { Schedule } from './pages/Schedule'
import { Seasonal } from './pages/Seasonal'
import { Flights } from './pages/Flights'
import { Insurance } from './pages/Insurance'
import { Contact } from './pages/Contact'
import { Gallery } from './pages/Gallery'
import { Feedback } from './pages/Feedback'
import { Information } from './pages/Information'
import { Policy } from './pages/Policy'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:category" element={<Packages />} />
        <Route path="/tour/:id" element={<TourDetail />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/seasonal" element={<Seasonal />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/information" element={<Information />} />
        <Route path="/privacy" element={<Policy kind="privacy" />} />
        <Route path="/terms" element={<Policy kind="terms" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
