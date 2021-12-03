// EJERCICIO EN CLASE
const elementosIniciales = [
    { nombre: "Daniel",edad: 31 },
    { nombre: "Martina",edad: 7 },
    { nombre: "Karen",edad: 23 },
    { nombre: "Amelia",edad: 2 }
]
const elementoAgregar = [
    { nombre: "Felipe",edad: 36 },
    { nombre: "Julieta",edad: 7 },
    { nombre: "Edgar",edad: 66 }
]

let elementosFinales;
/*
    1. Combinar los arrays elementosIniciales y elementoAgregar para tener un solo array en elementosFinales
    2. Dejar unicamente aquellos usuarios que sean mayor de edad (Es decir mayores a 18 años)
    3. Eliminar el registro con índice 2 del array
    3. Recorrer el Array resultante e imprimir en consola nombre y edad
 
    Resultado Esperado:
    Nombre: Daniel, Edad: 31 años
    Nombre: Karen, Edad: 23 años
    Nombre: Edgar, Edad: 66 años
*/

// 1
let arrayCombinado = elementosIniciales.concat(elementoAgregar);

// 2
elementosFinales = arrayCombinado.filter(elemento => elemento.edad >= 18);
console.log(elementosFinales);

elementosFinales.splice(2,1);
console.log(elementosFinales);

elementosFinales.forEach(elemento => {
    console.log(`Nombre: ${elemento.nombre}, Edad: ${elemento.edad}`);
})