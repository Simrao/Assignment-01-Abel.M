import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { DashboardPage } from './pages/dashboard-page';
import { CreateBill } from './pages/create-bills-page';
import { DeleteBills } from './pages/delete-bills-page';
import { CreateClient } from './pages/create-client-page';
import { CreateRoom } from './pages/create-room-page';
import { EditClient } from './pages/edit-client-page';
import { CreateReservation } from './pages/create-reservation-page';

test.describe('Test suite 01', () => {

  test.beforeEach(async ({ page }) => {
    console.log('Login user before each test');
    const loginpage = new LoginPage(page);
    await loginpage.goto();
    await loginpage.performLogin(`${process.env.TEST_USERNAME}`,`${process.env.TEST_PASSWORD}`);
  });

  test('successfull login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    await loginPage.goto();
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`)
    await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
    await dashboardPage.performLogout();
    await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
    await page.waitForTimeout(5000);
  });


test('create bill', async ({ page }) => {
  const createBill = new CreateBill(page);
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`)
  await createBill.billsView.click();
  await createBill.createBillBtn.click();
  await createBill.value.fill('5000');
  await createBill.save.click();
  await expect(page.locator('#app > div > div.bills > div:nth-child(2) > h3')).toBeVisible();


});

test('delete bill', async ({ page }) => {
    const deleteBills = new DeleteBills(page);
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`)
    await deleteBills.billsView.click();
    await deleteBills.dotsBtn.click();
    await deleteBills.deleteBtn.click();
    await expect(page.locator('#app > div > div.bills > div:nth-child(1) > div.paid')).toBeVisible();

});
test('create client', async ({ page }) => {
  const createClient = new CreateClient(page);
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`)
  await createClient.clientView.click();
  await createClient.createClientBtn.click();
  await createClient.name.fill('Thomas Berggren');
  await createClient.email.fill('ThomasBerggren@gmail.com');
  await createClient.telephone.fill('073-4325030');
  await createClient.save.click();
  await expect(page.locator('#app > div > div.clients > div:nth-child(3)')).toBeVisible();


});

test('create room', async ({ page }) => {
  const createRoom = new CreateRoom(page);
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`)
  await createRoom.roomView.click();
  await createRoom.createRoomBtn.click();
  await createRoom.category.selectOption({index: 1});
  await createRoom.number.fill('205');
  await createRoom.floor.fill('2');
  await createRoom.available.click();
  await createRoom.price.fill('9200');
  await createRoom.features.selectOption({index: 1});
  await createRoom.save.click();
  await expect(page.locator('#app > div > div.rooms > div:nth-child(3)')).toBeVisible();

});
test('edit client', async ({ page }) => {
  const editClient = new EditClient(page);
  const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);
    await editClient.clientView.click();
    await editClient.dotsBtn.click();
    await editClient.editClientBtn.click();
    await editClient.name.fill('Maja Svensson');
    await editClient.email.fill('MajaSvensson@gmail.com');
    await editClient.save.click();
    await expect(page.locator('#app > div > div.clients > div:nth-child(1)')).toBeVisible();

  });
  test('create reservation', async ({ page }) => {
    const createreservation = new CreateReservation(page);
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`)
    await createreservation.reservationView.click();
    await createreservation.createReservationBtn.click();
    await createreservation.Start.fill('2024-09-10');
    await createreservation.End.fill('2024-09-15');
    await createreservation.Client.selectOption({ index: 2 }); 
    await createreservation.Room.selectOption({ index: 2 });
    await createreservation.Bill.selectOption({ index: 0 });
    await createreservation.save.click();
    await expect(page.locator('#app > div > div.reservations > div:nth-child(2) > div.end')).toBeVisible();
  
  });

});
