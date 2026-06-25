import { useState } from 'react'
import RoomLayout from '../components/RoomLayout.jsx'
import './interactions.css'

// Interaction: a harm happens. Click each actor — every one points elsewhere.
// The unresolved loop IS the message.
const ACTORS = [
  { id: 'builder', label: 'The AI builder', excuse: '“We just make a general tool. How others use it isn’t on us.”' },
  { id: 'deployer', label: 'The company using it', excuse: '“We trusted the vendor’s system. We’re not the ones who built it.”' },
  { id: 'user', label: 'The operator', excuse: '“I only followed what the system told me to do.”' },
  { id: 'system', label: 'The AI itself', excuse: '“It’s software. It can’t be sued, fined, or held responsible.”' },
]

export default function Accountability() {
  const [active, setActive] = useState(null)

  return (
    <RoomLayout slug="accountability">
      <div className="card">
        <p className="card-title">
          A real harm happens — a wrongful arrest, a denied loan. Click each party. Who takes responsibility?
        </p>

        <div className="card-insight">
          <strong>Why this matters:</strong> accountability has to be designed before something
          breaks. After harm occurs, every actor has an incentive to point somewhere else.
        </div>

        <div className="blame-ring">
          {ACTORS.map((a) => (
            <button
              key={a.id}
              className={`blame-node ${active === a.id ? 'active' : ''}`}
              onClick={() => setActive(a.id)}
            >
              {a.label}
            </button>
          ))}
        </div>

        <div className="blame-readout">
          {active ? (
            <p className="excuse">{ACTORS.find((a) => a.id === active).excuse}</p>
          ) : (
            <p className="excuse muted">Click a party above…</p>
          )}
        </div>

        <p className="card-foot">
          The arrows point in a circle and never land. That gap — no clear answer to{' '}
          <em>“who is responsible?”</em> — is one of the biggest unsolved problems in AI.
        </p>
      </div>
    </RoomLayout>
  )
}
