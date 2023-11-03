let button = document.querySelector(".main-header__burger");
let close = document.querySelector(".main-header__mobile-nav-close");
let mobile_menu = document.querySelector(".main-header__mobile");
let navHome = document.querySelector(".nav-home");
let navAbout = document.querySelector(".nav-about");
let navSkills = document.querySelector(".nav-skills");
let navPortfolio = document.querySelector(".nav-portfolio");
let navContacts = document.querySelector(".nav-contacts");

button.addEventListener("click", function () {
  mobile_menu.classList.remove("d-none");
});

close.addEventListener("click", function () {
  mobile_menu.classList.add("d-none");
});

navHome.addEventListener("click", function () {
  mobile_menu.classList.add("d-none");
});
navAbout.addEventListener("click", function () {
  mobile_menu.classList.add("d-none");
});
navSkills.addEventListener("click", function () {
  mobile_menu.classList.add("d-none");
});
navPortfolio.addEventListener("click", function () {
  mobile_menu.classList.add("d-none");
});
navContacts.addEventListener("click", function () {
  mobile_menu.classList.add("d-none");
});
