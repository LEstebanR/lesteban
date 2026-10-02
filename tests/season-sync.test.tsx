import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'bun:test'

import React from 'react'

import { isHalloween, isHalloweenActive } from '@/lib/season'

const { SeasonSync } = await import('@/components/season-sync')

afterEach(() => {
  cleanup()
  delete document.documentElement.dataset.season
})

describe('SeasonSync', () => {
  test('restores the season flag on mount and renders nothing', () => {
    const { container } = render(<SeasonSync lang="es" />)
    expect(container.innerHTML).toBe('')
    expect(isHalloweenActive()).toBe(isHalloween())
  })
})
