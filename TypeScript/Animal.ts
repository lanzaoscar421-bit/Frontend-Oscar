export class Animal {
    private nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = this.validateEdad(edad);
    }

    public getNombre(): string {
        return this.nombre;
    }


    public validateEdad(edad: number): number {

        if (edad < 0) {
            throw new Error("La edad no puede ser negativa");
            console.log(this.toString() + " La edad no puede ser negativa");

        }else {
            return edad;
        }

    }

    
    public toString(): string {
        return `Animal [nombre: ${this.nombre}, edad: ${this.edad}]`;
    }

    
}