import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'bun:test'

import React from 'react'

const { FloatingGhosts, PeekingGhost } = await import(
  '@/components/peeking-ghost'
)

afterEach(cleanup)

describe('FloatingGhosts', () => {
  test('renders three decorative ghosts on their own routes', () => {
    const { container } = render(<FloatingGhosts />)
    const layer = container.querySelector('.floaters') as HTMLElement
    expect(layer.getAttribute('aria-hidden')).toBe('true')
    for (const name of ['a', 'b', 'c']) {
      expect(layer.querySelector(`.floater-${name} svg`)).not.toBeNull()
    }
  })

  test('each ghost gets its own gradient id', () => {
    const { container } = render(<FloatingGhosts />)
    const ids = Array.from(container.querySelectorAll('linearGradient')).map(
      (gradient) => gradient.id
    )
    expect(new Set(ids).size).toBe(3)
  })
})

describe('PeekingGhost', () => {
  test('renders a decorative ghost behind the portrait', () => {
    const { container } = render(<PeekingGhost />)
    const ghost = container.querySelector('.peeking-ghost') as HTMLElement
    expect(ghost.getAttribute('aria-hidden')).toBe('true')
    expect(ghost.querySelector('svg')).not.toBeNull()
  })
})
