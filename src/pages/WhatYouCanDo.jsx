import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'
import Icon from '../components/Icon.jsx'
import { themes } from '../data/themes.js'
import './WhatYouCanDo.css'

// The closing room: turn the five problems into agency, not dread.
// A five-question checklist + concrete habits per theme.

const CHECKLIST = [
  {
    q: 'Who built it?',
    why: 'The chips, clouds, and labs behind frontier AI narrow to a handful of firms. Who is behind a tool tells you whose interests it serves.',
    tied: 'Power',
  },
  {
    q: 'Can I verify what I’m seeing?',
    why: 'People spot deepfakes barely better than a coin flip. Look for provenance — Content Credentials, sources, a verifiable origin.',
    tied: 'Trust',
  },
  {
    q: 'Who benefits, and how is it paid for?',
    why: 'A $500B+ ad economy makes “free” possible. If you’re not paying with money, you’re likely paying with data and attention.',
    tied: 'Money',
  },
  {
    q: 'Whose labor is hidden?',
    why: '“Automatic” systems lean on people who label data, rank answers, and absorb disturbing content — often for a few dollars an hour.',
    tied: 'Labor',
  },
  {
    q: 'Who is responsible when it’s wrong?',
    why: 'Real people have been wrongfully arrested by algorithms. If no one can be held accountable for a harm, that’s a reason for caution.',
    tied: 'Accountability',
  },
]

const SLOW_DOWN = [
  'It influences money, health, housing, education, policing, immigration, or employment.',
  'It asks for private details, confidential work, passwords, or sensitive personal data.',
  'It produces emotional, shocking, or perfectly timed media that makes you want to share fast.',
  'It cannot show sources, provenance, appeal paths, or a real person responsible for mistakes.',
]

const HABITS = [
  'Verify before you share — especially anything shocking, emotional, or perfectly timed.',
  'Don’t paste secrets, passwords, or sensitive personal data into AI tools.',
  'Treat AI as a fast first-draft assistant, not a final authority. Check anything that matters.',
  'Look for provenance — labels or sources that prove where media actually came from.',
  'Notice the hidden humans: “automatic” systems are built on real, often underpaid, labor.',
  'Support transparency — favor tools and laws that disclose how systems work and who’s liable.',
]

export default function WhatYouCanDo() {
  return (
    <main className="wycd">
      <header className="wycd-top wrap">
        <Link to="/" className="room-wordmark gradient-text">The Invisible Machine</Link>
        <Link to="/" className="back"><Icon name="arrowLeft" size={15} /> All topics</Link>
      </header>

      <section className="wycd-hero wrap">
        <div className="wycd-hero-copy">
          <p className="eyebrow">The takeaway</p>
          <h1>You don’t need to be technical to think clearly about AI.</h1>
          <p className="lead">
            The hard problems aren’t about how smart the machine is. They’re about power, trust,
            money, labor, and accountability. Here’s how to carry that with you.
          </p>
        </div>
        <aside className="wycd-pocket-card">
          <p className="eyebrow">Pocket rule</p>
          <p>
            Use AI where mistakes are cheap, sources are checkable, and a human remains responsible.
            Slow down everywhere else.
          </p>
        </aside>
      </section>

      <section className="wycd-block wrap">
        <Reveal>
          <h2>Ask five questions of any AI system</h2>
          <p className="lead">Whenever you meet a new tool, feed, or “automatic” decision:</p>
        </Reveal>
        <div className="check-grid">
          {CHECKLIST.map((c, i) => (
            <Reveal key={c.q} delay={i * 80} className="check-card">
              <span className="check-num">{i + 1}</span>
              <h3>{c.q}</h3>
              <p>{c.why}</p>
              <span className="check-tied">{c.tied}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wycd-block wrap">
        <Reveal>
          <h2>Slow down when the stakes are high</h2>
          <p className="lead">AI deserves more scrutiny when any of these are true:</p>
        </Reveal>
        <div className="slow-grid">
          {SLOW_DOWN.map((s, i) => (
            <Reveal key={s} delay={i * 70} className="slow-card">
              <span>{String(i + 1).padStart(2, '0')}</span>
              <p>{s}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="wycd-block wrap">
        <Reveal>
          <h2>Six everyday habits</h2>
        </Reveal>
        <ul className="habits">
          {HABITS.map((h, i) => (
            <Reveal as="li" key={h} delay={i * 60}>{h}</Reveal>
          ))}
        </ul>
      </section>

      <section className="wycd-revisit wrap">
        <Reveal>
          <h2>Revisit a room</h2>
        </Reveal>
        <div className="revisit-grid">
          {themes.map((t, i) => (
            <Reveal as={Link} key={t.slug} delay={i * 50} to={`/${t.slug}`}
                    className="revisit-link" style={{ '--accent': t.accent }}>
              <span className="revisit-icon" aria-hidden="true"><Icon name={t.icon} size={24} /></span>
              <strong>{t.title}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <footer className="wycd-foot wrap">
        <p>
          Be skeptical, not cynical. AI can be genuinely useful — the goal is to use it with your
          eyes open, asking <strong>who built it, why it behaves this way, who benefits, whose labor is hidden, and who’s responsible.</strong>
        </p>
        <Link to="/" className="btn">Back to the start</Link>
      </footer>
    </main>
  )
}
