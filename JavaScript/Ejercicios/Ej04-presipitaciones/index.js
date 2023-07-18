// Práctica 3.1: Se ha solicitado un script que permita cargar las precipitaciones promedio en cada mes del país (en nuestro caso serán generadas de manea aleatorias con valores comprendidos entre [800mm;1500mm]), en base a esos datos determinar:

// el promedio anual de lluvias
// el promedio de lluvias para el segundo semestre del año
// el mes más seco del año


const precipitaciones = [];
for (let i=1; i<=12; i++) {
    let rnd = 800 + Math.random() * (1500 - 800);
    precipitaciones.push(rnd);
}

console.log("Precipitaciones:", precipitaciones)
console.log("=".repeat(50));
console.log("El promedio anual de lluvias es: ", promedioAnualLluvias(precipitaciones));
console.log("=".repeat(50));
console.log("El promedio de precipitaciones del segundo semestre es: ", promedioLluviasSegundoSemestre(precipitaciones));
console.log("=".repeat(50));
console.log("El mes más seco es: ", buscarMesMasSeco(precipitaciones));



function promedioAnualLluvias(precipitaciones) {
    return (precipitaciones.reduce((acumulador, valorActual) => acumulador + valorActual, 0)) / 12
}

function promedioLluviasSegundoSemestre(precipitaciones) {
    precipitacionesSegundoSem = precipitaciones.filter((elem) => precipitaciones.indexOf(elem) > 5);
    //console.log(precipitacionesSegundoSem);
    return (precipitacionesSegundoSem.reduce((acumulador, valorActual) => acumulador + valorActual, 0)) / 6
}

function buscarMesMasSeco(precipitaciones) {
    let menor = precipitaciones[0];
    precipitaciones.forEach(elem => {
        if (elem < menor) {
            menor = elem;
        }
    });
    return precipitaciones.indexOf(menor) + 1
}