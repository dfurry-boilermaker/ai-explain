import { useEffect, useRef, useState } from 'react'
import './Reveal.css'

// Fades + lifts children into view when they scroll into the viewport.
// Honors prefers-reduced-motion by showing content immediately.
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', style = {}, ...rest }) {
  const ref = useRef(null)
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [shown, setShown] = useState(reduced)

  useEffect(() => {
    if (reduced || shown) return
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [reduced, shown])

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? 'is-shown' : ''} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
