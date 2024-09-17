//create-reservation-page.ts
import { expect, type Locator, type Page } from '@playwright/test';

export class CreateReservation {
    //Attributes
    readonly page: Page;
    readonly reservationView: Locator; 
    readonly createReservationBtn: Locator;
    readonly Start: Locator;
    readonly End: Locator;
    readonly Client: Locator;
    readonly Room: Locator;
    readonly Bill: Locator;
    readonly save: Locator;

    //Const
    constructor(page: Page) {
      this.page = page;
      this.reservationView = page.locator('#app > div > div > div:nth-child(4) > a');
      this.createReservationBtn = page.locator('#app > div > h2 > a');
      this.Start = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=text]');
      this.End = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=text]');
      this.Client = page.locator('#app > div > div:nth-child(2) > div:nth-child(3) > select');
      this.Room = page.locator('#app > div > div:nth-child(2) > div:nth-child(4) > select');
      this.Bill = page.locator('#app > div > div:nth-child(2) > div:nth-child(5) > select');
      this.save = page.locator('#app > div > div.actions > a.btn.blue');
    }
}