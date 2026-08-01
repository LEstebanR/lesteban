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

export function getLogoDataUri(): string {
  return getPublicAssetDataUri('/logo.svg')
}

// Colors are pulled directly from the logo mark (public/logo.svg) and the
// --foreground / --muted-foreground design tokens (app/globals.css) so the
// generated OG cards stay on-brand without hardcoding unrelated values.
export const OG_COLORS = {
  background: '#FBF4EE',
  accent: '#FD5B51',
  title: '#3A3A3A',
  subtitle: '#636363',
}
