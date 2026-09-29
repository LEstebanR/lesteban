import { peakContours } from '@/lib/topo'

const PEAKS = [
  { cx: 930, cy: 190, radius: 360, rings: 14, seed: 0.8, stretch: 1.35 },
  { cx: 260, cy: 620, radius: 260, rings: 9, seed: 2.4, stretch: 1.5 },
]

/** Route from the valley (first job) to the summit (now). */
const ROUTE =
  'M 560 770 C 600 700, 620 620, 660 580 S 720 480, 740 440 S 790 330, 830 300 S 900 250, 930 190'

export const WAYPOINTS = [
  { x: 660, y: 580, label: 'Nominapp', delay: 1.0 },
  { x: 740, y: 440, label: 'DevPeoplz', delay: 1.5 },
  { x: 830, y: 300, label: 'Aleluya', delay: 2.0 },
]

export function TrailMap({ summitLabel }: { summitLabel: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 760"
      preserveAspectRatio="xMidYMid slice"
      className="size-full"
    >
      <g className="terrain">
        {PEAKS.map((peak) =>
          peakContours(peak).map((d, i) => (
            <path
              key={`${peak.seed}-${i}`}
              d={d}
              className={i % 4 === 0 ? 'contour contour-index' : 'contour'}
            />
          ))
        )}
      </g>

      <path d={ROUTE} pathLength={1} className="route" />
      <path d={ROUTE} className="route-dashes" />

      {WAYPOINTS.map((point) => (
        <g
          key={point.label}
          className="waypoint"
          style={{ animationDelay: `${point.delay}s` }}
        >
          <circle
            cx={point.x}
            cy={point.y}
            r="7"
            className="fill-background stroke-primary"
            strokeWidth="3"
          />
          <text
            x={point.x + 14}
            y={point.y + 22}
            className="fill-muted-foreground font-mono text-[15px]"
          >
            {point.label}
          </text>
        </g>
      ))}

      <g className="waypoint" style={{ animationDelay: '2.6s' }}>
        <circle cx="930" cy="190" r="9" className="beacon fill-primary" />
        <circle cx="930" cy="190" r="9" className="fill-primary" />
        <path
          d="M 930 190 L 930 138"
          className="stroke-foreground"
          strokeWidth="2.5"
        />
        <path d="M 930 138 L 962 148 L 930 158 Z" className="fill-primary" />
        <text
          x="946"
          y="214"
          className="fill-foreground font-mono text-[16px] font-bold"
        >
          {summitLabel}
        </text>
      </g>
    </svg>
  )
}
