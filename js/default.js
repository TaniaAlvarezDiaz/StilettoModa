/* Función para establecer en la barra de navegación la opción escogida */
function selectMenuItem(e) {
  $("#navigation a").each(function () {
    // Quitar clase selected
    if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    }
  });

  // Poner la clase selected al elemento actual
  $('a[title="' + e.title + '"]').addClass("selected");

  // Mostrar el listado de productos
  showProductsList();
}

/* Función para establecer en la barra de navegación el padre de la opción escogida */
function selectSubmenuItem(e) {
  var href = e.hash;

  var hrefParent = href.split("/", 2).join("/");

  var menu = document.querySelectorAll("a[href^='" + hrefParent + "']");
  selectMenuItem(menu[0]);
}

/* Función para cargar el listado de productos seleccionado por el usuario */
function showProductsList() {
  var str = window.location.pathname;
  if (!str.includes("products.html")) {
    var actualPage = "index.html";
    if (str.includes("product_detail")) actualPage = "product_detail.html";
    var res = str.replace(actualPage, "products.html");
    window.location.pathname = res;
  }
}

/* Función para mostrar la página de detalle de producto */
function openDetailProduct() {
  var str = window.location.pathname;
  if (!str.includes("product_detail.html")) {
    var actualPage = "index.html";
    if (str.includes("products")) actualPage = "products.html";
    var res = str.replace(actualPage, "product_detail.html");
  }
  window.location.pathname = res;
}
