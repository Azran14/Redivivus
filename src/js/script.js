var menuMobile = document.querySelector(".headernavMobile");
var iconMenu = document.querySelector(".headericonMenu");
var iconClose = document.querySelector(".header__closeMenu");

iconMenu.addEventListener("click", function() {
  menuMobile.classList.add("is-visible");
});

iconClose.addEventListener("click", function() {
  menuMobile.classList.remove("is-visible");
});
