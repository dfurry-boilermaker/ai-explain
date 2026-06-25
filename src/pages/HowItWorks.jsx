import { Link } from 'react-router-dom'
import { mechanics } from '../data/mechanics.js'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import Tokenizer from '../components/demos/Tokenizer.jsx'
import NextToken from '../components/demos/NextToken.jsx'
import Attention from '../components/demos/Attention.jsx'
import BuildOut from '../components/BuildOut.jsx'
import './HowItWorks.css'

const DEMOS = { tokenizer: Tokenizer, prediction: NextToken, attention: Attention }

const TYPE_LABEL = {
  academic: 'Peer-reviewed',
  reference: 'Reference',
  'frontier-lab': 'AI lab',
  report: 'Institutional report',
  regulation: 'Regulation',
}

function ConceptSection({ c, flip }) {
  const Demo = c.demo ? DEMOS[c.demo] : null
  return (
    <section className={`hiw-concept ${flip ? 'flip' : ''} ${Demo ? '' : 'solo'}`}>
      <Reveal className="hiw-concept-copy">
        <span className="hiw-num">{c.num}</span>
        <h2>{c.title}</h2>
        <p className="lead">{c.plain}</p>
        <div className="hiw-analogy">
          <span>Think of it like…</span>
          <p>{c.analogy}</p>
        </div>
        <div className="hiw-stat">
          <span className="hiw-stat-value">{c.stat.value}</span>
          <span className="hiw-stat-label">{c.stat.label}</span>
          <a className="hiw-stat-cite" href={c.stat.url} target="_blank" rel="noopener noreferrer">
            <span className={`hiw-type type-${c.stat.type}`}>{TYPE_LABEL[c.stat.type] ?? 'Source'}</span>
            {c.stat.cite} <Icon name="external" size={11} strokeWidth={2} />
          </a>
        </div>
        {c.extra && (
          <ul className="hiw-extra">
            {c.extra.map((e) => (
              <li key={e.text}>
                {e.text}{' '}
                <a href={e.url} target="_blank" rel="noopener noreferrer">{e.cite} <Icon name="external" size={10} strokeWidth={2} /></a>
              </li>
            ))}
          </ul>
        )}
      </Reveal>
      {Demo && (
        <Reveal className="hiw-concept-demo" delay={80}>
          <Demo />
        </Reveal>
      )}
    </section>
  )
}

export default function HowItWorks() {
  return (
    <main className="hiw">
      <header className="hiw-top wrap">
        <Link to="/" className="room-wordmark gradient-text">The Invisible Machine</Link>
        <Link to="/" className="back"><Icon name="arrowLeft" size={15} /> All topics</Link>
      </header>

      <section className="hiw-hero wrap">
        <p className="eyebrow">How it actually works</p>
        <h1>What is the machine, <span className="gradient-text">really?</span></h1>
        <p className="lead">
          Before the questions of power and trust, a simpler one: what is an AI model actually
          doing? No math required — just the seven ideas that demystify the whole thing, with
          things you can poke at yourself.
        </p>
      </section>

      <div className="hiw-concepts wrap">
        {mechanics.map((c, i) => (
          <ConceptSection key={c.slug} c={c} flip={i % 2 === 1} />
        ))}
      </div>

      <section className="hiw-buildout wrap">
        <Reveal>
          <p className="eyebrow">Who is building this?</p>
          <h2>The machine has a supply chain — and shareholders.</h2>
          <p className="lead">
            All that compute is bought from real, mostly public companies. Here is the AI build-out
            as a stack of layers, with the tickers behind each one.
          </p>
        </Reveal>
        <Reveal delay={80}><BuildOut /></Reveal>
      </section>

      <footer className="hiw-foot wrap">
        <Reveal>
          <h2>Now you can see the machine.</h2>
          <p className="lead">
            With how it works in hand, the harder questions land differently — about who owns it,
            whether you can trust it, and who answers when it’s wrong.
          </p>
          <div className="hiw-foot-actions">
            <Link to="/power" className="btn grad">Explore the five pressures <Icon name="arrowRight" size={16} /></Link>
            <Link to="/what-you-can-do" className="btn ghost">What you can do</Link>
          </div>
        </Reveal>
      </footer>
    </main>
  )
}
