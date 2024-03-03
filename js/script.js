const toggleMenu = document.querySelector(".toggleMenu input");
const nav = document.querySelector("nav ul");

toggleMenu.addEventListener("click", function () {
  nav.classList.toggle("swipe");
});
