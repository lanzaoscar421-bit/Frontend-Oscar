import Carrito from "./carrito.js";



const lista = document.getElementById("lista-productos");
const total = document.getElementById("total-carrito");
const resumenProductos = document.getElementById("resumen-productos");

let carrito;



async function inicializarCarrito() {

    try {
    
        const response = await fetch("http://localhost:8080/api/carrito");
        const data = await response.json();

        carrito = new Carrito(data.products, data.currency);

        for(const producto of carrito.productos){


            lista.appendChild(crearFila(producto));
        }

    }catch (error) {
        
        console.error("Error al inicialiar no se pudo cargar los datos", error);
    }
}



function crearFila(producto) {

    const fila = document.createElement("article");
    fila.classList.add("fila");

    // Nombre y referencia
    const info = document.createElement("div");
    const titulo = document.createElement("h3");
    titulo.textContent = producto.title;
    const ref = document.createElement("small");
    ref.textContent = "Ref: " + producto.sku;
    info.append(titulo, ref);

    // Cantidad
    const cantidad = document.createElement("div");
    cantidad.classList.add("cantidad");

    const btnMenos = document.createElement("button");
    btnMenos.textContent = "-";

    const input = document.createElement("input");
    input.type = "number";
    input.value = 0;
    input.min = 0;

    const btnMas = document.createElement("button");
    btnMas.textContent = "+";

    cantidad.append(btnMenos, input, btnMas);

    // Precio unidad y total de la fila
    const precio = document.createElement("span");
    precio.textContent = producto.price + "€";

    const totalFila = document.createElement("span");
    totalFila.textContent = "0€";

    fila.append(info, cantidad, precio, totalFila);

    // Eventos
    function actualizar(nuevaCantidad) {
        input.value = nuevaCantidad;
        carrito.actualizarUnidades(producto.sku, nuevaCantidad);

        const datosProducto = carrito.obtenerInformacionProducto(producto.sku);
        totalFila.textContent = datosProducto.price * datosProducto.unidades + "€";

        pintarTotal();
    }

    btnMas.addEventListener("click", function() {
        actualizar(Number(input.value) + 1);
    });

    btnMenos.addEventListener("click", function() {
        if (Number(input.value) > 0) {
            actualizar(Number(input.value) - 1);
        }
    });

    input.addEventListener("input", function() {
        actualizar(Number(input.value));
    });

    return fila;
}

function pintarTotal() {

    const datos = carrito.obtenerCarrito();

    total.textContent = datos.total.toFixed(2) + datos.currency;

    resumenProductos.replaceChildren();

    for(const producto of datos.products){


        if(producto.unidades > 0){

            const linea = document.createElement("p");

            const nombre = document.createElement("span");

            nombre.textContent = producto.title + " x " + producto.unidades;

            const precio = document.createElement("span");

            precio.textContent =  (producto.price * producto.unidades).toFixed(2) + datos.currency;


            linea.append(nombre, precio);

            resumenProductos.appendChild(linea);

        }

    }


}



inicializarCarrito();

