import { Link } from 'react-router-dom'
import { themes } from '../data/themes.js'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import MachineFlow from '../components/MachineFlow.jsx'
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
          <Link to="/invest" className="hub-bar-link accent">
            The build-out <Icon name="arrowRight" size={14} />
          </Link>
        </nav>
      </header>

      {/* ---- Hero = the choice. Three paths are the main landing. ---- */}
      <section className="hub-choice wrap" aria-labelledby="choice-title">
        <div className="hub-choice-head">
          <p className="eyebrow">An interactive explainer for everyone</p>
          <h1 id="choice-title">
            Follow the money, learn the machine, or{' '}
            <span className="gradient-text">question its impact.</span>
          </h1>
          <p className="lead">
            Trillions are flowing into the AI build-out. Pick a way in — trace where the money goes
            and who profits, see how the technology actually works, or weigh the pressures it
            creates. No technical background needed.
          </p>
        </div>

        <div className="path-grid path-grid-3 hub-choice-grid">
          <Link to="/invest" className="path-card invest">
            <span className="path-icon"><Icon name="money" size={26} /></span>
            <span className="path-kicker">Follow the money</span>
            <h3>The AI build-out</h3>
            <p>Trace AI capital down the value chain, meet the public tickers, and learn the investing ideas behind the boom.</p>
            <span className="path-cta">Trace the money <Icon name="arrowRight" size={15} /></span>
          </Link>
          <Link to="/how-it-works" className="path-card mechanics">
            <span className="path-icon"><Icon name="robot" size={26} /></span>
            <span className="path-kicker">Learn the machine</span>
            <h3>How it actually works</h3>
            <p>Walk through tokens, prediction, attention, training, and the infrastructure behind the model.</p>
            <span className="path-cta">Open the mechanics <Icon name="arrowRight" size={15} /></span>
          </Link>
          <a href="#explore" className="path-card pressures">
            <span className="path-icon"><Icon name="power" size={26} /></span>
            <span className="path-kicker">Question its impact</span>
            <h3>The five pressures</h3>
            <p>Explore power, trust, money, labor, and accountability through short interactive rooms.</p>
            <span className="path-cta">Choose a room <Icon name="arrowRight" size={15} /></span>
          </a>
        </div>
      </section>

      {/* ---- Supporting system view ---- */}
      <section className="hub-system wrap">
        <Reveal className="hub-system-copy">
          <p className="eyebrow">The whole system, at a glance</p>
          <h2>Every answer passes through five hidden forces.</h2>
          <p className="lead">
            The chatbot is only the surface. Hover the machine to see what sits underneath each
            reply — the same pressures the rooms below explore in depth.
          </p>
        </Reveal>
        <Reveal className="hub-system-viz" delay={80}>
          <MachineFlow />
        </Reveal>
      </section>

      {/* ---- Doors grid ---- */}
      <section className="hub-grid wrap" id="explore">
        <Reveal>
          <p className="eyebrow">Five rooms</p>
          <h2>Choose one pressure to inspect first.</h2>
          <p className="lead">
            Each room has one interaction, a few sourced claims, and a question to carry into the
            next AI tool you use.
          </p>
        </Reveal>
        <div className="hub-doors">
          {themes.map((t, i) => (
            <Reveal
              as={Link}
              key={t.slug}
              delay={i * 60}
              to={`/${t.slug}`}
              className="door"
              style={{ '--accent': t.accent }}
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
            The point is not to become cynical.
          </h2>
          <p className="lead">
            It is to ask better questions: <strong>who built it, what is it optimizing for, who
            benefits, whose labor is hidden, and who’s responsible when it’s wrong?</strong>
          </p>
          <div className="hub-foot-actions">
            <Link to="/what-you-can-do" className="btn grad">
              Get the checklist <Icon name="arrowRight" size={16} />
            </Link>
            <Link to="/power" className="btn ghost">Start with Power</Link>
          </div>
        </Reveal>
      </footer>
    </main>
  )
}
