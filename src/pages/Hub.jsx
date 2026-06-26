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
            <Link to="/how-it-works" className="btn grad">
              See how it works <Icon name="arrowRight" size={16} />
            </Link>
            <Link to="/power" className="btn ghost">
              Or explore the five pressures
            </Link>
          </div>
        </div>
        <div className="hub-hero-viz">
          <MachineFlow />
        </div>
      </section>

      {/* ---- Choose a path: concise handoff instead of duplicate explainers ---- */}
      <section className="hub-paths wrap" aria-labelledby="paths-title">
        <Reveal className="hub-paths-head">
          <p className="eyebrow">Start with the map</p>
          <h2 id="paths-title">First understand the machine, then question the world around it.</h2>
          <p className="lead">
            The site now has two layers. One explains what an AI model is doing. The other follows
            the social pressures that shape what it becomes.
          </p>
        </Reveal>
        <div className="path-grid">
          <Reveal as={Link} to="/how-it-works" className="path-card mechanics">
            <span className="path-icon"><Icon name="robot" size={24} /></span>
            <span className="path-kicker">Layer one</span>
            <h3>How it actually works</h3>
            <p>Walk through tokens, prediction, attention, training, and the infrastructure behind the model.</p>
            <span className="path-cta">Open the mechanics <Icon name="arrowRight" size={15} /></span>
          </Reveal>
          <Reveal as="a" href="#explore" className="path-card pressures" delay={80}>
            <span className="path-icon"><Icon name="power" size={24} /></span>
            <span className="path-kicker">Layer two</span>
            <h3>The five hidden pressures</h3>
            <p>Explore power, trust, money, labor, and accountability through short interactive rooms.</p>
            <span className="path-cta">Choose a room <Icon name="arrowRight" size={15} /></span>
          </Reveal>
        </div>
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
