//de la lista agregar nombres manualmente al a la variable profesores
//ejecuatar con la terminal, node trimepaso1.js
const puppeteer = require('puppeteer');
const fs = require('fs');
const profesores = [
"FRANCISCO RAMON SALAZAR VELASCO",
"CARLOS ANTONIO ULIN JIMENEZS",
"ANTONIO LUIS BAISON OLMOA",
"CUTBERTO SALVADOR ROMERO MELENDEZ",
"JOSE VENTURA BECERRIL ESPINOSA",
"DAVID ELIZARRARAZ MARTINEZ",
"ANTONIO LUIS BAISON OLMO",
"VIRGINIA GONZALEZ VELEZ",
"JESUS ADRIAN ESPINOLA ROCHA",
"VICTOR GERARDO SERRANO DOMINGUEZ",
"VICTOR GERARDO SERRANO DOMINGUEZ",
"PEDRO PORTILLO DIAZ",
"MARIA JUDITH OMAÑA PULIDO",
"FRANCISCO RAMON SALAZAR VELASCO",
];
let contador = 0;
let enlace = []

async function run() {
    //variables puppiteer
    const browser = await puppeteer.launch(/* {headless: false} */) //se espera a que abra el navegador
    const page = await browser.newPage() //se espera a que abra una nueva pagiana
    let todos = [] //se declara variable que recopílara los datos a buscar
            //funcion asincrona que esperara a obtener los datos requerridos
            async function getPageData(){
                //esperamos a buscar el enlace de foreach recorrido
                while (contador < profesores.length) {
                    await page.goto('https://misprofesores.com');
                    await page.type('.form-control',profesores[contador]);
                    await page.keyboard.press('Enter');
                    await page.waitForNavigation();
                    /* await page.setViewport({
                        width: 1280,
                        height: 800,
                        deviceScaleFactor: 1,
                    }); */
                         // way 1
                        const hrefs1 = await page.evaluate(() => Array.from(document.querySelectorAll('a[href]'),a => a.getAttribute('href')));
                        // way 2
                        const elementHandles = await page.$$('a');
                        const propertyJsHandles = await Promise.all(elementHandles.map(handle => handle.getProperty('href')));
                        const hrefs2 = await Promise.all(
                        propertyJsHandles.map(handle => handle.jsonValue()));
                        todos = hrefs1.concat(hrefs2);
                        enlace = enlace.concat(todos[3]);
                        console.log(enlace)
                    //calif guarda todos los profes que se recorren en el ciclo
                    //se van agregando y mostrando todos hasta que termine el ciclo
                    fs.writeFile('trimeres1.json', JSON.stringify(enlace),()=>{
                        console.log('data writed')
                    })
                    contador++;
                }
                //espera a cerra el navegador
                await browser.close()
                //espera que se ejecute lo demas para contar los profesores
            }
            getPageData()
}
run()