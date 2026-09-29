import { describe, expect, test } from 'bun:test'

import {
  createNodes,
  linkNodes,
  pointerInfluence,
  stepNodes,
} from '@/lib/neural-field'

describe('createNodes', () => {
  test('creates the requested number of nodes inside the field', () => {
    const nodes = createNodes(10, 200, 100, () => 0.5)
    expect(nodes).toHaveLength(10)
    expect(nodes[0]).toEqual({ x: 100, y: 50, vx: 0, vy: 0 })
  })

  test('uses Math.random by default', () => {
    const [node] = createNodes(1, 50, 50)
    expect(node.x).toBeGreaterThanOrEqual(0)
    expect(node.x).toBeLessThanOrEqual(50)
  })
})

describe('stepNodes', () => {
  test('moves nodes by their velocity', () => {
    const nodes = [{ x: 10, y: 10, vx: 1, vy: -1 }]
    stepNodes(nodes, 100, 100)
    expect(nodes[0]).toEqual({ x: 11, y: 9, vx: 1, vy: -1 })
  })

  test('bounces and clamps at the edges', () => {
    const nodes = [{ x: 99.5, y: 0.5, vx: 1, vy: -1 }]
    stepNodes(nodes, 100, 100)
    expect(nodes[0]).toEqual({ x: 100, y: 0, vx: -1, vy: 1 })
  })
})

describe('linkNodes', () => {
  test('links only nodes within range, stronger when closer', () => {
    const nodes = [
      { x: 0, y: 0, vx: 0, vy: 0 },
      { x: 50, y: 0, vx: 0, vy: 0 },
      { x: 500, y: 0, vx: 0, vy: 0 },
    ]
    expect(linkNodes(nodes, 100)).toEqual([{ a: 0, b: 1, strength: 0.5 }])
  })
})

describe('pointerInfluence', () => {
  const node = { x: 0, y: 0, vx: 0, vy: 0 }

  test('is zero without a pointer', () => {
    expect(pointerInfluence(node, null, 100)).toBe(0)
  })

  test('fades linearly with distance and floors at zero', () => {
    expect(pointerInfluence(node, { x: 25, y: 0 }, 100)).toBe(0.75)
    expect(pointerInfluence(node, { x: 300, y: 0 }, 100)).toBe(0)
  })
})
