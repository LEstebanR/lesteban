import { GlobalRegistrator } from '@happy-dom/global-registrator'

GlobalRegistrator.register()

// Query what assistive tech perceives: text hidden with aria-hidden (e.g.
// ScrambleText's animated glyphs, which duplicate an sr-only copy) is skipped
const { configure } = await import('@testing-library/react')
configure({ defaultIgnore: 'script, style, [aria-hidden="true"]' })
