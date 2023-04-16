const puppeteer = require('puppeteer');
const fs = require('fs');

  //console.log(profesor['general'])
    (async function main() {
        try {
            let x = ["https://www.misprofesores.com/profesores/Roberto-Alcantara-Ramirez_24599",
                "https://www.misprofesores.com/profesores/ALEJANDRO-LEONARDO%20FERNANDO-ALDAMA-OJEDA_29901",
                "https://www.misprofesores.com/profesores/javier-alducin-castillo_29006",
                "https://www.misprofesores.com/profesores/Mario-Rafael-Alegria-Tellez_34353",
                "https://www.misprofesores.com/profesores/Cesar-Alex_36402",
                "https://www.misprofesores.com/profesores/Azzolini-Alicia-Beatriz_35383",
                "https://www.misprofesores.com/profesores/Edwing-Almeida-Calderon_97031",
                "https://www.misprofesores.com/profesores/rafael-alonso-gomes_50440",
                "https://www.misprofesores.com/profesores/Juan-Carlos-Altamirano-Cabrera_56845",
                "https://www.misprofesores.com/profesores/Alejandro-ALTAMIRANO-TORRES_44085",
                "https://www.misprofesores.com/profesores/Cesar-Daniel-Alvarado-Gutierrez_96590",
                "https://www.misprofesores.com/profesores/Antonio-Alvarado-Quezada_77199",
                "https://www.misprofesores.com/profesores/Luis-Alberto-Alvarado_77434",
                "https://www.misprofesores.com/profesores/Claudia-Alvarez-Gonzalez_81414",
                "https://www.misprofesores.com/profesores/JOSE-ALFONSO-ALVAREZ-Y%20ANGUIANO_53216",
                "https://www.misprofesores.com/profesores/Rosa-Elena-Alvarez_81257",
                "https://www.misprofesores.com/profesores/VICTOR-MANUEL-ALVEAR-LEYVA_48913",
                "https://www.misprofesores.com/profesores/Raul-Amezcua-gomez_122179",
                "https://www.misprofesores.com/profesores/raul-amezcua_26828",
                "https://www.misprofesores.com/profesores/Nicolas-Alberto-Amoroso-Boelcke_115123",
                "https://www.misprofesores.com/profesores/IGNACIO-ANAYA-HERNANDEZ_120450",
                "https://www.misprofesores.com/profesores/Carolina-Sue-Andrade-Diaz_99757",
                "https://www.misprofesores.com/profesores/Edgar-Alejandro-andrade_44536",
                "https://www.misprofesores.com/profesores/maria-eugenia%20guadalupe-andreu-ibarra_30324",
                "https://www.misprofesores.com/profesores/Deyanira-Angeles-Beltran_29724",
                "https://www.misprofesores.com/profesores/Antonio-Angeles-Rios_21433",
                "https://www.misprofesores.com/profesores/Carlos-Angulo-Alvarez_110331",
                "https://www.misprofesores.com/profesores/Alfonso-Moises-Anzaldo-Meneses_38229",
                "https://www.misprofesores.com/profesores/DAVID-JOSUE-ARAGON-GOMEZ_55920",
                "https://www.misprofesores.com/profesores/Arturo-Aragon-Lezama_48092",
                "https://www.misprofesores.com/profesores/Hans-Israel-Archundia-Aranda_69574",
                "https://www.misprofesores.com/profesores/Irma-Ardon_25149",
                "https://www.misprofesores.com/profesores/eduardo-arellano-mendez_34337",
                "https://www.misprofesores.com/profesores/Juan-Salvador-Arellano-Peraza_31583",
                "https://www.misprofesores.com/profesores/Jorge-Luis%20%20Eduardo-Arenas-Hernandez_46778",
                "https://www.misprofesores.com/profesores/Luis-Erik-Arenas-Toral_52591",
                "https://www.misprofesores.com/profesores/antonio-arguelles_34091",
                "https://www.misprofesores.com/profesores/Luis-Franco-Arias-Ibarrondo_81401",
                "https://www.misprofesores.com/profesores/DANTE-ARIAS-TORRES_40787",
                "https://www.misprofesores.com/profesores/RAFAEL-ARRAZATE-HERNANDEZ_81440",
                "https://www.misprofesores.com/profesores/DANNY-ARROYO-ESPINOZA_47540",
                "https://www.misprofesores.com/profesores/veronica-arroyo-pedroza_108865",
                "https://www.misprofesores.com/profesores/Gerardo-arteaga-Estrada_70299",
                "https://www.misprofesores.com/profesores/elisur-arteaga-nava_69665",
                "https://www.misprofesores.com/profesores/maria-begona-arteta-gamedringer_70553",
                "https://www.misprofesores.com/profesores/Miguel-Arzate-Perez_55918",
                "https://www.misprofesores.com/profesores/Laura-Cecilia-Arzave_108920",
                "https://www.misprofesores.com/profesores/Ivan-Avila-Mota_22745",
                "https://www.misprofesores.com/profesores/Miguel-Avila_30763",
                "https://www.misprofesores.com/profesores/Vicente-Ayala-Ahumada_12050",
                "https://www.misprofesores.com/profesores/alicia-Azzolini_58756",
                "https://www.misprofesores.com/profesores/Luz-Elena-Baca-Santoyo_99910",
                "https://www.misprofesores.com/profesores/MARIA-GABRIELA-BAEZ-JUAREZ_51375",
                "https://www.misprofesores.com/profesores/Israel-Balderas-Serrano_114442",
                "https://www.misprofesores.com/profesores/Javier-Banda-Ledezma_34737",
                "https://www.misprofesores.com/profesores/Gabriela-Barajas-Martinez_29762",
                "https://www.misprofesores.com/profesores/Rosa-Elvia-Barajas-Ochoa_114037",
                "https://www.misprofesores.com/profesores/Beatriz-Susana-Barbera-Miloto_15057",
                "https://www.misprofesores.com/profesores/Icela-Dagmar-Barcelo-Quintal_41016",
                "https://www.misprofesores.com/profesores/Roberto-Barnard-Amosurrutia_22958",
                "https://www.misprofesores.com/profesores/RAYMUNDO-BARRALES-GUADARRAMA_65253",
                "https://www.misprofesores.com/profesores/Rogelio-Barrales_15773",
                "https://www.misprofesores.com/profesores/Sergio-Hector-Barreiro-Torres_96394"]
            let i = 0;
            const browser = await puppeteer.launch({headless: false});
            const page = await browser.newPage();
            await page.setViewport({
            width: 1280,
            height: 800,
            deviceScaleFactor: 1,
        });
        while (i<x.length) {
            await page.goto(x[i]);
            await page.type('.form-control','uam');
            await page.keyboard.press('Enter');
            await page.waitForNavigation();
            i++
        }
            //await browser.close();
        } 
        catch(err){
            console.error(err);
            }
            
    })();