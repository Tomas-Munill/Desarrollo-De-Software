# Objetos
## ¿Qué es un objeto en JS? (*)

Un objeto es una colección de propiedades.

Toda propiedad es una asociación entre un nombre (o _**clave**_) y un **valor**. El valor de una propiedad puede ser una variable (o expresión constante), o una función. En el caso que la propiedad tiene por valor una función, hablamos de **método**.

JavaScript es un lenguaje de objetos basado en **prototipos**, donde los objetos heredan de otros objetos y en última instancia del prototipo de **Object** (`Object {}`).

![Objetos JS](images/objetos.png)

Además de los objetos predefinidos de JS, es posible definir otros objetos.
Éstos se pueden crear utilizando:  
* **notación literal**
* **new Object()**
* **funciones constructoras**. 

### Propiedades (*)

Un objeto de JavaScript tiene propiedades asociadas a él. Una propiedad de un objeto se puede pensar como una variable adjunta a dicho objeto.  Las propiedades de un objeto definen sus características y se pueden acceder mediante:

- Notación de punto:
 ```js
objeto.propiedad
```
- Notación de corchetes:
```js
objeto['propiedad']
```

Una vez definido un objeto es posible crear (agregar) nuevas propiedades. Por ejemplo:
```js
persona.pais = 'Argentina'
```
Las propiedades no asignadas de un objeto son [`undefined`]
```js
persona.fechaNacimiento; // undefined
```

El nombre de la propiedad de un objeto puede ser cualquier cadena válida de JavaScript, o cualquier cosa que se pueda convertir en una cadena, incluyendo una cadena vacía. Sin embargo, cualquier nombre de propiedad que no sea un identificador válido de JavaScript (por ejemplo, el nombre de alguna propiedad que tenga un espacio o un guión, o comience con un número) solo se puede acceder utilizando la notación de corchetes. Esta notación es muy útil también cuando los nombres de propiedades son determinados dinámicamente (cuando el nombre de la propiedad no se determina hasta el tiempo de ejecución).


## Creación de objetos
### Creación de objetos con notación literal (*)
Cuando se utiliza la notación de llaves nos referimos a **notación literal**. 
Éstos se crean a partir de un juego de llaves **{}**
Vamos con un ejemplo:

```js
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

```
>Nota:
>
>La palabra reservada **this** en el contexto de los objetos, refiere al **objeto actual**. En los contextos de funciones permite referenciar al objeto **Window** (cuando estamos ejecutando código JS en un navegador).
> 

### Creación de objetos con new Object
Utilizando el ejemplo anterior y el operador `new Object()`, también se podría reescribir la creación del objeto persona:

```js
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
```

### Creación de objetos con función constructora
Estas nos permiten crear nuevos tipos de objetos definidos por nosotros.
Como alternativa, es posible crear un objeto con estos dos pasos:

1.  Definir el tipo de objeto escribiendo una función constructora. Existe una fuerte convención para utilizar en mayúscula la letra inicial.
2.  Crear una instancia del objeto con el operador  `new`.

Para definir un tipo de objeto, crea una función para el objeto que especifique su nombre, propiedades y métodos. 
Por ejemplo, supongamos que se desea crear un tipo de objeto para el ejemplo anterior. 
Es decir un objeto de tipo `Persona`  con las siguientes propiedades:  `nombre`,  `correo`,  `profesion`  y  `saludar`. 
 
```js
function Persona(nombre, correo, profesion, fechaNacimiento) {
    this.nombre = nombre;
    this.correo = correo;
    this.profesion = profesion;
    this.fechaNacimiento = fechaNacimiento;
    this.saludar = function () {
        console.log('Hola soy ' + this.nombre);
    };
    this.edad = function () {
        const hoy = new Date();
        return hoy.getFullYear() - this.fechaNacimiento.getFullYear();
    };
};
```

Observar que el operador  `this`  se utiliza para asignar valores a las propiedades del objeto en función de los valores pasados a la función.

Para crear un objeto llamado **persona** mediante la función constructora escribir:


```js
const persona = new Persona('Tomas', 'tomasmunill@gmail.com', 'estudiante', new Date(2002, 1, 17));

console.log(persona)
persona.saludar()
console.log(persona.edad())
```

Esta declaración crea  `persona`  y le asigna los valores especificados a sus propiedades.

### ¿Y prototype?
Es importante recordar que javascript es un lenguaje basado en prototipos, en donde todos los objetos terminan heredando
de `Object` y `prototype` nos permite agregar nuevos metodos a los contructores de los nuevos tipos de objetos que hayamos definido.

Por ejemplo:
```js
const mario = new Persona('Mario', 'mario@gmail.com', 'Ingeniero Químico', new Date(1990, 9, 1));
const carla = new Persona('Carla', 'carla@gmail.com', 'Ingeniero en Sistemas de Información', new Date(2012, 9, 1));

console.log(' ====================== Objetos Persona ======================');
console.log('mario', mario);
console.log('carla', carla);

// Ejemplos con protoype
console.log('\n\n====================== Ejemplos con protoype en Persona ======================');
Persona.prototype.esMayorDeEdad = function () {
    // if (this.edad() > 18)
    //     return true;
    // return false
    return this.edad() > 18;
};
console.log('====================== ¿Es mayor de edad? ======================');
console.log('¿mario es mayor de edad? :', mario.esMayorDeEdad());
console.log('¿carla es mayor de edad?:', carla.esMayorDeEdad());

console.log('\n\n====================== Ejemplos con protoype en carla ======================');
carla.__proto__.esMayorDeEdad = function () {
    return false;
};
console.log('====================== ¿Es mayor de edad? ======================');
console.log('¿mario es mayor de edad? :', mario.esMayorDeEdad());
console.log('¿carla es mayor de edad?:', carla.esMayorDeEdad());

```

Al utilizar `prototype` estamos afectando a todas las instancias del tipo de objeto en cuestión. En el ejemplo de `Persona`
vemos que al manipular el resultado de la función `esMayorDeEdad` este te se modifica para todas las instancias.

```js
Persona.prototype.esMayorDeEdad = function () {
    // if (this.edad() > 18)
    //     return true;
    // return false
    return this.edad() > 18;
};
```

Si en lugar de modificar Persona, modificamos una instancia, por ejemplo `carla`
```js
carla.__proto__.esMayorDeEdad = function () {
    return false;
};
```
vemos que tambíen afecta a `mario`. Considerar que para acceder a `prototype` por medio de la instancia, es necesario 
accederlo a través de la propiedad `__proto__`.

### ECMAScript 6 y la palabra resevada *class*
Ahora con la sintaxis de **ECMAScript (ES6)**, se puede usar la palabra `class` para definir un tipo de objeto. 
Esta sintaxis implicitamente define objetos por medio de funciones constructoras, ya que el concepto de clases 
no existe en JS y la creación de objetos se termina haciendo a través de prototype. Lo que realmente nos facilita ES6 
es una sintaxis amigable conocida como `syntactic sugar` o `lenguaje más dulce` para los programadores.

Ejemplo en archivo [objetos-es6.js](js/objetos-es6.js)
```js
class Persona {

    constructor(nombre, correo, profesion, fechaNacimiento) {
        this.nombre = nombre;
        this.correo = correo;
        this.profesion = profesion;
        this.fechaNacimiento = fechaNacimiento;
    }

    saludar() {
        console.log('Hola soy ' + this.nombre);
    }

    edad() {
        const hoy = new Date();
        return hoy.getFullYear() - this.fechaNacimiento.getFullYear();
    }
}
```

```js
// Instanciar un objeto de la clase
const carla = new Persona('Carla', 'carla@gmail.com', 'Ingeniero en Sistemas de Información', new Date(2012, 9, 1));
```
Una de las cosas nuevas que aporta ES6 es que al declarar tipos de objetos si o si, es necesario instanciarlos con la 
palabra reservada `new` sino lanza un error:

```js
const maria = Persona('María', 'maria@gmail.com', 'Ingeniero en Sistemas de Información', new Date(2012, 9, 1));
// lanza el error: TypeError: Class constructor Persona cannot be invoked without 'new'
```

Ademas algunas características de sintaxis y semantica de ES6 no son compartidas con es5. Por ello es importante tener en cuenta tanto 
las versiones de los lenguajes como los estándares.


## Bibliografía o Referencia

* [JavaScript Guide - Mozilla Developer Network => Introduction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#what_is_javascript)
* [Operador `new`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new)
* [Objetos - Prototype](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
* [Clases ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)