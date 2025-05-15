import { H2 } from '@components/ui/typography'

export function Logo() {
  return (
    <div className="flex items-end gap-1">
      <div className="bg-primary mb-1 flex h-7 w-7 items-center justify-center rounded-sm">
        <H2 color="white">L</H2>
      </div>
      <div className="flex h-7 flex-col justify-end">
        <H2 color="primary">esteban.dev</H2>
      </div>
    </div>
  )
}
