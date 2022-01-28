$(() => {

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




})