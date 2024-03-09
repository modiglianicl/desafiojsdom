// Obteniendo el formulario
let formulario = document.getElementById("formulario");
// Obteniendo elementos a editar para errores

let errorNombre = document.querySelector(".errorNombre");
let errorAsunto = document.querySelector(".errorAsunto");
let errorMensaje = document.querySelector(".errorMensaje");


// Funcion que valida los elementos del formulario
const validador = (nombre,asunto,mensaje) => {
    // Iniciamos la validacion
    let validacion = true;
    // Patron universal para el ejercicio (solo caracteres alfabeticos y espacios)
    let patronForm = /^[a-zA-Z\s]+$/ ;

    // Validamos nombre
    if(patronForm.test(nombre) == false) {
        errorNombre.innerHTML = 'El nombre no cumple los requisitos. Solo debeser usar caracteres alfabéticos!';
        validacion = false;
    }

    // Validamos asunto
    if(patronForm.test(asunto) == false) {
        errorAsunto.innerHTML = 'El asunto no cumple los requisitos. Solo debes usar caracteres alfabéticos!';
        validacion = false;
    }

    // Validamos mensaje
    if(patronForm.test(mensaje) == false) {
        errorMensaje.innerHTML = 'El mensaje no cumple los requisitos. Solo caracteres alfabéticos!';
        validacion = false;
    }

    return validacion;

}

// Funcion que se ejecutara al hacer submit
const ejecutar = (event) => {
    // Prevencion evento default
    event.preventDefault();

    // Borramos mensajes de error si es que hay
    errorNombre.innerHTML = "";
    errorMensaje.innerHTML = "";
    errorAsunto.innerHTML = "";

    // Obteniendo valores formulario
    let nombreUsuario = document.querySelector("#nombre").value;
    let asuntoUsuario = document.querySelector("#asunto").value;
    let mensajeUsuario = document.querySelector("#mensaje").value;

    // Validamos con la función validadora
    let todoBien = validador(nombreUsuario,asuntoUsuario,mensajeUsuario)

    // Evento a ejecutar
    if(todoBien) {
        document.querySelector(".resultado").innerHTML = `${nombreUsuario}, el mensaje se ha enviado con exito`;
        // Reseteamos formulario (googlíe como resetear formulario)
        formulario.reset()
    } else {
        document.querySelector(".resultado").innerHTML = ``;
    }

}



formulario.addEventListener('submit',ejecutar);

