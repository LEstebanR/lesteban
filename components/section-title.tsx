export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="group flex w-fit flex-col gap-2">
      <h2 className="font-heading text-[clamp(2.25rem,9.5vw,4.5rem)] leading-none font-extrabold tracking-tight">
        {children}
      </h2>
      <div aria-hidden="true" className="squiggle-line w-full" />
    </div>
  )
}
