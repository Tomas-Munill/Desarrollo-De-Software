import { personas } from "./acceso-a-datos/personas-datos.js";
import { personaServicio } from "./logica-de-negocio/personas-servicio.js";

function main() {
    console.log("###".repeat(50));
    console.log("Personas:")
    console.table(personas);
    console.log("###".repeat(50));
    console.log("Personas mayores de edad: ");
    console.table(personaServicio.mayoresDeEdad(personas));
    console.log("###".repeat(50));
    console.log("Personas por profesion (estudiantes): ");
    console.table(personaServicio.personasXProfesion(personas, "estudiante"));
    console.log("###".repeat(50));
    console.log("Personas por profesion (ingeniero en sistemas): ");
    console.table(personaServicio.personasXProfesion(personas, "ingeniero en sistemas"))
    console.log("###".repeat(50));
    console.log("Persona mas grande: ", personaServicio.obtenerPersonaMasGrande(personas));
    console.log("###".repeat(50));
    console.log("Profesiones: ", personaServicio.obtenerProfesiones(personas));
};

main();
