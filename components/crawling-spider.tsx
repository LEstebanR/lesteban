/**
 * A small spider that walks along the top edge of its positioned parent the
 * way spiders do: dash, freeze, dash, turn back. CSS-driven (container query
 * units), rendered only during the Halloween season.
 */
export function CrawlingSpider({ delay = 0 }: { delay?: number }) {
  return (
    <div
      aria-hidden="true"
      className="crawler"
      style={{ '--crawl-delay': `${delay}s` } as React.CSSProperties}
    >
      <svg
        viewBox="0 0 16 16"
        className="crawler-spider text-foreground"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="square"
      >
        <g className="crawler-legs-a">
          <polyline points="6.4,6 3,3.5 1.5,1" />
          <polyline points="6.2,9 2.5,9.5 0.5,12" />
          <polyline points="9.8,7.5 13,6 15,4" />
          <polyline points="9.6,10.5 12.5,13 13.5,15.5" />
        </g>
        <g className="crawler-legs-b">
          <polyline points="6.2,7.5 3,6 1,4" />
          <polyline points="6.4,10.5 3.5,13 2.5,15.5" />
          <polyline points="9.6,6 13,3.5 14.5,1" />
          <polyline points="9.8,9 13.5,9.5 15.5,12" />
        </g>
        <circle cx="8" cy="5" r="1.6" className="fill-background" />
        <ellipse
          cx="8"
          cy="9.5"
          rx="2.4"
          ry="3.2"
          className="fill-background"
        />
        <path d="M8 8.2v3.4M6.9 9.9h2.2" className="stroke-secondary" />
        <circle
          cx="7.4"
          cy="4.5"
          r="0.45"
          className="fill-secondary"
          stroke="none"
        />
        <circle
          cx="8.6"
          cy="4.5"
          r="0.45"
          className="fill-secondary"
          stroke="none"
        />
      </svg>
    </div>
  )
}
