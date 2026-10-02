import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'bun:test'

import React from 'react'

const { SeasonNight } = await import('@/components/season-night')
const { CornerWeb } = await import('@/components/corner-web')

afterEach(cleanup)

describe('SeasonNight', () => {
  test('renders the ghosts, a night flock without the lantern keeper and the spider', () => {
    const { container } = render(<SeasonNight />)
    expect(container.querySelector('.floaters')).not.toBeNull()
    expect(container.querySelector('.night-bats .bat')).not.toBeNull()
    expect(container.querySelector('.bat-lurker')).toBeNull()
    expect(container.querySelector('.spider')).not.toBeNull()
  })
})

describe('CornerWeb', () => {
  test('renders a decorative web with a dangling spider', () => {
    const { container } = render(<CornerWeb />)
    const web = container.querySelector('.corner-web') as HTMLElement
    expect(web.getAttribute('aria-hidden')).toBe('true')
    expect(
      web.querySelector('.corner-web-silk path')?.getAttribute('d')
    ).toMatch(/^M120 0L/)
    expect(web.querySelector('.corner-web-spider')).not.toBeNull()
  })
})
