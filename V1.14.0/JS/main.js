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

    const productosURL = "data/productos.json";
    const productosURLIndex = "data/productos.json";
    let productos = [];


    let formatData = (data) => {
        let dataFormated = {}
        data.forEach(item => {
            dataFormated[item.nombre] = null;
        })
        return dataFormated;
    }

    /**
     * Descripción: Uso del metodo GET para traer los productos de un .json estático (productos.json), para poder usarlos en mi HTML.
     */

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
            let nombreProductoBuscador;
            let cantidadProdBuscados;
            /**
             * Descipción: En esta función utilizo la API de autocomplete para poder usarla en el buscador de mi sitioweb que me permite buscar los nombres de los productos y luego de seleccionarlos, hago click en el buscador y luego "Enter" para que me redirija a la página donde está ese producto.
             */

            $('#autocomplete-input').keypress((e) => {
                if (e.which === 13) {
                    nombreProductoBuscador = e.target.value;
                    cantidadProdBuscados = productos.filter(prod => prod.nombre === nombreProductoBuscador);
                    let categoriaProdBuscador = cantidadProdBuscados[0].categoria;
                    if (cantidadProdBuscados.length >= 1) {
                        console.log(categoriaProdBuscador);
                        switch (categoriaProdBuscador) {
                            case "indumentaria":
                                linkIndumentaria[0].click();
                                break;
                            case "equipaje":
                                linkEquipaje[0].click();
                                break;
                            case "comodidad":
                                linkComodidad[0].click();
                                break;
                            case "tecnologia":
                                linkTecnologia[0].click();
                                break;
                            default:
                                break;
                        }
                    }
                }
                $("document").ready(() => {
                    setTimeout(() => {
                        $(`${nombreProductoBuscador}`)[0].click();
                        console.log($(`${nombreProductoBuscador}`));
                    },1000);
                })
            })


            //////////////////  AGREGAR PRODUCTOS AL HTML DE FORMA DINÁMICA A TRAVEZ DE UN JSON ESTÁTICO  //////////////////

            /**
             * Descripción: Del array de productos, hago un filtrado de los productos por categoría y los guardo en variables.
             */
            let productosInd = productos.filter(prod => prod.categoria === "indumentaria");
            let productosEquip = productos.filter(prod => prod.categoria === "equipaje");
            let productosComod = productos.filter(prod => prod.categoria === "comodidad");
            let productosTec = productos.filter(prod => prod.categoria === "tecnologia");
            let productosOferta = productos.filter(prod => prod.oferta === true);
            let productosMasVendidos = productos.filter(prod => prod.masVendido === true);

            ////////////////   INDUMENTARIA   ////////////////

            const crearProductos = (contenedorProd,productos) => {

                for (let i = 0; i < productos.length; i++) {

                    // Creo un boton para ingresar los datos del producto en el html
                    contenedorProd.append(`
                    <button type='button' id="${productos[i].nombre}" class='btn p-0 indexMain__modalProducto my-3 mx-1 col-lg-2 col-md-3 col-sm-5 col-5' data-bs-toggle='modal' data-bs-target='#producto_${productos[i].categoria}${i + 1}'>
                        <div id="${productos[i].id}" class="producto">
                            <img src="images/${productos[i].categoria}/${productos[i].imagen}.jpg" alt="producto${i + 1}">
                            <div class="producto__info">
                                <h5>${productos[i].nombre}</h5>
                                <span>$${productos[i].precio}</span>
                            </div>
                        </div>
                    </button>
                    `);

                    // A travez del un if ternario me fijo si el producto tiene talle o no, si tiene, muestro el modal con las opciones de talles y sino no lo muestro

                    if (productos[i].talles.length > 3) {

                        contenedorProd.append(`
                            <div class='modal fade modalProducto' tabindex='-1' aria-hidden='true' id='producto_${productos[i].categoria}${i + 1}' aria-labelledby='producto_${productos[i].categoria}${i + 1}Label'>
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="card tarjetaModal">
                                <img src="images/${productos[i].categoria}/${productos[i].imagen}.jpg"
                                    class="card-img-top tarjetaModal__img" alt="...">
                                <div class="card-body tarjetaModal__info">
                                    <h5 class="card-title tarjetaModal__nombre">${productos[i].nombre}</h5>
                                    <p class="card-text tarjetaModal__description">${productos[i].descripcion}
                                    </p>
                                    <div class="tarjetaModal__talles">
                                        <h5>Talle</h5>
                                        <div class="tarjetaModal__talle talleSelectedContainer">
                                            <div>
                                                <input class="" type="radio" name="talle" id="small${i + 1}">
                                                <label for="small${i + 1}">${productos[i].talles[0]}</label>
                                            </div>
                                            <div>
                                                <input class="" type="radio" name="talle" id="medium${i + 1}">
                                                <label for="medium${i + 1}">${productos[i].talles[1]}</label>
                                            </div>
                                            <div>
                                                <input class="" type="radio" name="talle" id="large${i + 1}">
                                                <label for="large${i + 1}">${productos[i].talles[2]}</label>
                                            </div>
                                            <div>
                                                <input class="" type="radio" name="talle" id="Xlarge${i + 1}">
                                                <label for="Xlarge${i + 1}">${productos[i].talles[3]}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="tarjetaModal__precio">$${productos[i].precio}</span>
                                    <a id="${i + 1}" class="btn tarjetaModal__boton agregarCarrito" data-id="${i + 1}">Agregar al carrito</a>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        `);

                    } else if (productos[i].talles.length > 2) {

                        contenedorProd.append(`
                            <div class='modal fade modalProducto' tabindex='-1' aria-hidden='true' id='producto_${productos[i].categoria}${i + 1}' aria-labelledby='producto_${productos[i].categoria}${i + 1}Label'>
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="card tarjetaModal">
                                <img src="images/${productos[i].categoria}/${productos[i].imagen}.jpg"
                                    class="card-img-top tarjetaModal__img" alt="...">
                                <div class="card-body tarjetaModal__info">
                                    <h5 class="card-title tarjetaModal__nombre">${productos[i].nombre}</h5>
                                    <p class="card-text tarjetaModal__description">${productos[i].descripcion}
                                    </p>
                                    <div class="tarjetaModal__talles">
                                        <h5>Talle</h5>
                                        <div class="tarjetaModal__talle talleSelectedContainer">
                                            <div>
                                                <input class="" type="radio" name="talle" id="small${i + 1}">
                                                <label for="small${i + 1}">${productos[i].talles[0]}</label>
                                            </div>
                                            <div>
                                                <input class="" type="radio" name="talle" id="medium${i + 1}">
                                                <label for="medium${i + 1}">${productos[i].talles[1]}</label>
                                            </div>
                                            <div>
                                                <input class="" type="radio" name="talle" id="large${i + 1}">
                                                <label for="large${i + 1}">${productos[i].talles[2]}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="tarjetaModal__precio">$${productos[i].precio}</span>
                                    <a id="${i + 1}" class="btn tarjetaModal__boton agregarCarrito" data-id="${i + 1}">Agregar al carrito</a>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        `);

                    } else {

                        contenedorProd.append(`
                            <div class='modal fade modalProducto' tabindex='-1' aria-hidden='true' id='producto_${productos[i].categoria}${i + 1}'                    aria-labelledby='producto_${productos[i].categoria}${i + 1}Label'>
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="card tarjetaModal">
                                    <img src="images/${productos[i].categoria}/${productos[i].imagen}.jpg"
                                        class="card-img-top tarjetaModal__img" alt="...">
                                    <div class="card-body tarjetaModal__info">
                                        <h5 class="card-title tarjetaModal__nombre">${productos[i].nombre}</h5>
                                        <p class="card-text tarjetaModal__description">${productos[i].descripcion}</p>
                                        <span class="tarjetaModal__precio">$${productos[i].precio}</span>
                                    <a id="${i + 1}" class="btn tarjetaModal__boton agregarCarrito" data-id="${i + 1}">Agregar al carrito</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        `);

                    }

                }

            }
            crearProductos(contProdInd,productosInd)
            crearProductos(contProdEquip,productosEquip)
            crearProductos(contProdComod,productosComod)
            crearProductos(contProdTec,productosTec)

            //////////////// CREACIÓN DE PRODUCTOS DE LA SECCIÓN DE LO MAS VENDIDO Y OFERTAS  ////////////////

            const crearProductosMasVendYOfert = (contenedorProd,productos) => {

                if (productos == productosOferta) {
                    productos.map(prod => prod.precio -= (prod.precio * 0.2));
                }

                for (let i = 0; i < productos.length; i++) {
                    // Creo un boton para ingresar los datos del producto en el html

                    contenedorProd.append(`
                    <button type="button"
                    class="btn p-0 loMasVendidoMain__modalProducto my-3 mx-1 col-lg-2 col-md-3 col-sm-5 col-5"
                    data-bs-toggle="modal" data-bs-target="#producto_${productos[i].categoria}${i + 1}">
                    <div id="${productos[i].id}" class="producto producto--destacado">
                        <div class="producto__numeroTop">
                            <span>#${i + 1}</span>
                        </div>
                        <img src="images/${productos[i].categoria}/${productos[i].imagen}.jpg" alt="Indumentaria">
                        <div class="producto__info">
                            <h5>${productos[i].nombre}</h5>
                            <span>$${productos[i].precio}</span>
                        </div>
                    </div>
                </button>
                    `);

                    // A travez del un if me fijo si el producto tiene talle o no, si tiene, muestro el modal con las opciones de talles y sino no lo muestro

                    if (productos[i].talles.length > 3) {

                        contenedorProd.append(`
                                <div class='modal fade modalProducto' tabindex='-1' aria-hidden='true' id='producto_${productos[i].categoria}${i + 1}' aria-labelledby='producto_${productos[i].categoria}${i + 1}Label'>
                            <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="card tarjetaModal">
                                    <img src="images/${productos[i].categoria}/${productos[i].imagen}.jpg"
                                        class="card-img-top tarjetaModal__img" alt="...">
                                    <div class="card-body tarjetaModal__info">
                                        <h5 class="card-title tarjetaModal__nombre">${productos[i].nombre}</h5>
                                        <p class="card-text tarjetaModal__description">${productos[i].descripcion}
                                        </p>
                                        <div class="tarjetaModal__talles">
                                            <h5>Talle</h5>
                                            <div class="tarjetaModal__talle talleSelectedContainer">
                                                <div>
                                                    <input class="" type="radio" name="talle" id="small${i + 1}">
                                                    <label for="small${i + 1}">${productos[i].talles[0]}</label>
                                                </div>
                                                <div>
                                                    <input class="" type="radio" name="talle" id="medium${i + 1}">
                                                    <label for="medium${i + 1}">${productos[i].talles[1]}</label>
                                                </div>
                                                <div>
                                                    <input class="" type="radio" name="talle" id="large${i + 1}">
                                                    <label for="large${i + 1}">${productos[i].talles[2]}</label>
                                                </div>
                                                <div>
                                                    <input class="" type="radio" name="talle" id="Xlarge${i + 1}">
                                                    <label for="Xlarge${i + 1}">${productos[i].talles[3]}</label>
                                                </div>
                                            </div>
                                        </div>
                                        <span class="tarjetaModal__precio">$${productos[i].precio}</span>
                                        <a id="${i + 1}" class="btn tarjetaModal__boton agregarCarrito" data-id="${i + 1}">Agregar al carrito</a>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        `);

                    } else if (productos[i].talles.length > 2) {

                        contenedorProd.append(`
                            <div class='modal fade modalProducto' tabindex='-1' aria-hidden='true' id='producto_${productos[i].categoria}${i + 1}' aria-labelledby='producto_${productos[i].categoria}${i + 1}Label'>
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="card tarjetaModal">
                                <img src="images/${productos[i].categoria}/${productos[i].imagen}.jpg"
                                    class="card-img-top tarjetaModal__img" alt="...">
                                <div class="card-body tarjetaModal__info">
                                    <h5 class="card-title tarjetaModal__nombre">${productos[i].nombre}</h5>
                                    <p class="card-text tarjetaModal__description">${productos[i].descripcion}
                                    </p>
                                    <div class="tarjetaModal__talles">
                                        <h5>Talle</h5>
                                        <div class="tarjetaModal__talle talleSelectedContainer">
                                            <div>
                                                <input class="" type="radio" name="talle" id="small${i + 1}">
                                                <label for="small${i + 1}">${productos[i].talles[0]}</label>
                                            </div>
                                            <div>
                                                <input class="" type="radio" name="talle" id="medium${i + 1}">
                                                <label for="medium${i + 1}">${productos[i].talles[1]}</label>
                                            </div>
                                            <div>
                                                <input class="" type="radio" name="talle" id="large${i + 1}">
                                                <label for="large${i + 1}">${productos[i].talles[2]}</label>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="tarjetaModal__precio">$${productos[i].precio}</span>
                                    <a id="${i + 1}" class="btn tarjetaModal__boton agregarCarrito" data-id="${i + 1}">Agregar al carrito</a>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        `);

                    } else {

                        contenedorProd.append(`
                            <div class='modal fade modalProducto' tabindex='-1' aria-hidden='true' id='producto_${productos[i].categoria}${i + 1}' aria-labelledby='producto_${productos[i].categoria}${i + 1}Label'>
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="card tarjetaModal">
                                    <img src="images/${productos[i].categoria}/${productos[i].imagen}.jpg"
                                        class="card-img-top tarjetaModal__img" alt="...">
                                    <div class="card-body tarjetaModal__info">
                                        <h5 class="card-title tarjetaModal__nombre">${productos[i].nombre}</h5>
                                        <p class="card-text tarjetaModal__description">${productos[i].descripcion}</p>
                                        <span class="tarjetaModal__precio">$${productos[i].precio}</span>
                                    <a id="${i + 1}" class="btn tarjetaModal__boton agregarCarrito" data-id="${i + 1}">Agregar al carrito</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        `);

                    }

                }

            }

            crearProductosMasVendYOfert(contProdMasVendido,productosMasVendidos);
            crearProductosMasVendYOfert(contProdOferta,productosOferta);


            ////////////////   CARRITO DE COMPRA   ////////////////

            /**
             * Descripción: En esta función busco atraves del producto que quiero agregar al carrito el talle de ese producto. Para luego guardarlo en una variable y usarlo luego.
             * @param {String} talleElegido: Variable donde guardo el talle del producto que voy a agregar al carrito.
             */
            const talleSelectedContainer = $('.talleSelectedContainer');
            let talleElegido;
            talleSelectedContainer.each((ind,element) => {
                $(element).find('div').each((indice,item) => {
                    $(item).find('input').click(e => {
                        $(element).find('div').each((indice,item) => {
                            $(item).find('input').removeClass('elegido')
                        })
                        if ($(e.target).attr('class') === '') {
                            talleElegido = $(e.target).siblings().text();
                            $(e.target).addClass('elegido');
                        }
                    })
                });
            })

            /**
             * Descipción: Le coloco el evento click a los comtenedores los productos para que cuando se haga click en el boton "Agregar producto", se agregue el producto en el carrito.
             * @param {object} carrito: Creo un objeto donde voy a agregar los productos en el carrito.
             */
            let carrito = {};
            const clickAgregarCarrito = (contenedor) => {
                contenedor.click(e => {
                    agregarAlCarrito(e);
                })
            }
            clickAgregarCarrito(contProdInd);
            clickAgregarCarrito(contProdEquip);
            clickAgregarCarrito(contProdComod);
            clickAgregarCarrito(contProdTec);
            clickAgregarCarrito(contProdMasVendido);
            clickAgregarCarrito(contProdOferta);

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
             * @param {object} carritoNuevo: Traigo desde el localStorage el carrito que está creado para poder usarlo.
             IMPORTANTE:
             Si en el caso de que no se haya ejecutado el click de eliminar un producto. Cuando yo agreguego un producto nuevo, llamo la función eliminarProducto, y esta función me va a traer el carritoNuevo siempre con los elementos eliminados.
             */
            let carritoNuevo = JSON.parse(localStorage.getItem('carrito'));
            const setCarrito = objeto => {
                localStorage.setItem('carrito',JSON.stringify(carritoNuevo));
                if (localStorage.getItem('compra') == 'true') {
                    let carritoDespuesDeComprar = {};
                    localStorage.setItem('carrito',JSON.stringify(carritoDespuesDeComprar));
                    carritoNuevo = JSON.parse(localStorage.getItem('carrito'));
                    localStorage.setItem('compra',false);
                } else {
                    localStorage.setItem('carrito',JSON.stringify(carritoNuevo));
                    carritoNuevo = JSON.parse(localStorage.getItem('carrito'));
                }

                const producto = {
                    id: $(objeto).find('div').find('a').data('id'),
                    imagen: $(objeto).find('img').attr("src"),
                    nombre: $(objeto).find('div').find('.tarjetaModal__nombre').text(),
                    talle: $(objeto).find('div').find('div').find('div').find('div>input.elegido').siblings().text(),
                    talleID: $(objeto).find('div').find('div').find('div').find('div>input.elegido').attr('id'),
                    precio: $(objeto).find('div').find('span').text().slice(1),
                    cantidad: 1
                }


                /**
                 * Descipción: Si un producto  no tiene talle (mochila por ejemplo), se crea el talle como el id de ese producto
                 */
                if (producto.talleID == undefined) {
                    producto.talleID = producto.id
                }

                eliminarProducto(carritoNuevo,carrito);
                if (carritoNuevo.hasOwnProperty(producto.id + producto.talleID + producto.imagen)) {
                    producto.cantidad = carritoNuevo[producto.id + producto.talleID + producto.imagen].cantidad + 1;
                }

                carritoNuevo[producto.id + producto.talleID + producto.imagen] = { ...producto };
                localStorage.setItem('carrito',JSON.stringify(carritoNuevo));
                pintarCarrito(carritoNuevo);
            }

            /**
             * Descripción: En esta función recibo el carrito y luego itero sobre él para poder ingresar por html los productos dentro de él.
             */
            const pintarCarrito = (carrito) => {
                carritoBody.text(``);
                Object.values(carrito).forEach(producto => {

                    if (producto.talle == "") {
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
                <input type="button" class="botonEliminar" id="eliminarProducto" value="X" data-id="${producto.talleID + producto.imagen}">
         </div>
        `);
                    } else {
                        carritoBody.append(`
                <div class='productoCarrito' id='producto${producto.id}'>
                    <div class="productoCarrito__imgContainer">
                        <img id="prodCarritoImg" src="${producto.imagen}" alt=""
                        class="productoCarrito__img">
                    </div>
                    <div class="productoCarrito__info">
                        <h4 id="prodCarritoNombre" class="productoCarrito__nombre">${producto.nombre}</h4>
                        <span id="prodCarritoPrecio" class="productoCarrito__precio">Precio:$${producto.precio}</span>
                        <span id="prodCarritoTalle" class="productoCarrito__talle">Talle: ${producto.talle}</span>
                        <p>Cantidad: ${producto.cantidad}</p>
                        <h5>Total: $${producto.precio * producto.cantidad} </h5>
                    </div>
                    <input type="button" class="botonEliminar" id="eliminarProducto" value="X" data-id="${producto.talleID + producto.imagen}">
             </div>
            `);
                    }



                })

                let total = 0;
                Object.values(carritoNuevo).forEach(item => {
                    total += parseInt(item.precio * item.cantidad);
                })
                totalCarrito.html(`
                    $${total}
                `)
                const obtenerTotal = () => {
                    return total;
                }


                const botonEliminar = $(".botonEliminar");

                botonEliminar.each(function (ind,element) {
                    eliminarProducto(element,carrito);
                    console.log(carrito);
                })

            }


            /**
             * Descripción: En esta función obtengo el boton para eliminar un producto y tambien el carrito. Dentro de la misma ejecuto un for donde itero sobre el array de todos los botones para pasarles el evento "Click" que hace posible la eliminación del producto. Luego filtro el carrito con los producto que tengan el id distinto al que yo quiero eliminar y luego ejecuto la función pintarCarrito() y le paso el carrito nuevo para que se pinte en el html el carrito sin el producto eliminado.
             La función me va a retornar el carrito nuevo aunque no elimine un producto, ya que me permite verificar si se ha eliminado o no un producto y le mando el carritoNuevo a la función setProducto() para que este pueda agregar un producto nuevo.
             */
            const eliminarProducto = (botonEliminar,carrito) => {
                $(botonEliminar).click(e => {
                    carritoNuevo = Object.values(carrito).filter(i => (i.talleID + i.imagen) !== ($(botonEliminar).data('id')));
                    if (Object.keys(carritoNuevo).length == 0 || carritoNuevo.length == 0) {
                        carritoNuevo = {};
                        localStorage.setItem('carrito',JSON.stringify(carritoNuevo));
                        pintarCarrito(carritoNuevo);
                    } else {
                        localStorage.setItem('carrito',JSON.stringify(carritoNuevo));
                        pintarCarrito(carritoNuevo);
                    }
                })
                carritoNuevo = Object.assign({},carritoNuevo);
                console.log(carritoNuevo);
                return carritoNuevo;
            }

            if (Object.keys(JSON.parse(localStorage.getItem('carrito'))).length != 0) {
                pintarCarrito(JSON.parse(localStorage.getItem('carrito')));
            }

        }

    })


    //////////////////////  INDEX  //////////////////////


    ////////////////////// CREACIÓN DE PRODUCTOS PARA EL INDEX //////////////////////

    $.get(productosURLIndex,(respuesta,estado) => {
        if (estado === "success") {
            productos = respuesta;
        }

        /**
        * Descripción: Del array de productos, hago un filtrado de los productos por categoría y l/guardo en variables.
        */

        let productosInd = productos.filter(prod => prod.categoria === "indumentaria");
        let productosOferta = productos.filter(prod => prod.oferta === true);
        let productosMasVendidos = productos.filter(prod => prod.masVendido === true);

        const crearProductosIndex = (contenedorProd,productos) => {


            if (productos == productosOferta) {
                productos.map(prod => prod.precio -= (prod.precio * 0.2));
            }

            for (let i = 0; i < 5; i++) {
                // Creo un boton para ingresar los datos del producto en el html
                contenedorProd.append(`
            <button type="button"
            class="btn p-0 loMasVendidoMain__modalProducto my-3 mx-1 col-lg-2 col-md-3 col-sm-5 col-5"
            data-bs-toggle="modal" data-bs-target="#producto_${productos[i].categoria}${productos[i].id}${i + 1}">
            <div id="${productos[i].id}" class="producto producto--destacado">
                <div class="producto__numeroTop">
                    <span>#${i + 1}</span>
                </div>
                <img src="images/${productos[i].categoria}/${productos[i].imagen}.jpg" alt="Indumentaria">
                <div class="producto__info">
                    <h5>${productos[i].nombre}</h5>
                    <span>$${productos[i].precio}</span>
                </div>
            </div>
        </button>
            `);

                // A travez del un if ternario me fijo si el producto tiene talle o no, si tiene, muestro el modal con las opciones de talles y sino no lo muestro

                if (productos[i].talles.length > 3) {

                    contenedorProd.append(`
                        <div class='modal fade modalProducto' tabindex='-1' aria-hidden='true' id='producto_${productos[i].categoria}${productos[i].id}${i + 1}' aria-labelledby='producto_${productos[i].categoria}${productos[i].id}${i + 1}Label'>
                    <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="card tarjetaModal">
                            <img src="images/${productos[i].categoria}/${productos[i].imagen}.jpg"
                                class="card-img-top tarjetaModal__img" alt="...">
                            <div class="card-body tarjetaModal__info">
                                <h5 class="card-title tarjetaModal__nombre">${productos[i].nombre}</h5>
                                <p class="card-text tarjetaModal__description">${productos[i].descripcion}
                                </p>
                                <div class="tarjetaModal__talles">
                                    <h5>Talle</h5>
                                    <div class="tarjetaModal__talle talleSelectedContainer">
                                        <div>
                                            <input class="" type="radio" name="talle" id="small${i + 1}">
                                            <label for="small${i + 1}">${productos[i].talles[0]}</label>
                                        </div>
                                        <div>
                                            <input class="" type="radio" name="talle" id="medium${i + 1}">
                                            <label for="medium${i + 1}">${productos[i].talles[1]}</label>
                                        </div>
                                        <div>
                                            <input class="" type="radio" name="talle" id="large${i + 1}">
                                            <label for="large${i + 1}">${productos[i].talles[2]}</label>
                                        </div>
                                        <div>
                                            <input class="" type="radio" name="talle" id="Xlarge${i + 1}">
                                            <label for="Xlarge${i + 1}">${productos[i].talles[3]}</label>
                                        </div>
                                    </div>
                                </div>
                                <span class="tarjetaModal__precio">$${productos[i].precio}</span>
                                <a id="${i + 1}" class="btn tarjetaModal__boton agregarCarrito" data-id="${i + 1}">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                `);

                } else if (productos[i].talles.length > 2) {

                    contenedorProd.append(`
                    <div class='modal fade modalProducto' tabindex='-1' aria-hidden='true' id='producto_${productos[i].categoria}${productos[i].id}${i + 1}' aria-labelledby='producto_${productos[i].categoria}${productos[i].id}${i + 1}Label'>
                <div class="modal-dialog">
                <div class="modal-content">
                    <div class="card tarjetaModal">
                        <img src="images/${productos[i].categoria}/${productos[i].imagen}.jpg"
                            class="card-img-top tarjetaModal__img" alt="...">
                        <div class="card-body tarjetaModal__info">
                            <h5 class="card-title tarjetaModal__nombre">${productos[i].nombre}</h5>
                            <p class="card-text tarjetaModal__description">${productos[i].descripcion}
                            </p>
                            <div class="tarjetaModal__talles">
                                <h5>Talle</h5>
                                <div class="tarjetaModal__talle talleSelectedContainer">
                                    <div>
                                        <input class="" type="radio" name="talle" id="small${i + 1}">
                                        <label for="small${i + 1}">${productos[i].talles[0]}</label>
                                    </div>
                                    <div>
                                        <input class="" type="radio" name="talle" id="medium${i + 1}">
                                        <label for="medium${i + 1}">${productos[i].talles[1]}</label>
                                    </div>
                                    <div>
                                        <input class="" type="radio" name="talle" id="large${i + 1}">
                                        <label for="large${i + 1}">${productos[i].talles[2]}</label>
                                    </div>
                                </div>
                            </div>
                            <span class="tarjetaModal__precio">$${productos[i].precio}</span>
                            <a id="${i + 1}" class="btn tarjetaModal__boton agregarCarrito" data-id="${i + 1}">Agregar al carrito</a>
                        </div>
                    </div>
                </div>
                </div>
                </div>
                `);

                } else {

                    contenedorProd.append(`
                    <div class='modal fade modalProducto' tabindex='-1' aria-hidden='true' id='producto_${productos[i].categoria}${productos[i].id}${i + 1}' aria-labelledby='producto_${productos[i].categoria}${productos[i].id}${i + 1}Label'>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="card tarjetaModal">
                            <img src="images/${productos[i].categoria}/${productos[i].imagen}.jpg"
                                class="card-img-top tarjetaModal__img" alt="...">
                            <div class="card-body tarjetaModal__info">
                                <h5 class="card-title tarjetaModal__nombre">${productos[i].nombre}</h5>
                                <p class="card-text tarjetaModal__description">${productos[i].descripcion}</p>
                                <span class="tarjetaModal__precio">$${productos[i].precio}</span>
                            <a id="${i + 1}" class="btn tarjetaModal__boton agregarCarrito" data-id="${i + 1}">Agregar al carrito</a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                `);

                }

            }

        }
        crearProductosIndex(contProdIndexOferta,productosOferta);
        crearProductosIndex(contProdIndexInd,productosInd);
        crearProductosIndex(contProdIndexMasVendido,productosMasVendidos);


        //////////////////////  CARRITO DE COMPRA  //////////////////////

        const talleSelectedContainer = $('.talleSelectedContainer');
        let talleElegido;
        talleSelectedContainer.each((ind,element) => {
            $(element).find('div').each((indice,item) => {
                $(item).find('input').click(e => {
                    $(element).find('div').each((indice,item) => {
                        $(item).find('input').removeClass('elegido')
                    })
                    if ($(e.target).attr('class') === '') {
                        talleElegido = $(e.target).siblings().text();
                        $(e.target).addClass('elegido');
                    }
                })
            });
        })

        /**
         * Descipción: A contProdInd le coloco el evento click para que cuando se haga click en el boton "Agregar producto", se agregue el producto en el carrito.
         * @param {object} carrito: Creo un objeto donde voy a agregar los productos en el carrito.
         */
        let carrito = {};
        const clickAgregarCarrito = (contenedor) => {
            contenedor.click(e => {
                agregarAlCarrito(e);
            })
        }
        clickAgregarCarrito(contProdIndexOferta);
        clickAgregarCarrito(contProdIndexInd);;
        clickAgregarCarrito(contProdIndexMasVendido);
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
         * @param {object} carritoNuevo: Creo un objeto donde se van a ingresar los productos luego de haber comprobado si se eliminaron antes algunos o no.
         IMPORTANTE:
         Si en el caso de que no se haya ejecutado el click de eliminar un producto. Cuando yo agreguego un producto nuevo, llamo la función eliminarProducto, y esta función me va a traer el carritoNuevo siempre con los elementos eliminados.
         */
        let carritoNuevo = JSON.parse(localStorage.getItem('carrito'));
        const setCarrito = objeto => {
            localStorage.setItem('carrito',JSON.stringify(carritoNuevo));
            if (localStorage.getItem('compra') == 'true') {
                let carritoDespuesDeComprar = {};
                localStorage.setItem('carrito',JSON.stringify(carritoDespuesDeComprar));
                carritoNuevo = JSON.parse(localStorage.getItem('carrito'));
                localStorage.setItem('compra',false);
            } else {
                localStorage.setItem('carrito',JSON.stringify(carritoNuevo));
                carritoNuevo = JSON.parse(localStorage.getItem('carrito'));
            }

            const producto = {
                id: $(objeto).find('div').find('a').data('id'),
                imagen: $(objeto).find('img').attr("src"),
                nombre: $(objeto).find('div').find('.tarjetaModal__nombre').text(),
                talle: $(objeto).find('div').find('div').find('div').find('div>input.elegido').siblings().text(),
                talleID: $(objeto).find('div').find('div').find('div').find('div>input.elegido').attr('id'),
                precio: $(objeto).find('div').find('span').text().slice(1),
                cantidad: 1
            }

            /**
                 * Descipción: Si un producto  no tiene talle (mochila por ejemplo), se crea el talle como el id de ese producto
                 */
            if (producto.talleID == undefined) {
                producto.talleID = producto.id
            }

            eliminarProducto(carritoNuevo,carrito);
            if (carritoNuevo.hasOwnProperty(producto.id + producto.talleID + producto.imagen)) {
                producto.cantidad = carritoNuevo[producto.id + producto.talleID + producto.imagen].cantidad + 1;
            }

            carritoNuevo[producto.id + producto.talleID + producto.imagen] = { ...producto };
            localStorage.setItem('carrito',JSON.stringify(carritoNuevo));
            pintarCarrito(carritoNuevo);
        }

        /**
         * Descripción: En esta función recibo el carrito y luego itero sobre él para poder ingresar por html los productos dentro de él.
         */
        const pintarCarrito = (carrito) => {
            carritoBody.text(``);
            Object.values(carrito).forEach(producto => {

                if (producto.talle == "") {
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
    <input type="button" class="botonEliminar" id="eliminarProducto" value="X" data-id="${producto.talleID + producto.imagen}">
</div>
`);
                } else {
                    carritoBody.append(`
    <div class='productoCarrito' id='producto${producto.id}'>
        <div class="productoCarrito__imgContainer">
            <img id="prodCarritoImg" src="${producto.imagen}" alt=""
            class="productoCarrito__img">
        </div>
        <div class="productoCarrito__info">
            <h4 id="prodCarritoNombre" class="productoCarrito__nombre">${producto.nombre}</h4>
            <span id="prodCarritoPrecio" class="productoCarrito__precio">Precio:$${producto.precio}</span>
            <span id="prodCarritoTalle" class="productoCarrito__talle">Talle: ${producto.talle}</span>
            <p>Cantidad: ${producto.cantidad}</p>
            <h5>Total: $${producto.precio * producto.cantidad} </h5>
        </div>
        <input type="button" class="botonEliminar" id="eliminarProducto" value="X" data-id="${producto.talleID + producto.imagen}">
 </div>
`);
                }



            })

            let total = 0;
            Object.values(carritoNuevo).forEach(item => {
                total += parseInt(item.precio * item.cantidad);
            })
            totalCarrito.html(`
        $${total}
    `)


            const botonEliminar = $(".botonEliminar");

            botonEliminar.each(function (ind,element) {
                eliminarProducto(element,carrito);
                console.log(carrito);
            })


        }

        /**
         * Descripción: En esta función obtengo el boton para eliminar un producto y tambien el carrito. Dentro de la misma ejecuto un for donde itero sobre el array de todos los botones para pasarles el evento "Click" que hace posible la eliminación del producto. Luego filtro el carrito con los producto que tengan el id distinto al que yo quiero eliminar y luego ejecuto la función pintarCarrito() y le paso el carrito nuevo para que se pinte en el html el carrito sin el producto eliminado.
         La función me va a retornar el carrito nuevo aunque no elimine un producto, ya que me permite verificar si se ha eliminado o no un producto y le mando el carritoNuevo a la función setProducto() para que este pueda agregar un producto nuevo.
         */
        const eliminarProducto = (botonEliminar,carrito) => {
            $(botonEliminar).click(e => {
                console.log(carritoNuevo);
                carritoNuevo = Object.values(carrito).filter(i => (i.talleID + i.imagen) !== ($(botonEliminar).data('id')));
                if (Object.keys(carritoNuevo).length == 0 || carritoNuevo.length == 0) {
                    carritoNuevo = {};
                    localStorage.setItem('carrito',JSON.stringify(carritoNuevo));
                    pintarCarrito(carritoNuevo);
                } else {
                    localStorage.setItem('carrito',JSON.stringify(carritoNuevo));
                    pintarCarrito(carritoNuevo);
                }
            })
            carritoNuevo = Object.assign({},carritoNuevo);
            return carritoNuevo;
        }
        if (Object.keys(JSON.parse(localStorage.getItem('carrito'))).length != 0) {
            pintarCarrito(JSON.parse(localStorage.getItem('carrito')));
        }

    })


    //////////////////////  BUSCADOR DE PRODUCTOS PARA EL INDEX  //////////////////////

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

});