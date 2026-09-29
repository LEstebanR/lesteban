export function PosterTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-heading misregister text-[clamp(2.25rem,8vw,5.5rem)] leading-[0.9] font-black tracking-tight">
      {children}
    </h2>
  )
}
