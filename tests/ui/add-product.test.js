const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('https://jivak1-exam.onrender.com/Add-Product');
    const form = await page.$('form');
    expect(form).toBeTruthy();
  });
  