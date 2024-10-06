import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        globals: true, // Enable globals like `describe`, `it`, `expect`
        environment: 'node', // Set the environment for tests
        exclude: [
            '**/*.spec.ts',
            '**/e2e/**'
        ],
    },
});