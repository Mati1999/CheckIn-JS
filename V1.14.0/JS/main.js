$(() => {

    /**
     * Descripción: Creo la clase Producto donde me permite crear todos los productos necesarios para mi web.
     */
    class Producto {
        constructor(id,categoria,img,nombre,descripcion,talles,precio,oferta) {
            this.id = id;
            this.categoria = categoria;
            this.img = img;
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.talles = talles;
            this.precio = precio;
            this.oferta = oferta;
        }
    }

    const productosURL = "../data/productos.json";
    const productosURLIndex = "data/productos.json";
    let productos = [];

    /**
     * Descripción: Uso del metodo GET para traer los productos de un .json estático (productos.json), para poder usarlos en mi HTML.
     */

    let formatData = (data) => {
        let dataFormated = {}
        data.forEach(item => {
            dataFormated[item.nombre] = null;
        })
        return dataFormated;
    }

    $.get(productosURL,(respuesta,estado) => {
        if (estado === "success") {
            productos = respuesta;

            //////////////////////  BUSCADOR DE PRODUCTOS  //////////////////////

            $.ajax({
                method: 'GET',
                url: productosURL,
                success: function (respuesta) {
                    let dataFormated = formatData(respuesta);
                    $('input.autocomplete').autocomplete({
                        data: dataFormated
                    });
                }
            })





            /**
             * Descripción: Traigo del localStorage los productos, y guardo el array en una variable.
             */
            // let productos = JSON.parse(localStorage.getItem("Productos"));

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
            <img src="../images/indumentaria/${productosInd[i].imagen}" alt="producto${i + 1}">
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
        <img src="../images/indumentaria/${productosInd[i].imagen}"
            class="card-img-top tarjetaModal__img" alt="...">
        <div class="card-body tarjetaModal__info">
            <h5 class="card-title tarjetaModal__nombre">${productosInd[i].nombre}</h5>
            <p class="card-text tarjetaModal__description">${productosInd[i].descripcion}
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
            <img src="../images/indumentaria/${productosInd[i].imagen}"
                class="card-img-top tarjetaModal__img" alt="...">
            <div class="card-body tarjetaModal__info">
                <h5 class="card-title tarjetaModal__nombre">${productosInd[i].nombre}</h5>
                <p class="card-text tarjetaModal__description">${productosInd[i].descripcion}</p>
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
                <img class="miniProducto__img" src="../images/indumentaria/${prodMasVendidoInd[i].imagen}"
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
            <img class="miniProducto__img" src="../images/indumentaria/${prodMasVendidoInd[i].imagen}"
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
                    imagen: $(objeto).find('img').attr("src"),
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
                    <img id="prodCarritoImg" src="${producto.imagen}" alt=""
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

        }
    })

    //////////////////////  BUSCADOR DE PRODUCTOS  //////////////////////

    /**
     * Descripción: En este Ajax uso el método GET para usar los datos de los productos y podes hacer uso del autocomplete de Materializa para hacer una busqueda por nombre de los productos
     */

    $.ajax({
        method: 'GET',
        url: productosURLIndex,
        success: function (respuesta) {
            let dataFormated = formatData(respuesta);
            $('input.autocomplete').autocomplete({
                data: dataFormated
            });
        }
    })


    //////////////////////  MENÚ DE NAVEGACIÓN  //////////////////////

    menuButton.click(() => {
        if (menu.attr('class') === 'menu oculto') {
            menu.removeClass('oculto')
        } else {
            menu.addClass('oculto')
        }
    })

    liCategoria.click(() => {
        let contenido = listCategoria.prop("scrollHeight");
        liCategoria.toggleClass('open');
        if (liCategoria.attr('class') === "menu__link open") {
            listCategoria.css('max-height',contenido);
            listCategoria.addClass('listCategoria--mostrar');
        } else {
            listCategoria.removeAttr('style');
            listCategoria.removeClass('listCategoria--mostrar');
        }
    })



    //////////////////////  CONSULTAS CONTACTO  //////////////////////

    /**
     * Descripción: Uso del método POST para enviar los datos de un formulario para luego mostrar un mensaje de confirmación cuando se envíen los datos.
     * @param {Object} nuevoMensaje: Objeto donde guardo los datos que el usuario ingresó en el formulario.
     */

    const postContactURL = "https://jsonplaceholder.typicode.com/posts"


    buttonSendContact.click((e) => {
        e.preventDefault();
        let nuevoMensaje = {
            nombreUsuario: userName.val(),
            apellidoUsuario: userLastName.val(),
            emailUsuario: userEmail.val(),
            mensajeUsuario: mensaje.val()
        }
        $.ajax({
            method: "POST",
            url: postContactURL,
            data: nuevoMensaje,
            success: function (respuesta) {
                $('#contactoMain').append(`
                <div id="msjSuccess" class="msjSuccess">
                    <h4>¡Hemos recibido tu consulta!</h4>
                    <p>Te responderemos a la brevedad</p>
                </div>
                `)
                $('#msjSuccess').fadeIn(300).delay(3000).fadeOut(300);
                setTimeout(() => {
                    $('#msjSuccess').remove()
                    userName.val(""),
                        userLastName.val(""),
                        userEmail.val(""),
                        mensaje.val("")
                },3600);
            }
        })
    })



});