$(() => {



    //Veo si se ha hecho una compra o no
    if (localStorage.getItem('compra') == null || localStorage.getItem('compra') == 'false') {
        localStorage.setItem('compra',false);
    } else if (localStorage.getItem('compra') == 'true' && Object.keys(JSON.parse(localStorage.getItem('carrito'))).length > 0) {
        let carritoArtificial = {};
        localStorage.setItem('carrito',JSON.stringify(carritoArtificial));
    }

    //REVISO SI YA ESTÁ INICIADA LA SESIÓN
    if (JSON.parse(localStorage.getItem('usuario')) == null || JSON.parse(localStorage.getItem('usuario')).sesionIniciada == false) {
        btnNombreInicioSesion.val('Inicia Sesión');
    } else {
        btnNombreInicioSesion.val(JSON.parse(localStorage.getItem('usuario')).usuario);
    }


    if (JSON.parse(localStorage.getItem('carrito')) == null) {
        let carritoArtificial = {};
        localStorage.setItem('carrito',JSON.stringify(carritoArtificial));
    }




})