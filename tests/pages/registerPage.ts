import { expect, type Locator, type Page } from '@playwright/test';

export class RegisterPage {
  readonly page: Page;
  readonly name: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly registerButton: Locator;
  readonly loginLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.name = page.locator('div[data-testid="name"] input');
    this.email = page.locator('div[data-testid="email"] input');
    this.password = page.locator('div[data-testid="password"] input');
    this.registerButton = page.locator('a[data-testid="registerButton"]');
    this.loginLink = page.locator('a[data-testid="loginLink"]');
  }

  async goto() {
    await this.page.goto('/react-playwright-demo/register');
  }

  async fillName() {
    await this.name.fill('JerseyAwesome');
    await expect(this.name).toBeVisible();
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

  async registerAction() {
    await this.fillName();
    await this.fillEmail();
    await this.fillPassword();
    await this.registerButton.click();
  }
}