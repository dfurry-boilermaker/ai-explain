import { capexSources } from '../../data/buildout.js'
import './CapexChart.css'

// A simple animated bar chart of relative hyperscaler AI capex — the "river"
// that feeds the whole value chain. Weights are illustrative-but-grounded
// (see notes); the point is the scale and who is spending, not precise dollars.
export default function CapexChart() {
  const max = Math.max(...capexSources.map((s) => s.weight))
  return (
    <div className="cx">
      <div className="cx-bars">
        {capexSources.map((s, i) => (
          <div key={s.ticker} className="cx-col">
            <div className="cx-track">
              <div
                className="cx-fill"
                style={{ height: `${(s.weight / max) * 100}%`, animationDelay: `${i * 0.1}s` }}
              />
            </div>
            <span className="cx-note">{s.note}</span>
            <span className="cx-name">{s.name}</span>
            <span className="cx-ticker">{s.ticker}</span>
          </div>
        ))}
      </div>
      <p className="cx-caption">
        Relative AI-related capital spending by the biggest cloud builders. These dollars are the
        demand behind every chip, server, and megawatt downstream — which is why investors watch
        capex guidance so closely.
      </p>
    </div>
  )
}
