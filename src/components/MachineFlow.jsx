import { useState, useId } from 'react'
import { Link } from 'react-router-dom'
import { themes } from '../data/themes.js'
import Icon from './Icon.jsx'
import './MachineFlow.css'

// The signature hero, modeled on the Transformer Explainer's Sankey flow:
// a single AI interaction enters on the left, fans out through the five
// hidden pressures as animated colored ribbons, and resolves into an answer
// on the right. Hovering or focusing a pressure highlights its ribbon and
// surfaces a detail card — overview first, detail on demand.

const VB_W = 1000
const VB_H = 460
const IN_X = 70
const HUB_X = 250
const NODE_X = 470
const NODE_W = 210
const OUT_HUB_X = 760
const OUT_X = 935
const MID_Y = VB_H / 2

// Evenly distribute the five pressure nodes down the canvas.
const rowY = (i) => 60 + i * ((VB_H - 120) / (themes.length - 1))

// A smooth cubic ribbon from (x1,y1) to (x2,y2) with horizontal control points.
function ribbon(x1, y1, x2, y2) {
  const cx = (x1 + x2) / 2
  return `M ${x1} ${y1} C ${cx} ${y1}, ${cx} ${y2}, ${x2} ${y2}`
}

export default function MachineFlow() {
  const [active, setActive] = useState(null)
  const uid = useId().replace(/:/g, '')
  const activeTheme = themes.find((t) => t.slug === active)

  return (
    <div className="machineflow">
      <svg
        className="mf-svg"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        role="img"
        aria-label="An AI interaction flowing through five hidden pressures"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {themes.map((t) => (
            <linearGradient key={t.slug} id={`mf-grad-${t.slug}-${uid}`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor={`var(--${t.slug})`} stopOpacity="0.15" />
              <stop offset="100%" stopColor={`var(--${t.slug})`} stopOpacity="0.55" />
            </linearGradient>
          ))}
        </defs>

        {/* Input ribbons: prompt hub -> each pressure node */}
        <g className="mf-ribbons">
          {themes.map((t, i) => {
            const y = rowY(i)
            const dim = active && active !== t.slug
            return (
              <path
                key={`in-${t.slug}`}
                d={ribbon(HUB_X, MID_Y, NODE_X, y)}
                className={`mf-ribbon ${active === t.slug ? 'on' : ''} ${dim ? 'dim' : ''}`}
                style={{ stroke: `var(--${t.slug})`, animationDelay: `${i * 0.12}s` }}
              />
            )
          })}
          {/* Output ribbons: each pressure node -> answer hub */}
          {themes.map((t, i) => {
            const y = rowY(i)
            const dim = active && active !== t.slug
            return (
              <path
                key={`out-${t.slug}`}
                d={ribbon(NODE_X + NODE_W, y, OUT_HUB_X, MID_Y)}
                className={`mf-ribbon ${active === t.slug ? 'on' : ''} ${dim ? 'dim' : ''}`}
                style={{ stroke: `var(--${t.slug})`, animationDelay: `${0.3 + i * 0.12}s` }}
              />
            )
          })}
          {/* Entry + exit stubs */}
          <path d={ribbon(IN_X + 60, MID_Y, HUB_X, MID_Y)} className="mf-ribbon neutral on" />
          <path d={ribbon(OUT_HUB_X, MID_Y, OUT_X - 60, MID_Y)} className="mf-ribbon neutral on" />
        </g>

        {/* Endpoints */}
        <g className="mf-endpoint">
          <rect x={IN_X - 12} y={MID_Y - 34} width="80" height="68" rx="14" />
          <text x={IN_X + 28} y={MID_Y - 6} className="mf-end-label">You</text>
          <text x={IN_X + 28} y={MID_Y + 14} className="mf-end-sub">ask AI</text>
        </g>
        <g className="mf-endpoint out">
          <rect x={OUT_X - 68} y={MID_Y - 34} width="80" height="68" rx="14" />
          <text x={OUT_X - 28} y={MID_Y - 6} className="mf-end-label">The</text>
          <text x={OUT_X - 28} y={MID_Y + 14} className="mf-end-sub">answer</text>
        </g>

        {/* Pressure nodes */}
        <g className="mf-nodes">
          {themes.map((t, i) => {
            const y = rowY(i)
            const on = active === t.slug
            const dim = active && !on
            return (
              <g
                key={t.slug}
                className={`mf-node ${on ? 'on' : ''} ${dim ? 'dim' : ''}`}
                style={{ '--accent': `var(--${t.slug})`, animationDelay: `${0.15 + i * 0.1}s` }}
                onMouseEnter={() => setActive(t.slug)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(t.slug)}
                onBlur={() => setActive(null)}
                tabIndex={0}
                role="button"
                aria-label={`${t.title}: ${t.question}`}
              >
                <rect x={NODE_X} y={y - 26} width={NODE_W} height="52" rx="14" className="mf-node-bg" />
                <circle cx={NODE_X + 28} cy={y} r="13" className="mf-node-dot" />
                <text x={NODE_X + 52} y={y - 2} className="mf-node-title">{t.title}</text>
                <text x={NODE_X + 52} y={y + 14} className="mf-node-q">{t.question}</text>
              </g>
            )
          })}
        </g>
      </svg>

      {/* Detail card — appears on demand, like the reference's floating explainer */}
      <div className={`mf-detail ${activeTheme ? 'show' : ''}`} aria-live="polite">
        {activeTheme ? (
          <div style={{ '--accent': `var(--${activeTheme.slug})` }}>
            <div className="mf-detail-head">
              <span className="mf-detail-icon"><Icon name={activeTheme.icon} size={20} /></span>
              <div>
                <p className="eyebrow">{activeTheme.title}</p>
                <h3>{activeTheme.question}</h3>
              </div>
            </div>
            <p className="mf-detail-lens">{activeTheme.lens}</p>
            <Link to={`/${activeTheme.slug}`} className="mf-detail-link">
              Open {activeTheme.title} <Icon name="arrowRight" size={15} />
            </Link>
          </div>
        ) : (
          <div className="mf-detail-empty">
            <p className="eyebrow">The invisible machine</p>
            <p>
              Every answer an AI gives passes through five pressures you never see.
              <strong> Hover a layer</strong> to look inside — or scroll to walk through each one.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
