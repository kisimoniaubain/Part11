const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pok\u00e9mon and Pok\u00e9mon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('navigation to a Pokemon works', async ({ page }) => {
    await page.goto('')
    await page.getByText('ivysaur').click()
    await expect(page.getByText('chlorophyll')).toBeVisible()
  })
})
