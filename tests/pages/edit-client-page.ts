//edit-client-page.ts
import { expect, type Locator, type Page } from '@playwright/test';

export class EditClient {
  //Attributes
  readonly page: Page;
  readonly clientView: Locator;
  readonly dotsBtn: Locator;
  readonly editClientBtn: Locator;
  readonly name: Locator;
  readonly email: Locator;
  readonly telephone: Locator;
  readonly save: Locator;
  readonly aftersave: Locator;
  //Const
  constructor(page: Page) {
    this.page = page;
    this.clientView = page.locator('#app > div > div > div:nth-child(2) > a');
    this.dotsBtn = page.locator('#app > div > div.clients > div:nth-child(1) > div.action')
    this.editClientBtn = page.locator('#app > div > div.clients > div:nth-child(1) > div.menu > a:nth-child(1)')
    this.name = page.locator('#app > div > div:nth-child(2) > div:nth-child(3) > input[type=text]')
    this.email = page.locator('#app > div > div:nth-child(2) > div:nth-child(4) > input[type=email]')
    this.telephone = page.locator('#app > div > div:nth-child(2) > div:nth-child(5) > input[type=text]')
    this.save = page.locator('#app > div > div.actions > a.btn.blue')
    this.aftersave = page.locator ('#app > div > div.clients > div:nth-child(1)')
  }

}
