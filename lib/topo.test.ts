import { describe, expect, test } from 'bun:test'

import { contourPath, peakContours } from '@/lib/topo'

describe('contourPath', () => {
  test('returns a closed path with one point per sample', () => {
    const d = contourPath(100, 100, 50, 1, 1.3, 8)
    expect(d.startsWith('M')).toBe(true)
    expect(d.endsWith('Z')).toBe(true)
    expect(d.split('L')).toHaveLength(8)
  })

  test('is deterministic for the same seed', () => {
    expect(contourPath(0, 0, 10, 2)).toBe(contourPath(0, 0, 10, 2))
    expect(contourPath(0, 0, 10, 2)).not.toBe(contourPath(0, 0, 10, 3))
  })
})

describe('peakContours', () => {
  test('creates one ring per level, shrinking inwards', () => {
    const rings = peakContours({
      cx: 0,
      cy: 0,
      radius: 100,
      rings: 4,
      seed: 0,
    })
    expect(rings).toHaveLength(4)
    const firstX = (d: string) => Number(d.slice(1).split(' ')[0])
    expect(firstX(rings[0])).toBeGreaterThan(firstX(rings[3]))
  })
})
