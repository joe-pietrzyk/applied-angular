import { test, expect, Locator } from '@playwright/test';

test.describe('Navigation', () => {
  test.describe('Given I am at the home page', () => {
    // This test will navigate to the Counter page
    test(
      'I should be able to navigate to the Counter feature using the links',
      { tag: '@step-1' },
      async ({ page }) => {
        await page.goto('http://localhost:4200/');
        await page.getByRole('link', { name: 'Counter' }).click();
        await expect(page).toHaveURL(/\/counter/);
        await expect(page.getByTestId('counter-feature')).toBeVisible();
      },
    );
  });
  test.describe('Given I have navigated to the Counter feature ', () => {
    test(
      'I should be able to navigate to the UI page using the links',
      { tag: '@step-2' },
      async ({ page }) => {
        await page.goto('http://localhost:4200/counter');
        await page.getByRole('link', { name: 'UI' }).click();
        await expect(page).toHaveURL(/\/counter\/ui/);
        await expect(page.getByTestId('counter-feature-ui')).toBeVisible();
      },
    );
  });
});

test.describe('When using the Counter UI', { tag: '@step-3' }, () => {
  let incrementButton: Locator;
  let decrementButton: Locator;
  let outputLabel: Locator;
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/counter/ui');
    incrementButton = await page.getByRole('button', { name: '+' });
    decrementButton = await page.getByRole('button', { name: '-' });
    outputLabel = await page.getByTestId('current');
  });
  test('It should display the expected defaults', async () => {
    await expect(incrementButton).toBeVisible();
    await expect(decrementButton).toBeDisabled();
    await expect(outputLabel).toHaveText('0');
  });
  test.describe('When incrementing the Counter by clicking on the increment button', () => {
    test('It should update the displayed count', async () => {
      await incrementButton.click();
      await expect(outputLabel).toHaveText('1');
      await incrementButton.click();
      await incrementButton.click();
      expect(await outputLabel).toHaveText('3');
    });
  });
  test.describe('When decrementing the Counter by clicking on the decrement button', () => {
    test('It should update the displayed count', async () => {
      await incrementButton.click();
      await incrementButton.click();
      await incrementButton.click();
      await decrementButton.click();
      await expect(outputLabel).toHaveText('2');
      await decrementButton.click();
      await decrementButton.click();
      await expect(outputLabel).toHaveText('0');
    });
    test('It should not allow you to decrement below zero', async () => {
      await expect(decrementButton).toBeDisabled();
      await incrementButton.click();
      await expect(decrementButton).not.toBeDisabled();
      await decrementButton.click();
      await expect(decrementButton).toBeDisabled();
    });
  });
});
test.describe(
  'When using the counter, the FizzBuzz Status Should Be Indicated',
  { tag: '@step-4' },
  () => {
    let fizzBuzz: Locator;
    let incrementButton: Locator;
    let decrementButton: Locator;
    let outputLabel: Locator;
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:4200/counter/ui');
      incrementButton = await page.getByRole('button', { name: '+' });
      decrementButton = await page.getByRole('button', { name: '-' });
      outputLabel = await page.getByTestId('current');
      fizzBuzz = await page.getByTestId('fizzBuzz');
    });

    test('It should display no message when current is zero', async () => {
      await expect(fizzBuzz).toHaveText('');
    });
    test('It should display "fizz" when divisible by three', async () => {
      await incrementButton.click();
      expect(await fizzBuzz).toHaveText('');
      await incrementButton.click();
      expect(await fizzBuzz).not.toHaveText('Fizz');

      await incrementButton.click();
      expect(await fizzBuzz).toHaveText('Fizz');
      await incrementButton.click();
      expect(await fizzBuzz).not.toHaveText('Fizz');

      await incrementButton.click();
      expect(await fizzBuzz).not.toHaveText('Fizz');
      await incrementButton.click();
      expect(await fizzBuzz).toHaveText('Fizz');
    });
    test('It should display "buzz" when divisible by five', async () => {
      const fourTimes = [1, 2, 3, 4];
      for (const _ of fourTimes) {
        await incrementButton.click();
        expect(await fizzBuzz).not.toHaveText('Buzz');
      }
      await incrementButton.click();
      expect(await fizzBuzz).toHaveText('Buzz');
      for (const _ of fourTimes) {
        await incrementButton.click();
        expect(await fizzBuzz).not.toHaveText('Buzz');
      }
      await incrementButton.click();
      expect(await fizzBuzz).toHaveText('Buzz');
    });
    test('It should display "fizzbuzz" when divisible by three and five', async () => {
      const fourteenTimes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
      for (const _ of fourteenTimes) {
        await incrementButton.click();
        expect(await fizzBuzz).not.toHaveText('FizzBuzz');
      }
      await incrementButton.click();
      expect(await fizzBuzz).toHaveText('FizzBuzz');
    });
  },
);
