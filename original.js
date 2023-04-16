const puppeteer = require('puppeteer');
const fs = require('fs')
const { Console } = require('console');

async function run() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    let reviews = []
    async function getPageData(pageNumber = 1){
        await page.goto('https://platzi.com/cursos/html5-css3/opiniones/1')
        const data = await page.evaluate(()=>{
            const $reviews = document.querySelectorAll('.Review')
            const $pagination = document.querySelectorAll('.Pagination .Pagination-number')
            const totalPage = Number($pagination[$pagination.length -1].textContent.trim())
            const data = []
            $reviews.forEach(($review)=>{
                data.push({
                    username: $review.querySelector('.Review-name').textContent,
                    rating: $review.querySelector('.Review-stars .fulled').length,
                    content: $review.querySelector('.Review-description').textContent.trim(),
                })
            })
            return{
                reviews: data,
                totalPage,
            }
        })
        reviews = [...reviews,...data.reviews]
        console.log(`page ${pageNumber} of ${data.totalPage} completed`)
        if (pageNumber <= data.totalPage){
            getPageData(pageNumber + 1)
        }else{
            fs.writeFile('data.json', JSON.stringify(reviews),()=>{
                console.log('data writed')
            })
            await browser.close()
        }
    }
    getPageData()
    /*  await page.screenshot({
        path: 'screenshot.png',
        fullPage: true,
    }) */
}
run()