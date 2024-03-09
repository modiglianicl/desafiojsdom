// Obteniendo botones de calculo
let sumar = document.getElementById("btn-sumar");
let restar = document.getElementById("btn-restar");


// Funcion que valida si es un número

const esNumero = (numeroUsado) => {
    // "Cualquier número que parta o no con un signo negativo seguido por un número y termine en número"
    if (/^-?\d+$/.test(numeroUsado)) {
        return true;
    } else {
        return false;
    }
}

// Funcion que limpia values y resultado

const limpiador = () => {
    document.querySelector("#valor1").value = "";
    document.querySelector("#valor2").value = "";
    document.querySelector(".resultado").innerHTML = "";
}

// Funcion sumar

const sumaNumeros = () => {
    let primerNumero = document.querySelector("#valor1").value;
    let segundoNumero = document.querySelector("#valor2").value;

    if ( (esNumero(primerNumero) == true) && (esNumero(segundoNumero) == true)) {
        // Si ambos pasan el check los transformamos a numeros
        let sumaUno = parseFloat(primerNumero);
        let sumaDos = parseFloat(segundoNumero);
        let resultado = sumaUno + sumaDos;
        // Agrego esto, ya que se pueden sumar numeros negativos!
        if (resultado < 0) {
            resultado = 0;
        }
    
        // Entregamos resultado
        document.querySelector(".resultado").innerHTML = resultado;
    } else {
        alert(`Solo usar números!`);
        limpiador();
    }
}

// Funcion restar
const restaNumeros = () => {
    let primerNumero = document.querySelector("#valor1").value;
    let segundoNumero = document.querySelector("#valor2").value;

    if(esNumero(primerNumero) && esNumero(segundoNumero)) {
        // Si Si ambos pasan el check los transformamos a numeros
        let restaUno = parseFloat(primerNumero);
        let restaDos = parseFloat(segundoNumero);
        let resultado = restaUno - restaDos;
        // Agrego esto, ya que se pueden sumar numeros negativos!
        if (resultado < 0) {
            resultado = 0;
         }
    
        // Entregamos resultado
        document.querySelector(".resultado").innerHTML = resultado;
        ;
    } else{
        alert(`Solo usar números!`);
        limpiador();
    }
}

// Eventos

sumar.addEventListener('click',sumaNumeros);
restar.addEventListener('click',restaNumeros);