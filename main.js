let navItems = document.querySelectorAll(".nav-items span");
// console.log(navItems)
navItems.forEach(navItemElem => {
    navItemElem.addEventListener("click", (e) => {
        let selectedNavItem = navItemElem.classList[0];
        navItems.forEach(navItemElem2 => {
            let selectedNavItem2 = navItemElem2.classList[0];
            if (selectedNavItem2 == selectedNavItem) {
                navItemElem2.classList.add('active')
            } else {
                navItemElem2.classList.remove('active')
            }
        })
    })
})


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("reel-slides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}


var slideIndexM = 0;
carouselM();

function carouselM() {
  var im;
  var xm = document.getElementsByClassName("fav-slides");
  for (im = 0; im < xm.length; im++) {
    xm[im].style.display = "none";
  }
  slideIndexM++;
  if (slideIndexM > xm.length) {slideIndexM = 1}
  xm[slideIndexM-1].style.display = "block";
  setTimeout(carouselM, 2000); // Change image every 2 seconds
}


var slideIndexC = 0;
carouselC();

function carouselC() {
  var c;
  var y = document.getElementsByClassName("cg-slides");
  for (c = 0; c < y.length; c++) {
    y[c].style.display = "none";
  }
  slideIndexC++;
  if (slideIndexC > y.length) {slideIndexC = 1}
  y[slideIndexC-1].style.display = "block";
  setTimeout(carouselC, 2000); // Change image every 2 seconds
}