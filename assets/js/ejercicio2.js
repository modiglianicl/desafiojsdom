// Obteniendo todos los botones

let botones = document.getElementsByTagName("button");

// Asignando funcion que cambia color a cada botón

for (let i = 0; i<botones.length ; i++) {
    botones[i].addEventListener('click',() => {
        document.querySelector("#caja").style['background-color'] = botones[i].style['background-color'];
    })
}