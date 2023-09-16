const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
function openNav() {
  document.getElementById("mySidenav").style.animationName = "example";
  var element = document.getElementById("mySidenav");
  element.classList.remove("hide");
  element.classList.add("show");
}

function closeNav() {
  document.getElementById("mySidenav").style.animationName = "revexample";
  var element = document.getElementById("mySidenav");
  element.classList.add("hide");
  element.classList.remove("show");
}

