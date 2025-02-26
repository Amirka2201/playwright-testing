const { test, expect } = require('@playwright/test');

test('Проверка заголовка страницы', async ({ page }) => {
    await page.goto('https://polis812.github.io/vacuu/');

    // Проверяем, что заголовок страницы корректный
    await expect(page).toHaveTitle(/Vakuu.com/i);
});

test('Проверка кликабельности кнопки "Get started"', async ({ page }) => {
    await page.goto('https://polis812.github.io/vacuu/');

    const getStartedButton = page.locator('text=Get started');
    await expect(getStartedButton).toBeVisible();
    await getStartedButton.click();

    // Проверяем, что после клика произошел переход (можно проверить URL)
    await expect(page).not.toHaveURL('https://polis812.github.io/vacuu/');
});

test('Проверка адаптивности страницы', async ({ page }) => {
    await page.goto('https://polis812.github.io/vacuu/');
    
    // Устанавливаем мобильное разрешение
    await page.setViewportSize({ width: 375, height: 812 });

    // Проверяем, что главный заголовок виден
    const mainHeading = page.locator('h1');
    await expect(mainHeading).toBeVisible();

    // Проверяем, что кнопка "Get started" не уходит за экран
    const getStartedButton = page.locator('text=Get started');
    const box = await getStartedButton.boundingBox();
    expect(box.y).toBeGreaterThan(0);
});
