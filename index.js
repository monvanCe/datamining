const puppeteer = require("puppeteer");
const fs = require("fs");


const scrape = async () => {

  for (let i = 0; i < 999; i++) {
    const url = "https://ay.live/ib0Ax";

  const browser = await puppeteer.launch( {headless: false} );
  const page = await browser.newPage();
  await page.goto(url);



  console.log (i);
  browser.close();

    }
};

scrape();