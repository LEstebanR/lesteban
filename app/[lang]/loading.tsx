export default function Loading() {
  return (
    <div className="flex h-[60vh] items-center justify-center">
      <div className="bg-border relative h-px w-40 overflow-hidden">
        <div className="bg-primary absolute inset-y-0 left-0 w-1/3 animate-pulse" />
      </div>
    </div>
  )
}
