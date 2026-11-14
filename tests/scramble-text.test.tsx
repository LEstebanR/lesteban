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

/** The animated copy (hidden from assistive tech). */
const glyphs = (root: HTMLElement) =>
  root.querySelector('[aria-hidden="true"]') as HTMLElement

describe('ScrambleText', () => {
  test('renders the final text immediately for assistive tech and tests', () => {
    render(<ScrambleText text="Signal" />)
    expect(screen.getByText('Signal')).toBeDefined()
  })

  test('decodes back to the original text after a pass', async () => {
    const { container } = render(<ScrambleText text="Signal" duration={40} />)
    await settle(120)
    expect(glyphs(container).textContent).toBe('Signal')
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
    expect(glyphs(container).textContent).toBe('Host text')
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
    expect(glyphs(container).textContent).toBe('Calm')
  })

  test('keeps a stable sr-only copy while the glyphs animate', async () => {
    const { container } = render(
      <ScrambleText text="Accessible name" duration={200} />
    )
    await settle(40)
    expect(container.querySelector('.sr-only')?.textContent).toBe(
      'Accessible name'
    )
    expect(glyphs(container)).not.toBeNull()
  })
})
