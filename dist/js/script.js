// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const navFixed = header.offsetTop; //nilai awal top: 0
  const toTop = document.querySelector("#toTop");

  if (window.pageYOffset > navFixed) {
    header.classList.add("navbar-fixed");
    toTop.classList.add("flex");
    toTop.classList.remove("hidden");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger active
const hamburger = document.querySelector("#hamburger");
const navLink = document.querySelector("#nav-link");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navLink.classList.toggle("hidden");
});

//close hamburger in all area
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navLink) {
    hamburger.classList.remove("hamburger-active");
    navLink.classList.add("hidden");
  }
});
