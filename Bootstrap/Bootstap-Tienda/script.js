import Carrito from "./carrito.js";

const carrito = new Carrito([

    {SKU: "A1", nombre: "Cargador", precio: 20},
    {SKU: "B2", nombre: "Funda", precio: 30 }
], '€');

carrito.actualizarUnidades("A1", 2);

console.log(carrito.obtenerCarrito());