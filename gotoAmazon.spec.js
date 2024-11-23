const {chromium,test,expect} = require('@playwright/test');

test('Browser Launch',async()=>{
  const browser = await chromium.launch({headless:false});

  const page = await browser.newPage();
  await page.goto("https://www.amazon.in/");
  const pageTitle = await page.title();
  await expect(page).toHaveTitle(pageTitle);
  console.log(pageTitle);
  
  // await page.waitForNavigation();
  // await page=goto('https://www.flipkart.com/');
  
  const pagetUrl = await page.url();
  await expect(page).toHaveURL(pagetUrl);
  console.log(pagetUrl);

  //await page.goback();
  //await page.goforward();
  
});