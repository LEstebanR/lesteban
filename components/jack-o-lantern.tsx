import { useId } from 'react'

const stop = (offset: number, color: string, opacity = 1) => (
  <stop
    offset={offset}
    style={{ stopColor: `var(${color})`, stopOpacity: opacity }}
  />
)

/** The carved face, shared by the rind (cut wall) and the candlelit hole. */
const FACE = [
  // Slanted, menacing eyes: inner corners low
  'M54 84 87 97 61 107Z',
  'M146 84 113 97 139 107Z',
  // Nose
  'M93 116h14l-7-12Z',
  // Jagged grin with teeth notches
  'M46 121Q100 146 154 121l-5 17-12-4-6 13-14-6-6 12h-14l-6-12-14 6-6-13-12 4Z',
]

/**
 * A carved jack-o'-lantern lit from inside: shaded lobes, a twisted stem,
 * an angular face whose cut walls show the rind's thickness, and a candle
 * that flickers through the holes. Decorative; Halloween season only.
 */
export function JackOLantern() {
  const id = useId()
  const skin = `${id}-skin`
  const volume = `${id}-volume`
  const flame = `${id}-flame`
  const spill = `${id}-spill`
  const stem = `${id}-stem`

  return (
    <div aria-hidden="true" className="jack-lantern">
      <svg viewBox="0 0 200 190" className="size-full overflow-visible">
        <defs>
          <radialGradient id={skin} cx="0.38" cy="0.3" r="0.8">
            {stop(0, '--pumpkin-light')}
            {stop(0.45, '--pumpkin')}
            {stop(1, '--pumpkin-deep')}
          </radialGradient>
          <radialGradient id={volume} cx="0.42" cy="0.38" r="0.62">
            {stop(0.55, '--pumpkin-deep', 0)}
            {stop(1, '--pumpkin-shadow', 0.85)}
          </radialGradient>
          <radialGradient id={flame} cx="0.5" cy="0.62" r="0.7">
            {stop(0, '--flame-core')}
            {stop(0.6, '--flame')}
            {stop(1, '--pumpkin', 0.9)}
          </radialGradient>
          <radialGradient id={spill} cx="0.5" cy="0.6" r="0.5">
            {stop(0, '--flame', 0.55)}
            {stop(1, '--flame', 0)}
          </radialGradient>
          <linearGradient id={stem} x1="0" y1="0" x2="1" y2="1">
            {stop(0, '--stem')}
            {stop(1, '--stem-deep')}
          </linearGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="100" cy="182" rx="78" ry="7" className="jack-shadow" />

        {/* Lobes, back to front, each catching the light on its own */}
        <g fill={`url(#${skin})`} className="jack-ribs">
          <ellipse cx="58" cy="112" rx="48" ry="66" />
          <ellipse cx="142" cy="112" rx="48" ry="66" />
          <ellipse cx="80" cy="110" rx="40" ry="71" />
          <ellipse cx="120" cy="110" rx="40" ry="71" />
          <ellipse cx="100" cy="108" rx="33" ry="73" />
        </g>
        <ellipse cx="100" cy="110" rx="94" ry="72" fill={`url(#${volume})`} />
        <ellipse
          cx="74"
          cy="66"
          rx="14"
          ry="6"
          transform="rotate(-24 74 66)"
          className="jack-highlight"
        />

        {/* Twisted stem */}
        <path
          d="M95 42c-2-12-5-22 3-33 4-5 12-3 11 2-6 7-5 18-3 31z"
          fill={`url(#${stem})`}
        />

        {/* Light spilling over the face from inside */}
        <ellipse
          cx="100"
          cy="112"
          rx="70"
          ry="48"
          fill={`url(#${spill})`}
          className="jack-flicker"
        />

        {/* Cut walls (rind thickness), then the candlelit holes */}
        <g className="jack-rind" transform="translate(2.5 3)">
          {FACE.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
        <g fill={`url(#${flame})`} className="jack-flicker">
          {FACE.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
      </svg>
    </div>
  )
}
