const mostrar = ()=>{
    console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'url.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            datos.forEach(dat => {
                    //console.log(dat);
                    let caja = document.createElement('div');
                    caja.innerHTML = dat;
                    document.body.appendChild(caja);
                })
        }
    }
};

mostrar();


