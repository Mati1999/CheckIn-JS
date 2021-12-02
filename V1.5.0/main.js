alert("Voy a mostrarte algunos productos y depende cual quieras comprar se mostrará por pantalla ciertos detalles del costo de mismo.");

/**
 * Descripción: Creo una clase Producto donde pueda generar tantos productos como yo desee.
 */

class Producto {
    constructor(nombre,precio,oferta) {
        this.nombre = nombre;
        this.precio = precio;
        this.oferta = oferta;
    }
}

/**
 * Descripción: Instancio o creo 8 productos a mi elección, dándoles un nombre, un precio y si están en oferta (TRUE) o no (FALSE)
 */

const producto1 = new Producto("Remera",1000,false);
const producto2 = new Producto("Camisa",2000,true);
const producto3 = new Producto("Pantalon",3500,true);
const producto4 = new Producto("Zapatillas",5000,true);
const producto5 = new Producto("Cinturon",500,false);
const producto6 = new Producto("Mochila",3000,true);
const producto7 = new Producto("Medias",600,false);
const producto8 = new Producto("Gorro",700,false);

/**
 * Descripción: Creo un conjunto de objetos dentro del objeto allProductos, para poder iterar sobre este objeto mas adelante y poder hacer uso de una mejor lógica.
 */
const allProductos = {
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
}

/**
 * Descripción: Le pregunto al usuario que ingrese el número del producto que desea.
 */
let producto = prompt(`Ingresa el número del producto que quieras adquirir.
Productos:
1)${producto1.nombre} = $${producto1.precio}
2)${producto2.nombre} = $${producto2.precio}
3)${producto3.nombre} = $${producto3.precio}
4)${producto4.nombre} = $${producto4.precio}
5)${producto5.nombre} = $${producto5.precio}
6)${producto6.nombre} = $${producto6.precio}
7)${producto7.nombre} = $${producto7.precio}
8)${producto8.nombre} = $${producto8.precio}`)

/**
 * Descripción: Con la función calcularDescuento obtenemos el valor del descuento que se hizo y tambien la variable donde almacenamos el valor del producto descontado.
 * @param {number} precioConDescuento : Variable donde se almacena el valor del producto descontado.
 * @param {number} descuento: Valor del descuento realizado.
 */
let precioConDescuento = 0;
let descuento = 0;
const calcularDescuento = (precioProducto) => {
    descuento = precioProducto * 0.30;
    precioConDescuento = precioProducto - descuento;
}

/**
 * Descripción: Se calculo el IVA del producto.
 * @param {number} IVA : Variable donde se guarda el valor del IVA.
 */
let IVA = 0;
const calcularIVA = (precioConDescuento) => {
    IVA = precioConDescuento * 0.21;
}

/**
 * Descripción: Función que muestra por pantalla el detalle del producto seleccionado.
 */
const mostrarDetalle = (nombre,precio,iva,descuento,precioFinal) => {
    alert(`Detalle TOTAL:
    Producto elegido: ${nombre}
    El precio inicial es: $${precio}
    Descuento: -$${descuento}
    IVA: $${iva}
    Precio FINAL: $${precioFinal}
    `)
}

/**
 * Descipción: Creo un FOR-IN donde itero sobre el objeto allProductos pora poder seleccionar el producto que el usuario eligió atravez del indexOf(), luego, necesito saber si el producto está en oferta para hacerle el descuento, y luego de todos los cálculos, llamo a la función mostrarDetalle() para darle al usuario toda la información necesaria.
 */
for (let clave in allProductos) {
    if (clave.indexOf(producto) !== -1) {
        if (allProductos[clave].oferta === true) {
            calcularDescuento(allProductos[clave].precio);
            calcularIVA(precioConDescuento);
            precioFinal = precioConDescuento + IVA;
            mostrarDetalle(allProductos[clave].nombre,allProductos[clave].precio,IVA,descuento,precioFinal);
        } else {
            calcularIVA(allProductos[clave].precio);
            precioFinal = allProductos[clave].precio + IVA;
            mostrarDetalle(allProductos[clave].nombre,allProductos[clave].precio,IVA,descuento,precioFinal);
        }
        break;
    } else {
        console.log("Este es un console.log por los elementos que no han sido seleccionados");
    }
}
