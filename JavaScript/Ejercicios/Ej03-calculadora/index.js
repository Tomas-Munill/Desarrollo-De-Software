"use strict";

const readlineSync = require("readline-sync");
const chalk = require("chalk");

// Declaración de función
function calcularResultado(operador, valorA, valorB) {
    switch (operador) {
        case "+":
            return valorA + valorB;
        case "-":
            return valorA - valorB;
        case "*":
            return valorA * valorB;
        case "/":
            return valorA / valorB;
        default:
            return undefined;
    }
}

// Expresión de función
const calcularResultadoV2 = function(operador, valorA, valorB) {
    switch (operador) {
        case "+":
            return valorA + valorB;
        case "-":
            return valorA - valorB;
        case "*":
            return valorA * valorB;
        case "/":
            return valorA / valorB;
        default:
            return undefined;
    }
}

function validarIngresoOperador() {
    while (true) 
    {
        let operador = readlineSync.question("Ingresa el operador (+, -, *, /): ");
        if ("+-*/xX".indexOf(operador) !== -1){
            return operador;
        }
        else{
            console.warn(chalk.red("El valor ingresado no es valido..."))
        }
    }
}

function validarIngresoNumero(mensaje) {
    while (true) 
    {
        let valor = Number(readlineSync.question(mensaje));
        if (!isNaN(valor)){
            return valor;
        }
        else{
            console.warn(chalk.red("El valor ingresado no es valido..."))
        }
    }
}

let nSesion = 0;
console.log(chalk.blue("¡Bienvenido a calculadora!"));
while (true) {
    console.log(chalk.blue(`\n${"_".repeat(20)}  Sesion: ${++nSesion}   ${"_".repeat(20)}`));
    console.log(chalk.blue("Puedes presionar \"x\" para salir..."));
    let operador = validarIngresoOperador();

    if (operador === "X" || operador === "x") {
        console.log(chalk.green("¡Hasta pronto!"));
        break;
    }

    let valorA = validarIngresoNumero("Ingresa el primer valor (A): ");
    let valorB = validarIngresoNumero("Ingresa el segundo valor (B): ");
    let resultado = calcularResultado(operador, valorA, valorB);

    if (resultado !== undefined) {
        console.log(chalk.green(`${valorA} ${operador} ${valorB} = ${resultado}`));
    } else {
        console.warn(chalk.red("Se produjo un error"));
    }
}
