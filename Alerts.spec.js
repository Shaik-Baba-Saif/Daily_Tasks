// !Date : 28-11-2024

// Task :

const{chromium,test,expect} = require('@playwright/test');

test("Flipkart Alert", async()=>{
      const browser = await chromium.launch({headless:false});
      const page = await browser.newPage();
      await page.goto('https://www.flipkart.com/');

        // Handle the login popup (click the 'X' button if it appears)
  try {
      const closeButton = await page.locator('span._30XB9F');
      if (await closeButton.isVisible()) {
        await closeButton.click();
      }
    } catch (err) {
      console.log('No login popup found.');
    }
  
    // Search for "iPhone 16"
    const searchBox = await page.locator("//input[@title='Search for Products, Brands and More']");
    await searchBox.fill('iPhone 16');
    await searchBox.press('Enter');
  
    // Wait for the results to load
    await page.waitForTimeout(3000);

      
});