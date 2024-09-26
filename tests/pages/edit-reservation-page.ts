//edit-reservation-page.ts
import { expect, type Locator, type Page } from '@playwright/test';

export class EditReservation {
  //Attributes
  readonly page: Page;
  readonly reservationView: Locator;
  readonly dotsBtn: Locator;
  readonly editReservationBtn: Locator;
  readonly start: Locator;
  readonly end: Locator;
  readonly client: Locator;
  readonly room: Locator;
  readonly bill: Locator;
  readonly save: Locator;
  //Const
  constructor(page: Page) {
    this.page = page;
    this.reservationView = page.locator('#app > div > div > div:nth-child(4) > a');
    this.dotsBtn = page.locator('#app > div > div.reservations > div > div.action > img')
    this.editReservationBtn = page.locator('#app > div > div.reservations > div > div.menu > a:nth-child(1)')
    this.start = page.locator('#app > div > div:nth-child(2) > div:nth-child(3) > input[type=text]')
    this.end = page.locator('#app > div > div:nth-child(2) > div:nth-child(4) > input[type=text]')
    this.client = page.locator('#app > div > div:nth-child(2) > div:nth-child(5) > select')
    this.room = page.locator('#app > div > div:nth-child(2) > div:nth-child(6) > select')
    this.bill = page.locator('#app > div > div:nth-child(2) > div:nth-child(7) > select')
    this.save = page.locator('#app > div > div.actions > a.btn.blue')
  }


  async editExistingReservation(startDate: string, endDate: string, clientIndex: number, roomIndex: number, billIndex: number) {
    await this.reservationView.click();
    await this.dotsBtn.click();
    await this.editReservationBtn.click();
    await this.start.fill(startDate);
    await this.end.fill(endDate);
    await this.client.selectOption({ index: clientIndex });
    await this.room.selectOption({ index: roomIndex });
    await this.bill.selectOption({ index: billIndex });
    await this.save.click();
  }

  async verifyReservationEdited() {
    await expect(this.page.locator('#app > div > h2 > div')).toBeVisible();
  }
}
