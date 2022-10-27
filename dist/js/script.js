// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const navFixed = header.offsetTop; //nilai awal top: 0

  if (window.pageYOffset > navFixed) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger active
const hamburger = document.querySelector("#hamburger");
const navLink = document.querySelector("#nav-link");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navLink.classList.toggle("hidden");
});
