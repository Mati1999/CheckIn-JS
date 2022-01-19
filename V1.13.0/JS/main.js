$(() => {

    /**
     * Descripción: Creo la clase Producto donde me permite crear todos los productos necesarios para mi web.
     */
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

    /**
     * Descripción: Creo los productos para indumentaria, equipaje, comodidad y tecnología.
     */
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

    /**
     * Descripción: Creo un array donde guardo todos los productos
     * @param {array} productosLocal : array donde guardo todos los productos
     */
    let productosLocal = [indumentaria1,indumentaria2,indumentaria3,indumentaria4,indumentaria5,indumentaria6,indumentaria7,indumentaria8,indumentaria9,indumentaria10,indumentaria11,indumentaria12,equipaje1,equipaje2,equipaje3,equipaje4,equipaje5,equipaje6,equipaje7,equipaje8,equipaje9,equipaje10,equipaje11,equipaje12,comodidad1,comodidad2,comodidad3,comodidad4,comodidad5,comodidad6,comodidad7,comodidad8,comodidad9,comodidad10,comodidad11,comodidad12,tecnologia1,tecnologia2,tecnologia3,tecnologia4,tecnologia5,tecnologia6,tecnologia7,tecnologia8,tecnologia9,tecnologia10,tecnologia11,tecnologia12];

    /**
     * Descipción: Guardo en el localStorage todos los productos
     */
    localStorage.setItem("Productos",JSON.stringify(productosLocal));

    /**
     * Descripción: Traigo del localStorage los productos, y guardo el array en una variable.
     */
    let productos = JSON.parse(localStorage.getItem("Productos"));
    console.log(productos);
    /**
     * Descripción: Del array de productos, hago un filtrado de los productos por categoría y los guardo en variables.
     */
    let productosInd = productos.filter(prod => prod.categoria === "indumentaria");
    let productosEquip = productos.filter(prod => prod.categoria === "equipaje");
    let productosComod = productos.filter(prod => prod.categoria === "comodidad");
    let productosTec = productos.filter(prod => prod.categoria === "tecnologia");


    // INDUMENTARIA

    /**
     * Descripción: En este for creo los productos que se van a incertar dentro del main de indumentaria, consumiendo del localStorage los productos y mostrándolos
     * @param {elementNode} buttonProdInd: creo un boton donde luego voy a ingresar el contenido del producto. Está creado todo a partir de bootstrap components.
     * @param {elementNode} modalProdInd: creo un div donde voy a ingresar el modal que se muestra luego de hacer click en el boton buttonProdInd.
     */
    for (let i = 0; i < productosInd.length; i++) {
        // Creo un boton para ingresar los datos del producto en el html

        contProdInd.append(`
    <button type='button' class='btn p-0 indexMain__modalProducto mt-3 col-lg-2 mx-lg-4 col-md-3 ms-md-3 col-sm-5 col-5' data-bs-toggle='modal' data-bs-target='#productoIndumentaria${i + 1}'>
        <div id="${productosInd[i].id}" class="producto">
            <img src="../images/indumentaria/${productosInd[i].img}" alt="producto${i + 1}">
            <div class="producto__info">
                <h5>${productosInd[i].nombre}</h5>
                <span>$${productosInd[i].precio}</span>
            </div>
        </div>
    </button>
    `);


        // A travez del un if ternario me fijo si el producto tiene talle o no, si tiene, muestro el modal con las opciones de talles y sino no lo muestro
        if (productosInd[i].talles.length > 0) {

            contProdInd.append(`
    <div class='modal fade modalProducto' tabindex='-1' aria-hidden='true' id='productoIndumentaria${i + 1}' aria-labelledby='productoIndumentaria${i + 1}Label'>
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
</div>
`);
        } else {

            contProdInd.append(`
    <div class='modal fade modalProducto' tabindex='-1' aria-hidden='true' id='productoIndumentaria${i + 1}' aria-labelledby='productoIndumentaria${i + 1}Label'>
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
</div>
`);

        }


    }

    // lo mas vendido en indumentaria

    /**
     * Descripción: Ahora creo otro for para poder ingresar en el main de indumentaria en la parte izquierda-inferior, lo productos mas vendidos tambien consumiendolos desde el localStorage
     * @param {array} prodMasVendidoInd: array donde ingreso los productos mas vendidos.
     */
    let prodMasVendidoInd = [];

    for (let i = 0; i < 4; i++) {
        prodMasVendidoInd.push(productosInd[i]);
    }

    /**
     * Descripción: En este for itero sobre los prodMasVendidoInd para poder ingresarlos en el html.
     * @param {elementNode} divProdMasVendidoInd: creo un div donde voy a ingresar el contenido de los productos
     * @param {elementNode} divProdMasVendidoIndResponsive: creo un div donde ingreso el contenido de los productos mas vendidos pero para el responsive.
     */
    for (let i = 0; i < prodMasVendidoInd.length; i++) {


        filtroProdInd.append(`
    <div class='miniProducto'>
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
    </div>
    `);

        filtroProdIndResponsive.append(`
    <div class='miniProducto'>
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
</div>
    `);
    }

    // CARRITO DE COMPRA

    /**
     * Descipción: A contProdInd le coloco el evento click para que cuando se haga click en el boton "Agregar producto", se agregue el producto en el carrito.
     * @param {object} carrito: Creo un objeto donde voy a agregar los productos en el carrito.
     */
    let carrito = {};
    contProdInd.click(e => {
        agregarAlCarrito(e);
    })

    /**
     * Descripción: En esta funcion obtengo el evento "e" del click pero con un if selecciono solo cuando hago click en el elemento que tenga la clase "agregarCarrito", luego le paso a la función setCarrito(el padre del padre del boton "Agregar al carrito") ya que luego voy a poder obtener la imagen, y toda la info del producto.
     */
    const agregarAlCarrito = e => {
        if (e.target.classList.contains('agregarCarrito')) {
            setCarrito(e.target.parentElement.parentElement)
        }
        //uso el e.stopPropagation() para evitar que mas elementos del main usen el evento "click".
        e.stopPropagation()
    }

    /**
     * Descripción: Ahora en la función setCarrito, creo un objeto tipo producto donde creo cada producto que voy a agregar el carrito. A través del querySelector selecciono cada parte del objeto para ingresarlo como valor en cada atributo (El dataset me permite ingresar en el atributo data-id del boton agregar al carrito que ingresé en el html anteriormente). 
     Luego ejecuto la función eliminarProducto que nos sirve para saber si se eliminó algún producto del carrito y que nos pase el nuevo carrito. 
     Despues con un if verifico si el producto que voy a agregar está ya creado, si está creado aumento su cantidad en 1, sino se creo nuevo. 
     Al crear un nuevo objeto ingreso ese objeto en el carrito con un indice que es su id y luego como valor el producto.
     Luego llamo la funcipon pintarCarrito() y le paso como parámetro el carritoNuevo
     * @param {object} carritoNuevo: Creo un oobjeto donde se van a ingresar los productos luego de haber comprobado si se eliminaron antes algunos o no.
     IMPORTANTE:
     Si en el caso de que no se haya ejecutado el click de eliminar un producto. Cuando yo agreguego un producto nuevo, llamo la función eliminarProducto, y esta función me va a traer el carritoNuevo siempre con los elementos eliminados.
     */
    let carritoNuevo = {};
    const setCarrito = objeto => {
        const producto = {
            id: $(objeto).find('div').find('a').data('id'),
            img: $(objeto).find('img').attr("src"),
            nombre: $(objeto).find('div').find('.tarjetaModal__nombre').text(),
            precio: $(objeto).find('div').find('span').text().slice(1),
            cantidad: 1
        }

        eliminarProducto([],carrito);
        if (carritoNuevo.hasOwnProperty(producto.id)) {
            producto.cantidad = carritoNuevo[producto.id].cantidad + 1;
        }

        carritoNuevo[producto.id] = { ...producto }
        pintarCarrito(carritoNuevo);
    }

    /**
     * Descripción: En esta función recibo el carrito y luego itero sobre él para poder ingresar por html los productos dentro de él.
     * @param {elementNode} productoCarrito: Creo un div donde se van a ingresar los datos de los productos del carrito. Y luego los ingreso en el cuerpo del carrito conncarritoBody.appendChild(productoCarrito);
     * @param {elementNode} botonEliminar: obtengo de los productos del carrito el boton para eliminar el producto. Y luego ejecuto la función eliminarProducto() y le paso como parámetro el boton para eliminar y el carrito.
     */
    const pintarCarrito = (carrito) => {
        carritoBody.text(``);
        Object.values(carrito).forEach(producto => {

            carritoBody.append(`
            <div class='productoCarrito' id='producto${producto.id}'>
                <div class="productoCarrito__imgContainer">
                    <img id="prodCarritoImg" src="${producto.img}" alt=""
                    class="productoCarrito__img">
                </div>
                <div class="productoCarrito__info">
                    <h4 id="prodCarritoNombre" class="productoCarrito__nombre">${producto.nombre}</h4>
                    <span id="prodCarritoPrecio" class="productoCarrito__precio">Precio:$${producto.precio}</span>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <h5>Total: $${producto.precio * producto.cantidad} </h5>
                </div>
                <input type="button" class="botonEliminar" id="eliminarProducto" value="X" data-id="${producto.id}">
         </div>
        `);

        })
        const botonEliminar = $(".botonEliminar");

        botonEliminar.each(function (ind,element) {
            eliminarProducto(element,carrito);
        })
    }

    /**
     * Descripción: En esta función obtengo el boton para eliminar un producto y tambien el carrito. Dentro de la misma ejecuto un for donde itero sobre el array de todos los botones para pasarles el evento "Click" que hace posible la eliminación del producto. Luego filtro el carrito con los producto que tengan el id distinto al que yo quiero eliminar y luego ejecuto la función pintarCarrito() y le paso el carrito nuevo para que se pinte en el html el carrito sin el producto eliminado.
     La función me va a retornar el carrito nuevo aunque no elimine un producto, ya que me permite verificar si se ha eliminado o no un producto y le mando el carritoNuevo a la función setProducto() para que este pueda agregar un producto nuevo.
     */
    const eliminarProducto = (botonEliminar,carrito) => {

        $(botonEliminar).click(e => {
            carritoNuevo = Object.values(carrito).filter(i => i.id !== $(botonEliminar).data('id'))
            pintarCarrito(carritoNuevo);
        })

        return carritoNuevo;
    }


    //INDEX HTML ANIMACIÓN EN EL TITULO
    animacionTitulo();

    function animacionTitulo() {
        $('.header__img').fadeIn(800).fadeOut(800).fadeIn(800);
        animacionBuscador();
    }

    function animacionBuscador() {
        $('.header__buscador').delay(1400).fadeIn(800).fadeOut(800).fadeIn(800);
        animacionBotonSesion();
    }

    function animacionBotonSesion() {
        $('.header__inicioSesion').delay(3400).fadeIn(800).fadeOut(800).fadeIn(800);
        animacionCarrito()
    }

    function animacionCarrito() {
        $('.header__carrito').delay(5400).fadeIn(800).fadeOut(800).fadeIn(800);
    }


});