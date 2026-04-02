'use strict';

const { test, expect } = require('@playwright/test');

// Define a comprehensive set of test cases for logging into the OrangeHRM application.

test.describe('OrangeHRM Login Tests', () => {
    test('Valid login', async ({ page }) => {
        await page.goto('https://example.oranghrm.com'); // Replace with actual URL
        await page.fill('#txtUsername', 'Admin'); // Replace with actual username field selector
        await page.fill('#txtPassword', 'admin123'); // Replace with actual password field selector
        await page.click('#btnLogin'); // Replace with actual login button selector
        await expect(page).toHaveURL(/dashboard/); // Check if redirected to dashboard
    });

    test('Invalid login - wrong password', async ({ page }) => {
        await page.goto('https://example.oranghrm.com'); // Replace with actual URL
        await page.fill('#txtUsername', 'Admin');
        await page.fill('#txtPassword', 'wrong_password');
        await page.click('#btnLogin');
        await expect(page.locator('.error-message')).toContainText('Invalid credentials'); // Check for error message
    });

    test('Invalid login - empty fields', async ({ page }) => {
        await page.goto('https://example.oranghrm.com');
        await page.click('#btnLogin');
        await expect(page.locator('.error-message')).toContainText('Required'); // Check for required fields error
    });

    test('Invalid login - wrong username', async ({ page }) => {
        await page.goto('https://example.oranghrm.com');
        await page.fill('#txtUsername', 'wrong_user');
        await page.fill('#txtPassword', 'admin123');
        await page.click('#btnLogin');
        await expect(page.locator('.error-message')).toContainText('Invalid credentials'); // Check for error message
    });

    test('Valid login and logout', async ({ page }) => {
        await page.goto('https://example.oranghrm.com');
        await page.fill('#txtUsername', 'Admin');
        await page.fill('#txtPassword', 'admin123');
        await page.click('#btnLogin');
        await expect(page).toHaveURL(/dashboard/);
        await page.click('#welcome'); // Click on welcome user
        await page.click('#btnLogout'); // Click logout
        await expect(page).toHaveURL(/login/); // Check if redirected to login page
    });
});
