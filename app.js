const overlay = document.querySelector(".overlay");
const menuBar = document.querySelector(".menu__bar");
const close = document.querySelector(".nav__close");
const navBar = document.querySelector(".nav__bar");
const companyLink = document.querySelector(".company__link");
const company = document.querySelector(".company");
const featuresLink = document.querySelector(".features__link");
const feature = document.querySelector(".features");

menuBar.addEventListener("click", () => {
  overlay.classList.add("open");
  navBar.classList.add("open");
});

overlay.addEventListener("click", () => {
  closeMenu();
});

close.addEventListener("click", () => {
  closeMenu();
});

featuresLink.addEventListener("click", (e) => {
  feature.classList.toggle("open");
  toggleArrow(e);
});

companyLink.addEventListener("click", (e) => {
  company.classList.toggle("open");
  toggleArrow(e);
});

function closeMenu() {
  overlay.classList.remove("open");
  navBar.classList.remove("open");
}

function toggleArrow(e) {
  let arrow = e.target.querySelector(".arrow");
  arrow.classList.toggle("open");
}
