const boton = document.getElementById("btn-menu");
const fondo_enlace = document.getElementById("fondo-enlace");
const barraLateralMenu = document.querySelector(".barra-lateral-menu");

boton.addEventListener("click", function (e) {
  e.preventDefault();
  fondo_enlace.classList.toggle("active");
  barraLateralMenu.classList.toggle("active");
});

fondo_enlace.addEventListener("click", function (e) {
  e.preventDefault();
  fondo_enlace.classList.toggle("active");
  barraLateralMenu.classList.toggle("active");
});
