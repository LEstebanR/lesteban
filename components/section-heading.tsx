import { CrawlingSpider } from '@/components/crawling-spider'
import { ScrambleText } from '@/components/scramble-text'

export function SectionHeading({ children }: { children: string }) {
  return (
    <div data-scramble-host className="flex items-end gap-4">
      <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
        <span aria-hidden="true" className="slash text-primary mr-2">
          /
        </span>
        <ScrambleText text={children} />
      </h2>
      <div className="bg-border relative mb-2.5 h-px flex-1">
        <div className="reveal-line bg-primary/60 h-px w-full" />
        {/* Each section's spider sets off at its own moment */}
        <CrawlingSpider delay={(children.length * 1.7) % 9} />
      </div>
    </div>
  )
}
