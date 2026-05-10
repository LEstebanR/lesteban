import { expect, test } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads correctly at /en with all key sections visible', async ({
    page,
  }) => {
    await page.goto('/en')
    await expect(page).toHaveURL('/en')

    // Hero section
    await expect(page.locator('img[alt="Luis Esteban"]')).toBeVisible()

    // Navigation links present
    await expect(page.getByRole('link', { name: /blog/i }).first()).toBeVisible()
  })

  test('loads correctly at /es with all key sections visible', async ({
    page,
  }) => {
    await page.goto('/es')
    await expect(page).toHaveURL('/es')

    // Hero section present
    await expect(page.locator('img[alt="Luis Esteban"]')).toBeVisible()

    // Navigation links present
    await expect(page.getByRole('link', { name: /blog/i }).first()).toBeVisible()
  })

  test('page has correct lang attribute for /en', async ({ page }) => {
    await page.goto('/en')
    await expect(page.locator('html')).toHaveAttribute('lang', 'en')
  })

  test('page has correct lang attribute for /es', async ({ page }) => {
    await page.goto('/es')
    await expect(page.locator('html')).toHaveAttribute('lang', 'es')
  })
})
