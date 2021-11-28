alert(`Vamos a irnos de viaje, voy a darte 3 destinos y 3 asientos donde puedes ir en el avión, tu eliges.`);

/**
 * Descripción: Se le pide al usuario que seleccione mediante un número el destino al que quiere ir.
 * @param {number} destino : Variable donde se almacena un número que hace referencia al destino elegido.
 */
let destino = parseInt(prompt(`Elije 1 de los 3 destinos:
1)Canadá = $100000
2)Italia = $150000
3)Japon = $200000`));

/**
 * Descripción: Se le pide al usuario que seleccione mediante un número el asiento.
 * @param {number} destino : Variable donde se almacena un número que hace referencia al asiento elegido.
 */

let asiento = parseInt(prompt(`Ahora elige en que asiento vas a ir:
1)Económico = $20000
2)Primera Clase = $50000
3)Ejecutivo = $80000`));

/**
 * Descripción: En este switch se le asigna a la variable destinoElegido el valor del destino para luego utilizarlo mas adelante.
 * @param {String} destinoElegido : Variable donde se almacena el destino elegido.
 */

let destinoElegido = "";
switch (destino) {
    case 1:
        destinoElegido = "Canada";
        break;
    case 2:
        destinoElegido = "Italia";
        break;
    case 3:
        destinoElegido = "Japon";
        break;
    default:
        alert("No se eligió ningún destino");
        break;
}

/**
 * Descripción: En este Switch se almacena en precioDestino, el precio del pasaje al destino elegido.
 * @param {number} precioDestino : Variable donde se almacena el precio del pasaje elegido.
 */
let precioDestino = 0;
switch (destino) {
    case 1:
        precioDestino = 100000;
        break;
    case 2:
        precioDestino = 150000;
        break;
    case 3:
        precioDestino = 200000;
        break;
    default:
        break;
}


/**
 * Descripción: En este switch se le asigna a la variable asientoElegido el valor del asiento para luego utilizarlo mas adelante.
 * @param {String} asientoElegido : Variable donde se almacena el asiento elegido.
 */
let asientoElegido = "";
switch (asiento) {
    case 1:
        asientoElegido = "Económico";
        break;
    case 2:
        asientoElegido = "Primera Clase";
        break;
    case 3:
        asientoElegido = "Ejecutivo";
        break;
    default:
        alert("No se eligió ningún asiento");
        break;
}


/**
 * Descripción: En este Switch se almacena en precioAsiento, el precio del asiento elegido.
 * @param {number} precioAsiento : Variable donde se almacena el precio del asiento elegido.
 */
let precioAsiento = 0;
switch (asiento) {
    case 1:
        precioAsiento = 20000;
        break;
    case 2:
        precioAsiento = 50000;
        break;
    case 3:
        precioAsiento = 80000;
        break;
    default:
        break;
}

/**
 * Descripción: Función donde se suma el precio del asiento y el precio del destino.
 * @param {number} costoFinal : Variable donde se almacena la suma de los precios del destino y el asiento.
 */

let costoFinal = 0;
const sumaCostos = () => {
    costoFinal = precioAsiento + precioDestino;
    return costoFinal;
}


/**
 * Descripción: Función donde verificamos que el usuario haya ingresado un destino y asiento válidos y luego notificamos mediante un alert el destino y le asiento elegido junto con el costo final del mismo. 
 */
const viajar = (destino,asiento) => {
    if (destino >= 1 && destino <= 3 && asiento >= 1 && asiento <= 3) {
        sumaCostos();
        alert(`Usted a elegido ir a ${destinoElegido}, en ${asientoElegido}, por un precio final de $${costoFinal}`);
    } else {
        alert("Parece que usted no quiere viajar a ningún lado.")
    }

}

viajar(destino,asiento);