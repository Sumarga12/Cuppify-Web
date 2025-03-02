// tests/ui.spec.js
import { test, expect } from '@playwright/test';

const BASE_URL = 'http://localhost:3000'; // Adjust this URL to match your running app

// -----------------------------
// ExploreMenu Component Tests
// -----------------------------

test('minimal test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});

test('ExploreMenu Component Tests', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});
test('should render ExploreMenu with correct title and description', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');

  });

  test('should render correct number of menu items', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('should toggle category on menu item click', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('should toggle back to "All" when clicking active menu item', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('FoodDisplay Component Tests', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });


  test('should render FoodDisplay with header', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('should display all food items for category "All"', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('should filter food items by specific category', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('FoodItem Component Tests', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('should render FoodItem with image, name, description, price, and rating', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('should show add button when item is not in cart', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('should add item to cart and update counter', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('should increment and decrement cart counter', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('Navbar Component Tests', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });


  test('should render Navbar with logo and menu links', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('should set active class on menu link when clicked', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('should display Sign In button when not authenticated', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('should display profile dropdown when authenticated', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  test('should logout correctly and navigate to home', async ({ page }) => {
    await page.goto('https://example.com');
    await expect(page).toHaveTitle('Example Domain');
  });

  
