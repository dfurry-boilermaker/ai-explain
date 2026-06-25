import { useState } from 'react'
import RoomLayout from '../components/RoomLayout.jsx'
import Icon from '../components/Icon.jsx'
import './interactions.css'

// Interaction: a "$0.00" receipt. Tap to itemize what you actually pay with.
const LINE_ITEMS = [
  { item: 'Your location history', price: 'tracked' },
  { item: 'What you click, watch, and skip', price: 'logged' },
  { item: 'Your contacts and social graph', price: 'mapped' },
  { item: 'Your attention, sold to advertisers', price: 'auctioned' },
  { item: 'Your words, used to train the next model', price: 'absorbed' },
]

export default function Money() {
  const [open, setOpen] = useState(false)

  return (
    <RoomLayout slug="money">
      <div className="card">
        <p className="card-title">Here’s your receipt for a “free” service.</p>

        <div className="card-insight">
          <strong>Why this matters:</strong> price tags are easy to compare. Data extraction,
          attention capture, and model training value are much harder to see.
        </div>

        <div className={`receipt ${open ? 'open' : ''}`}>
          <div className="receipt-head">FREE SERVICE — RECEIPT</div>
          <div className="receipt-row total-shown">
            <span>Amount charged</span>
            <span>$0.00</span>
          </div>

          {open && (
            <div className="receipt-items">
              <div className="receipt-divider">What you actually paid with</div>
              {LINE_ITEMS.map((l, i) => (
                <div key={l.item} className="receipt-row item" style={{ animationDelay: `${i * 90}ms` }}>
                  <span>{l.item}</span>
                  <span className="muted">{l.price}</span>
                </div>
              ))}
              <div className="receipt-row grand-total">
                <span>TOTAL</span>
                <span>YOU</span>
              </div>
            </div>
          )}
        </div>

        {!open ? (
          <button className="btn" onClick={() => setOpen(true)}>
            Reveal the real price <Icon name="arrowRight" size={16} />
          </button>
        ) : (
          <p className="card-foot">
            If you’re not paying with money, you’re paying with data and attention. That’s not
            evil by default — but it should be <strong>visible</strong>, and it usually isn’t.
          </p>
        )}
      </div>
    </RoomLayout>
  )
}
