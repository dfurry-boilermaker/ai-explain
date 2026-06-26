import { useState } from 'react'
import { chainLayers } from '../../data/buildout.js'
import './PortfolioBuilder.css'

// A toy "build your AI exposure" tool. Users add weight to value-chain layers
// and watch an allocation bar + a plain-language read on how concentrated /
// diversified their mix is. Purely illustrative — no real prices or advice.
const LAYER_COLORS = {
  hyperscalers: 'var(--account)',
  chips: 'var(--power)',
  foundry: 'var(--trust)',
  memory: 'var(--money)',
  power: 'var(--labor)',
  software: '#2563eb',
}

export default function PortfolioBuilder() {
  const [weights, setWeights] = useState({ chips: 40, foundry: 20, power: 20, hyperscalers: 20, memory: 0, software: 0 })

  const total = Object.values(weights).reduce((a, b) => a + b, 0)
  const active = chainLayers.filter((l) => (weights[l.key] || 0) > 0)
  const maxShare = total > 0 ? Math.max(...active.map((l) => weights[l.key] / total)) : 0

  const read = (() => {
    if (total === 0) return { tone: 'neutral', text: 'Add some weight to a layer to begin.' }
    if (active.length === 1) return { tone: 'warn', text: 'Everything in one layer — maximum concentration. One bad quarter hits all of it.' }
    if (maxShare > 0.6) return { tone: 'warn', text: 'Heavily tilted to one layer. Higher potential reward, higher single-point risk.' }
    if (active.length >= 4 && maxShare < 0.4) return { tone: 'good', text: 'Spread across the chain — more diversified, smoother ride, fewer moonshots.' }
    return { tone: 'ok', text: 'A balanced tilt. You’re betting on a few layers without going all-in on one.' }
  })()

  const set = (key, val) => setWeights((w) => ({ ...w, [key]: val }))

  return (
    <div className="pb">
      <div className="pb-controls">
        {chainLayers.map((l) => (
          <div key={l.key} className="pb-row">
            <label htmlFor={`pb-${l.key}`} className="pb-label">
              <span className="pb-dot" style={{ background: LAYER_COLORS[l.key] }} />
              {l.title}
            </label>
            <input
              id={`pb-${l.key}`}
              type="range" min="0" max="100" step="5"
              value={weights[l.key] || 0}
              onChange={(e) => set(l.key, Number(e.target.value))}
              className="slider pb-slider"
              style={{ '--accent': LAYER_COLORS[l.key] }}
            />
            <span className="pb-weight">{total > 0 ? Math.round(((weights[l.key] || 0) / total) * 100) : 0}%</span>
          </div>
        ))}
      </div>

      <div className="pb-result">
        <div className="pb-stack" role="img" aria-label="Your allocation">
          {total === 0 && <span className="pb-empty">No allocation yet</span>}
          {chainLayers.map((l) =>
            (weights[l.key] || 0) > 0 ? (
              <span
                key={l.key}
                className="pb-seg"
                style={{ width: `${(weights[l.key] / total) * 100}%`, background: LAYER_COLORS[l.key] }}
                title={`${l.title}: ${Math.round((weights[l.key] / total) * 100)}%`}
              />
            ) : null
          )}
        </div>
        <p className={`pb-read pb-${read.tone}`}>{read.text}</p>
      </div>
    </div>
  )
}
