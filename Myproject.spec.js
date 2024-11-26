const { chromium, test, expect } = require("@playwright/test");
const exp = require('constants');

test("Login page", async () => {
  const browser = await chromium.launch({headless:false});

  const page = await browser.newPage();
  await page.goto("https://kohls.com/");

  const pageTitle = await page.title();
  await expect(page).toHaveTitle(pageTitle);

  const group = await page.$$("//div[@class='sp--nav sp--offers-block']/descendant::li");
  
  for(const each of group){
    const eachtext = await each.innerText();

    console.log(eachtext);
  }
});

