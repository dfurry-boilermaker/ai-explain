import Icon from './Icon.jsx'
import './GoDeeper.css'

// Human-readable labels for each source type, shown as a small chip so readers
// can see at a glance whether a claim rests on a paper, a regulator, a lab, etc.
const TYPE_LABEL = {
  academic: 'Peer-reviewed',
  regulation: 'Regulation',
  report: 'Institutional report',
  'frontier-lab': 'AI lab',
  hyperscaler: 'Cloud provider',
  journalism: 'Investigation',
  standard: 'Open standard',
}

// The sourced "go deeper" content layer for each room: a set of short, cited
// facts that expand the headline interaction into a real explainer.
export default function GoDeeper({ items, accent }) {
  if (!items?.length) return null
  return (
    <section className="godeeper" style={accent ? { '--accent': accent } : undefined}>
      <div className="godeeper-head">
        <p className="eyebrow">Go deeper</p>
        <h2>What the evidence actually shows</h2>
      </div>

      <div className="godeeper-grid">
        {items.map((item) => (
          <article key={item.title} className="godeeper-card">
            <h3>{item.title}</h3>
            <p className="godeeper-body">{item.body}</p>
            <a
              className="godeeper-cite"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={`godeeper-type type-${item.type}`}>
                {TYPE_LABEL[item.type] ?? 'Source'}
                {item.date ? ` · ${item.date}` : ''}
              </span>
              <span className="godeeper-source">
                {item.cite} <Icon name="external" size={12} strokeWidth={2} />
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
