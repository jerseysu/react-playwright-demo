import { type Locator, type Page } from '@playwright/test';

export class WelcomePage {
  readonly page: Page;
  readonly welcomeMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeMsg = page.locator('h5[data-testid="loginMessage"]');
  }

  async goto() {
    await this.page.goto('/react-playwright-demo/home');
  }

  async getWelcomeMsgText() {
    return await this.welcomeMsg.innerText();
  }
}