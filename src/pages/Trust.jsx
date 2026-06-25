import { useState } from 'react'
import RoomLayout from '../components/RoomLayout.jsx'
import FaceCard from '../components/FaceCard.jsx'
import './interactions.css'

// Interaction: guess which portrait is AI-generated. On reveal we circle the
// ACTUAL tells (asymmetric glasses, single earring, irregular teeth, melted
// background) so people leave with a real skill — then the liar's dividend twist.
const ROUND = {
  prompt: 'One of these portraits was made by AI. The other is a photograph. Which is the fake?',
  fakeIndex: 0,
}

const TELLS = [
  'Eyes and glasses don’t quite line up — AI struggles with symmetry.',
  'Teeth are slightly irregular and “melted” together.',
  'Only one earring — accessories often don’t match.',
  'The background warps and smears with no real detail.',
]

export default function Trust() {
  const [guess, setGuess] = useState(null)
  const revealed = guess !== null
  const correct = guess === ROUND.fakeIndex

  return (
    <RoomLayout slug="trust">
      <div className="card">
        <p className="card-title">{ROUND.prompt}</p>

        <div className="card-insight">
          <strong>Why this matters:</strong> the real risk is not one perfect fake. It is a media
          environment where every inconvenient fact can be challenged as synthetic.
        </div>

        <div className="guess-grid">
          {[0, 1].map((i) => {
            const isFake = i === ROUND.fakeIndex
            return (
              <button
                key={i}
                className={`guess-tile ${revealed ? (isFake ? 'fake' : 'real') : ''} ${guess === i ? 'picked' : ''}`}
                onClick={() => !revealed && setGuess(i)}
                disabled={revealed}
              >
                <FaceCard variant={isFake ? 'fake' : 'real'} revealed={revealed} />
                {revealed && (
                  <span className="guess-verdict">{isFake ? 'AI-GENERATED' : 'REAL PHOTO'}</span>
                )}
                {!revealed && <span className="guess-pick">This is the fake</span>}
              </button>
            )
          })}
        </div>

        {revealed && (
          <div className="reveal-note">
            <p>
              {correct
                ? 'Nice eye. But in studies, people are right only about half the time — and the markers below are easy to miss in a quick scroll.'
                : 'Not this time — and that’s the point. Here’s what gave the fake away:'}
            </p>
            <ul className="tells">
              {TELLS.map((t) => <li key={t}>{t}</li>)}
            </ul>
            <p className="liars-dividend">
              <strong>The twist:</strong> once everyone knows fakes exist, a person caught on a{' '}
              <em>real</em> recording can just say “that’s a deepfake.” Doubt becomes a shield —
              the <strong>liar’s dividend</strong>.
            </p>
            <button className="btn ghost" onClick={() => setGuess(null)}>Try again</button>
          </div>
        )}

        <p className="card-foot">
          Tells help today, but they vanish as models improve. The durable defense isn’t your
          eyes — it’s <strong>provenance</strong>: cryptographic proof of where media came from.
        </p>
      </div>
    </RoomLayout>
  )
}
