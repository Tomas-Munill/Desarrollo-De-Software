function mayoresDeEdad(personas) {
    const mayoresDeEdad = personas.filter((elem) => elem.edad() >= 18);
    return mayoresDeEdad;
};
  
function personasXProfesion(personas, profesion) {
    const personasXProfesion = personas.filter(
        (elem) => elem.profesion === profesion
    );
    return personasXProfesion;
};

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
};

function obtenerProfesiones(personas) {
    const porfesiones = personas.map((elem) => elem.profesion);
    const set = new Set(porfesiones);
    const profesionesSinDuplicados = [];
    set.forEach((elem) => profesionesSinDuplicados.push(elem));
    return profesionesSinDuplicados;
};

const personaServicio = {
    mayoresDeEdad: mayoresDeEdad,
    personasXProfesion: personasXProfesion,
    obtenerPersonaMasGrande: obtenerPersonaMasGrande,
    obtenerProfesiones: obtenerProfesiones
};

export { personaServicio };