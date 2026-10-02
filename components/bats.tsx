const FLOCK = [
  { top: '12%', scale: 1, delay: 0 },
  { top: '6%', scale: 0.7, delay: 0.6 },
  { top: '22%', scale: 0.85, delay: 1.3 },
  { top: '16%', scale: 0.6, delay: 2.2 },
  { top: '30%', scale: 0.75, delay: 3.4 },
]

/** One wing (the right one), hinged at the shoulder: membrane and fingers. */
function Wing() {
  return (
    <g className="bat-wing">
      <path d="M33.5 12C40 5.5 50 3.5 62 6.5Q57 9.5 54.5 15.5Q50 13.5 46 18Q42 16 38 21L33.5 19.5Z" />
      <path
        className="bat-bones"
        d="M34 13L62 6.5M34 13.5L54.5 15.5M34 14L46 18"
      />
    </g>
  )
}

/** A front-view bat: pointed ears, ember eyes, wings flapping on their hinge. */
function BatGlyph() {
  return (
    <svg viewBox="0 0 64 32" className="bat-glyph">
      <Wing />
      <g transform="matrix(-1 0 0 1 64 0)">
        <Wing />
      </g>
      <path d="M29.4 9L28.8 3.6L31.4 7.2ZM34.6 9L35.2 3.6L32.6 7.2Z" />
      <circle cx="32" cy="10" r="3.3" />
      <ellipse cx="32" cy="17.5" rx="3.2" ry="6.4" />
      <circle cx="30.8" cy="9.7" r="0.75" className="bat-eye" />
      <circle cx="33.2" cy="9.7" r="0.75" className="bat-eye" />
    </svg>
  )
}

/**
 * A colony of bats fluttering across the hero (erratic, bobbing flight), plus
 * one that keeps circling the jack-o'-lantern. With `night`, a sparser flock
 * crosses the whole viewport instead, on every view. Decorative, CSS-driven,
 * and rendered only during the Halloween season.
 */
export function Bats({ night = false }: { night?: boolean }) {
  return (
    <div aria-hidden="true" className={night ? 'bats night-bats' : 'bats'}>
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
          <BatGlyph />
        </span>
      ))}
      {!night && (
        <span className="bat-lurker">
          <BatGlyph />
        </span>
      )}
    </div>
  )
}
