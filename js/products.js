$(document).ready(function () {
  new LazyClass().lazy_setup();
});

/**
 * Función para cambiar el texto del filtro del precio
 * @param {int} val precio
 */
function changePriceFilterValue(val) {
  document.getElementById("price_filter_value").innerHTML = val + " €";
}

/**
 * Función para borrar los filtros
 */
function deleteFilters() {
  //Precio
  var priceFilter = document.getElementById("price_filter");
  priceFilter.value = priceFilter.max;
  changePriceFilterValue(priceFilter.value);

  //Marca y talla
  var checkboxes = document.getElementsByClassName("checkbox");
  Array.from(checkboxes).forEach((el) => {
    el.firstElementChild.checked = false;
  });
}
