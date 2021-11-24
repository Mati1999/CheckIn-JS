alert("Vamos a empezar el juego de enlazar palabras.");
alert("Cada palabra que escribas va a colocarse a la derecha de cada palabra que vayas ingresando");
alert("Y para no comenzar con 0 palabras, vamos a darte una ayuda.");
alert(`SI QUIERES CORTAR LA CADENA, INGRESA LA PALABRA "exitGame"`)
alert("La cadena empeza con la palabra Yo");

let cadena = "Yo";

let palabraIngresada = prompt("Ingresa la palabra que quieras porfavor");

while (palabraIngresada !== "exitGame" && isNaN(palabraIngresada)) {
    cadena += " " + palabraIngresada;
    alert(`Tu cadena es "${cadena}"`);
    palabraIngresada = prompt("Ingresa otra palabra porfavor.");
}

alert(`Tu cadena FINAL es "${cadena}"`);

