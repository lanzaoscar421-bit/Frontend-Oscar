export class Animal {
    nombre;
    edad;
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = this.validateEdad(edad);
    }
    getNombre() {
        return this.nombre;
    }
    validateEdad(edad) {
        if (edad < 0) {
            throw new Error("La edad no puede ser negativa");
            console.log(this.toString() + " La edad no puede ser negativa");
        }
        else {
            return edad;
        }
    }
    toString() {
        return `Animal [nombre: ${this.nombre}, edad: ${this.edad}]`;
    }
}
