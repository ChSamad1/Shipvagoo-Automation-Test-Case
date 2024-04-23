import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://development.web.shipvagoo.com/');
  await page.goto('https://development.web.shipvagoo.com/login?redirect_to=/?v=1713168821894&v=1713168821909');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('ch.samad67@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('SA123123');
  await page.locator('label').filter({ hasText: 'Remember Me' }).locator('span').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('ch.samad67@gmail.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('SA123123');
  await page.locator('label').filter({ hasText: 'Remember Me' }).locator('span').click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('button').nth(2).click();
  await page.getByPlaceholder('Enter amount').click();
  await page.getByPlaceholder('Enter amount').fill('150');
  await page.getByRole('checkbox').click();
  await page.getByRole('button', { name: 'Pay with saved card (1000' }).click();
})