import { useState } from 'react'
import './demos.css'

// Teaching demo: a fixed set of plausible next-word candidates with base
// scores (logits). A temperature slider reshapes them through softmax in
// real time, exactly like a real model — low temp sharpens to the top word,
// high temp flattens toward randomness. The numbers are illustrative but the
// math (softmax over logits / T) is real.

const PROMPT = 'The weather today is'
const CANDIDATES = [
  { word: 'sunny', logit: 3.1 },
  { word: 'cold', logit: 2.4 },
  { word: 'beautiful', logit: 2.0 },
  { word: 'unpredictable', logit: 1.2 },
  { word: 'purple', logit: -0.6 },
]

function softmax(logits, T) {
  const t = Math.max(T, 0.05)
  const scaled = logits.map((l) => l / t)
  const max = Math.max(...scaled)
  const exps = scaled.map((s) => Math.exp(s - max))
  const sum = exps.reduce((a, b) => a + b, 0)
  return exps.map((e) => e / sum)
}

export default function NextToken() {
  const [temp, setTemp] = useState(0.8)
  const probs = softmax(CANDIDATES.map((c) => c.logit), temp)
  const top = probs.indexOf(Math.max(...probs))

  return (
    <div className="demo">
      <p className="nt-prompt">
        {PROMPT} <span className="nt-cursor">▍</span>
      </p>

      <div className="nt-bars" aria-live="polite">
        {CANDIDATES.map((c, i) => (
          <div key={c.word} className={`nt-bar-row ${i === top ? 'top' : ''}`}>
            <span className="nt-word">{c.word}</span>
            <span className="nt-track">
              <span className="nt-fill" style={{ width: `${Math.max(probs[i] * 100, 1.5)}%` }} />
            </span>
            <span className="nt-pct">{(probs[i] * 100).toFixed(1)}%</span>
          </div>
        ))}
      </div>

      <div className="nt-controls">
        <label htmlFor="temp">
          Temperature <strong>{temp.toFixed(2)}</strong>
        </label>
        <input
          id="temp"
          type="range"
          min="0.1"
          max="2"
          step="0.05"
          value={temp}
          onChange={(e) => setTemp(Number(e.target.value))}
          className="slider"
        />
        <div className="nt-ends">
          <span>0.1 · predictable</span>
          <span>creative · 2.0</span>
        </div>
      </div>

      <p className="demo-caption">
        The model scores every possible next word, then “softmax” turns those scores into
        percentages that always add up to 100%. Low temperature picks the safe favorite; high
        temperature spreads the odds and gets surprising.
      </p>
    </div>
  )
}
