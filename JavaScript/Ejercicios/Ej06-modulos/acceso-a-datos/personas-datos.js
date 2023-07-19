import { Persona } from "../entidades/persona.js";

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

export { personas };