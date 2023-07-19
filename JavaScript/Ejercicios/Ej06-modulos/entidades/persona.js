export class Persona {
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
};