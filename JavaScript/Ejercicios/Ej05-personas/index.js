// Crear un array con al menos 8 personas. Usar la clase persona previamente definida.
// Definir funciones que reciban como argumento el array vuelvan:
// 1- Personas mayores de edad: mayoresDeEdad(personas)
// 2- Persona cuya profesión sea una pasada por argumento, ej: personasXProfesion(personas, 'superheroe')
// 3- obtenerPersonaMasGrande(personas), tener en cuenta que ahora recibe como argumento un array con n personas.
// 4- obtenerProfesiones(personas). // sin duplicados

class Persona {
  constructor(nombre, correo, profesion, fechaDeNacimiento) {
    this.nombre = nombre;
    this.correo = correo;
    this.profesion = profesion;
    this.fechaDeNacimiento = fechaDeNacimiento;
  }

  edad() {
    const hoy = new Date();
    let edad = hoy.getFullYear() - this.fechaDeNacimiento.getFullYear();

    if (
      this.fechaDeNacimiento.getMonth() > hoy.getMonth() ||
      (this.fechaDeNacimiento.getMonth() === hoy.getMonth() &&
        this.fechaDeNacimiento.getDate() > hoy.getDate())
    ) {
      edad--;
    }

    return edad;
  }
}

function main() {
  const personas = [
    new Persona(
      "Tomas",
      "tomas@gmail.com",
      "estudiante",
      new Date(2002, 7, 19)
    ),
    new Persona(
        "Juan",
        "juan@gmail.com",
        "profesor",
        new Date(1998, 0, 22)),
    new Persona(
      "Lucia",
      "lucia@gmail.com",
      "estudiante",
      new Date(2010, 5, 11)
    ),
    new Persona(
      "Facundo",
      "facundo@gmail.com",
      "ingeniero en sistemas",
      new Date(2002, 1, 8)
    ),
    new Persona(
        "Sofia",
        "sofia@gmail.com",
        "medico",
        new Date(1997, 6, 17)),
    new Persona(
      "Sabrina",
      "sabrina@gmail.com",
      "policia",
      new Date(1997, 6, 1)
    ),
    new Persona(
      "Gustavo",
      "gustavo@gmail.com",
      "ingeniero en sistemas",
      new Date(2002, 8, 17)
    ),
    new Persona(
      "Leonel",
      "leonel@gmail.com",
      "futbolista",
      new Date(1997, 6, 16)
    ),
  ];
  console.log("Personas: ", personas);
  console.log("###".repeat(50));
  console.log("Personas mayores de edad: ", mayoresDeEdad(personas));
  console.log("###".repeat(50));
  console.log("Personas por profesion (estudiantes): ", personasXProfesion(personas, "estudiante"));
  console.log("###".repeat(50));
  console.log("Personas por profesion (ingeniero en sistemas): ", personasXProfesion(personas, "ingeniero en sistemas"));
  console.log("###".repeat(50));
  console.log("Persona mas grande: ", obtenerPersonaMasGrande(personas));
  console.log("###".repeat(50));
  console.log("Profesiones: ", obtenerProfesiones(personas));
}

function mayoresDeEdad(personas) {
  const mayoresDeEdad = personas.filter((elem) => elem.edad() >= 18);
  return mayoresDeEdad;
}

function personasXProfesion(personas, profesion) {
  const personasXProfesion = personas.filter(
    (elem) => elem.profesion === profesion
  );
  return personasXProfesion;
}

function obtenerPersonaMasGrande(personas) {
  let personaMasGrande = personas[0];
  personas.forEach((elem) => {
    if (
      elem.fechaDeNacimiento.getFullYear() <
      personaMasGrande.fechaDeNacimiento.getFullYear()
    ) {
      personaMasGrande = elem;
    } else if (
      elem.fechaDeNacimiento.getFullYear() ===
      personaMasGrande.fechaDeNacimiento.getFullYear()
    ) {
      if (
        elem.fechaDeNacimiento.getMonth() <
          personaMasGrande.fechaDeNacimiento.getMonth() ||
        (elem.fechaDeNacimiento.getMonth() ===
          personaMasGrande.fechaDeNacimiento.getMonth() &&
          elem.fechaDeNacimiento.getDate() <
            personaMasGrande.fechaDeNacimiento.getDate())
      ) {
        personaMasGrande = elem;
      }
    }
  });
  return personaMasGrande;
}

function obtenerProfesiones(personas) {
  const porfesiones = personas.map((elem) => elem.profesion);
  const set = new Set(porfesiones);
  const profesionesSinDuplicados = [];
  set.forEach((elem) => profesionesSinDuplicados.push(elem));
  return profesionesSinDuplicados;
}

main();
