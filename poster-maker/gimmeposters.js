const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4567/');
  const code = await page.$('main');
  await code.screenshot({path: '../source/images/poster-en.png'});
  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4567/hi/');
  const code = await page.$('main');
  await code.screenshot({path: '../source/images/poster-hi.png'});
  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4567/kn/');
  const code = await page.$('main');
  await code.screenshot({path: '../source/images/poster-kn.png'});
  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4567/nag/');
  const code = await page.$('main');
  await code.screenshot({path: '../source/images/poster-nag.png'});
  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4567/kok/');
  const code = await page.$('main');
  await code.screenshot({path: '../source/images/poster-kok.png'});
  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4567/pa/');
  const code = await page.$('main');
  await code.screenshot({path: '../source/images/poster-pa.png'});
  await browser.close();
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:4567/bn/');
  const code = await page.$('main');
  await code.screenshot({path: '../source/images/poster-bn.png'});
  await browser.close();
})();
