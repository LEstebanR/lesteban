export default function Loading() {
  return (
    <div className="flex h-[60vh] items-center justify-center">
      <div className="relative size-16">
        <span className="ink bg-primary absolute inset-0 animate-ping rounded-full" />
        <span className="ink bg-secondary absolute inset-2 rounded-full" />
      </div>
    </div>
  )
}
