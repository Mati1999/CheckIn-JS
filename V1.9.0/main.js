class Producto {
    constructor(img,nombre,precio) {
        this.img = img;
        this.nombre = nombre;
        this.precio = precio
    }
}

let producto1 = new Producto('https://http2.mlstatic.com/D_NQ_NP_651337-MLA46990809786_082021-O.jpg',"Mochila",1500);
let producto2 = new Producto('https://ferreira.vteximg.com.br/arquivos/ids/375739-1000-1000/ni_CJ4819011.jpg?v=637538329780400000',"Campera",3000);
let producto3 = new Producto('https://bizarro.vteximg.com.br/arquivos/ids/711848-720-720/ZAPATOS-HOMBRE-2601-CUERO-RAGAZZI_30668.jpg?v=637147784557570000',"Zapatos",5000);
let producto4 = new Producto('http://d3ugyf2ht6aenh.cloudfront.net/stores/103/133/products/camisa-silver-ridge-mu-l21-523936152c51ab6fa515131786953784-640-0.jpg',"Camisa",2000);
let producto5 = new Producto('https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa_1.jpg',"Remera",4500);
let producto6 = new Producto('https://www.hd-tecnologia.com/imagenes/articulos/2012/11/Genius-lanza-los-parlantes-SP-HF800A.jpg',"Parlantes",6000);

const productos = [producto1,producto2,producto3,producto4,producto5,producto6];

const guardarMemoria = (clave,valor) => { localStorage.setItem(clave,valor) };
for (let i = 1; i <= productos.length; i++) {
    guardarMemoria(i,JSON.stringify(productos[i - 1]))
}

const elProducto = document.getElementById("contenedorProd");

for (let i = 1; i <= localStorage.length; i++) {

    let producto = JSON.parse(localStorage.getItem(i.toString()));
    let contenidoProd = document.createElement('div');
    contenidoProd.className += "producto col-xl-3 col-md-5 col- 10";
    contenidoProd.innerHTML = `
        <img src=${producto.img} alt="">
        <h4>${producto.nombre}</h4>
        <span>$${producto.precio}</span>`
    elProducto.appendChild(contenidoProd);
}