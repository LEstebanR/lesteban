import { expect, test } from '@playwright/test'

test.describe('404 Not Found', () => {
  test('unknown route under /en shows not-found page', async ({ page }) => {
    const response = await page.goto('/en/this-page-does-not-exist-xyz')
    expect(response?.status()).toBe(404)
    await expect(page.locator('h1').filter({ hasText: '404' })).toBeVisible()
  })

  test('unknown blog post returns 404', async ({ page }) => {
    const response = await page.goto('/en/blog/nonexistent-post-xyz')
    expect(response?.status()).toBe(404)
    await expect(page.locator('h1').filter({ hasText: '404' })).toBeVisible()
  })

  test('unknown bare path returns 404', async ({ page }) => {
    const response = await page.goto('/this-route-does-not-exist-xyz')
    expect(response?.status()).toBe(404)
  })

  test('unsupported locale returns 404', async ({ page }) => {
    const response = await page.goto('/fr')
    expect(response?.status()).toBe(404)
  })

  test('manifest.webmanifest is not the homepage', async ({ page }) => {
    const response = await page.goto('/manifest.webmanifest')
    expect(response?.status()).toBe(404)
  })
})
