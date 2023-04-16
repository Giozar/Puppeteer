const puppeteer = require('puppeteer');
const fs = require('fs')
async function run() {

    (async function main() {
    try {
            const browser = await puppeteer.launch();
            const [page] = await browser.pages();
            let todos = []
            await page.goto('https://www.misprofesores.com/escuelas/UAM-Azcapotzalco-Universidad-Autonoma-Metropolitana_1084');
        
                // way 2
            const elementHandles = await page.$$('.odd .url.hidden-xs.sorting_1 a');
            const propertyJsHandles = await Promise.all(elementHandles.map(handle => handle.getProperty('href')));
            const hrefs2 = await Promise.all(
            propertyJsHandles.map(handle => handle.jsonValue()));
            todos = (hrefs2);
            console.log(todos);
            fs.writeFile('urls_profes.json', JSON.stringify(todos),()=>{
                console.log('data writed')
            })
            await browser.close();
        } 
        catch(err){
            console.error(err);
            }
    })();
    //await browser.close()
}
run()