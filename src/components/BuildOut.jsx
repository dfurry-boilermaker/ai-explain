import { useState } from 'react'
import { buildoutLayers, buildoutConcentration } from '../data/buildout.js'
import Icon from './Icon.jsx'
import './BuildOut.css'

// "Who is building this?" — the AI value chain as public companies with tickers.
// Click a layer to expand its companies; a concentration takeaway closes it out.
export default function BuildOut() {
  const [open, setOpen] = useState('chips')

  return (
    <div className="buildout">
      <div className="buildout-layers">
        {buildoutLayers.map((layer) => {
          const isOpen = open === layer.key
          return (
            <div key={layer.key} className={`bo-layer ${isOpen ? 'open' : ''}`}>
              <button className="bo-layer-head" onClick={() => setOpen(isOpen ? null : layer.key)} aria-expanded={isOpen}>
                <div>
                  <h3>{layer.title}</h3>
                  <p>{layer.blurb}</p>
                </div>
                <span className="bo-chevron"><Icon name={isOpen ? 'arrowLeft' : 'arrowRight'} size={18} /></span>
              </button>

              {isOpen && (
                <div className="bo-companies">
                  {layer.companies.map((c) => (
                    <a key={c.ticker} className="bo-company" href={c.url} target="_blank" rel="noopener noreferrer">
                      <div className="bo-company-top">
                        <span className="bo-name">{c.name}</span>
                        <span className="bo-ticker">{c.exch}: {c.ticker}</span>
                      </div>
                      <p className="bo-role">{c.role}</p>
                      <p className="bo-stat">{c.stat}</p>
                      <span className="bo-cite">{c.cite} <Icon name="external" size={11} strokeWidth={2} /></span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <aside className="bo-concentration">
        <p className="eyebrow">The concentration risk</p>
        <h3>{buildoutConcentration.headline}</h3>
        <p>{buildoutConcentration.body}</p>
        <a className="bo-cite" href={buildoutConcentration.url} target="_blank" rel="noopener noreferrer">
          {buildoutConcentration.cite} <Icon name="external" size={11} strokeWidth={2} />
        </a>
      </aside>

      <p className="bo-disclaimer">
        Tickers and figures are point-in-time (2025–2026) for education, not investment advice.
        Public companies are named to illustrate the supply chain; private labs like OpenAI and
        Anthropic are referenced through their public partners.
      </p>
    </div>
  )
}
