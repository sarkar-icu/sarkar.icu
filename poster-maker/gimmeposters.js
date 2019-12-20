const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4567/');
  const code = await page.$('.wrapper');
  await code.screenshot({path: '../source/images/poster-en.png'});
  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4567/hi/');
  const code = await page.$('.wrapper');
  await code.screenshot({path: '../source/images/poster-hi.png'});
  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4567/kn/');
  const code = await page.$('.wrapper');
  await code.screenshot({path: '../source/images/poster-kn.png'});
  await browser.close();
})();
