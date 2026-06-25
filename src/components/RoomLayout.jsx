import { Link } from 'react-router-dom'
import { getTheme, themes } from '../data/themes.js'
import Reveal from './Reveal.jsx'
import Sources from './Sources.jsx'
import GoDeeper from './GoDeeper.jsx'
import Icon from './Icon.jsx'
import './RoomLayout.css'

// Shared chrome for every theme room: header with the one big number,
// the interactive "reveal" slot, sources, the plain-language takeaway,
// and next/prev navigation so the five rooms feel like a connected tour.
export default function RoomLayout({ slug, children }) {
  const theme = getTheme(slug)
  const idx = themes.findIndex((t) => t.slug === slug)
  const next = themes[(idx + 1) % themes.length]
  const prev = themes[(idx - 1 + themes.length) % themes.length]

  return (
    <div className="room" style={{ '--accent': theme.accent }}>
      <header className="room-top wrap">
        <Link to="/" className="room-wordmark gradient-text">The Invisible Machine</Link>
        <div className="room-top-right">
          <span className="room-step">{String(idx + 1).padStart(2, '0')} / {String(themes.length).padStart(2, '0')}</span>
          <Link to="/" className="back">
            <Icon name="arrowLeft" size={15} /> All topics
          </Link>
        </div>
      </header>

      <section className="room-hero wrap">
        <div className="room-hero-copy">
          <span className="room-icon" aria-hidden="true">
            <Icon name={theme.icon} size={28} />
          </span>
          <p className="eyebrow" style={{ color: theme.accent }}>{theme.title}</p>
          <h1>{theme.question}</h1>
          <p className="lead">{theme.summary}</p>
        </div>
        <aside className="room-context-card">
          <p className="eyebrow">Hidden pressure</p>
          <p className="room-lens">{theme.lens}</p>
          <div className="room-try">
            <span>In this room</span>
            <p>{theme.tryThis}</p>
          </div>
          <div className="big-number">
            <span className="big-number-value">{theme.bigNumber}</span>
            <span className="big-number-label">{theme.bigNumberLabel}</span>
          </div>
        </aside>
      </section>

      <section className="room-stage wrap">
        <Reveal>{children}</Reveal>
        {theme.analogy && (
          <Reveal delay={60}>
            <aside className="room-analogy">
              <span className="room-analogy-tag">Think of it like…</span>
              <p>{theme.analogy}</p>
            </aside>
          </Reveal>
        )}
        <Reveal delay={80}>
          <Sources sources={theme.sources} />
        </Reveal>
      </section>

      <div className="room-deeper wrap">
        <Reveal>
          <GoDeeper items={theme.goDeeper} accent={theme.accent} />
        </Reveal>
      </div>

      <Reveal as="section" className="room-ask wrap">
        <p className="eyebrow">Ask yourself</p>
        <p className="ask-q">“{theme.askYourself}”</p>
      </Reveal>

      <nav className="room-nav wrap">
        <Link to={`/${prev.slug}`} className="room-nav-link">
          <span><Icon name="arrowLeft" size={16} /> {prev.title}</span>
          <small>{prev.question}</small>
        </Link>
        <Link to={`/${next.slug}`} className="room-nav-link right">
          <span>{next.title} <Icon name="arrowRight" size={16} /></span>
          <small>{next.question}</small>
        </Link>
      </nav>

      <div className="room-end wrap">
        <Link to="/what-you-can-do" className="btn">
          Finish: what you can do <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </div>
  )
}
