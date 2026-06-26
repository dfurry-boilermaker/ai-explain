import { concentration } from '../../data/buildout.js'
import Icon from '../Icon.jsx'
import './Concentration.css'

// An inverted funnel: the whole sprawling AI market narrows, layer by layer,
// down to a single foundry and a single toolmaker. Makes "single point of
// failure" visceral.
const FUNNEL = [
  { label: 'The entire AI market', sub: 'thousands of companies', w: 100 },
  { label: 'Frontier models', sub: 'a few labs: OpenAI, Anthropic, Google', w: 72 },
  { label: 'Almost all train on NVIDIA', sub: 'NVDA ≈ 90%+ of AI GPUs', w: 48 },
  { label: 'Made by one foundry: TSMC', sub: '~90% of leading-edge chips', w: 28 },
  { label: 'Using machines only ASML builds', sub: 'sole EUV lithography maker', w: 14 },
]

export default function Concentration() {
  return (
    <div className="cz">
      <div className="cz-funnel" role="img" aria-label="The AI market narrows to a few suppliers">
        {FUNNEL.map((row, i) => (
          <div key={i} className="cz-row" style={{ '--w': `${row.w}%`, animationDelay: `${i * 0.08}s` }}>
            <div className="cz-block">
              <strong>{row.label}</strong>
              <span>{row.sub}</span>
            </div>
            {i < FUNNEL.length - 1 && <Icon name="arrowRight" size={16} className="cz-arrow" />}
          </div>
        ))}
      </div>

      <aside className="cz-takeaway">
        <p className="eyebrow">Why it matters for investors</p>
        <h3>{concentration.headline}</h3>
        <p>{concentration.body}</p>
        <a className="cz-cite" href={concentration.url} target="_blank" rel="noopener noreferrer">
          {concentration.cite} <Icon name="external" size={11} strokeWidth={2} />
        </a>
      </aside>
    </div>
  )
}
