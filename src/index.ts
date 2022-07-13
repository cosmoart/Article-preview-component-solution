import "./style.scss";

const $share = document.getElementById("share"),
    $shareMenu = document.querySelector(".shareMenu");

$share!.addEventListener("click", () => $shareMenu!.classList.toggle("active"));