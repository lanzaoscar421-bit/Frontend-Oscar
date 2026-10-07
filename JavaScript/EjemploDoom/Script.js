import Persona from './Persona.js';
import Cliente from './Cliente.js';

const persona1 = new Persona('Juan', 'Pérez', '12345678A');
const cliente1 = new Cliente('María', 'Gómez', '87654321B', 'Premium');

var nButton1 = 1;
var nButton2 = 1;
var nButton3 = 1;

document.addEventListener('DOMContentLoaded', function() {
   
    const sectionPrincipal = document.getElementById('principal');
    
    const divP = document.createElement('div');

    divP.classList.add('contenedor');

    const p1 = document.createElement('p');

    p1.textContent = cliente1.nombre + ' ' + cliente1.apellido + ' - ' + cliente1.getDni() + ' - ' + cliente1.telefono;

    p1.classList.add('parrafo');

    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');

    btn1.textContent = 'Click me 1';
    btn2.textContent = 'Click me 2';
    btn3.textContent = 'Click me 3';

    btn1.classList.add('btn');
    btn2.classList.add('btn');
    btn3.classList.add('btn');


    btn1.addEventListener('click', function(event) {

        click(1);
    });
    btn2.addEventListener('click', function(event) {
        click(2);
    });
    btn3.addEventListener('click', function(event) {
        click(3);
    });


    divP.append(btn1, btn2, btn3);
 
    sectionPrincipal.append(p1,divP);




});

function click(nButton) {

    if (nButton === 1) {

        alert('Button 1 clicked ' + nButton1 + ' times');
        nButton1++;
    }
    if (nButton === 2) {
        alert('Button 2 clicked ' + nButton2 + ' times');
        nButton2++;
    }
    if (nButton === 3) {
        alert('Button 3 clicked ' + nButton3 + ' times');
        nButton3++;
    }

}
