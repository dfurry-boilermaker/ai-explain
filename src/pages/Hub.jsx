import { Link } from 'react-router-dom'
import { themes } from '../data/themes.js'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import MachineFlow from '../components/MachineFlow.jsx'
import Scrollytelling from '../components/Scrollytelling.jsx'
import './Hub.css'

export default function Hub() {
  return (
    <main className="hub">
      {/* ---- Top bar: gradient wordmark, like the reference ---- */}
      <header className="hub-bar wrap">
        <span className="wordmark gradient-text">The Invisible Machine</span>
        <nav className="hub-bar-nav">
          <Link to="/how-it-works" className="hub-bar-link">
            How it works
          </Link>
          <Link to="/what-you-can-do" className="hub-bar-link">
            The checklist <Icon name="arrowRight" size={14} />
          </Link>
        </nav>
      </header>

      {/* ---- Hero: copy + live flow visualization ---- */}
      <section className="hub-hero wrap">
        <div className="hub-hero-copy">
          <p className="eyebrow">An interactive explainer for everyone</p>
          <h1>
            AI’s hardest problems are <span className="gradient-text">human.</span>
          </h1>
          <p className="lead">
            The chatbot is only the surface. Every answer it gives passes through five forces you
            never see — <strong>power</strong>, <strong>trust</strong>, <strong>money</strong>,{' '}
            <strong>labor</strong>, and <strong>accountability</strong>. Look inside the machine.
          </p>
          <div className="hub-actions">
            <Link to="/power" className="btn grad">
              Start the tour <Icon name="arrowRight" size={16} />
            </Link>
            <Link to="/how-it-works" className="btn ghost">
              First, how does it work?
            </Link>
          </div>
        </div>
        <div className="hub-hero-viz">
          <MachineFlow />
        </div>
      </section>

      {/* ---- Scrollytelling: pinned visual + stepping narrative ---- */}
      <div className="hub-scrolly wrap">
        <Scrollytelling />
      </div>

      {/* ---- Doors grid ---- */}
      <section className="hub-grid wrap" id="explore">
        <Reveal>
          <p className="eyebrow">Five rooms</p>
          <h2>Open any door and look underneath.</h2>
        </Reveal>
        <div className="hub-doors">
          {themes.map((t, i) => (
            <Reveal
              as={Link}
              key={t.slug}
              delay={i * 60}
              to={`/${t.slug}`}
              className="door"
              style={{ '--accent': `var(--${t.slug})` }}
            >
              <span className="door-icon" aria-hidden="true">
                <Icon name={t.icon} size={24} />
              </span>
              <h3>{t.title}</h3>
              <p className="door-q">{t.question}</p>
              <p className="door-sum">{t.summary}</p>
              <span className="door-cta">
                Explore <Icon name="arrowRight" size={15} />
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Closing ---- */}
      <footer className="hub-foot wrap">
        <Reveal>
          <h2>
            The question isn’t “is this AI smart?”
          </h2>
          <p className="lead">
            It’s: <strong>who built it, what is it optimizing for, who benefits, whose labor is
            hidden, and who’s responsible when it’s wrong?</strong>
          </p>
          <Link to="/power" className="btn grad">
            Start with Power <Icon name="arrowRight" size={16} />
          </Link>
        </Reveal>
      </footer>
    </main>
  )
}
