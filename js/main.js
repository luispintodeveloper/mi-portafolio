// Variables
var links = document.querySelectorAll(".footer footer__legends-container a");
var linksHeader = document.querySelectorAll(".header a")
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
const headerName = document.querySelector('.header__logo');
const titleName = document.querySelector('.main__presentation-title');
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        // El título no está en el viewport, muestra el elemento del encabezado
        headerName.style.opacity = '1';
        headerName.style.maxHeight = '10rem';
      } else {
        // El título está en el viewport, oculta el elemento del encabezado
        headerName.style.opacity = '0';
        headerName.style.maxHeight = '0';
      }
    });
  }, { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-14%" }); 

// Listeners
    // Scroll Header
    window.addEventListener("scroll", toggleClassHeaderOne);
    window.addEventListener("scroll", toggleClassHeaderTwo);
    window.addEventListener("scroll", toggleClassHeaderThree);

    // Scroll click
      // Añade un event listener a cada enlace
      linksHeader.forEach(function(enlace) {
        linksHeader.addEventListener("click", function(e) {
          // Previene el comportamiento predeterminado del clic en el enlace
          e.preventDefault();

          // Obtiene el ID de la sección a la que se debe hacer scroll
          var id = this.getAttribute("href");

          // Hace scroll a la sección
          document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });

      links.forEach(function(enlace) {
        links.addEventListener("click", function(e) {
          // Previene el comportamiento predeterminado del clic en el enlace
          e.preventDefault();

          // Obtiene el ID de la sección a la que se debe hacer scroll
          var id = this.getAttribute("href");

          // Hace scroll a la sección
          document.querySelector(id).scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });

  
// Observer
    // Name Header
    observer.observe(titleName);

// Functions 
function toggleClassHeaderOne() {
    header.classList.toggle("scroll_down", window.scrollY > 0);
};

function toggleClassHeaderTwo() {
    const windowHeight = window.innerHeight;
    const scrollPoint = windowHeight * 1.95; 

    header.classList.toggle("scroll_down_two", window.scrollY > scrollPoint);
};

function toggleClassHeaderThree() {
    const windowHeight = window.innerHeight;
    const scrollPoint = windowHeight * 2.905;

    header.classList.toggle("scroll_down_three", window.scrollY > scrollPoint);
}

// Calls
toggleClassHeaderOne();
toggleClassHeaderTwo();