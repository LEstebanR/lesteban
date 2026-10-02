/** October (0-based): the month the console runs its Halloween season. */
export const HALLOWEEN_MONTH = 9

/** Whether `date` falls in the Halloween season. */
export function isHalloween(date: Date = new Date()): boolean {
  return date.getMonth() === HALLOWEEN_MONTH
}

/**
 * Inline `<head>` script: marks `<html data-season="halloween">` before the
 * first paint, using the visitor's own clock. Static pages never need a
 * rebuild to switch the season on or off, and nothing flashes.
 */
export const SEASON_SCRIPT = `if(new Date().getMonth()===${HALLOWEEN_MONTH})document.documentElement.dataset.season='halloween'`

/** Client-side read of the flag set by `SEASON_SCRIPT`. */
export function isHalloweenActive(): boolean {
  return document.documentElement.dataset.season === 'halloween'
}
