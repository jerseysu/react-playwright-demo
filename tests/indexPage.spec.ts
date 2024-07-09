import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/playwright-demo');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Jersey's Login Page/);
});
