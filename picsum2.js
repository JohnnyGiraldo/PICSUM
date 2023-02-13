(function(){
    document.getElementById("btn_aceptar").addEventListener("click", cargarDatos)

    function cargarDatos(){
        const escala = document.getElementById("myCheck").checked;
        const blur = document.getElementById("blur").value;
        const pagina  = document.getElementById("pagina").value;
        const cantidad = document.getElementById("cantidad").value;

        /*console.log(escala);
        console.log(blur)
        console.log(pagina)
        console.log(cantidad)*/

        ulrFinal= "https://picsum.photos/v2/list?";
        if(pagina > 0 && cantidad > 0 && cantidad < 100){
            ulrFinal += `page=${pagina}&limit=${cantidad}`;
            renderfotos(ulrFinal);
        }else{
            alert("Debe seleccionar correctamente la pagina y la cantidad")
        }
    }
    function renderfotos(url){
        fetch(url)
        .then(resp => {
            if(resp.ok && resp.status==200){
                console.log("Peticion correcta")
                return resp.json(); 
            }
    
        })
        .then(data =>{
            let contenidoDiv = document.getElementById("contenido");
            contenido.innerHTML = "";
            const escalaGrises = document-getElementById("blur").value; // Select
            let urlFoto = "";
            if (escalaGrises)
                urlFoto += `grayscale`
            if(blur > 0) 
            urlFoto += `&blur=${blur}`
            for (let  item of data){
                contenido.innerHTML += `
                </div> <div class="card" style="width: 18rem;">
                <img src="${item.download_url}" class="card-img-top" alt="...">
                <div class="card-body">
              <h5 class="card-title">${item.author}</h5>
              <h6 class="card-subtitle mb-2 text-muted">${item.id}</h6>
              <a href="${item.url}" class="card-link">${item.url}</a>
                </div> 
            </div>`
            }
        })
        .catch(resp => {console.log(`Error en el llamado del API ${error}`)})
    }

    
})()