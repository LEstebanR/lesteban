import { ScrambleText } from '@/components/scramble-text'

interface SectionHeadingProps {
  children: string
  meta?: string
}

export function SectionHeading({ children, meta }: SectionHeadingProps) {
  return (
    <div data-scramble-host className="flex items-end gap-4">
      <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
        <span aria-hidden="true" className="slash text-primary mr-2">
          /
        </span>
        <ScrambleText text={children} />
      </h2>
      <div className="bg-border mb-2.5 h-px flex-1">
        <div className="reveal-line bg-primary/60 h-px w-full" />
      </div>
      {meta && (
        <span className="text-muted-foreground mb-1 font-mono text-xs">
          {meta}
        </span>
      )}
    </div>
  )
}
