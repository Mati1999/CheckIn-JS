$(() => {


    //////////////////////  MENÚ DE NAVEGACIÓN  //////////////////////

    menuButton.click(() => {
        menuButton.toggleClass('active');
        if (menu.attr('class') === 'menu oculto') {
            menu.removeClass('oculto');
            carritoGeneral.addClass('oculto');
        } else {
            menu.addClass('oculto');
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



    const botonCarrito = $('#carritoCompra');
    const carritoGeneral = $('#carritoGeneral');
    botonCarrito.click(() => {
        carritoGeneral.toggleClass('oculto');
        menu.addClass('oculto');
        menuButton.removeClass('active');

    })

    const cerrarCarrito = $('#cerrarCarrito');
    cerrarCarrito.click(() => {
        carritoGeneral.toggleClass('oculto');
    })


})