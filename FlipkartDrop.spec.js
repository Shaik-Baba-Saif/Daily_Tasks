const {Chromium,test,expect, chromium} = require('@playwright/test');
const { TIMEOUT } = require('dns');

test('Flipkart dropdown', async() => {
  const browser = await chromium.launch({headless : false});
  
  const page = await browser.newPage();
  await page.goto("https://Flipkart.com/");

  const pageTitle = await page.title();
  await expect(page).toHaveTitle(pageTitle);

  const pagetUrl = await page.url();
  await expect(page).toHaveURL(pagetUrl);
  console.log(pagetUrl);

  const search = await page.locator('//input[@placeholder="Search for Products, Brands and More"]');

  await expect(search).toBeEmpty();
  await expect(search).toBeEditable();

  await search.fill("Men");

  await page.waitForTimeout(3000);

  // Interact with the dropdown
  // const drop = await page.$$("//li[@class='_3D0G9a']/div/a");

  // for(const a of drop){
  //   const each = await a.innerText();
  //   console.log(each);
  // }

  await page.locator("(//li[@class='_3D0G9a']/div/a)[8]").click();
  await page.waitForTimeout(2000);

  

  // Close the browser
  // await browser.close();
  

  

});