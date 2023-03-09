const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

export function hamburgerMenu() {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

hamburgerMenu();
