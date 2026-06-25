import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Reset scroll to top on every route change so each room starts at its hero
// and the scroll-reveal animations trigger as intended.
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}
