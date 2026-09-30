
//Apartaddo 1

// Primer Ejercicio
let nota = Math.floor(Math.random() * 11);


console.log("la nota es: " + nota);

if (nota >= 9) {
    console.log("Sobresaliente");
}else if (nota >= 7) {
    console.log("Notable");
}else if (nota >= 6) {
    console.log("Bien");
}else if (nota >= 5) {
    console.log("Suficiente");
}else {
    console.log("Insuficiente");
}

//Ejercicios 2

let hora = 23;
let minutos = 59;
let segundos = 59;
if(hora >= 0 && hora <= 23 && minutos >=0 && minutos<=59 && segundos >= 0 && segundos <= 59)
{

    console.log("La hora actual es: "+hora+":"+minutos+":"+segundos);


    segundos = segundos + 1;

    if(segundos === 60)
    {
        minutos = minutos + 1;
        segundos = 0;

        if(minutos === 60)
        {
            hora = hora + 1;
            minutos = 0;
            if(hora === 24)
            {
                hora = 0;
            }
        }
    }

    console.log("La hora modificada es: "+hora+":"+minutos+":"+segundos);
}
else{
    console.log("La hora no es correcta");
}


//Ejercicio 3



//Apartado 2

//Ejercicio 1

//Ejercicios 2

let numero = [];

for (let i = 0; i < 100; i++) { //Hago el bucle for para meter un numero por uno
    let randomNumber = Math.floor(Math.random() * 11); // Hago que los numeros sean aleatorios del 0 al 10
    numero.push(randomNumber);
}
console.log(numero);



//Ejercicio 4

