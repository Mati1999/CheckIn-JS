
class Producto {
    constructor(img,nombre,precio) {
        this.img = img;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto("images/mochila.jpg","Mochila",2000);
const producto2 = new Producto("images/camisa.jpg","Camisa",2500);
const producto3 = new Producto("images/zapatos.jpg","Zapatos",1500);

let productos = [producto1,producto2,producto3];

localStorage.setItem(1,JSON.stringify(productos));

let localProducts = JSON.parse(localStorage.getItem("1"));

const elContenedor = document.getElementById("contenedor");
let cont = 0;


const anterior = document.getElementById("anterior");
const siguiente = document.getElementById("siguiente");
const comprar = document.getElementById("comprar");
const mostrarInfo = (img,nombre,precio) => {
    elContenedor.innerHTML = (`
                <div class="col-3">
                <img src="${img}">
                <h4>Nombre: ${nombre}</h4>
                <span>Precio:$ ${precio}</span>
            </div>`);
}

const verProductos = (contenedor) => {
    mostrarInfo(localProducts[cont].img,localProducts[cont].nombre,localProducts[cont].precio)
    contenedor.addEventListener('click',e => {
        tgt = e.target;

        if (tgt == anterior) {
            if (cont > 0) {
                mostrarInfo(localProducts[cont - 1].img,localProducts[cont - 1].nombre,localProducts[cont - 1].precio);
                cont--;
            } else {
                mostrarInfo(localProducts[localProducts.length - 1].img,localProducts[localProducts.length - 1].nombre,localProducts[localProducts.length - 1].precio);
                cont = localProducts.length - 1;
            }
        } else if (tgt == siguiente) {
            if (cont < localProducts.length - 1) {
                mostrarInfo(localProducts[cont + 1].img,localProducts[cont + 1].nombre,localProducts[cont + 1].precio);
                cont++;
            } else {
                mostrarInfo(localProducts[0].img,localProducts[0].nombre,localProducts[0].precio);
                cont = 0;
            }
        } else if (tgt == comprar) {
            elContenedor.innerHTML = (`
            <div class="col-3">
            <h1>!COMPRASTE!</h1>
            <img src="${localProducts[cont].img}">
            <h4>Nombre: ${localProducts[cont].nombre}</h4>
            <span>Precio:$ ${localProducts[cont].precio}</span>
            <p>Si quieres seguir viendo mas, pulsa "Siguiente" o "Anterior"</p>
        </div>`);
        }
    })
}
const cuerpo = document.getElementById("cuerpo");

cuerpo.addEventListener("keypress",(e) => {
    if (e.key === 'Enter') {
        comprar.click();
    } else if (e.key === "a") {
        anterior.click();
    } else if (e.key === "s") {
        siguiente.click();
    }
})

document.addEventListener('DOMContentLoaded',() => {
    let contenedor = document.getElementById("main");
    verProductos(contenedor);
})