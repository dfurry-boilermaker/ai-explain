import { useState } from 'react'
import { chainLayers } from '../../data/buildout.js'
import Icon from '../Icon.jsx'
import './ValueChain.css'

// The signature investing viz: money enters as hyperscaler capex at the top
// and flows DOWN the value chain. Each layer's bar is sized by how much of the
// flow reaches it; click a layer to reveal its companies + tickers. The
// shrinking bars make "picks and shovels" and concentration visible at a glance.
export default function ValueChain() {
  const [open, setOpen] = useState('chips')

  return (
    <div className="vc">
      <div className="vc-flow">
        <div className="vc-source">
          <span className="vc-source-label">AI capital spending enters here</span>
          <Icon name="arrowRight" size={16} className="vc-source-arrow" />
        </div>

        {chainLayers.map((layer, i) => {
          const isOpen = open === layer.key
          return (
            <div key={layer.key} className={`vc-layer ${isOpen ? 'open' : ''}`}>
              <button
                className="vc-bar"
                style={{ '--w': `${layer.flowWeight}%` }}
                onClick={() => setOpen(isOpen ? null : layer.key)}
                aria-expanded={isOpen}
              >
                <span className="vc-bar-fill" />
                <span className="vc-bar-content">
                  <span className="vc-bar-main">
                    <span className="vc-bar-num">{String(i + 1).padStart(2, '0')}</span>
                    <span>
                      <strong>{layer.title}</strong>
                      <em>{layer.role}</em>
                    </span>
                  </span>
                  <span className="vc-bar-chevron">
                    <Icon name={isOpen ? 'arrowLeft' : 'arrowRight'} size={16} />
                  </span>
                </span>
              </button>

              {isOpen && (
                <div className="vc-detail">
                  <p className="vc-blurb">{layer.blurb}</p>
                  <div className="vc-companies">
                    {layer.companies.map((c) => (
                      <a key={c.ticker} className="vc-company" href={c.url} target="_blank" rel="noopener noreferrer">
                        <span className="vc-company-top">
                          <span className="vc-name">{c.name}</span>
                          <span className="vc-ticker">{c.ticker}</span>
                        </span>
                        <span className="vc-role">{c.role}</span>
                        <span className="vc-stat">{c.stat}</span>
                        <span className="vc-cite">{c.cite} <Icon name="external" size={10} strokeWidth={2} /></span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {i < chainLayers.length - 1 && <span className="vc-connector" aria-hidden="true" />}
            </div>
          )
        })}
      </div>

      <p className="vc-hint">
        The bars narrow as you go down — a rough picture of how the dollars thin out across the
        chain. Tap any layer to see the public companies in it.
      </p>
    </div>
  )
}
