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

let ogFonts: ReturnType<typeof loadOgFonts> | undefined

function loadOgFonts() {
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

/**
 * Static TTF instances for Satori (it can't read WOFF2 or variable fonts),
 * served from `public/` like the other OG assets and read once per process.
 */
export function getOgFonts() {
  ogFonts ??= loadOgFonts()
  return ogFonts
}

let brandMark: string | undefined

/** The Signal brand mark, read from the favicon source so they never drift. */
export function getBrandMarkDataUri(): string {
  brandMark ??= `data:image/svg+xml;base64,${fs
    .readFileSync(path.join(process.cwd(), 'app/icon.svg'))
    .toString('base64')}`
  return brandMark
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

/** `#rrggbb` + alpha (0–1) as `#rrggbbaa`, for gradients Satori renders. */
export function withAlpha(hex: string, alpha: number): string {
  return `${hex}${Math.round(alpha * 255)
    .toString(16)
    .padStart(2, '0')}`
}
