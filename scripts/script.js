
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

// ik werd een beetje gek van die z-index die niet klopte en wilde niet weer aan de slag met die z-index van dat eerste article dus een simpele if else leek me een goede optie
function toggleMenu() {  
  const navigatie = document.querySelector("nav");
  const containernav = document.querySelector(".containernav");

  navigatie.classList.toggle("toonMenu");

  if (navigatie.classList.contains("toonMenu")) {
    containernav.style.display = 'none';
  } else {
    containernav.style.display = 'flex'; 
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


