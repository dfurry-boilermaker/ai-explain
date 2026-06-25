import { useState } from 'react'
import './demos.css'

// Teaching demo: type text and watch it split into tokens, each becoming a
// little vector of numbers. This is an illustrative tokenizer (whitespace +
// common sub-word splits), not a real BPE — enough to convey the idea that
// words become chunks become numbers. Deterministic so it never misleads.

const DEFAULT = 'Data visualization empowers users'

// A few real-ish subword splits to show tokens ≠ words.
const SUBWORDS = { visualization: ['visual', 'ization'], empowers: ['emp', 'owers'], unbelievable: ['un', 'believ', 'able'] }

function tokenize(text) {
  const words = text.split(/(\s+)/).filter((w) => w.trim().length)
  const tokens = []
  for (const w of words) {
    const lower = w.toLowerCase().replace(/[^a-z]/g, '')
    if (SUBWORDS[lower]) {
      SUBWORDS[lower].forEach((p, i) => tokens.push(i === 0 ? p : p))
    } else {
      tokens.push(w)
    }
  }
  return tokens
}

// Stable pseudo-vector from a token string (so the "numbers" are consistent).
function vec(token) {
  let h = 0
  for (let i = 0; i < token.length; i++) h = (h * 31 + token.charCodeAt(i)) % 1000
  const r = (n) => (((h * (n + 7)) % 200) - 100) / 100
  return [r(1), r(2), r(3), r(4)]
}

const PALETTE = ['var(--power)', 'var(--trust)', 'var(--money)', 'var(--labor)', 'var(--account)']

export default function Tokenizer() {
  const [text, setText] = useState(DEFAULT)
  const tokens = tokenize(text)

  return (
    <div className="demo">
      <label className="demo-label" htmlFor="tok-input">Type a sentence</label>
      <input
        id="tok-input"
        className="demo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={60}
        spellCheck="false"
      />

      <div className="tok-row" aria-live="polite">
        {tokens.length === 0 && <p className="demo-empty">Start typing to see tokens…</p>}
        {tokens.map((t, i) => (
          <div key={i} className="tok" style={{ '--c': PALETTE[i % PALETTE.length] }}>
            <span className="tok-text">{t}</span>
            <span className="tok-vec">
              [{vec(t).map((n) => n.toFixed(2)).join(', ')}…]
            </span>
          </div>
        ))}
      </div>

      <p className="demo-caption">
        {tokens.length} token{tokens.length === 1 ? '' : 's'}. Each one is converted into a list of
        numbers — here just 4 are shown; real models use thousands per token.
      </p>
    </div>
  )
}
