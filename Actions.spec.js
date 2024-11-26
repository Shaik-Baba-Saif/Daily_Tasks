// !Date : 26-11-2024 [Actions.spec.js]

const {chromium,test,expect} = require("@playwright/test");

test('Mouse & keyword based actions', async()=> {
  const browser = await chromium.launch({headless:false});

  const page = await browser.newPage();

  await page.goto('https://testautomationpractice.blogspot.com/');

  const hoverbtn = await page.locator('button.dropbtn');

  await hoverbtn.hover();
  
  await page.waitForTimeout(3000);

  const leftbtn = await page.locator('button.start');

  await leftbtn.click();

  await page.waitForTimeout(3000);

  const dbbtn = await page.locator('//button[text()="Copy Text"]');

  await dbbtn.dblclick();

  await page.waitForTimeout(3000);

  const drag = await page.locator('div#draggable');

  const drop = await page.locator('div#droppable');

  await drag.dragTo(drop);

  await page.waitForTimeout(3000);

  const text1 = await page.locator("//input[@id='field1']").inputValue();
  const text2 = await page.locator("//input[@id='field2']").inputValue();

  await expect(text1).toMatch(text2);

  // https://swisnl.github.io/jQuery-contextMenu/demo.html

  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

  const rgclick = await page.locator("//span[text()='right click me']");

  await rgclick.click({button: 'right'});



  
  // if(text1==text2){
  //   console.log("True");
  // }
  // else{
  //   console.log0("False");
  // }



})
