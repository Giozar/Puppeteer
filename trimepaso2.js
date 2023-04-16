//ejecuatr con la terminal, node trimepaso2.js
//para ver el resultado abrir el archivo index.html
const puppeteer = require('puppeteer');//se llamana a las librerias
const fs = require('fs')
    //varables globales
    const enlaces = [
        "https://www.misprofesores.com/profesores/FRANCISCO-RAMON-SALAZAR-VELASCO_22927",
    "https://www.misprofesores.com/profesores/carlos-antonio-ulin-jimenez_65601",
    "https://www.misprofesores.com/profesores/Antonio-Luis-Baison-Olmo_93619",
    "https://www.misprofesores.com/profesores/Cutberto-Romero-Melendez_18793",
    "https://www.misprofesores.com/profesores/JOSE-VENTURA-BECERRIL-ESPINOSA_54521",
    "https://www.misprofesores.com/profesores/DAVID-ELIZARRARAZ-MARTINEZ_25561",
    "https://www.misprofesores.com/profesores/Antonio-Luis-Baison-Olmo_93619",
    "https://www.misprofesores.com/profesores/VIRGINIA-GONZALEZ_83723",
    "https://www.misprofesores.com/profesores/Jesus-Adrian-Espinola-Rocha_64036",
    "https://www.misprofesores.com/profesores/VICTOR-GERARDO-SERRANO-DOMINGUEZ_41192",
    "https://www.misprofesores.com/profesores/VICTOR-GERARDO-SERRANO-DOMINGUEZ_41192",
    "https://www.misprofesores.com/profesores/PEDRO-PORTILLO-DIAZ_34238",
    "https://www.misprofesores.com/profesores/Maria-Judith-Omana-Pulido_25000",
    "https://www.misprofesores.com/profesores/FRANCISCO-RAMON-SALAZAR-VELASCO_22927",
    "https://www.misprofesores.com/profesores/Nicolas-Dominguez-Vergara_12071",
    "https://www.misprofesores.com/profesores/JUAN-DE-LA-CRUZ-MEJIA-TELLEZ_24958",
    "https://www.misprofesores.com/profesores/JAVIER-RAMIREZ-RODRIGUEZ_24959",
    "https://www.misprofesores.com/profesores/MARIO-ULISES-LARQUE-SAAVEDRA_24956",
    "https://www.misprofesores.com/profesores/Rafael-Lopez_18038",
    "https://www.misprofesores.com/profesores/Rafael-Lopez_18038",
    "https://www.misprofesores.com/profesores/Jose-Antonio-Climent-Hernandez_61580",
    "https://www.misprofesores.com/profesores/JUAN-DE-LA-CRUZ-MEJIA-TELLEZ_24958",
    "https://www.misprofesores.com/profesores/VICTOR-ALVARADO-VERDIN_23141",
    "https://www.misprofesores.com/profesores/ANTONIO-HERNANDEZ-MUNOZ_29902",
    "https://www.misprofesores.com/profesores/LUIS-FERNANDO-HOYOS-REYES_39841",
    "https://www.misprofesores.com/profesores/ANTONIO-HERNANDEZ-MUNOZ_29902",
    "https://www.misprofesores.com/profesores/ENRIQUE-ALARCON-JIMENEZ_55201",
    "https://www.misprofesores.com/profesores/MIGUEL-ANGEL-ABREU-HERNANDEZ_24957",
    "https://www.misprofesores.com/profesores/Fidel-Cruz-Peregrino_67398",
    "https://www.misprofesores.com/profesores/Leonardo-Di-G-Sigalotti-Diaz_78452",
    "https://www.misprofesores.com/profesores/Hector-Luna-Garcia_33765",
    "https://www.misprofesores.com/profesores/Hector-Luna-Garcia_33765",
    "https://www.misprofesores.com/profesores/Oscar-Olvera-Neria_28369",
    "https://www.misprofesores.com/profesores/Alejandro-Raymundo-Perez-Ricardez_12058",
    "https://www.misprofesores.com/profesores/Oscar-Olvera-Neria_28369",
    "https://www.misprofesores.com/profesores/Guadalupe-Martinez-Hernandez_25004",
    "https://www.misprofesores.com/profesores/Juan-Salvador-Arellano-Peraza_31583",
    "https://www.misprofesores.com/profesores/Jeronimo-Martinez-Flores_38806",
    "https://www.misprofesores.com/profesores/HUGO-PABLO-LEYVA_23123",
    "https://www.misprofesores.com/profesores/CESAR-AUGUSTO-REAL-RAMIREZ_22929",
    "https://www.misprofesores.com/profesores/MARCO-ANTONIO-GUTIERREZ-VILLEGAS_24955",
    "https://www.misprofesores.com/profesores/Alejandro-Cruz-Sandoval_38251",
    "https://www.misprofesores.com/profesores/Alejandro-Cruz-Sandoval_38251",
    "https://www.misprofesores.com/profesores/Margarita-Ma-Lourdes-Sanchez-Guerrero_25092",
    "https://www.misprofesores.com/profesores/FRANCISCO-CERVANTES-DE-LA-TORRE_24953",
    "https://www.misprofesores.com/profesores/JESUS-ISIDRO-GONZALES-TREJO_20246",
    "https://www.misprofesores.com/profesores/JESUS-ISIDRO-GONZALES-TREJO_20246",
    "https://www.misprofesores.com/profesores/MARCO-ANTONIO-GUTIERREZ-VILLEGAS_24955",
    "https://www.misprofesores.com/profesores/Alejandro-Cruz-Sandoval_38251",
    "https://www.misprofesores.com/profesores/CESAR-AUGUSTO-REAL-RAMIREZ_22929",
    "https://www.misprofesores.com/profesores/HECTOR-CORTES-LEON_24954",
    "https://www.misprofesores.com/profesores/HECTOR-CORTES-LEON_24954",
    "https://www.misprofesores.com/profesores/HUGO-PABLO-LEYVA_23123",
    "https://www.misprofesores.com/profesores/HUGO-PABLO-LEYVA_23123",
    "https://www.misprofesores.com/profesores/FRANCISCO-CERVANTES-DE-LA-TORRE_24953",
    "https://www.misprofesores.com/profesores/ANA-LILIA-CONCEPCION-LAUREANO-CRUCES_69456",
    "https://www.misprofesores.com/profesores/MARICELA-CLAUDIA-BRAVO-CONTRERAS_40984"
    ];
    let contador = 0
    //variable que obtendra toda las calificaciones de los profes
    let califs = []
    //catidad de profes que se registran
    registros = 1
             //funcion asincrona que esperara para abrir y correr el navegador
            async function run() {
                //variables puppiteer
                const browser = await puppeteer.launch() //se espera a que abra el navegador
                const page = await browser.newPage() //se espera a que abra una nueva pagiana
                let todos = [] //se declara variable que recopílara los datos a buscar
                        //funcion asincrona que esperara a obtener los datos requerridos
                        async function getPageData(){
                            //esperamos a buscar el enlace de foreach recorrido
                            while (contador < enlaces.length) {
                                await page.goto(enlaces[contador])
                                /*  await page.screenshot({
                                path: 'screenshot.png',
                                fullPage: true,
                                }) */
                                //funcion que espera a encontrar dichos datos
                                const data = await page.evaluate(()=>{
                                    const $reviews = document.querySelectorAll('.container.theme-showcase')
                                    const data = []//arreglo que guardara temporalmente los datos
                                    $reviews.forEach(($review)=>{
                                        data.push({
                                            general: $review.querySelector('.grade').textContent.trim(),
                                        })
                                        const $reviews = document.querySelectorAll('.breakdown-section')
                                        $reviews.forEach(($review)=>{
                                            data.push({
                                                redi: $review.querySelector('.grade').textContent.trim(),
                                            })
                                            const $reviews = document.querySelectorAll('.top-info-block')
                                            $reviews.forEach(($review)=>{
                                                data.push({
                                                    name: $review.querySelector('h2 b span').textContent.trim(),
                                                })
                                            })
                                        })
                                    })
                                    return{
                                        reviews: data,
                                    }
                                })
                                todos = Object.values(data)//todos guarda los datos temporales
                                //se crea un bojeto profe que ocupara los datos de todos
                                const profe = [{
                                    general: todos[0][0]['general'],
                                    recomendacion: todos[0][1]['redi'],
                                    dificultad: todos[0][3]['redi'],
                                    id: registros,
                                    name: todos[0][2]['name']
                                }]
                                //calif guarda todos los profes que se recorren en el ciclo
                                califs = califs.concat(profe);
                                console.log(califs)
                                contador++
                                await registros++
                                //se van agregando y mostrando todos hasta que termine el ciclo
                                fs.writeFile('trimeres2.json', JSON.stringify(califs),()=>{
                                    console.log('data writed')
                                    console.log(registros)
                                })
                                
                            }
                            //espera a cerra el navegador
                            await browser.close()
                            //espera que se ejecute lo demas para contar los profesores
                        }
                        getPageData()
            }
            run()
    
