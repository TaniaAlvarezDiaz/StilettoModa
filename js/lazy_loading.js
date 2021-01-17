class LazyClass {
  lazy_setup() {
    const imgs = document.querySelectorAll("[data-src]");

    if ("IntersectionObserver" in window) {
      //Configure de intersection observer instance
      var intersectionObserverOptions = {
        root: null,
        threshold: 0,
      };

      //use intersection observer
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          // Are we in viewport?
          if (entry.isIntersecting) {
            //make image visible
            var dataSrc = entry.target.getAttribute("data-src");
            entry.target.src = dataSrc;
            //remove data-src and lazy class
            entry.target.removeAttribute("data-src");
            entry.target.classList.remove("lazy");
            //unobserve image
            observer.unobserve(entry.target);
          }
        });
      }, intersectionObserverOptions);

      //Don't put a lambda expression because Internet Explorer shows an error
      imgs.forEach(function (img) {
        observer.observe(img);
      });
    } else {
      //Process lazy load manually
      $(document).scroll(function () {
        processScroll();
      });
    }
  }

  processScroll() {
    $("[data-src]").each(function (index) {
      var actual_image = $(this);
      if (elementInViewport(actual_image) && actual_image.hasClass("lazy")) {
        var element = actual_image.get(0);
        //Make image visible
        var dataSrc = element.getAttribute("data-src");
        element.src = dataSrc;
        //Remove data-src and lazy class
        element.removeAttribute("data-src");
        element.classList.remove("lazy");
      }
    });
  }

  elementInViewport(el) {
    var elementTop = el.offset().top;
    var elementBottom = elementTop + el.outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }
}
