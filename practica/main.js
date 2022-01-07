$(function () {

    class Producto {
        constructor(img,nombre,precio) {
            this.img = img;
            this.nombre = nombre;
            this.precio = precio;
        }
    }

    let producto1 = new Producto("alcohol.jpg",'alcohol',1500);
    let producto2 = new Producto("carne.jpg",'carne',2000);
    let producto3 = new Producto("frutas.jpg",'frutas',500);
    let producto4 = new Producto("jugos.jpg",'jugos',700);
    let producto5 = new Producto("postres.jpg",'postres',600);
    let producto6 = new Producto("verduras.jpg",'verduras',400);

    let productosLocal = [producto1,producto2,producto3,producto4,producto5,producto6];
    localStorage.setItem('productos',JSON.stringify(productosLocal));

    let prodContainer = $('#productos');
















})