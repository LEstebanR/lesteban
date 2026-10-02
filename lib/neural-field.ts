export type FieldNode = { x: number; y: number; vx: number; vy: number }

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

/**
 * Visit every pair of nodes closer than `maxDistance`, with strength
 * 1 (touching) → 0 (at the limit). Compares squared distances and allocates
 * nothing, since it runs every animation frame.
 */
export function forEachLink(
  nodes: FieldNode[],
  maxDistance: number,
  visit: (a: number, b: number, strength: number) => void
) {
  const maxSquared = maxDistance * maxDistance
  for (let a = 0; a < nodes.length; a++) {
    for (let b = a + 1; b < nodes.length; b++) {
      const dx = nodes[a].x - nodes[b].x
      const dy = nodes[a].y - nodes[b].y
      const squared = dx * dx + dy * dy
      if (squared < maxSquared) {
        visit(a, b, 1 - Math.sqrt(squared) / maxDistance)
      }
    }
  }
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

/** A web node: a field node tethered to its anchor (`ax`, `ay`). */
export type WebNode = FieldNode & { ax: number; ay: number }

export type Web = { nodes: WebNode[]; spokes: number; rings: number }

/**
 * Weave a web from the top-right corner of a w×h field (screen coordinates,
 * y down): `spokes` threads fan out from straight down to straight left, crossed by `rings`
 * concentric threads. Node `ring * spokes + spoke`; anchors get a little
 * jitter so the web looks spun, not plotted.
 */
export function createWeb(
  width: number,
  height: number,
  spokes = 13,
  rings = 9,
  random: () => number = Math.random
): Web {
  const reach = Math.hypot(width, height) * 0.5
  const nodes: WebNode[] = []
  for (let ring = 0; ring < rings; ring++) {
    for (let spoke = 0; spoke < spokes; spoke++) {
      const angle =
        Math.PI / 2 +
        ((spoke + (random() - 0.5) * 0.3) / (spokes - 1)) * (Math.PI / 2)
      const radius =
        reach * ((ring + 1 + (random() - 0.5) * 0.25) / rings) ** 1.25
      const ax = width + Math.cos(angle) * radius
      const ay = Math.sin(angle) * radius
      nodes.push({ x: ax, y: ay, vx: 0, vy: 0, ax, ay })
    }
  }
  return { nodes, spokes, rings }
}

/**
 * Visit every thread of a web: `radial` threads run along a spoke from one
 * ring to the next, `ring` threads cross between neighbouring spokes.
 */
export function forEachThread(
  web: Web,
  visit: (a: number, b: number, kind: 'radial' | 'ring') => void
) {
  const { spokes, rings } = web
  for (let ring = 0; ring < rings; ring++) {
    for (let spoke = 0; spoke < spokes; spoke++) {
      const i = ring * spokes + spoke
      if (ring + 1 < rings) visit(i, i + spokes, 'radial')
      if (spoke + 1 < spokes) visit(i, i + 1, 'ring')
    }
  }
}

/**
 * Advance the web one frame: the pointer pushes nearby nodes away and every
 * node springs back to its anchor with a damped wobble, so the web trembles
 * where you touch it and settles when you leave.
 */
export function stepWeb(
  nodes: WebNode[],
  pointer: { x: number; y: number } | null,
  radius: number
) {
  for (const node of nodes) {
    const push = pointerInfluence(node, pointer, radius)
    if (push > 0 && pointer) {
      const dx = node.x - pointer.x
      const dy = node.y - pointer.y
      const distance = Math.hypot(dx, dy) || 1
      node.vx += (dx / distance) * push * 0.9
      node.vy += (dy / distance) * push * 0.9
    }
    node.vx = (node.vx + (node.ax - node.x) * 0.05) * 0.88
    node.vy = (node.vy + (node.ay - node.y) * 0.05) * 0.88
    node.x += node.vx
    node.y += node.vy
  }
}
