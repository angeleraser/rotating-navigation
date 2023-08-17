const openMenuBtnEl = document.getElementById("open-menu");
const closeMenuBtnEl = document.getElementById("close-menu");
const toggleMenu = () => document.body.classList.toggle("menu-open");
openMenuBtnEl?.addEventListener("click", toggleMenu);
closeMenuBtnEl?.addEventListener("click", toggleMenu);
