'use client'

import { useId } from 'react'

/** An ethereal sheet ghost: glowing head fading out toward a ragged tail. */
function GhostGlyph({ className }: { className: string }) {
  const fade = useId()
  return (
    <svg viewBox="0 0 60 80" className={className}>
      <defs>
        <linearGradient id={fade} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--ghost-body)' }} />
          <stop
            offset="0.55"
            style={{ stopColor: 'var(--ghost-body)', stopOpacity: 0.75 }}
          />
          <stop
            offset="1"
            style={{ stopColor: 'var(--ghost-body)', stopOpacity: 0 }}
          />
        </linearGradient>
      </defs>
      <path
        fill={`url(#${fade})`}
        d="M30 4C14 4 8 18 8 32v24c0 6-4 12-6 18 6-4 10-2 13 2 3-6 7-6 10 1 3-6 8-6 10 0 3-7 7-7 10-1 3-4 7-6 13-2-2-6-6-12-6-18V32C52 18 46 4 30 4z"
      />
      <ellipse cx="22" cy="30" rx="3.6" ry="6.2" className="ghost-hollow" />
      <ellipse cx="38" cy="30" rx="3.6" ry="6.2" className="ghost-hollow" />
      <ellipse cx="30" cy="47" rx="3" ry="5.4" className="ghost-hollow" />
    </svg>
  )
}

/**
 * A ghost hiding behind the portrait frame that peeks out every few seconds.
 * CSS-driven and rendered only during the Halloween season.
 */
export function PeekingGhost() {
  return (
    <div aria-hidden="true" className="peeking-ghost">
      <GhostGlyph className="ghost-glyph" />
    </div>
  )
}

/**
 * Ghosts drifting across the viewport while you read: different sizes,
 * routes and speeds, each fading in, thinning out and coming back. Fixed,
 * pointer-transparent, Halloween season only.
 */
export function FloatingGhosts() {
  return (
    <div aria-hidden="true" className="floaters">
      {['a', 'b', 'c'].map((name) => (
        <div key={name} className={`floater floater-${name}`}>
          <GhostGlyph className="ghost-glyph floater-bob" />
        </div>
      ))}
    </div>
  )
}
