import { expect, test } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads correctly at /en with all key sections visible', async ({
    page,
  }) => {
    await page.goto('/en')
    await expect(page).toHaveURL('/en')

    // Hero section - editorial headline with name
    await expect(
      page.locator('h1').filter({ hasText: 'Luis Esteban' })
    ).toBeVisible()

    // Hero CTAs present
    await expect(
      page.getByRole('link', { name: /view projects/i })
    ).toBeVisible()
    await expect(
      page.getByRole('link', { name: /contact/i }).first()
    ).toBeVisible()

    // Navigation links present
    await expect(
      page.getByRole('link', { name: /blog/i }).first()
    ).toBeVisible()

    // Key sections present
    await expect(page.locator('section#projects')).toBeVisible()
    await expect(page.locator('section#experience')).toBeVisible()
    await expect(page.locator('section#contact')).toBeVisible()
  })

  test('loads correctly at /es with all key sections visible', async ({
    page,
  }) => {
    await page.goto('/es')
    await expect(page).toHaveURL('/es')

    // Hero section - editorial headline with name
    await expect(
      page.locator('h1').filter({ hasText: 'Luis Esteban' })
    ).toBeVisible()

    // Hero CTAs present (Spanish)
    await expect(
      page.getByRole('link', { name: /ver proyectos/i })
    ).toBeVisible()
    await expect(
      page.getByRole('link', { name: /contactar/i }).first()
    ).toBeVisible()

    // Navigation links present
    await expect(
      page.getByRole('link', { name: /blog/i }).first()
    ).toBeVisible()

    // Key sections present
    await expect(page.locator('section#projects')).toBeVisible()
    await expect(page.locator('section#experience')).toBeVisible()
    await expect(page.locator('section#contact')).toBeVisible()
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
