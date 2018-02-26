function toggleNav() {
    var navBar = document.getElementById("nav-bar");
    var navShadow = document.getElementById("nav-shadow");
    if (navBar.classList.contains("transform-active")) {
        navBar.classList.remove("transform-active");
        navShadow.classList.remove("transform-shadow-active");
    } else {
        navBar.classList.add("transform-active");
        navShadow.classList.add("transform-shadow-active");
    }
}