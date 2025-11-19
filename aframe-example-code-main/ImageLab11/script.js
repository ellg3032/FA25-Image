console.log("running");
const pokeball = document.getElementById("pkball1");

pokeball.addEventListener("click", charmander);

function charmander() {
    console.log("pressed");
    pokeball.setAttribute("src", "#charmander");
    pokeball.setAttribute("color", "#FFA500");
    //pokeball.removeAttribute("mtl");
    pokeball.setAttribute("rotation", "-90 0 0");
    pokeball.setAttribute("scale", ".02 .02 .02");
    pokeball.setAttribute("position", "-.2 0 .5");
    pokeball.setAttribute("mtl", "null");
}