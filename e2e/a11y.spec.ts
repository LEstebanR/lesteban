import { type Page, expect, test } from '@playwright/test'

/** Focus ring or outline actually painted on the focused element. */
async function focusIndicator(page: Page) {
  return page.evaluate(() => {
    const el = document.activeElement as HTMLElement
    const s = getComputedStyle(el)
    return {
      outline: s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) >= 2,
      ring: s.boxShadow !== 'none',
    }
  })
}

for (const theme of ['dark', 'light'] as const) {
  test.describe(`Keyboard a11y (${theme})`, () => {
    test.beforeEach(async ({ page }) => {
      await page.addInitScript((t) => localStorage.setItem('theme', t), theme)
    })

    test('skip link is the first stop and jumps to main', async ({ page }) => {
      await page.goto('/en')
      await page.keyboard.press('Tab')
      const skip = page.getByRole('link', { name: 'Skip to main content' })
      await expect(skip).toBeFocused()
      await expect(skip).toBeVisible()
      await page.keyboard.press('Enter')
      await expect(page).toHaveURL(/#main-content$/)
    })

    test('header controls show a visible focus indicator', async ({ page }) => {
      await page.goto('/en')
      for (const locator of [
        page.locator('header').getByRole('link', { name: 'Luis Esteban' }),
        page.locator('header').getByRole('link', { name: 'Blog' }),
        page.getByRole('button', { name: 'Switch to Spanish' }),
        page.getByRole('button', { name: 'Toggle theme' }),
      ]) {
        await locator.focus()
        // Programmatic focus after a key press keeps :focus-visible on
        await page.keyboard.press('Shift')
        const { outline, ring } = await focusIndicator(page)
        expect(outline || ring).toBe(true)
      }
    })

    test('collapsed experience stays inert until revealed', async ({
      page,
    }) => {
      await page.goto('/en')
      const toggle = page.getByRole('button', { name: /See 3 more/ })
      // useId() output contains characters that aren't valid in a #selector
      const region = page.locator(
        `[id="${await toggle.getAttribute('aria-controls')}"]`
      )
      await expect(region).toHaveAttribute('inert', '')
      await toggle.click()
      await expect(region).not.toHaveAttribute('inert')
    })
  })
}

test.describe('Mobile menu', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('Escape closes the menu and returns focus to the trigger', async ({
    page,
  }) => {
    await page.goto('/es')
    const trigger = page.getByRole('button', { name: 'Menú' })
    await trigger.focus()
    await page.keyboard.press('Enter')
    await expect(page.getByRole('menu')).toBeVisible()
    await expect(page.getByRole('menuitem', { name: 'Oscuro' })).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.getByRole('menu')).toBeHidden()
    await expect(trigger).toBeFocused()
  })
})

test('blog cards are reachable and announce their title once', async ({
  page,
}) => {
  await page.goto('/en/blog')
  const card = page.locator('main a[href^="/en/blog/"]').first()
  await card.focus()
  await expect(card).toBeFocused()
  await expect(card.locator('img')).toHaveAttribute('alt', '')
  const name = await card.locator('h3 .sr-only').textContent()
  await expect(card).toHaveAccessibleName(new RegExp(`^.*${name}`))
})
