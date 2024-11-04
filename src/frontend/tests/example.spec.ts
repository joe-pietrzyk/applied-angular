import { test, expect } from '@playwright/test';

test('Can Start Up', async ({page}) => {
    await page.goto('http://localhost:4200');
    await expect(page).toHaveTitle('Applied Angular');
})