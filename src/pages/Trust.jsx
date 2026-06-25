import { useState } from 'react'
import RoomLayout from '../components/RoomLayout.jsx'
import './interactions.css'

// Interaction: stop asking visitors to spot a fake by eye. The more durable
// skill is provenance: source, metadata, origin, and edit history.
const ROUND = {
  prompt: 'Two images can look convincing. Which one should you treat as unreliable?',
  fakeId: 'synthetic',
}

const MEDIA = [
  {
    id: 'synthetic',
    label: 'Image A',
    status: 'Unverified synthetic image',
    visualLabel: 'Viral image, origin unknown',
    clues: [
      'No original source before reposts.',
      'No camera metadata or Content Credentials.',
      'Background details repeat in unnatural ways.',
      'The caption asks you to react before you verify.',
    ],
  },
  {
    id: 'verified',
    label: 'Image B',
    status: 'Verified source image',
    visualLabel: 'Published image with origin trail',
    clues: [
      'Original publisher and timestamp are visible.',
      'Source page links to the image directly.',
      'Metadata or provenance record is available.',
      'Reverse image search points back to the same origin.',
    ],
  },
]

export default function Trust() {
  const [guess, setGuess] = useState(null)
  const revealed = guess !== null
  const correct = guess === ROUND.fakeId

  return (
    <RoomLayout slug="trust">
      <div className="card">
        <p className="card-title">{ROUND.prompt}</p>

        <div className="card-insight">
          <strong>Why this matters:</strong> the real risk is not one perfect fake. It is a media
          environment where every inconvenient fact can be challenged as synthetic.
        </div>

        <div className="guess-grid">
          {MEDIA.map((item) => {
            const isFake = item.id === ROUND.fakeId
            return (
              <button
                key={item.id}
                className={`guess-tile media-tile ${item.id} ${revealed ? (isFake ? 'fake' : 'real') : ''} ${guess === item.id ? 'picked' : ''}`}
                onClick={() => !revealed && setGuess(item.id)}
                disabled={revealed}
              >
                <div className="media-photo" role="img" aria-label={item.visualLabel}>
                  <span className="media-badge">{item.label}</span>
                  <span className="media-caption">{item.visualLabel}</span>
                </div>
                {revealed && (
                  <span className="guess-verdict">{item.status}</span>
                )}
                {!revealed && <span className="guess-pick">Treat this as unreliable</span>}
              </button>
            )
          })}
        </div>

        {revealed && (
          <div className="reveal-note">
            <p>
              {correct
                ? 'That’s the safer call. The important clue is not how polished the image looks — it’s whether the origin can be checked.'
                : 'That’s the trap. A convincing image without an origin trail should be treated cautiously, even if it looks real.'}
            </p>
            <div className="verification-grid">
              {MEDIA.map((item) => (
                <div key={item.id} className={`verification-card ${item.id}`}>
                  <strong>{item.status}</strong>
                  <ul className="tells">
                    {item.clues.map((clue) => <li key={clue}>{clue}</li>)}
                  </ul>
                </div>
              ))}
            </div>
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
