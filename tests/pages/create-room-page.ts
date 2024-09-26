//create-room-page.ts
import { expect, type Locator, type Page } from '@playwright/test';

export class CreateRoom {
    //Attributes
    readonly page: Page;
    readonly roomView: Locator; 
    readonly createRoomBtn: Locator;
    readonly category: Locator;
    readonly number: Locator;
    readonly floor: Locator;
    readonly available: Locator;
    readonly price: Locator;
    readonly features: Locator;
    readonly save: Locator;

    //Const
    constructor(page: Page) {
      this.page = page;
      this.roomView = page.locator('#app > div > div > div:nth-child(1) > a');
      this.createRoomBtn = page.locator('#app > div > h2 > a');
      this.category = page.locator('#app > div > div:nth-child(2) > div:nth-child(1) > select');
      this.number = page.locator('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=number]');
      this.floor = page.locator('#app > div > div:nth-child(2) > div:nth-child(3) > input[type=number]');
      this.available = page.locator('#app > div > div:nth-child(2) > div:nth-child(4) > div');
      this.price = page.locator('#app > div > div:nth-child(2) > div:nth-child(5) > input[type=number]');
      this.features = page.locator('#app > div > div:nth-child(2) > div:nth-child(6) > select');
      this.save = page.locator('#app > div > div.actions > a.btn.blue');
    }
    async createNewRoom(options: { roomNumber: string, floor: string, price: string, categoryIndex: number, featureIndex: number }) {
      await this.roomView.click();
      await this.createRoomBtn.click();
      await this.category.selectOption({ index: options.categoryIndex });
      await this.number.fill(options.roomNumber);
      await this.floor.fill(options.floor);
      await this.available.click();
      await this.price.fill(options.price);
      await this.features.selectOption({ index: options.featureIndex });
      await this.save.click();
    }
  
    
    async verifyRoomCreated() {
      await expect(this.page.locator('#app > div > div.rooms > div:nth-child(3)')).toBeVisible();
    }
}