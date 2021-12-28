class Producto {
    constructor(id,categoria,img,nombre,descipcion,talles,precio,oferta) {
        this.id = id;
        this.categoria = categoria;
        this.img = img;
        this.nombre = nombre;
        this.descipcion = descipcion;
        this.talles = talles;
        this.precio = precio;
        this.oferta = oferta;
    }
}

let indumentaria1 = new Producto(1,"indumentaria","indumentaria1.jpg","Campera Caterpillar","Campera comoda, abrigada, perfecta para viajar.",["S","M","L"],40,false);
let indumentaria2 = new Producto(2,"indumentaria","indumentaria2.jpg","Campera Caterpillar","Campera comoda, abrigada, perfecta para viajar.",["S","M","L"],40,false);
let indumentaria3 = new Producto(3,"indumentaria","indumentaria3.jpg","Remera Caterpillar","Remera de excelente calidad y material.",["S","M","L"],25,false);
let indumentaria4 = new Producto(4,"indumentaria","indumentaria4.jpg","Campera Caterpillar","Campera comoda, abrigada, perfecta para viajar.",["S","M","L"],40,false);
let indumentaria5 = new Producto(5,"indumentaria","indumentaria5.jpg","Camisa","Campera comoda, abrigada, perfecta para viajar.",["S","M","L"],15,true);
let indumentaria6 = new Producto(6,"indumentaria","indumentaria6.jpg","Camisa","Campera comoda, abrigada, perfecta para viajar.",["S","M","L"],15,false);
let indumentaria7 = new Producto(7,"indumentaria","indumentaria7.jpg","Remera","Remera de excelente calidad y material.",["S","M","L"],10,false);
let indumentaria8 = new Producto(8,"indumentaria","indumentaria8.jpg","Botas","Botas excelentes para trecking.",[38,39,40,41],20,false);
let indumentaria9 = new Producto(9,"indumentaria","indumentaria9.jpg","Conjunto","Conjunto perfecto para viajar con el mejor estilo.",["S","M","L"],35,true);
let indumentaria10 = new Producto(10,"indumentaria","indumentaria10.jpg","Campera Caterpillar","Campera comoda, abrigada, perfecta para viajar.",["S","M","L"],40,false);
let indumentaria11 = new Producto(11,"indumentaria","indumentaria11.jpg","Buzo Caterpillar","Buzo de exlente calidad, ergonómico y perfecto para viajar.",["S","M","L"],40,false);
let indumentaria12 = new Producto(12,"indumentaria","indumentaria12.jpg","Campera Caterpillar","Campera comoda, abrigada, perfecta para viajar.",["S","M","L"],40,true);

let equipaje1 = new Producto(13,"equipaje","equipaje1.jpg","Mochila","Mochila super liviana, perfecta para guardar todas tus pertenencias.",[],15,false);
let equipaje2 = new Producto(14,"equipaje","equipaje2.jpg","Maleta","Maleta de gran tamaño para toda tu ropa.",[],50,true);
let equipaje3 = new Producto(15,"equipaje","equipaje3.jpg","Maleta","Maleta de gran tamaño para toda tu ropa.",[],30,false);
let equipaje4 = new Producto(16,"equipaje","equipaje4.jpg","Mochila","Mochila super liviana, perfecta para guardar todas tus pertenencias.",[],30,true);
let equipaje5 = new Producto(17,"equipaje","equipaje5.jpg","Maleta","Maleta de gran tamaño para toda tu ropa.",[],65,false);
let equipaje6 = new Producto(18,"equipaje","equipaje6.jpg","Mochila","Mochila super liviana, perfecta para guardar todas tus pertenencias.",[],35,false);
let equipaje7 = new Producto(19,"equipaje","equipaje7.jpg","Maleta","Maleta de gran tamaño para toda tu ropa.",[],45,false);
let equipaje8 = new Producto(20,"equipaje","equipaje8.jpg","Maleta","Maleta de gran tamaño para toda tu ropa.",[],90,true);
let equipaje9 = new Producto(21,"equipaje","equipaje9.jpg","Maleta","Maleta de gran tamaño para toda tu ropa.",[],50,false);
let equipaje10 = new Producto(22,"equipaje","equipaje10.jpg","Mochila","Mochila super liviana, perfecta para guardar todas tus pertenencias.",[],30,false);
let equipaje11 = new Producto(23,"equipaje","equipaje11.jpg","Maleta","Maleta de gran tamaño para toda tu ropa.",[],80,false);
let equipaje12 = new Producto(24,"equipaje","equipaje12.jpg","Maleta","Maleta de gran tamaño para toda tu ropa.",[],70,false);

let comodidad1 = new Producto(25,"comodidad","comodidad1.jpg","Almohada para cuello","Almohada para viajar cómodo a cualquier lugar del mundo.",[],20,false);
let comodidad2 = new Producto(26,"comodidad","comodidad2.jpg","Porta accesorios","Porta accesorios excelente para guardar tus documentos y pequeñas pertenencias.",[],70,true);
let comodidad3 = new Producto(27,"comodidad","comodidad3.jpg","Almohada para cuello","Almohada para viajar cómodo a cualquier lugar del mundo.",[],20,false);
let comodidad4 = new Producto(28,"comodidad","comodidad4.jpg","Almohada para cuello","Almohada para viajar cómodo a cualquier lugar del mundo.",[],20,true);
let comodidad5 = new Producto(29,"comodidad","comodidad5.jpg","Almohada para cuello","Almohada para viajar cómodo a cualquier lugar del mundo.",[],20,false);
let comodidad6 = new Producto(30,"comodidad","comodidad6.jpg","Toalla de alta absorción","Toalla perfecta para cuando hace calor.",[],10,true);
let comodidad7 = new Producto(31,"comodidad","comodidad7.jpg","Porta accesorios","Porta accesorios excelente para guardar tus documentos y pequeñas pertenencias.",[],15,false);
let comodidad8 = new Producto(32,"comodidad","comodidad8.jpg","Almohada para cuello","Almohada para viajar cómodo a cualquier lugar del mundo.",[],22,false);
let comodidad9 = new Producto(33,"comodidad","comodidad9.jpg","Antifaz para dormir","Antifaz para eliminar la luz molesta y que te permita dormir.",[],3,false);
let comodidad10 = new Producto(34,"comodidad","comodidad10.jpg","Antifaz para dormir","Antifaz para eliminar la luz molesta y que te permita dormir.",[],3,false);
let comodidad11 = new Producto(35,"comodidad","comodidad11.jpg","Almohada para cuello","Almohada para viajar cómodo a cualquier lugar del mundo.",[],5,false);
let comodidad12 = new Producto(36,"comodidad","comodidad12.jpg","Toalla de alta absorción","Toalla perfecta para cuando hace calor.",[],10,false);

let tecnologia1 = new Producto(37,"tecnologia","tecnologia1.jpg","Parlante","Increíble parlante para escuchar la mejor música con tus seres queridos.",[],60,true);
let tecnologia2 = new Producto(38,"tecnologia","tecnologia2.jpg","Batería portatil","Bateria portatil para cargar todos tus dispositivos.",[],30,false);
let tecnologia3 = new Producto(39,"tecnologia","tecnologia3.jpg","Batería portatil","Bateria portatil para cargar todos tus dispositivos.",[],25,false);
let tecnologia4 = new Producto(40,"tecnologia","tecnologia4.jpg","Adaptador para cables","Adaptador para que tus dispositivos jamás se queden sin batería.",[],10,false);
let tecnologia5 = new Producto(41,"tecnologia","tecnologia5.jpg","Batería portatil","Bateria portatil para cargar todos tus dispositivos.",[],20,false);
let tecnologia6 = new Producto(42,"tecnologia","tecnologia6.jpg","Adaptador para enchufes","Adaptador para conectar todos tus aparatos electricos.",[],15,false);
let tecnologia7 = new Producto(43,"tecnologia","tecnologia7.jpg","Adaptador para enchufes","Adaptador para conectar todos tus aparatos electricos.",[],15,false);
let tecnologia8 = new Producto(44,"tecnologia","tecnologia8.jpg","Bolso porta cables","Perfecto bolso para guardar todos tus cables y tenerlos ordenados.",[],50,true);
let tecnologia9 = new Producto(45,"tecnologia","tecnologia9.jpg","Cámara","Cámara de última generación para capturar tus mejores momentos.",[],15,false);
let tecnologia10 = new Producto(46,"tecnologia","tecnologia10.jpg","Auriculares","Auriculares para escuchar la mejor música.",[],20,false);
let tecnologia11 = new Producto(47,"tecnologia","tecnologia11.jpg","Auriculares","Auriculares para escuchar la mejor música.",[],30,true);
let tecnologia12 = new Producto(48,"tecnologia","tecnologia12.jpg","Auriculares","Auriculares para escuchar la mejor música.",[],25,false);


let productosLocal = [indumentaria1,indumentaria2,indumentaria3,indumentaria4,indumentaria5,indumentaria6,indumentaria7,indumentaria8,indumentaria9,indumentaria10,indumentaria11,indumentaria12,equipaje1,equipaje2,equipaje3,equipaje4,equipaje5,equipaje6,equipaje7,equipaje8,equipaje9,equipaje10,equipaje11,equipaje12,comodidad1,comodidad2,comodidad3,comodidad4,comodidad5,comodidad6,comodidad7,comodidad8,comodidad9,comodidad10,comodidad11,comodidad12,tecnologia1,tecnologia2,tecnologia3,tecnologia4,tecnologia5,tecnologia6,tecnologia7,tecnologia8,tecnologia9,tecnologia10,tecnologia11,tecnologia12];

localStorage.setItem("Productos",JSON.stringify(productosLocal));

// Traigo del localStorage los productos, y guardo el array en una variable.
let productos = JSON.parse(localStorage.getItem("Productos"));

// Del array de productos, hago un filtrado de los productos por categoría y los guardo en variables.
let productosInd = productos.filter(prod => prod.categoria === "indumentaria");
let productosEquip = productos.filter(prod => prod.categoria === "equipaje");
let productosComod = productos.filter(prod => prod.categoria === "comodidad");
let productosTec = productos.filter(prod => prod.categoria === "tecnologia");


// INDUMENTARIA


for (let i = 0; i < productosInd.length; i++) {
    // Creo un boton para ingresar los datos del producto en el html
    let buttonProdInd = document.createElement("button");
    buttonProdInd.setAttribute("type","button");
    buttonProdInd.setAttribute("class","btn p-0 indexMain__modalProducto mt-3 col-lg-2 mx-lg-4 col-md-3 ms-md-3 col-sm-5 col-5");
    buttonProdInd.setAttribute("data-bs-toggle","modal");


    buttonProdInd.setAttribute("data-bs-target",`#productoIndumentaria${i + 1}`);
    buttonProdInd.innerHTML = (`
    <div id="${productosInd[i].id}" class="producto">
        <img src="../images/indumentaria/${productosInd[i].img}" alt="producto${i + 1}">
        <div class="producto__info">
            <h5>${productosInd[i].nombre}</h5>
            <span>$${productosInd[i].precio}</span>
        </div>
    </div>
    `)
    contProdInd.appendChild(buttonProdInd);


    let modalProdInd = document.createElement("div");
    modalProdInd.setAttribute("class","modal fade modalProducto");
    modalProdInd.setAttribute("tabindex","-1");
    modalProdInd.setAttribute("aria-hidden","true");
    modalProdInd.setAttribute("id",`productoIndumentaria${i + 1}`);
    modalProdInd.setAttribute("aria-labelledby",`productoIndumentaria${i + 1}Label`);

    // A travez del un if ternario me fijo si el producto tiene talle o no, si tiene, muestro el modal con las opciones de talles y sino no lo muestro
    (productosInd[i].talles.length > 0) ?

        modalProdInd.innerHTML = (`
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="card tarjetaModal">
            <img src="../images/indumentaria/${productosInd[i].img}"
                class="card-img-top tarjetaModal__img" alt="...">
            <div class="card-body tarjetaModal__info">
                <h5 class="card-title tarjetaModal__nombre">${productosInd[i].nombre}</h5>
                <p class="card-text tarjetaModal__description">${productosInd[i].descipcion}
                </p>
                <div class="tarjetaModal__talles">
                    <h5>Talle</h5>
                    <div class="tarjetaModal__talle">
                        <div>
                            <input type="radio" name="talle" id="small${i + 1}" checked="checked">
                            <label for="small${i + 1}">${productosInd[i].talles[0]}</label>
                        </div>
                        <div>
                            <input type="radio" name="talle" id="medium${i + 1}">
                            <label for="medium${i + 1}">${productosInd[i].talles[1]}</label>
                        </div>
                        <div>
                            <input type="radio" name="talle" id="large${i + 1}">
                            <label for="large${i + 1}">${productosInd[i].talles[2]}</label>
                        </div>
                    </div>
                </div>
                <span class="tarjetaModal__precio">$${productosInd[i].precio}</span>
                <a id="${i + 1}" class="btn tarjetaModal__boton agregarCarrito" data-id="${i + 1}">Agregar al carrito</a>
            </div>
        </div>
    </div>
</div>
    `)
        :
        modalProdInd.innerHTML = (`
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="card tarjetaModal">
                <img src="../images/indumentaria/${productosInd[i].img}"
                    class="card-img-top tarjetaModal__img" alt="...">
                <div class="card-body tarjetaModal__info">
                    <h5 class="card-title tarjetaModal__nombre">${productosInd[i].nombre}</h5>
                    <p class="card-text tarjetaModal__description">${productosInd[i].descipcion}</p>
                    <span>$${productosInd[i].precio}</span>
                    <a id="${i + 1}" class="btn tarjetaModal__boton agregarCarrito" data-id="${i + 1}>Agregar al carrito</a>
                </div>
            </div>
        </div>
    </div>
    `);

    contProdInd.appendChild(modalProdInd);
}

// lo mas vendido en indumentaria

let prodMasVendidoInd = [];

for (let i = 0; i < 4; i++) {
    prodMasVendidoInd.push(productosInd[i]);
}

for (let i = 0; i < prodMasVendidoInd.length; i++) {
    const divProdMasVendidoInd = document.createElement("div");
    divProdMasVendidoInd.setAttribute("class","miniProducto");
    divProdMasVendidoInd.innerHTML = (`
    <button type="button" class="btn p-0 indexMain__modalProducto miniProducto__button"
    data-bs-toggle="modal" data-bs-target="#productoIndumentaria${i + 1}">
        <div class="miniProducto__aSelector" href="">
            <div class="miniProducto__imcContainer">
                <img class="miniProducto__img" src="../images/indumentaria/${prodMasVendidoInd[i].img}"
                alt="">
            </div>
            <div class="miniProducto__info">
                <h5 class="miniProducto__nombre">${prodMasVendidoInd[i].nombre}</h5>
                <span class="miniProducto__precio">$${prodMasVendidoInd[i].precio}</span>
            </div>
        </div>
    </button>
    `)
    filtroProdInd.appendChild(divProdMasVendidoInd);

    const divProdMasVendidoIndResponsive = document.createElement("div");
    divProdMasVendidoIndResponsive.setAttribute("class","miniProducto");
    divProdMasVendidoIndResponsive.innerHTML = (`
    <button type="button" class="btn p-0 indexMain__modalProducto miniProducto__button"
    data-bs-toggle="modal" data-bs-target="#productoIndumentaria${i + 1}">
    <div class="miniProducto__aSelector" href="">
        <div class="miniProducto__imcContainer">
            <img class="miniProducto__img" src="../images/indumentaria/${prodMasVendidoInd[i].img}"
                alt="">
        </div>
        <div class="miniProducto__info">
            <h5 class="miniProducto__nombre">${prodMasVendidoInd[i].nombre}</h5>
            <span class="miniProducto__precio">$${prodMasVendidoInd[i].precio}</span>
        </div>
    </div>
</button>
    `)
    filtroProdIndResponsive.appendChild(divProdMasVendidoIndResponsive);
}

let carrito = {};
contProdInd.addEventListener('click',e => {
    agregarAlCarrito(e);
})

const agregarAlCarrito = e => {
    if (e.target.classList.contains('agregarCarrito')) {
        setCarrito(e.target.parentElement.parentElement)
    }
    e.stopPropagation()
}

let carritoNuevo = {};
const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector('div').querySelector('a').dataset.id,
        img: objeto.querySelector('img').src,
        nombre: objeto.querySelector('div').querySelector('.tarjetaModal__nombre').textContent,
        precio: objeto.querySelector('div').querySelector('span').textContent.slice(1),
        cantidad: 1
    }

    eliminarProducto([],carrito);
    if (carritoNuevo.hasOwnProperty(producto.id)) {
        producto.cantidad = carritoNuevo[producto.id].cantidad + 1;
    }

    carritoNuevo[producto.id] = { ...producto }
    pintarCarrito(carritoNuevo);
}

const pintarCarrito = (carrito) => {
    // console.log(carrito);
    carritoBody.innerHTML = '';
    Object.values(carrito).forEach(producto => {
        const productoCarrito = document.createElement("div");
        productoCarrito.setAttribute("class","productoCarrito");
        productoCarrito.setAttribute("id",`producto${producto.id}`)
        productoCarrito.innerHTML = (`
         <div class="productoCarrito__imgContainer">
             <img id="prodCarritoImg" src="${producto.img}" alt=""
             class="productoCarrito__img">
         </div>
         <div class="productoCarrito__info">
             <h4 id="prodCarritoNombre" class="productoCarrito__nombre">${producto.nombre}</h4>
             <span id="prodCarritoPrecio" class="productoCarrito__precio">Precio:${producto.precio}</span>
             <p>Cantidad: ${producto.cantidad}</p>
             <h5>Total: $${producto.precio * producto.cantidad} </h5>
         </div>
         <input type="button" class="botonEliminar" id="eliminarProducto" value="X" data-id="${producto.id}">
        `)
        carritoBody.appendChild(productoCarrito);
    })
    const botonEliminar = document.querySelectorAll(".botonEliminar");
    eliminarProducto(botonEliminar,carrito);
}


const eliminarProducto = (botonEliminar,carrito) => {
    for (const cont of botonEliminar) {
        cont.addEventListener("click",(e) => {
            let sacarProducto = document.getElementById(`producto${e.target.dataset.id}`);
            let idSacarProducto = sacarProducto.querySelector('.botonEliminar').dataset.id;
            carritoNuevo = Object.values(carrito).filter(i => i.id !== idSacarProducto)
            pintarCarrito(carritoNuevo);
        })
    }
    return carritoNuevo;

}
