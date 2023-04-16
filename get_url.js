const puppeteer = require('puppeteer');
const fs = require('fs')
async function run() {

    (async function main() {
    try {
            const browser = await puppeteer.launch();
            const [page] = await browser.pages();
            let todos = []
            await page.goto('https://www.misprofesores.com/Buscar?q=Silvia+Claudia+Gavito+Ticozzi');
        
            // way 1
            const hrefs1 = await page.evaluate(() => Array.from(document.querySelectorAll('a[href]'),a => a.getAttribute('href')));
        
                // way 2
            const elementHandles = await page.$$('a');
            const propertyJsHandles = await Promise.all(elementHandles.map(handle => handle.getProperty('href')));
            const hrefs2 = await Promise.all(
            propertyJsHandles.map(handle => handle.jsonValue()));
            todos = hrefs1.concat(hrefs2);
            console.log(todos);
            fs.writeFile('url.json', JSON.stringify(todos),()=>{
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