import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://freelance-learn-automation.vercel.app/signup');
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('ishwari');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('ishwarirele9@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('sarakale');
  await page.getByLabel('Cypress').check();
  await page.getByLabel('Playwright').check();
  await page.getByLabel('TestingSelenium').check();
  await page.locator('#gender2').check();
  await page.locator('#state').selectOption('Maharashtra');
  await page.locator('#hobbies').selectOption('Dancing');
  await page.locator('#hobbies').selectOption('Singing');
  await page.locator('#hobbies').selectOption('Swimming');
  await page.locator('#hobbies').selectOption('Reading');
  await page.getByRole('button', { name: 'Sign up' }).click();

  await page.waitForTimeout(4000)

  const url = await page.url()
  expect(url).toContain("login")



  await page.getByPlaceholder('Enter Email').click();
  await page.getByPlaceholder('Enter Email').fill('ishwarirele18@gmail.com');
  await page.getByPlaceholder('Enter Password').click();
  await page.getByPlaceholder('Enter Password').fill('sarakale');
  await page.getByRole('button', { name: 'Sign in' }).click();
});