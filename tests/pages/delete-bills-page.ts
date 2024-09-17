//delete-bills-page.ts
import { expect, type Locator, type Page } from '@playwright/test';

export class DeleteBills {
  //Attributes
  readonly page: Page;
  readonly billsView: Locator;
  readonly dotsBtn: Locator;
  readonly deleteBtn: Locator;


  //Const
  constructor(page: Page) {
    this.page = page;
    this.billsView = page.locator('#app > div > div > div:nth-child(3) > a');
    this.dotsBtn = page.locator('#app > div > div.bills > div:nth-child(1) > div.action > img')
    this.deleteBtn = page.locator('#app > div > div.bills > div:nth-child(1) > div.menu > a:nth-child(2)');
  }
}
