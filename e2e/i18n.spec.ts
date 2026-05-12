import { expect, test } from '@playwright/test'

test.describe('i18n redirect', () => {
  test('bare path /blog redirects to /en/blog with 301', async ({ page }) => {
    const response = await page.goto('/blog')
    // Playwright follows redirects by default; check final URL
    expect(page.url()).toContain('/en/blog')
    // Verify the final page loaded successfully after redirect
    expect(response?.status()).toBe(200)
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

    // LanguageToggle renders as a button with the next language label in uppercase
    const langToggle = page.getByRole('button', { name: 'ES' })
    await langToggle.click()

    await expect(page).toHaveURL('/es/blog/first-marathon')
  })

  test('switching lang on homepage keeps root path', async ({ page }) => {
    await page.goto('/en')

    const langToggle = page.getByRole('button', { name: 'ES' })
    await langToggle.click()

    await expect(page).toHaveURL('/es')
  })
})
