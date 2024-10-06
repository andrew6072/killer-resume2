import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '../e2e',
  timeout: 30000,
  webServer: {
    command: 'pnpm run -r dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true
  },
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    baseURL: 'http://localhost:5173'
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    }
  ],
});
