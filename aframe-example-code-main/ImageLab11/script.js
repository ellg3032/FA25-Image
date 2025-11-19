const pokeball = document.getElementById("pkball2");
const pokeball2 = document.getElementById("pkball3");
const pokeball3 = document.getElementById("pkball1");

pokeball.addEventListener("click", charmander);
pokeball2.addEventListener("click", squirtle);
pokeball3.addEventListener("click", bulbasaur);

function charmander() {
    pokeball.setAttribute("src", "#charmander");
    pokeball.setAttribute("color", "#FFA500");
    pokeball.setAttribute("rotation", "-90 0 0");
    pokeball.setAttribute("scale", ".03 .03 .03");
    pokeball.setAttribute("position", "-3.8 -.6 .2");
    pokeball.removeAttribute('obj-model', 'mtl');
}

function squirtle() {
    pokeball2.setAttribute("src", "#squirtle");
    pokeball2.setAttribute("color", "#FFA500");
    pokeball2.setAttribute("scale", ".0012 .0012 .0012");
    pokeball2.setAttribute("position", "-2 -.6 .2");
    pokeball.removeAttribute('obj-model', 'mtl');
}

function bulbasaur() {
    pokeball3.setAttribute("src", "#bulbasaur");
    pokeball3.setAttribute("color", "#FFA500");
    pokeball3.setAttribute("scale", ".0015 .0015 .0015");
    pokeball3.setAttribute("position", "-0.2 -.6 .2");
    pokeball.removeAttribute('obj-model', 'mtl');
}