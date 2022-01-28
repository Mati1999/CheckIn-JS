$(() => {


    //////////////////////  INICIO DE SESIÓN  //////////////////////

    /**
     * Descripción: En este js creo el fincionamiento del Inicio de sesión, cuando hago click en el "btnModalInicioSesion" verifico si el usuario ya está logeado o no, si lo está muestro el mensaje de cerrar sesión y si no está logeado, le pido que inicie sesión.
     */

    btnModalInicioSesion.click(() => {
        if (JSON.parse(localStorage.getItem('usuario')) == null || JSON.parse(localStorage.getItem('usuario')).sesionIniciada == false) {
            formInicioSesion.toggleClass('ocultarTarjeta');
        } else {
            btnCerrarSesion.toggleClass('ocultarCerrarSesion');
            btnCerrarSesion.click(() => {
                let usuarioLogeado = JSON.parse(localStorage.getItem('usuario'));
                usuarioLogeado['sesionIniciada'] = false;
                localStorage.setItem('usuario',JSON.stringify(usuarioLogeado));
                btnCerrarSesion.toggleClass('ocultarCerrarSesion');
                btnNombreInicioSesion.val('Inicia Sesión')
            })
        }
    })

    /**
     * Descripción: En esta parte cuando hago click en "btnInicioSesion" verifico que todos los inputs estén completos y luego hago el inicio de sesión si los datos están bien.
     */

    btnInicioSesion.click((e) => {
        e.preventDefault();
        if (usuarioInicioSesion.val().length <= 4 || emailInicioSesion.val().length <= 4 || passwordInicioSesion <= 4) {
            mainAll.append(`
                <div class="msjErrorInicioSesion" id="msjErrorInicioSesion">
                    <h4>El nombre y la contraseña tienen que tener mas de 4 caracteres</h4>
                </div>
                `)
            $("#msjErrorInicioSesion").fadeIn(300).delay(3000).fadeOut(200);
            setTimeout(() => {
                $("#msjErrorInicioSesion").remove()
            },3600);
        } else {

            let usuarioLogeado = { usuario: usuarioInicioSesion.val(),sesionIniciada: true }

            localStorage.setItem('usuario',JSON.stringify(usuarioLogeado));
            btnNombreInicioSesion.val(usuarioInicioSesion.val());

            mainAll.append(`
                <div class="msjExitoInicioSesion" id="msjExitoInicioSesion">
                    <h4>BIENVENIDO/A!</h4>
                </div>
                `)
            $("#msjExitoInicioSesion").fadeIn(300).delay(3000).fadeOut(200);
            setTimeout(() => {
                $("#msjExitoInicioSesion").remove()
            },3600);
            formInicioSesion.addClass('ocultarTarjeta');
        }
    })





})