// Inline line-icons replacing all emoji. Stroke-based, inherit currentColor,
// so they take each theme's accent cleanly and stay crisp at any size.
const PATHS = {
  // Power — concentration / electricity
  power: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  // Trust — eye
  trust: (
    <>
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  // Money — banknote
  money: (
    <>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M6 9v.01M18 15v.01" />
    </>
  ),
  // Labor — people behind the curtain
  labor: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.2a3 3 0 0 1 0 5.6M18 20a6 6 0 0 0-3.6-5.5" />
    </>
  ),
  // Accountability — scales
  account: (
    <>
      <path d="M12 3v18M7 21h10" />
      <path d="M12 5 5 7m7-2 7 2" />
      <path d="M5 7 2.5 13a3 3 0 0 0 5 0L5 7Zm14 0-2.5 6a3 3 0 0 0 5 0L19 7Z" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowLeft: <path d="M19 12H5M11 18l-6-6 6-6" />,
  check: <path d="M20 6 9 17l-5-5" />,
  external: (
    <>
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5" />
    </>
  ),
  robot: (
    <>
      <rect x="5" y="8" width="14" height="11" rx="3" />
      <path d="M12 8V4M9 4h6" />
      <circle cx="9.5" cy="13" r="1.2" />
      <circle cx="14.5" cy="13" r="1.2" />
    </>
  ),
}

export default function Icon({ name, size = 24, strokeWidth = 1.8, className = '' }) {
  const glyph = PATHS[name]
  if (!glyph) return null
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {glyph}
    </svg>
  )
}
