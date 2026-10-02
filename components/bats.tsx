const FLOCK = [
  { top: '14%', scale: 1, delay: 0 },
  { top: '9%', scale: 0.7, delay: 0.45 },
  { top: '22%', scale: 0.85, delay: 0.9 },
  { top: '17%', scale: 0.55, delay: 1.5 },
  { top: '6%', scale: 0.6, delay: 2.1 },
]

/**
 * A small flock of bats crossing the blood moon now and then. Decorative,
 * CSS-driven, and rendered only during the Halloween season.
 */
export function Bats() {
  return (
    <div aria-hidden="true" className="bats">
      {FLOCK.map(({ top, scale, delay }) => (
        <span
          key={delay}
          className="bat"
          style={
            {
              top,
              '--bat-scale': scale,
              '--bat-delay': `${delay}s`,
            } as React.CSSProperties
          }
        >
          <svg viewBox="0 0 24 12" className="bat-wings">
            <path d="M12 4.2c-.5-1.2-1.4-1.9-1.4-1.9s.1 1.1-.5 1.5C8.7 2.2 6.4 1.1 3.4 1.5c1.5 1 2 2.6 1.6 4C3.6 4.9 1.6 5.1 0 6.3c2.4.2 4.4 1.4 5.6 3.1 1.4-1.1 3.6-.8 5 .6.4-1 .9-1.4 1.4-1.4s1 .4 1.4 1.4c1.4-1.4 3.6-1.7 5-.6 1.2-1.7 3.2-2.9 5.6-3.1-1.6-1.2-3.6-1.4-5-.8-.4-1.4.1-3 1.6-4-3-.4-5.3.7-6.7 2.3-.6-.4-.5-1.5-.5-1.5s-.9.7-1.4 1.9z" />
          </svg>
        </span>
      ))}
    </div>
  )
}
