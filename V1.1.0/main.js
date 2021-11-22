/**
 * @challenge: Crear un algoritmo JS simple
 * 
 * @version: v1.1.0
 * @author: Matias Aguilera
 * @fecha: 19/11/2021
 *
 * History:

 */


alert(`Bienvenido al Cine Coder!!
A continuación voy a hacerte una serie de preguntas para saber si puedes entrar a ver una película.
Empecemos!!!
`)

let edad = prompt(`Primero necesito saber que edad tienes. Ingresa tu edad porfavor.`);

if (edad >= 18) {
    alert(`Genial! Eres mayor de edad.`);

    let pelicula = prompt(`Que película quieres ver? "El hombre araña", "Batman", "Superman".`).toUpperCase();

    if (pelicula === "EL HOMBRE ARAÑA") {
        alert(`Aquí tienes las entradas para El hombre araña.`)
    } else if (pelicula === "BATMAN") {
        alert(`Aquí tienes las entradas para Batman.`)
    } else if (pelicula === "SUPERMAN") {
        alert(`Aquí tienes las entradas para Superman.`)
    }
} else if (edad < 18 && edad > 0) {

    alert("Parece que eres menor de edad :C");
    let padres = prompt(`Vienes con tus padres? Si o No?`).toUpperCase();

    if (padres === "SI") {
        let pelicula = prompt(`Que película quieres ver? "El hombre araña", "Batman", "Superman".`).toUpperCase();

        if (pelicula === "EL HOMBRE ARAÑA") {
            alert(`Aquí tienes las entradas para El hombre araña.`)
        } else if (pelicula === "BATMAN") {
            alert(`Aquí tienes las entradas para Batman.`)
        } else if (pelicula === "SUPERMAN") {
            alert(`Aquí tienes las entradas para Superman.`)
        }
    } else {
        alert("Lo lamento, no puedo darte entradas para una película.");
    }
} else {
    alert("Parece que no quieres responder...")
}

