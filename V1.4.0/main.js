alert("Voy a mostrarte algunos productos y depende cual quieras comprar se mostrará por pantalla ciertos detalles del costo de mismo.");

/**
 * Descripción: Creamos la variable producto donde almacenamos el valor del producto elegido.
 * @param {number} producto : Variable donde se almacena el producto elegido.
 */

let producto = parseInt(prompt(`Productos:
1)Remera = $1000 OFERTA
2)Camisa = $2000
3)Pantalon = $3500 OFERTA
4)Zapatillas = $5000
5)Cinturon = $500 OFERTA
6)Mochila = $3000 
7)Medias = $600 OFERTA
8)Gorro = $700`));

/**
 * Descripción: En este switch usamos la variable producto para para determinar cual es el precio del producto elegido.
 * @param {number} precioProducto: Variable donde se almacena el precio del producto elegido.
 */


let precioProducto = 0;
switch (producto) {
    case 1:
        precioProducto = 1000;
        break;
    case 2:
        precioProducto = 2000;
        break;
    case 3:
        precioProducto = 3500;
        break;
    case 4:
        precioProducto = 5000;
        break;
    case 5:
        precioProducto = 500;
        break;
    case 6:
        precioProducto = 3000;
        break;
    case 7:
        precioProducto = 600;
        break;
    case 8:
        precioProducto = 700;
        break;
    default:
        break;
}

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

const mostrarDetalle = (precioProducto,descuento,IVA,precioFinal) => {
    alert(`Detalle del producto adquirido:
    Has elegido el producto: ${producto}
    El precio inicial es: $${precioProducto}
    Se le aplica un descuento de: -$${descuento}
    IVA: $${IVA}
    El precio FINAL del producto es: $${precioFinal}
    `)
}

/**
 * Descripción: Función donde se analiza si el producto tiene oferta o no
 * @param {number} precioFinal : Variable donde se almacena el precio Final despues de realizado el descuento y la suma del IVA.
 */

let precioFinal = 0;
const detalleProducto = (producto) => {

    if (producto % 2 !== 0) {
        calcularDescuento(precioProducto);
        calcularIVA(precioConDescuento);
        precioFinal = precioConDescuento + IVA;
        mostrarDetalle(precioProducto,descuento,IVA,precioFinal);
    } else {
        calcularIVA(precioConDescuento);
        precioFinal = precioProducto + IVA;
        descuento = 0;
        mostrarDetalle(precioProducto,descuento,IVA,precioFinal);
    }
}

detalleProducto(producto);