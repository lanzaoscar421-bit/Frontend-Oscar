
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

        let productosEncontrados = null;

        for(const producto of this.productos){

            if(producto.sku === sku){

                productosEncontrados = producto;
            }

        }

        let cantidad = this.unidades[sku];

        if(cantidad === undefined){
            cantidad = 0;
        }

        return {

            sku: productosEncontrados.sku,
            title: productosEncontrados.title,
            price: Number(productosEncontrados.price),
            unidades: cantidad

        };
    


    }


    obtenerCarrito(){

        let total = 0;
        let productos = [];


        for(const p of this.productos){

            const info = this.obtenerInformacionProducto(p.sku);

            total = total + info.price * info.unidades;

            productos.push(info);

        }

        return { 
            total: total,
            currency: this.moneda,
            products: productos
        };
    }

}