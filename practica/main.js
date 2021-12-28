// const cursos = ["PHP","JavaScript","Python","JAVA"];
// const cursos1 = [
//     { id: 1,curso: "PHP" },
//     { id: 2,curso: "JavaScript" },
//     { id: 3,curso: "Python" },
//     { id: 4,curso: "JAVA" }
// ]

// const guardarLocal = (clave,valor) => { localStorage.setItem(clave,valor) };

// for (const curso of cursos1) {
//     guardarLocal(curso.id,JSON.stringify(curso))
// }

// for (let i = 1; i <= cursos1.length; i++) {
//     console.log(JSON.parse(localStorage.getItem(i.toString())));
// }


// let elDiv = document.getElementById("elDiv");

// console.log(elDiv);
// let parrafo = document.createElement("p");
// parrafo.innerHTML = "Parrafo ingresado con JS";
// elDiv.appendChild(parrafo);

// let parrafos = document.getElementsByTagName("p");
// elDiv.removeChild(parrafos[3]);

let form = document.getElementById("form");
let salida = document.getElementById("salida");
let mensaje = document.getElementById("mensaje");

form.addEventListener("submit",(e) => {
    e.preventDefault();
    salida.innerHTML += ` ${mensaje.value} <br>`
})