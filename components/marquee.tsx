export function Marquee({ items }: { items: string[] }) {
  const row = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-8">
          <span>{item}</span>
          <span aria-hidden="true" className="text-primary">
            ✺
          </span>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden py-6">
      <div className="marquee bg-secondary text-secondary-foreground border-border -mx-4 -rotate-1 overflow-hidden border-y-2 py-4">
        <div className="marquee-track font-heading flex w-max text-2xl font-extrabold md:text-3xl">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  )
}
