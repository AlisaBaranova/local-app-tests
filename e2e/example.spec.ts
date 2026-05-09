import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const username = page.locator ('[role=textbox][placeholder="Enter your username"]');
  const email = page.locator ('[role=textbox][placeholder="Enter your email"]');
  const btn = page.locator ('[id="submit-order"]');
  // Expect a title "to contain" a substring.

  await username.fill('1234')
  await email.fill('babanb@inbox.lv')
  await expect (btn).toBeEnabled();

  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  const link = page.getByRole('link',{ name: 'Get started' })
  await link.click();

  await page.waitForTimeout(5000);

  // Expects page to have a heading with the name of Installation.
  const heading=page.getByRole('heading', {name: 'Installation' });
  await expect (heading).toBeVisible();
});

test('has visible title GitHub, async ({ page })') => {
  await page.goto('https://playwright.dev/');

  const github = page.locator ('[id="https://github.com/microsoft/playwright"]');
  await expect (github).toBeVisible();
});

test('has visible title GitHub, async ({ page })') => {
  await page.goto('https://playwright.dev/');

  const discord = page.locator ('[id="https://aka.ms/playwright/discord"]');
  await expect (discord).toBeVisible();
});
