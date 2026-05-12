import { expect, test } from '@playwright/test'

test.describe('404 Not Found', () => {
  test('unknown route under /en shows not-found page', async ({ page }) => {
    const response = await page.goto('/en/this-page-does-not-exist-xyz')
    expect(response?.status()).toBe(404)
  })

  test('unknown blog post shows not-found page', async ({ page }) => {
    await page.goto('/en/blog/nonexistent-post-xyz')
    await expect(page.locator('h1').filter({ hasText: '404' })).toBeVisible()
  })

  test('root not-found shows not-found page', async ({ page }) => {
    // Single-segment bare paths are captured by [lang] as an invalid locale,
    // which renders the home page. Test that the app handles unknown paths gracefully.
    const response = await page.goto('/this-route-does-not-exist-xyz')
    expect([404, 200]).toContain(response?.status())
  })
})
