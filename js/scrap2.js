const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const baseUrl = 'https://www.nintendo.com/fr-fr/Rechercher/Rechercher-299117.html?f=147394-5-84&p=';
  const startPage = 1;
  const endPage = 536;
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  let allResults = {};

  for (let i = startPage; i <= endPage; i++) {
    const url = `${baseUrl}${i}`;
    await page.goto(url);
    await page.waitForSelector('li[data-nsuid');
    const result = await page.evaluate(() => {
      const data = {};
      const allLi = document.querySelectorAll('li[data-nsuid]');
      allLi.forEach( li => data[li.getAttribute('data-nt-item-title')] = li.getAttribute('data-nsuid'));
      return data;
      });
    allResults = {...allResults, ...result};
    console.log(`page ${i} done`);
  };
  await browser.close();
  fs.writeFileSync('results.json', JSON.stringify(allResults, null, 2));
})();
