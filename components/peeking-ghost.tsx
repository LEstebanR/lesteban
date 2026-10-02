/**
 * Wireframe ghost that hides behind the portrait frame and peeks out every
 * few seconds, drawn like a HUD hologram. CSS-driven and rendered only during
 * the Halloween season.
 */
export function PeekingGhost() {
  return (
    <div aria-hidden="true" className="peeking-ghost">
      <svg
        viewBox="0 0 40 48"
        className="text-secondary size-full"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      >
        <path
          d="M5 46V20a15 15 0 0 1 30 0v26l-5-4-5 4-5-4-5 4-5-4z"
          className="ghost-sheet"
        />
        <ellipse cx="15" cy="21" rx="2.4" ry="3.4" fill="currentColor" />
        <ellipse cx="25" cy="21" rx="2.4" ry="3.4" fill="currentColor" />
        <ellipse cx="20" cy="30" rx="2" ry="2.6" fill="none" />
      </svg>
    </div>
  )
}
