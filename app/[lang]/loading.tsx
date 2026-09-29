export default function Loading() {
  return (
    <div className="flex h-[60vh] items-center justify-center">
      <svg aria-hidden="true" viewBox="0 0 120 40" className="w-32">
        <path
          d="M 4 30 C 30 30, 34 10, 60 10 S 90 30, 116 20"
          pathLength={1}
          className="route"
          style={{ animationIterationCount: 'infinite' }}
        />
      </svg>
    </div>
  )
}
