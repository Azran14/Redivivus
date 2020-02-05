// var menuMobile = document.querySelector(".headernavMobile");
// var iconMenu = document.querySelector(".headericonMenu");
// var iconClose = document.querySelector(".header__closeMenu");

// iconMenu.addEventListener("click", function() {
//   menuMobile.classList.add("is-visible");
// });

// iconClose.addEventListener("click", function() {
//   menuMobile.classList.remove("is-visible");
// });

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

let cuirJacket = document.querySelector(".choiceContent__jackets--cuir");
let bronzeJacket = document.querySelector(".choiceContent__jackets--bronze");
let divColors = document.querySelectorAll(".choiceContent__singleColor");
let jacketVisible = document.querySelector(
  ".choiceContent__jackets.is-visible"
);

for (i = 0; i < divColors.length; i++) {
  let divColor = divColors[i];
  divColor.addEventListener("click", function() {
    jacketVisible.classList.remove("is-visible");
    if (divColor.classList.contains("choiceContent__color--cuir")) {
      cuirJacket.classList.add("is-visible");
    }
    if (divColor.classList.contains("choiceContent__color--bronze")) {
      bronzeJacket.classList.add("is-visible");
    }
    // LA
    if (divColor.classList.contains("choiceContent__color--beige")) {
      bronzeJacket.classList.add("is-visible");
    }

    if (divColor.classList.contains("choiceContent__color--brown")) {
      bronzeJacket.classList.add("is-visible");
    }

    if (divColor.classList.contains("choiceContent__color--darkbrown")) {
      bronzeJacket.classList.add("is-visible");
    }
    jacketVisible = document.querySelector(
      ".choiceContent__jackets.is-visible"
    );
  });
}
