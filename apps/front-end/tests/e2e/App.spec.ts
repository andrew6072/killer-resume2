import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
})

test('App page should display fetch and display response from api', async ({ page }) => {
  await page.goto('/');
  const dataFromApi = page.getByRole('heading', { name: 'Hello from the API' });
  await expect(dataFromApi).toBeVisible();
});

test('Title should be set correctly', async ({ page }) => {
  await page.goto('/');
  const title = await page.title();
  expect(title).toBe('Vite + React + TS');
});

test('check h1 and h3 content', async ({ page }) => {
  // Navigate to your React app
  await page.goto('/');

  // Check the content of the h1 tag
  const h1 = page.locator('h1');
  await expect(h1).toHaveText('My React App - Development');

  // Check the content of the h3 tag
  const h3 = page.locator('h3');
  await expect(h3).toHaveText('Hello From The Api');
});