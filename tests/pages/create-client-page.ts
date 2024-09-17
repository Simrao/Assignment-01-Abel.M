//create-client-page.ts
import { expect, type Locator, type Page } from '@playwright/test';

export class CreateClient {
  //Attributes
  readonly page: Page;
  readonly clientView: Locator;
  readonly createClientBtn: Locator;
  readonly name: Locator;
  readonly email: Locator;
  readonly telephone: Locator;
  readonly save: Locator;
  //Const
  constructor(page: Page) {
    this.page = page;
    this.clientView = page.locator('#app > div > div > div:nth-child(2) > a');
    this.createClientBtn = page.locator('#app > div > h2 > a')
    this.name = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=text]')
    this.email = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=email]')
    this.telephone = page.locator('#app > div > div:nth-child(2) > div:nth-child(3) > input[type=text]')
    this.save = page.locator('#app > div > div.actions > a.btn.blue')
  }

}