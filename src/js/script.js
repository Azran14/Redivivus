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
let beigeJacket = document.querySelector(".choiceContent__jackets--beige");
let brownJacket = document.querySelector(".choiceContent__jackets--brown");
let darkbrownJacket = document.querySelector(
  ".choiceContent__jackets--darkbrown"
);

let redJacket = document.querySelector(".choiceContent__jackets--red");
let blackJacket = document.querySelector(".choiceContent__jackets--black");
let greenJacket = document.querySelector(".choiceContent__jackets--green");

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
      beigeJacket.classList.add("is-visible");
    }

    if (divColor.classList.contains("choiceContent__color--brown")) {
      brownJacket.classList.add("is-visible");
    }

    if (divColor.classList.contains("choiceContent__color--darkbrown")) {
      darkbrownJacket.classList.add("is-visible");
    }

    if (divColor.classList.contains("choiceContent__color--red")) {
      redJacket.classList.add("is-visible");
    }

    if (divColor.classList.contains("choiceContent__color--black")) {
      blackJacket.classList.add("is-visible");
    }

    if (divColor.classList.contains("choiceContent__color--green")) {
      greenJacket.classList.add("is-visible");
    }
    jacketVisible = document.querySelector(
      ".choiceContent__jackets.is-visible"
    );
  });
}
