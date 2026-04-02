'use strict';

/** @type {import('@playwright/test').Config} */
const config = {
  retries: {
    // Configure retry logic for tests
    run: 2, // retry a test 2 times if it fails
    // You can also add retry option specific to test cases
  },
  timeout: 30000, // Global timeout for tests

  // Using multiple browsers
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    },
  ],

  // Configure test reporters
  reporter: [
    ['dot'],
    ['json', { outputFile: 'results.json' }],
    ['html', { open: 'never' }],
  ],

  // Define global setup and teardown, if needed
  globalSetup: require.resolve('./global-setup'),
  globalTeardown: require.resolve('./global-teardown'),

  // Other configurations can be added here
};

module.exports = config;
