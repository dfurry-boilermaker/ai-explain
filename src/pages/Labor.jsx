import { useState } from 'react'
import RoomLayout from '../components/RoomLayout.jsx'
import Icon from '../components/Icon.jsx'
import './interactions.css'

// Interaction: a clean "AI did this automatically" card sits on top.
// Drag the curtain away to expose the hidden human workforce beneath.
const WORKERS = [
  { who: 'Data labelers', what: 'tag millions of images, words, and clips so models can learn' },
  { who: 'Answer raters', what: 'score AI replies all day to teach it manners and limits' },
  { who: 'Content moderators', what: 'view disturbing material so the model learns to refuse it' },
]

export default function Labor() {
  const [pull, setPull] = useState(0) // 0..100 percent revealed

  return (
    <RoomLayout slug="labor">
      <div className="card">
        <p className="card-title">“The AI did this automatically.” Drag to see who really did.</p>

        <div className="card-insight">
          <strong>Why this matters:</strong> automation can improve work, but it should not erase
          the people whose judgment, time, and exposure make the system possible.
        </div>

        <div className="curtain-stage">
          <div className="curtain-behind">
            {WORKERS.map((w) => (
              <div key={w.who} className="worker">
                <span className="worker-icon" aria-hidden="true">
                  <Icon name="labor" size={22} />
                </span>
                <div>
                  <strong>{w.who}</strong>
                  <p>{w.what}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="curtain-front" style={{ clipPath: `inset(0 0 0 ${pull}%)` }}>
            <span className="curtain-badge"><Icon name="robot" size={22} /> Automatic</span>
            <span className="curtain-sub">No humans involved… right?</span>
          </div>
        </div>

        <input
          type="range"
          min="0"
          max="100"
          value={pull}
          onChange={(e) => setPull(Number(e.target.value))}
          className="slider"
          aria-label="Pull the curtain away"
        />
        <p className="slider-readout"><strong>{pull}%</strong> curtain pulled back</p>

        <p className="card-foot">
          {pull > 80
            ? 'Behind “automatic” is human labor — often low-paid, often unseen. The intelligence is real; so are the people.'
            : 'Keep pulling — the hidden workforce is underneath.'}
        </p>
      </div>
    </RoomLayout>
  )
}
