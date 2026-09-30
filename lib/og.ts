import fs from 'fs'
import path from 'path'

const MIME_TYPES: Record<string, string> = {
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
}

/**
 * Reads an asset from `public/` and inlines it as a data URI so OG image
 * generation (Satori/next-og) never depends on a network fetch.
 */
export function getPublicAssetDataUri(publicPath: string): string {
  const relativePath = publicPath.startsWith('/')
    ? publicPath.slice(1)
    : publicPath
  const filePath = path.join(process.cwd(), 'public', relativePath)
  const mimeType = MIME_TYPES[path.extname(filePath).toLowerCase()]
  const buffer = fs.readFileSync(filePath)
  return `data:${mimeType};base64,${buffer.toString('base64')}`
}

const FONTS_DIR = '/fonts/og'

/**
 * Static TTF instances for Satori (it can't read WOFF2 or variable fonts).
 * Served from `public/` like the other OG assets so they're available at
 * runtime without a network fetch.
 */
export function getOgFonts() {
  const read = (file: string) =>
    fs.readFileSync(path.join(process.cwd(), 'public', FONTS_DIR, file))
  return [
    { name: 'Tektur', data: read('Tektur-SemiBold.ttf'), weight: 600 as const },
    { name: 'Geist', data: read('Geist-Regular.ttf'), weight: 400 as const },
    {
      name: 'Geist Mono',
      data: read('GeistMono-Regular.ttf'),
      weight: 400 as const,
    },
  ]
}

/** The Signal brand mark (same drawing as app/icon.svg). */
const BRAND_MARK_SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="10" fill="#070c16"/><path d="M7 19V7h12M45 7h12v12M57 45v12H45M19 57H7V45" fill="none" stroke="#5ce9f0" stroke-width="3" opacity="0.7"/><path d="M19 47L31 17" stroke="#5ce9f0" stroke-width="6.5" stroke-linecap="square"/><rect x="36" y="33" width="10" height="14" fill="#5ce9f0"/></svg>`

export function getBrandMarkDataUri(): string {
  return `data:image/svg+xml;base64,${Buffer.from(BRAND_MARK_SVG).toString('base64')}`
}

// Hex equivalents of the Signal dark-mode tokens in app/globals.css
// (--background, --card, --foreground, --muted-foreground, --primary,
// --secondary, --border). Satori can't resolve CSS variables.
export const OG_COLORS = {
  background: '#070c16',
  card: '#0c141f',
  foreground: '#e1e9ef',
  muted: '#8fa1b0',
  primary: '#5ce9f0',
  secondary: '#b688fe',
  border: '#253142',
}
