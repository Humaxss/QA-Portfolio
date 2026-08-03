import {expect, Locator, Page} from '@playwright/test';

export class LoginPage {
  readonly page: Page
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"]');
    this.passwordInput = page.locator('input[name="password"]');
    this.submitButton = page.locator('[id="submit"]');
  }

    async gotoUrl() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect(this.page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
    }
    
    async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    console.log("Username =", username);
    console.log("Password =", password);
    await this.submitButton.click();
   }
    async logout() {
    await this.page.getByRole('link', { name: 'Log out' }).click();
    } 
  }