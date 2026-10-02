const SIZE = 120
const SPOKES = [97, 110, 123, 136, 149, 162, 175]
const RINGS = [16, 31, 48, 67, 88, 110]

const point = (radius: number, angle: number) => {
  const rad = (angle * Math.PI) / 180
  return [SIZE + Math.cos(rad) * radius, Math.sin(rad) * radius]
}

const round = (value: number) => Math.round(value * 10) / 10

/** Spokes from the corner plus ring threads sagging toward it, as one path. */
const SILK = [
  ...SPOKES.map((angle) => {
    const [x, y] = point(RINGS[RINGS.length - 1], angle)
    return `M${SIZE} 0L${round(x)} ${round(y)}`
  }),
  ...RINGS.flatMap((radius) =>
    SPOKES.slice(1).map((angle, i) => {
      const [x1, y1] = point(radius, SPOKES[i])
      const [x2, y2] = point(radius, angle)
      const [cx, cy] = point(radius * 0.86, (SPOKES[i] + angle) / 2)
      return `M${round(x1)} ${round(y1)}Q${round(cx)} ${round(cy)} ${round(x2)} ${round(y2)}`
    })
  ),
].join('')

/**
 * A cobweb spun across the top-right corner of its positioned parent, with a
 * small spider dangling from it on a swaying thread. Decorative, Halloween
 * season only.
 */
export function CornerWeb() {
  return (
    <div aria-hidden="true" className="corner-web">
      <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="corner-web-silk">
        <path d={SILK} />
      </svg>
      <div className="corner-web-dangler">
        <span className="corner-web-thread" />
        <svg
          viewBox="0 0 32 32"
          className="corner-web-spider text-foreground"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="square"
        >
          <polyline points="12,16 7,11 4,5" />
          <polyline points="11.5,19 5,16 1,13" />
          <polyline points="11.5,21 5,23 2,28" />
          <polyline points="20,16 25,11 28,5" />
          <polyline points="20.5,19 27,16 31,13" />
          <polyline points="20.5,21 27,23 30,28" />
          <circle cx="16" cy="13" r="3" className="fill-background" />
          <ellipse
            cx="16"
            cy="21"
            rx="4.5"
            ry="5.5"
            className="fill-background"
          />
          <circle
            cx="14.8"
            cy="12.5"
            r="0.8"
            className="fill-primary"
            stroke="none"
          />
          <circle
            cx="17.2"
            cy="12.5"
            r="0.8"
            className="fill-primary"
            stroke="none"
          />
        </svg>
      </div>
    </div>
  )
}
