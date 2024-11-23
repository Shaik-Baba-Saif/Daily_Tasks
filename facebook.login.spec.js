const { chromium, test, expect } = require("@playwright/test");

const arr = ["shaik", "Baba saif", "9704173366", "shaik@011"];

test("Login page", async () => {
  const browser = await chromium.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto("https://www.facebook.com/r.php");

  const pageTitle = await page.title();
  await expect(page).toHaveTitle(pageTitle);

  const input1 = await page.getByLabel("First name");
  await expect(input1).toBeVisible();
  await expect(input1).toBeEmpty();
  await expect(input1).toBeEditable();

  await input1.fill(arr[0]);

  const input2 = await page.getByLabel("Surname");
  await expect(input2).toBeVisible();
  await expect(input2).toBeEmpty();
  await expect(input2).toBeEditable();

  await input2.fill(arr[1]);

  const input3 = await page.getByLabel("Mobile number or email address");
  await expect(input3).toBeVisible();
  await expect(input3).toBeEmpty();
  await expect(input3).toBeEditable();

  await input3.fill(arr[2]);

  const input4 = await page.getByLabel("New password");
  await expect(input4).toBeVisible();
  await expect(input4).toBeEmpty();
  await expect(input4).toBeEditable();

  await input4.fill(arr[3]);
});
