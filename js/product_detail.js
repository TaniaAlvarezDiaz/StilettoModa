/**
 * Función para seleccionar una talla
 * @param {*} e
 */
function selectSize(e) {
  $("#product_sizes li").each(function () {
    // Quitar clase selected
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    }
  });

  // Poner la clase selected al elemento actual
  $(e).addClass("selected");
}

/**
 * Función para añadir al carrito la talla seleccionada
 */
function addToTheCart() {
  // Mirar si hay alguna talla seleccionada
  var count = document.querySelectorAll("#product_sizes li.selected").length;

  // Si no hay talla seleccionada se muestra alerta
  if (count === 0) alert("Tienes que seleccionar una talla.");
  else alert("Producto añadido al carrito correctamente.");
}
