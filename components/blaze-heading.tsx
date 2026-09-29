/** Section heading marked with a painted trail blaze. */
export function BlazeHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading flex items-center gap-3 text-4xl font-black tracking-tight md:text-5xl">
      <span
        aria-hidden="true"
        className="bg-primary h-[0.8em] w-[0.32em] shrink-0 rounded-[3px]"
      />
      {children}
    </h2>
  )
}
