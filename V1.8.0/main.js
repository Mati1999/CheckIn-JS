alert("Voy a mostrarte algunos productos y depende cual quieras comprar se mostrará por pantalla ciertos detalles del costo de mismo.");

/**
 * Descripción: Creo una clase Producto donde pueda generar tantos productos como yo desee.
 */
class Producto {
    constructor(id,nombre,precio,oferta) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.oferta = oferta;
        this.precioDefinitivo = 0;
    }
}

/**
 * Descripción: Instancio o creo 8 productos a mi elección, dándoles un nombre, un precio y si están en oferta (TRUE) o no (FALSE)
 */
const producto1 = new Producto(1,"Remera",1000,false);
const producto2 = new Producto(2,"Camisa",2000,true);
const producto3 = new Producto(3,"Pantalon",3500,true);
const producto4 = new Producto(4,"Zapatillas",5000,true);
const producto5 = new Producto(5,"Cinturon",500,false);
const producto6 = new Producto(6,"Mochila",3000,true);
const producto7 = new Producto(7,"Medias",600,false);
const producto8 = new Producto(8,"Gorro",700,false);

/**
 * Descripción: Creo un conjunto de objetos dentro del array allProductos, para poder iterar sobre este array mas adelante y poder hacer uso de una mejor lógica.
 * @param {array} allProductos : Array donde guardo todos los objetos que cree.
 */
const allProductos = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8];

/**
 * @param {array} productosElegidos = Variable donde se almacenn los productos que el usuario decide comprar
 */
const productosElegidos = [];

/**
 * Descripción: Le pregunto al usuario que ingrese el número del producto que desea.
 * @param {number} productoSeleccionado : Variable donde se guarda el número del producto que seleccionamos (1, 2, 3,..)
 */
let productoSeleccionado = 0;
let producto = () => {
    productoSeleccionado = prompt(`Ingresa el número del producto que quieras adquirir.
Productos:
1)${producto1.nombre} = $${producto1.precio}
2)${producto2.nombre} = $${producto2.precio}
3)${producto3.nombre} = $${producto3.precio}
4)${producto4.nombre} = $${producto4.precio}
5)${producto5.nombre} = $${producto5.precio}
6)${producto6.nombre} = $${producto6.precio}
7)${producto7.nombre} = $${producto7.precio}
8)${producto8.nombre} = $${producto8.precio}`)
    return productoSeleccionado;
}

producto();

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
 * Descripción: En esta función mostramos el detalle del producto seleccionado y le preguntamos el usuario si quiere adquirirlo y ademas si quiere terminar de comprar o si quiere seguir viendo mas productos. 
 * @param {String} adquirirProducto : Variable donde almacenamos si el usuario quiere comprar ese producto.
 * @param {String} terminarCompras : Variable donde almacenamos si el usuario quiere seguir viendo otros productos o no.
 */
let adquirirProducto = "NO";
let terminarCompras = "NO"
const mostrarDetalle = (nombre,precio,iva,descuento,precioFinal) => {
    adquirirProducto = prompt(`Detalle TOTAL:
    Producto elegido: ${nombre}
    El precio inicial es: $${precio}
    Descuento: -$${descuento}
    IVA: $${iva}
    Precio FINAL: $${precioFinal}
    Desea comprar este producto? (SI / NO)
    `)
    adquirirProducto = adquirirProducto.toUpperCase();
    terminarCompras = prompt(`Desea terminar de comprar? (SI / NO)`);
    terminarCompras = terminarCompras.toUpperCase();
    return adquirirProducto,terminarCompras;
}

/**
 * Descripción: En esta función almacenamos el producto que el usuario quiso comprar al array vacio productosElegidos usando el método .push() 
 */
const comprarProducto = (elProducto) => {
    productosElegidos.push(elProducto);
}

/**
 * Descripción: Guardo dentro de una variable el objeto que hace referencia al producto que el usuario eligió mediante el uso del .find, donde me deja seleccionar 1 objeto si cumple una condición. Comparo el indice del producto dentro del array que contiene todos los objetos y lo comparo con el valor que ingresó el usuario - 1 porque los indicen comienzan desde el 0 y necesito reducir en 1 el valor para tener la mejor comparación.
 * @param {objet} elProducto : variable donde se almacena el producto seleccionado por el cliente.
 */
let elProducto;
let esElProducto = () => {
    elProducto = allProductos.find(clave => allProductos.indexOf(clave) === parseInt(productoSeleccionado) - 1)
    return elProducto;
}

esElProducto();

/**
 * Descripción: mediante el uso del if, compruebo si el producto está en oferta o no, y luego de hacer ciertos calculos, muestro por pantalla los detalles.
 */
const esDeOferta = () => {
    if (elProducto.oferta === true) {
        calcularDescuento(elProducto.precio);
        calcularIVA(precioConDescuento);
        precioFinal = precioConDescuento + IVA;
        elProducto.precioDefinitivo = precioFinal;
        mostrarDetalle(elProducto.nombre,elProducto.precio,IVA,descuento,precioFinal);
    } else {
        calcularIVA(elProducto.precio);
        precioFinal = elProducto.precio + IVA;
        elProducto.precioDefinitivo = precioFinal;
        mostrarDetalle(elProducto.nombre,elProducto.precio,IVA,descuento,precioFinal);
    }
}

/**
 * Descripción: Con esta función calculo el total del costo de todos los productos que la persona quiso comprar.
 * @param {number} precioCarrito : Variable donde almaceno el precio final.
 */
let precioCarrito = 0;
const calcularTotal = () => {
    productosElegidos.forEach(productito => {
        precioCarrito += productito.precioDefinitivo;
        return precioCarrito;
    })
}

/**
 * Descripción: Función donde muestro mediante un alerte que compras hizo y tambien cual es el costo final del carrito.
 * @param {String} infoCarrito : Variable donde almaceno el texto a mostrar.
 */
let infoCarrito = `Has comprado:`;
const mostrarCompras = () => {
    calcularTotal();
    for (let i = 1; i <= productosElegidos.length; i++) {
        infoCarrito += `
        Producto ${i}: ${productosElegidos[i - 1].nombre}. Precio: $${productosElegidos[i - 1].precioDefinitivo}`
    }
    infoCarrito += `
    Precio Final: $${precioCarrito}.`
    alert(infoCarrito);
};

/**
 * Descripción: Función donde analizo si el array donde se almacenan los productos que se quieren comprar está vacío o no, si está vacío aviso que no hay nada y si hay productos llamo a la función mostrarCompras().
 */

const carritoVacio = () => {
    if (productosElegidos.length === 0) {
        alert("No has comprado nada");
    } else {
        mostrarCompras();
    }
}

/**
 * Descripción: En este white automatizo el proceso de preguntar si quiere comprar un producto o si quiere terminar de comprar. Mientras quiera seguir comprando se va a seguir mostrando los productos y dependiendo si compra o no o si quiere seguir comprando o no, el loop sigue o se detiene.
 */
while (terminarCompras === "NO") {
    esDeOferta();
    if (adquirirProducto == "SI" && terminarCompras == "NO") {
        comprarProducto(elProducto);
        producto();
        esElProducto();
    } else if (adquirirProducto == "SI" && terminarCompras == "SI") {
        comprarProducto(elProducto);
        carritoVacio();
    } else if (adquirirProducto == "NO" && terminarCompras == "NO") {
        producto();
        esElProducto();
    } else if (adquirirProducto == "NO" && terminarCompras == "SI") {
        carritoVacio();
    }
}
