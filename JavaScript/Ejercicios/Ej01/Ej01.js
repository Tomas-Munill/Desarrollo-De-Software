/*
Escribí un programa que dado un año como entrada diga si es bisiesto o no.

Tené en cuenta que un año es bisiesto si:

Divisible por 4.
No divisible por 100.
Divisible por 400. (2000 y 2400 son bisiestos pues aún siendo divisibles por 100 lo son también por 400. Pero los años 1900, 2100, 2200 y 2300 no lo son porque solo son divisibles por 100).
*/


while(true){
    // Tomar y validar el valor ingresado por el usuario
    do {
        let valor = prompt('Ingrese un año (debe ser un valor numérico):');
        numero = parseInt(valor);
    } while (isNaN(numero))

    // Determinar si cumple con las condiciones para ser bisiesto
    flagEsBisiesto = false;
    if (numero % 4 === 0 && numero % 100 !== 0 || (numero % 100 === 0 && numero % 400 === 0)) {
        flagEsBisiesto = true;
    }

    // Mostrar resultado
    if (flagEsBisiesto) {
        alert(`El año ${numero}, es una año bisiesto`)
    }
    else {
        alert(`El año ${numero}, NO es una año bisiesto`)
    }
}


