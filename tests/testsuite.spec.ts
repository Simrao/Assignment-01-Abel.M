import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { DashboardPage } from './pages/dashboard-page';
import { CreateBill } from './pages/create-bills-page';
import { DeleteBills } from './pages/delete-bills-page';
import { CreateClient } from './pages/create-client-page';
import { CreateRoom } from './pages/create-room-page';
import { EditClient } from './pages/edit-client-page';
import { CreateReservation } from './pages/create-reservation-page';
import { EditReservation } from './pages/edit-reservation-page';

test.describe('Test suite 01', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);

  await dashboardPage.performLogout();
  });

  test('successfull login', async ({ page }) => {
    const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.goto();
  await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);

  await dashboardPage.performLogout();
  });


test('create bill', async ({ page }) => {
  const createBill = new CreateBill(page);
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);

  await createBill.createNewBill('5000');
  await createBill.verifyBillCreated();


});

test('delete bill', async ({ page }) => {
  const deleteBills = new DeleteBills(page);
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);
  await deleteBills.deleteFirstBill();
  await deleteBills.verifyBillDeleted();

});
test('create client', async ({ page }) => {
  const createClient = new CreateClient(page);
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);

  await createClient.createClient('Thomas Bergren', 'ThomasBerggren@gmail.com', '073-4325030');
  await createClient.verifyClientCreated();


});

test('create room', async ({ page }) => {
  const createRoom = new CreateRoom(page);
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);
  await createRoom.createNewRoom({
    roomNumber: '205',
    floor: '4',
    price: '9200',
    categoryIndex: 1,
    featureIndex: 0
  });
  await createRoom.verifyRoomCreated();

});
test('edit client', async ({ page }) => {
  const editClient = new EditClient(page);
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);
  await editClient.editClient('Maja Svensson', 'MajaSvensson@gmail.com', '073-3478030');
  await editClient.verifyClientEdited();

  });
  test('create reservation', async ({ page }) => {
    const editReservation = new EditReservation(page);
    const loginPage = new LoginPage(page);
  
    await loginPage.goto();
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);
  
    await editReservation.editExistingReservation('2024-09-10', '2024-09-15', 2, 2, 0);
    await editReservation.verifyReservationEdited();
  
  });
  test('edit reservation', async ({ page }) => {
    const editReservation = new EditReservation(page);
    const loginPage = new LoginPage(page);
  
    await loginPage.goto();
    await loginPage.performLogin(`${process.env.TEST_USERNAME}`, `${process.env.TEST_PASSWORD}`);
  
    await editReservation.editExistingReservation('2024-10-11', '2024-10-14',1 , 1, 1);
    await editReservation.verifyReservationEdited();
   

  });
  test('unsuccessfull login by wrong password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.performLogin('tester01', 'summer24');
  ;
    await expect(page.locator('#app > div > div')).toBeVisible();
  });
  
});

