const puppeteer = require('puppeteer');
const fs = require('fs')
async function run() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    let todos = []

    async function getPageData(){
        await page.goto('https://www.misprofesores.com/escuelas/UAM-Azcapotzalco-Universidad-Autonoma-Metropolitana_1084')
        /*  await page.screenshot({
        path: 'screenshot.png',
        fullPage: true,
        }) */
        const data = await page.evaluate(()=>{
            const $reviews = document.querySelectorAll('.odd')
            const data = []
            $reviews.forEach(($review)=>{
                data.push({
                    general: $review.querySelector('.url.hidden-xs.sorting_1').textContent.trim().replace(/,/g, " ").toUpperCase(),
                })
            })
            return{
                reviews: data,
            }
        })
        todos = Object.values(data)
        console.log(todos)
        fs.writeFile('profesores.json', JSON.stringify(todos),()=>{
            console.log('data writed')
        })
        await browser.close()
    }
    getPageData()
    //await browser.close()
}
run()