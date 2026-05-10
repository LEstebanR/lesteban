import { expect, test } from '@playwright/test'

test.describe('Blog', () => {
  test('/en/blog lists posts', async ({ page }) => {
    await page.goto('/en/blog')
    await expect(page).toHaveURL('/en/blog')

    // At least one blog post card should be present
    const cards = page.locator('a[href*="/en/blog/"]')
    await expect(cards.first()).toBeVisible()
  })

  test('/es/blog lists posts', async ({ page }) => {
    await page.goto('/es/blog')
    await expect(page).toHaveURL('/es/blog')

    const cards = page.locator('a[href*="/es/blog/"]')
    await expect(cards.first()).toBeVisible()
  })

  test('clicking a post card navigates to the post', async ({ page }) => {
    await page.goto('/en/blog')

    const firstCard = page.locator('a[href*="/en/blog/"]').first()
    const href = await firstCard.getAttribute('href')
    await firstCard.click()

    await expect(page).toHaveURL(href!)
  })

  test('blog post page renders the title', async ({ page }) => {
    await page.goto('/en/blog/first-marathon')

    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('article')).toBeVisible()
  })

  test('blog post page renders article content', async ({ page }) => {
    await page.goto('/en/blog/first-marathon')

    // Article element with content should be present
    const article = page.locator('article')
    await expect(article).toBeVisible()
    await expect(article).not.toBeEmpty()
  })

  test('blog post has a publication date badge', async ({ page }) => {
    await page.goto('/en/blog/first-marathon')

    // Date badge rendered in the header
    await expect(page.locator('time, [class*="badge"]').first()).toBeVisible()
  })
})
