import { Bats } from '@/components/bats'
import { FloatingGhosts } from '@/components/peeking-ghost'
import { Spider } from '@/components/spider'

/**
 * The site-wide Halloween night, on every view: ghosts drifting behind the
 * content, bats crossing the viewport now and then, and the spider hanging in
 * the right gutter. All decorative and hidden outside the season.
 */
export function SeasonNight() {
  return (
    <>
      <FloatingGhosts />
      <Bats night />
      <Spider />
    </>
  )
}
