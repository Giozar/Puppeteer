const mostrar = () =>{
    console.log('dentro de la funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'res.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function () {

        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            const tabla = document.createElement('table')
            let encabezado = document.createElement('tr')
            let id = document.createElement('th')
            id.innerHTML = 'id'
            let name = document.createElement('th')
            name.innerHTML = 'nombre'
            let general = document.createElement('th')
            general.innerHTML = 'general'
            let difi = document.createElement('th')
            difi.innerHTML = 'dificultad'
            let recomen = document.createElement('th')
            recomen.innerHTML = 'recomendacion'
            encabezado.appendChild(id)
            encabezado.appendChild(name)
            encabezado.appendChild(general)
            encabezado.appendChild(difi)
            encabezado.appendChild(recomen)
            tabla.appendChild(encabezado)
            datos.forEach(dato => {
                let profe = document.createElement('tr')
                
                let info1 = document.createElement('td')
                
                let info2 = document.createElement('td')
                
                let info3 = document.createElement('td')
                
                let info4 = document.createElement('td')
                
                let info5 = document.createElement('td')
                
                info1.innerHTML = dato['id'];
                info2.innerHTML = dato['name'].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                info3.innerHTML = dato['general'];
                info4.innerHTML = dato['dificultad']
                info5.innerHTML = dato['recomendacion'].match("[0-9]+");;
                profe.appendChild(info1)
                profe.appendChild(info2)
                profe.appendChild(info3)
                profe.appendChild(info4)
                profe.appendChild(info5)
                tabla.appendChild(profe)
            });
            document.body.appendChild(tabla)
        }
    }
}
mostrar();