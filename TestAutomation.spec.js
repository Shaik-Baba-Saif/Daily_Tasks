const { chromium, test, expect } = require("@playwright/test");

const arr = [
  "shaik",
  "sdsbs16020ee054@gmail.com",
  "9704173366",
  "D.no:11-1-111,ABC colony,ABC city,ABC - 515000.",
];

test("Login page", async () => {
  const browser = await chromium.launch({ headless: true });

  const page = await browser.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");

  const pageTitle = await page.title();
  await expect(page).toHaveTitle(pageTitle);

  const input1 = await page.getByPlaceholder("Enter Name");
  await expect(input1).toBeVisible();
  await expect(input1).toBeEmpty();
  await expect(input1).toBeEditable();

  await input1.fill(arr[0]);

  const input2 = await page.getByPlaceholder("Enter EMail");
  await expect(input2).toBeVisible();
  await expect(input2).toBeEmpty();
  await expect(input2).toBeEditable();

  await input2.fill(arr[1]);

  const input3 = await page.getByPlaceholder("Enter Phone");
  await expect(input3).toBeVisible();
  await expect(input3).toBeEmpty();
  await expect(input3).toBeEditable();

  await input3.fill(arr[2]);

  const input4 = await page.getByLabel("Address:");
  await expect(input4).toBeVisible();
  await expect(input4).toBeEmpty();
  await expect(input4).toBeEditable();

  await input4.fill(arr[3]);
});
