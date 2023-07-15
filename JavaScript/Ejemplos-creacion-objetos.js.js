// Creacion de objetos con notacion literal

const tomas = {
    nombre: 'Tomas',
    correo: 'tomasmunill@gmail.com',
    profesion: 'estudiante',
    fechaDeNacimiento: new Date(2002, 1, 17),
    saludar: function () {
        console.log(`Hola soy ${this.nombre}`)
    }
};

console.log('tomas', tomas);
tomas.saludar();

// Creacion de objetos con new Object

const persona = new Object();
persona.nombre = 'Tomas';
persona.correo = 'tomasmunill@gmail.com';
persona.profesion = 'estudiante';
persona.fechaDeNacimiento = new Date(2002, 1, 17);
persona.saludar = function () {
    console.log (`Hola soy ${this.nombre}`)
};

console.log('persona', persona);
persona.saludar();

// Creación de objetos con función constructora

function Persona(nombre, correo, profesion, fechaDeNacimiento) {
    this.nombre = nombre;
    this.correo = correo;
    this.profesion = profesion;
    this.fechaDeNacimiento = fechaDeNacimiento;
    this.saludar = function() {
        console.log(`Hola soy ${this.nombre}`)
    }
    this.edad = function() {
        const hoy = new Date();
        return hoy.getFullYear() - this.fechaDeNacimiento.getFullYear();
    }
}

const persona2 = new Persona('Tomas', 'tomasmunill@gmail.com', 'estudiante', new Date(2002, 1, 17));

console.log(persona2)
persona2.saludar()
console.log(persona2.edad())

// Creacion de objetos con la palabra resevada class

class Persona {
    constructor (nombre, correo, profesion, fechaDeNacimiento) {
        this.nombre = nombre;
        this.correo = correo;
        this.profesion = profesion;
        this.fechaDeNacimiento = fechaDeNacimiento;
    }

    saludar() {
        console.log(`Hola soy ${this.nombre}`);
    }

    edad() {
        const hoy = new Date();
        return hoy.getFullYear - this.fechaDeNacimiento.getFullYear();
    }
}