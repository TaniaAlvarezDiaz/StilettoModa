var slideIndex = 0;
var bannerImages = [
  "only.jpg",
  "springfield.png",
  "jack_and_jones.png",
  "tiffosi.png",
];

$(document).ready(function () {
  carousel();
  new LazyClass().lazy_setup();
});

/**
 * Función para mostrar las fotos del banner automáticamente
 */
function carousel() {
  if (slideIndex == bannerImages.length) {
    slideIndex = 0;
  }
  document.getElementById("advertising_image").src =
    "./images/banner/" + bannerImages[slideIndex++];
  setTimeout(carousel, 8000); // Change image every 8 seconds
}
