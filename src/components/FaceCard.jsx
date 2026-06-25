// Illustrated portraits for the Trust game. Rather than ship copyrighted
// photos, these SVG faces let us bake in the ACTUAL tells experts look for
// in AI-generated images — and annotate them on reveal, teaching the skill.
export default function FaceCard({ variant, revealed }) {
  const isFake = variant === 'fake'
  return (
    <svg viewBox="0 0 200 150" className="face-svg" role="img"
         aria-label={isFake ? 'AI-generated portrait' : 'photographed portrait'}>
      <defs>
        <linearGradient id={`bg-${variant}`} x1="0" y1="0" x2="1" y2="1">
          {isFake ? (
            <>
              {/* warped, smeared background — a classic AI tell */}
              <stop offset="0%" stopColor="#3a4d6b" />
              <stop offset="45%" stopColor="#6b5a7a" />
              <stop offset="55%" stopColor="#4a6b5a" />
              <stop offset="100%" stopColor="#2a3550" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="#2f3e57" />
              <stop offset="100%" stopColor="#1f2a3d" />
            </>
          )}
        </linearGradient>
      </defs>

      <rect width="200" height="150" fill={`url(#bg-${variant})`} />

      {/* shoulders */}
      <path d="M40 150 Q100 95 160 150 Z" fill={isFake ? '#5b6b8c' : '#4a5a78'} />

      {/* face */}
      <ellipse cx="100" cy="70" rx="34" ry="40" fill="#e3b08a" />

      {/* hair */}
      <path d="M64 60 Q66 26 100 26 Q134 26 136 60 Q126 44 100 44 Q74 44 64 60 Z"
            fill={isFake ? '#3a2e2a' : '#332722'} />

      {/* eyes */}
      <ellipse cx="86" cy="66" rx="5" ry="3.4" fill="#fff" />
      <circle cx="86" cy="66" r="2.2" fill="#3a2a1a" />
      {/* fake: subtly mismatched second eye (asymmetry tell) */}
      <ellipse cx="114" cy={isFake ? '64' : '66'} rx={isFake ? '5.8' : '5'} ry="3.4" fill="#fff" />
      <circle cx="114" cy={isFake ? '64' : '66'} r="2.2" fill="#3a2a1a" />

      {/* glasses — fake ones are asymmetric / disconnected */}
      <g stroke="#1a1a1a" strokeWidth="1.6" fill="none">
        <rect x="78" y="60" width="16" height="11" rx="3" />
        <rect x={isFake ? '107' : '106'} y={isFake ? '58' : '60'} width={isFake ? '18' : '16'} height="11" rx="3" />
        <path d={isFake ? 'M94 64 Q100 66 107 62' : 'M94 65 H106'} />
      </g>

      {/* nose + mouth (fake: slightly irregular teeth) */}
      <path d="M100 70 L97 82 Q100 84 103 82 Z" fill="#cf9a73" />
      {isFake ? (
        <g>
          <path d="M90 92 Q100 99 110 92 Q100 95 90 92 Z" fill="#fff" />
          <line x1="96" y1="92" x2="96" y2="96" stroke="#cf9a73" strokeWidth="0.6" />
          <line x1="103" y1="91" x2="103" y2="97" stroke="#cf9a73" strokeWidth="0.6" />
        </g>
      ) : (
        <path d="M91 92 Q100 97 109 92" stroke="#a85f4a" strokeWidth="1.8" fill="none" />
      )}

      {/* earrings — fake: only one ear has one (asymmetry tell) */}
      <circle cx="67" cy="80" r="2.4" fill="#f5c542" />
      {!isFake && <circle cx="133" cy="80" r="2.4" fill="#f5c542" />}

      {revealed && isFake && (
        <g className="tell-markers" stroke="#fb7185" strokeWidth="1.4" fill="none">
          <circle cx="116" cy="63" r="11" />
          <circle cx="100" cy="93" r="11" />
          <circle cx="133" cy="80" r="9" />
          <circle cx="50" cy="40" r="13" />
        </g>
      )}
    </svg>
  )
}
