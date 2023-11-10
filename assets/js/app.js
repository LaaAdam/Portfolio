var screenSize = window.matchMedia("(max-width: 992px)");
var screenSize2 = window.matchMedia("(max-width: 600px)");


window.addEventListener("load", function () {
  // Cacher le preloader lorsque le contenu de la page est chargé
  var preloader = document.getElementById("preloader");
  let timeLoad = 100;
  const screenWidth = window.innerWidth;

  if (screenWidth < 992) {
      timeLoad = 100;
  }
  else {
      timeLoad = 300;
      createMatrixElements(500);
  }


  setTimeout(function () {
      preloader.style.display = "none";
  }, timeLoad);
});

function createMatrixElements(numElements) {
  const preloader = document.getElementById('preloader');

  for (let i = 0; i < numElements; i++) {
    const matrixElement = document.createElement('pre');
    matrixElement.classList.add('matrix');
    //ajouter l'id span title
    
    const top = Math.random() * window.innerHeight;
    const left = Math.random() * window.innerWidth;
    const delay = Math.random() * 5 + 's';

    matrixElement.style.top = top + 'px';
    matrixElement.style.left = left + 'px';
    matrixElement.style.animationDelay = delay;

    matrixElement.textContent = (Math.random() < 0.5) ? '0101010101' : '1101010110';

    preloader.appendChild(matrixElement);
  }
}
window.onscroll = function() {

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ) {
        if (window.innerWidth > 992) {
            document.getElementById('navbar').classList.add('scrolled');
            const elements = document.querySelectorAll('[id="nav-link"]');
            elements.forEach(element => { element.setAttribute('style', 'color:white;') });  

            document.getElementById('logo-icon').setAttribute('style', 'filter: invert(1);');

            document.getElementById('linkedin-icon').setAttribute('style', 'filter: invert(1);');

            document.getElementById('instagram-icon').setAttribute('style', 'filter: invert(1);');
          } 


    } else {
        if (window.innerWidth > 992) {
            document.getElementById('navbar').classList.remove('scrolled');
            const elements = document.querySelectorAll('[id="nav-link"]');
            elements.forEach(element => { element.setAttribute('style', 'color:black;') });

            document.getElementById('logo-icon').setAttribute('style', 'filter: invert(0);');

            document.getElementById('linkedin-icon').setAttribute('style', 'filter: invert(0);');

            document.getElementById('instagram-icon').setAttribute('style', 'filter: invert(0);');
          }     
    }
}   


screenSize.addListener(myFunction);

myFunction(screenSize);

function myFunction(screenSize) {
  if (screenSize.matches) {
    document.getElementById('logo-icon').setAttribute('src', 'assets/img/icon-inv.png');
    document.getElementById('logo-icon').setAttribute('srcset', 'assets/webp/icon-inv.webp, assets/img/icon-inv.png');
    
    document.getElementById('linkedin-icon').setAttribute('src', 'assets/img/icons8-linkedin-white.png');
    document.getElementById('linkedin-icon').setAttribute('srcset', 'assets/webp/icons8-linkedin-white.webp, assets/img/icons8-linkedin-white.png');

    document.getElementById('instagram-icon').setAttribute('src', 'assets/img/icons8-instagram-white.png');
    document.getElementById('instagram-icon').setAttribute('srcset', 'assets/webp/icons8-instagram-white.webp, assets/img/icons8-instagram-50-white.png');

    const elements = document.querySelectorAll('[id="nav-link"]');
    elements.forEach(element => { element.setAttribute('style', 'color:white;') });
    if (screenSize.matches2) {
      document.getElementsByClassName('col-md-9 col-lg-4 mb-5').className += 'col-md-12';
    }
  }
  else{
  }
}

// AOS
AOS.init({
    duration: 800,
});