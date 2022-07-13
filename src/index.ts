import "./style.scss";

const $share = document.getElementById("share"),
    $shareMenu = document.querySelector(".shareMenu");

window.matchMedia("(min-width: 768px)").matches ? $share!.addEventListener("click", () => $shareMenu!.classList.toggle("active2")) : $share!.addEventListener("click", () => $shareMenu!.classList.toggle("active"));