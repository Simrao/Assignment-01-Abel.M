//create-bills-page.ts
import { expect, type Locator, type Page } from '@playwright/test';

export class CreateBill {
  //Attributes
  readonly page: Page;
  readonly billsView: Locator;
  readonly createBillBtn: Locator;
  readonly value: Locator;
  readonly save: Locator;
  //Const
  constructor(page: Page) {
    this.page = page;
    this.billsView = page.locator('#app > div > div > div:nth-child(3) > a');
    this.createBillBtn = page.locator('#app > div > h2 > a')
    this.value = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=number]')
    this.save = page.locator('#app > div > div.actions > a.btn.blue')
  }

}