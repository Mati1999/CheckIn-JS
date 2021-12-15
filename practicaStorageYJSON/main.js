alert("Bienvenido! Vamos a pedirte ciertos datos y como siempre, vamos a hacer algo con ellos. ( Ojalá no inspecciones y te metas en application y te metas en localStorage y veas que hemos guardado tus datos personasles. GUIÑO GUIÑO ;D )");

alert("Porsupuesto, puedes ingresar mas datos de otro usuario si así lo deseas.")

let nombre;
let apellido;
let documento;
let edad;
let telefono;
let pedirInfo = () => {
    nombre = prompt("Porfavor, ingresa tu nombre.");
    apellido = prompt("Porfavor, ingresa tu apellido.");
    documento = prompt("Igresa tu número de documento porfavor.")
    edad = prompt("Ahora ingresa tu edad.");
    telefono = prompt("Ingresa tu número de teléfono celular.");
}
pedirInfo()

class Usuario {
    constructor(nombre,apellido,documento,edad,telefono) {
        {
            this.nombre = nombre;
            this.apellido = apellido;
            this.documento = documento;
            this.edad = edad;
            this.telefono = telefono
        }
    }
}

let seguirCreando = true;
let creacion = (crear) => {
    if (crear === "SI") {
        pedirInfo();
        return seguirCreando = true;
    } else {
        alert("Muchas gracias por ayudarnos a ampliar nuestra base de datos!");
        for (let i = 1; i <= localStorage.length; i++) {

            //Ver de cambiar localStorage.getItem(i.toString()) por localStorage.key(i)
            console.log(JSON.parse(localStorage.getItem(i.toString())));
        }
        return seguirCreando = false;
    }
}
let estaCreado = false;
const confirmarExistencia = (documento) => {
    for (let i = 1; i <= localStorage.length; i++) {
        if (localStorage.length > 0) {
            //Ver de cambiar localStorage.getItem(i.toString()) por localStorage.key(i)
            if (JSON.parse(localStorage.getItem(i.toString())).documento !== documento) {
                return estaCreado = false;
            } else {
                return estaCreado = true;
            }
        } else {
            return estaCreado = true;
        }
    }
}

let guardarEnMemoria = (clave,valor) => { localStorage.setItem(clave,valor) }

let contador = localStorage.length + 1;
let crear;
while (seguirCreando !== false) {
    confirmarExistencia(documento);
    if (estaCreado == false) {
        guardarEnMemoria(contador,JSON.stringify(new Usuario(nombre,apellido,documento,edad,telefono)));
        contador++;
        crear = prompt("Deseas seguir creando otro usuario? (SI/NO)").toUpperCase();
        creacion(crear);
    } else {
        alert("Lo siento, ya existe un usuario con el mismo número de documento. No se puede crear este nuevo usuario.")
        crear = prompt("Deseas seguir creando otro usuario? (SI/NO)").toUpperCase();
        creacion(crear);
    }

}



