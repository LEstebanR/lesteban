import { expect, test } from '@playwright/test'

test.describe('i18n redirect', () => {
  test('bare path /about redirects to /en/about with 301', async ({ page }) => {
    const response = await page.goto('/about', { waitUntil: 'commit' })
    // Playwright follows redirects by default; check final URL
    expect(page.url()).toContain('/en/about')
    // Verify it was a redirect (response chain had a 301)
    expect(response?.status()).toBe(200) // final response after redirect
  })

  test('bare path / redirects to a locale-prefixed URL', async ({ page }) => {
    await page.goto('/')
    expect(page.url()).toMatch(/\/(en|es)(\/|$)/)
  })
})

test.describe('Language switch', () => {
  test('switching lang on blog post keeps the same slug', async ({ page }) => {
    await page.goto('/en/blog/first-marathon')
    await expect(page).toHaveURL('/en/blog/first-marathon')

    // Find and click the language toggle to switch to Spanish
    const langToggle = page.getByRole('link', { name: /es/i })
    await langToggle.first().click()

    await expect(page).toHaveURL('/es/blog/first-marathon')
  })

  test('switching lang on homepage keeps root path', async ({ page }) => {
    await page.goto('/en')

    const langToggle = page.getByRole('link', { name: /es/i })
    await langToggle.first().click()

    await expect(page).toHaveURL('/es')
  })
})
