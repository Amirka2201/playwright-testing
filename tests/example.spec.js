import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://polis812.github.io/vacuu/');
});