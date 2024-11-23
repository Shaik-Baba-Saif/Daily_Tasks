const {chromium,test,expect} = require('@playwright/test');

test('FaceBook login page', async()=> {

  const browser = await chromium.launch({headless:false});

  const page = await browser.newPage();

  await page.goto('https://www.facebook.com/');

  const pageTitle = await page.title();
  console.log(pageTitle);

  const pagetext = await page.locator('h2_8eso');
    console.log(pagetext);

  const username = await page.locator('#email');
  await expect(username).toBeVisible();
  await username.fill("trendologies");

  await page.getByTestId('royal_login_button').click();

  // await page.waitForNavigation();

  page.close();

})