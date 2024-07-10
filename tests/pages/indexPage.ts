import { expect, type Locator, type Page } from '@playwright/test';

export class IndexPage {
  readonly page: Page;
  readonly email: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly registerLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.email = page.locator('div[data-testid="email"] input');
    this.password = page.locator('div[data-testid="password"] input');
    this.loginButton = page.locator('a[data-testid="loginButton"]');
    this.registerLink = page.locator('a[data-testid="registerLink"]');
  }

  async goto() {
    await this.page.goto('/react-playwright-demo');
  }

  async fillEmail() {
    await this.email.fill('Jersey@devopsday.good');
    await expect(this.email).toBeVisible();
  }

  async fillPassword() {
    // TODO: use the secret service.
    await this.password.fill('');
    await expect(this.password).toBeVisible();
  }

  async loginAction() {
    await this.fillEmail();
    await this.fillPassword();
    await this.loginButton.click();
  }
}