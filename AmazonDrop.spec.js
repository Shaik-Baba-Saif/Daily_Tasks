const {Chromium,test,expect, chromium} = require('@playwright/test');

test('Amazon dropdown', async() => {
  const browser = await chromium.launch({headless : false});
  
  const page = await browser.newPage();
  await page.goto("https://Amazon.in/");

  const pageTitle = await page.title();
  await expect(page).toHaveTitle(pageTitle);

  const pagetUrl = await page.url();
  await expect(page).toHaveURL(pagetUrl);
  console.log(pagetUrl);

  await page.getByLabel('Select the department you').selectOption("Books");
  
  const search = await page.getByPlaceholder('Search Amazon.in');
  await expect(search).toBeEmpty();
  
  await search.fill("Harry Potter");

  await page.waitForTimeout(3000);

  const searchButton = await page.locator("//input[@type='submit' and @value='Go']");
  await searchButton.click();

  // await page.waitForTimeout(2000);

  // const btn = await page.locator('//input[@id = "nav-search-submit-button"]');
  // await btn.click();

  
  



  
});