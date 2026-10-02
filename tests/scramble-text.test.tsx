import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'bun:test'

import React from 'react'

const { GLYPHS, OCCULT_GLYPHS, ScrambleText, randomGlyph } = await import(
  '@/components/scramble-text'
)
const { DecodeMask } = await import('@/components/decode-mask')

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

describe('randomGlyph', () => {
  const realRandom = Math.random

  afterEach(() => {
    Math.random = realRandom
    delete document.documentElement.dataset.season
  })

  test('draws from the console glyphs out of season', () => {
    Math.random = () => 0.9999
    expect(randomGlyph()).toBe(GLYPHS.at(-1) as string)
  })

  test('picks up occult interference during Halloween', () => {
    document.documentElement.dataset.season = 'halloween'
    Math.random = () => 0.9999
    expect(randomGlyph()).toBe(OCCULT_GLYPHS.at(-1) as string)
  })
})

describe('DecodeMask', () => {
  const cellsOf = (container: HTMLElement) =>
    Array.from(container.querySelectorAll<HTMLElement>('.decode-cell'))

  test('renders a cols × rows grid of glyph cells', () => {
    const { container } = render(<DecodeMask cols={3} rows={2} />)
    expect(cellsOf(container)).toHaveLength(6)
  })

  test('clears every cell after a pass', async () => {
    const { container } = render(
      <DecodeMask cols={2} rows={2} duration={40} delay={0} />
    )
    await settle(150)
    expect(cellsOf(container).every((cell) => cell.style.opacity === '0')).toBe(
      true
    )
  })

  test('re-runs when the pointer enters its host', async () => {
    const { container } = render(
      <div data-scramble-host data-testid="mask-host">
        <DecodeMask cols={2} rows={2} duration={40} delay={0} />
      </div>
    )
    await settle(120)
    fireEvent.pointerEnter(screen.getByTestId('mask-host'))
    await settle(150)
    expect(cellsOf(container).every((cell) => cell.style.opacity === '0')).toBe(
      true
    )
  })

  test('leaves cells to the CSS fallback under reduced motion', async () => {
    window.matchMedia = ((query: string) => ({
      matches: true,
      media: query,
      addEventListener: () => {},
      removeEventListener: () => {},
    })) as unknown as typeof window.matchMedia
    const { container } = render(
      <DecodeMask cols={2} rows={2} duration={40} delay={0} />
    )
    await settle(80)
    expect(cellsOf(container).every((cell) => cell.style.opacity === '')).toBe(
      true
    )
  })
})
