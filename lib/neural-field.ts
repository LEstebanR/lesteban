export type FieldNode = { x: number; y: number; vx: number; vy: number }
export type FieldLink = { a: number; b: number; strength: number }

/** Scatter `count` nodes over a w×h field with small random velocities. */
export function createNodes(
  count: number,
  width: number,
  height: number,
  random: () => number = Math.random
): FieldNode[] {
  return Array.from({ length: count }, () => ({
    x: random() * width,
    y: random() * height,
    vx: (random() - 0.5) * 0.35,
    vy: (random() - 0.5) * 0.35,
  }))
}

/** Advance every node one frame, bouncing off the field edges. */
export function stepNodes(nodes: FieldNode[], width: number, height: number) {
  for (const node of nodes) {
    node.x += node.vx
    node.y += node.vy
    if (node.x < 0 || node.x > width) node.vx *= -1
    if (node.y < 0 || node.y > height) node.vy *= -1
    node.x = Math.min(Math.max(node.x, 0), width)
    node.y = Math.min(Math.max(node.y, 0), height)
  }
}

/** Pairs of nodes closer than `maxDistance`, with strength 1 (touching) → 0 (at the limit). */
export function linkNodes(
  nodes: FieldNode[],
  maxDistance: number
): FieldLink[] {
  const links: FieldLink[] = []
  for (let a = 0; a < nodes.length; a++) {
    for (let b = a + 1; b < nodes.length; b++) {
      const distance = Math.hypot(
        nodes[a].x - nodes[b].x,
        nodes[a].y - nodes[b].y
      )
      if (distance < maxDistance) {
        links.push({ a, b, strength: 1 - distance / maxDistance })
      }
    }
  }
  return links
}

/** 0 → 1 influence of a point on a node, fading out at `radius`. */
export function pointerInfluence(
  node: FieldNode,
  pointer: { x: number; y: number } | null,
  radius: number
): number {
  if (!pointer) return 0
  const distance = Math.hypot(node.x - pointer.x, node.y - pointer.y)
  return Math.max(0, 1 - distance / radius)
}
