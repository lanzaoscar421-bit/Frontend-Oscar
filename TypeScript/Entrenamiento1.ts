export {};
import { Animal } from "./Animal";

let dni : number = 72264641;


function calcularLetra(dni: number): string {

    let letraDni: string = "";

    const letras: string[] = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    let resto: number = dni % 23;
    letraDni = letras[resto];

    return letraDni; 
}

console.log(`La letra correspondiente al DNI ${dni} es: ${calcularLetra(dni)}`);


const animal1 = new Animal("Perro", -1);
console.log(animal1);
