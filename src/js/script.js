var menuMobile = document.querySelector(".headernavMobile");
var iconMenu = document.querySelector(".headericonMenu");
var iconClose = document.querySelector(".header__closeMenu");

iconMenu.addEventListener("click", function() {
  menuMobile.classList.add("is-visible");
});

iconClose.addEventListener("click", function() {
  menuMobile.classList.remove("is-visible");
});

// Personalisation

let divChoices = document.querySelectorAll(".mainContent__choice");

for (let i = 0; i < divChoices.length; i++) {
  let divChoice = divChoices[i];
  divChoice.addEventListener("click", function() {
    let infosDiv = divChoice.querySelector(".mainContent__infos");
    let titleDiv = divChoice.querySelector("h2");
    let subtitleDiv = divChoice.querySelector("h3");
    infosDiv.style.transform = "translateY(0)";
    titleDiv.style.display = "none";
    subtitleDiv.style.display = "block";
  });
}