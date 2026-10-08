//todo logica, nada que ver con el HTML SOLO LOGICA 

export default class Carrito {


    constructor(productos, moneda) {

        this.productos = productos;
        this.moneda = moneda;
        this.unidades = {};
    }


    actualizarUnidades(sku, unidades) {

        this.unidades[sku] = unidades;

    }


    obtenerInformacionProducto(sku){

    }


    obtenerCarrito(){}

}