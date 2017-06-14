var nav = document.querySelector(".drop-down-menu");
nav.addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("nav-opened");
    document.querySelector(".drop-down-menu").classList.toggle("drop-down-menu-change");
}, false);
