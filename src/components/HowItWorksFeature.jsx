import { Link } from 'react-router-dom'
import { mechanics } from '../data/mechanics.js'
import Reveal from './Reveal.jsx'
import Icon from './Icon.jsx'
import NextToken from './demos/NextToken.jsx'
import './HowItWorksFeature.css'

// Homepage feature that promotes the "How it actually works" layer to the
// main screen: a live demo on one side, the seven-concept lineup on the
// other, with a strong path into the full /how-it-works page.
export default function HowItWorksFeature() {
  return (
    <section className="hiwf">
      <Reveal className="hiwf-head">
        <p className="eyebrow">Start here · How it actually works</p>
        <h2>
          Before the hard questions, the simple one:{' '}
          <span className="gradient-text">what is the machine doing?</span>
        </h2>
        <p className="lead">
          No math required. Poke at a real demo below — then walk through the seven ideas that
          demystify how an AI model reads, predicts, learns, and runs.
        </p>
      </Reveal>

      <div className="hiwf-body">
        <Reveal className="hiwf-demo">
          <span className="hiwf-demo-tag">Live demo · try it</span>
          <NextToken />
        </Reveal>

        <Reveal className="hiwf-concepts" delay={80}>
          <p className="hiwf-concepts-label">The seven ideas</p>
          <ol className="hiwf-list">
            {mechanics.map((c) => (
              <li key={c.slug}>
                <Link to={`/how-it-works#${c.slug}`} className="hiwf-item">
                  <span className="hiwf-num">{c.num}</span>
                  <span className="hiwf-item-text">
                    <strong>{c.title}</strong>
                    <span>{c.short}</span>
                  </span>
                  <Icon name="arrowRight" size={15} />
                </Link>
              </li>
            ))}
          </ol>
          <Link to="/how-it-works" className="btn grad hiwf-cta">
            Open the full explainer <Icon name="arrowRight" size={16} />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
