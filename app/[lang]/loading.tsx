export default function Loading() {
  return (
    <div className="flex h-[60vh] items-center justify-center gap-2">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="bg-primary size-4 animate-bounce rounded-full"
          style={{ animationDelay: `${i * 120}ms` }}
        />
      ))}
    </div>
  )
}
