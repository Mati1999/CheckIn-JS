let array = [50,20,4,9,0,3,102,500,350];

let orden = prompt(`Elige como quieres ordenar estos números porfavor:  ${array},
De manera creciente ( + )
De manera decreciente ( - )
No ordenar ( * )`);

let ordenar = (a,b) => {
    if (orden === "+") {
        return a - b;
    } else if (orden === "-") {
        return b - a;
    } else {
        return a + b;
    }
}

document.write(array.sort(ordenar));