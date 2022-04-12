const puppeteer = require("puppeteer");
var excel = require('excel4node');
const fs = require("fs");

var workbook = new excel.Workbook();
var worksheet = workbook.addWorksheet('Sheet 1');

const scrape = async () => {
  var array = fs.readFileSync("./linkdatas.txt").toString().split("\n");
 

  for (let i = 1; i < 473; i++) {
    const url =
      array[i].toString();
      console.log(i+1);

  const browser = await puppeteer.launch( {headless: false} );
  const page = await browser.newPage();
  await page.goto(url);

  /------------------------------------------------------------------/
    const [screenSize] = await page.$x(
      "/html/body/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[2]/a"
    );
    if(screenSize==null ){
        browser.close();
        continue;
    }
    const screenSizee = await (
      await screenSize.getProperty("textContent")
    ).jsonValue();
    worksheet.cell(i,1).string(screenSizee);
    /------------------------------------------------------------------/
    const [storage] = await page.$x(
      "/html/body/div[1]/div[1]/div[5]/div[1]/div[2]/div[2]/a"
    );
    
    if(storage==null ){
        browser.close();
        continue;
    }
    const storagee = await (
      await storage.getProperty("textContent")
    ).jsonValue();
    worksheet.cell(i,2).string(storagee);
    /------------------------------------------------------------------/

    const [ram] = await page.$x(
      "/html/body/div[1]/div[1]/div[5]/div[1]/div[3]/div[2]/a"
    );
    if(ram==null ){
        browser.close();
        continue;
    }
    const ramm = await (await ram.getProperty("textContent")).jsonValue();
    worksheet.cell(i,3).string(ramm);
    /------------------------------------------------------------------/

    const [battery] = await page.$x(
      "/html/body/div[1]/div[1]/div[5]/div[1]/div[4]/div[2]/a"
    );
    if(battery==null ){
        browser.close();
        continue;
    }
    const batteryy = await (
      await battery.getProperty("textContent")
    ).jsonValue();
    worksheet.cell(i,4).string(batteryy);
    /------------------------------------------------------------------/

    const [cell] = await page.$x(
      "/html/body/div[1]/div[1]/div[5]/div[1]/div[5]/div[2]/a"
    );
    if(cell==null ){
        browser.close();
        continue;
    }
    const celll = await (await cell.getProperty("textContent")).jsonValue();
    worksheet.cell(i,5).string(celll);
    /------------------------------------------------------------------/

    const [sppeedCharge] = await page.$x(
      "/html/body/div[1]/div[1]/div[5]/div[1]/div[2]/div[2]/a"
    );
    if(sppeedCharge==null ){
        browser.close();
        continue;
    }
    const sppeedChargee = await (
      await sppeedCharge.getProperty("textContent")
    ).jsonValue();
    worksheet.cell(i,6).string(sppeedChargee);
    /------------------------------------------------------------------/

    const [fiveG] = await page.$x(
      "/html/body/div[1]/div[1]/div[5]/div[2]/div[1]/div[2]/span"
    );
    if(fiveG==null ){
        browser.close();
        continue;
    }
    const fiveGg = await (await fiveG.getProperty("textContent")).jsonValue();
    worksheet.cell(i,7).string(fiveGg);
    /------------------------------------------------------------------/

    const [fourAndHalfG] = await page.$x(
      "/html/body/div[1]/div[1]/div[5]/div[2]/div[2]/div[2]/span"
    );
    if(fourAndHalfG==null ){
        browser.close();
        continue;
    }
    const fourAndHalfGg = await (
      await fourAndHalfG.getProperty("textContent")
    ).jsonValue();
    worksheet.cell(i,8).string(fourAndHalfGg);
    /------------------------------------------------------------------/

    const [waterproof] = await page.$x(
      "/html/body/div[1]/div[1]/div[5]/div[2]/div[3]/div[2]/span"
    );
    if(waterproof==null ){
        browser.close();
        continue;
    }
    const waterprooff = await (
      await waterproof.getProperty("textContent")
    ).jsonValue();
    worksheet.cell(i,9).string(waterprooff);
    /------------------------------------------------------------------/

    const [cpu] = await page.$x(
      "/html/body/div[1]/div[1]/div[5]/div[1]/div[2]/div[2]/a"
    );
    if(cpu==null ){
        browser.close();
        continue;
    }
    const cpuu = await (await cpu.getProperty("textContent")).jsonValue();
    worksheet.cell(i,10).string(cpuu);
    /------------------------------------------------------------------/

    const [howCpu] = await page.$x(
      "/html/body/div[1]/div[1]/div[5]/div[2]/div[5]/div[2]/a"
    );
    if(howCpu==null ){
        browser.close();
        continue;
    }
    const howCpuu = await (await howCpu.getProperty("textContent")).jsonValue();
    worksheet.cell(i,11).string(howCpuu);
    /------------------------------------------------------------------/

    const [sar] = await page.$x(
      "/html/body/div[1]/div[1]/div[5]/div[2]/div[7]/div[2]/span"
    );
    if(sar==null ){
        browser.close();
        continue;
    }
    const sarr = await (await sar.getProperty("textContent")).jsonValue();
    worksheet.cell(i,12).string(sarr);
    /------------------------------------------------------------------/

    const [screenParsent] = await page.$x(
      "/html/body/div[1]/div[1]/div[5]/div[2]/div[8]/div[2]/span"
    );
    if(screenParsent==null ){
        browser.close();
        continue;
    }
    const screenParsentt = await (
      await screenParsent.getProperty("textContent")
    ).jsonValue();
    worksheet.cell(i,13).string(screenParsentt);
    /------------------------------------------------------------------/

    const [batteryChange] = await page.$x(
      "/html/body/div[1]/div[1]/div[5]/div[2]/div[9]/div[2]/span"
    );
    if(batteryChange==null ){
        browser.close();
        continue;
    }
    const batteryChangee = await (
      await batteryChange.getProperty("textContent")
    ).jsonValue();
    worksheet.cell(i,14).string(batteryChangee);
    /------------------------------------------------------------------/

    const [camera] = await page.$x(
      "//html/body/div[1]/div[1]/div[5]/div[2]/div[10]/div[2]/a"
    );
    if(camera==null ){
        browser.close();
        continue;
    }
    const cameraa = await (await camera.getProperty("textContent")).jsonValue();
    worksheet.cell(i,15).string(cameraa);
    /------------------------------------------------------------------/

    const [screenPixeels] = await page.$x(
      "/html/body/div[1]/div[1]/div[5]/div[2]/div[11]/div[2]/a"
    );
    if(screenPixeels==null ){
        browser.close();
        continue;
    }
    const screenPixeelss = await (
      await screenPixeels.getProperty("textContent")
    ).jsonValue();
    worksheet.cell(i,16).string(screenPixeelss);
    /------------------------------------------------------------------/

    const [fingerReed] = await page.$x(
      "/html/body/div[1]/div[1]/div[5]/div[2]/div[12]/div[2]/span"
    );
    if(fingerReed==null ){
        browser.close();
        continue;
    }
    const fingerReedd = await (
      await fingerReed.getProperty("textContent")
    ).jsonValue();
    worksheet.cell(i,17).string(fingerReedd);
    /------------------------------------------------------------------/

    const [point] = await page.$x(
      "/html/body/div[1]/div[1]/div[4]/div[1]/div[2]/div[2]/div[3]/span[1]"
    );
    const pointt = await (await point.getProperty("textContent")).jsonValue();
    worksheet.cell(i,18).string(pointt);
    /------------------------------------------------------------------/

  browser.close();
  workbook.write('Excel1.xlsx');
    }
};

scrape();