const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}function openNav() {
    document.getElementById("mySidenav").style.animationName = "example";
    var element = document.getElementById("mySidenav");
    element.classList.remove("hide");
    element.classList.add("show")
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.animationName = "revexample";
    var element = document.getElementById("mySidenav");
    element.classList.add("hide");
    element.classList.remove("show")
  }
  
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
