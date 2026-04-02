// Playwright fixtures for test setup and teardown

import { test as base } from '@playwright/test';

// Create a fixture that will be available in tests
const test = base.extend({
    // Define fixtures here
    // For example: page: async ({ page }, use) => {
    //    await use(page);
    // },
});

export default test;
