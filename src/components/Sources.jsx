import Icon from './Icon.jsx'
import './Sources.css'

const TYPE_LABEL = {
  academic: 'Peer-reviewed',
  regulation: 'Regulation',
  report: 'Institutional report',
  'frontier-lab': 'AI lab',
  hyperscaler: 'Cloud provider',
  journalism: 'Investigation',
  standard: 'Open standard',
}

// Renders the two load-bearing references directly under each interaction.
// On a site about trust, showing your work — with source type and date — is
// the whole point.
export default function Sources({ sources }) {
  if (!sources?.length) return null
  return (
    <aside className="sources">
      <p className="eyebrow">Where these numbers come from</p>
      <ol className="sources-list">
        {sources.map((s, i) => (
          <li key={i}>
            <span className="sources-claim">{s.claim}</span>
            <a className="sources-cite" href={s.url} target="_blank" rel="noopener noreferrer">
              {(s.type || s.date) && (
                <span className={`sources-type type-${s.type}`}>
                  {TYPE_LABEL[s.type] ?? 'Source'}
                  {s.date ? ` · ${s.date}` : ''}
                </span>
              )}
              <span className="sources-name">
                {s.cite} <Icon name="external" size={13} strokeWidth={2} />
              </span>
            </a>
          </li>
        ))}
      </ol>
    </aside>
  )
}
