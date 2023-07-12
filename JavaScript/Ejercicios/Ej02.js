/*
Escribí un programa que dado un texto como una frase, escriba en la consola el texto, poniendo una palabra en cada línea y encerrado en una recuadro hecho con un caracter especial como el asterisco o numeral.

Ejemplo:
Entrada: Errar es humano

Salida:
    **********
    * Errar  *
    * es     *
    * humano *
    **********
*/

const readline = require('readline');

let interfazCaptura = readline.createInterface({
    input: process.stdin,
    ouput: process.stdout
});

console.log('Ingrese una frase:')
interfazCaptura.question('',
(respuesta) => {
    console.log(`La frase ingresada es \"${respuesta}\"`);
    let palabras = respuesta.split(' ');
    let palabraMasLarga = (buscarPalabraMasLarga(palabras))
    console.log(formatearSalida(palabras, palabraMasLarga, '#'))
    interfazCaptura.close();
})

// Función que toma como parámetro un array de palabras y retorna la palabra más larga.
buscarPalabraMasLarga = (palabras) => {
    let mayor = palabras[0];
    palabras.forEach(p => {
        if (p.length > mayor.length){
            mayor = p;
        }
    })
    return mayor;
} 

// Función que toma como parámetro un array de palabras, la palabra más larga y un carcater especial y retorna un texto formateado.
formatearSalida = (palabras, palabraMasLarga, caracter) => {
    let cad = '';
    cad += caracter.repeat(palabraMasLarga.length + 4)
    cad += '\n'
    for (let i=0; i < palabras.length; i++){
        cad += `${caracter} ${palabras[i]}${' '.repeat(palabraMasLarga.length - palabras[i].length)} ${caracter}\n`
    }
    cad += caracter.repeat(palabraMasLarga.length + 4)
    return cad;
}