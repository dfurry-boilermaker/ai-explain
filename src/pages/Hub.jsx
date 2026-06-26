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
            <Link to="/invest" className="btn grad">
              Follow the money <Icon name="arrowRight" size={16} />
            </Link>
            <Link to="/how-it-works" className="btn ghost">
              See how it works
            </Link>
          </div>
        </div>
        <div className="hub-hero-viz">
          <MachineFlow />
        </div>
      </section>

      {/* ---- Choose a path ---- */}
      <section className="hub-paths wrap" aria-labelledby="paths-title">
        <Reveal className="hub-paths-head">
          <p className="eyebrow">Three ways in</p>
          <h2 id="paths-title">Follow the money, learn the machine, or question its impact.</h2>
          <p className="lead">
            Trillions are flowing into the AI build-out. Trace where that money goes and who
            profits — then go deeper on how the technology works and the pressures it creates.
          </p>
        </Reveal>
        <div className="path-grid path-grid-3">
          <Reveal as={Link} to="/invest" className="path-card invest">
            <span className="path-icon"><Icon name="money" size={24} /></span>
            <span className="path-kicker">The build-out</span>
            <h3>Follow the money</h3>
            <p>Trace AI capital down the value chain, meet the public tickers, and learn the investing ideas behind the boom.</p>
            <span className="path-cta">Trace the money <Icon name="arrowRight" size={15} /></span>
          </Reveal>
          <Reveal as={Link} to="/how-it-works" className="path-card mechanics" delay={70}>
            <span className="path-icon"><Icon name="robot" size={24} /></span>
            <span className="path-kicker">The mechanics</span>
            <h3>How it actually works</h3>
            <p>Walk through tokens, prediction, attention, training, and the infrastructure behind the model.</p>
            <span className="path-cta">Open the mechanics <Icon name="arrowRight" size={15} /></span>
          </Reveal>
          <Reveal as="a" href="#explore" className="path-card pressures" delay={140}>
            <span className="path-icon"><Icon name="power" size={24} /></span>
            <span className="path-kicker">The impact</span>
            <h3>The five pressures</h3>
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
