import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'bun:test'

import React from 'react'

const { ScrambleText } = await import('@/components/scramble-text')

const realMatchMedia = window.matchMedia

afterEach(() => {
  cleanup()
  window.matchMedia = realMatchMedia
})

const settle = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

describe('ScrambleText', () => {
  test('renders the final text immediately for assistive tech and tests', () => {
    render(<ScrambleText text="Signal" />)
    expect(screen.getByText('Signal')).toBeDefined()
  })

  test('decodes back to the original text after a pass', async () => {
    const { container } = render(<ScrambleText text="Signal" duration={40} />)
    await settle(120)
    expect(container.textContent).toBe('Signal')
  })

  test('re-runs when the pointer enters its host', async () => {
    const { container } = render(
      <div data-scramble-host data-testid="host">
        <ScrambleText text="Host text" duration={40} />
      </div>
    )
    await settle(80)
    fireEvent.pointerEnter(screen.getByTestId('host'))
    await settle(120)
    expect(container.textContent).toBe('Host text')
  })

  test('stays still under reduced motion', async () => {
    window.matchMedia = ((query: string) => ({
      matches: true,
      media: query,
      addEventListener: () => {},
      removeEventListener: () => {},
    })) as unknown as typeof window.matchMedia
    const { container } = render(<ScrambleText text="Calm" duration={40} />)
    await settle(60)
    expect(container.textContent).toBe('Calm')
  })
})
