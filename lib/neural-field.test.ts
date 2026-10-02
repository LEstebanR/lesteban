import { describe, expect, test } from 'bun:test'

import {
  createNodes,
  createWeb,
  forEachLink,
  forEachThread,
  pointerInfluence,
  stepNodes,
  stepWeb,
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

describe('forEachLink', () => {
  test('visits only nodes within range, stronger when closer', () => {
    const nodes = [
      { x: 0, y: 0, vx: 0, vy: 0 },
      { x: 50, y: 0, vx: 0, vy: 0 },
      { x: 500, y: 0, vx: 0, vy: 0 },
    ]
    const links: number[][] = []
    forEachLink(nodes, 100, (a, b, strength) => links.push([a, b, strength]))
    expect(links).toEqual([[0, 1, 0.5]])
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

describe('createWeb', () => {
  test('weaves spokes × rings nodes resting on their anchors', () => {
    const web = createWeb(400, 300, 5, 3, () => 0.5)
    expect(web.nodes).toHaveLength(15)
    expect(web.spokes).toBe(5)
    expect(web.rings).toBe(3)
    for (const node of web.nodes) {
      expect(node.x).toBe(node.ax)
      expect(node.y).toBe(node.ay)
    }
  })

  test('fans out from the top-right corner, straight down to straight left', () => {
    const { nodes } = createWeb(400, 300, 5, 3, () => 0.5)
    const [down, , , , left] = nodes
    expect(down.x).toBeCloseTo(400)
    expect(down.y).toBeGreaterThan(0)
    expect(left.x).toBeLessThan(400)
    expect(left.y).toBeCloseTo(0)
  })

  test('outer rings sit further from the hub', () => {
    const { nodes } = createWeb(400, 300, 4, 3, () => 0.5)
    const reach = (i: number) => Math.hypot(nodes[i].x - 400, nodes[i].y)
    expect(reach(4)).toBeGreaterThan(reach(0))
    expect(reach(8)).toBeGreaterThan(reach(4))
  })

  test('uses Math.random and sensible defaults', () => {
    const web = createWeb(400, 300)
    expect(web.nodes).toHaveLength(web.spokes * web.rings)
  })
})

describe('forEachThread', () => {
  test('links each node to the next ring and the next spoke', () => {
    const web = createWeb(100, 100, 3, 2, () => 0.5)
    const threads: string[] = []
    forEachThread(web, (a, b, kind) => threads.push(`${a}-${b}:${kind}`))
    expect(threads).toEqual([
      '0-3:radial',
      '0-1:ring',
      '1-4:radial',
      '1-2:ring',
      '2-5:radial',
      '3-4:ring',
      '4-5:ring',
    ])
  })
})

describe('stepWeb', () => {
  const node = () => ({ x: 50, y: 50, vx: 0, vy: 0, ax: 50, ay: 50 })

  test('stays still with no pointer and no displacement', () => {
    const nodes = [node()]
    stepWeb(nodes, null, 100)
    expect(nodes[0]).toEqual(node())
  })

  test('the pointer pushes nearby nodes away', () => {
    const nodes = [node()]
    stepWeb(nodes, { x: 40, y: 50 }, 100)
    expect(nodes[0].x).toBeGreaterThan(50)
    expect(nodes[0].y).toBe(50)
  })

  test('a pointer exactly on a node has no direction and never yields NaN', () => {
    const nodes = [node()]
    stepWeb(nodes, { x: 50, y: 50 }, 100)
    expect(nodes[0]).toEqual(node())
  })

  test('displaced nodes spring back and settle on their anchor', () => {
    const nodes = [{ ...node(), x: 80 }]
    for (let i = 0; i < 400; i++) stepWeb(nodes, null, 100)
    expect(nodes[0].x).toBeCloseTo(50, 1)
  })
})
