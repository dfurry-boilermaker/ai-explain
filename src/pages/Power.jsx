import { useState } from 'react'
import RoomLayout from '../components/RoomLayout.jsx'
import './interactions.css'

// Interaction: as the "cost to train" slider rises, the dots representing
// who can afford it wink out — the disappearing dots ARE the argument.
// Thresholds are in $millions; the scale runs to $1B to match the verified
// trajectory (GPT-4 ≈ $78M, Gemini Ultra ≈ $191M, $1B+ projected by 2027).
const ACTORS = [
  { label: 'A hobbyist', afford: 1 },
  { label: 'A university lab', afford: 10 },
  { label: 'A funded startup', afford: 50 },
  { label: 'A large enterprise', afford: 150 },
  { label: 'A national government', afford: 400 },
  { label: 'A top AI lab + cloud', afford: 1000 },
]

// Real reference points the slider can snap past, drawn from the sources.
const MARKERS = [
  { at: 78, label: 'GPT-4 ≈ $78M' },
  { at: 191, label: 'Gemini Ultra ≈ $191M' },
  { at: 1000, label: 'Projected 2027: $1B+' },
]

const fmt = (m) => (m >= 1000 ? `$${(m / 1000).toFixed(1)}B` : `$${m}M`)

export default function Power() {
  const [cost, setCost] = useState(10) // in millions
  const affordCount = ACTORS.filter((a) => cost <= a.afford).length

  return (
    <RoomLayout slug="power">
      <div className="card">
        <p className="card-title">Drag the cost of building a top AI model.</p>
        <input
          type="range"
          min="1"
          max="1000"
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
          className="slider"
          aria-label="Cost to train a model in millions of dollars"
        />
        <p className="slider-readout">
          <strong>{fmt(cost)}</strong> to train
          {MARKERS.filter((m) => cost >= m.at).slice(-1).map((m) => (
            <span key={m.at} className="slider-marker">· past {m.label}</span>
          ))}
        </p>

        <div className="card-insight">
          <strong>Why this matters:</strong> when model-building becomes a capital race, public
          influence shrinks and private infrastructure starts to look like public power.
        </div>

        <div className="actor-grid">
          {ACTORS.map((a) => {
            const out = cost > a.afford
            return (
              <div key={a.label} className={`actor ${out ? 'out' : 'in'}`}>
                <span className="actor-dot" />
                <span className="actor-label">{a.label}</span>
                <span className="actor-state">{out ? 'priced out' : 'can afford'}</span>
              </div>
            )
          })}
        </div>

        <p className="card-foot">
          {affordCount <= 1
            ? 'At frontier prices, almost everyone is priced out. A technology for everyone, built by a very few.'
            : `At ${fmt(cost)}, ${affordCount} of ${ACTORS.length} can still afford a seat at the table. Slide further.`}
        </p>
      </div>
    </RoomLayout>
  )
}
