import { Animal } from "./Animal";
let dni = 72264641;
function calcularLetra(dni) {
    let letraDni = "";
    const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];
    let resto = dni % 23;
    letraDni = letras[resto];
    return letraDni;
}
console.log(`La letra correspondiente al DNI ${dni} es: ${calcularLetra(dni)}`);
const animal1 = new Animal("Perro", -1);
console.log(animal1);
