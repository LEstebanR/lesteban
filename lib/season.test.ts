import { afterEach, describe, expect, test } from 'bun:test'

import {
  HALLOWEEN_MONTH,
  SEASON_SCRIPT,
  isHalloween,
  isHalloweenActive,
} from '@/lib/season'

afterEach(() => {
  delete document.documentElement.dataset.season
})

describe('isHalloween', () => {
  test('is true for every day of October', () => {
    expect(isHalloween(new Date(2026, 9, 1))).toBe(true)
    expect(isHalloween(new Date(2026, 9, 31, 23, 59))).toBe(true)
  })

  test('is false outside October', () => {
    expect(isHalloween(new Date(2026, 8, 30))).toBe(false)
    expect(isHalloween(new Date(2026, 10, 1))).toBe(false)
  })

  test('defaults to the current date', () => {
    expect(isHalloween()).toBe(new Date().getMonth() === HALLOWEEN_MONTH)
  })
})

describe('SEASON_SCRIPT', () => {
  test('flags <html> only when run in October', () => {
    new Function(SEASON_SCRIPT)()
    expect(isHalloweenActive()).toBe(isHalloween())
  })
})

describe('isHalloweenActive', () => {
  test('reads the data-season flag', () => {
    expect(isHalloweenActive()).toBe(false)
    document.documentElement.dataset.season = 'halloween'
    expect(isHalloweenActive()).toBe(true)
  })
})
