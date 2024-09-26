import { expect, type Locator, type Page } from '@playwright/test';

export class CreateReservation {
    readonly page: Page;
    readonly reservationView: Locator; 
    readonly createReservationBtn: Locator;
    readonly Start: Locator;
    readonly End: Locator;
    readonly Client: Locator;
    readonly Room: Locator;
    readonly Bill: Locator;
    readonly save: Locator;

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

    async createNewReservation(startDate: string, endDate: string, clientIndex: number, roomIndex: number, billIndex: number) {
      await this.reservationView.click();
      await this.createReservationBtn.click();
      await this.Start.fill(startDate);
      await this.End.fill(endDate);
      await this.Client.selectOption({ index: clientIndex });
      await this.Room.selectOption({ index: roomIndex });
      await this.Bill.selectOption({ index: billIndex });
      await this.save.click();
    }

  
    async verifyReservationCreated() {
      await expect(this.page.locator('#app > div > div.reservations > div:nth-child(2) > div.end')).toBeVisible();
    }
}