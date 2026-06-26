import { Link } from 'react-router-dom'
import { investingConcepts, etfs, NOT_ADVICE } from '../data/buildout.js'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import ValueChain from '../components/invest/ValueChain.jsx'
import CapexChart from '../components/invest/CapexChart.jsx'
import PortfolioBuilder from '../components/invest/PortfolioBuilder.jsx'
import Concentration from '../components/invest/Concentration.jsx'
import './Invest.css'

export default function Invest() {
  return (
    <main className="inv">
      <header className="inv-top wrap">
        <Link to="/" className="room-wordmark gradient-text">The Invisible Machine</Link>
        <Link to="/" className="back"><Icon name="arrowLeft" size={15} /> All topics</Link>
      </header>

      {/* ---- Hero ---- */}
      <section className="inv-hero wrap">
        <p className="eyebrow">Follow the money · the AI build-out</p>
        <h1>Who actually <span className="gradient-text">profits</span> from the AI boom?</h1>
        <p className="lead">
          Trillions are being spent building AI. That spending flows through a chain of real,
          mostly public companies — chips, factories, memory, power, software. Trace the money,
          meet the tickers, and learn the handful of ideas you need to think about it clearly.
        </p>
        <div className="inv-disclaimer">
          <Icon name="trust" size={18} />
          <p>{NOT_ADVICE}</p>
        </div>
      </section>

      {/* ---- 1. Capex: where the money starts ---- */}
      <section className="inv-section wrap">
        <Reveal className="inv-section-head">
          <span className="inv-step">01</span>
          <h2>It starts with capex</h2>
          <p className="lead">
            A few giant “hyperscalers” are spending unprecedented sums building AI data centers.
            That capital expenditure is the river everything downstream drinks from.
          </p>
        </Reveal>
        <Reveal delay={70}><CapexChart /></Reveal>
      </section>

      {/* ---- 2. The value chain ---- */}
      <section className="inv-section wrap tint">
        <Reveal className="inv-section-head">
          <span className="inv-step">02</span>
          <h2>Follow it down the value chain</h2>
          <p className="lead">
            The dollars cascade down a stack of layers. Each one has its own public companies —
            and the “picks and shovels” suppliers often capture the most reliable profit.
          </p>
        </Reveal>
        <Reveal delay={70}><ValueChain /></Reveal>
      </section>

      {/* ---- 3. Concentration ---- */}
      <section className="inv-section wrap">
        <Reveal className="inv-section-head">
          <span className="inv-step">03</span>
          <h2>It all narrows to a few choke points</h2>
          <p className="lead">
            The biggest risk hiding inside the boom: the entire chain depends on a tiny number of
            irreplaceable companies.
          </p>
        </Reveal>
        <Reveal delay={70}><Concentration /></Reveal>
      </section>

      {/* ---- 4. Concepts ---- */}
      <section className="inv-section wrap tint">
        <Reveal className="inv-section-head">
          <span className="inv-step">04</span>
          <h2>Eight ideas to think for yourself</h2>
          <p className="lead">
            The vocabulary that lets a non-expert read the AI trade — from “picks and shovels” to
            the bubble debate.
          </p>
        </Reveal>
        <div className="inv-concepts">
          {investingConcepts.map((c, i) => (
            <Reveal key={c.slug} delay={i * 50} className="inv-concept">
              <h3>{c.title}</h3>
              <p className="inv-concept-plain">{c.plain}</p>
              <p className="inv-concept-stat">{c.stat}</p>
              <a className="inv-concept-cite" href={c.url} target="_blank" rel="noopener noreferrer">
                {c.cite} <Icon name="external" size={11} strokeWidth={2} />
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- 5. Portfolio builder ---- */}
      <section className="inv-section wrap">
        <Reveal className="inv-section-head">
          <span className="inv-step">05</span>
          <h2>Build a (pretend) AI-exposure mix</h2>
          <p className="lead">
            Drag the sliders to weight the layers, and watch how concentrated or diversified your
            mix becomes. A thinking tool, not a recommendation.
          </p>
        </Reveal>
        <Reveal delay={70}><PortfolioBuilder /></Reveal>
      </section>

      {/* ---- 6. ETFs ---- */}
      <section className="inv-section wrap tint">
        <Reveal className="inv-section-head">
          <span className="inv-step">06</span>
          <h2>One-ticker exposure: ETFs</h2>
          <p className="lead">
            Funds that bundle the chain into a single ticker — convenient, but often far more
            concentrated than they look.
          </p>
        </Reveal>
        <div className="inv-etfs">
          {etfs.map((e, i) => (
            <Reveal as="a" key={e.ticker} delay={i * 50} href={e.url} target="_blank" rel="noopener noreferrer" className="inv-etf">
              <div className="inv-etf-top">
                <span className="inv-etf-ticker">{e.ticker}</span>
                <span className="inv-etf-meta">{e.holdings} holdings · {e.fee} fee</span>
              </div>
              <span className="inv-etf-name">{e.name}</span>
              <span className="inv-etf-aum">{e.aum} AUM</span>
              <span className="inv-etf-note">{e.note}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- Footer ---- */}
      <footer className="inv-foot wrap">
        <Reveal>
          <h2>Money is one lens. Don’t forget the others.</h2>
          <p className="lead">
            The build-out is also about power, trust, labor, and accountability. Understanding the
            machine — and who profits — makes you a sharper observer of all of it.
          </p>
          <div className="inv-foot-actions">
            <Link to="/how-it-works" className="btn grad">See how the machine works <Icon name="arrowRight" size={16} /></Link>
            <Link to="/power" className="btn ghost">The five pressures</Link>
          </div>
          <p className="inv-foot-disclaimer">{NOT_ADVICE}</p>
        </Reveal>
      </footer>
    </main>
  )
}
