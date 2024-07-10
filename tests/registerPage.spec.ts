import { test, expect } from '@playwright/test';
import { RegisterPage } from './pages/registerPage';
import { WelcomePage } from './pages/welcomePage';

test.describe('Register Page', () => {
  test('do register', async ({ page }) => {
    const registerPage = new RegisterPage(page);
    await registerPage.goto();
    await registerPage.registerAction();

    const welcomePage = new WelcomePage(page);
    const welcomeMsgText = await welcomePage.getWelcomeMsgText();

    // Expect a welcome message LoginSuccess
    await expect(welcomeMsgText).toContain('LoginSuccess');
  });
});
