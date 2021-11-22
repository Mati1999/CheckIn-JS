/**
 * @challenge: Crear un algoritmo JS simple
 * 
 * @version: v1.0.0
 * @author: Matias Aguilera
 * @fecha: 17/11/2021
 *
 * History:

 */


let bienvenida = alert("Bienvenido, vamos a mostrar a continuación tu información personal");
let nombre = prompt("Ingresa tu nombre");
let apellido = prompt("Ahora ingresa tu apellido");
let nombreCompleto = alert(`Hola ${nombre} ${apellido}`);


let anoNacimiento = prompt("Ahora ingresa el año de tu nacimiento, porfavor.");
let anoActual = 2021;
let anoNacimientoParseado = parseInt(anoNacimiento);
let edad = parseInt(anoActual - anoNacimientoParseado);


let informacion = alert(
    `PRESENTACIÓN:
     Nombre y Apellido: ${nombre} ${apellido}.
     Edad: ${edad} años.
     MUCHAS GRACIAS POR DARTE A CONOCER!
     `)