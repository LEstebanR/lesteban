export type Peak = {
  cx: number
  cy: number
  /** Radius of the outermost contour. */
  radius: number
  /** Number of contour rings. */
  rings: number
  seed: number
  /** Horizontal stretch so peaks read as ridges rather than circles. */
  stretch?: number
}

/**
 * One closed, organic contour: a circle whose radius is modulated by a few
 * sine harmonics. Deterministic for a given seed so SSR and client match.
 */
export function contourPath(
  cx: number,
  cy: number,
  radius: number,
  seed: number,
  stretch = 1.3,
  points = 64
): string {
  const coords: string[] = []
  for (let k = 0; k < points; k++) {
    const angle = (k / points) * Math.PI * 2
    const r =
      radius *
      (1 +
        0.13 * Math.sin(3 * angle + seed) +
        0.07 * Math.sin(5 * angle + seed * 1.7) +
        0.04 * Math.sin(9 * angle + seed * 0.3))
    const x = cx + r * Math.cos(angle) * stretch
    const y = cy + r * Math.sin(angle)
    coords.push(`${x.toFixed(1)} ${y.toFixed(1)}`)
  }
  return `M${coords.join('L')}Z`
}

/** Concentric contours for a peak, outermost first. */
export function peakContours({
  cx,
  cy,
  radius,
  rings,
  seed,
  stretch,
}: Peak): string[] {
  return Array.from({ length: rings }, (_, i) =>
    contourPath(cx, cy, radius * (1 - i / rings), seed + i * 0.35, stretch)
  )
}
