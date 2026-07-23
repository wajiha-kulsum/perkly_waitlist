import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath:'/usr/bin/brave', headless:'new', args:['--no-sandbox','--force-color-profile=srgb'] });
async function shot(w,h,name){
  const p=await b.newPage();
  await p.setViewport({width:w,height:h,deviceScaleFactor:1});
  await p.goto('http://localhost:3000',{waitUntil:'networkidle0'});
  await p.evaluate(async()=>{await document.fonts.ready;});
  await new Promise(r=>setTimeout(r,700));
  const sh=await p.evaluate(()=>document.documentElement.scrollHeight);
  await p.screenshot({path:`/tmp/${name}.png`});
  await p.close();
  console.log(name,w+'x'+h,'scrollH='+sh,sh<=h?'NO-SCROLL':'SCROLLS');
}
await shot(1920,1080,'t-1920');
await shot(1280,1024,'t-tall');
await b.close();
