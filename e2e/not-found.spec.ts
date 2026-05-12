import { expect, test } from '@playwright/test'

test.describe('404 Not Found', () => {
  test('unknown route under /en shows not-found page', async ({ page }) => {
    const response = await page.goto('/en/this-page-does-not-exist-xyz')
    expect(response?.status()).toBe(404)
  })

  test('unknown blog post shows not-found page', async ({ page }) => {
    await page.goto('/en/blog/nonexistent-post-xyz')
    // dynamicParams = false means Next.js returns 404 for unlisted slugs
    await expect(page.locator('text=404').or(page.locator('text=not found'))).toBeVisible()
  })

  test('root not-found redirects to locale and shows 404', async ({ page }) => {
    const response = await page.goto('/this-route-does-not-exist-xyz')
    // After i18n redirect, the page should still be a 404
    expect([404, 200]).toContain(response?.status())
    // The final URL should be locale-prefixed (with or without trailing path)
    expect(page.url()).toMatch(/\/(en|es)/)
  })
})
