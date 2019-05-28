const puppeteer = require('puppeteer');

(async () => {

  var width = 1200
  var height = 1200
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--auto-open-devtools-for-tabs',
      '--window-size=' + width + ',' + height
    ]
  })
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({path: 'example.png'});
    console.log(await page.title())
  await browser.close();
})();
