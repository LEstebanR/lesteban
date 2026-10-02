import { cleanup, render } from '@testing-library/react'
import { afterEach, describe, expect, test } from 'bun:test'

import React from 'react'

const { Spider } = await import('@/components/spider')

afterEach(cleanup)

describe('Spider', () => {
  test('renders a decorative spider hanging on its thread', () => {
    const { container } = render(<Spider />)
    const spider = container.querySelector('.spider') as HTMLElement
    expect(spider.getAttribute('aria-hidden')).toBe('true')
    expect(spider.querySelector('.spider-thread')).not.toBeNull()
    expect(spider.querySelector('svg.spider-body')).not.toBeNull()
  })
})
