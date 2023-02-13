

(function(){
    
      function uniqBy(a, key) {
        var seen = {};
        return a.filter(function(item) {
            var k = key(item);
            return seen.hasOwnProperty(k) ? false : (seen[k] = true);
        })
    }
    const url = 'https://picsum.photos/v2/';
    fetch(`${url}/list`)// llamado al Api externo
    .then(resp => {
        console.log(resp)// Obtengo la respuesta en el primer .them
            if(resp.ok && resp.status==200){
                return resp.json(); // se convierte la respuesta
          
            }
    })
    .then(data1 => {
        var tope=4;
        let html="";

        
        let data=[...new Map(data1.map(item =>
            [item['author'], item])).values()];


        for(let i= 0;i<data.length;){
        
            html+=`<div class="container">`;

            for(let j= 0;i<data.length && j<tope;j++,i++){
                html += 
            `<div class="card">
                 <figure>
                     <img src="${data[i].download_url}" class="card-img-top" alt="...">
                 </figure>
                 <div class="contenido">
                 <p>AUTOR:</p><h3>${data[i].author}</h3>
                 url:<p>${data[i].url}</p>
                 <a href="#">Leer mas</a>
            </div>
            </div>`;
            }
            html +=`</div>`
            

            
        }
        document.getElementById("menu").innerHTML+=html;

   })
   .catch(resp => console.log("Error en el llamado del API",resp))
}

)()