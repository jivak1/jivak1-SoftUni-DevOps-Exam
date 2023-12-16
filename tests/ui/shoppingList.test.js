const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('https://jivak1-exam.onrender.com/Shopping-list');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  