const puppeteer = require("puppeteer");
const fs = require("fs");

let dizi = [];
(async () => {
  for (let i = 1; i < 57; i++) {
    const browser = await puppeteer.launch({
      headless: false,
      timeout: 300000000,
    });
    const page = await browser.newPage();
    await page.goto("https://www.epey.com/akilli-telefonlar/" + i.toString());

    let herfs = await page.$$eval(".listele a.urunresmi", (as) =>
      as.map((a) => a.href)
    );
    console.log(herfs.length);
    for (let i = 0; i < herfs.length - 1; i++) {
      dizi.push(herfs[i]);
      fs.appendFile(
        "./linkdatas.txt;",
        herfs[i].toString() + "\n",
        function (err, data) {
          if (err) throw err;

          console.log("Veri başarıyla yazıldı.");
        }
      );
      console.log(herfs[i]);
    }
    await browser.close();
  }
  console.log(dizi);
})();