// Togle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").oneclick = () => {
  navbarNav.classList.toggle("active");
};
