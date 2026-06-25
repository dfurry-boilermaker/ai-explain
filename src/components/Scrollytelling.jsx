import { useRef, useState, useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { themes } from '../data/themes.js'
import Icon from './Icon.jsx'
import './Scrollytelling.css'

gsap.registerPlugin(ScrollTrigger)

// GSAP-pinned scrollytelling, the core Polo Club pattern: a sticky visual
// panel stays in view while narrative steps scroll past, each step lighting
// up one pressure with its headline stat. Respects prefers-reduced-motion by
// falling back to a plain stacked list.
export default function Scrollytelling() {
  const root = useRef(null)
  const [step, setStep] = useState(0)

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !root.current) return

    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray('.scrolly-step')
      steps.forEach((el, i) => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onToggle: (self) => self.isActive && setStep(i),
        })
      })
    }, root)

    return () => ctx.revert()
  }, [])

  const activeTheme = themes[step]

  return (
    <section className="scrolly" ref={root} style={{ '--accent': `var(--${activeTheme.slug})` }}>
      {/* Sticky visual panel */}
      <div className="scrolly-sticky">
        <div className="scrolly-stage">
          <p className="eyebrow">Inside one AI answer</p>
          <div className="scrolly-rail" role="presentation">
            {themes.map((t, i) => (
              <span
                key={t.slug}
                className={`scrolly-pill ${i === step ? 'on' : ''} ${i < step ? 'done' : ''}`}
                style={{ '--accent': `var(--${t.slug})` }}
              >
                <Icon name={t.icon} size={18} />
              </span>
            ))}
          </div>

          <div className="scrolly-card" key={activeTheme.slug}>
            <span className="scrolly-card-icon"><Icon name={activeTheme.icon} size={26} /></span>
            <div className="scrolly-bignum">{activeTheme.bigNumber}</div>
            <p className="scrolly-biglabel">{activeTheme.bigNumberLabel}</p>
          </div>
        </div>
      </div>

      {/* Scrolling narrative steps */}
      <div className="scrolly-steps">
        {themes.map((t) => (
          <article className="scrolly-step" key={t.slug} style={{ '--accent': `var(--${t.slug})` }}>
            <p className="eyebrow">{t.title}</p>
            <h2>{t.question}</h2>
            <p className="lead">{t.summary}</p>
            <Link to={`/${t.slug}`} className="scrolly-link">
              Explore {t.title} <Icon name="arrowRight" size={15} />
            </Link>
          </article>
        ))}
      </div>
    </section>
  )
}
