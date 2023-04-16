(()=>{
    console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'profesores.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let profesores = JSON.parse(this.responseText);
            
            profesores.forEach(profesor => {
                let x = 0;
                profesor.forEach(nombre=>{
                    if (x<profesor.length-2) {
                        if (profesor[x]['general']==profesor[x+1]['general']) {
                            profesor.splice(x,1)
                        }               
                    }
                    console.log(nombre['general'])
                    let caja = document.createElement('div');
                    caja.innerHTML = nombre['general'];
                    document.body.appendChild(caja);
                    x++
                })
            })
        }
    }
})();