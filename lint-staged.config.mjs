export default {
  // Run typecheck on the whole project (ignores file args intentionally)
  '*.{ts,tsx}': () => ['bun run typecheck', 'bun run lint:fix'],
  // Format all supported file types
  '*.{ts,tsx,json,md}': 'prettier --write',
}
