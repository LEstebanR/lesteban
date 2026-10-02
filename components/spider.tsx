/**
 * Seasonal spider hanging from the web's corner on a thread. It lowers itself
 * as the page scrolls and sways while it waits. Driven entirely by CSS (root
 * scroll timeline) and rendered only during the Halloween season, xl+.
 */
export function Spider() {
  return (
    <div aria-hidden="true" className="spider">
      <span className="spider-thread" />
      <svg
        viewBox="0 0 32 32"
        className="spider-body text-foreground"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      >
        <g className="spider-legs">
          <polyline points="12,16 7,11 4,5" />
          <polyline points="11.5,18 5,15 1,12" />
          <polyline points="11.5,20 5,22 2,27" />
          <polyline points="12.5,22.5 9,27 7,31" />
          <polyline points="20,16 25,11 28,5" />
          <polyline points="20.5,18 27,15 31,12" />
          <polyline points="20.5,20 27,22 30,27" />
          <polyline points="19.5,22.5 23,27 25,31" />
        </g>
        <line x1="16" y1="0" x2="16" y2="9.5" />
        <circle cx="16" cy="12.5" r="3" className="fill-background" />
        <ellipse
          cx="16"
          cy="20.5"
          rx="4.5"
          ry="5.5"
          className="fill-background"
        />
        <circle
          cx="14.8"
          cy="12"
          r="0.7"
          className="fill-secondary"
          stroke="none"
        />
        <circle
          cx="17.2"
          cy="12"
          r="0.7"
          className="fill-secondary"
          stroke="none"
        />
      </svg>
    </div>
  )
}
