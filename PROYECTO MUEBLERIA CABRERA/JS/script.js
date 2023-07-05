let menu = document.querySelector('#menu-icon')
let navegador = document.querySelector('.navegador')
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navegador.classList.toggle('open');
};
const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset:false
});
sr.reveal('.monitoinicio-texto', {delay:200, origin:'left'})
sr.reveal('.monitoinicio-img', {delay:450, origin:'top'})
sr.reveal('.volver-arriba', {delay:500, origin:'right'})
sr.reveal('.muestrario', {delay:200, origin:'bottom'})
sr.reveal('.variedad', {delay:200, origin:'top'})
sr.reveal('.textoinicio', {delay:200, origin:'right'})
sr.reveal('.caja-prin', {delay:300, origin:'bottom'})

function mostrarCategoria(categoria) {
    // Borra el contenido actual del catálogo
    var catalogoContainer = document.getElementById('catalogo');
    catalogoContainer.innerHTML = '';
  
    // Recupera los muebles de la categoría seleccionada desde Firestore
    catalogoCollection.where("categoria", "==", categoria).get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    var data = doc.data();
    var nombre = data.nombre;
    var descripcion = data.descripcion;
    var categoria = data.categoria;
    var imagen = data.imagen;
  
        // Crea elementos HTML para mostrar el nombre, la descripción y la imagen
        var catalogoItem = document.createElement('div');
        catalogoItem.classList.add('catalogo-item');
        var nombreSinExtension = imagen ? imagen.replace('.jpg', '') : '';


        var imageElement = document.createElement('img');
        imageElement.src = "https://firebasestorage.googleapis.com/v0/b/muebleriacabrera-f24f4.appspot.com/o/" + encodeURIComponent(nombre + ".jpg") + "?alt=media";
  
        var nombreElement = document.createElement('h3');
        nombreElement.textContent = nombre;
  
        var descripcionElement = document.createElement('p');
        descripcionElement.textContent = descripcion;
  
        // Agrega los elementos al elemento del catálogo
        catalogoItem.appendChild(imageElement);
        catalogoItem.appendChild(nombreElement);
        catalogoItem.appendChild(descripcionElement);
  
        // Agrega el elemento del catálogo al contenedor del catálogo
        catalogoContainer.appendChild(catalogoItem);
      });
    }).catch(function(error) {
      console.log(error);
    });
  }

  function mostrartodos() {
  // Limpia el contenido actual del catálogo
  var catalogoContainer = document.getElementById('catalogo');
  catalogoContainer.innerHTML = "";

  // Recupera todos los muebles desde Firestore
  catalogoCollection.get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      var data = doc.data();
      var nombre = data.nombre;
      var descripcion = data.descripcion;
      var categoria = data.categoria;
      var imagen = data.imagen;
      // Crea un contenedor para el mueble
      var catalogoItem = document.createElement('div');
      catalogoItem.classList.add('catalogo-item');
      
      var imageElement = document.createElement('img');
      imageElement.src = "https://firebasestorage.googleapis.com/v0/b/muebleriacabrera-f24f4.appspot.com/o/" + encodeURIComponent(nombre + ".jpg") + "?alt=media";
      catalogoItem.appendChild(imageElement);


      // Crea elementos HTML para mostrar el nombre, la descripción y la categoría
      var nombreElement = document.createElement('h3');
      nombreElement.textContent = nombre;

      var descripcionElement = document.createElement('p');
      descripcionElement.textContent = descripcion;

      var categoriaElement = document.createElement('p');
      categoriaElement.textContent = 'Categoría: ' + categoria;

      // Agrega los elementos al contenedor del mueble
      catalogoItem.appendChild(nombreElement);
      catalogoItem.appendChild(descripcionElement);
      catalogoItem.appendChild(categoriaElement);
      // Agrega el mueble al contenedor del catálogo
      catalogoContainer.appendChild(catalogoItem);
    });
  }).catch(function(error) {
    console.log(error);
  });
}

