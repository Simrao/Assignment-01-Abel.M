import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { DashboardPage } from './pages/dashboard-page';
import { CreateBill } from './pages/create-bills-page';
import { DeleteBills } from './pages/delete-bills-page';

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
});
