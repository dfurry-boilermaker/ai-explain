import { useState } from 'react'
import './demos.css'

// Teaching demo: the classic attention example. Hover/tap a word and see how
// strongly it "attends" to every other word. Weights are hand-set to reflect
// the real, widely-cited behavior (the pronoun "it" attends most to "animal").
// This is an illustrative single-head view, not live model output.

const TOKENS = ['The', 'animal', "didn't", 'cross', 'the', 'street', 'because', 'it', 'was', 'tired']

// attn[i] = how much token i attends to each other token (0..1), self omitted.
const ATTN = {
  7: { 1: 0.82, 5: 0.34, 8: 0.18, 3: 0.12 }, // "it" -> animal (strong), street, was, cross
  3: { 1: 0.55, 5: 0.62, 0: 0.1 },           // "cross" -> animal, street
  9: { 1: 0.6, 7: 0.45 },                     // "tired" -> animal, it
  6: { 3: 0.4, 9: 0.5 },                      // "because" -> cross, tired
}

export default function Attention() {
  const [active, setActive] = useState(7)
  const weights = ATTN[active] || {}

  return (
    <div className="demo">
      <p className="demo-label">Hover a word to see what it pays attention to</p>

      <div className="attn-sentence" role="list">
        {TOKENS.map((tok, i) => {
          const w = i === active ? 1 : (weights[i] || 0)
          const isSource = i === active
          const hasAttn = ATTN[i] !== undefined
          return (
            <button
              key={i}
              role="listitem"
              className={`attn-tok ${isSource ? 'source' : ''} ${hasAttn ? 'hoverable' : ''}`}
              style={{ '--w': w }}
              onMouseEnter={() => hasAttn && setActive(i)}
              onFocus={() => hasAttn && setActive(i)}
            >
              {tok}
            </button>
          )
        })}
      </div>

      <p className="demo-caption">
        Watching <strong>“{TOKENS[active]}”</strong>:
        {Object.keys(weights).length
          ? ` it leans most on “${TOKENS[Number(Object.entries(weights).sort((a, b) => b[1] - a[1])[0][0])]}.”`
          : ' the highlighted words are the ones it draws meaning from.'}
        {' '}This is how the model knows “it” refers to the animal, not the street.
      </p>
    </div>
  )
}
