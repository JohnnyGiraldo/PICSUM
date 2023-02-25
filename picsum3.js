const app = {
  baseUrl: "https://picsum.photos/v2/list?",
  getPictures: async function () {
    const page = document.getElementById("pagina").value;
    console.log("ggg", page); // Select
    const cantidad = document.getElementById("cantidad").value; //  Text
    //let urlFinal = "https//picsum.photos/v2/list?";
    let urlFinal = app.baseUrl;
    if (page > 0 && cantidad > 0 && cantidad < 100) {
      urlFinal += `page=${page}&limit=${cantidad}`;
      const resp = await fetch(urlFinal);
      const data = await resp.json();
      app.renderPictures(data);
    } else {
      alert("Debe seleccionar correctamente la página y la cantidad");
    }
  },
  renderPictures: function (data) {
    let contenidoDiv = document.getElementById("contenido");
    contenidoDiv.innerHTML = "";
    const escalaGrises = document.getElementById("myCheck").checked; // Checkbox
    const blur = document.getElementById("blur").value; // Select
    let urlFoto = "";
    if (escalaGrises) urlFoto += `grayscale`;
    if (blur > 0) urlFoto += `&blur=${blur}`;
    for (let item of data) {
      contenidoDiv.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${item.download_url}?${urlFoto}" class="card-img
                -top" alt="..." class="img">
                <div class="card-body">
                <h5 class="card-title">${item.author}</h5>
                <p class="card-text">ID del autor: ${item.id}</p>
                <a href="${item.url}" class="btn btn-prymary" target="_blank">URL</a>
                </div>
            </div>`;
    }
  }
};
(function () {
  document
    .getElementById("btn_aceptar")
    .addEventListener("click", app.getPictures);
})();
