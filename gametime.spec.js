const {chromium,test,expect} = require('@playwright/test');

test('Browser Launch',async()=>{
  const browser = await chromium.launch({headless:true});

  const page = await browser.newPage();
  await page.goto("https://www.gametime.co/");
  const pageTitle = await page.title();
  await expect(page).toHaveTitle(pageTitle);
  console.log(pageTitle);
  
  const pagetUrl = await page.url();
  await expect(page).toHaveURL(pagetUrl);
  console.log(pagetUrl);

  const login = await page.locator('.components-Search-SearchBox-SearchBox-module__search-input');
  await expect(login).toBeEmpty();
  await login.fill('Trendologies');

  // components-Headers-MinimalHeader-MinimalHeader-module__account-text

  const signin = await page.locator('.components-Headers-MinimalHeader-MinimalHeader-module__account-text');
  await expect(signin).toBeVisible();
  await signin.click();

  // #user-email
  // const email = await page.locator('#user-eamil');
  // await expect(email).toBeVisible();
  // await email.fill("trendologies");

});