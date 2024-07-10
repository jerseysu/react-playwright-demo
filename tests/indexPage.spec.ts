import { test, expect } from '@playwright/test';
import { IndexPage } from './pages/indexPage';
import { WelcomePage } from './pages/welcomePage';

test.describe('Login Page', () => {
  test('has title', async ({ page }) => {
    const indexPage = new IndexPage(page);
    await indexPage.goto();

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Jersey's Login Page/);
  });

  test('do login', async ({ page }) => {
    const indexPage = new IndexPage(page);
    await indexPage.goto();
    await indexPage.loginAction();

    const welcomePage = new WelcomePage(page);
    const welcomeMsgText = await welcomePage.getWelcomeMsgText();

    // Expect a welcome message LoginSuccess
    await expect(welcomeMsgText).toContain('LoginSuccess');
  });
});
