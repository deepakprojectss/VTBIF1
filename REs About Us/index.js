function openNav() {
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
