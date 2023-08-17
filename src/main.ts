const openMenuBtnEl = document.getElementById("open-menu");
const closeMenuBtnEl = document.getElementById("close-menu");

let isOpen = false;

function toggleMenu() {
  isOpen = !isOpen;
  document.body.classList.toggle("menu-open");
  document.body.style.overflowY = isOpen ? "hidden" : "auto";
}

openMenuBtnEl?.addEventListener("click", toggleMenu);
closeMenuBtnEl?.addEventListener("click", toggleMenu);
