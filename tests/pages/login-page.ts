//login-page.ts
import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  //Attributes
  readonly page: Page;
  readonly usernameTextfield: Locator; 
  readonly passwordTextfield: Locator;
  readonly loginButton: Locator;

  //Const
  constructor(page: Page) {
    this.page = page;
    this.usernameTextfield = page.locator('#app > div > form > div:nth-child(1) > input[type=text]');
    this.passwordTextfield = page.locator('#app > div > form > div:nth-child(2) > input[type=password]');
    this.loginButton = page.locator('#app > div > form > div.field.action > button');
  }
    // Methods / functions
    async goto() {
      await this.page.goto(`${process.env.BASE_URL}`);
  
    }
  
    async performLogin(username: string, password:string) {
      //fill out the form - 2 textfields and click the submit button
      await this.usernameTextfield.fill(username);
      await this.passwordTextfield.fill(password);
      await this.loginButton.click();
    }
  }
