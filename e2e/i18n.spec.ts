import { expect, test } from '@playwright/test'

test.describe('i18n redirect', () => {
  test('bare path / redirects to a locale-prefixed URL', async ({ page }) => {
    await page.goto('/')
    expect(page.url()).toMatch(/\/(en|es)(\/|$)/)
  })
})

test.describe('Language switch', () => {
  test('switching lang on blog post keeps the same slug', async ({ page }) => {
    await page.goto('/en/blog/first-marathon')
    await expect(page).toHaveURL('/en/blog/first-marathon')

    const langToggle = page.getByRole('button', { name: 'Switch to Spanish' })
    await langToggle.click()

    await expect(page).toHaveURL('/es/blog/first-marathon')
  })

  test('switching lang on homepage keeps root path', async ({ page }) => {
    await page.goto('/en')

    const langToggle = page.getByRole('button', { name: 'Switch to Spanish' })
    await langToggle.click()

    await expect(page).toHaveURL('/es')
  })
})
