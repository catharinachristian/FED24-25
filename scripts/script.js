
// header, opdracht hamburgermenu week 2
const menuButton = document.querySelector("nav button");

function toggleMenu() {  
  const navigatie = document.querySelector("nav");
  navigatie.classList.toggle("toonMenu");
}
menuButton.onclick = toggleMenu;

window.onkeydown = handleKeydown;
function handleKeydown(event) {
  if (event.key == "Escape") {
    const navigatie = document.querySelector("nav");
    navigatie.classList.remove("toonMenu");
  }
}

// footer die meebeweegt als je desktop size neemt

const viewPort = window.innerWidth;
const details = document.querySelectorAll('.details');

function start(){

    if (viewPort > 742){
        details.forEach((detail) =>{
    detail.toggleAttribute("open");
    })
    }
}
start();
